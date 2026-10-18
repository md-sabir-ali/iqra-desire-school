import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/data/academics";

/** Animated stats band shown directly under the hero on the home page. */
export function StatsBand() {
  return (
    <section className="bg-brand-800 py-12 text-white">
      <div className="container-page grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-accent-400 sm:text-4xl">
                {typeof s.value === "number" && !("isYear" in s && s.isYear) ? (
                  <CountUp end={s.value} suffix={"suffix" in s ? s.suffix : ""} />
                ) : (
                  <>
                    {s.value}
                    {"suffix" in s ? s.suffix : ""}
                  </>
                )}
              </div>
              <div className="mt-1 text-sm font-medium text-brand-100">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
