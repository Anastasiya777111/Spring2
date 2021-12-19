const Articles = (props) => {
  return (
    <li className={props.art}>
      <a href="#">{props.SubArt.headerSubElem}</a>
    </li>
  );
};

export default Articles;
