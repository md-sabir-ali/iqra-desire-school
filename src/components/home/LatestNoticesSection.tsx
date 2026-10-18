import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { NoticeCard } from "@/components/NoticeCard";
import { Reveal } from "@/components/Reveal";
import type { Notice } from "@/lib/types";

/** "Latest Notices" — top 3 notices (CMS-driven) with links to the full list. */
export function LatestNoticesSection({ notices }: { notices: Notice[] }) {
  return (
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
  );
}
