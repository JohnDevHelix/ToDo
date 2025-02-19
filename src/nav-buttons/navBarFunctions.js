import { tasksArr, taskHeaderText, trashArr, completedArr } from "..";
import { GetItem } from "../localStorage/getItem";
import { NavFunctions } from "./navFunctions";

export function NavBarFunctions(parentId) {
  switch (parentId) {
    case "todo":
    case "todo-header": {
      taskHeaderText.textContent = "To Do List";
      taskHeaderText.id = "todo-header";
      break;
    }
    case "today":
    case "today-header": {
      taskHeaderText.textContent = "Reminders - Today";
      taskHeaderText.id = "today-header";
      break;
    }
    case "upcoming":
    case "upcoming-header": {
      taskHeaderText.textContent = "Reminders - Upcoming";
      taskHeaderText.id = "upcoming-header";
      break;
    }
    case "urgent":
    case "urgent-header": {
      taskHeaderText.textContent = "Priority - Urgent";
      taskHeaderText.id = "urgent-header";
      break;
    }
    case "high-priority":
    case "high-header": {
      taskHeaderText.textContent = "Priority - High";
      taskHeaderText.id = "high-header";
      break;
    }
    case "normal":
    case "normal-header": {
      taskHeaderText.textContent = "Priority - Normal";
      taskHeaderText.id = "normal-header";
      break;
    }
    case "low-priority":
    case "low-header": {
      taskHeaderText.textContent = "Priority - Low";
      taskHeaderText.id = "low-header";
      break;
    }
    case "completed":
    case "completed-header": {
      taskHeaderText.textContent = "To Do - Completed";
      taskHeaderText.id = "completed-header";
      GetItem("completed");
      break;
    }
    case "trash":
    case "trash-header": {
      taskHeaderText.textContent = "To Do - Trash";
      taskHeaderText.id = "trash-header";
      GetItem("deleted");
      break;
    }
  }

  tasksArr.forEach((task) => {
    const today = new Date();
    const taskDate = new Date(task.dueDate);
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const taskYear = taskDate.getFullYear();
    const taskMonth = taskDate.getMonth() + 1;
    const tasksDate = taskDate.getDate();

    if (
      ["todo", "todo-header"].includes(parentId) ||
      (today.toDateString() === taskDate.toDateString() &&
        ["today", "today-header"].includes(parentId)) ||
      taskYear > todayYear ||
      (taskYear <= todayYear && taskMonth > todayMonth) ||
      (taskYear <= todayYear &&
        taskMonth <= todayMonth &&
        tasksDate > todayDate &&
        ["upcoming", "upcoming-header"].includes(parentId)) ||
      (task.label === "Urgent" &&
        ["urgent", "urgent-header"].includes(parentId)) ||
      (task.label === "High-Priority" &&
        ["high-priority", "high-header"].includes(parentId)) ||
      (task.label === "Normal" &&
        ["normal", "normal-header"].includes(parentId)) ||
      (task.label === "Low-Priority" &&
        ["low-priority", "low-header"].includes(parentId))
    )
      NavFunctions(task);
  });
}
