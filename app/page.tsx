"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedText } from "./components/animatedText";
import logo from "./assets/images/logoquiqup.png";
import { UseModal } from "./custom/hooks/useModal";
import { LoginModal } from "./components/modals/loginModal";

export default function Home() {
  const { handleModalStateChange, modalState } = UseModal();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary relative">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 2, type: "spring", stiffness: 50 }}
        className="my-8"
      >
        <Image src={logo} width={75} height={75} alt={""} />
      </motion.div>
      <div className="text-yellowish">
        <motion.div
          initial={{ y: "-vh" }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            bounce: 50,
          }}
          className="text-xl sm:text-3xl font-semibold tsukimi"
        >
          <AnimatedText text="GAME-OF-MATCH" />
        </motion.div>
      </div>
      <div className="mt-8 mb-4 text-white font-light tracking-wide">Start playing!</div>
      <motion.div
        onClick={handleModalStateChange}
        whileHover={{
          scale: 1.1,
        }}
        transition={{duration: 0.3}}
        className="cursor-pointer px-6 tracking-wider py-2 bg-secondary text-yellowish text-sm font-bold rounded-sm"
      >
        Login
      </motion.div>
      {modalState && <LoginModal handleModalStateChange={handleModalStateChange} /> }
    </main>
  );
}
