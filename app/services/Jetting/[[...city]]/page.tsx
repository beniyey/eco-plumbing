import TogglesGenerator from "@/components/toggles-generator";
import JettingHero from "@/components/landing/jetting-hero";
import CtaGroup from "@/components/landing/cta-group";
import FadeInSection from "@/components/landing/fade-in-section";
import PackageOffers from "@/components/landing/package-offers";
import ProblemCards from "@/components/landing/problem-cards";
import SectionHeading from "@/components/landing/section-heading";
import { IconCheck, IconStar } from "@/components/landing/landing-icons";
import ReviewsSlider from "@/sections/reviews";
import Image from "next/image";

const PHONE_DISPLAY = "052-6736935";
const SITE = "https://www.eco-plumbers.com";
const HERO_IMAGE = "/images/jetter-service.png";

const problems = [
  {
    title: "סתימות חוזרות",
    icon: "refresh" as const,
    desc: "פתיחה זמנית לא פותרת — לרוב יש גורם עמוק בקו שחוזר על עצמו.",
  },
  {
    title: "שורשים בצנרת",
    icon: "leaf" as const,
    desc: "חדירת שורשים שסותמת את הקו ודורשת טיפול ממוקד, לא רק שטיפה.",
  },
  {
    title: "ריח ביוב",
    icon: "wind" as const,
    desc: "ריח מתמשך לרוב מצביע על הצטברות, שבר או בעיה בקו הביוב.",
  },
  {
    title: "מים שעולים במקלחת / אסלה",
    icon: "droplets" as const,
    desc: "הצפה או גובה מים — סימן לסתימה קרובה או חסימה בקו.",
  },
  {
    title: "זרימה איטית",
    icon: "slow" as const,
    desc: "ניקוז חלש לפני סתימה מלאה — כדאי לטפל לפני שנסגר הקו.",
  },
  {
    title: "חשד לשבר או שיפוע לא תקין",
    icon: "alert" as const,
    desc: "צילום קו עוזר לאשר שבר, שיפוע או נזק לפני תיקון יקר.",
  },
];

const packages = [
  {
    name: "פתיחת סתימה בסיסית",
    price: "החל מ־400–650 ₪ + מע״מ",
    desc: "מתאים לסתימות בכיור, מקלחת או אסלה בגישה נוחה.",
    recommended: false,
  },
  {
    name: "פתיחת סתימה בקו ביוב",
    price: "החל מ־600 ₪ + מע״מ",
    desc: "מתאים לקו חיצוני או קו ראשי, בהתאם לגישה ולמורכבות.",
    recommended: false,
  },
  {
    name: "פתיחת סתימה + צילום קו",
    price: "החל מ־1,200 ₪ + מע״מ",
    desc: "מתאים במיוחד לסתימות חוזרות, חשד לשורשים, שבר או שיפוע לא תקין.",
    recommended: true,
  },
  {
    name: "טיפול שורשים + שטיפה + צילום",
    price: "החל מ־1,200–2,500 ₪ + מע״מ",
    desc: "מתאים לקווים עם שורשים, הצפות חוזרות או צורך באבחון מקצועי.",
    recommended: false,
  },
  {
    name: "צילום קו ביוב בלבד",
    price: "החל מ־900–1,500 ₪ + מע״מ",
    desc: "כולל בדיקת מצב הצנרת והמלצה מקצועית להמשך טיפול.",
    recommended: false,
  },
];

const whyUs = [
  "עובדים עם מצלמות ביוב וציוד מתקדם",
  "לא רק פותחים סתימה — מאתרים את הגורם",
  "ניסיון בטיפול בשורשים וסתימות מורכבות",
  "אפשרות לצילום לפני/אחרי",
  "פתרונות ללא הרס",
  "שירות מקצועי, מסודר ושקוף",
];

const processSteps = [
  "שיחה קצרה להבנת התקלה",
  "הגעה ובדיקת גישה",
  "פתיחת הסתימה או צילום הקו",
  "זיהוי מקור הבעיה",
  "הצעת פתרון ברור להמשך",
  "במידת הצורך — צילום לפני/אחרי ותיעוד",
];

const galleryItems = [
  {
    src: "/images/jetter-service.png",
    alt: "ציוד שטיפה ופתיחת סתימות מקצועי",
    label: "ציוד עבודה מתקדם",
  },
  {
    src: "/images/drain-cleaning-service.png",
    alt: "פתיחת סתימה מקצועית",
    label: "לפני ואחרי פתיחת סתימה",
  },
  {
    src: "/images/plumber-working.jpg",
    alt: "עבודת אינסטלציה מקצועית",
    label: "צוות מקצועי בשטח",
  },
  {
    src: "/images/quality-control.jpg",
    alt: "בדיקת קווי ביוב",
    label: "צילום ואבחון קווי ביוב",
  },
];

