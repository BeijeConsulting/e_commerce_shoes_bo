import React from "react";
import "./filtersRow.css";

function filtersRow(props) {
  return (
    <div className="filtersRow-container">
      <h3>{props.label}</h3>
      <div className="filters-container">
        <h3>Searchbar</h3>
        <h3>Filtro</h3>
      </div>
    </div>
  );
}

export default filtersRow;
