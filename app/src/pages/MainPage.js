import React from "react";

import { BuildingTable } from "../components/BuildingTable";
import { ResultDisplay } from "../components/ResultDisplay";

import styled from "styled-components";

export const MainPage = () => {
  return (
    <Wrapper>
      <h1>Tower Finder</h1>
      <BuildingTable />
      <ResultDisplay />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
