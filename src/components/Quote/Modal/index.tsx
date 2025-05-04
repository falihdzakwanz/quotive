"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import html2canvas from "html2canvas";
import { Download, X } from "lucide-react";
import { useRef } from "react";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  quote: string;
  author: string;
};

export default function QuoteModal({
  isOpen,
  onClose,
  quote,
  author,
}: QuoteModalProps) {
  const previewRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (previewRef.current) {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: "#ffffff",
        useCORS: true,
        allowTaint: true,
      });
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = "quote.png";
      link.click();
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
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

          {/* Preview Box */}
          <div
            ref={previewRef}
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #ddd",
            }}
          >
            <p className="italic mb-2 mt-3 text-center">&quot;{quote}&quot;</p>
            <p className="text-right font-semibold">- {author}</p>
            <p
              className="mt-4 text-xs text-center"
              style={{ color: "#6B7280" }}
            >
              Quotive
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="mt-6 relative overflow-hidden group flex items-center justify-center gap-2 px-4 py-2 bg-light-orange text-white rounded-md w-full transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Image
            </span>
            <span className="absolute inset-0 bg-heavy-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-600 ease-out z-0"></span>
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
