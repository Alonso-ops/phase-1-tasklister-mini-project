document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  let sortAsc = true;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const desc = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const user = document.getElementById("task-user").value;
    const due = document.getElementById("task-due").value;

    const li = document.createElement("li");
    li.setAttribute("data-priority", priority);

    const colorMap = {
      high: "red",
      medium: "orange",
      low: "green"
    };
    li.style.color = colorMap[priority];

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

    taskList.appendChild(li);
    form.reset();
  });

  document.getElementById("sort-btn").addEventListener("click", () => {
    const tasks = Array.from(taskList.children);
    const priorityRank = { high: 1, medium: 2, low: 3 };

    tasks.sort((a, b) => {
      const aVal = priorityRank[a.getAttribute("data-priority")];
      const bVal = priorityRank[b.getAttribute("data-priority")];
      return sortAsc ? aVal - bVal : bVal - aVal;
    });

    taskList.innerHTML = "";
    tasks.forEach(task => taskList.appendChild(task));
    sortAsc = !sortAsc;
  });
});
