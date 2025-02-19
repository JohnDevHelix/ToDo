import { createElement, body, taskHeaderText, tasksArr } from ".";
import { NewTask } from "./newTaskClass";
import { NavFunctions } from "./nav-buttons/navFunctions";
import { SearchBar } from "./search";
import { SetItem } from "./localStorage/setItem";

export function NewTaskForm() {
  const newTaskModal = createElement("div", body, "task-modal");
  newTaskModal.style.display = "block";
  const newTaskContent = createElement("div", newTaskModal, "modal-container");

  // Header
  const headerContainer = createElement("div", newTaskContent, "new-header");
  const headerContent = createElement("h2", headerContainer);
  headerContent.textContent = "New Task";

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

  const taskEditable = createElement("div", newTaskContent, "editable-content");

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

  const fieldsClickable = createElement(
    "div",
    taskClickable,
    "fields-container"
  );

  // Due Date
  const dateField = createElement("fieldset", fieldsClickable);
  const dateLegend = createElement("legend", dateField);
  dateLegend.innerHTML = "Due Date";
  const dueDate = newFormCreateElement(
    "input",
    dateField,
    "date",
    "placeholder",
    "Due Date",
    "type",
    "date"
  );

  // Label
  const priorityField = createElement("fieldset", fieldsClickable);
  const priorityLegend = createElement("legend", priorityField);
  priorityLegend.innerHTML = "Priority";
  const label = newFormCreateElement("select", priorityField, "label");
  const defaultlabel = newFormCreateElement(
    "option",
    label,
    "defaultlabel",
    "",
    "Select Priority"
  );
  defaultlabel.disabled = "true";

  newFormCreateElement("option", label, "new-urgent", "Urgent", "Urgent");
  newFormCreateElement(
    "option",
    label,
    "new-high",
    "High-Priority",
    "High-Priority"
  );
  newFormCreateElement("option", label, "new-normal", "Normal", "Normal");
  newFormCreateElement(
    "option",
    label,
    "new-low",
    "Low-Priority",
    "Low-Priority"
  );

  const buttonsClickable = createElement(
    "div",
    taskClickable,
    "buttons-container"
  );

  // Submit button
  const submit = createElement("button", buttonsClickable, "modal-button");
  submit.setAttribute("title", "Add Task");
  submit.textContent = "✓";

  // Close button
  const close = createElement("button", buttonsClickable, "modal-button");
  close.setAttribute("title", "Close");
  close.textContent = "X";

  document.querySelectorAll("[contenteditable]").forEach((content) => {
    content.addEventListener("input", function () {
      if (this.textContent.trim().length === 0) {
        this.innerHTML = "";
      } else {
        this.innerText.replace(/\n/g, "<br />");
      }
    });
  });

  submit.addEventListener("click", () => {
    const newToDo = new NewTask(
      newTitle.innerText,
      newTask.innerText,
      dueDate.value,
      label.value,
      tasksArr.length
    );

    tasksArr.push(newToDo);
    SetItem("tasks", tasksArr);
    console.log(tasksArr);

    const today = new Date();
    const taskDate = new Date(newToDo.dueDate);
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDate = today.getDate();
    const taskYear = taskDate.getFullYear();
    const taskMonth = taskDate.getMonth() + 1;
    const tasksDate = taskDate.getDate();

    if (
      taskHeaderText.id === "todo-header" ||
      (taskHeaderText.id === "today-header" &&
        today.toDateString() === taskDate.toDateString()) ||
      (taskHeaderText.id === "upcoming-header" &&
        (taskYear > todayYear ||
          (taskYear <= todayYear && taskMonth > todayMonth) ||
          (taskYear <= todayYear &&
            taskMonth <= todayMonth &&
            tasksDate > todayDate))) ||
      (taskHeaderText.id === "urgent-header" && newToDo.label === "Urgent") ||
      (taskHeaderText.id === "high-header" &&
        newToDo.label === "High-Priority") ||
      (taskHeaderText.id === "normal-header" && newToDo.label === "Normal") ||
      (taskHeaderText.id === "low-header" && newToDo.label === "Low-Priority")
    ) {
      NavFunctions(newToDo);
      SearchBar();
    }
    newTaskModal.remove();
  });

  close.addEventListener("click", () => {
    newTaskModal.remove();
  });
}
