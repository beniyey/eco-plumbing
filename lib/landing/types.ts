import type { problemIconMap } from "@/components/landing/landing-icons";
import type { Package } from "@/components/landing/package-offers";

export type ProblemItem = {
  title: string;
  desc: string;
  icon: keyof typeof problemIconMap;
};

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

export type FaqItem = {
  title: string;
  content: string;
};

export type ServiceLandingConfig = {
  slug: string;
  heroImage: string;
  hero: {
    badge?: string;
    title: string;
    titleHighlight?: string;
    subtitle: string;
  };
  problemsSection: {
    title: string;
    subtitle: string;
  };
  problems: ProblemItem[];
  packages?: Package[];
  packagesSubtitle?: string;
  whyUs: string[];
  processSteps: string[];
  gallery?: GalleryItem[];
  videoUrl?: string;
  gallerySubtitle?: string;
  faq: FaqItem[];
  finalCta: {
    title: string;
    subtitle: string;
  };
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
};
