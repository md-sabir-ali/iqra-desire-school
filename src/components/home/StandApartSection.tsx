import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { standApart } from "@/data/academics";
import { iconMap, fallbackIcon } from "./iconMap";

/** "What Makes Us Stand Apart" — six reasons parents trust the school. */
export function StandApartSection() {
  return (
    <Section className="bg-gray-50">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="What Makes Us Stand Apart"
        subtitle="Six reasons parents trust us — education that builds confident, capable, and caring children, not just good marks."
        centered
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {standApart.map((item, i) => {
          const Icon = iconMap[item.icon] ?? fallbackIcon;
          return (
            <Reveal key={item.title} delay={(i % 3) * 120}>
              <div className="card h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-brand-800">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
