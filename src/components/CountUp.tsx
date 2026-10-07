"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** The number to count up to. */
  end: number;
  /** Text shown after the number, e.g. "+" or "%". */
  suffix?: string;
  /** Text shown before the number. */
  prefix?: string;
  /** Animation duration in ms. */
  duration?: number;
}

/**
 * Animated number that counts up from 0 to `end` the first time it
 * scrolls into view. Gives the lively "stats come alive" feel.
 */
export function CountUp({ end, suffix = "", prefix = "", duration = 1600 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutCubic for a natural slow-down
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
