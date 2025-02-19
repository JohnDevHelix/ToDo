import { NewTask } from "./newTaskClass";
import { NavFunctions } from "./nav-buttons/navFunctions";
import { tasksArr } from ".";
import { SetItem } from "./localStorage/setItem";

export function DefaultTask() {
  const defaultGrocery = new NewTask(
    "Groceries",
    "Buy groceries",
    "2025-01-01",
    "Urgent",
    0
  );

  tasksArr.push(defaultGrocery);
  SetItem("tasks", tasksArr);
  NavFunctions(defaultGrocery);
}
