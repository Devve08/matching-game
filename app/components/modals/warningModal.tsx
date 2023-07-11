"use client";
import arrowIcon from "../../assets/images/cards.png";
import backIcon from "../../assets/images/arrow.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useGlobalContext } from "@/app/context/store";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface Props {
  handleModalStateChange: any;
}

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
};

const rightMotion = {
  rest: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  hover: {
    x: 5,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const leftMotion = {
  rest: { x: 5, ease: "easeOut", duration: 0.4, type: "tween" },
  hover: {
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const WarningModal: React.FC<Props> = ({ handleModalStateChange }) => {
  

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className=" bg-black bg-opacity-75 flex items-center justify-center fixed top-0 right-0 left-0 h-screen w-full "
        variants={backdrop}
        initial={"hidden"}
        animate={"visible"}
      >
        <motion.div
          variants={modal}
          className="shadow-md relative bg-primary sm:w-2/5 p-4 rounded-md h-2/5 flex items-center gap-7  justify-center flex-col "
        >
         
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
