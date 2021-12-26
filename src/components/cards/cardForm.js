import "./cardForm.css";
import TitleCard from "./titleCard";
import PictureCard from "./pictureCard";
import DescriptionCard from "./descriptionCard";

const cardForm = (formOfCard) => {
  return (
    <a className="card shadow">
      <div className="iconCard">
        <PictureCard linkToPicture={formOfCard.card} />
      </div>
      <div className="sizeTextCard">
        <TitleCard linkToTitle={formOfCard.card} />
        <DescriptionCard linkToDescription={formOfCard.card} />
      </div>
    </a>
  );
};

export default cardForm;
