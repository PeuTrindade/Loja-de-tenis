import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar(props){
    const [mobile,setMobile] = React.useState(false);
    const [mobileMenu,setMobileMenu] = React.useState(false);
    let tamanho = window.innerWidth;
    let navbarItems = document.getElementById("navItems");
    let menuMobile = document.getElementById("menuMobile");
    let btn = document.getElementById("btn-nav");

    function verTamanho(){
        if(tamanho<740){
            setMobile(true)
            setMobileMenu(true)
        }
        else {
            setMobile(false) 
            setMobileMenu(false)
        }
    }
    function removerItems(){
        if(mobile==true){
            navbarItems.className = "deleteNavItems"
            btn.className = "btn-navbarA"
        }
    }
    function Menu(){
       if(mobileMenu == true){
           menuMobile.className = "menu-divA"
       }
    }
    useEffect(verTamanho,[verTamanho]);
    removerItems();
    
    return(
        <>
        <div className="alert-header"><a href="#">Compre</a> os melhores tênis originais aqui!</div>
        <nav className="navbar">
           <div className="navbar-container">
           <h3 className="navbar-logo">Sneakers</h3>
           <ul id="navItems" className="navbar-items">
             <li className="navbar-item">Tênis</li>
             <li className="navbar-item">Masculinos</li>
             <li className="navbar-item">Femininos</li>
             <li className="navbar-item">Marcas</li>
             <li className="navbar-item">Novidades</li>
           </ul>
           <input id="navSearch" className="navbar-search" type="text" placeholder="O que você procura?"></input>
           <button id="btn-nav" className="btn-navbar" onClick={Menu}>Abrir menu</button>
           </div>
           <div className="menu-container">
             <div id="menuMobile"className="menu-div">
                <ul className="menu-items">
                  <li className="menu-item">Tênis</li>
                  <li className="menu-item">Masculinos</li>
                  <li className="menu-item">Femininos</li>
                  <li className="menu-item">Marcas</li>
                  <li className="menu-item">Novidades</li>
                </ul>
             </div>
           </div>
        </nav>
        </>
    )
}
export default Navbar;