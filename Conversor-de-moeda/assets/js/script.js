// tabela de conversao
const conversion = {
  BRL: 1,
  USD: 1 / 5.0,
  EUR: 1 / 5.4,
  GBP: 1 / 6.2,
  JPY: 1 / 0.038,
  ARS: 1 / 0.025,
  CAD: 1 / 3.7,
  AUD: 1 / 3.3,
  CHF: 1 / 5.6,
  CNY: 1 / 0.7,
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#currency-converter");
  const output = document.querySelector("#output");
  const rateEl = document.querySelector("#rate");
  const updatedEl = document.querySelector("#updated");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const amount = parseFloat(document.querySelector("#amount").value);
    const from = document.querySelector("#from-currency").value;
    const to = document.querySelector("#to-currency").value;
    const precision = parseInt(document.querySelector("#precision").value);

    if (isNaN(amount) || amount <= 0) {
      output.textContent = "Resultado: insira um valor válido!";
      return;
    }

    // Converte para BRL, depois para o desejado
    const valueInBRL = amount / conversion[from];
    const converted = valueInBRL * conversion[to];

    const conversionUsed = (conversion[to] / conversion[from]).toFixed(
      precision
    );

    //botando na tela
    output.textContent = `Resultado: ${converted.toFixed(precision)} ${to}`;
    rateEl.textContent = `1 ${from} = ${conversionUsed} ${to}`;
    updatedEl.textContent = new Date().toLocaleString("pt-BR");
  });
});
