import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { getClassLevels } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Academics",
  description: `Academics at ${siteConfig.name} — curriculum and classes from ${siteConfig.classesRange}.`,
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

      <Section>
        <SectionHeading
          eyebrow="Curriculum"
          title="Our Academic Levels"
          subtitle="We guide students step by step, from their first days in school to their board examinations."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {levels.map((level) => (
            <div key={level.id} className="card">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-brand-800">{level.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{level.description}</p>
            </div>
          ))}
        </div>
      </Section>

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
        </div>
      </Section>
    </>
  );
}
