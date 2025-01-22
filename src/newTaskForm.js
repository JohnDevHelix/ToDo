import { createElement, body, taskHeaderText } from ".";
import { NewTask } from "./newTaskClass";
import { tasksArr } from ".";
import { NavFunctions } from "./navFunctions";

export function NewTaskForm() {
  const newTaskModal = createElement("div", body, "task-modal");
  newTaskModal.style.display = "block";
  const newTaskContent = createElement("div", newTaskModal, "modal-container");
  const taskEditable = createElement("div", newTaskContent, "editable-content");

  const newFormCreateElement = (
    element,
    parent,
    id,
    attr1,
    value1,
    attr2,
    value2
  ) => {
    const newElement = createElement(element, parent);
    newElement.id = id;
    if (element != "option") {
      newElement.setAttribute(attr1, value1);
      if (attr2 != null) newElement.setAttribute(attr2, value2);
    } else {
      newElement.value = attr1;
      newElement.textContent = value1;
    }
    return newElement;
  };

  // Title
  const newTitle = newFormCreateElement(
    "h2",
    taskEditable,
    "title",
    "data-placeholder",
    "Title",
    "contenteditable",
    "true"
  );

  // Description
  const newTask = newFormCreateElement(
    "div",
    taskEditable,
    "description",
    "data-placeholder",
    "To do ..",
    "contenteditable",
    "true"
  );

  const taskClickable = createElement(
    "div",
    newTaskContent,
    "clickable-content"
  );

  // Due Date
  const dueDate = newFormCreateElement(
    "input",
    taskClickable,
    "date",
    "placeholder",
    "Due Date",
    "type",
    "date"
  );

  // Color
  const bgColor = newFormCreateElement(
    "input",
    taskClickable,
    "bgColor",
    "type",
    "color"
  );

  // Label
  const label = newFormCreateElement("select", taskClickable, "label");

  const defaultlabel = newFormCreateElement(
    "option",
    label,
    "label",
    "",
    "Select Priority"
  );
  defaultlabel.disabled = "true";

  newFormCreateElement("option", label, "urgent", "Urgent", "Urgent");
  newFormCreateElement(
    "option",
    label,
    "high-priority",
    "High-Priority",
    "High-Priority"
  );
  newFormCreateElement("option", label, "normal", "Normal", "Normal");
  newFormCreateElement(
    "option",
    label,
    "low-priority",
    "Low-Priority",
    "Low-Priority"
  );

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
      NavFunctions(newToDo);
      newTaskModal.style.display = "none";
    } else {
      newTaskModal.style.display = "none";
    }
  });
}
