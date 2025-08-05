document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");
  let editMode = false;
  editItem = null;

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      if (editMode) {
        editItem.firstChild.textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        addTodoItem(todoText);
      }
    } else {
      alert("Please Enter a Valid Task");
    }
    todoInput.value = "";
  });

  todoList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.innerText === "❌") {
        todoItem.remove();
      } else if (target.innerText === "✏️") {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
      }
      console.log(target);
    }
  });

  function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    todoItem.innerHTML = `<span>${todoText}</span>`;
    editBtn.textContent = "✏️";
    removeBtn.textContent = "❌";

    todoItem.append(editBtn, removeBtn);
    todoList.appendChild(todoItem);
  }
});
