"use client";

import LandingHero from "./landing-hero";
import FadeInSection from "./fade-in-section";
import SectionHeading from "./section-heading";
import CtaGroup from "./cta-group";
import ReviewsSlider from "@/sections/reviews";
import { IconStar } from "./landing-icons";
import Image from "next/image";
import Link from "next/link";
import services from "@/data/services.json";
import { underlineButton } from "@/components/buttons";

export default function HomePage() {
  return (
    <div className="rtl bg-background-primary-light">
      <LandingHero
        image="/images/plumber.webp"
        imageAlt="אינסטלטור מקצועי — אקו אינסטלציה"
        title="שירותי אינסטלציה מתקדמים"
        titleHighlight="באזור השרון והמרכז"
        subtitle="פתיחת סתימות, איתור נזילות, צילום קווי ביוב ותיקוני צנרת — עם ציוד מתקדם, מחירים שקופים ושירות מקצועי."
        showTrustTags
      />

      <section className="bg-white px-4 md:px-12 py-14 md:py-20" dir="rtl">
        <div className="container max-w-6xl mx-auto">
          <FadeInSection>
            <SectionHeading subtitle="פתיחת סתימות, איתור נזילות, תיקוני צנרת ופתרונות ללא הרס — הכל במקום אחד.">
              השירותים שלנו
            </SectionHeading>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeInSection key={s.linkTo} delay={0.3 + i * 0.15}>
                <article className="flex flex-col h-full bg-background-primary-light rounded-2xl overflow-hidden border border-primary-sea/10 shadow-sm hover:shadow-lg hover:border-primary-sea/20 transition-all text-right">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={s.imageSrc}
                      alt={s.serviceName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-grow">
                    <p className="text-sm text-primary-sea font-medium">{s.category}</p>
                    <h3 className="text-xl font-bold text-primary-text">{s.serviceName}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">{s.overview}</p>
                    <Link
                      href={s.linkTo}
                      className={underlineButton + " text-secondary-text border-secondary-text mt-2 self-start"}
                    >
                      לעמוד השירות
                    </Link>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 py-14 bg-white" dir="rtl">
        <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <FadeInSection className="lg:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/sink-repair.webp" alt="תיקון כיור" fill className="object-cover" />
            </div>
          </FadeInSection>
          <FadeInSection className="lg:w-1/2 text-right" delay={0.3}>
            <p className="text-primary-sea font-semibold mb-2">על החברה</p>
            <h2 className="text-3xl font-bold text-primary-text mb-4">מקצועיות, אמינות ושקיפות</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              אנחנו צוות מומחים באינסטלציה עם ניסיון בשטח, ציוד מתקדם וגישה שמחפשת את מקור הבעיה — לא רק פתרון זמני.
            </p>
            <Link href="/about" className={underlineButton + " text-primary-sea border-primary-sea"}>
              קראו עוד עלינו
            </Link>
          </FadeInSection>
        </div>
      </section>

      <section className="px-4 md:px-12 py-14" dir="rtl">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <ReviewsSlider title="לקוחות ממליצים" />
            <div className="text-center mt-4">
              <a
                href="https://www.midrag.co.il/SpCard/Sp/128232?sectorId=4&listId=2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-sea font-semibold"
              >
                <IconStar className="w-5 h-5 text-secondary-text" />
                ביקורות במדרג
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="px-4 md:px-16 py-16 bg-gradient-to-br from-primary-sea via-[#0a5561] to-[#084550] text-white text-center">
        <FadeInSection>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">צריכים אינסטלטור עכשיו?</h2>
          <p className="text-lg max-w-xl mx-auto mb-8 text-white/90">
            התקשרו או שלחו WhatsApp — נבין את התקלה ונגיע עם הפתרון המתאים.
          </p>
          <CtaGroup />
        </FadeInSection>
      </section>
    </div>
  );
}
