"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * SCROLL-TO-TOP BUTTON
 * ---------------------------------------------------------------------------
 * Appears after the user scrolls down a bit; smoothly returns to the top.
 * Sits just above the floating WhatsApp button (bottom-right stack).
 * Accessible: real <button> with aria-label + focus ring; respects
 * reduced-motion via CSS `scroll-behavior` already set globally.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Scroll back to top"
      className={`fixed bottom-24 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-white shadow-xl ring-1 ring-black/5 transition-all duration-300 hover:bg-brand-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
