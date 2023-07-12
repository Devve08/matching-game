import Image from "next/image";
import React from "react";
import logo from "../assets/images/logoquiqup.png";
import { motion } from "framer-motion";

interface Props {
  cardImage: string;
  handleCardClick: (card: any) => void;
  flipped: boolean;
  index: number;
}

export const Card: React.FC<Props> = ({
  cardImage,
  handleCardClick,
  flipped,
  index,
}) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.2,
        delay: 0.2 * index,
        type: "spring",
        stiffness: 50,
      }}
      className="flex flex-col items-center justify-center shadow-xl rounded-md relative"
    >
      <div
        className={`w-full h-40 flex justify-center items-center bg-secondary rounded-md shadow-xl absolute ${
          !flipped ? "flipped" : "not-flipped"
        }`}
      >
        <Image
          data-testid="frontimage"
          src={cardImage}
          width="0"
          height="0"
          sizes="100vw"
          className="w-2/4 h-auto"
          alt={""}
        />
      </div>

      <div
        onClick={handleCardClick}
        className={`w-full h-40 flex justify-center items-center bg-primary rounded-md shadow-xl cursor-pointer ${
          flipped ? "flipped-back" : "not-flipped-back"
        }`}
      >
        <Image
          data-testid="backimage"
          src={logo}
          width="0"
          height="0"
          sizes="100vw"
          className="w-2/4 h-auto"
          alt={""}
        />
      </div>
    </motion.div>
  );
};
