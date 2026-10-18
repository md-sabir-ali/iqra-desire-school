import {
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
  ShieldCheck,
  GraduationCap,
  Monitor,
  Library,
  Trees,
  MonitorPlay,
  Bus,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps icon names stored in data files (src/data/academics.ts) to the actual
 * lucide-react icon components used by the home-page feature grids.
 */
export const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
  ShieldCheck,
  GraduationCap,
  Monitor,
  Library,
  Trees,
  MonitorPlay,
  Bus,
  FlaskConical,
};

/** Fallback icon when a data entry references an unknown icon name. */
export const fallbackIcon = BookOpen;
