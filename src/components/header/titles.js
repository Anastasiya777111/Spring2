import Articles from "./articles";

function fun(){
    document.querySelectorAll(".MenuCont").forEach(n => n.addEventListener("click", () => 
    {n.querySelector(".dropdown").classList.toggle("active");
    n.querySelector(".dropdownMenu").classList.toggle("active");
    }))
    }


const Titles  = (props) => {
    if(props.menu.article){
    return(
        <div className="MenuCont" onClick={fun}>
<li className="menu"><span className="nav-link">{props.menu.headerElem}</span><div className="dropdownMenu" ></div>
</li>
<ul className="dropdown">
{props.menu.article.map(el => {
    return<Articles art={el}/>
                   })}
</ul>
</div>
    )}
    else
    {
        return(
        <div className="MenuCont">
        <li className="nav-link menu"><span>{props.menu.headerElem}</span>
        </li>
        </div>
    )
}}


export default Titles;