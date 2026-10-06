import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { NoticeCard } from "@/components/NoticeCard";
import { getNotices } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Notices",
  description: `Latest notices, news, and announcements from ${siteConfig.name}.`,
};

export default async function NoticesPage() {
  const notices = await getNotices();

  return (
    <>
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Notices & News</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            Stay updated with the latest announcements from the school.
          </p>
        </div>
      </div>

      <Section>
        <SectionHeading eyebrow="Announcements" title="All Notices" />
        {notices.length === 0 ? (
          <p className="text-gray-600">No notices at the moment. Please check back later.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notices.map((n) => (
              <NoticeCard key={n.id} notice={n} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
