/**
 * Modul Pencarian, Filter Kategori, Pengurutan, dan Render Kartu Katalog
 * Digunakan di index.html dan dashboard.html
 */

const CATEGORIES_LIST = [
  "Semua",
  "Trainer",
  "Warbird",
  "EDF Jet",
  "Glider",
  "3D Aerobatic",
  "FPV Racing"
];

// Warna badge level (dipakai template kartu)
function getLevelBadgeStyle(level) {
  if (level === "Pemula") {
    return "bg-slate-950 text-emerald-400 border-emerald-500 font-bold";
  } else if (level === "Menengah") {
    return "bg-slate-950 text-sky-400 border-sky-500 font-bold";
  } else {
    return "bg-slate-950 text-rose-400 border-rose-500 font-bold";
  }
}

// Template kartu produk katalog
function productCardHTML(item, isFeaturedCard) {
return `
  <a
    href="detail.html?id=${item.id}"
    class="group relative flex flex-col justify-between bg-slate-900/90 border border-slate-800 hover:border-orange-500/70 transition-all duration-300 overflow-hidden ${
      isFeaturedCard ? "md:col-span-2 lg:col-span-2" : ""
    }"
  >
    <!-- Ornamen sudut teknis -->
    <span class="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-orange-500/70 z-20"></span>
    <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-sky-400/70 z-20"></span>

    <div>
      <!-- Media Visual & Siluet Teknis -->
      <div class="relative ${
        isFeaturedCard ? "h-64" : "h-52"
      } w-full overflow-hidden bg-slate-950 border-b border-slate-800/90">
        <img
          src="${item.gambar}"
          alt="${item.nama}"
          loading="lazy"
          class="w-full h-full object-cover object-center opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-500"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent"></div>

        <!-- Watermark SVG Blueprint -->
        <div class="absolute right-3 bottom-3 w-16 h-16 opacity-60 pointer-events-none">
          ${getAircraftBlueprintSVG(item.kategori)}
        </div>

        <!-- Baris Badge Atas -->
        <div class="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-slate-950/90 text-slate-200 border border-slate-700">
              ${item.kategori}
            </span>
            <span class="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border ${getLevelBadgeStyle(
              item.level
            )}">
              ${item.level}
            </span>
          </div>
          <span class="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800">
            ${item.kodeRangka}
          </span>
        </div>

        ${
          isFeaturedCard
            ? `<div class="absolute bottom-3 left-3">
                <span class="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-orange-500 text-slate-950 font-mono">
                  ★ Mulai dari sini — paling ramah pemula
                </span>
              </div>`
            : ""
        }
      </div>

      <!-- Konten Utama Kartu -->
      <div class="p-5">
        <div class="flex items-start justify-between gap-3">
          <h3 class="text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
            ${item.nama}
          </h3>
        </div>
        <p class="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed">
          ${item.deskripsi}
        </p>

        <!-- Grid Telemetri Spesifikasi -->
        <div class="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 font-mono text-xs">
          <div class="bg-slate-950/70 p-2 border border-slate-800/70">
            <span class="block text-[10px] text-slate-500">WINGSPAN</span>
            <span class="text-slate-200 font-semibold">${item.wingspan}</span>
          </div>
          <div class="bg-slate-950/70 p-2 border border-slate-800/70">
            <span class="block text-[10px] text-slate-500">BATERAI</span>
            <span class="text-slate-200 font-semibold">${item.baterai}</span>
          </div>
          <div class="bg-slate-950/70 p-2 border border-slate-800/70">
            <span class="block text-[10px] text-slate-500">DURASI</span>
            <span class="text-sky-400 font-semibold">${item.durasi}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Baris Harga & Aksi -->
    <div class="px-5 py-3.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between">
      <div>
        <span class="block text-[10px] font-mono text-slate-500 uppercase">Harga Unit</span>
        <span class="text-lg font-mono font-bold text-orange-400">${item.hargaTeks}</span>
      </div>
      <span class="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all">
        INSPEKSI UNIT <span>→</span>
      </span>
    </div>
  </a>
`;
}

function initCatalogController(options) {
  const {
    gridContainerId,
    searchInputId,
    categoryContainerId,
    sortSelectId,
    counterTextId,
    emptyStateId,
    resetButtonId
  } = options;

  const gridEl = document.getElementById(gridContainerId);
  const searchEl = document.getElementById(searchInputId);
  const categoryEl = document.getElementById(categoryContainerId);
  const sortEl = document.getElementById(sortSelectId);
  const counterEl = document.getElementById(counterTextId);
  const emptyEl = document.getElementById(emptyStateId);
  const resetBtn = document.getElementById(resetButtonId);

  if (!gridEl) return;

  let activeCategory = "Semua";
  let searchQuery = "";
  let sortMode = "default";

  // Render chip kategori
  function renderCategoryChips() {
    if (!categoryEl) return;
    categoryEl.innerHTML = CATEGORIES_LIST.map((kat) => {
      const isActive = kat === activeCategory;
      return `
        <button
          type="button"
          data-category="${kat}"
          class="px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all border cursor-pointer ${
            isActive
              ? "bg-orange-500 text-slate-950 border-orange-400 font-bold shadow-[0_0_20px_rgba(249,115,22,0.35)]"
              : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white"
          }"
        >
          ${kat}
        </button>
      `;
    }).join("");

    categoryEl.querySelectorAll("button[data-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category");
        renderCategoryChips();
        updateCatalogView();
      });
    });
  }

  // Filter, urutkan, dan render kartu
  function updateCatalogView() {
    const isFiltering =
      activeCategory !== "Semua" ||
      searchQuery.trim() !== "" ||
      sortMode !== "default";

    let filtered = SKYWING_PRODUCTS.filter((item) => {
      const matchCat =
        activeCategory === "Semua" || item.kategori === activeCategory;
      const matchName = item.nama
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
      return matchCat && matchName;
    });

    if (sortMode === "termurah") {
      filtered.sort((a, b) => a.harga - b.harga);
    } else if (sortMode === "termahal") {
      filtered.sort((a, b) => b.harga - a.harga);
    } else if (sortMode === "nama") {
      filtered.sort((a, b) => a.nama.localeCompare(b.nama, "id"));
    }

    // Update teks jumlah produk ("Menampilkan X dari 6 model")
    if (counterEl) {
      counterEl.textContent = `Menampilkan ${filtered.length} dari ${SKYWING_PRODUCTS.length} model`;
    }

    if (filtered.length === 0) {
      gridEl.innerHTML = "";
      gridEl.classList.add("hidden");
      if (emptyEl) emptyEl.classList.remove("hidden");
      return;
    }

    gridEl.classList.remove("hidden");
    if (emptyEl) emptyEl.classList.add("hidden");

    gridEl.innerHTML = filtered
      .map((item) => productCardHTML(item, item.id === 1 && !isFiltering))
      .join("");
  }

  // Event listeners
  if (searchEl) {
    searchEl.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      updateCatalogView();
    });
  }

  if (sortEl) {
    sortEl.addEventListener("change", (e) => {
      sortMode = e.target.value;
      updateCatalogView();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeCategory = "Semua";
      searchQuery = "";
      sortMode = "default";
      if (searchEl) searchEl.value = "";
      if (sortEl) sortEl.value = "default";
      renderCategoryChips();
      updateCatalogView();
    });
  }

  renderCategoryChips();
  updateCatalogView();
}
