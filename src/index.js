document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = e.target["new-task-description"].value;
  console.log(todo);
  handleToDo(todo);
});
});
function handleToDo(todo){
let p = document.createElement('p')
let btn = document.createElement('button')
p.textContent = todo;
document.querySelector('#list').appendChild(p)
}
function handleToDo(todo) {
 
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let taskText = document.createTextNode(` ${todo}`);
  li.appendChild(checkbox);
  li.appendChild(taskText);

  document.querySelector("#tasks").appendChild(li);
}

function handleToDo(todo) {

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskText = document.createTextNode(` ${todo} `);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  document.querySelector("#tasks").appendChild(li);
}

