const todoList = [];

function handleKeyDown(event) {
  if (event.key === "Enter") {
    addText();
  }
}
function addText() {
  const inputElement = document.querySelector(".js-name-input");
  const dateElement = document.querySelector(".js-date-input");

  const inputText = inputElement.value;
  const dateText = dateElement.value;
  const item = { name: "", date: "" };
  if (inputElement != "") {
    item["name"] = inputText;
    item["date"] = dateText;
    todoList.push(item);
    renderTodoList();
  }

  inputElement.value = "";
  dateElement.value = "";
}

function renderTodoList() {
  const divElement = document.querySelector(".js-todo-list");
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject["name"];
    const date = todoObject["date"];
    const htmlItem = `
    <div>${name}</div>
     <div>${date}</div>
    <button class="delete-todo-button" onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button>
    `;
    if (name != "") {
      todoListHTML += htmlItem;
    }
  }

  divElement.innerHTML = todoListHTML;
}
