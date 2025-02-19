import { createElement, taskHeaderText } from "..";
import { TaskFunctions } from "./taskFunctions";

// Buttons
export function TaskButtons(taskContainer, arrIndex) {
  function createButtons(element, parent, className, id, text) {
    const taskButtons = createElement(element, parent, className);
    taskButtons.id = id;
    taskButtons.textContent = text;
  }

  const taskButtons = createElement(
    "div",
    taskContainer,
    "taskButton-container"
  );

  if (taskHeaderText.id === "trash-header") {
    createButtons("button", taskButtons, "task-buttons", "remove", "Remove");
    createButtons("button", taskButtons, "task-buttons", "restore", "Restore");
  } else {
    if (taskHeaderText.id === "completed-header") {
      createButtons("button", taskButtons, "task-buttons", "undo", "Undo");
    } else {
      createButtons(
        "button",
        taskButtons,
        "task-buttons",
        "complete",
        "Completed"
      );
    }
    createButtons("button", taskButtons, "task-buttons", "delete", "Delete");
  }

  TaskFunctions(taskContainer, arrIndex);
}
