"use client";
import arrowIcon from "../../assets/images/cards.png";
import backIcon from "../../assets/images/arrow.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useGlobalContext } from "@/app/context/store";
import Cookies from "js-cookie";

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

const LoginModal: React.FC<Props> = ({ handleModalStateChange }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const { setUser } = useGlobalContext();

  const handleTextChange = (text: string) => {
    setUserName(text);
    if (text?.length < 3) {
      setErrorMessage("Name should be at least 3 characters");
    } else {
      setErrorMessage("");
    }
  };
  const handleLoginAction = () => {
    if (userName.length < 3) {
      setErrorMessage("Name should be at least 3 characters");
    } else {
      setUser(userName);
      Cookies.set("loggedInUser", userName);
      window.location.reload();
    }
  };
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
          <div className="text-yellowish w-full mx-4 md:mx-0 md:w-3/4 font-medium text-center border-dashed rounded-md border-yellowish border-2 px-4 py-2">
            Register your name and start playing!
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2 px-4">
            <input
             data-testid="logininput"
              onChange={e => handleTextChange(e.target.value)}
              className="outline-none p-2 px-4 rounded tsukimi font-bold text-primary w-full md:w-3/4"
              type="text"
              placeholder="Enter you name"
            />
            {errorMessage && (
              <div data-testid="errormessage" className="text-red-500 text-sm">{errorMessage}</div>
            )}
          </div>

          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="cursor-pointer flex flex-row items-center gap-2 "
            onClick={handleLoginAction}
            data-testid="loginbtn"
          >
            <motion.span
              variants={leftMotion}
              className="tsukimi font-bold text-yellowish text-lg"
            >
              Play
            </motion.span>
            <motion.div variants={rightMotion}>
              <Image src={arrowIcon} width={25} height={25} alt="" />
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ opacity: 0.5 }}
            className="absolute left-1 top-1 md:left-4 md:top-4 rotate-180 cursor-pointer"
            onClick={handleModalStateChange}
          >
            <Image src={backIcon} height={25} width={25} alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
