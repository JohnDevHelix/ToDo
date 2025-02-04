import { createElement, newTasksContainer } from ".";
import { NewTask } from "./newTaskClass";
import { tasksArr } from ".";
import { TaskButtons } from "./taskButtons";

export function defaultTask() {
  const defaultGrocery = new NewTask(
    "Groceries",
    "Buy groceries",
    "2025-01-01",
    "#FF0000",
    "Urgent",
    0
  );

  const defaultTask = createElement("div", newTasksContainer, "tasks");
  const h2 = createElement("h2", defaultTask);
  h2.textContent = defaultGrocery.title;
  const desc = createElement("p", defaultTask);
  desc.textContent = defaultGrocery.description;
  const due = createElement("input", defaultTask);
  due.setAttribute("type", "date");
  due.value = defaultGrocery.dueDate;
  defaultTask.classList.add("coral");
  const label = createElement("p", defaultTask);
  label.textContent = defaultGrocery.label;

  tasksArr.push(defaultGrocery);

  TaskButtons(defaultTask, defaultGrocery.index);
}
