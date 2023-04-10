const mybutton = document.querySelector("button");
let quote = document.querySelector(".center p")
let URL = "https://api.quotable.io/random";

const getquote = async ()=>{
    let respopnse = await fetch(URL);
    let data = await respopnse.json();

    console.log(data);
}

mybutton.addEventListener("click", getquote);
