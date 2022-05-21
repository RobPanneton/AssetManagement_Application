import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import styled from "styled-components";

export const BuildingTable = () => {
  const { buildingData, findClosestTower } = useContext(AppContext);

  // placeholder
  return (
    <BuildingTableWrapper>
      <TableDisplay>
        <thead>
          <tr>
            <th>Building</th>
            <th>ID</th>
            <th>X Coord</th>
            <th>Y Coord</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buildingData && (
            <>
              {buildingData.map((building) => {
                return (
                  <tr key={building.id}>
                    <td>{building.name}</td>
                    <td>{building.id}</td>
                    <td>{building.xCoord}</td>
                    <td>{building.yCoord}</td>
                    <td>
                      <button onClick={() => findClosestTower(building)}>
                        Find
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </TableDisplay>
    </BuildingTableWrapper>
  );
};

const BuildingTableWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin: 40px 0;
`;

const TableDisplay = styled.table`
  th,
  td {
    border: 1px solid black;
    padding: 3px 7px;
  }
  button {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;
