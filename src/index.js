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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("task-form");
  const list = document.getElementById("task-list");
  let sortAsc = true;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const desc = document.getElementById("task-desc").value;
    const priority = document.getElementById("priority").value;
    const user = document.getElementById("task-user").value;
    const due = document.getElementById("task-due").value;

    const li = document.createElement("li");
    li.setAttribute("data-priority", priority);

    const colors = { high: "red", medium: "orange", low: "green" };
    li.style.color = colors[priority];

   
    li.innerHTML = `
      <strong>${desc}</strong> 
      (Assigned to: ${user || "N/A"}, Due: ${due || "N/A"}, Priority: ${priority})
      <button class="edit">✏️</button>
      <button class="delete">🗑️</button>
    `;

    li.querySelector(".delete").addEventListener("click", () => li.remove());

       li.querySelector(".edit").addEventListener("click", () => {
      const newDesc = prompt("Edit task description:", desc);
      if (newDesc) {
        li.querySelector("strong").textContent = newDesc;
      }
    });

    list.appendChild(li);
    form.reset();
  });

  document.getElementById("sort-btn").addEventListener("click", () => {
    const tasks = Array.from(list.children);
    const order = { high: 1, medium: 2, low: 3 };

    tasks.sort((a, b) => {
      const aVal = order[a.getAttribute("data-priority")];
      const bVal = order[b.getAttribute("data-priority")];
      return sortAsc ? aVal - bVal : bVal - aVal;
    });

    list.innerHTML = "";
    tasks.forEach((task) => list.appendChild(task));
    sortAsc = !sortAsc;
  });
});

