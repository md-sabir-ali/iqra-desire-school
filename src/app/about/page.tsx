import Image from "next/image";
import type { Metadata } from "next";
import {
  Target,
  Eye,
  Quote,
  GraduationCap,
  Heart,
  ShieldCheck,
  BookOpen,
  Sparkles,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { getFaculty } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${siteConfig.name} — our vision, mission, and commitment to quality education in ${siteConfig.contact.addressLine}.`,
};

/** Core values displayed as a row of icon pills below Vision/Mission. */
const coreValues = [
  { icon: BookOpen, label: "Academic Excellence" },
  { icon: Heart, label: "Caring Environment" },
  { icon: ShieldCheck, label: "Discipline & Values" },
  { icon: Sparkles, label: "Holistic Growth" },
];

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

      {/* Established strip — quick trust facts */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-page flex flex-wrap items-center justify-center gap-6 py-5 text-sm sm:gap-10">
          <span className="flex items-center gap-2 font-medium text-brand-700">
            <CalendarDays className="h-4 w-4 text-accent-500" />
            Established 2013
          </span>
          <span className="flex items-center gap-2 font-medium text-brand-700">
            <GraduationCap className="h-4 w-4 text-accent-500" />
            Nursery to Class 10
          </span>
          <span className="flex items-center gap-2 font-medium text-brand-700">
            <BookOpen className="h-4 w-4 text-accent-500" />
            English Medium
          </span>
          <span className="flex items-center gap-2 font-medium text-brand-700">
            <MapPin className="h-4 w-4 text-accent-500" />
            Simri, Buxar, Bihar
          </span>
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-50 shadow-lg">
            <Image
              src="/images/galary/st.jpg"
              alt={`Students at ${siteConfig.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Vision & Mission — rich gold-accent cards */}
      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Vision & Mission"
          centered
        />
        <div className="grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-accent-400 hover:shadow-lg">
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent-50 transition-transform group-hover:scale-110" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-md">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-800">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {/* TODO: customize */}
                To be a leading school that empowers students with knowledge,
                values, and skills to become responsible and successful citizens.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-accent-400 hover:shadow-lg">
            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent-50 transition-transform group-hover:scale-110" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-md">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-800">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {/* TODO: customize */}
                To provide quality education in a safe and nurturing environment,
                encouraging curiosity, discipline, and holistic growth in every
                child.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values row */}
        <div className="mt-10">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-wide text-brand-600">
            Our Core Values
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {coreValues.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-5 py-2.5 text-sm font-medium text-brand-700 shadow-sm transition hover:border-accent-400 hover:shadow-md"
              >
                <Icon className="h-4 w-4 text-accent-500" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us — quick highlights */}
      <Section>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Makes Us Different"
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              title: "Personal Attention",
              text: "Small class sizes and caring teachers ensure every child gets the focus they need.",
            },
            {
              icon: ShieldCheck,
              title: "Safe Campus",
              text: "A secure, disciplined environment where students feel safe and parents feel confident.",
            },
            {
              icon: GraduationCap,
              title: "Board Exam Focus",
              text: "Regular tests, doubt-clearing sessions, and focused preparation for Class 10 boards.",
            },
            {
              icon: Heart,
              title: "Values First",
              text: "We build honesty, respect, and good character alongside strong academics.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-brand-800">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Principal's message — already redesigned, kept as-is */}
      <Section className="bg-gray-50">
        <SectionHeading eyebrow="Leadership" title="Principal&apos;s Message" centered />
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-brand-700 p-8 text-white shadow-xl sm:p-10">
            {/* decorative accent */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-500/20" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-accent-500/10" />

            <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              {/* Photo / placeholder */}
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-4 border-accent-400/60 bg-brand-600 shadow-lg">
                {principal?.photo ? (
                  <Image
                    src={principal.photo}
                    alt={principal?.name || "Principal"}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-accent-300">
                    <GraduationCap className="h-14 w-14" />
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="text-center sm:text-left">
                <Quote className="mx-auto h-8 w-8 text-accent-400 sm:mx-0" />
                <p className="mt-3 text-lg leading-relaxed text-brand-50">
                  {principal?.bio ||
                    `At ${siteConfig.shortName}, we believe every child is unique and full of potential. Our dedicated teachers work hand in hand with parents to nurture each student — not only in academics, but in character, confidence, and values. Together, we help every child grow and shine.`}
                </p>
                <div className="mt-5">
                  {principal?.name ? (
                    <p className="text-lg font-bold text-accent-400">{principal.name}</p>
                  ) : (
                    <p className="text-lg font-bold text-accent-400">Our Principal</p>
                  )}
                  {principal?.qualifications && (
                    <p className="text-sm text-brand-200">{principal.qualifications}</p>
                  )}
                  <p className="text-sm font-medium text-brand-200">
                    {principal?.role || "Principal"}, {siteConfig.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
