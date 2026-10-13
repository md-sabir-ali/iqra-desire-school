import { Section } from "@/components/Section";

/**
 * Loading skeleton for /achievements — card grid with image placeholders
 * matching the toppers cards. Pure Tailwind (animate-pulse), no JS.
 */
export default function AchievementsLoading() {
  return (
    <>
      {/* Header */}
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <div className="h-9 w-72 max-w-full rounded bg-white/20" />
          <div className="mt-3 h-4 w-80 max-w-full rounded bg-white/10" />
        </div>
      </div>

      {/* Highlights strip */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-page flex animate-pulse flex-wrap items-center justify-center gap-8 py-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-4 w-32 rounded bg-gray-200" />
          ))}
        </div>
      </div>

      <Section>
        {/* Heading */}
        <div className="mb-8 animate-pulse text-center">
          <div className="mx-auto h-3 w-28 rounded bg-gray-200" />
          <div className="mx-auto mt-3 h-7 w-48 rounded bg-gray-200" />
        </div>

        {/* Card grid */}
        <div className="grid animate-pulse gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="aspect-[4/3] bg-gray-200" />
              <div className="p-6">
                <div className="h-5 w-2/3 rounded bg-gray-200" />
                <div className="mt-3 space-y-2">
                  <div className="h-3 w-full rounded bg-gray-100" />
                  <div className="h-3 w-5/6 rounded bg-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
