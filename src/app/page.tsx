import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { Section, SectionHeading } from "@/components/Section";
import { NoticeCard } from "@/components/NoticeCard";
import { PhotoBand } from "@/components/PhotoBand";
import { PillarsCarousel } from "@/components/PillarsCarousel";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats, standApart } from "@/data/academics";
import { getNotices, getGalleryItems } from "@/lib/api";
import { siteConfig } from "@/config/site";

// Map icon names (from data) to actual icon components.
const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
  ShieldCheck,
  GraduationCap,
};

// Re-fetch CMS content (notices/gallery) at most once per 60s (ISR).
export const revalidate = 60;

export default async function HomePage() {
  const notices = (await getNotices()).slice(0, 3);
  const gallery = (await getGalleryItems()).slice(0, 6);

  return (
    <>
      <HeroSlider />

      {/* Animated stats */}
      <section className="bg-brand-800 py-12 text-white">
        <div className="container-page grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-accent-400 sm:text-4xl">
                  {"isYear" in s && s.isYear ? (
                    s.value
                  ) : (
                    <CountUp end={s.value} suffix={s.suffix} />
                  )}
                </div>
                <div className="mt-1 text-sm font-medium text-brand-100">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Welcome / intro */}
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
                Learn More <ArrowRight className="h-4 w-4" />
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

      {/* Core Pillars carousel */}
      <Section>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Core Pillars"
          subtitle="The values and strengths that shape everything we do."
          centered
        />
        <Reveal>
          <PillarsCarousel />
        </Reveal>
      </Section>

      {/* What makes us stand apart */}
      <Section className="bg-gray-50">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Makes Us Stand Apart"
          subtitle="A learning experience that goes beyond textbooks."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standApart.map((item, i) => {
            const Icon = iconMap[item.icon] ?? BookOpen;
            return (
              <Reveal key={item.title} delay={(i % 3) * 120}>
                <div className="card h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Immersive campus photo band */}
      <PhotoBand
        src="/images/galary/sport1.jpg"
        alt="Students at Iqra Desire English School"
        eyebrow="Life at School"
        title="A Place Where Every Child Grows"
        text="Beyond the classroom — sports, prayer, celebrations, and friendships that build confidence and character."
      />

      {/* Toppers / Achievements */}
      <Section>
        <SectionHeading
          eyebrow="Our Pride"
          title="Celebrating Our Achievers"
          subtitle="We are proud of our students' hard work and success."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <Reveal from="left">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/galary/2026 topper.jpg"
                alt="Toppers of the school"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-semibold text-white">Our Toppers</p>
              </div>
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/galary/medal.jpg"
                alt="Students receiving medals"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="font-semibold text-white">Award Winners</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Latest notices */}
      <Section className="bg-gray-50">
        <div className="flex items-end justify-between">
          <SectionHeading eyebrow="Stay Updated" title="Latest Notices" />
          <Link href="/notices" className="mb-8 hidden text-sm font-semibold text-brand-700 hover:underline sm:block">
            View all notices →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {notices.map((n, i) => (
            <Reveal key={n.id} delay={i * 120}>
              <NoticeCard notice={n} />
            </Reveal>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/notices" className="text-sm font-semibold text-brand-700 hover:underline">
            View all notices →
          </Link>
        </div>
      </Section>

      {/* Gallery preview */}
      <Section>
        <div className="flex items-end justify-between">
          <SectionHeading eyebrow="Life at School" title="Gallery" />
          <Link href="/gallery" className="mb-8 hidden text-sm font-semibold text-brand-700 hover:underline sm:block">
            View full gallery →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100}>
              <div className="relative aspect-square overflow-hidden rounded-xl bg-brand-50">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-700 text-white">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Give Your Child the Best Start</h2>
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
    </>
  );
}
