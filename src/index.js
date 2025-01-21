import style from "./styles.css";
import { NavButtons } from "./navfunction";
import { Tasks } from "./tasks";
export function createElement(element, parent, className) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.classList.add(className);
  return newElement;
}
const content = document.querySelector("#content");
export const mainContainer = createElement("div", content, "main-container");
export const body = document.querySelector("body");
export let tasksArr = [];

// Nav Bar
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

// Header
const taskHeader = createElement("div", mainContainer, "todo-header");
export const taskHeaderText = createElement("h1", taskHeader);
taskHeaderText.textContent = "To Do List";

// Search Bar
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
