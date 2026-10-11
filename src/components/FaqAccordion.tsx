import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQ ACCORDION
 * ---------------------------------------------------------------------------
 * Built on native <details>/<summary> — fully keyboard-accessible and works
 * even without JavaScript. Styled to match the brand (navy + gold accent).
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-gray-100 bg-white p-0 shadow-sm transition hover:shadow-md open:border-accent-400/60 open:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-semibold text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 transition group-open:rotate-180 group-open:bg-accent-500 group-open:text-white">
              <ChevronDown className="h-5 w-5" />
            </span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
