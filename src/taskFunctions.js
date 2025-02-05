import {
  taskHeaderText,
  trashArr,
  tasksArr,
  newTasksContainer,
  completedArr,
} from ".";
import { NavBarFunctions } from "./navBarFunctions";
import { SearchBar } from "./search";

export function TaskFunctions(container, arrIndex) {
  SearchBar();

  container.addEventListener("click", (event) => {
    const arrFunctions = (from, to) => {
      if (to != undefined) {
        to.push(from[arrIndex]);
        for (let i = 0; i < to.length; i++) {
          to[i].index = i;
        }
      }
      from.splice(arrIndex, 1);
      for (let i = 0; i < from.length; i++) {
        from[i].index = i;
      }
    };
    if (event.target.nodeName === "BUTTON") {
      if (["completed-header", "trash-header"].includes(taskHeaderText.id)) {
        switch (event.target.id) {
          case "undo": {
            arrFunctions(completedArr, tasksArr);
            break;
          }
          case "delete": {
            arrFunctions(completedArr, trashArr);
            break;
          }
          case "remove": {
            arrFunctions(trashArr);
            break;
          }
          case "restore": {
            arrFunctions(trashArr, tasksArr);
            break;
          }
        }
      } else {
        switch (event.target.id) {
          case "complete": {
            arrFunctions(tasksArr, completedArr);
            break;
          }
          case "delete": {
            arrFunctions(tasksArr, trashArr);
          }
        }
      }

      newTasksContainer.innerHTML = "";
      NavBarFunctions(taskHeaderText.id);
    }
  });
}
