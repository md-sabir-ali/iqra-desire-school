import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { facilities } from "@/data/academics";
import { iconMap, fallbackIcon } from "./iconMap";

/** "Our Facilities" — icon-card grid of the school's infrastructure. */
export function FacilitiesSection() {
  return (
    <Section className="bg-cream-50">
      <SectionHeading
        eyebrow="Infrastructure"
        title="Our Facilities"
        subtitle="Thoughtfully provided facilities that support safe, engaging, and well-rounded learning."
        centered
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((item, i) => {
          const Icon = iconMap[item.icon] ?? fallbackIcon;
          return (
            <Reveal key={item.title} delay={(i % 3) * 120}>
              <div className="card group h-full border-t-4 border-t-accent-400 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition group-hover:bg-accent-500 group-hover:text-white">
                  <Icon className="h-7 w-7" />
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
