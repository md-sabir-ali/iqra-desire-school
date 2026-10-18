import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import type { GalleryItem } from "@/lib/types";

/** "Gallery" preview — up to 6 photos (CMS-driven) with a link to the full gallery. */
export function GalleryPreviewSection({ gallery }: { gallery: GalleryItem[] }) {
  return (
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
  );
}
