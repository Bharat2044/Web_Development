// Create a simple to-do app to add TODO items to the list through an input field and a button.


const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoItem = document.createElement("li");
        todoItem.textContent = todoText;
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
});