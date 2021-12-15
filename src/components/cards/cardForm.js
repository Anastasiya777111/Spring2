import TitleCard from "./titleCard";
import PictureCard from "./pictureCard";
import DescriptionCard from "./descriptionCard";

const cardForm = (props) => {
  return (
    <a className="card shadow">
      <div className="iconCard">
        <PictureCard card={props.card} />
      </div>
      <div className="sizeTextCard">
        <TitleCard card={props.card} />
        <DescriptionCard card={props.card} />
      </div>
    </a>
  );
};

export default cardForm;