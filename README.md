# 🌐 Simple IoT Dashboard (Node.js + HTML + Tailwind)

Proyek ini adalah **simulasi dashboard monitoring IoT** sederhana. Data seperti **temperature**, **humidity**, dan **pressure** disediakan oleh API server berbasis **Node.js**, kemudian ditampilkan ke antarmuka web menggunakan **HTML + TailwindCSS + JavaScript (fetch API)**.

---

## 📁 Struktur Proyek

```
iot-dashboard/
│
├── server.js           # API Server (Node.js + Express)
├── index.html          # Frontend dashboard
├── README.md           # Dokumentasi proyek
├── package.json
```

---

## 🚀 Fitur

- Menyediakan **API endpoint** yang mengembalikan data sensor random (`/api/data`)
- Menampilkan data real-time dalam bentuk **dashboard kartu**
- **Update otomatis** setiap 5 detik
- Menggunakan **Tailwind CSS** via CDN
- Cocok untuk latihan atau simulasi IoT sederhana

---

## 🔧 Instalasi & Menjalankan

### 1. Clone atau Download
```bash
git clone https://github.com/namauser/iot-dashboard.git
cd iot-dashboard
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan API Server
```bash
node server.js
```

API akan berjalan di: [http://localhost:3000/api/data](http://localhost:3000/api/data)

### 4. Buka Dashboard
Buka file `index.html` langsung di browser atau gunakan ekstensi **Live Server** di VSCode agar tidak terkena kendala CORS lokal.

---

## 🔁 Contoh Response API
```json
{
  "temperature": "31.2",
  "humidity": "68.9",
  "pressure": "1014.3"
}
```

---

## 📦 Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** HTML, TailwindCSS, JavaScript
- **API Testing:** Postman / Browser / fetch()

---

## ✨ Screenshot

![dashboard preview](preview.png)

---

## 📌 Catatan

- Data yang dikembalikan masih **simulasi** (random), belum real sensor.
- Dapat diperluas untuk menerima data dari ESP32 / perangkat IoT nyata via MQTT, HTTP, atau WebSocket.

---

## 📃 Lisensi

Proyek ini bebas digunakan untuk pembelajaran. Silakan modifikasi, duplikasi, atau dijadikan dasar untuk pengembangan lebih lanjut.

---

## 🙋‍♂️ Kontak

Untuk pertanyaan atau kerjasama:
**Arif Rizqi**  
[📧](mailto:group.arnur.@gmail.com) | [🌐](https://arnur.id)
