import "./Header.css";
import React, { useState } from "react";
import menu from "./HeaderMenu";
import logo from "../header/logo.svg";
import Titles from "./titles";

const Header = () => {
  const [open, setOpen] = useState(false);

  const hambClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <header>
      <nav className="navMenu">
        <div className="container">
          <img className="logo" src={logo} alt="logoSpring" />
          <ul className={`menuItems ${open ? "active" : ""}`}>
            {menu.map((el) => {
              return <Titles menu={el} />;
            })}
          </ul>
        </div>
      </nav>
      <div className="smallVersion">
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={hambClick}
        >
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
