import Image from "next/image";
import { Reveal } from "@/components/Reveal";

interface PhotoBandProps {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  text?: string;
  /** Where to align the text block. */
  align?: "left" | "center";
}

/**
 * A full-width immersive photo section with a dark overlay and text on top,
 * like the "A Campus That Inspires Learning" band on premium school sites.
 * The background image has a subtle zoom-on-reveal for a lively feel.
 */
export function PhotoBand({
  src,
  alt,
  eyebrow,
  title,
  text,
  align = "left",
}: PhotoBandProps) {
  return (
    <section className="relative h-[60vh] min-h-[380px] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/55 to-brand-900/25" />
      <div className="container-page relative z-10 flex h-full items-end pb-12">
        <Reveal from="bottom">
          <div className={`max-w-2xl text-white ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-400">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-bold drop-shadow sm:text-4xl">{title}</h2>
            {text && <p className="mt-3 text-brand-100">{text}</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
