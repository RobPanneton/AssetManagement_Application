import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import styled from "styled-components";

export const BuildingTable = () => {
  const { buildingData, findClosestTower, sortTableData } =
    useContext(AppContext);

  // placeholder
  return (
    <BuildingTableWrapper>
      <table>
        <thead>
          <tr>
            <th>
              Building
              <button
                className='sort-button'
                onClick={() => {
                  sortTableData("name", "string");
                }}
              >
                ▲
              </button>
            </th>
            <th>
              ID
              <button
                className='sort-button'
                onClick={() => {
                  sortTableData("id", "string");
                }}
              >
                ▲
              </button>
            </th>
            <th>
              X Coord
              <button
                className='sort-button'
                onClick={() => {
                  sortTableData("xCoord", "number");
                }}
              >
                ▲
              </button>
            </th>
            <th>
              Y Coord
              <button
                className='sort-button'
                onClick={() => {
                  sortTableData("yCoord");
                }}
              >
                ▲
              </button>
            </th>
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
                      <button
                        id='find-button'
                        onClick={() => findClosestTower(building)}
                      >
                        Find ▲ ▼
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </BuildingTableWrapper>
  );
};

const BuildingTableWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin: 40px 0;

  th,
  td {
    border: 1px solid black;
    padding: 7px 11px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  th {
    padding: 11px 17px;
  }

  #find-button {
    padding: 3px 5px;
    cursor: pointer;
  }
`;
