import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  BookOpen,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { getClassLevels } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Academics",
  description: `Academics at ${siteConfig.name} — curriculum and classes from ${siteConfig.classesRange}.`,
};

/**
 * Per-level visual mapping (icon + short tag) keyed by ClassLevel.id.
 * Pure presentational — no data-model change needed. Falls back gracefully
 * for any new/unknown level id.
 */
const levelMeta: Record<string, { icon: LucideIcon; tag: string }> = {
  "pre-primary": { icon: Baby, tag: "Foundation Years" },
  primary: { icon: BookOpen, tag: "Building Basics" },
  "upper-primary": { icon: Lightbulb, tag: "Growing Minds" },
  secondary: { icon: GraduationCap, tag: "Board Preparation" },
};

export default async function AcademicsPage() {
  const levels = await getClassLevels();

  return (
    <>
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Academics</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            A structured, caring academic journey from {siteConfig.classesRange}.
          </p>
        </div>
      </div>

      {/* Academic levels — St. Mathews-style numbered journey cards */}
      <Section>
        <SectionHeading
          eyebrow="Curriculum"
          title="A Journey Through the Classes"
          subtitle="We guide students step by step, from their very first days in school to their board examinations — nurturing them at every stage."
          centered
        />

        <div className="grid gap-6 md:grid-cols-2">
          {levels.map((level, index) => {
            const meta = levelMeta[level.id] ?? {
              icon: GraduationCap,
              tag: "Academics",
            };
            const Icon = meta.icon;
            const step = String(index + 1).padStart(2, "0");

            return (
              <div
                key={level.id}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-400 hover:shadow-lg sm:p-7"
              >
                {/* Big faded step number watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-5 select-none text-8xl font-black leading-none text-brand-50 transition-colors group-hover:text-accent-50"
                >
                  {step}
                </span>

                <div className="relative">
                  <div className="flex items-center gap-4">
                    {/* Gold number badge */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-xl font-extrabold text-white shadow-md">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                        {meta.tag}
                      </p>
                      <h3 className="mt-0.5 text-lg font-bold text-brand-800">
                        {level.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {level.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Approach" title="How We Teach" centered />
        <div className="mx-auto max-w-3xl space-y-4 text-gray-600">
          {/* TODO: customize these points to match your school */}
          <p>
            Our teaching blends strong fundamentals with activity-based learning.
            We focus on reading, writing, and arithmetic in the early years, and
            build toward conceptual understanding and exam readiness in the higher
            classes.
          </p>
          <p>
            Regular tests, parent-teacher interaction, and individual attention
            ensure that no child is left behind.
          </p>

          {/* Quick highlights — reinforce the approach visually */}
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {[
              "Activity-based, caring teaching",
              "Regular tests & doubt-clearing",
              "Parent-teacher interaction",
              "Individual attention to every child",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Prominent "Apply Now" CTA banner */}
      <section className="bg-brand-800">
        <div className="container-page py-12 sm:py-14">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to begin your child&apos;s journey?
              </h2>
              <p className="mt-2 max-w-xl text-brand-100">
                Admissions are open for {siteConfig.classesRange}. Enquire today and
                give your child the caring, quality education they deserve.
              </p>
            </div>
            <Link
              href="/admissions"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-brand-800"
            >
              Apply Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
