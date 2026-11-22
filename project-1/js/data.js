/**
 * Data Dummy 6 Produk Pesawat RC - SkyWing Aeromodelling
 * Data ini identik dengan project-2/data/products.json
 */

const SKYWING_PRODUCTS = [
  {
    id: 1,
    nama: "SkyTrainer Cessna 182",
    kategori: "Trainer",
    level: "Pemula",
    wingspan: "1400 mm",
    panjang: "1100 mm",
    berat: "1250 g",
    motor: "Brushless 2212 1400KV",
    baterai: "3S 2200mAh",
    durasi: "12 menit",
    harga: 2450000,
    hargaTeks: "Rp2.450.000",
    featured: true,
    kodeRangka: "SW-TRN-01",
    gambar: "images/cessna-182-trainer.jpg",
    deskripsi: "Pesawat RC sayap tinggi (high-wing) dengan konstruksi EPO foam tahan benturan dan karakter terbang ekstra stabil untuk latihan dasar take-off serta landing.",
    fitur: [
      "Flight controller gyro 6-axis dengan mode auto-leveling untuk pemula",
      "Material busa EPO kepadatan tinggi yang mudah diperbaiki",
      "Roda pendaratan tricycle baja pegas tahan hentakan keras",
      "Paket komplit siap terbang (RTF) termasuk remote 6-channel 2.4GHz"
    ]
  },
  {
    id: 2,
    nama: "P-51 Mustang Warbird",
    kategori: "Warbird",
    level: "Menengah",
    wingspan: "1200 mm",
    panjang: "1050 mm",
    berat: "1450 g",
    motor: "3536 1100KV",
    baterai: "4S 2600mAh",
    durasi: "10 menit",
    harga: 3850000,
    hargaTeks: "Rp3.850.000",
    featured: false,
    kodeRangka: "SW-WRB-02",
    gambar: "images/p51-mustang-warbird.jpg",
    deskripsi: "Replika skala tempur Perang Dunia II dengan proporsi aerodinamis presisi, baling-baling 4-bilah skala, dan performa manuver kecepatan menengah-tinggi.",
    fitur: [
      "Sistem roda pendaratan elektrik lipat otomatis (electric retract)",
      "Flap fungsional dua tahap untuk pendaratan pendek yang presisi",
      "Lampu navigasi LED sayap dan detail kokpit pilot skala penuh",
      "ESC 40A Hobbywing dengan respon throttle linear"
    ]
  },
  {
    id: 3,
    nama: "F-16 Fighting Falcon EDF Jet",
    kategori: "EDF Jet",
    level: "Mahir",
    wingspan: "900 mm",
    panjang: "1100 mm",
    berat: "1650 g",
    motor: "EDF 70mm 3000KV",
    baterai: "4S 3300mAh",
    durasi: "7 menit",
    harga: 4950000,
    hargaTeks: "Rp4.950.000",
    featured: false,
    kodeRangka: "SW-EDF-03",
    gambar: "images/f16-fighting-falcon-edf.jpg",
    deskripsi: "Jet elektrik ducted fan 70mm 12-blade dengan suara deru menyerupai turbin asli dan kecepatan jelajah ekstrem untuk pilot berpengalaman.",
    fitur: [
      "Unit impeller EDF 70mm 12-bilah dengan suara turbin realistis",
      "Struktur sayap diperkuat batang serat karbon (carbon fiber tube)",
      "Servo digital metal-gear 9g di seluruh bidang kendali",
      "Nose cone magnetik lepas-pasang untuk akses kompartemen baterai cepat"
    ]
  },
  {
    id: 4,
    nama: "SkyGlider Thermal 2M",
    kategori: "Glider",
    level: "Pemula",
    wingspan: "2000 mm",
    panjang: "1150 mm",
    berat: "950 g",
    motor: "2212 1000KV",
    baterai: "3S 1800mAh",
    durasi: "25 menit",
    harga: 2950000,
    hargaTeks: "Rp2.950.000",
    featured: false,
    kodeRangka: "SW-GLD-04",
    gambar: "images/skyglider-thermal-2m.jpg",
    deskripsi: "Sailplane bentang sayap 2 meter yang dirancang khusus untuk memanfaatkan arus termal udara Bandung dengan waktu terbang hingga 25 menit sekali lepas landas.",
    fitur: [
      "Propeller lipat otomatis (folding prop) untuk meminimalkan hambatan angin",
      "Sayap dua bagian dengan pengunci cepat tanpa lem untuk kemudahan transportasi",
      "Rasio luncur (glide ratio) tinggi untuk terbang santai hemat daya",
      "Ruang kanopi luas yang mendukung pemasangan modul kamera udara ringan"
    ]
  },
  {
    id: 5,
    nama: "Extra 300 3D Aerobatic",
    kategori: "3D Aerobatic",
    level: "Mahir",
    wingspan: "1300 mm",
    panjang: "1250 mm",
    berat: "2100 g",
    motor: "3542 900KV",
    baterai: "6S 3300mAh",
    durasi: "9 menit",
    harga: 5750000,
    hargaTeks: "Rp5.750.000",
    featured: false,
    kodeRangka: "SW-3DA-05",
    gambar: "images/extra-300-3d-aerobatic.jpg",
    deskripsi: "Pesawat aerobatik kompetisi dengan rasio thrust-to-weight 1.6:1 yang sanggup melakukan manuver ekstrem seperti torque roll, harrier, dan knife-edge.",
    fitur: [
      "Konstruksi balsa-plywood berlapis EPO ringan berdaya tahan G-force tinggi",
      "Sudut defleksi permukaan kontrol ekstra lebar hingga 45 derajat",
      "Landing gear serat karbon murni dengan wheel pants aerodinamis",
      "Sistem tenaga 6S LiPo bertenaga tinggi untuk vertical climb tanpa batas"
    ]
  },
  {
    id: 6,
    nama: "FPV Wing Zorro",
    kategori: "FPV Racing",
    level: "Menengah",
    wingspan: "1000 mm",
    panjang: "650 mm",
    berat: "850 g",
    motor: "2207 2300KV",
    baterai: "4S 1500mAh",
    durasi: "15 menit",
    harga: 3250000,
    hargaTeks: "Rp3.250.000",
    featured: false,
    kodeRangka: "SW-FPV-06",
    gambar: "images/fpv-wing-zorro.jpg",
    deskripsi: "Flying wing delta lincah yang dirancang untuk terbang rendah berkecepatan tinggi dengan dudukan kamera FPV HD dan sistem transmisi video digital.",
    fitur: [
      "Bodi kompak tanpa ekor (tailless delta) dengan efisiensi aerodinamika tinggi",
      "Bay khusus untuk kamera HD, VTX, dan flight controller GPS return-to-home",
      "Pelindung bawah (skid plate) Kevlar untuk pendaratan di rumput lapangan",
      "Konfigurasi motor pendorong belakang (pusher) yang melindungi baling-baling"
    ]
  }
];

