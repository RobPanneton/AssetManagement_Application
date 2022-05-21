import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // USE STATE

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