const serviceAreas = [
  "הרצליה",
  "רעננה",
  "כפר סבא",
  "הוד השרון",
  "נתניה",
  "קדימה",
  "תל אביב והסביבה",
];

const faqItems = [
  {
    title: "כמה עולה פתיחת סתימה?",
    content:
      "המחיר מתחיל בדרך כלל מ־400–650 ₪ + מע״מ לסתימות פשוטות, ועולה בהתאם למורכבות, גישה, שעת הקריאה והציוד הנדרש.",
  },
  {
    title: "מתי צריך צילום קו ביוב?",
    content:
      "כאשר יש סתימות חוזרות, ריח ביוב, חשד לשורשים, שבר, שיפוע לא תקין או כאשר רוצים להבין את מצב הקו לפני תיקון.",
  },
  {
    title: "האם אתם מבצעים ביובית?",
    content:
      "אנחנו מבצעים פתיחת סתימות, שטיפות קווים, צילום קווי ביוב וטיפול בשורשים עם ציוד מקצועי. במקרים שמצריכים ביובית גדולה או שאיבה כבדה, נעדכן מראש.",
  },
  {
    title: "האם ניתן לפתור בלי לשבור?",
    content:
      "במקרים רבים כן. בעזרת צילום קו ואבחון מקצועי ניתן להבין האם קיימת אפשרות לפתרון ללא הרס, כמו ניקוי, שטיפה, טיפול שורשים או תיקון נקודתי.",
  },
  {
    title: "באילו אזורים אתם עובדים?",
    content:
      "אנחנו נותנים שירות באזור השרון והמרכז, כולל הרצליה, רעננה, כפר סבא, הוד השרון, נתניה, קדימה, תל אביב והסביבה.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ title, content }) => ({
    "@type": "Question",
    name: title,
    acceptedAnswer: { "@type": "Answer", text: content },
  })),
};

const localBusinessSchema = (cityLabel?: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "אקו אינסטלציה",
  image: `${SITE}${HERO_IMAGE}`,
  telephone: "+972526736935",
  address: {
    "@type": "PostalAddress",
    addressLocality: cityLabel || "השרון והמרכז",
    addressRegion: "מרכז",
    addressCountry: "IL",
  },
  url: `${SITE}/services/jetting`,
  areaServed: serviceAreas,
  openingHours: "Mo-Su 00:00-24:00",
  priceRange: "₪₪",
});

