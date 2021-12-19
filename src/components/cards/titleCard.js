import "./titleCard.css";
const TitleCard = (titleOfCard) => {
  return <h3 className="cardDesc">{titleOfCard.linkToTitle.title}</h3>;
};

export default TitleCard;
