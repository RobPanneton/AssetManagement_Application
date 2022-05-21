import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import styled from "styled-components";

export const ResultDisplay = () => {
  const { result } = useContext(AppContext);
  return (
    <ResultWrapper>
      <h1>Result will print here</h1>
      {result && (
        <>
          <h3>
            The closet cell tower is {result.name} at coordinates (
            {result.xCoord},{result.yCoord}), and is {result.distance} units
            away.
          </h3>
        </>
      )}
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
  h1,
  h3 {
    text-align: center;
  }

  h1 {
    margin-bottom: 13px;
  }
`;
