import {homePage} from "./pages/home.js"
import "./style.css";
import { menuPage } from "./pages/menu.js";

const content = document.getElementById("content")

content.innerHTML = ""

content.appendChild(homePage())
content.appendChild(menuPage())

