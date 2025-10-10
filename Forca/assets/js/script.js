import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guessWord");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".newGame");
let indexImg;

init();

btnNew.addEventListener("click", () => {
  init();
});

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

//troca de imagem
function wrongAnswer() {
  indexImg++;
  img.src = `assets/img/img${indexImg}.png`;

  if (indexImg === 7) {
    setTimeout(() => {
      alert("Perdeu :(");
      init();
    }, 100);
  }
}

// verificação da letra
function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word =${letter}]`);

  if (!arr.length) wrongAnswer();

  //coloca a letra em sua posição
  arr.forEach((e) => {
    e.textContent = letter;
  });

  const spans = document.querySelectorAll(`.guessWord span`);
  const won = !Array.from(spans).find((spans) => spans.textContent === "_");

  if (won) {
    setTimeout(() => {
      alert("Ganhou!!!");
      init();
    }, 100);
  }
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
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}
