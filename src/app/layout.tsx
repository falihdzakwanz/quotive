import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quotive — Daily Motivational Quotes",
  description:
    "Get your daily dose of motivation and inspiration from Quotive, powered by ZenQuotes.",
  keywords: [
    "quotes",
    "motivation",
    "inspiration",
    "ZenQuotes",
    "daily quotes",
    "Quotive",
  ],
  authors: [{ name: "Falih Dzakwan Zuhdi" }],
  creator: "Quotive",
  generator: "Next.js",
  applicationName: "Quotive",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  openGraph: {
    title: "Quotive — Daily Motivational Quotes",
    description:
      "Get your daily dose of motivation and inspiration from Quotive.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Quotive",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Quotive Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quotive — Daily Quotes",
    description: "Get inspired every day with Quotive!",
    images: ["/og.png"],
  },
  icons: {
    icon: "/icons-128.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
