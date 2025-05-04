# 🧘‍♂️ Quotive

![Vercel](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/node-%3E=18.x-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)

Quotive adalah website sederhana yang menyajikan **Quote of the Day** dan memungkinkan pengguna untuk mendapatkan **kutipan acak** yang menginspirasi. Website ini menggunakan [ZenQuotes API](https://zenquotes.io/) sebagai sumber data.

## 🔗 Live URL

🌐 [https://quotive.vercel.app/](https://quotive.vercel.app/)

---

## ✨ Fitur

- 📅 Menampilkan **Quote of the Day**
- 🎲 Tombol untuk **generate kutipan acak**
- 🖼️ **Preview & download** kutipan sebagai gambar (dengan watermark "Quotive")
- 📐 Pilihan ukuran gambar: **Square (1080x1080)**, **Story (1080x1920)**, **Landscape (1280x720)**
- ⚡ Sistem caching otomatis menggunakan **serverless API route**
- 🔍 SEO-friendly: dilengkapi **metadata**, `robots.txt`, dan `sitemap.xml`
- 🎨 Tampilan clean dan responsif dengan **Tailwind CSS**
- 📱 Modal preview scrollable secara otomatis bila ukuran terlalu besar (misal, mode story)

---

## 🛠️ Teknologi

- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ZenQuotes API](https://zenquotes.io/)
- [html2canvas](https://www.npmjs.com/package/html2canvas) untuk konversi kutipan menjadi gambar
- [Headless UI](https://headlessui.com/) untuk komponen modal dialog
- [Lucide React](https://lucide.dev/) untuk ikon
- [Vercel](https://vercel.com/) untuk deployment

---

## ⚙️ Konfigurasi

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

# Install dependencies
npm install

# Jalankan di lokal
npm run dev

## 📝 Lisensi
Proyek ini bersifat open-source dan menggunakan lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan pribadi maupun edukasi.

---