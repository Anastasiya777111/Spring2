import "./Search.css"
import React from "react";
import MainContent from "../mainContent";

const Search = () => {
  return (
    <div
      className="mainSearchBox"
      onChange={(e) => {
        MainContent(e.target.value.toLowerCase() + "");
      }}
    >
      <input
        className="mainSearch"
        type="search"
        id="search"
        name="searchBar"
        placeholder="Search for article"
      />
    </div>
  );
};

export default Search;
