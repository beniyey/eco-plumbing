import LandingHero from "@/components/landing/landing-hero";
import ContactSection from "@/sections/contact-section";
import FadeInSection from "@/components/landing/fade-in-section";

export const metadata = {
  title: "צור קשר | אקו אינסטלציה",
  description: "צרו קשר עם אקו אינסטלציה — שירותי אינסטלציה מקצועיים באזור השרון והמרכז.",
};

export default function ContactPage() {
  return (
    <div className="rtl bg-background-primary-light pb-8">
      <LandingHero
        image="/images/modern-sink.webp"
        imageAlt="צור קשר — אקו אינסטלציה"
        title="רוצים לדבר איתנו?"
        titleHighlight="אנחנו כאן"
        subtitle="השאירו פרטים או התקשרו ישירות — נחזור אליכם בהקדם עם הצעה וייעוץ מקצועי."
        showTrustTags={false}
      />
      <section className="px-4 md:px-12 py-10 max-w-3xl mx-auto">
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </section>
    </div>
  );
}
