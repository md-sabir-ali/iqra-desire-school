import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const waNumber = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");

  return (
    <footer className="mt-16 bg-brand-800 text-brand-50">
      {/* Admissions CTA strip */}
      <div className="border-b border-white/10 bg-brand-900">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-bold text-white">
              Admissions Open for {siteConfig.classesRange}
            </p>
            <p className="text-sm text-brand-200">
              Give your child a caring, quality education. Enquire today.
            </p>
          </div>
          <Link
            href="/admissions"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-brand-900 shadow transition hover:bg-accent-400"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* About */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-lg font-bold">{siteConfig.name}</span>
          </div>
          <p className="mt-3 text-sm font-medium text-accent-400">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 text-sm text-brand-100">{siteConfig.description}</p>
          {siteConfig.motto && (
            <p className="mt-3 border-l-2 border-accent-500/60 pl-3 text-xs italic text-brand-200">
              {siteConfig.motto}
            </p>
          )}
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-100 hover:text-white">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Contact
          </h3>
          <ul className="mt-3 space-y-3 text-sm text-brand-100">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{siteConfig.contact.addressLine}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>

          {/* Social / contact pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {waNumber && (
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-xs text-brand-200 sm:flex-row">
          <p>
            © {year} {siteConfig.name}
            {siteConfig.establishedYear ? ` · Est. ${siteConfig.establishedYear}` : ""}.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">{siteConfig.contact.addressLine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
