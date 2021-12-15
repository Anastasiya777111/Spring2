import React from "react";
import CardForm from "./cardForm";

const Cards = (props) => {
  return (
    <div className="displ1">
      {props.props.map((el) => {
        return <CardForm card={el} />;
      })}
    </div>
  );
};

export default Cards;
