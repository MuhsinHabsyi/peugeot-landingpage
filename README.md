## Langkah-langkah Menjalankan Aplikasi (Local Development)

Ikuti langkah-langkah berikut untuk menjalankan aplikasi secara lokal:

### 1. Clone Repository

Clone repository dari GitHub ke komputer lokal.

```bash
git clone <url-repository>
```

### 2. Masuk ke Direktori Proyek

Masuk ke folder aplikasi.

```bash
cd peugeot-app
```

### 3. Install Dependencies

Install seluruh dependencies yang dibutuhkan oleh aplikasi, seperti React, Vite, React Router DOM, dan package lainnya.

```bash
npm install
```

### 4. Jalankan Development Server

Jalankan aplikasi dalam mode development.

```bash
npm run dev
```

### 5. Akses Aplikasi

Setelah server berhasil dijalankan, buka browser dan akses URL yang ditampilkan pada terminal, biasanya:

```text
http://localhost:5173
```

Aplikasi akan otomatis melakukan **Hot Module Replacement (HMR)** sehingga setiap perubahan pada source code akan langsung ditampilkan tanpa perlu me-refresh halaman secara manual.
