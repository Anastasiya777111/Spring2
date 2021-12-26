import "./pictureCard.css";
const PictureCard = (pictureOfCard) => {
  return (
    <img
      className="iconCardSmall"
      src={pictureOfCard.linkToPicture.img}
      alt="pictureCards"
    />
  );
};

export default PictureCard;
