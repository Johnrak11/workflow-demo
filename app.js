// Team To-Do List
// Each feature is marked with its Jira ticket key (DEMO-1 ... DEMO-5).

// ----- DEMO-1: Project setup -----
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const errorMessage = document.getElementById("error-message");
const taskCount = document.getElementById("task-count");

// Tasks are saved in the browser, so they stay after a page refresh.
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    if (task.done) item.classList.add("done");

    // DEMO-3: Mark a task as done
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTask(index));

    const text = document.createElement("span");
    text.textContent = task.text;

    // DEMO-4: Delete a task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => deleteTask(index));

    item.append(checkbox, text, deleteButton);
    list.appendChild(item);
  });

  const remaining = tasks.filter((task) => !task.done).length;
  taskCount.textContent = `${remaining} of ${tasks.length} tasks left`;
}

// ----- DEMO-2: Add a new task -----
function addTask(text) {
  tasks.push({ text: text, done: false });
  saveTasks();
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  // ----- DEMO-5 (bug fix): do not allow empty tasks -----
  if (text === "") {
    errorMessage.textContent = "Please type a task first.";
    return;
  }

  errorMessage.textContent = "";
  addTask(text);
  input.value = "";
  input.focus();
});

// ----- DEMO-3: Mark a task as done -----
function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  render();
}

// ----- DEMO-4: Delete a task -----
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  render();
}

render();
