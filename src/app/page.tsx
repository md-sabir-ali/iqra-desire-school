import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { Section, SectionHeading } from "@/components/Section";
import { FeatureCard, StatCard } from "@/components/Cards";
import { NoticeCard } from "@/components/NoticeCard";
import { highlights } from "@/data/academics";
import { getNotices, getGalleryItems } from "@/lib/api";
import { siteConfig } from "@/config/site";

const highlightIcons = [BookOpen, Users, HeartHandshake, Trophy];

export default async function HomePage() {
  const notices = (await getNotices()).slice(0, 3);
  const gallery = (await getGalleryItems()).slice(0, 4);

  return (
    <>
      <HeroSlider />

      {/* Welcome / intro */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Welcome"
              title={`Welcome to ${siteConfig.name}`}
            />
            <p className="text-gray-600">
              We are a English-medium school in {siteConfig.contact.addressLine},
              dedicated to providing quality education from{" "}
              {siteConfig.classesRange}. Our mission is to nurture confident,
              responsible, and knowledgeable students through a balance of strong
              academics, good values, and co-curricular activities.
            </p>
            <p className="mt-4 text-gray-600">
              {/* TODO: replace with a real paragraph about your school's history and values. */}
              With caring teachers and a safe learning environment, we help every
              child grow to their full potential.
            </p>
            <Link href="/about" className="btn-secondary mt-6">
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-50">
            <Image
              src="/images/placeholder.svg"
              alt="Students at Iqra Desire English School"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* TODO: replace with real numbers */}
          <StatCard value="Nur–10" label="Classes Offered" />
          <StatCard value="500+" label="Happy Students" />
          <StatCard value="25+" label="Dedicated Teachers" />
          <StatCard value="100%" label="Caring Support" />
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Makes Us Special"
          subtitle="A learning experience that goes beyond textbooks."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <FeatureCard
                key={h.title}
                icon={<Icon className="h-6 w-6" />}
                title={h.title}
                description={h.description}
              />
            );
          })}
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
          {notices.map((n) => (
            <NoticeCard key={n.id} notice={n} />
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-xl bg-brand-50"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-brand-700 text-white">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Give Your Child the Best Start
          </h2>
          <p className="max-w-xl text-brand-100">
            Admissions are open for {siteConfig.classesRange}. Enquire today and
            take the first step toward a bright future.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Apply / Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
