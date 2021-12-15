import Articles from "./articles";

const Titles = (props) => {
  function dropMenu() {
    document.querySelectorAll(".MenuCont").forEach((n, i) => {
      if (i == props.menu.id) {
        n.querySelector(".dropdown").classList.toggle("active");
        n.querySelector(".dropdownMenu").classList.toggle("active");
      }
    });
  }
  if (props.menu.article) {
    return (
      <div className="MenuCont" onClick={dropMenu}>
        <li className="menu">
          <span className="nav-link">{props.menu.headerElem}</span>
          <div className="dropdownMenu"></div>
        </li>
        <ul className="dropdown">
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
