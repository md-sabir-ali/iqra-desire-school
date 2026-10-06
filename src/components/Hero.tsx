import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
      {/* Decorative shapes */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
            Admissions Open {new Date().getFullYear()}–{new Date().getFullYear() + 1}
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-lg text-brand-50 sm:text-xl">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 text-brand-100">
            Quality English-medium education from {siteConfig.classesRange} in{" "}
            {siteConfig.contact.addressLine}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
            >
              Enquire for Admission <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
