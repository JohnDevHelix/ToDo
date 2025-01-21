import { newTasksContainer } from ".";
import { NewTaskForm } from "./newTaskForm";
import { TodayReminder } from "./today";
import { ToDo } from "./todo";
import { UpcomingRemider } from "./upcoming";
import { SubNav } from "./subNav";
import { Urgent } from "./urgent";

export function NavButtons() {
  SubNav();
  const firstChildSelector = (id) => document.querySelector(id).firstChild;

  const newTaskButton = firstChildSelector("#new");
  const toDoButton = firstChildSelector("#todo");
  const todayButton = firstChildSelector("#today");
  const upcomingButton = firstChildSelector("#upcoming");
  const urgentButton = firstChildSelector("#urgent");
  const highPrioButton = firstChildSelector("#high-priority");
  const normalButton = firstChildSelector("#normal");
  const lowPrioButton = firstChildSelector("#low-priority");

  newTaskButton.addEventListener("click", () => {
    NewTaskForm();
  });

  const functionButtons = [
    toDoButton,
    todayButton,
    upcomingButton,
    urgentButton,
    highPrioButton,
    normalButton,
    lowPrioButton,
  ];

  const functions = [ToDo, TodayReminder, UpcomingRemider, Urgent];

  functionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      newTasksContainer.innerHTML = "";
      functions[index]();
    });
  });
}
