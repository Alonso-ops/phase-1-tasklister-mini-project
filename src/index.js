document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  const sortBtn = document.getElementById("sort-btn");
  let sortAsc = true;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const desc = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const user = document.getElementById("task-user").value;
    const due = document.getElementById("task-due").value;


    const li = document.createElement("li");
    li.setAttribute("data-priority", priority);

    const colorMap = { high: "red", medium: "orange", low: "green" };
    li.style.color = colorMap[priority];

    li.innerHTML = `
      <strong>${desc}</strong> 
      (Assigned to: ${user || "N/A"}, Due: ${due || "N/A"}, Priority: ${priority})
    `;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "10px";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit task:", desc);
      if (newText && newText.trim() !== "") {
        li.querySelector("strong").textContent = newText;
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    form.reset();
  });

  sortBtn.addEventListener("click", () => {
    const tasks = Array.from(taskList.children);
    const rank = { high: 1, medium: 2, low: 3 };

    tasks.sort((a, b) => {
      const aVal = rank[a.getAttribute("data-priority")];
      const bVal = rank[b.getAttribute("data-priority")];
      return sortAsc ? aVal - bVal : bVal - aVal;
    });

    taskList.innerHTML = "";
    tasks.forEach(task => taskList.appendChild(task));
    sortAsc = !sortAsc;
  });
});
