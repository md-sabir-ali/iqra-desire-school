"use client";

import { useMemo, useState } from "react";
import { Pin } from "lucide-react";
import { NoticeCard } from "@/components/NoticeCard";
import type { Notice } from "@/lib/types";

const ALL = "All" as const;

const categoryPill: Record<Notice["category"], string> = {
  Admission: "bg-brand-100 text-brand-700",
  Event: "bg-accent-400/20 text-accent-600",
  Holiday: "bg-blue-100 text-blue-700",
  Exam: "bg-rose-100 text-rose-700",
  General: "bg-gray-100 text-gray-700",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Client-side Notices view: a pinned-notice highlight banner on top, plus
 * category filter chips. Notices are passed in already sorted (pinned first,
 * then newest) by getNotices() on the server.
 */
export function NoticesClient({ notices }: { notices: Notice[] }) {
  const [active, setActive] = useState<string>(ALL);

  // Categories actually present in the data (so we never show empty filters).
  const categories = useMemo(() => {
    const present = Array.from(new Set(notices.map((n) => n.category)));
    const order: Notice["category"][] = [
      "Admission",
      "Event",
      "Exam",
      "Holiday",
      "General",
    ];
    return [ALL, ...order.filter((c) => present.includes(c))];
  }, [notices]);

  const pinned = useMemo(() => notices.filter((n) => n.pinned), [notices]);

  const filtered = useMemo(
    () => (active === ALL ? notices : notices.filter((n) => n.category === active)),
    [notices, active]
  );

  return (
    <>
      {/* Pinned highlight banner (only when a pinned notice exists) */}
      {pinned.length > 0 && (
        <div className="mb-8 space-y-4">
          {pinned.map((n) => (
            <div
              key={n.id}
              className="relative overflow-hidden rounded-2xl border-l-4 border-accent-500 bg-gradient-to-r from-accent-50 to-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white">
                  <Pin className="h-3.5 w-3.5" /> Pinned
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryPill[n.category]}`}
                >
                  {n.category}
                </span>
                <time className="text-xs text-gray-500">{formatDate(n.date)}</time>
              </div>
              <h3 className="mt-3 text-xl font-bold text-brand-800">{n.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{n.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* Category filter chips */}
      <div className="mb-7 flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 ${
                isActive
                  ? "bg-brand-700 text-white shadow-sm"
                  : "border border-gray-200 bg-white text-brand-700 hover:border-accent-400 hover:bg-brand-50"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-gray-600">No notices in this category right now.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((n) => (
            <NoticeCard key={n.id} notice={n} />
          ))}
        </div>
      )}
    </>
  );
}
