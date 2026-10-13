import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  Clock,
  Navigation,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} in ${siteConfig.contact.addressLine}. Phone, email, and location.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const waNumber = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");
  const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    siteConfig.contact.addressLine
  )}`;

  const infoCards = [
    {
      icon: MapPin,
      title: "Address",
      lines: [siteConfig.contact.addressLine],
    },
    {
      icon: Phone,
      title: "Phone",
      lines: [siteConfig.contact.phone],
      href: `tel:${siteConfig.contact.phoneHref}`,
    },
    {
      icon: Mail,
      title: "Email",
      lines: [siteConfig.contact.email],
      href: `mailto:${siteConfig.contact.email}`,
    },
  ];

  return (
    <>
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <Breadcrumbs items={[{ name: "Contact Us" }]} path="/contact" />
          <h1 className="text-3xl font-extrabold sm:text-4xl">Contact Us</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            We are here to help. Reach out to us anytime — we would love to hear
            from you.
          </p>
        </div>
      </div>

      {/* Quick info cards */}
      <Section>
        <SectionHeading eyebrow="Get in Touch" title="School Contact Details" centered />

        <div className="grid gap-6 sm:grid-cols-3">
          {infoCards.map(({ icon: Icon, title, lines, href }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-md">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-brand-800">{title}</h3>
              {lines.map((line) =>
                href ? (
                  <a
                    key={line}
                    href={href}
                    className="mt-1 block break-words text-sm text-gray-600 transition hover:text-brand-700"
                  >
                    {line}
                  </a>
                ) : (
                  <p key={line} className="mt-1 text-sm text-gray-600">
                    {line}
                  </p>
                )
              )}
            </div>
          ))}
        </div>

        {/* Quick action buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`tel:${siteConfig.contact.phoneHref}`} className="btn-primary">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          {waNumber && (
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          )}
          {siteConfig.social.facebook && (
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          )}
        </div>
      </Section>

      {/* Office hours + Map */}
      <Section className="bg-gray-50">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Office hours */}
          <div>
            <SectionHeading eyebrow="Visit Us" title="Office Hours" />
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Clock className="h-6 w-6" />
              </div>
              {/* TODO: confirm the school's real office/visiting hours. */}
              <ul className="divide-y divide-gray-100 text-sm">
                <li className="flex items-center justify-between py-3">
                  <span className="font-medium text-brand-800">Monday – Saturday</span>
                  <span className="text-gray-600">8:00 AM – 2:00 PM</span>
                </li>
                <li className="flex items-center justify-between py-3">
                  <span className="font-medium text-brand-800">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </li>
              </ul>
              <div className="mt-5 rounded-lg bg-brand-50 p-4 text-sm text-gray-600">
                <p className="font-medium text-brand-800">Good to know</p>
                <p className="mt-1">
                  For admission enquiries, you can call, WhatsApp, or visit the
                  school office during office hours. We&apos;ll be happy to guide
                  you through the process.
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <SectionHeading eyebrow="Location" title="Find Us on the Map" />
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              {/*
                This map searches the school's address area. For an exact pin:
                 1. Open Google Maps, search your school by name.
                 2. Click Share > Embed a map > copy the src URL from the iframe.
                 3. Paste that URL into the src="" below.
              */}
              <iframe
                title={`${siteConfig.name} location`}
                src="https://www.google.com/maps?q=Ramopatti%2C%20Simri%2C%20Buxar%2C%20Bihar%20802135&output=embed"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-xs text-gray-500">
                Map shows an approximate area.
              </p>
              <a
                href={mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-accent-600"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
