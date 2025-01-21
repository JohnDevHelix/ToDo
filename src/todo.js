import { tasksArr, createElement, newTasksContainer, taskHeaderText } from ".";

export function ToDo() {
  taskHeaderText.textContent = "To Do List";
  tasksArr.forEach((task) => {
    const toDoTasksContainer = createElement("div", newTasksContainer, "tasks");
    const toDoTasks = createElement("div", toDoTasksContainer, "todo-tasks");
    const h2 = createElement("h2", toDoTasks);
    task.title != ""
      ? (h2.textContent = task.title)
      : (h2.textContent = "Untitled");
    const desc = createElement("p", toDoTasks);
    task.description != ""
      ? (desc.textContent = task.description)
      : (desc.textContent = "No description");
    const due = createElement("input", toDoTasks);
    due.setAttribute("type", "date");
    due.value = task.dueDate;
    toDoTasks.classList.add("coral");
    const label = createElement("p", toDoTasks);
    label.textContent = task.label;
  });
}
