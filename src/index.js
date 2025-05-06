document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const desc = document.getElementById("new-task-description").value;

    const li = document.createElement("li");
    li.textContent = desc;

    taskList.appendChild(li);
  });
});

