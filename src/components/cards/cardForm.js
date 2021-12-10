import CardPict from "./pictureCards";
import CardTitle from "./titleCards";
import CardDesc from "./descriptionCards";

const cardForm = (props) => {
return(
    <a className="card shadow">
    <div className="iconCard">
            <CardPict cards={props.cards}/>
    </div>
    <div className="sizeTextCard">
                <CardTitle cards={props.cards}/>
               <CardDesc cards={props.cards}/>   
    </div>
</a>
)
}

export default cardForm;

