import "./mainContent.css";
import Cards from "./cards/Cards.js";
import Search from "./search/Search.js";
import cards from "./cards/cardsArray.js";
import { useState } from "react";




const MainContent = () => {
const [search, setSearch]=useState('');
const [result, setResult]=useState([]);

function filterCards() {
  const result = cards.filter(
    (word) =>
      word.title.toLowerCase().includes(search) ||
      word.desc.toLowerCase().includes(search)
  );
  if (search === "" || typeof search == 'undefined') {
    return  setResult(cards);
  } else if (result.length !== 0) {
    return setResult(result);
  }
   return setResult([]);
}

 setTimeout(filterCards, 300)
  return (
    <div className="mainContent">
      <Search search={search} setSearch={setSearch}/>
      <div className="containerMain" id="mainCont">
        <Cards result={result} />
      </div>
    </div>
  );
};

export default MainContent;
