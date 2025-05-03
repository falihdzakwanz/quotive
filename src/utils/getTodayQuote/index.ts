export async function getTodayQuote() {
  const localUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/quote/today`;
  const fallbackUrl = "https://zenquotes.io/api/today";

  try {
    const res = await fetch(localUrl, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    if (data?.quote) return data.quote;

    throw new Error("Invalid quote structure from local API");
  } catch (err) {
    console.warn("⚠️ Failed to fetch from local API, trying fallback:", err);

    try {
      const fallbackRes = await fetch(fallbackUrl, {
        next: { revalidate: 3600 },
      });
      const fallbackData = await fallbackRes.json();

      return fallbackData[0];
    } catch (fallbackErr) {
      console.error("❌ Both fetch attempts failed:", fallbackErr);
      throw new Error("Failed to fetch today's quote");
    }
  }
}
