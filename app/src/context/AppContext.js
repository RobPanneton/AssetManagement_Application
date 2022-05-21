import React, { createContext, useState, useEffect } from "react";

import { buildingDataSet } from "../data/buildingDataSet";
import { towerDataSet } from "../data/towerDataSet";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  // INITIAL STATE
  const [buildingData, setBuildingData] = useState(null);
  const [towerData, setTowerData] = useState(null);
  const [result, setResult] = useState(null);

  // FETCH BUILDING AND TOWER DATA FROM THE "API"
  useEffect(() => {
    // fetch data and set it to state
    setBuildingData(buildingDataSet);
    setTowerData(towerDataSet);
  }, []);

  // FUNCTION TO FIND CLOSEST TOWER TO SELECTED BUILDING
  const findClosestTower = (building) => {
    // Distance(squared) = xDistance(squared) + yDistance(squared)
    // find distance, coord1 - coord2

    // SET CLOSETS TOWER OBJECT VARIABLE
    let closest;

    for (let i = 0; i < towerData.length; i++) {
      // CALCULTE DISTANCE X AND Y
      const distanceX = Math.abs(building.xCoord - towerData[i].xCoord);
      const distanceY = Math.abs(building.yCoord - towerData[i].yCoord);

      // ADD SQUARES OF DISTANCE X AND Y TO FIND DISTANCE(SQUARED)
      const distanceSquared = Math.pow(distanceX, 2) + Math.pow(distanceY, 2);

      // FIND SQUARE ROOT OF D(SQUARED) TO FIND DISTANCE VALUE
      const distance = Math.sqrt(distanceSquared);

      // SET FIRST RESULT WITH IT'S DISTANCE TO CLOSEST VARIABLE AND CONTINUE TO NEXT ITERATION
      if (!closest) {
        closest = { ...towerData[i], distance };
        continue;
      }

      // IF THIS NEW DISTANCE IS LESS, SET IT TO CLOSEST
      if (closest.distance > distance) closest = { ...towerData[i], distance };
    }

    // SET CLOSEST TOWER TO CLOSEST RESULT STATE
    return setResult(closest);
  };

  return (
    <AppContext.Provider
      value={{
        buildingData,
        towerData,
        result,
        findClosestTower,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
