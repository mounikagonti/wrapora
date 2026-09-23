"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!searchTerm.trim()) return;

    console.log("Search:", searchTerm);
  };

  return (
    <div className="fixed inset-0 z-9999">
      <div className="absolute inset-0 bg-black/5" onClick={onClose} />

      <div className="relative w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="absolute cursor-pointer right-6 top-6 z-10 text-[#211b19] transition hover:text-[#9d3025] sm:right-8 sm:top-7"
        >
          <X className="h-5 w-5 sm:h-[22] sm:w-[22]" strokeWidth={1.3} />
        </button>

        <div className="mx-auto max-w-[1200] px-5 pb-14 pt-10 sm:px-8 sm:pb-16 sm:pt-10">
          <h2 className="text-center font-serif text-[30px] font-medium leading-tight text-[#555] sm:text-[40px]">
            Start typing and hit Enter
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-[1125] items-center border-b border-[#dcdcdc] sm:mt-16"
          >
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search anything"
              className="h-[55] flex-1 bg-transparent px-3 text-[16px] text-[#555] outline-none placeholder:text-[#888] sm:h-[60] sm:text-[17]"
            />

            <button
              type="submit"
              aria-label="Submit search"
              className="flex h-[55] w-[55] items-center justify-center text-[#555] transition hover:text-[#9d3025] sm:h-[60] sm:w-[60]"
            >
              <Search className="h-[25] w-[25]" strokeWidth={1.2} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
