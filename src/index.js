export const content = document.querySelector("#content");
export function createElement(element, parent, className = null) {
  const newElement = document.createElement(element);
  parent.appendChild(newElement);
  newElement.classList.add(className);
  return newElement;
}
export const mainContainer = createElement("div", content, "main-container");

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
const upcomingButton = createElement("button", today);
upcomingButton.textContent = "Upcoming";

// Footer
const body = document.querySelector("body");
const footer = createElement("footer", body);
const footerContainer = createElement("div", footer, "footer");
const footerText = createElement("p", footerContainer);
footerText.innerHTML = "&copy; 2025 Odin To Do";
