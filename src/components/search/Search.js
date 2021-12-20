import "./Search.css"
import React from "react";
import MainContent from "../mainContent";

const Search = ({search, setSearch}) => {
  return (
    <div className="mainSearchBox">
      <input
        className="mainSearch"
        type="search"
        id="search"
        name="searchBar"
        placeholder="Search for article"
        value={search}
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
