"use client";

import SocialMediaIcons from "@/components/SocialMediaIcons";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import html2canvas from "html2canvas";
import { Download, X } from "lucide-react";
import { useRef, useState } from "react";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  quote: string;
  author: string;
};

const sizes = {
  square: { width: 1080, height: 1080 },
  story: { width: 1080, height: 1920 },
  landscape: { width: 1280, height: 720 },
};

export default function QuoteModal({
  isOpen,
  onClose,
  quote,
  author,
}: QuoteModalProps) {
  const [selectedSize, setSelectedSize] =
    useState<keyof typeof sizes>("square");

  const visiblePreviewRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (downloadRef.current) {
      const canvas = await html2canvas(downloadRef.current, {
        backgroundColor: "#ffffff",
        useCORS: true,
        allowTaint: true,
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = `quote-${selectedSize}.png`;
      link.click();
    }
  }

  const { width, height } = sizes[selectedSize];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-auto">
        <DialogPanel className="bg-white max-w-md w-full rounded-lg p-6 shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-red-500 hover:text-red-800 transition"
          >
            <X />
          </button>

          <DialogTitle className="text-lg font-semibold mb-4 text-center">
            Quote Preview
          </DialogTitle>

          {/* Size Selector */}
          <div className="flex justify-center gap-2 mb-4">
            {Object.keys(sizes).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedSize(key as keyof typeof sizes)}
                className={`px-3 py-1 text-sm border rounded-full transition ${
                  selectedSize === key
                    ? "bg-light-orange text-white"
                    : "text-gray-600 bg-white hover:bg-gray-100"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Scrollable Container */}
          <div className="max-h-[350px] overflow-auto p-2 rounded bg-gray-50">
            {/* Visible Preview (scaled down) */}
            <div
              ref={visiblePreviewRef}
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "1rem",
                borderRadius: "0.5rem",
                border: "1px solid #ddd",
                width: width / 4,
                height: height / 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <p className="italic mb-2 mt-3 text-center">
                &quot;{quote}&quot;
              </p>
              <p className="text-right font-semibold">- {author}</p>
              <p className="mt-4 text-xs text-center text-gray-500">Quotive</p>
            </div>
          </div>

          {/* Hidden Full-size for Download */}
          <div
            ref={downloadRef}
            style={{
              position: "absolute",
              top: "-9999px",
              left: "-9999px",
              width,
              height,
              padding: "2rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                marginBottom: "1rem",
                textAlign: "center",
                fontSize: "3.5rem",
              }}
            >
              &quot;{quote}&quot;
            </p>
            <p
              style={{
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
            >
              - {author}
            </p>
            <p
              style={{
                marginTop: "2rem",
                textAlign: "center",
                fontSize: "2rem",
                color: "#6B7280",
              }}
            >
              Quotive
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="mt-6 relative overflow-hidden group flex items-center justify-center gap-2 px-4 py-2 bg-light-orange text-white rounded-md w-full active:scale-95 transition-transform transition-colors duration-50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Image
            </span>
            <span className="absolute inset-0 bg-heavy-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-600 ease-out z-0"></span>
          </button>

          <SocialMediaIcons />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
