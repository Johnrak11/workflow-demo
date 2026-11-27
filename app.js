// [TDL-4] As a user, I want to add a task, so I can remember what to do
// Note: "mark as done" is TDL-5 and "delete" is TDL-6 (next tickets).

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

// Sample tasks, same as the Figma design
let tasks = [
  { text: "Design screen in Figma", done: true },
  { text: "Create Jira tickets", done: false },
  { text: "Open pull request", done: false },
];

function render() {
  list.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    if (task.done) item.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    item.append(checkbox, text, deleteButton);
    list.appendChild(item);
  });

  const remaining = tasks.filter((task) => !task.done).length;
  taskCount.textContent = `${remaining} of ${tasks.length} tasks left`;
}

// [TDL-4] Add a new task when the form is submitted (click "Add" or press Enter)
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading

  tasks.push({ text: input.value, done: false });
  input.value = "";
  input.focus();
  render();
});

render();
