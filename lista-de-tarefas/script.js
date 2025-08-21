const input = document.querySelector("#task");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector("#task-list");

let creatTask = () => {
  event.preventDefault(); //impede o codigo de recarregar a página no click // prevents refresh at the click//
  let valor = input.value.trim();

  if (valor === "") return;

  let li = document.createElement("li");

  //   criando o texto // creating the text
  let span = document.createElement("span");
  span.textContent = valor;

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;

  // adiciona tudo dentro da li // adding everything inside li
  li.appendChild(span);
  li.appendChild(deleteBtn);

  //   colocar a li na lista // put li on the list
  taskList.appendChild(li);

  input.value = "";
  input.focus();
};

addBtn.addEventListener("click", creatTask);

let deleteTask = () => {};

taskList.addEventListener("click", (event) => {
  if (event.target.closest(".delete-btn")) {
    const li = event.target.closest("li");
    li.remove();
  }
});
