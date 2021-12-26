import "./titles.css";
import Articles from "./articles";
import React, { useState } from "react";

const Titles = (elemOfTitle) => {
  const [openDrop, setOpenDrop] = useState(false);

  function dropMenu() {
    if (openDrop) {
      setOpenDrop(false);
    } else {
      setOpenDrop(true);
    }
  }
  if (elemOfTitle.menu.articles) {
    return (
      <div className="MenuCont" onClick={dropMenu}>
        <li className="menu">
          <span className="nav-link">{elemOfTitle.menu.headerElem}</span>
          <div className={`dropdownMenu ${openDrop ? "active" : ""}`}></div>
        </li>
        <ul className={`dropdown ${openDrop ? "active" : ""}`}>
          {elemOfTitle.menu.articles.map((el, index) => {
            if (elemOfTitle.menu.headerElem == "Projects") {
              if (index == 9)
                return (
                  <Articles art={"allProjects elemDropdownMenu"} SubArt={el} />
                );
              if (index == 10) return <Articles art={"uppCase"} SubArt={el} />;
            }
            return <Articles art={"elemDropdownMenu"} SubArt={el} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="MenuCont">
        <li className="nav-link menu">
          <span>{elemOfTitle.menu.headerElem}</span>
        </li>
      </div>
    );
  }
};

export default Titles;
