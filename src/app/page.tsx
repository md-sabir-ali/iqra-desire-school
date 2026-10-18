import { HeroSlider } from "@/components/HeroSlider";
import { Section, SectionHeading } from "@/components/Section";
import { PhotoBand } from "@/components/PhotoBand";
import { PillarsCarousel } from "@/components/PillarsCarousel";
import { Reveal } from "@/components/Reveal";
import { StatsBand } from "@/components/home/StatsBand";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { StandApartSection } from "@/components/home/StandApartSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { LearningPathwaySection } from "@/components/home/LearningPathwaySection";
import { AchieversSection } from "@/components/home/AchieversSection";
import { LatestNoticesSection } from "@/components/home/LatestNoticesSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { CtaSection } from "@/components/home/CtaSection";
import { getNotices, getGalleryItems, getAchievements } from "@/lib/api";

// Re-fetch CMS content (notices/gallery) at most once per 60s (ISR).
export const revalidate = 60;

export default async function HomePage() {
  const notices = (await getNotices()).slice(0, 3);
  const gallery = (await getGalleryItems()).slice(0, 6);
  const achievers = (await getAchievements()).slice(0, 3);

  return (
    <>
      <HeroSlider />

      <StatsBand />

      <WelcomeSection />

      {/* Core Pillars carousel */}
      <Section>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Core Pillars"
          subtitle="The values and strengths that shape everything we do."
          centered
        />
        <Reveal>
          <PillarsCarousel />
        </Reveal>
      </Section>

      <StandApartSection />

      <FacilitiesSection />

      <LearningPathwaySection />

      {/* Immersive campus photo band */}
      <PhotoBand
        src="/images/galary/sport1.jpg"
        alt="Students at Iqra Desire English School"
        eyebrow="Life at School"
        title="A Place Where Every Child Grows"
        text="Beyond the classroom — sports, prayer, celebrations, and friendships that build confidence and character."
      />

      <AchieversSection achievers={achievers} />

      <LatestNoticesSection notices={notices} />

      <GalleryPreviewSection gallery={gallery} />

      <CtaSection />
    </>
  );
}
