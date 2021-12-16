import Articles from "./articles";
import React, { useState } from "react";

const Titles = (props) => {
  const [openDrop, setOpenDrop] = useState(false);

  function dropMenu() {
    if (openDrop) {
      setOpenDrop(false);
    } else {
      setOpenDrop(true);
    }
  }
  if (props.menu.article) {
    return (
      <div className="MenuCont" onClick={dropMenu}>
        <li className="menu">
          <span className="nav-link">{props.menu.headerElem}</span>
          <div className={`dropdownMenu ${openDrop ? "active" : ""}`}></div>
        </li>
        <ul className={`dropdown ${openDrop ? "active" : ""}`}>
          {props.menu.article.map((el) => {
            return <Articles art={el} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="MenuCont">
        <li className="nav-link menu">
          <span>{props.menu.headerElem}</span>
        </li>
      </div>
    );
  }
};

export default Titles;
