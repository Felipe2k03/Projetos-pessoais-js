import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
let indexImg;

init();

function init() {
  indexImg = 1;
  img.src = "img1.png";

  generateButtons();
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase(); //fromcharcode possui o alfabeto da posição 97 ate o 122
    btn.textContent = letter; //bota as letras dentro do botão

    contentBtns.appendChild(btn);
  }
}
