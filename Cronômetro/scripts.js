const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

// /eventos
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

// função para fazer o tempo correr
function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      // colocando os valores na tela
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formmatMilliseconds(milliseconds);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

// funções mais simples
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formmatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}

function pauseTimer() {
  isPaused = true;
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  resumeBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function resetTimer() {
  // zerando variaveis
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isPaused = false;
  interval = null;

  // zerando parte visual
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  millisecondsEl.textContent = "000";

  //   configurando botões para o padrão
  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "none";
}
