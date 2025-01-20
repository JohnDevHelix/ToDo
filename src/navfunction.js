import { newTasksContainer } from ".";
import { NewTaskForm } from "./newTaskForm";
import { Tasks } from "./tasks";

export function NavButtons() {
  // New Task
  const newTaskButton = document.querySelector("#new").firstChild;
  const toDoButton = document.querySelector("#todo").firstChild;

  newTaskButton.addEventListener("click", () => {
    NewTaskForm();
  });

  toDoButton.addEventListener("click", () => {
    newTasksContainer.innerHTML = "";
    Tasks();
  });
}
