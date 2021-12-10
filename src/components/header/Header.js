import menu from "./HeaderMenu";
import logo from "../header/logo.svg"
import React from "react";
import Titles from "./titles";

const Header = () => {
    return (
        <header>
        <nav className="navMenu">
            <div className="container">
               <img className="logo" src={logo} alt='logoSpring' />
               <ul className="menuItems">
                   {menu.map(el => {
                       return <Titles menu={el}/>
                   })}
               </ul>
            </div>
</nav>
<div className="smallVersion">
   <div className="hamburger" onClick={hambClick}>
       <div className="burger"></div>
       <div className="burger"></div>
       <div className="burger"></div>
   </div>
</div>
</header>
    );
  }
  
 function hambClick(){
     const hamburger = document.querySelector(".hamburger");
     const displ1 = document.querySelector(".displ1");
    hamburger.classList.toggle("active");
    document.querySelector('.menuItems').classList.toggle("active");
    if(hamburger.className.split(' ').length===2){
        displ1.classList.add("active")
      }else{
        setTimeout(() => displ1.classList.remove("active"), 188)
      }
 }


//  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
// }))



// document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
// {n.querySelector(".dropdown").classList.toggle("active");
// }))

// document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
// {n.querySelector(".dropdownMenu").classList.toggle("active");
// }))

 //document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    //   }))
    
    
    
    //   document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
    //   {n.querySelector(".dropdown").classList.toggle("active");
    //   }))
    
    //   document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
    //   {n.querySelector(".dropdownMenu").classList.toggle("active");
    //   }))

// const elemHeader = document.querySelector('.menuItems');

// const hamburger = document.querySelector(".hamburger");

  
//   function getHeaderElem(el) {
//     let section = [];
//     if(el.article){
//     for(let i=0; i< el.article.length; i++){

//       const li = document.createElement('li');
//       li.className = el.article[i].elementClass;
//       const a = document.createElement('a');
//       a.href = '#';
//       a.textContent = el.article[i].headerSubElem;
//       li.appendChild(a)
//       section.push(li)
//       }
//     }
//     else{
//       const li = document.createElement('li')
//       li.className = 'nav-link menu'
//       const span = document.createElement('span')
//       span.textContent = el.headerElem
//       li.appendChild(span) 
//       elemHeader.appendChild(li)
//       return
//     }
//     const div1 = document.createElement('div')
//     div1.className = 'M'
//     const li = document.createElement('li')
//     li.className = 'menu'
//     const span = document.createElement('span')
//     span.className = 'nav-link'
//     span.textContent = el.headerElem
//     const div2 = document.createElement('div')
//     div2.className = 'dropdownMenu'
//     const ul = document.createElement('ul')
//     ul.className = 'dropdown'

//     li.appendChild(span)
//     li.appendChild(div2)
//     for(let i=0; section.length > i; i++){
//       ul.appendChild(section[i])
//     }
//     div1.appendChild(li)
//     div1.appendChild(ul)
//     elemHeader.appendChild(div1)
//    }

//   function elemHeaderMenu() {
//     for (let i = 0; i < menu.length; i++) {
//     getHeaderElem(menu[i]);
//     }
//   }
  
//   elemHeaderMenu();

  

//   hamburger.addEventListener("click", () => {
//       console.log("hi")
//     hamburger.classList.toggle("active");
//     elemHeader.classList.toggle("active");
// })
//   document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//   }))



//   document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
//   {n.querySelector(".dropdown").classList.toggle("active");
//   }))

//   document.querySelectorAll(".M").forEach(n => n.addEventListener("click", () => 
//   {n.querySelector(".dropdownMenu").classList.toggle("active");
//   }))

  export default Header;