import Image from "next/image";
import React from "react";
import logo from "../assets/images/logoquiqup.png";

interface Props {
  cardImage: string;
  handleCardClick: (card: any) => void;
  flipped: boolean;
}

export const Card: React.FC<Props> = ({
  cardImage,
  handleCardClick,
  flipped,
}) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-xl rounded-md relative">
      <div
        className={`w-full h-44 flex justify-center items-center bg-primary rounded-md shadow-xl absolute ${
          flipped ? "flipped" : "not-flipped"
        }`}
      >
        <Image
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
        className={`w-full h-44 flex justify-center items-center bg-primary rounded-md shadow-xl`}
      >
        <Image
          src={logo}
          width="0"
          height="0"
          sizes="100vw"
          className="w-2/4 h-auto"
          alt={""}
        />
      </div>
    </div>
  );
};
