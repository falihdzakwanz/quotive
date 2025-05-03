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
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  async function fetchRandomQuote() {
    setIsProcessing(true);
    try {
      const res = await fetch("api/quote/random");
      const json = await res.json();
      setData({ q: json[0].q, a: json[0].a });
    } catch (err) {
      console.error("Failed to fetch random quote", err);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="border rounded-xl p-4 bg-accent shadow-md">
      {data ? (
        <div className="animate-slide-in">
          <p className="italic mb-2">&quot;{data.q}&quot;</p>
          <p className="text-right font-semibold">- {data.a}</p>
        </div>
      ) : isProcessing ? (
        <button
          className="flex items-center justify-center px-4 py-2 bg-[#FFB433] text-white rounded-md cursor-not-allowed"
          disabled
        >
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Processing...
        </button>
      ) : (
        <button
          onClick={fetchRandomQuote}
          className="px-4 py-2 bg-[#FFB433] text-white rounded-md hover:bg-[#FF9149] transition-colors duration-200 animate-wiggle"
        >
          Get Random Quote
        </button>
      )}
    </div>
  );
}
