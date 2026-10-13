import { Section } from "@/components/Section";

/**
 * Loading skeleton for /notices. Shown instantly while the CMS data is being
 * fetched, so the page never flashes blank. Pure Tailwind (animate-pulse), no JS.
 */
export default function NoticesLoading() {
  return (
    <>
      {/* Header */}
      <div className="bg-brand-700 text-white">
        <div className="container-page py-14">
          <div className="h-9 w-56 rounded bg-white/20" />
          <div className="mt-3 h-4 w-80 max-w-full rounded bg-white/10" />
        </div>
      </div>

      <Section>
        {/* Heading */}
        <div className="mb-8 animate-pulse">
          <div className="h-3 w-28 rounded bg-gray-200" />
          <div className="mt-3 h-7 w-40 rounded bg-gray-200" />
        </div>

        {/* Filter chips */}
        <div className="mb-7 flex animate-pulse flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-9 w-20 rounded-full bg-gray-200" />
          ))}
        </div>

        {/* Card grid */}
        <div className="grid animate-pulse gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="h-5 w-20 rounded-full bg-gray-200" />
              <div className="mt-3 h-5 w-3/4 rounded bg-gray-200" />
              <div className="mt-2 h-3 w-24 rounded bg-gray-100" />
              <div className="mt-3 space-y-2">
                <div className="h-3 w-full rounded bg-gray-100" />
                <div className="h-3 w-5/6 rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
