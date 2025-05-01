export async function getTodayQuote() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/quote/today`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch today's quote");
  }

  const { quote } = await res.json();
  return quote;
}
