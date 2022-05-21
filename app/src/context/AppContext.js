import React, { createContext, useState, useEffect } from "react";

import { buildingDataSet } from "../data/buildingDataSet";
import { towerDataSet } from "../data/towerDataSet";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // INITIAL STATE
  const [buildingData, setBuildingData] = useState(null);
  const [towerData, setTowerData] = useState(null);

  useEffect(() => {
    // fetch data and set it to state
    setBuildingData(buildingDataSet);
    setTowerData(towerDataSet);
  }, []);

  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <AppContext.Provider
      value={{
        buildingData,
        towerData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
