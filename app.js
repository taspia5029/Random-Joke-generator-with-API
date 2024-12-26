const JokeContainer = document.querySelector("#joke");
const Btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJokes = async() => {
    JokeContainer.classList.remove("fade")
console.log("getting data...");
let response = await fetch(url);
console.log(response);
let data = await response.json();
JokeContainer.textContent = `${data.joke}`;
JokeContainer.classList.add("fade");    
}
Btn.addEventListener("click",getJokes);