const form = document.querySelector("#passwordContainer");

function generatePassword() {
  const length = document.querySelector("#length").value;

  //lista de objetos que tem uma propriedade "chars" que representa os caracteres correspondentes dos ids
  const options = [
    { id: "uppercase", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { id: "lowercase", chars: "abcdefghijklmnopqrstuvwxyz" },
    { id: "numbers", chars: "0123456789" },
    { id: "symbols", chars: "!@#$%^&*()-_=+[]{};:,.<>?/|" },
  ];

  const selected = options.filter(
    (opt) => document.querySelector(`#${opt.id}`).checked
  );

  if (selected.length === 0) {
    alert("Selecione pelo menos uma opção");
    return "";
  }

  let chars = selected.map((opt) => opt.chars).join("");

  let password = "";
  for (let i = 0; i < length; i++) {
    const randoIndex = Math.floor(Math.random() * chars.length);
    password += chars[randoIndex];
  }

  return password;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = generatePassword();
  console.log(password);
});
