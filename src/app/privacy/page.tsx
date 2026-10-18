import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects the information you share through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <Breadcrumbs items={[{ name: "Privacy Policy" }]} path="/privacy" />
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            Your trust matters to us. This page explains, in simple terms, what
            information we collect and how we use it.
          </p>
        </div>
      </div>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-gray-700">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().getFullYear()}
          </p>

          <div>
            <h2 className="text-xl font-bold text-brand-800">
              Information we collect
            </h2>
            <p className="mt-2 leading-relaxed">
              When you use the admission enquiry form on this website, we collect
              only the details you choose to provide: the parent/guardian name,
              the student&apos;s name, the class you are enquiring about, a mobile
              number, and optionally an email address and a message. We do not ask
              for any other personal or sensitive information through this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-800">
              How we use your information
            </h2>
            <p className="mt-2 leading-relaxed">
              We use the information solely to respond to your admission enquiry —
              to contact you, answer your questions, and guide you through the
              admission process. We do not sell, rent, or share your information
              with third parties for marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-800">
              Children&apos;s information
            </h2>
            <p className="mt-2 leading-relaxed">
              As a school, we understand enquiries involve a child&apos;s details.
              A student&apos;s name is collected only to process the admission
              enquiry made by a parent or guardian, and is handled with care. We
              encourage parents and guardians to submit enquiries on behalf of
              their children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-800">
              How your information is stored
            </h2>
            <p className="mt-2 leading-relaxed">
              Enquiry details are delivered to the school office (by email and/or
              our secure content system) so our team can follow up with you. Access
              is limited to authorised school staff.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-800">Cookies & analytics</h2>
            <p className="mt-2 leading-relaxed">
              This website uses privacy-friendly, aggregate visitor analytics to
              understand which pages are useful. These analytics do not identify
              you personally.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-800">Contact us</h2>
            <p className="mt-2 leading-relaxed">
              If you have any question about this policy or wish to update or remove
              information you have shared, please contact the school office:
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                Phone:{" "}
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  className="font-medium text-brand-700 hover:text-accent-600"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-brand-700 hover:text-accent-600"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>Address: {siteConfig.contact.addressLine}</li>
            </ul>
          </div>

          <p className="rounded-lg bg-brand-50 p-4 text-sm text-gray-600">
            This policy may be updated from time to time. Any changes will be
            posted on this page.
          </p>
        </div>
      </Section>
    </>
  );
}
