import { createElement } from ".";

export function SubNav() {
  const reminders = document.querySelector("#reminder");
  const labels = document.querySelector("#label");
  const reminderChildDiv = createElement(
    "div",
    reminders,
    "reminderChild-container"
  );
  const labelChildDiv = createElement("div", labels, "labelChild-container");

  function createSubNav(parent, idName, text) {
    const newNav = createElement("nav", parent);
    newNav.id = idName;
    const newButton = createElement("button", newNav);
    newButton.textContent = text;
  }

  // Reminders
  createSubNav(reminderChildDiv, "today", "Today");
  createSubNav(reminderChildDiv, "upcoming", "Upcoming");

  // Label
  createSubNav(labelChildDiv, "urgent", "Urgent");
  createSubNav(labelChildDiv, "high-priority", "High Priority");
  createSubNav(labelChildDiv, "normal", "Normal");
  createSubNav(labelChildDiv, "low-priority", "Low Priority");
}
