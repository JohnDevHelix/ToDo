import { completedArr, tasksArr, trashArr } from "..";
import { NavFunctions } from "../nav-buttons/navFunctions";

export function GetItem(label) {
  const getItems = localStorage.getItem(label);
  const getTask = JSON.parse(getItems);

  if (getTask != null) {
    let targetArray;
    switch (label) {
      case "tasks":
        targetArray = tasksArr;
        break;
      case "completed":
        targetArray = completedArr;
        break;
      case "deleted":
        targetArray = trashArr;
        break;
    }

    targetArray.length = 0;
    getTask.forEach((task) => {
      targetArray.push(task);
      NavFunctions(task);
    });
  }
}
