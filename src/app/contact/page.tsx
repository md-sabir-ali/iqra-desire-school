import type { Metadata } from "next";
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} in ${siteConfig.contact.addressLine}. Phone, email, and location.`,
};

export default function ContactPage() {
  const waNumber = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");

  return (
    <>
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Contact Us</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            We are here to help. Reach out to us anytime.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <div>
            <SectionHeading eyebrow="Get in Touch" title="School Contact Details" />
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-800">Address</p>
                  <p className="text-sm text-gray-600">{siteConfig.contact.addressLine}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-800">Phone</p>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-gray-600 hover:text-brand-700">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-800">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-600 hover:text-brand-700">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
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
          </div>

          {/* Map */}
          <div>
            <SectionHeading eyebrow="Location" title="Find Us on the Map" />
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
              {/*
                TODO: Replace the src below with your real Google Maps embed link.
                How to get it:
                 1. Open Google Maps, search your school.
                 2. Click Share > Embed a map > copy the src URL from the iframe.
                 3. Paste that URL into the src="" below.
              */}
              <iframe
                title={`${siteConfig.name} location`}
                src="https://www.google.com/maps?q=Simri%2C%20Buxar%2C%20Bihar&output=embed"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Map shows an approximate area. Update with the exact location (see
              code comment on this page).
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
