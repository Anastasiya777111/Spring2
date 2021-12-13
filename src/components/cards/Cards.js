
import React from "react";
import CardForm from "./cardForm";

const Cards=(props)=>{
    console.log(props.props)
    return(  
        <div className="displ1">
        {props.props.map(el=>{
            console.log(el)
                        return <CardForm cards={el}/>
                    })}
</div>
    )
}

export default Cards;