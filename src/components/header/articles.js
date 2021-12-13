

const Articles  = (props) => {
    return(
<li className={props.art.elementClass}><a href="#">{props.art.headerSubElem}</a></li>
    )
}

export default Articles;