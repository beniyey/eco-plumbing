import LandingHero from "@/components/landing/landing-hero";
import FadeInSection from "@/components/landing/fade-in-section";
import SectionHeading from "@/components/landing/section-heading";
import Stats from "@/sections/about/stats";
import OurWork from "@/sections/ourWork";
import ReviewsSlider from "@/sections/reviews";
import ContactSection from "@/sections/contact-section";
import Image from "next/image";
import Link from "next/link";
import { filledButton } from "@/components/buttons";

export const metadata = {
  title: "אודות | אקו אינסטלציה",
  description:
    "אקו אינסטלציה — צוות מומחים באינסטלציה עם ציוד מתקדם, שירות מקצועי וזמינות באזור השרון והמרכז.",
};

export default function About() {
  return (
    <div className="rtl bg-background-primary-light pb-8">
      <LandingHero
        image="/images/plumber-working.jpg"
        imageAlt="אקו אינסטלציה — אודות"
        title="מי אנחנו?"
        titleHighlight="אקו אינסטלציה"
        subtitle="צוות מומחים באינסטלציה עם ניסיון בשטח, ציוד מתקדם וגישה שמחפשת פתרון יסודי — לא רק תיקון זמני."
        showTrustTags={false}
      />

      <section className="bg-white px-4 md:px-12 py-14" dir="rtl">
        <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative w-full lg:w-1/2 aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/sink-repair.webp" alt="עבודת אינסטלציה" fill className="object-cover" />
          </div>
          <div className="lg:w-1/2 text-right space-y-4">
            <SectionHeading subtitle="אנחנו מתמחים בפתיחת סתימות, איתור נזילות, צילום קווי ביוב ותיקוני צנרת.">
              עמידה בזמנים ומקצועיות מעל הכל
            </SectionHeading>
            <p className="text-gray-600 leading-relaxed">
              החזון שלנו הוא להעניק שירות אמין, מהיר ואיכותי — עם דגש על אבחון מדויק, שקיפות במחירים ושביעות רצון הלקוח.
            </p>
            <Link href="/contact" className={filledButton}>
              להזמנת אינסטלטור
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <OurWork />

      <section className="px-4 md:px-12 py-14 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <ReviewsSlider title="לקוחות ממליצים" />
          </FadeInSection>
        </div>
      </section>

      <section className="px-4 md:px-12 max-w-3xl mx-auto pb-10">
        <ContactSection />
      </section>
    </div>
  );
}
