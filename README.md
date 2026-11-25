# SkyWing Aeromodelling — UTS Pemrograman Web

1. **Project 1 (`project-1/`)**: Website statis 5 halaman menggunakan HTML5, Tailwind CSS v4, dan Vanilla JavaScript.
2. **Project 2 (`project-2/`)**: REST API CRUD menggunakan Node.js dan Express dengan sumber data JSON yang identik dengan Project 1.

---

## Cara Menjalankan Project

### A. Menjalankan Project 1 (Website Statis)
1. Buka folder `project-1/`.
2. Klik dua kali file `index.html` untuk membukanya langsung di browser, atau jalankan melalui ekstensi **Live Server** di VS Code / server statis lokal:
   ```bash
   npx serve project-1
   ```

### B. Menjalankan Project 2 (REST API CRUD)
1. Buka terminal dan masuk ke direktori `project-2`:
   ```bash
   cd project-2
   ```
2. Instal seluruh dependensi:
   ```bash
   npm install
   ```
3. Jalankan server API:
   ```bash
   npm start
   ```
4. Server akan aktif di `http://localhost:3000`.

![npm install dan npm start](screenshots/Screenshot%202026-11-22%20155348.png)

---

## Akun Demo (Project 1)

Gunakan akun berikut pada halaman `login.html` (tersedia juga tombol **Isi Otomatis** di halaman login):
- **Email**: `admin@skywing.id`
- **Password**: `admin123`

---

## Daftar Endpoint REST API (Project 2)

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/` | Menampilkan pesan sambutan API dan daftar endpoint |
| GET | `/api/products` | Mengambil seluruh daftar 6 produk pesawat RC |
| GET | `/api/products/:id` | Mengambil detail 1 produk berdasarkan `id` (404 jika tidak ditemukan) |
| POST | `/api/products` | Menambahkan produk baru (`id` otomatis `maxId + 1`, 400 jika `nama`/`harga` kosong) |
| PUT | `/api/products/:id` | Memperbarui data produk berdasarkan `id` (404 jika tidak ada, 400 jika `nama`/`harga` kosong) |
| DELETE | `/api/products/:id` | Menghapus produk berdasarkan `id` (404 jika tidak ditemukan) |

---

## Skenario & Tabel Verifikasi Tes API

> Seluruh pengujian dilakukan menggunakan **Bruno**. Hasil aktual pada setiap skenario sesuai dengan screenshot di bagian Dokumentasi Screenshot Project 2.

| Skenario Tes | Method & Endpoint | Body Payload | Status Aktual | Response Aktual |
|--------------|-------------------|--------------|---------------|-----------------|
| Ambil semua produk | `GET /api/products` | - | `200 OK` | `{ "success": true, "data": [ ...6 produk ] }` |
| Ambil produk ID 3 | `GET /api/products/3` | - | `200 OK` | `{ "success": true, "data": { "id": 3, "nama": "F-16 Fighting Falcon EDF Jet", ... } }` |
| Tambah produk baru | `POST /api/products` | `{ "nama": "SkyCub Bush Plane", "harga": 2750000, ... }` | `201 Created` | `{ "success": true, "data": { "id": 7, ... } }` |
| Ubah produk ID 7 | `PUT /api/products/7` | `{ "nama": "SkyCub Bush Plane V2", "harga": 2850000, "durasi": "16 menit" }` | `200 OK` | `{ "success": true, "data": { "id": 7, ... } }` |
| Hapus produk ID 7 | `DELETE /api/products/7` | - | `200 OK` | `{ "success": true, "message": "Produk SkyCub Bush Plane V2 berhasil dihapus", ... }` |

---

## Dokumentasi Screenshot

### A. Project 1 — Frontend Web SkyWing Aeromodelling

1. Halaman Utama (`index.html`)
![Halaman Utama](screenshots/index.png)

2. Halaman Detail Informasi (`detail.html?id=5`)
![Halaman Detail](screenshots/detail.png)

3. Halaman Login (`login.html`)
![Halaman Login](screenshots/login.png)

4. Halaman Registrasi (`register.html`)
![Halaman Registrasi](screenshots/register.png)

5. Halaman Menu Utama / Dashboard (`dashboard.html`)
![Halaman Dashboard](screenshots/dashboard.png)

---

### B. Project 2 — Pengujian CRUD API di Bruno

1. GET All Products (`GET /api/products`)
![GET All Products](screenshots/bruno-get-all.png)

2. GET Product by ID (`GET /api/products/3`)
![GET Product by ID](screenshots/bruno-get-id.png)

3. POST Create Product (`POST /api/products`)
![POST Create Product](screenshots/bruno-post.png)

4. PUT Update Product (`PUT /api/products/7`)
![PUT Update Product](screenshots/bruno-put.png)

5. DELETE Product (`DELETE /api/products/7`)
![DELETE Product](screenshots/bruno-delete.png)

---

## Identitas Pengembang

`@Copyright by 24552011240_Muhammad Mugni Mahbub_TIF RP 24E CNS`

---

## Struktur Teknis Project

| Komponen | Lokasi | Keterangan |
|----------|--------|------------|
| Tailwind CSS v4 | `project-1/js/tailwind-browser.js` | Build browser lokal (bukan CDN), halaman tetap tampil penuh saat offline |
| Gambar produk | `project-1/images/` | 6 foto produk + 1 foto hero, disimpan lokal. Lihat `project-1/images/README.md` untuk pemetaan nama file |
| CSS tambahan | `project-1/css/design.css` | Styling bersama yang dipakai di semua halaman |
| JavaScript per halaman | `project-1/js/` | `index.js`, `detail.js`, `dashboard.js`, `login.js`, `register.js`, `filter.js`, `auth.js`, `data.js` |
| Data API | `project-2/data/products.json` | 6 produk dengan harga bertipe number (`2450000`), identik dengan `data.js` di Project 1 |
| Font | Google Fonts (online) | Fallback ke font sistem saat offline — tampilan tetap rapi |