function InlineCta({ className = "" }: { className?: string }) {
  return <CtaGroup className={`mt-10 ${className}`} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city?: string[] }>;
}) {
  const { city: cityParam } = await params;
  const city = cityParam
    ? decodeURIComponent(cityParam[0])
    : "השרון והמרכז";

  const title = `פתיחת סתימות מקצועית ${city} | צילום קווי ביוב | אקו אינסטלציה`;
  const description = `פתיחת סתימות, צילום קווי ביוב, טיפול בשורשים ופתרונות ללא הרס ב${city}. ציוד מתקדם, זמינות מהירה ומחירים שקופים. התקשרו ${PHONE_DISPLAY}.`;

  const image = `${SITE}${HERO_IMAGE}`;
  const path = cityParam
    ? `/services/jetting/${cityParam[0]}`
    : "/services/jetting";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE}${path}`,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: { canonical: `${SITE}${path}` },
    metadataBase: new URL(SITE),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city?: string[] }>;
}) {
  const { city: cityParam } = await params;
  const cityLabel = cityParam ? decodeURIComponent(cityParam[0]) : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(cityLabel)),
        }}
      />

      <div className="relative overflow-hidden rtl pb-8 bg-background-primary-light">
        <div className="relative z-10">
          <JettingHero cityLabel={cityLabel} />

          {/* בעיות נפוצות */}
          <section className="px-4 md:px-12 py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto">
              <FadeInSection>
                <SectionHeading subtitle="במקרים רבים סתימה היא רק סימפטום. שורשים, שבר בצנרת, שיפוע לא תקין או הצטברות שומנים יכולים לגרום לסתימות חוזרות. אנחנו מאתרים את מקור הבעיה בעזרת ציוד צילום מתקדם ומציעים פתרון מקצועי במקום.">
                  סתימה חוזרת? ביוב שעולה? ריח רע מהצנרת?
                </SectionHeading>
              </FadeInSection>
              <ProblemCards items={problems} />
              <InlineCta />
            </div>
          </section>

          {/* חבילות שירות */}
          <section
            dir="rtl"
            className="px-4 md:px-12 py-14 md:py-20 overflow-hidden text-right"
          >
            <div className="max-w-[1400px] mx-auto">
              <FadeInSection>
                <SectionHeading subtitle="מחירים שקופים לפי סוג התקלה, מורכבות העבודה והציוד הנדרש.">
                  חבילות שירות נפוצות
                </SectionHeading>
              </FadeInSection>
              <PackageOffers packages={packages} />
              <FadeInSection>
                <p className="text-sm text-gray-500 text-center mt-6 max-w-3xl mx-auto leading-relaxed px-4">
                  המחירים משתנים לפי גישה, אורך הקו, חומרת הסתימה, שעת הקריאה
                  והאם נדרש פירוק כלים סניטריים או ציוד נוסף. מחיר סופי יימסר
                  לאחר שיחה קצרה או בדיקה במקום.
                </p>
                <InlineCta />
              </FadeInSection>
            </div>
          </section>

          {/* למה לבחור בנו */}
          <section
            dir="rtl"
            className="px-4 md:px-12 py-14 md:py-16 bg-white text-right"
          >
            <div className="max-w-3xl mx-auto">
              <FadeInSection>
                <SectionHeading>למה לבחור ב־אקו אינסטלציה?</SectionHeading>
              </FadeInSection>
              <ul className="space-y-3">
                {whyUs.map((point, i) => (
                  <FadeInSection key={point} delay={0.3 + i * 0.3}>
                    <li className="flex flex-row items-start gap-3 bg-background-primary-light rounded-xl p-4 border border-transparent hover:border-primary-sea/15 hover:shadow-sm">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-text/20 text-primary-sea mt-0.5">
                        <IconCheck className="w-5 h-5 text-primary-sea" />
                      </span>
                      <span className="flex-1 text-gray-700 font-medium leading-relaxed text-right">
                        {point}
                      </span>
                    </li>
                  </FadeInSection>
                ))}
              </ul>
            </div>
          </section>

          {/* תהליך */}
          <section className="px-4 md:px-12 py-14 md:py-16">
            <div className="max-w-3xl mx-auto">
              <FadeInSection>
                <SectionHeading>איך זה עובד?</SectionHeading>
              </FadeInSection>
              <ol className="relative space-y-0">
                <span className="absolute top-8 bottom-8 right-[1.65rem] w-0.5 bg-primary-sea/15 hidden sm:block" aria-hidden />
                {processSteps.map((step, i) => (
                  <FadeInSection key={step} delay={0.3 + i * 0.3}>
                    <li className="relative flex flex-row-reverse gap-4 items-center py-3">
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-sea text-white font-bold text-lg shadow-md">
                        {i + 1}
                      </span>
                      <span className="flex-1 text-right bg-white rounded-xl px-5 py-4 shadow-sm border border-primary-sea/5 text-gray-800 font-medium hover:shadow-md hover:border-primary-sea/15 transition-all">
                        {step}
                      </span>
                    </li>
                  </FadeInSection>
                ))}
              </ol>
              <InlineCta />
            </div>
          </section>

          {/* גלריה + וידאו */}
          <section className="px-4 md:px-12 py-14 md:py-16 bg-white">
            <div className="max-w-5xl mx-auto">
              <FadeInSection>
                <SectionHeading subtitle="אנחנו משתמשים בציוד צילום כדי להבין מה באמת קורה בתוך הצנרת — ולא רק לנחש.">
                  כך נראית עבודה מקצועית מבפנים
                </SectionHeading>
              </FadeInSection>

              <FadeInSection delay={0.3}>
                <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-10 ring-2 ring-primary-sea/15">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/JYfWcU1xvoQ"
                    title="צילום קו ביוב — עבודה מקצועית"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </FadeInSection>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {galleryItems.map((item, i) => (
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
              <InlineCta />
            </div>
          </section>

          {/* אזורי שירות */}
          <section className="px-4 md:px-12 py-14 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <FadeInSection>
                <SectionHeading subtitle="שירות באזור השרון והמרכז, כולל:">
                  אזורי שירות
                </SectionHeading>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-white text-primary-sea px-4 py-2 rounded-full text-sm font-medium border border-primary-sea/15 shadow-sm hover:bg-primary-sea hover:text-white transition-colors cursor-default"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </section>

          {/* ביקורות */}
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

          {/* FAQ */}
          <section className="px-4 md:px-12 py-10">
            <TogglesGenerator questions={faqItems} />
            <div className="max-w-3xl mx-auto">
              <InlineCta />
            </div>
          </section>

          {/* CTA סופי */}
          <section className="px-4 md:px-16 py-16 md:py-20 bg-gradient-to-br from-primary-sea via-[#0a5561] to-[#084550] text-white text-center">
            <FadeInSection>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                יש סתימה או בעיה חוזרת בצנרת?
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
                דברו איתנו עכשיו ונבין יחד מה הפתרון הנכון — פתיחה, צילום,
                שטיפה או טיפול מתקדם יותר.
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
