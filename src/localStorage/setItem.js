export function SetItem(label, newItem) {
  localStorage.setItem(label, JSON.stringify(newItem));
}
