"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroSlides } from "@/data/gallery";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = heroSlides.length > 0 ? heroSlides : [{ src: "/images/placeholder.svg", alt: "School" }];

  // Auto-advance every 5 seconds.
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[75vh] min-h-[460px] w-full overflow-hidden bg-brand-900">
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
            className="object-cover"
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
        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight drop-shadow-sm sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-accent-400">{siteConfig.tagline}</p>
        <p className="mt-3 max-w-xl text-brand-100">
          Quality English-medium education from {siteConfig.classesRange} in{" "}
          {siteConfig.contact.addressLine}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-900 shadow transition hover:bg-accent-400"
          >
            Enquire for Admission <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Call Us
          </a>
        </div>
      </div>

      {/* Slide indicator dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === current ? "w-8 bg-accent-500" : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
