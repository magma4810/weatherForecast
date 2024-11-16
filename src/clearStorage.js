export function clearStorage(div) {
  const clearStorage = document.createElement("button");
  clearStorage.textContent = "clearStorage";
  div.append(clearStorage);
  clearStorage.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}
