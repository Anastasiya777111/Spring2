import menu from "./HeaderMenu";
import logo from "../header/logo.svg";
import React from "react";
import Titles from "./titles";

const hambClick = () => {
    const hamburger = document.querySelector(".hamburger");
    const displ1 = document.querySelector(".displ1");
    hamburger.classList.toggle("active");
    document.querySelector(".menuItems").classList.toggle("active");
    if (hamburger.className.split(" ").length === 2) {
      displ1.classList.add("active");
    } else {
      setTimeout(() => displ1.classList.remove("active"), 188);
    }
  }

const Header = () => {
  return (
    <header>
      <nav className="navMenu">
        <div className="container">
          <img className="logo" src={logo} alt="logoSpring" />
          <ul className="menuItems">
            {menu.map((el) => {
              return <Titles menu={el} />;
            })}
          </ul>
        </div>
      </nav>
      <div className="smallVersion">
        <div className="hamburger" onClick={hambClick}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
