import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/config/site";

/** Closing call-to-action band inviting admission enquiries. */
export function CtaSection() {
  return (
    <Section className="bg-brand-700 text-white">
      <Reveal>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Give Your Child the Best Start</h2>
          <p className="max-w-xl text-brand-100">
            Admissions are open for {siteConfig.classesRange}. Enquire today and
            take the first step toward a bright future.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-accent-400"
          >
            Apply / Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
