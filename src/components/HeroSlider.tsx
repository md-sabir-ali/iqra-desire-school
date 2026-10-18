"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  GraduationCap,
  Languages,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroSlides } from "@/data/gallery";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = heroSlides.length > 0 ? heroSlides : [{ src: "/images/placeholder.svg", alt: "School" }];

  const go = (next: number) => setCurrent((next + slides.length) % slides.length);

  // Auto-advance every 5 seconds (pauses on hover/focus).
  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, paused]);

  const trustChips = [
    { icon: CalendarDays, label: `Est. ${siteConfig.establishedYear}` },
    { icon: GraduationCap, label: siteConfig.classesRange },
    { icon: Languages, label: "English Medium" },
  ];

  return (
    <section
      className="relative h-[80vh] min-h-[480px] w-full overflow-hidden bg-brand-900 lg:h-[88vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Rotating background images with fade */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? undefined : "lazy"}
            quality={70}
            className={`object-cover ${i === current ? "animate-kenburns" : ""}`}
            sizes="100vw"
          />
          {/* Dark gradient so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-brand-900/40" />
        </div>
      ))}

      {/* Foreground content */}
      <div className="container-page relative z-10 flex h-full flex-col justify-center text-white">
        <span className="inline-flex w-fit items-center rounded-full bg-accent-500/90 px-4 py-1 text-sm font-semibold text-brand-900">
          Admissions Open {new Date().getFullYear()}–{new Date().getFullYear() + 1}
        </span>

        {/* School name is the semantic h1 (SEO). The benefit line below is the
            large visual subhead that speaks to parents. */}
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight drop-shadow-sm sm:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-2xl font-display text-xl font-semibold text-accent-400 sm:text-2xl">
          A caring school where every child learns, grows &amp; achieves
        </p>
        <p className="mt-3 max-w-xl text-base text-brand-100 sm:text-lg">
          Quality English-medium education from {siteConfig.classesRange} in{" "}
          {siteConfig.contact.addressLine}.
        </p>

        {/* Trust chips */}
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {trustChips.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-accent-400" />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-900 shadow transition hover:bg-accent-400"
          >
            Enquire for Admission <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Call Us
          </a>
        </div>
      </div>

      {/* Prev / next arrows (desktop-friendly; hidden on smallest screens) */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(current - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(current + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/15 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Slide indicator dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`block h-2.5 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-accent-500"
                    : "w-2.5 bg-white/60 group-hover:bg-white"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
