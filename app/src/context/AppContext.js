import React, { createContext, useState, useEffect } from "react";

import { buildingDataSet } from "../data/buildingDataSet";
import { towerDataSet } from "../data/towerDataSet";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // INITIAL STATE
  const [buildingData, setBuildingData] = useState(null);
  const [towerData, setTowerData] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // fetch data and set it to state
    setBuildingData(buildingDataSet);
    setTowerData(towerDataSet);
  }, []);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const findClosestTower = (building) => {
    // formula; D distance, X distance horizontal, Y distance vertical, 2 = squared
    // D2 = X2 + Y2
    // find distance, coord1 - coord2
    console.log(building);

    let closest;

    for (let i = 0; i < towerData.length; i++) {
      console.log({ buildingX: building.xCoord, buildingY: building.yCoord });
      console.log({ towerX: towerData[i].xCoord, towerY: towerData[i].yCoord });
      const distanceX = building.xCoord - towerData[i].xCoord;
      const distanceY = building.yCoord - towerData[i].yCoord;

      const distanceSquared = Math.pow(distanceX, 2) + Math.pow(distanceY, 2);
      const distance = Math.sqrt(distanceSquared);

      if (!closest) {
        closest = { ...towerData[i], distance };
        continue;
      }
      if (closest.distance < distance) closest = { ...towerData[i], distance };
    }

    return setResult(closest);
  };

  return (
    <AppContext.Provider
      value={{
        buildingData,
        towerData,
        findClosestTower,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
