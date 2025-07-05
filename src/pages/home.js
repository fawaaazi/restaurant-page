import mainImg from "./main-img.jpeg"

export function homePage(){
    /*home contents div part */
    const homeDiv = document.createElement("div");
    const infoDiv = document.createElement("div");
    const imgDiv = document.createElement("div");

    homeDiv.className = "home"
    infoDiv.id = "home-info"
    imgDiv.id = "home-img" 

    /*home-info elements*/
    const h1 = document.createElement("h1")
    const h1SpanFirst = document.createElement("span")
    const h1SpanSecond = document.createElement("span")
    const h1br = document.createElement("br")

    h1SpanFirst.className = "first-word"
    h1SpanSecond.className = "second-word"
    
    h1SpanFirst.textContent = "Chayakkada"
    h1SpanSecond.textContent = "1983"

    h1.appendChild(h1SpanFirst);
    h1.appendChild(h1br);
    h1.appendChild(h1SpanSecond);

    const h3 = document.createElement("h3");
    const h3SpanFirst = document.createElement("span")
    const h3SpanSecond = document.createElement("span")
    const h3br = document.createElement("br")

    h3SpanFirst.textContent = "Not just chaya... "
    h3SpanSecond.textContent = "it's an era in every sip."

    h3.appendChild(h3SpanFirst)
    h3.appendChild(h3br)
    h3.appendChild(h3SpanSecond)

    const p = document.createElement("p")

    p.textContent = "Chayakadha 1983 is more than just a tea shop. It's a tribute to the golden days when life was simple, flavors were honest, and conversations lasted as long as the chaya stayed hot. Born from the soul of Kerala’s street food culture, every item we serve — from piping hot kattan to crispy pazhampori and spicy beef fry — carries a taste of that vintage naadan charm. Come sit down. Sip, snack, and relive a taste that time refuses to forget."

    infoDiv.appendChild(h1)
    infoDiv.appendChild(h3)
    infoDiv.appendChild(p)

    /*home-img elements*/
    const img = document.createElement("img")
    img.src = mainImg

    imgDiv.appendChild(img)

    homeDiv.appendChild(infoDiv)
    homeDiv.appendChild(imgDiv)

    return homeDiv
}
