import "./mainContent.css";
import Cards from "./cards/Cards.js";
import Search from "./search/Search.js";
import cardsArray from "./cards/cardsArray.js";

function prov(e) {
  const result = cardsArray.filter(
    (word) =>
      word.title.toLowerCase().includes(e) ||
      word.desc.toLowerCase().includes(e)
  );
  if (e === "" || typeof e === "object") {
    return cardsArray;
  } else if (result.length !== 0) {
    return result;
  }
  return [];
}

const MainContent = (e) => {
  return (
    <div className="mainContent">
      <Search />
      <div className="containerMain" id="mainCont">
        <Cards result={prov(e)} />
      </div>
    </div>
  );
};

export default MainContent;
