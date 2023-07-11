"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/store";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Header } from "../components/header";
import { cards } from "../custom/images/images";
import { Card } from "../components/card";
import { WithAnimation } from "../hoc/withAnimation";
import { UseModal } from "../custom/hooks/useModal";
import { WarningModal } from "../components/modals/warningModal";
interface Card {
  src: any;
  matched: boolean;
  type: string;
  id: any;
}

interface GameState {
  cards: Card[];
  turns: number;
  firstCard: Partial<Card>;
  secondCard: Partial<Card>;
  allCardsFlipped: boolean;
  disableClick: boolean;
}

const Page: React.FC = () => {
  const { user, setUser } = useGlobalContext();
  const { modalState, handleModalStateChange } = UseModal();
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    turns: 0,
    firstCard: {},
    secondCard: {},
    allCardsFlipped: true,
    disableClick: false,
  });
  const router = useRouter();

  // UseEffect for checking user
  useEffect(() => {
    // Getting the name of the logged in user
    let loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const startNewGameAction = () => {
    if (gameState.turns > 0) {
      handleModalStateChange();
    } else {
      prepareCards();
    }
  };

  const resetGameState = () => {
    console.log("hello");
    setGameState({
      cards: [],
      turns: 0,
      firstCard: {},
      secondCard: {},
      allCardsFlipped: true,
      disableClick: false,
    });
    handleModalStateChange();
    prepareCards();
  };

  //Prepare cards for the start of the game
  const prepareCards = () => {
    const duplicates: Card[] | any = [...cards, ...cards];
    for (let i = duplicates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [duplicates[i], duplicates[j]] = [duplicates[j], duplicates[i]];
    }
    const cardsWithIds = duplicates?.map((card: Card) => ({
      ...card,
      id: Math.random(),
    }));
    setGameState({
      cards: cardsWithIds,
      turns: 0,
      firstCard: {},
      secondCard: {},
      disableClick: false,
      allCardsFlipped: true,
    });
    setTimeout(() => {
      setGameState({
        turns: 0,
        firstCard: {},
        secondCard: {},
        disableClick: false,
        cards: cardsWithIds,
        allCardsFlipped: false,
      });
    }, 5000);
  };

  // Handle logic when pressing the back of the card
  const handleCardClickAction = (card: Card) => {
    if (gameState.disableClick) {
      return;
    }
    gameState.firstCard?.id
      ? setGameState({
          ...gameState,
          secondCard: card,
        })
      : setGameState({
          ...gameState,
          firstCard: card,
        });
  };

  // Updating matched property for matching cards
  const updateMatchingCards = (card: Partial<Card>) => {
    let arr: Card[] = [];
    gameState.cards?.forEach((c: Card) => {
      if (card?.type === c?.type) {
        arr.push({ ...c, matched: true });
      } else {
        arr.push(c);
      }
    });

    return arr;
  };

  //UseEffect for comparing selected cards
  useEffect(() => {
    const { firstCard, secondCard } = gameState;
    if (firstCard?.id && secondCard?.id) {
      setGameState({ ...gameState, turns: gameState.turns + 1 });
      if (firstCard?.type === secondCard?.type) {
        setGameState({
          ...gameState,
          cards: updateMatchingCards(firstCard),
          firstCard: {},
          secondCard: {},
          turns: gameState.turns + 1,
        });
      } else {
        // disable click action until the 2 unmatched cards flip black
        setGameState({
          ...gameState,
          disableClick: true,
          turns: gameState.turns + 1,
        });
        // reset selected cards after 2 seconds
        setTimeout(() => {
          setGameState({
            ...gameState,
            firstCard: {},
            secondCard: {},
            disableClick: false,
            turns: gameState.turns + 1,
          });
        }, 2000);
      }
    }
  }, [gameState.firstCard, gameState.secondCard]);

  const handleLogoutAction = () => {
    // Removing the logged in user from cookies and redirecting to login
    Cookies.remove("loggedInUser");
    setUser("");
    router.push("/");
  };

  const isCardFlipped = (card: Card) => {
    return (
      (card?.id === gameState.firstCard?.id ||
        card?.id === gameState.secondCard?.id ||
        card?.matched ||
        gameState.allCardsFlipped) ??
      false
    );
  };

  console.log(gameState);
  return (
    <div className="min-h-screen w-full bg-gray-200">
      <Header onLogout={handleLogoutAction} username={user} />
      <div className="p-4 w-full flex flex-col items-center justify-normal">
        <span className="text-3xl tsukimi font-bold text-primary my-4">
          {" "}
          Game Of Match
        </span>
        <button
          onClick={startNewGameAction}
          className="  text-primary text-sm font-semibold border-2 bg-yellowish border-primary rounded py-1 px-4 font"
        >
          New Game
        </button>
        <div>Turns: {gameState.turns}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 m-auto w-full md:w-3/4 p-2 sm:p-10 gap-4">
        {gameState.cards?.length > 0 &&
          gameState.cards.map((card: Card, index: number) => (
            <Card
              index={index}
              handleCardClick={() => handleCardClickAction(card)}
              key={index}
              cardImage={card?.src}
              flipped={isCardFlipped(card)}
            />
          ))}
      </div>
      {modalState && (
        <WarningModal
          handleModalStateChange={handleModalStateChange}
          confirm={resetGameState}
        />
      )}
    </div>
  );
};

export default Page;
