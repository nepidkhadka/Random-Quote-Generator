const mybutton = document.querySelector("button");
let quote = document.querySelector(".center p");
let author = document.querySelector(".center h4");
let centerdisplay = document.querySelector(".center");

let URL = "https://api.quotable.io/random";

const getquote = async ()=>{
    try{
    let respopnse = await fetch(URL);
    let data = await respopnse.json();
    centerdisplay.style.display = "block";
    quote.textContent = "❝ " + data.content + "  ❞ ";
    author.textContent = `—	 ${data.author}`;
    mybutton.textContent = "Next Quote"
    }
    catch(e){
        console.error(e);
    }
}

mybutton.addEventListener("click", getquote);
