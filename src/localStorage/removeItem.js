export function RemoveItem(arr, label) {
  localStorage.removeItem(label);
  localStorage.setItem(label, JSON.stringify(arr));
}
