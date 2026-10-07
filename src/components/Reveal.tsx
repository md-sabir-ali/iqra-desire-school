"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before the animation starts (for staggering). */
  delay?: number;
  /** Direction the element slides in from. */
  from?: "bottom" | "left" | "right";
  className?: string;
}

/**
 * Wrap any section/card in <Reveal> and it will smoothly fade + slide in
 * the first time it scrolls into view. Pure CSS + IntersectionObserver,
 * no external library — keeps the bundle tiny and free.
 */
export function Reveal({ children, delay = 0, from = "bottom", className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    from === "left"
      ? "translate-x-[-40px]"
      : from === "right"
        ? "translate-x-[40px]"
        : "translate-y-[40px]";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
