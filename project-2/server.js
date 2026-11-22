/**
 * Server REST API CRUD - SkyWing Aeromodelling
 */

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, "data", "products.json");

// Middleware untuk membaca JSON dan mengaktifkan CORS
app.use(cors());
app.use(express.json());

/**
 * Fungsi bantu untuk membaca data produk dari file JSON
 */
function readProductsData() {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

/**
 * Fungsi bantu untuk menyimpan perubahan data produk ke file JSON
 */
function writeProductsData(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

// 1. Endpoint GET / -> Pesan sambutan API
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Selamat datang di REST API SkyWing Aeromodelling Bandung",
    data: {
      perusahaan: "SkyWing Aeromodelling",
      tagline: "Terbang Lebih Tinggi, Belajar Lebih Seru",
      endpoints: [
        "GET /api/products",
        "GET /api/products/:id",
        "POST /api/products",
        "PUT /api/products/:id",
        "DELETE /api/products/:id"
      ]
    }
  });
});

// 2. Endpoint GET /api/products -> Mengambil semua produk
app.get("/api/products", (req, res) => {
  const products = readProductsData();
  res.status(200).json({
    success: true,
    data: products
  });
});

// 3. Endpoint GET /api/products/:id -> Mengambil satu produk berdasarkan id
app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const products = readProductsData();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Produk dengan id ${req.params.id} tidak ditemukan`
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

// 4. Endpoint POST /api/products -> Menambah produk baru
app.post("/api/products", (req, res) => {
  const {
    nama,
    kategori,
    level,
    wingspan,
    panjang,
    berat,
    motor,
    baterai,
    durasi,
    harga,
    deskripsi,
    fitur
  } = req.body;

  // Validasi nama dan harga tidak boleh kosong
  if (!nama || !harga || String(nama).trim() === "" || String(harga).trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Field nama dan harga wajib diisi"
    });
  }

  const products = readProductsData();
  const maxId = products.reduce((max, item) => (item.id > max ? item.id : max), 0);

  const newProduct = {
    id: maxId + 1,
    nama: String(nama).trim(),
    kategori: kategori || "Trainer",
    level: level || "Pemula",
    wingspan: wingspan || "-",
    panjang: panjang || "-",
    berat: berat || "-",
    motor: motor || "-",
    baterai: baterai || "-",
    durasi: durasi || "-",
    harga: harga,
    deskripsi: deskripsi || "Pesawat RC koleksi SkyWing Aeromodelling.",
    fitur: Array.isArray(fitur) && fitur.length === 4
      ? fitur
      : [
          "Konstruksi aerodinamis presisi",
          "Komponen elektronik terkalibrasi",
          "Mudah dirakit dan dirawat",
          "Dukungan penuh teknisi SkyWing Bandung"
        ]
  };

  products.push(newProduct);
  writeProductsData(products);

  res.status(201).json({
    success: true,
    data: newProduct
  });
});

// 5. Endpoint PUT /api/products/:id -> Mengubah data produk
app.put("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const products = readProductsData();
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Produk dengan id ${req.params.id} tidak ditemukan`
    });
  }

  const { nama, harga } = req.body;
  if (!nama || !harga || String(nama).trim() === "" || String(harga).trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Field nama dan harga wajib diisi"
    });
  }

  const updatedProduct = {
    ...products[index],
    ...req.body,
    id: id // Pastikan id tidak berubah
  };

  products[index] = updatedProduct;
  writeProductsData(products);

  res.status(200).json({
    success: true,
    data: updatedProduct
  });
});

// 6. Endpoint DELETE /api/products/:id -> Menghapus produk
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const products = readProductsData();
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Produk dengan id ${req.params.id} tidak ditemukan`
    });
  }

  const deleted = products.splice(index, 1)[0];
  writeProductsData(products);

  res.status(200).json({
    success: true,
    message: `Produk ${deleted.nama} berhasil dihapus`,
    data: deleted
  });
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server REST API SkyWing Aeromodelling berjalan di http://localhost:${PORT}`);
});
