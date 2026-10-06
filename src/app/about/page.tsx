import Image from "next/image";
import type { Metadata } from "next";
import { Target, Eye, Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { getFaculty } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${siteConfig.name} — our vision, mission, and commitment to quality education in ${siteConfig.contact.addressLine}.`,
};

export default async function AboutPage() {
  const faculty = await getFaculty();
  const principal = faculty.find((f) => f.role.toLowerCase().includes("principal"));

  return (
    <>
      {/* Page header */}
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <h1 className="text-3xl font-extrabold sm:text-4xl">About Us</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            Learn about our journey, values, and the people who make{" "}
            {siteConfig.shortName} a special place to learn and grow.
          </p>
        </div>
      </div>

      {/* Story */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title={`About ${siteConfig.name}`} />
            <p className="text-gray-600">
              {/* TODO: replace with your school's real history and background. */}
              {siteConfig.name} is an English-medium school located in{" "}
              {siteConfig.contact.addressLine}. We offer education from{" "}
              {siteConfig.classesRange}, focusing on strong academic foundations,
              moral values, and the all-round development of every student.
            </p>
            <p className="mt-4 text-gray-600">
              Our caring teachers, disciplined environment, and student-first
              approach help children build confidence and a lifelong love for
              learning.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-50">
            <Image
              src="/images/placeholder.svg"
              alt={`${siteConfig.name} campus`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-gray-50">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-brand-800">Our Vision</h3>
            <p className="mt-2 text-gray-600">
              {/* TODO: customize */}
              To be a leading school that empowers students with knowledge,
              values, and skills to become responsible and successful citizens.
            </p>
          </div>
          <div className="card">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-brand-800">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              {/* TODO: customize */}
              To provide quality education in a safe and nurturing environment,
              encouraging curiosity, discipline, and holistic growth in every
              child.
            </p>
          </div>
        </div>
      </Section>

      {/* Principal's message */}
      <Section>
        <SectionHeading eyebrow="Leadership" title="Principal's Message" />
        <div className="card flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-brand-50">
            <Image
              src={principal?.photo || "/images/placeholder.svg"}
              alt={principal?.name || "Principal"}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div>
            <Quote className="h-6 w-6 text-brand-300" />
            <p className="mt-2 text-gray-600">
              {/* TODO: replace with the real Principal's message. */}
              {principal?.bio ||
                "At our school, we believe every child is unique. Together with parents, we nurture each student to grow in knowledge, character, and confidence."}
            </p>
            <p className="mt-4 font-semibold text-brand-800">
              {principal?.name || "Principal Name"}
            </p>
            <p className="text-sm text-gray-500">{principal?.role || "Principal"}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
