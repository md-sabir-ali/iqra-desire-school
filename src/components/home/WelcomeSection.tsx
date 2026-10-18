import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

/** Welcome / intro section with text and a photo. */
export function WelcomeSection() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal from="left">
          <div>
            <SectionHeading eyebrow="Welcome" title={`Welcome to ${siteConfig.name}`} />
            <p className="text-gray-600">
              We are an English-medium school in {siteConfig.contact.addressLine},
              dedicated to providing quality education from {siteConfig.classesRange}.
              Our mission is to nurture confident, responsible, and knowledgeable
              students through a balance of strong academics, good values, and
              co-curricular activities.
            </p>
            <p className="mt-4 text-gray-600">
              With caring teachers and a safe learning environment, we help every
              child grow to their full potential.
            </p>
            <Link href="/about" className="btn-secondary mt-6">
              Learn more about our school <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal from="right">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-50 shadow-lg">
            <Image
              src="/images/galary/prayer.jpg"
              alt="Students at Iqra Desire English School"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
