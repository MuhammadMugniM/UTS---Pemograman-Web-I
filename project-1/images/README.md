# Gambar Lokal — SkyWing Aeromodelling (Argon)

Semua gambar di folder ini dipakai secara lokal (tidak ada lagi hotlink
Unsplash). Foto produk dirujuk dari `js/data.js` lewat field `gambar`,
foto hero dirujuk dari `index.html` (background hero).

## Tabel produk → nama file

| Produk | Nama file | Sumber asli |
|---|---|---|
| SkyTrainer Cessna 182 (Trainer) | `cessna-182-trainer.jpg` | Unsplash `photo-1559297434` (w=1200) |
| P-51 Mustang Warbird | `p51-mustang-warbird.jpg` | Unsplash `photo-1540962351504` (w=1200) |
| F-16 Fighting Falcon EDF Jet | `f16-fighting-falcon-edf.jpg` | Wikimedia Commons `F-16 Fighting Falcon.jpg` (1280px) |
| SkyGlider Thermal 2M | `skyglider-thermal-2m.jpg` | Unsplash `photo-1508614589041` (w=1200) |
| Extra 300 3D Aerobatic | `extra-300-3d-aerobatic.jpg` | Unsplash `photo-1474302770737` (w=1200) |
| FPV Wing Zorro | `fpv-wing-zorro.jpg` | Unsplash `photo-1527977966376` (w=1200) |
| Foto hero (halaman utama) | `hero-pesawat-rc.jpg` | **Foto yang SAMA dengan Cessna 182** (Unsplash `photo-1559297434`, w=2000) |

## Cara ganti gambar sendiri

1. Siapkan foto pengganti format **JPG, orientasi landscape** (disarankan
   lebar 1200px untuk kartu produk, 2000px untuk hero).
2. Timpa file di folder ini dengan **nama file yang persis sama** — tidak
   perlu ubah kode apa pun.
3. Kalau mau pakai nama file baru, ubah juga field `gambar` produk terkait
   di `js/data.js` (untuk hero, ubah `background-image` di `index.html`).

## Catatan

- Foto F-16 menggunakan foto dari Wikimedia Commons (F-16 asli).
- Foto hero sengaja memakai foto yang sama dengan Cessna 182, sesuai versi
  Argon aslinya — ganti `hero-pesawat-rc.jpg` kalau mau hero yang berbeda
  dari kartu Cessna.
- Foto-foto ini hanya ilustrasi dummy untuk tugas UTS, bukan milik SkyWing.
