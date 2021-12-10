
import React from "react";
import cards from "./cardsArray";
import CardForm from "./cardForm";

const Cards=()=>{
    return(
        <div className="containerMain">
        <div className="displ1">
        {cards.map(el=>{
                        return <CardForm cards={el}/>
                    })}
</div>
</div>
    )
}
//return <Cards cards={result}/>
export default Cards;