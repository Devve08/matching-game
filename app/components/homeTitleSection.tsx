import React from "react";
import { GameState } from "../home/page";
import { motion } from "framer-motion";
import { AnimatedText } from "./animatedText";

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
      <span className="text-xl md:text=3xl tsukimi font-bold text-primary my-4">
        <AnimatedText text="TEST-YOUR-MEMORY" />
      </span>
      <motion.button
        whileHover={{ scale: 1.05, originY: 0 }}
        transition={{ duration: 0.3 }}
        onClick={startNewGameAction}
        className="text-secondary shadow-md text-sm font-bold border-2 bg-yellowish border-secondary rounded py-2 px-4 font"
      >
        New Game
      </motion.button>
      {gameState?.cards?.length > 0 && (
        <div className="text-lg font-semibold mt-2 text-primary">
          Turns: {gameState.turns}
        </div>
      )}
    </div>
  );
};
