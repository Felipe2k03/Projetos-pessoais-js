const numero1 = document.querySelector(".numero1");
const numero2 = document.querySelector(".numero2");
const input = document.querySelector("#respostaUsuario");
const btn = document.querySelector(".btn");

let numeroGerado1;
let numeroGerado2;

let operacao = document.body.dataset.operacao;

let criarNumero = () => {
  numeroGerado1 = Math.floor(Math.random() * 10);
  numeroGerado2 = Math.floor(Math.random() * 10);

  numero1.textContent = numeroGerado1;
  numero2.textContent = numeroGerado2;
};

criarNumero();

let calcularResultado = (event) => {
  event.preventDefault(); //não deixa o formulario recarregar a pagina

  let respostaUsuario = Number(input.value.trim());
  let resultado;

  switch (operacao) {
    case "soma":
      resultado = numeroGerado1 + numeroGerado2;
      break;
    case "subtracao":
      resultado = numeroGerado1 - numeroGerado2;
      break;
    case "multiplicacao":
      resultado = numeroGerado1 * numeroGerado2;
      break;
  }

  if (respostaUsuario === resultado) {
    alert("Parabéns, você acertou!");
  } else {
    alert(`Você errou. O resultado era ${resultado}`);
  }

  input.value = "";
  criarNumero();
};

btn.addEventListener("click", calcularResultado);