const SKYWING_SERVICES = [
  {
    kode: "SRV-01",
    nama: "Penjualan Kit RTF/PNP",
    deskripsi: "Unit dikalibrasi di bengkel kami sebelum dikirim. Tersedia paket Ready-To-Fly untuk pemula hingga Plug-N-Play untuk builder berpengalaman.",
    tag: "Garansi Setup Awal"
  },
  {
    kode: "SRV-02",
    nama: "Kursus Terbang Pemula",
    deskripsi: "Sesi latihan 4 pertemuan dengan sistem dual-remote (buddy box) bersama instruktur bersertifikat FASI di lapangan Bandung Selatan.",
    tag: "4 Sesi Lapangan"
  },
  {
    kode: "SRV-03",
    nama: "Servis & Repair",
    deskripsi: "Perbaikan struktur airframe patah, penyetelan ulang center of gravity (CG), soldering konektor XT60, hingga tuning PID flight controller.",
    tag: "Teknisi Berpengalaman"
  },
  {
    kode: "SRV-04",
    nama: "Komunitas Terbang Mingguan",
    deskripsi: "Kopdar rutin setiap Sabtu & Minggu pagi pukul 06.30 WIB. Sesi fun-fly, combat streamer, dan klinik aeromodelling gratis untuk anggota.",
    tag: "Sabtu & Minggu Pagi"
  }
];

/**
 * Mengubah angka menjadi format mata uang Rupiah tanpa spasi (contoh: Rp2.450.000)
 */
function formatRupiah(angka) {
  return "Rp" + Number(angka).toLocaleString("id-ID");
}

/**
 * Menghasilkan SVG siluet teknis sesuai kategori pesawat
 */
function getAircraftBlueprintSVG(kategori) {
  const kat = (kategori || "").toLowerCase();
  if (kat.includes("jet")) {
    return `<svg viewBox="0 0 120 120" class="w-full h-full stroke-sky-400/60 fill-sky-400/10" stroke-width="1.5">
      <path d="M60 10 L70 45 L108 75 L108 85 L70 78 L66 102 L80 110 L80 114 L60 110 L40 114 L40 110 L54 102 L50 78 L12 85 L12 75 L50 45 Z"/>
      <line x1="60" y1="5" x2="60" y2="115" stroke-dasharray="2 2" class="stroke-amber-400/40"/>
    </svg>`;
  } else if (kat.includes("fpv")) {
    return `<svg viewBox="0 0 120 120" class="w-full h-full stroke-amber-400/60 fill-amber-400/10" stroke-width="1.5">
      <path d="M60 22 L112 82 L104 92 L68 74 L60 82 L52 74 L16 92 L8 82 Z"/>
      <circle cx="60" cy="42" r="4" class="fill-sky-400"/>
    </svg>`;
  } else {
    return `<svg viewBox="0 0 120 120" class="w-full h-full stroke-sky-400/60 fill-sky-400/10" stroke-width="1.5">
      <path d="M60 12 L66 36 L112 52 L112 62 L66 56 L64 94 L84 104 L84 110 L60 106 L36 110 L36 104 L56 94 L54 56 L8 62 L8 52 L54 36 Z"/>
      <line x1="44" y1="12" x2="76" y2="12" class="stroke-amber-400"/>
    </svg>`;
  }
}
