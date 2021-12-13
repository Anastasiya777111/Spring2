import reactDom from "react-dom";
import React from "react";
import Cards from "../cards/Cards";
import cardsArray from "../cards/cardsArray.js";

function vibor(e){
  const props = cardsArray.filter(word =>
    word.title.toLowerCase().includes(e.target.value.toLowerCase())||
    word.desc.toLowerCase().includes(e.target.value.toLowerCase())
    );
  if (e.target.value === '') {
  let props = cardsArray;
  setTimeout(reactDom.render,300, Cards({props}), document.getElementById('mainCont'))
  }
  else if(props.length !== 0){
    setTimeout(reactDom.render, 300, Cards({props}), document.getElementById('mainCont'))}
  else{
    setTimeout(reactDom.render ,300, (<p className="noResults">No results</p>), document.getElementById('mainCont'))
  }
}


const Search=()=>{
    return(
        <div className="mainSearchBox" onChange={(e)=>{
          return vibor(e);
        }}>

    <input
      className="mainSearch"
      type="search"
      id="search"
      name="searchBar"
      placeholder="Search for article"
    />
  </div>
    )
}

export default Search;