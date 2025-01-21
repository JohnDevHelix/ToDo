import { createElement, body, newTasksContainer, taskHeaderText } from ".";
import { NewTask } from "./newTaskClass";
import { tasksArr } from ".";

export function NewTaskForm() {
  const newTaskModal = createElement("div", body, "task-modal");
  newTaskModal.style.display = "block";
  const newTaskContent = createElement("div", newTaskModal, "modal-container");
  const taskEditable = createElement("div", newTaskContent, "editable-content");

  // Title
  const newTitle = createElement("h2", taskEditable);
  newTitle.setAttribute("data-placeholder", "Title");
  newTitle.setAttribute("contenteditable", "true");
  newTitle.id = "title";

  // Description
  const newTask = createElement("div", taskEditable);
  newTask.setAttribute("data-placeholder", "To do ..");
  newTask.setAttribute("contenteditable", "true");
  newTask.id = "description";

  const taskClickable = createElement(
    "div",
    newTaskContent,
    "clickable-content"
  );
  // Due Date
  const dueDate = createElement("input", taskClickable);
  dueDate.setAttribute("placeholder", "Due Date");
  dueDate.setAttribute("type", "date");
  dueDate.id = "date";

  // Color
  const bgColor = createElement("input", taskClickable);
  bgColor.setAttribute("type", "color");
  bgColor.id = "priority";

  // Label
  const label = createElement("select", taskClickable);
  label.id = "label";
  const defaultlabel = createElement("option", label);
  defaultlabel.value = "Label";
  defaultlabel.textContent = "Labels";
  const p0 = createElement("option", label);
  p0.value = "Urgent";
  p0.textContent = "Urgent";
  const p1 = createElement("option", label);
  p1.value = "High Priority";
  p1.textContent = "High Priority";
  const p2 = createElement("option", label);
  p2.value = "Normal";
  p2.textContent = "Normal";
  const p3 = createElement("option", label);
  p3.value = "Low Priority";
  p3.textContent = "Low Priority";

  // Submit
  const submit = createElement("button", taskClickable, "submit-todo");
  submit.textContent = "Add Task";

  document.querySelectorAll("[contenteditable]").forEach((content) => {
    content.addEventListener("input", function () {
      if (this.textContent.trim().length === 0) {
        this.innerHTML = "";
      }
    });
  });

  submit.addEventListener("click", () => {
    const newToDo = new NewTask(
      newTitle.textContent,
      newTask.textContent,
      dueDate.value,
      bgColor.value,
      label.value
    );

    tasksArr.push(newToDo);

    const today = new Date();
    const taskDate = new Date(newToDo.dueDate);
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const taskYear = taskDate.getFullYear();
    const taskMonth = taskDate.getMonth() + 1;
    const tasksDate = taskDate.getDate();

    if (
      taskHeaderText.textContent === "To Do List" ||
      (taskHeaderText.textContent === "Reminders - Today" &&
        today.toDateString() === taskDate.toDateString()) ||
      (taskHeaderText.textContent === "Reminders - Upcoming" &&
        (taskYear > todayYear ||
          (taskYear <= todayYear && taskMonth > todayMonth) ||
          (taskYear <= todayYear &&
            taskMonth <= todayMonth &&
            tasksDate > todayDate))) ||
      (taskHeaderText.textContent === "Labels - Urgent" &&
        newToDo.label === "Urgent")
    ) {
      const newTaskDiv = createElement("div", newTasksContainer, "tasks");
      const h2 = createElement("h2", newTaskDiv);
      newTitle.textContent != ""
        ? (h2.textContent = newToDo.title)
        : (h2.textContent = "Untitled");
      const desc = createElement("p", newTaskDiv);
      newTask.textContent != ""
        ? (desc.textContent = newToDo.description)
        : (desc.textContent = "No description");
      const due = createElement("input", newTaskDiv);
      due.setAttribute("type", "date");
      due.value = newToDo.dueDate;
      newTaskDiv.classList.add("coral");
      const newLabel = createElement("p", newTaskDiv);
      newLabel.textContent = newToDo.label;
      newTaskModal.style.display = "none";
    } else {
      newTaskModal.style.display = "none";
    }
  });
}
