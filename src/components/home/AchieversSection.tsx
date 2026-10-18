import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import type { Achievement } from "@/lib/types";

/** "Celebrating Our Achievers" — top 3 achievements/toppers (CMS-driven). */
export function AchieversSection({ achievers }: { achievers: Achievement[] }) {
  return (
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
                  <span className="mb-1 inline-block rounded-full bg-accent-500 px-2.5 py-0.5 text-xs font-semibold text-brand-900">
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
  );
}
