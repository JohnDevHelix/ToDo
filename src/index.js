import style from "./styles.css";
import { NavButtons } from "./navfunction";
import { NewTaskForm } from "./newTaskForm";
import { Tasks } from "./tasks";
export function createElement(element, parent, className = null) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.classList.add(className);
  return newElement;
}
const content = document.querySelector("#content");
export const mainContainer = createElement("div", content, "main-container");
export const body = document.querySelector("body");

// Main Nav Bar
const header = document.querySelector("header");
const headerContainer = createElement("div", header, "header-container");
const mainNavsContainer = createElement(
  "div",
  headerContainer,
  "navs-container"
);
const navs = document.querySelectorAll("nav");
navs.forEach((nav) => {
  mainNavsContainer.appendChild(nav);
});

// Reminders
const reminders = document.querySelector("#reminder");
const reminderChildDiv = createElement(
  "div",
  reminders,
  "reminderChild-container"
);
const today = createElement("nav", reminderChildDiv);
today.id = "today";
const todayButton = createElement("button", today);
todayButton.textContent = "Today";

const upcoming = createElement("nav", reminderChildDiv);
upcoming.id = "upcoming";
const upcomingButton = createElement("button", upcoming);
upcomingButton.textContent = "Upcoming";

// Header
const taskHeader = createElement("div", mainContainer, "todo-header");
const taskHeaderText = createElement("h1", taskHeader);
taskHeaderText.textContent = "To Do List";

const searchContainer = createElement("div", taskHeader, "search-container");
const search = createElement("div", searchContainer, "search");
const searchBar = createElement("input", search);
searchBar.id = "search";
searchBar.setAttribute("placeholder", "Search To Do");

// To Do container
export const toDoContainer = createElement(
  "div",
  mainContainer,
  "todo-mainContainer"
);
export const toDoList = createElement("div", toDoContainer, "todo-list");

export const newTasksContainer = createElement(
  "div",
  mainContainer,
  "default-container"
);

// Footer
const footer = createElement("footer", body);
const footerContainer = createElement("div", footer, "footer");
const footerText = createElement("p", footerContainer);
footerText.innerHTML = "&copy; 2025 Odin To Do";

NavButtons();
Tasks();
