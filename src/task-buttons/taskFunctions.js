import {
  taskHeaderText,
  trashArr,
  tasksArr,
  newTasksContainer,
  completedArr,
  searchSelector,
} from "..";
import { NavBarFunctions } from "../nav-buttons/navBarFunctions";
import { RemoveItem } from "../localStorage/removeItem";
import { SearchBar } from "../search";
import { SetItem } from "../localStorage/setItem";

export function TaskFunctions(container, arrIndex) {
  SearchBar();

  container.addEventListener("click", (event) => {
    const arrFunctions = (from, to, newLabel, removeLabel) => {
      if (to != undefined) {
        to.push(from[arrIndex]);
        for (let i = 0; i < to.length; i++) {
          to[i].index = i;
        }
        SetItem(newLabel, to);
      }
      from.splice(arrIndex, 1);
      for (let i = 0; i < from.length; i++) {
        from[i].index = i;
      }
      RemoveItem(from, removeLabel);
    };
    if (event.target.nodeName === "BUTTON") {
      if (["completed-header", "trash-header"].includes(taskHeaderText.id)) {
        switch (event.target.id) {
          case "undo": {
            arrFunctions(completedArr, tasksArr, "tasks", "completed");
            break;
          }
          case "delete": {
            arrFunctions(completedArr, trashArr, "deleted", "completed");
            break;
          }
          case "remove": {
            arrFunctions(trashArr, undefined, null, "deleted");
            break;
          }
          case "restore": {
            arrFunctions(trashArr, tasksArr, "tasks", "deleted");
            break;
          }
        }
      } else {
        switch (event.target.id) {
          case "complete": {
            arrFunctions(tasksArr, completedArr, "completed", "tasks");
            break;
          }
          case "delete": {
            arrFunctions(tasksArr, trashArr, "deleted", "tasks");
          }
        }
      }
      newTasksContainer.innerHTML = "";
      NavBarFunctions(taskHeaderText.id);
      searchSelector.value = "";
    }
  });
}
