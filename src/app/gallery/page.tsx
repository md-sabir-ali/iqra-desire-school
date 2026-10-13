import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getGalleryItems } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photo and video gallery of ${siteConfig.name} — events, activities, and campus life.`,
};

// Re-fetch CMS photos at most once per 60s (ISR).
export const revalidate = 60;

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <>
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Gallery</h1>
          <p className="mt-2 max-w-2xl text-brand-100">
            A glimpse of life, events, and activities at {siteConfig.shortName}.
          </p>
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Moments"
          title="Photos & Videos"
          subtitle="Click any photo to view it full-screen. More photos are available on our Facebook page."
        />

        <GalleryGrid items={items} />

        {siteConfig.social.facebook && (
          <div className="mt-10 text-center">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              See more on Facebook
            </a>
          </div>
        )}
      </Section>
    </>
  );
}
