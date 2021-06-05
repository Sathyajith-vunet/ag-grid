import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "./App.css";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import fetchRowData from "./rowData";

const App = () => {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(fetchRowData());
  }, []);

  const renderRows = () => {
    if (rowData.length > 0) {
      return (
        rowData[0] &&
        Object.keys(rowData[0]).map((key) => {
          return (
            <AgGridColumn
              key={key}
              field={key}
              sortable={true}
              filter={true}
            ></AgGridColumn>
          );
        })
      );
    }
  };

  return (
    <div className="container">
      <div className="title">Event Console</div>
      <div className="ag-theme-material ag-grid-table">
        <AgGridReact rowData={rowData}>
          {renderRows()}
        </AgGridReact>
      </div>
    </div>
  );
};

export default App;
