import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../context/AppContext";

export const BuildingTableRow = ({ building }) => {
  const { findClosestTower } = useContext(AppContext);

  return (
    <TableRow key={building.id}>
      <td>{building.name}</td>
      <td>{building.id}</td>
      <td>{building.xCoord}</td>
      <td>{building.yCoord}</td>
      <td>
        <button id='find-button' onClick={() => findClosestTower(building)}>
          Find
        </button>
      </td>
    </TableRow>
  );
};

const TableRow = styled.tr`
  #find-button {
    padding: 3px 5px;
    cursor: pointer;
  }
`;
