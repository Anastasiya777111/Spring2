import Cards from "./cards/Cards.js";
import Search from "./search/Search.js"

function MainContent() {
    return (
        <div className="mainContent">   
        <Search />
        <Cards />
        </div>
    );
  }
  
  export default MainContent;