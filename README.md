# 🧘‍♂️ Quotive

Quotive adalah website sederhana yang menyajikan **Quote of the Day** dan memungkinkan pengguna untuk mendapatkan **kutipan acak** yang menginspirasi. Website ini menggunakan [ZenQuotes API](https://zenquotes.io/) sebagai sumber data.

## 🔗 Live URL

[https://yourdomain.com](https://yourdomain.com) ← (Ganti dengan URL sebenarnya jika sudah di-deploy)

---

## ✨ Fitur

- 📅 Menampilkan "Quote of the Day"
- 🎲 Tombol untuk generate kutipan acak
- ⚡ Sistem caching otomatis menggunakan serverless API route
- 🧠 SEO-friendly: dilengkapi metadata, robots.txt, dan sitemap.xml
- 🎨 Tampilan clean dengan styling responsif

---

## 🛠️ Teknologi

- [Next.js App Router](https://nextjs.org/docs/app)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ZenQuotes API](https://zenquotes.io/)
- [Vercel](https://vercel.com/) (disarankan untuk deployment)


## ⚙️ Konfigurasi

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

# Install dependencies
npm install

# Jalankan di lokal
npm run dev
