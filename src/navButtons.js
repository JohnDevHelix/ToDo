import { newTasksContainer, tasksArr } from ".";
import { NewTaskForm } from "./newTaskForm";
import { NavBarFunctions } from "./navBarFunctions";
import { SubNav } from "./subNav";
import { SearchBar } from "./search";

export function NavButtons() {
  SubNav();
  const functionButtons = [];

  const firstChildSelector = (id) => {
    const newButton = document.querySelector(id).firstChild;
    functionButtons.push(newButton);
  };

  firstChildSelector("#new");
  firstChildSelector("#todo");
  firstChildSelector("#today");
  firstChildSelector("#upcoming");
  firstChildSelector("#urgent");
  firstChildSelector("#high-priority");
  firstChildSelector("#normal");
  firstChildSelector("#low-priority");
  firstChildSelector("#completed");
  firstChildSelector("#trash");

  functionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.parentNode.id === "new") {
        NewTaskForm();
      } else {
        newTasksContainer.innerHTML = "";
        const buttonParent = button.parentNode.id;
        NavBarFunctions(buttonParent);
        SearchBar();
      }
    });
  });
}
