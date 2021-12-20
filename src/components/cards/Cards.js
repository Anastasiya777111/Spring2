import "./Cards.css";
import React from "react";
import CardForm from "./cardForm";

const Cards = (CardsElem) => {
  return CardsElem.result.length ? (
    <div className="displayCards">
      {CardsElem.result.map((el) => {
        return <CardForm card={el} />;
      })}
    </div>) :
    <p className="noResults">No Results</p>
  
};

export default Cards;
