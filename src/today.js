import { tasksArr, createElement, newTasksContainer, taskHeaderText } from ".";

export function TodayReminder() {
  taskHeaderText.textContent = "Today";
  tasksArr.forEach((task) => {
    const today = new Date().toDateString();
    const taskDate = new Date(task.dueDate).toDateString();
    if (today === taskDate) {
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
