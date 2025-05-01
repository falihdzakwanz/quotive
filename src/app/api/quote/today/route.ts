import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cachedQuote: any = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 1000 * 60 * 60; 

export async function GET() {
  const now = Date.now();

  // Jika masih dalam cache, langsung kembalikan
  if (cachedQuote && now - lastFetchTime < CACHE_DURATION) {
    return NextResponse.json(
      { quote: cachedQuote, source: "cache" },
      { status: 200 }
    );
  }

  // Ambil quote baru dari ZenQuotes API
  try {
    const res = await fetch("https://zenquotes.io/api/today", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch from ZenQuotes API");
    }

    const data = await res.json();
    cachedQuote = data[0];
    lastFetchTime = now; 

    return NextResponse.json(
      { quote: cachedQuote, source: "api" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching quote:", error);
    return NextResponse.json(
      { error: "Failed to fetch quote" },
      { status: 500 }
    );
  }
}
