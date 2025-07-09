import {homePage} from "./pages/home.js"
import "./style.css";
import { menuPage } from "./pages/menu.js";

const content = document.getElementById("content")
const homeBtn = document.getElementById("home-btn")
const menuBtn = document.getElementById("menu-btn")
const aboutBtn = document.getElementById("about-btn")

content.appendChild(homePage())
content.appendChild(menuPage())

homeBtn.addEventListener("click",function (){
    content.innerHTML = ""
    content.appendChild(homePage())
})

menuBtn.addEventListener('click',() =>{
    content.innerHTML = ""
    content.appendChild(menuPage())
})


