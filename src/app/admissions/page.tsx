import type { Metadata } from "next";
import { ClipboardList, FileText, UserCheck, Phone, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { EnquiryForm } from "@/components/EnquiryForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admissions at ${siteConfig.name} for ${siteConfig.classesRange}. Enquire online and start your child's journey.`,
};

const steps = [
  {
    icon: MessageCircle,
    title: "1. Enquire",
    text: "Fill the enquiry form below or call the school office to express your interest.",
  },
  {
    icon: FileText,
    title: "2. Collect Form",
    text: "Collect and submit the admission form along with required documents.",
  },
  {
    icon: UserCheck,
    title: "3. Interaction",
    text: "A short interaction with the child and parents (as applicable).",
  },
  {
    icon: ClipboardList,
    title: "4. Confirmation",
    text: "On selection, complete the fee process to confirm admission.",
  },
];

export default function AdmissionsPage() {
  // Build a WhatsApp link from the configured number (digits only).
  const waNumber = siteConfig.contact.whatsapp.replace(/[^\d]/g, "");

  return (
    <>
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Admissions</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            Admissions open for {siteConfig.classesRange}. We would love to welcome
            your child to our school family.
          </p>
        </div>
      </div>

      {/* Process */}
      <Section>
        <SectionHeading
          eyebrow="How to Apply"
          title="Admission Process"
          subtitle="A simple, four-step process to join our school."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="card">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-brand-800">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Form + quick contact */}
      <Section className="bg-gray-50">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Enquire Online" title="Admission Enquiry Form" />
            <EnquiryForm />
          </div>
          <div>
            <SectionHeading eyebrow="Need Help?" title="Talk to Us Directly" />
            <div className="card space-y-4">
              <p className="text-sm text-gray-600">
                Prefer to talk directly? Reach out and our team will be happy to
                help you with the admission process.
              </p>
              <a href={`tel:${siteConfig.contact.phone}`} className="btn-primary w-full">
                <Phone className="h-4 w-4" /> Call {siteConfig.contact.phone}
              </a>
              {waNumber && (
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              )}
              <div className="rounded-lg bg-brand-50 p-4 text-sm text-gray-600">
                <p className="font-medium text-brand-800">School Office</p>
                <p className="mt-1">{siteConfig.contact.addressLine}</p>
                <p className="mt-1">{siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
