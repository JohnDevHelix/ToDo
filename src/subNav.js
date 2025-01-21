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
  const today = createSubNav(reminderChildDiv, "today", "Today");
  const upcoming = createSubNav(reminderChildDiv, "upcoming", "Upcoming");

  // Label
  const urgent = createSubNav(labelChildDiv, "urgent", "Urgent");
  const highPriority = createSubNav(
    labelChildDiv,
    "high-priority",
    "High Priority"
  );
  const normal = createSubNav(labelChildDiv, "normal", "Normal");
  const lowPriority = createSubNav(
    labelChildDiv,
    "low-priority",
    "Low Priority"
  );
}
