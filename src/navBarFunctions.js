import { tasksArr, taskHeaderText } from ".";
import { NavFunctions } from "./navFunctions";

export function NavBarFunctions(parentId) {
  tasksArr.forEach((task) => {
    switch (parentId) {
      case "todo": {
        taskHeaderText.textContent = "To Do List";
        NavFunctions(task);
        break;
      }
      case "today": {
        taskHeaderText.textContent = "Reminders - Today";
        const today = new Date().toDateString();
        const taskDate = new Date(task.dueDate).toDateString();
        if (today === taskDate) NavFunctions(task);
        break;
      }
      case "upcoming": {
        taskHeaderText.textContent = "Reminders - Upcoming";
        const today = new Date();
        const taskDate = new Date(task.dueDate);
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth() + 1;
        const todayDate = today.getDate();
        const taskYear = taskDate.getFullYear();
        const taskMonth = taskDate.getMonth() + 1;
        const tasksDate = taskDate.getDate();

        if (
          taskYear > todayYear ||
          (taskYear <= todayYear && taskMonth > todayMonth) ||
          (taskYear <= todayYear &&
            taskMonth <= todayMonth &&
            tasksDate > todayDate)
        )
          NavFunctions(task);
        break;
      }
      case "urgent": {
        taskHeaderText.textContent = "Priority - Urgent";
        if (task.label === "Urgent") NavFunctions(task);
        break;
      }
      case "high-priority": {
        taskHeaderText.textContent = "Priority - High";
        if (task.label === "High-Priority") NavFunctions(task);
        break;
      }
      case "normal": {
        taskHeaderText.textContent = "Priority - Normal";
        if (task.label === "Normal") NavFunctions(task);
        break;
      }
      case "low-priority": {
        taskHeaderText.textContent = "Priority - Low";
        if (task.label === "low-Priority") NavFunctions(task);
        break;
      }
    }
  });
}
