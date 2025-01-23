import { createElement } from ".";

export function TaskButtons(taskContainer){

    function createButtons(element, parent, className, id, text) {
        const taskButtons = createElement(element, parent, className);
        taskButtons.id = id;
        taskButtons.textContent = text
    }

    const taskButtons = createElement("div", taskContainer, "taskButton-container");
    const completedButton = createButtons("button", taskButtons, "task-buttons", "completed", "Completed");
    const deleteButton = createButtons("button", taskButtons, "task-buttons", "delete", "Delete");

    document.querySelectorAll(".task-buttons").forEach(button => {
        // add if expression here
    })
}