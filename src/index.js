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


