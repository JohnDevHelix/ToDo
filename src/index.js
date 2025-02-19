import style from "./styles.css";
import { NavButtons } from "./nav-buttons/navButtons";
import { SearchBar } from "./search";
import { GetItem } from "./localStorage/getItem";
import { DefaultTask } from "./defaultTask";
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
export let trashArr = [];
export let completedArr = [];

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
taskHeaderText.id = "todo-header";

// Search Bar
const searchContainer = document.createElement("div");
header.insertBefore(searchContainer, header.firstChild);
searchContainer.classList.add("search-container");
const search = createElement("div", searchContainer, "search");
const searchBar = createElement("input", search);
searchBar.id = "search";
searchBar.setAttribute("placeholder", "Search To Do");
export const searchSelector = document.querySelector("#search");

export const newTasksContainer = createElement(
  "div",
  mainContainer,
  "newTask-container"
);

// Footer
const footer = createElement("footer", mainContainer);
const footerContainer = createElement("div", footer, "footer");
const footerText = createElement("p", footerContainer);
footerText.innerHTML = "&copy; 2025 Odin To Do";

NavButtons();
SearchBar();

if (localStorage.length === 0) {
  DefaultTask();
} else {
  GetItem("tasks");
}
