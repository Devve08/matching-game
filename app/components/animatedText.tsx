"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 * i },
  }),
};
const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const AnimatedText: React.FC<Props> = ({ text }) => {
  const letters = Array.from(text);
  return (
    <motion.div
      style={{ display: "flex" }}
      variants={container}
      initial={"hidden"}
      animate={"visible"}
    >
      {letters.map((letter, index) =>
        letter === "-" ? (
          <motion.span variants={child} key={index}>
            &nbsp;
          </motion.span>
        ) : (
          <motion.span variants={child} key={index}>
            {letter}
          </motion.span>
        )
      )}
    </motion.div>
  );
};
