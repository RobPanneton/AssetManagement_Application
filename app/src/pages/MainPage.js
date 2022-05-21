import React from "react";
import { BuildingTable } from "../components/BuildingTable";
import { ResultDisplay } from "../components/ResultDisplay";

export const MainPage = () => {
  return (
    <>
      <h1>Tower Finder</h1>
      <BuildingTable />
      <ResultDisplay />
    </>
  );
};
