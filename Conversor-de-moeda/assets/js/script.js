let rates = {}; // vai guardar as taxas vindas da API

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#currency-converter");
  const output = document.querySelector("#output");
  const rateEl = document.querySelector("#rate");
  const updatedEl = document.querySelector("#updated");

  // Busca taxas da API
  async function fetchRates() {
    try {
      const url =
        "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,ARS-BRL,CAD-BRL,AUD-BRL,CHF-BRL,CNY-BRL";
      const res = await fetch(url);
      const data = await res.json();

      rates["BRL"] = 1; // Real sempre = 1
      for (let key in data) {
        const moeda = data[key].code;
        const bid = parseFloat(data[key].bid); // preço em BRl
        rates[moeda] = bid;
      }

      //adicionando um console.log para ter certeza que a api ta carregando
      console.log("Taxas carregadas:", rates);
      updatedEl.textContent = new Date().toLocaleString("pt-BR");
    } catch (err) {
      console.error("Erro ao carregar API:", err);
      output.textContent = "Não foi possível carregar as taxas.";
    }
  }

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

    if (!rates[from] || !rates[to]) {
      output.textContent = "Moeda não suportada pela API.";
      return;
    }

    let valueInBRL;
    if (from === "BRL") {
      valueInBRL = amount;
    } else {
      valueInBRL = amount * rates[from];
    }

    let converted;
    if (to === "BRL") {
      converted = valueInBRL;
    } else {
      converted = valueInBRL / rates[to]; // converte de BRL para a moeda destino
    }

    // Taxa usada
    const rateUsed = (converted / amount).toFixed(precision);

    output.textContent = `Resultado: ${converted.toFixed(precision)} ${to}`;
    rateEl.textContent = `1 ${from} = ${rateUsed} ${to}`;
    updatedEl.textContent = new Date().toLocaleString("pt-BR");
  });

  // chama a função para pegar as taxas
  fetchRates();
});
