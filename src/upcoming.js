import { tasksArr, createElement, newTasksContainer, taskHeaderText } from ".";

export function UpcomingRemider() {
  taskHeaderText.textContent = "Reminders - Upcoming";
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
      taskYear > todayYear ||
      (taskYear <= todayYear && taskMonth > todayMonth) ||
      (taskYear <= todayYear &&
        taskMonth <= todayMonth &&
        tasksDate > todayDate)
    ) {
      const todayTask = createElement("div", newTasksContainer, "tasks");
      const h2 = createElement("h2", todayTask);
      task.title != ""
        ? (h2.textContent = task.title)
        : (h2.textContent = "Untitled");
      const desc = createElement("p", todayTask);
      task.description != ""
        ? (desc.textContent = task.description)
        : (desc.textContent = "No description");
      const due = createElement("input", todayTask);
      due.setAttribute("type", "date");
      due.value = task.dueDate;
      todayTask.classList.add("coral");
      const label = createElement("p", todayTask);
      label.textContent = task.label;
    }
  });
}
