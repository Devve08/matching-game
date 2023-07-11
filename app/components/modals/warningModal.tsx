"use client";
import { motion, AnimatePresence } from "framer-motion";


interface Props {
  handleModalStateChange: any;
  confirm: any;
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
  confirm,
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
          <div className="font-bold text-lg text-yellowish text-center">
            Restart game ?
          </div>
          <div className="flex items-center gap-5 w-full mx-auto justify-center mt-10">
            <motion.button
              onClick={handleModalStateChange}
              whileHover={{ scale: 1.05, originX: 0 }}
              transition={{ duration: 0.3 }}
              className="font-semibold text-sm tsukimi bg-secondary w-2/5 py-2 text-white rounded"
            >
              Continue
            </motion.button>
            <motion.button
              onClick={confirm}
              whileHover={{ scale: 1.05, originX: 0 }}
              transition={{ duration: 0.3 }}
              className="font-semibold text-sm tsukimi bg-secondary w-2/5 py-2 text-white rounded"
            >
              Yes
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
