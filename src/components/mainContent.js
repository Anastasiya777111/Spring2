import Cards from "./cards/Cards.js";
import Search from "./search/Search.js";
import cardsArray from "./cards/cardsArray.js";

function MainContent() {
    return (
        <div className="mainContent">   
        <Search />
        <div className="containerMain" id="mainCont">
          <Cards props={cardsArray} />
        </div>
        </div>
    );
  }
  
  export default MainContent;