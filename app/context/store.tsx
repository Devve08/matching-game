"use client";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  setUser: Dispatch<SetStateAction<string>>;
  user: string;
}

const GlobalContext = createContext<ContextProps>({
  user: "",
  setUser: (): string => "",
});

export const GlobalContextProvider = ({ children }:any) => {
  const [user, setUser] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
