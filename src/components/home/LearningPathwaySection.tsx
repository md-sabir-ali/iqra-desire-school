import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { classLevels } from "@/data/academics";

/** "A Journey Through the Classes" — numbered learning-pathway steps. */
export function LearningPathwaySection() {
  return (
    <Section className="bg-brand-800 text-white">
      <SectionHeading
        eyebrow="Learning Pathway"
        title="A Journey Through the Classes"
        subtitle="From the very first day in Nursery to the Class 10 board exams, we guide every child step by step."
        centered
        dark
      />
      <div className="relative mt-4">
        {/* connecting line (desktop) */}
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-accent-400/0 via-accent-400/60 to-accent-400/0 lg:block" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {classLevels.map((level, i) => (
            <Reveal key={level.id} delay={i * 120}>
              <div className="relative flex h-full flex-col">
                {/* step badge */}
                <div className="relative z-10 mb-5 flex items-center gap-3 lg:justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-brand-800 bg-accent-500 text-xl font-extrabold text-brand-900 shadow-lg">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1 rounded-2xl bg-brand-700/60 p-5 ring-1 ring-white/10 transition hover:bg-brand-700 hover:ring-accent-400/40">
                  <h3 className="text-base font-bold text-accent-400">{level.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100">
                    {level.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/academics"
          className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-accent-400"
        >
          Explore Academics <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
