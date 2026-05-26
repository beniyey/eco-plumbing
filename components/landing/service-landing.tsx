import Image from "next/image";
import TogglesGenerator from "@/components/toggles-generator";
import LandingHero from "./landing-hero";
import CtaGroup from "./cta-group";
import FadeInSection from "./fade-in-section";
import PackageOffers from "./package-offers";
import ProblemCards from "./problem-cards";
import SectionHeading from "./section-heading";
import { IconCheck, IconStar } from "./landing-icons";
import ReviewsSlider from "@/sections/reviews";
import {
  BRAND_NAME,
  PACKAGES_DISCLAIMER,
  PHONE_DISPLAY,
  SERVICE_AREAS,
  SITE,
} from "@/lib/landing/constants";
import type { ServiceLandingConfig } from "@/lib/landing/types";

function InlineCta({ className = "" }: { className?: string }) {
  return <CtaGroup className={`mt-10 ${className}`} />;
}

type Props = {
  config: ServiceLandingConfig;
  cityLabel?: string;
};

export default function ServiceLanding({ config, cityLabel }: Props) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faq.map(({ title, content }) => ({
      "@type": "Question",
      name: title,
      acceptedAnswer: { "@type": "Answer", text: content },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    image: `${SITE}${config.heroImage}`,
    telephone: "+972526736935",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityLabel || "השרון והמרכז",
      addressRegion: "מרכז",
      addressCountry: "IL",
    },
    url: `${SITE}/services/${config.slug}`,
    areaServed: SERVICE_AREAS,
    openingHours: "Mo-Su 00:00-24:00",
    priceRange: "₪₪",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <div className="relative overflow-hidden rtl pb-8 bg-background-primary-light">
        <div className="relative z-10">
          <LandingHero
            image={config.heroImage}
            imageAlt={config.meta.title}
            title={config.hero.title}
            titleHighlight={config.hero.titleHighlight}
            subtitle={config.hero.subtitle}
            cityLabel={cityLabel}
          />

          <section className="px-4 md:px-12 py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto">
              <FadeInSection>
                <SectionHeading subtitle={config.problemsSection.subtitle}>
                  {config.problemsSection.title}
                </SectionHeading>
              </FadeInSection>
              <ProblemCards items={config.problems} />
              <InlineCta />
            </div>
          </section>

          {config.packages && config.packages.length > 0 && (
            <section
              dir="rtl"
              className="px-4 md:px-12 py-14 md:py-20 overflow-hidden text-right"
            >
              <div className="max-w-[1400px] mx-auto">
                <FadeInSection>
                  <SectionHeading
                    subtitle={
                      config.packagesSubtitle || PACKAGES_DISCLAIMER
                    }
                  >
                    חבילות שירות נפוצות
                  </SectionHeading>
                </FadeInSection>
                <PackageOffers packages={config.packages} />
                <FadeInSection>
                  <p className="text-sm text-gray-500 text-center mt-6 max-w-3xl mx-auto leading-relaxed px-4">
                    {PACKAGES_DISCLAIMER}
                  </p>
                  <InlineCta />
                </FadeInSection>
              </div>
            </section>
          )}

          <section
            dir="rtl"
            className="px-4 md:px-12 py-14 md:py-16 bg-white text-right"
          >
            <div className="max-w-3xl mx-auto">
              <FadeInSection>
                <SectionHeading>למה לבחור ב־{BRAND_NAME}?</SectionHeading>
              </FadeInSection>
              <ul className="space-y-3">
                {config.whyUs.map((point, i) => (
                  <FadeInSection key={point} delay={0.3 + i * 0.3}>
                    <li className="flex flex-row items-start gap-3 bg-background-primary-light rounded-xl p-4 border border-transparent hover:border-primary-sea/15 hover:shadow-sm">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-text/20 text-primary-sea mt-0.5">
                        <IconCheck className="w-5 h-5 text-primary-sea" />
                      </span>
                      <span className="flex-1 text-gray-700 font-medium leading-relaxed">
                        {point}
                      </span>
                    </li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
          </section>

          <section className="px-4 md:px-12 py-14 md:py-16" dir="rtl">
            <div className="max-w-3xl mx-auto text-right">
              <FadeInSection>
                <SectionHeading>איך זה עובד?</SectionHeading>
              </FadeInSection>
              <ol className="relative space-y-0">
                <span
                  className="absolute top-8 bottom-8 right-[1.65rem] w-0.5 bg-primary-sea/15 hidden sm:block"
                  aria-hidden
                />
                {config.processSteps.map((step, i) => (
                  <FadeInSection key={step} delay={0.3 + i * 0.3}>
                    <li className="relative flex flex-row gap-4 items-center py-3">
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-sea text-white font-bold text-lg shadow-md">
                        {i + 1}
                      </span>
                      <span className="flex-1 bg-white rounded-xl px-5 py-4 shadow-sm border border-primary-sea/5 text-gray-800 font-medium hover:shadow-md hover:border-primary-sea/15 transition-all">
                        {step}
                      </span>
                    </li>
                  </FadeInSection>
                ))}
              </ol>
              <InlineCta />
            </div>
          </section>

          {(config.gallery?.length || config.videoUrl) && (
            <section className="px-4 md:px-12 py-14 md:py-16 bg-white">
              <div className="max-w-5xl mx-auto">
                <FadeInSection>
                  <SectionHeading subtitle={config.gallerySubtitle}>
                    כך נראית עבודה מקצועית מבפנים
                  </SectionHeading>
                </FadeInSection>

                {config.videoUrl && (
                  <FadeInSection delay={0.3}>
                    <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-10 ring-2 ring-primary-sea/15">
                      <iframe
                        className="w-full h-full"
                        src={config.videoUrl}
                        title="סרטון עבודה מקצועית"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </FadeInSection>
                )}

                {config.gallery && config.gallery.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {config.gallery.map((item, i) => (
                      <FadeInSection key={item.src} delay={0.3 + i * 0.3}>
                        <figure className="relative aspect-square rounded-xl overflow-hidden shadow-md group">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                          <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary-sea to-transparent text-white text-xs md:text-sm text-center py-3 px-2 font-medium">
                            {item.label}
                          </figcaption>
                        </figure>
                      </FadeInSection>
                    ))}
                  </div>
                )}
                <InlineCta />
              </div>
            </section>
          )}

          <section className="px-4 md:px-12 py-14 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInSection>
                <SectionHeading subtitle="שירות באזור השרון והמרכז, כולל:">
                  אזורי שירות
                </SectionHeading>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="bg-white text-primary-sea px-4 py-2 rounded-full text-sm font-medium border border-primary-sea/15 shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </section>

          <section className="px-4 md:px-12 py-14 bg-white">
            <div className="max-w-4xl mx-auto">
              <FadeInSection>
                <ReviewsSlider title="לקוחות ממליצים" />
                <div className="text-center mt-4">
                  <a
                    href="https://www.midrag.co.il/SpCard/Sp/128232?sectorId=4&listId=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-sea font-semibold hover:text-secondary-text transition-colors"
                  >
                    <IconStar className="w-5 h-5 text-secondary-text" />
                    צפו בביקורות נוספות במדרג
                  </a>
                </div>
              </FadeInSection>
            </div>
          </section>

          <section className="px-4 md:px-12 py-10" dir="rtl">
            <TogglesGenerator questions={config.faq} />
            <div className="max-w-3xl mx-auto">
              <InlineCta />
            </div>
          </section>

          <section className="px-4 md:px-16 py-16 md:py-20 bg-gradient-to-br from-primary-sea via-[#0a5561] to-[#084550] text-white text-center">
            <FadeInSection>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {config.finalCta.title}
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
                {config.finalCta.subtitle}
              </p>
              <CtaGroup />
              <p className="mt-6 text-white/60 text-sm">
                זמינים לשיחה ב־{PHONE_DISPLAY}
              </p>
            </FadeInSection>
          </section>
        </div>
      </div>
    </>
  );
}
