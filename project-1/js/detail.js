// Logika halaman detail: render spesifikasi produk + 2 pesawat lain yang mirip.


const params = new URLSearchParams(window.location.search);
const idParam = parseInt(params.get("id"), 10);
const detailContainer = document.getElementById("detail-content");
const similarSection = document.getElementById("similar-section");
const similarGrid = document.getElementById("similar-grid");

const product = SKYWING_PRODUCTS.find((item) => item.id === idParam);

if (!product) {
  // Tampilan jika ID tidak ditemukan
  detailContainer.innerHTML = `
    <div class="bg-slate-900/90 border border-rose-500/40 p-12 text-center max-w-2xl mx-auto my-12">
      <span class="inline-block px-3 py-1 text-xs font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-4">
        ERROR 404 // AIRFRAME NOT FOUND
      </span>
      <h1 class="text-3xl font-display font-bold text-white">Informasi tidak ditemukan</h1>
      <p class="mt-3 text-slate-400 text-sm">
        Model pesawat dengan ID yang Anda minta tidak tersedia di database hanggar SkyWing Aeromodelling.
      </p>
      <a
        href="index.html"
        class="mt-6 inline-block px-6 py-3 bg-orange-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider"
      >
        Kembali ke Beranda
      </a>
    </div>
  `;
} else {
  document.title = `${product.nama} — SkyWing Aeromodelling`;

  // Baris spesifikasi
  const specRows = [
    ["Kategori Airframe", product.kategori, "text-white font-semibold"],
    ["Level Pilot", product.level, "text-white font-semibold"],
    ["Bentang Sayap (Wingspan)", product.wingspan, "text-white font-semibold"],
    ["Panjang Fuselage", product.panjang, "text-white font-semibold"],
    ["Berat Terbang (AUW)", product.berat, "text-white font-semibold"],
    ["Sistem Propulsi Motor", product.motor, "text-orange-400 font-semibold"],
    ["Rekomendasi Baterai", product.baterai, "text-white font-semibold"],
    ["Estimasi Durasi Terbang", product.durasi, "text-sky-400 font-semibold"],
    ["Harga Unit", product.hargaTeks, "text-orange-400 font-bold"],
  ];
  const specTable = specRows
    .map(
      ([label, value, valueClass], i) => `
        <tr class="${i % 2 === 0 ? "bg-slate-900/60" : "bg-slate-950/60"}">
          <th class="py-3 px-4 text-slate-400 font-normal w-2/5">${label}</th>
          <td class="py-3 px-4 ${valueClass}">${value}</td>
        </tr>`
    )
    .join("");

  detailContainer.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <!-- Kolom Visual & Harga -->
      <div class="lg:col-span-6 space-y-6">
        <div class="relative h-80 sm:h-96 bg-slate-950 border border-slate-800 overflow-hidden">
          <img
            src="${product.gambar}"
            alt="${product.nama}"
            class="w-full h-full object-cover object-center opacity-85"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <div class="absolute top-4 left-4 flex items-center gap-2">
            <span class="px-3 py-1 text-xs font-mono bg-slate-950/90 text-sky-400 border border-slate-700">
              ${product.kategori}
            </span>
            <span class="px-3 py-1 text-xs font-mono bg-orange-500 text-slate-950 font-bold">
              Level: ${product.level}
            </span>
          </div>
          <div class="absolute bottom-4 right-4 w-20 h-20 opacity-75">
            ${getAircraftBlueprintSVG(product.kategori)}
          </div>
        </div>

        <!-- Box Harga & Pemesanan -->
        <div class="bg-slate-900/90 border border-slate-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span class="block text-xs font-mono text-slate-400">HARGA RESMI HANGGAR BANDUNG</span>
            <span class="text-3xl font-mono font-bold text-orange-400">${product.hargaTeks}</span>
          </div>
          <a
            href="login.html"
            class="px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider text-center"
          >
            Booking Unit di Dashboard →
          </a>
        </div>
      </div>

      <!-- Kolom Informasi & Tabel Spesifikasi -->
      <div class="lg:col-span-6 space-y-8">
        <div>
          <div class="text-xs font-mono text-slate-400 mb-2">
            KODE RANGKA: ${product.kodeRangka} // ID #${product.id}
          </div>
          <h1 class="text-3xl sm:text-4xl font-display font-bold text-white">${product.nama}</h1>
          <p class="mt-4 text-slate-300 leading-relaxed">${product.deskripsi}</p>
        </div>

        <!-- Tabel Spesifikasi Lengkap -->
        <div>
          <h2 class="text-sm font-mono uppercase tracking-wider text-sky-400 mb-3">
            Tabel Spesifikasi Teknis Lengkap
          </h2>
          <div class="border border-slate-800 overflow-hidden">
            <table class="w-full text-left border-collapse text-sm">
              <tbody class="divide-y divide-slate-800 font-mono">
                ${specTable}
              </tbody>
            </table>
          </div>
        </div>

        <!-- 4 Fitur Unggulan -->
        <div>
          <h2 class="text-sm font-mono uppercase tracking-wider text-sky-400 mb-3">
            4 Fitur Unggulan Utama
          </h2>
          <ul class="grid grid-cols-1 gap-2.5">
            ${product.fitur
              .map(
                (f, idx) => `
              <li class="p-3.5 bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                <span class="font-mono text-xs text-orange-400 font-bold mt-0.5">0${idx + 1}</span>
                <span class="text-sm text-slate-200">${f}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  // Render 2 pesawat lain yang mirip (level sama didahulukan), pakai template
  // kartu yang sama dengan katalog supaya tidak ada dua salinan template
  const similarProducts = SKYWING_PRODUCTS.filter((p) => p.id !== product.id)
    .sort((a, b) => (a.level === product.level ? -1 : 1))
    .slice(0, 2);

  similarSection.classList.remove("hidden");
  similarGrid.innerHTML = similarProducts
    .map((sim) => productCardHTML(sim, false))
    .join("");
}
