"use client";

import { useState } from "react";

type QuoteCardProps = {
  quote?: string;
  author?: string;
  random?: boolean;
};

export default function QuoteCard({ quote, author }: QuoteCardProps) {
  const [data, setData] = useState<{ q: string; a: string } | null>(
    quote && author ? { q: quote, a: author } : null
  );

  async function fetchRandomQuote() {
    const res = await fetch("api/quote/random");
    const json = await res.json();
    setData({ q: json[0].q, a: json[0].a });
  }

  return (
    <div className="border rounded-xl p-4 bg-accent shadow-md">
      {data ? (
        <>
          <p className="italic mb-2">&quot;{data.q}&quot;</p>
          <p className="text-right font-semibold">- {data.a}</p>
        </>
      ) : (
        <button
          onClick={fetchRandomQuote}
          className="px-4 py-2 bg-[#FFB433] text-white rounded-md hover:bg-[#FF9149] transition-colors duration-200"
        >
          Get Random Quote
        </button>
      )}
    </div>
  );
}
