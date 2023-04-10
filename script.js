const mybutton = document.querySelector("button");
let quote = document.querySelector(".center p");
let centerdisplay = document.querySelector(".center");

let URL = "https://api.quotable.io/random";

const getquote = async ()=>{
    try{
    let respopnse = await fetch(URL);
    let data = await respopnse.json();
    centerdisplay.style.display = "block";
    quote.textContent = "❝ " + data.content + "  ❞ ";
    }
    catch(e){
        console.error(e);
    }
}

mybutton.addEventListener("click", getquote);
