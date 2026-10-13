import { Section } from "@/components/Section";

/**
 * Loading skeleton for /gallery — a grid of square placeholders matching the
 * photo grid. Pure Tailwind (animate-pulse), no JS.
 */
export default function GalleryLoading() {
  return (
    <>
      {/* Header */}
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <div className="h-9 w-44 rounded bg-white/20" />
          <div className="mt-3 h-4 w-80 max-w-full rounded bg-white/10" />
        </div>
      </div>

      <Section>
        {/* Heading */}
        <div className="mb-8 animate-pulse">
          <div className="h-3 w-24 rounded bg-gray-200" />
          <div className="mt-3 h-7 w-44 rounded bg-gray-200" />
        </div>

        {/* Square photo grid */}
        <div className="grid animate-pulse grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gray-200" />
          ))}
        </div>
      </Section>
    </>
  );
}
