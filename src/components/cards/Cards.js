import "./Cards.css";
import React from "react";
import CardForm from "./cardForm";

const Cards = (CardsElem) => {
  return (
    <div className="displ1">
      {CardsElem.result.map((el) => {
        return <CardForm card={el} />;
      })}
    </div>
  );
};

export default Cards;
