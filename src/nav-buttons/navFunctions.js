import { createElement, newTasksContainer } from "..";
import { TaskButtons } from "../task-buttons/taskButtons";

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
  if (eachTask.label != "") {
    const label = createElement("p", tasksContainer, "label-text");
    label.textContent = "Priority:   " + eachTask.label;
  }
  if (eachTask.dueDate != "") {
    const dueText = createElement("p", tasksContainer, "due-text");
    dueText.textContent = "Due date:   ";
    const due = createElement("input", dueText);
    due.setAttribute("type", "date");
    due.value = eachTask.dueDate;
    due.disabled = true;
  }

  setContainerColor(eachTask.label);

  function setContainerColor(label) {
    let priorityLabel = "";

    if (label != "") {
      if (label === "Urgent") {
        priorityLabel = "urgent";
      } else if (label === "High-Priority") {
        priorityLabel = "high-priority";
      } else if (label === "Normal") {
        priorityLabel = "normal";
      } else if (label === "Low-Priority") {
        priorityLabel = "low-priority";
      }
      tasksContainer.classList.add(priorityLabel);
    }
  }

  TaskButtons(tasksContainer, eachTask.index);
}
