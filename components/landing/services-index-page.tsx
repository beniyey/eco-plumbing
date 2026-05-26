import Image from "next/image";
import Link from "next/link";
import LandingHero from "./landing-hero";
import SectionHeading from "./section-heading";
import services from "@/data/services.json";
import { underlineButton } from "@/components/buttons";
import ContactSection from "@/sections/contact-section";

export default function ServicesIndexPage() {
  return (
    <div className="rtl bg-background-primary-light pb-8">
      <LandingHero
        image="/images/pipes-arranged.jpg"
        imageAlt="שירותי אינסטלציה"
        title="כל שירותי האינסטלציה"
        titleHighlight="במקום אחד"
        subtitle="פתיחת סתימות, איתור נזילות, תיקוני צנרת, פתרונות ללא הרס ואינסטלציה כללית — עם ציוד מתקדם ושירות מקצועי."
        showTrustTags={false}
      />

      <section className="px-4 md:px-12 py-14 md:py-16 bg-white" dir="rtl">
        <div className="container max-w-6xl mx-auto">
          <SectionHeading subtitle="בחרו שירות ולחצו לפרטים מלאים, מחירים והמלצות.">
            השירותים שלנו
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.linkTo}
                className="flex flex-col rounded-2xl overflow-hidden border border-primary-sea/10 bg-white shadow-sm hover:shadow-lg transition-shadow text-right"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={s.imageSrc} alt={s.serviceName} fill className="object-cover" />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-grow">
                  <p className="text-sm text-primary-sea font-medium">{s.category}</p>
                  <h2 className="text-xl font-bold">{s.serviceName}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{s.overview}</p>
                  <Link
                    href={s.linkTo}
                    className={underlineButton + " text-secondary-text border-secondary-text mt-2"}
                  >
                    לעמוד השירות
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 md:px-12 max-w-3xl mx-auto">
        <ContactSection />
      </div>
    </div>
  );
}
