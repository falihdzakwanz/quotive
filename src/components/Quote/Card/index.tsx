"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import QuoteModal from "@/components/Quote/Modal";

export type QuoteCardProps = {
  quote?: string;
  author?: string;
  random?: boolean;
};

export default function QuoteCard({
  quote,
  author,
  random = false,
}: QuoteCardProps) {
  const [data, setData] = useState<{ q: string; a: string } | null>(
    quote && author ? { q: quote, a: author } : null
  );
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

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
    <div className="relative border rounded-xl p-4 bg-accent shadow-md">
      {data ? (
        <div className="animate-slide-in">
          {random && (
            <button
              onClick={fetchRandomQuote}
              disabled={isProcessing}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
              title="Refresh Quote"
            >
              <RotateCw
                className={`w-5 h-5 ${isProcessing ? "animate-spin" : ""}`}
              />
            </button>
          )}

          <p className="italic mb-2 mt-3 text-center">&quot;{data.q}&quot;</p>
          <p className="text-right font-semibold">- {data.a}</p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-3 text-sm text-light-orange hover:underline"
          >
            Download
          </button>

          {showModal && data && (
            <QuoteModal
              quote={data.q}
              author={data.a}
              onClose={() => setShowModal(false)}
              isOpen={showModal}
            />
          )}
        </div>
      ) : isProcessing ? (
        <button
          className="flex items-center justify-center px-4 py-2 bg-light-orange text-white rounded-md cursor-not-allowed"
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
          className="relative overflow-hidden group px-4 py-2 bg-light-orange text-white rounded-md transition-colors duration-300 animate-wiggle"
        >
          <span className="relative z-10">Get Random Quote</span>
          <span className="absolute inset-0 bg-heavy-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></span>
        </button>
      )}
    </div>
  );
}
