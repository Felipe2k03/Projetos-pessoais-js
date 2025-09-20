const currentPlayer = document.querySelector(".current-player");
const scoreXEl = document.getElementById("scoreX");
const scoreYEl = document.getElementById("scoreY");

let selected;
let player = "X";
let scoreX = 0;
let scoreY = 0;

// condição de vitória
let positions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function init() {
  selected = [];
  player = "X"; // sempre reinicia com X
  currentPlayer.textContent = `Vez do jogador: ${player}`;

  document.querySelectorAll(".board .cell").forEach((item, index) => {
    item.textContent = "";
    item.removeEventListener("click", newMove);
    item.addEventListener("click", newMove);
    item.dataset.i = index;
  });
}

init();

function newMove(e) {
  const index = e.target.dataset.i;
  e.target.textContent = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, 100);
}

function check() {
  let playerLastMove = player;

  // pega as posições que o último jogador marcou
  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (let pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert(`O jogador ${playerLastMove} ganhou!`);

      // atualiza o placar
      if (playerLastMove === "X") {
        scoreX++;
        scoreXEl.textContent = scoreX;
      } else {
        scoreY++;
        scoreYEl.textContent = scoreY;
      }

      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("Deu velha!");
    init();
    return;
  }

  // troca o jogador
  player = player === "X" ? "O" : "X";
  currentPlayer.textContent = `Vez do jogador: ${player}`;
}

// botão de reinciar
document.querySelector("#resetBtn").addEventListener("click", () => {
  init();
  scoreYEl.textContent = 0;
  scoreXEl.textContent = 0;
});
