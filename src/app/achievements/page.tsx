import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Medal, Award, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getAchievements } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Achievements & Toppers",
  description: `Celebrating the achievements, toppers, and award winners of ${siteConfig.name}.`,
};

// Re-fetch CMS achievements at most once per 60s (ISR).
export const revalidate = 60;

export default async function AchievementsPage() {
  const achievements = await getAchievements();

  return (
    <>
      {/* Page header */}
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <Breadcrumbs items={[{ name: "Achievements" }]} />
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Achievements &amp; Toppers
          </h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            Celebrating the hard work, talent, and success of our students at{" "}
            {siteConfig.shortName}.
          </p>
        </div>
      </div>

      {/* Intro highlights strip */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-page flex flex-wrap items-center justify-center gap-6 py-5 text-sm sm:gap-10">
          <span className="flex items-center gap-2 font-medium text-brand-700">
            <Trophy className="h-4 w-4 text-accent-500" />
            Board Toppers
          </span>
          <span className="flex items-center gap-2 font-medium text-brand-700">
            <Medal className="h-4 w-4 text-accent-500" />
            Sports &amp; Medals
          </span>
          <span className="flex items-center gap-2 font-medium text-brand-700">
            <Award className="h-4 w-4 text-accent-500" />
            Awards &amp; Recognition
          </span>
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Proud Moments"
          title="Our Shining Stars"
          subtitle="We take immense pride in the achievements of our students — in academics, sports, and beyond."
          centered
        />

        {achievements.length === 0 ? (
          <p className="text-center text-gray-600">
            Achievements will be shared here soon. Please check back later.
          </p>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a) => (
              <article
                key={a.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Photo */}
                <div className="relative aspect-[4/3] bg-brand-50">
                  {a.photo ? (
                    <Image
                      src={a.photo}
                      alt={a.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-brand-200">
                      <Trophy className="h-16 w-16" />
                    </div>
                  )}
                  {a.year && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white shadow">
                      {a.year}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 shrink-0 text-accent-500" />
                    <h3 className="text-lg font-bold text-brand-800">{a.name}</h3>
                  </div>
                  {a.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {a.detail}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* CTA — encourage admissions */}
      <section className="bg-brand-800">
        <div className="container-page py-12 sm:py-14">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Be part of our success story
              </h2>
              <p className="mt-2 max-w-xl text-brand-100">
                Join {siteConfig.shortName} and give your child the guidance,
                encouragement, and opportunities to shine.
              </p>
            </div>
            <Link
              href="/admissions"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-brand-800"
            >
              Enquire Now <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
