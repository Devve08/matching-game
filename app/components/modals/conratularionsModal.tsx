"use client";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  handleModalStateChange: any;
  turns: number;
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

export const WarningModal: React.FC<Props> = ({
  handleModalStateChange,
  turns,
}) => {
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
          <div className="font-light text-md text-yellowish text-center">
            Congratulations you with {} turns
          </div>
          <div className="flex items-center gap-5 w-full mx-auto justify-center mt-10">
            <motion.button
              onClick={handleModalStateChange}
              whileHover={{ scale: 1.05, originX: 0 }}
              transition={{ duration: 0.3 }}
              className="font-semibold text-sm tsukimi bg-secondary w-2/5 py-2 text-white rounded"
            >
              Woohoooo !!!
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
