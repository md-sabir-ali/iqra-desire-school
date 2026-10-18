import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/** A padded page section with centered container. */
export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Use light text colors for placement on a dark (navy) background. */
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-wide ${
            dark ? "text-accent-400" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`section-title ${dark ? "text-white" : ""}`}>{title}</h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-2xl ${dark ? "text-brand-100" : "text-gray-600"} ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
