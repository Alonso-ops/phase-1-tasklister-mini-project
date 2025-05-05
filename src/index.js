document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;

    const li = document.createElement("li");
    li.textContent = taskDescription;

    document.getElementById("tasks").appendChild(li);
  });
});

