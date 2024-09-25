import React, { useContext } from "react";

import "../assets/Filter.css";
import { ThemeContext } from "../context/ThemeContext";

const Filter = ({setFilter}) => {
  const [mode] = useContext(ThemeContext);

  return (
    <div className="filterContainer">
      <select
        name=""
        id=""
        style={
          mode
            ? { background: "rgb(15 23 42)", color: "white" }
            : { background: "white", color: "rgb(15 23 42)" }
        }
        onChange={(e)=>setFilter(e.target.value)}
      >
        <option hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
