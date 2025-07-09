import chai from "../images/chai.jpeg"
import "./menu.css";

function cardMaker(imgSrc,title,description1,description2,upcharge){
    /*outline elements of the card*/
    const LIcardItem = document.createElement("li");
    const DIVCard = document.createElement("div");
    const DIVCardImg = document.createElement("div");
    const img = document.createElement("img")
    const DIVcardContent = document.createElement("div");
    const H2cardTitle = document.createElement("h2");
    const DIVcardText = document.createElement("div");
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const Pupcharge = document.createElement("p")


    /*assigning class to elements*/
   
    LIcardItem.className = "cards_item"
    DIVCard.className = "card"
    DIVCardImg.className = "card_image"
    DIVcardContent.className = "card_content"
    H2cardTitle.className = "card_title"
    DIVcardText.className = "card_text"
    Pupcharge.className = "upcharge"
    
    /*assiging tabindex to card div*/
    DIVCard.tabIndex = "0"

    // assiging the contents of the tags
    img.src = imgSrc;
    H2cardTitle.textContent = title;
    p1.textContent = description1;
    p2.textContent = description2;
    Pupcharge.textContent = upcharge;

    // appending the elements to the parents
    DIVCardImg.appendChild(img);

    DIVcardText.appendChild(p1)
    DIVcardText.appendChild(p2)
    DIVcardText.appendChild(Pupcharge);

    DIVcardContent.appendChild(H2cardTitle);
    DIVcardContent.appendChild(DIVcardText);

    DIVCard.appendChild(DIVCardImg)
    DIVCard.appendChild(DIVcardContent)

    LIcardItem.appendChild(DIVCard)



    return LIcardItem
}

export function menuPage(){

    const ULcards = document.createElement("ul");
    const DIVmain = document.createElement("div")
    let LInode ;
    const h1 = document.createElement("h1");
    const imgSrc = chai;
    const title = "Farmstand Salad &#x2022; $9"
    const description1 = "Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of leafy greens and seasonal vegetables, fresh from the farmer's market."
    const description2 = "Served with your choice of dressing on the side: <strong>housemade ranch, cherry balsamic vinaigrette, creamy chipotle, avocado green goddess, or honey mustard.</strong>"
    const upcharge = "Add your choice of protein for $2 more. ";

    ULcards.className = "cards"
    DIVmain.className = "main"

    h1.textContent = "Menu"

    LInode = cardMaker(imgSrc,title,description1,description2,upcharge); 
    ULcards.appendChild(LInode)
    LInode = cardMaker(imgSrc,title,description1,description2,upcharge); 
    ULcards.appendChild(LInode)
    LInode = cardMaker(imgSrc,title,description1,description2,upcharge); 
    ULcards.appendChild(LInode)
    LInode = cardMaker(imgSrc,title,description1,description2,upcharge); 
    ULcards.appendChild(LInode)
   
    DIVmain.appendChild(h1)
    DIVmain.appendChild(ULcards)
    
    return DIVmain;
} 



