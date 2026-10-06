"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={siteConfig.name}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold leading-tight text-brand-800 sm:text-lg">
            {siteConfig.shortName}
            <span className="hidden sm:inline"> English School</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-gray-600 hover:text-brand-700"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/admissions" className="btn-primary ml-2 !py-2">
              Admissions Open
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="container-page flex flex-col py-3">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-2">
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Admissions Open
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
