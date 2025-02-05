import { createElement, newTasksContainer } from ".";
import { TaskButtons } from "./taskButtons";

export function NavFunctions(eachTask) {
  const tasksContainer = createElement("div", newTasksContainer, "tasks");
  const h2 = createElement("h2", tasksContainer);
  eachTask.title != ""
    ? (h2.textContent = eachTask.title)
    : (h2.textContent = "Untitled");
  const desc = createElement("p", tasksContainer);
  eachTask.description != ""
    ? (desc.textContent = eachTask.description)
    : (desc.textContent = "No description");
  const due = createElement("input", tasksContainer);
  due.setAttribute("type", "date");
  due.value = eachTask.dueDate;
  tasksContainer.classList.add("coral");
  const label = createElement("p", tasksContainer);
  label.textContent = eachTask.label;

  TaskButtons(tasksContainer, eachTask.index);
}
