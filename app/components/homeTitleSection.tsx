import React from "react";
import { GameState } from "../home/page";

interface Props {
  startNewGameAction: () => void;
  gameState: GameState;
}

export const HomeTitleSection: React.FC<Props> = ({
  startNewGameAction,
  gameState,
}) => {
  return (
    <div className="p-4 w-full flex flex-col items-center justify-normal">
      <span className="text-3xl tsukimi font-bold text-primary my-4">
        {" "}
        Game Of Match
      </span>
      <button
        onClick={startNewGameAction}
        className="text-secondary text-sm font-bold border-2 bg-yellowish border-secondary rounded py-2 px-4 font"
      >
        New Game
      </button>
      {gameState?.cards?.length > 0 && (
        <div className="text-lg font-semibold mt-2 text-primary">
          Turns: {gameState.turns}
        </div>
      )}
    </div>
  );
};
