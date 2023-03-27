//scroll navigation

const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navLinks =document.querySelectorAll(".nav-link");

window.addEventListener("scroll", navScroll);

function navScroll() {
    
        nav.style.backgroundColor = "#fff";
        nav.classList.add("scroll");
        logo.src = "../img/LOGOS/LOGO DARK.png";
        navLinks.forEach( el =>{
            el.style.color = "#000";
    
        })
        
   

}

/// MENUS HAMBURGUESA
const menu = document.querySelector('.ham');
