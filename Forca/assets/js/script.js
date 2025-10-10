import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guessWord");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".newGame");
let indexImg;

init();

function init() {
  indexImg = 1;
  img.src = "assets/img/img1.png";

  generateGuessSection();
  generateButtons();
}

function generateGuessSection() {
  contentGuessWord.textContent = "";

  const { word, clue } = getWord();

  // mostra a dica
  contentClue.textContent = `Dica: ${clue}`;

  Array.from(word).forEach((letter) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
  });
}

function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase(); //fromcharcode possui o alfabeto da posição 97 ate o 122
    btn.textContent = letter; //bota as letras dentro do botão

    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
    };

    contentBtns.appendChild(btn);
  }
}
