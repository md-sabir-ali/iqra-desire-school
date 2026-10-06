import { Pin } from "lucide-react";
import type { Notice } from "@/lib/types";

const categoryColors: Record<Notice["category"], string> = {
  Admission: "bg-brand-100 text-brand-700",
  Event: "bg-accent-400/20 text-accent-600",
  Holiday: "bg-blue-100 text-blue-700",
  Exam: "bg-rose-100 text-rose-700",
  General: "bg-gray-100 text-gray-700",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <article className="card">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[notice.category]}`}
        >
          {notice.category}
        </span>
        {notice.pinned && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600">
            <Pin className="h-3.5 w-3.5" /> Pinned
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-brand-800">{notice.title}</h3>
      <time className="mt-1 block text-xs text-gray-500">{formatDate(notice.date)}</time>
      <p className="mt-2 text-sm text-gray-600">{notice.body}</p>
    </article>
  );
}
