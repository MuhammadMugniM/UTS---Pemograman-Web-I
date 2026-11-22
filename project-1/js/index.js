// Render 4 Layanan
const servicesGrid = document.getElementById("services-grid");
if (servicesGrid && typeof SKYWING_SERVICES !== "undefined") {
  servicesGrid.innerHTML = SKYWING_SERVICES.map((srv) => `
    <div class="p-6 bg-slate-900/80 border border-slate-800 hover:border-sky-500/60 transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between font-mono text-xs text-slate-400 mb-4">
          <span class="text-orange-400">${srv.kode}</span>
          <span class="px-2 py-0.5 bg-slate-950 border border-slate-800 text-sky-300">${srv.tag}</span>
        </div>
        <h3 class="text-lg font-bold text-white">${srv.nama}</h3>
        <p class="mt-2 text-sm text-slate-400 leading-relaxed">${srv.deskripsi}</p>
      </div>
      <div class="mt-6 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
        STATUS: TERSEDIA DI HANGGAR BANDUNG
      </div>
    </div>
  `).join("");
}

// Inisialisasi Katalog & Filter
initCatalogController({
  gridContainerId: "product-grid",
  searchInputId: "search-input",
  categoryContainerId: "category-chips",
  sortSelectId: "sort-select",
  counterTextId: "catalog-counter",
  emptyStateId: "empty-state",
  resetButtonId: "reset-filter-btn"
});
