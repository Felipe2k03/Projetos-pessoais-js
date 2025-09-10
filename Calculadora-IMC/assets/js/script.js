function calcularIMC() {
  const peso = parseFloat(document.querySelector("#weight").value);
  const alturaCm = parseFloat(document.querySelector("#height").value);
  const idade = parseInt(document.querySelector("#age").value);

  // converter cm para metros
  const altura = alturaCm / 100;

  // calcular imc
  const imc = (peso / (altura * altura)).toFixed(2);

  // exibir resultado no <th>
  document.querySelector("#resultado-imc").textContent = `seu imc é ${imc}`;

  // resetar destaques da tabela
  document
    .querySelectorAll("tbody tr")
    .forEach((tr) => tr.classList.remove("active"));

  let faixa = "";
  if (imc < 18.5) {
    faixa = "magreza";
  } else if (imc < 25) {
    faixa = "normal";
  } else if (imc < 30) {
    faixa = "sobrepeso";
  } else {
    faixa = "obesidade";
  }

  // destacar linha
  document.querySelector(`#${faixa}`).classList.add("active");
}

document.querySelector("#generate").addEventListener("click", (event) => {
  event.preventDefault();
  calcularIMC();
});
