import Link from "next/link";
import { Home, BookOpen, Phone, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/academics", label: "Academics", icon: BookOpen },
    { href: "/admissions", label: "Admissions", icon: GraduationCap },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-brand-800 px-4 py-20 text-center text-white">
      {/* soft brand glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/15" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-accent-500/10" />

      <div className="relative">
        <p className="text-7xl font-extrabold text-accent-400 sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          Oops! Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-brand-100">
          The page you are looking for might have been moved or no longer exists.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-accent-500 hover:text-brand-900"
            >
              <l.icon className="h-4 w-4" />
              {l.label}
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-brand-200">
          {siteConfig.name} · {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
