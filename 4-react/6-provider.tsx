import React, { FC, ReactNode, createContext, useContext } from "react";

// Context
type MyContextProps = {
  providerValue: string;
};
const MyContext = createContext<MyContextProps>({ providerValue: "" });

// Provider
type MyContextProviderProps = {
  children: ReactNode;
};
export const MyContextProvider: FC<MyContextProviderProps> = ({ children }) => {
  return (
    <MyContext.Provider value={{ providerValue: "providerValue" }}>
      {children}
    </MyContext.Provider>
  );
};

// Consumer
export const MyContextConsumer = MyContext.Consumer;

// Hook
export const useMyContext = () => {
  return useContext(MyContext);
};
