"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { corePillars } from "@/data/academics";

export function PillarsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = corePillars.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  // Auto-advance every 4.5s unless the user is hovering/interacting.
  useEffect(() => {
    if (paused || count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 4500);
    return () => clearInterval(t);
  }, [paused, count]);

  const pillar = corePillars[index];

  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-brand-800 text-white shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative h-64 md:h-auto">
          {corePillars.map((p, i) => (
            <Image
              key={p.title}
              src={p.image}
              alt={p.title}
              fill
              className={`object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Text side */}
        <div className="relative flex flex-col justify-center p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Core Pillar {index + 1} / {count}
          </p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{pillar.title}</h3>
          <p className="mt-3 text-brand-100">{pillar.description}</p>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous pillar"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next pillar"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="ml-2 flex gap-2">
              {corePillars.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to pillar ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent-500" : "w-2.5 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
