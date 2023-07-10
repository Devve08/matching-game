import { useState } from "react";

export const UseModal = () => {
  const [modalState, setModalState] = useState(false);

  const handleModalStateChange = () => {
    setModalState(!modalState);
  };

  return { handleModalStateChange, modalState };
};
