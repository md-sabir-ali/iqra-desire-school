"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PlayCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/types";

/**
 * Client-side gallery grid with a built-in full-screen lightbox.
 *
 * - Click any photo to open it full-screen.
 * - Navigate with on-screen arrows OR keyboard (←/→), close with Esc or backdrop click.
 * - Videos are not opened in the lightbox (they just show a play badge in the grid);
 *   this keeps behaviour unchanged for video items.
 *
 * No external libraries — pure React + Tailwind. Images reuse Next/Image for
 * optimisation, so there's no extra payload beyond this small component.
 */
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  // Index of the currently open image in `items`, or null when closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);

  const showPrev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
  }, [items.length]);

  const showNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
  }, [items.length]);

  // Keyboard controls + lock body scroll while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, showPrev, showNext]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => {
          const isImage = item.type === "image";
          return (
            <figure
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-brand-50"
            >
              {isImage ? (
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="absolute inset-0 h-full w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
                  aria-label={`View photo: ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </button>
              ) : (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30">
                    <PlayCircle className="h-10 w-10 text-white" />
                  </span>
                </>
              )}

              {item.caption && (
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-xs text-white opacity-0 transition group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {/* Lightbox */}
      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:left-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Image + caption (stop propagation so clicks here don't close) */}
          <figure
            className="relative flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                width={1280}
                height={960}
                className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
                sizes="100vw"
                priority
              />
            </div>
            {current.caption && (
              <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/90">
                {current.caption}
              </figcaption>
            )}
            <p className="mt-2 text-xs text-white/50">
              {(openIndex ?? 0) + 1} / {items.length}
            </p>
          </figure>

          {/* Next */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:right-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
