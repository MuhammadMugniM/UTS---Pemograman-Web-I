if (currentPilot) {
  document.getElementById("pilot-name").textContent = currentPilot.nama;
  document.getElementById("pilot-email").textContent = `EMAIL: ${currentPilot.email} // ROLE: ${currentPilot.role}`;
}

document.getElementById("logout-btn").addEventListener("click", () => {
  logoutUser();
});

initCatalogController({
  gridContainerId: "dash-product-grid",
  searchInputId: "dash-search",
  categoryContainerId: "dash-categories",
  sortSelectId: "dash-sort",
  counterTextId: "dash-catalog-counter",
  emptyStateId: "dash-empty-state",
  resetButtonId: "dash-reset-btn"
});
