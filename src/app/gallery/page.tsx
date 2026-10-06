import type { Metadata } from "next";
import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { getGalleryItems } from "@/lib/api";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photo and video gallery of ${siteConfig.name} — events, activities, and campus life.`,
};

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
          subtitle="More photos are available on our Facebook page."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <figure
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-brand-50"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {item.type === "video" && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <PlayCircle className="h-10 w-10 text-white" />
                </span>
              )}
              {item.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-xs text-white opacity-0 transition group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

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
