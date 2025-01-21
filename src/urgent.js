import { tasksArr, createElement, newTasksContainer, taskHeaderText } from ".";

export function Urgent() {
  taskHeaderText.textContent = "Labels - Urgent";
  tasksArr.forEach((task) => {
    if (task.label === "Urgent") {
      const urgentContainer = createElement("div", newTasksContainer, "tasks");
      const h2 = createElement("h2", urgentContainer);
      task.title != ""
        ? (h2.textContent = task.title)
        : (h2.textContent = "Untitled");
      const desc = createElement("p", urgentContainer);
      task.description != ""
        ? (desc.textContent = task.description)
        : (desc.textContent = "No description");
      const due = createElement("input", urgentContainer);
      due.setAttribute("type", "date");
      due.value = task.dueDate;
      urgentContainer.classList.add("coral");
      const label = createElement("p", urgentContainer);
      label.textContent = task.label;
    }
  });
}
