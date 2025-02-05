import { searchSelector } from ".";

export function SearchBar() {
  const containers = document.querySelectorAll(".tasks");

  searchSelector.addEventListener("keyup", (event) => {
    const input = event.target.value.toLowerCase();
    containers.forEach((container) => {
      const h2Content = container.querySelector("h2").innerText.toLowerCase();
      if (h2Content.includes(input)) {
        container.classList.remove("hidden");
      } else {
        container.classList.add("hidden");
      }
    });
  });
}
