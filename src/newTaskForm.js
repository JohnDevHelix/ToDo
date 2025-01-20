import { NavButtons } from "./navfunction";
import { createElement, body, newTasksContainer } from ".";
import { NewTask } from "./newTaskClass";
import { mainContainer } from ".";

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

  // Priority Color
  const prioColor = createElement("input", taskClickable);
  prioColor.setAttribute("type", "color");
  prioColor.id = "priority";

  // Label
  const label = createElement("select", taskClickable);
  prioColor.id = "label";
  const defaultlabel = createElement("option", label);
  defaultlabel.value = "Label";
  defaultlabel.textContent = "Labels";
  const addLabel = createElement("option", label);
  addLabel.value = "Add Label";
  addLabel.textContent = "Add Label";

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
      prioColor.value,
      label.value
    );

    if (newTitle.textContent || newTask.textContent != "") {
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

      alert("Task Added");
      newTaskModal.style.display = "none";
    } else {
      newTaskModal.style.display = "none";
    }
  });
}
