var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";
}

function randomButton() {
    color1.value = randomGen();
    color2.value = randomGen();
    setGradient();
}


function randomGen() {
 return '#'+Math.floor(Math.random()*16777215).toString(16);
} 

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

btn.addEventListener("click", randomButton)