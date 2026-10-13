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
  Monitor,
  Library,
  Trees,
  MonitorPlay,
  Bus,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { Section, SectionHeading } from "@/components/Section";
import { NoticeCard } from "@/components/NoticeCard";
import { PhotoBand } from "@/components/PhotoBand";
import { PillarsCarousel } from "@/components/PillarsCarousel";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats, standApart, facilities, classLevels } from "@/data/academics";
import { getNotices, getGalleryItems, getAchievements } from "@/lib/api";
import { siteConfig } from "@/config/site";

// Map icon names (from data) to actual icon components.
const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
  ShieldCheck,
  GraduationCap,
  Monitor,
  Library,
  Trees,
  MonitorPlay,
  Bus,
  FlaskConical,
};

// Re-fetch CMS content (notices/gallery) at most once per 60s (ISR).
export const revalidate = 60;

export default async function HomePage() {
  const notices = (await getNotices()).slice(0, 3);
  const gallery = (await getGalleryItems()).slice(0, 6);
  const achievers = (await getAchievements()).slice(0, 3);

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
                  {typeof s.value === "number" && !("isYear" in s && s.isYear) ? (
                    <CountUp end={s.value} suffix={"suffix" in s ? s.suffix : ""} />
                  ) : (
                    <>
                      {s.value}
                      {"suffix" in s ? s.suffix : ""}
                    </>
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

      {/* Our Facilities */}
      <Section>
        <SectionHeading
          eyebrow="Infrastructure"
          title="Our Facilities"
          subtitle="Thoughtfully provided facilities that support safe, engaging, and well-rounded learning."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, i) => {
            const Icon = iconMap[item.icon] ?? BookOpen;
            return (
              <Reveal key={item.title} delay={(i % 3) * 120}>
                <div className="card group h-full border-t-4 border-t-accent-400 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-800">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* A Journey Through the Classes */}
      <Section className="bg-brand-800 text-white">
        <SectionHeading
          eyebrow="Learning Pathway"
          title="A Journey Through the Classes"
          subtitle="From the very first day in Nursery to the Class 10 board exams, we guide every child step by step."
          centered
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
                    <h3 className="text-base font-bold text-accent-300">{level.name}</h3>
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievers.map((a, i) => (
            <Reveal key={a.id} delay={i * 120}>
              <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-md">
                {a.photo ? (
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-brand-50 text-brand-200">
                    <Trophy className="h-14 w-14" />
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                  {a.year && (
                    <span className="mb-1 inline-block rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                      {a.year}
                    </span>
                  )}
                  <p className="font-semibold text-white">{a.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/achievements"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-accent-600 hover:underline"
          >
            View all achievements <ArrowRight className="h-4 w-4" />
          </Link>
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
