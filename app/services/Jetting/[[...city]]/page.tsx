import ContactSection from "@/sections/contact-section";
import TogglesGenerator from "@/components/toggles-generator";
import Image from "next/image";
import { filledButton } from "@/components/buttons";
import ReviewsSlider from "@/sections/reviews";
import Head from "next/head";
import ConversionLink from "@/components/ConversionLink";

const items = [
  {
    title: "מה זה שירות ביובית?",
    content:
      "שירות ביובית הוא פתרון מתקדם לפתיחת סתימות וניקוי קווי ביוב בעזרת לחץ מים גבוה. הביובית מאפשרת גם שאיבת הצפות, ושורשים בצנרת."
  },
  {
    title: "מתי צריך להזמין ביובית?",
    content:
      "כאשר קיימת סתימה מורכבת בקו ראשי, הצפה או חדירת שורשים – ביובית תטפל בבעיה בצורה יסודית ומהירה, בלי לפגוע בתשתיות."
  },
  {
    title: "איך השירות שלנו עובד?",
    content:
      "אנחנו מגיעים במהירות עם ביובית מקצועית, מצלמים את הקו במידת הצורך, פותחים את הסתימה בלחץ מים גבוה ומסיימים בניקוי יסודי."
  },
  {
    title: "למה לבחור בנו",
    content:
      "אנחנו זמינים 24/7, עם ביובית מקצועית, צוות מנוסה, שירות מדורג 9.9 במדרג ופתרון בעיות ניקוז בלי ניחושים – אלא עם ציוד חכם."
  }
  ,
  {
    title: "כמה עולה שירות ביובית?",
    content:
      "פתיחת סתימה בקו ביוב חיצוני נעה לרוב בין 650 ל-950 ₪ כולל מע״מ. טיפול בשורשים בקווים עמוקים יעלה בין 900 ל-1,200 ₪. המחיר תלוי בגישה, מורכבות וציוד נדרש – נשמח לתת הצעת מחיר טלפונית."
  },
  {
    title: "אם לא הצלחתם לפתור את הבעיה – משלמים?",
    content:
      "ממש לא. אם לא פתרנו את הבעיה – לא תחויבו. אנחנו גובים רק על עבודה שמביאה תוצאה, עם אחריות ושקיפות מלאה."
  }

];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(({ title, content }) => ({
    "@type": "Question",
    "name": title,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": content
    }
  }))
};

export async function generateMetadata({ params }: { params: Promise<{ city?: string[] }> }) {
  let { city }: any = await params
  city = city ? decodeURIComponent(city[0]) : "באזורכם";

  const title = `שירותי ביובית ${city} | פתיחת סתימות בלחץ מים 24/7`;
  const description = `ביובית מקצועית ${city} לפתיחת סתימות, טיפול בשורשים, צילום קווים ושאיבות – זמינות מיידית, ציוד מתקדם ודירוג 9.9 במדרג. Eco Plumbers כאן בשבילך.`;

  const image = "https://www.eco-plumbers.com/images/jetter-service.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.eco-plumbers.com/services/jetting/${city}`,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    alternates: {
      canonical: `https://www.eco-plumbers.com/services/jetting/${city}`
    },
    metadataBase: new URL("https://www.eco-plumbers.com")
  };
}


export default async function Page({ params }: { params: Promise<{ city?: string[] }> }) {
  const { city } = await params;
  const cityName = city ? "ב" + decodeURIComponent(city[0]) : null;

  return (<>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17385017560" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17385017560');
function gtag_report_conversion_whatsapp(url){var callback=function(){if(typeof(url)!='undefined'){window.location=url;}};gtag('event','conversion',{'send_to':'AW-17385017560/_ZT_CPPR3vsaENih6eFA','event_callback':callback});return false;}
function gtag_report_conversion_call(url){var callback=function(){if(typeof(url)!='undefined'){window.location=url;}};gtag('event','conversion',{'send_to':'AW-17385017560/B-xnCPSPyfcaENih6eFA','event_callback':callback});return false;}`
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "אקו פתרונות אינסטלציה",
            "image": "https://www.eco-plumbers.com/images/jetter-service.png",
            "telephone": "+972526736935",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityName?.replace("ב", ""),
              "addressCountry": "IL"
            },
            "url": `https://www.eco-plumbers.com/services/jetting/${cityName?.replace("ב", "")}`,
            "openingHours": "24/7"
          })
        }}
      />
    </Head>
    <div className="relative overflow-hidden rtl">
      <div className="absolute top-20 -left-20 w-80 h-80 bg-secondary-text rounded-full opacity-20" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-text rounded-full opacity-20" />
      <div className="absolute -inset-0 -top-10 -right-10 w-40 h-40 bg-primary-text rounded-full opacity-10" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary-text rounded-full opacity-10" />

      <div className="relative z-10 space-y-4 mt-10">
        {/* Hero */}
        <div className="text-center px-4 md:px-20 py-16 bg-primary text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary-text">
            ביובית <span className="text-secondary-text">{cityName} – פתיחת סתימות בלחץ מים גבוה 24/7</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-sea">
            שירותי ביובית מתקדמים{cityName}  – פתיחת סתימות קשות, שטיפת קווי ביוב בלחץ גבוה, שאיבת הצפות וטיפול בשורשים. אנו משתמשים בציוד מהמתקדמים בישראל וכוללים <strong>צילום קווי ביוב</strong>, <strong>איתור תקלות</strong> ו<strong>דו"ח מקצועי לביטוח</strong> לפי הצורך. <br />
            <span className="font-bold">התחייבות לשירות מקצועי – לא פתרנו? לא שילמתם.</span><br />
            זמינות גם בשבתות וחגים.
          </p>

          <ConversionLink
            href="tel:0526736935"
            sendTo="AW-17385017560/B-xnCPSPyfcaENih6eFA"
          <a
            href="tel:0526736935"

            className={filledButton + " m-auto mt-8 block"}
          >
            ☎️ התקשרו עכשיו וקבלו צילום קו במתנה עם כל שירות: 052-6736935
          </ConversionLink>
          <a target="blank" href="https://www.midrag.co.il/SpCard/Sp/128232?sectorId=4&listId=2" className={filledButton + " m-auto mt-8 block bg-pink-600 "}>
            ⭐ קראו את הביקורות שלנו באתר מידרג
          </a>
        </div>

        {/* Image Section */}
        <div className="relative flex-wrap m-auto w-full h-fit p-6 lg:p-10 flex flex-col justify-center gap-12 items-center lg:flex-row-reverse lg:bg-white lg:rounded-2xl lg:shadow-xl lg:px-20 lg:w-10/12 max-w-[2000px]">
          <Image
            src="/images/jetter-service.png"
            alt="שירות ביובית"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl border-4 border-secondary-text aspect-square object-cover"
          />

          {/* Text Section */}
          <section className="bg-gray-50 lg:bg-transparent lg:shadow-none py-16 px-6 md:px-20 text-right text-primary rounded-2xl shadow-lg lg:min-w-[900px]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center text-secondary-text">מתי צריך להזמין ביובית?</h2>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  הצפה? ריח רע מהביוב? סתימה חוזרת בקו ראשי? ביובית היא הפתרון הכי מקצועי ואפקטיבי – פותחת, שוטפת ומנקה ביסודיות.
                </p>

                <h3 className="text-xl font-semibold mt-8">מה כוללים השירותים שלנו?</h3>
                <ul className="list-disc pr-5 space-y-2 mt-3 text-base">
                  <li>פתיחת סתימות בלחץ מים גבוה</li>
                  <li>שאיבת בורות ביוב</li>
                  <li>טיפול בשורשים בקווים</li>
                  <li>צילום קווי ביוב עם מצלמה</li>
                  <li>שירות חירום 24/7</li>
                </ul>
              </div>
              <ConversionLink
                href="tel:0526736935"
                sendTo="AW-17385017560/B-xnCPSPyfcaENih6eFA"
              <a
                href="tel:0526736935"
                className={filledButton + " m-auto mt-8 block"}
              >
                ☎️ אני רוצה שתגיעו!
              </ConversionLink>
            </div>
          </section>
        </div>

        {/* Why Us */}
        <div className="text-center px-6 md:px-20 py-10 relative">
          <div className="absolute top-10 -left-20 w-60 h-60 bg-secondary-text rounded-full opacity-20" />
          <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-primary-text rounded-full opacity-20" />

          <h2 className="text-2xl md:text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="max-w-3xl mx-auto space-y-3 text-right text-lg">
            <li>✅ ביובית מתקדמת לפתיחת סתימות מורכבות</li>
            <li>✅ זמינות 24/7 כולל שבתות</li>
            <li>✅ צוות מנוסה ופתרון יסודי</li>
            <li>✅ צילום ואבחון מדויק לפני טיפול</li>
            <li>✅ שירות אמין עם אחריות מלאה</li>
          </ul>
        </div>

        {/* FAQ Accordion */}
        <TogglesGenerator questions={items} />
        <ConversionLink
          href="tel:0526736935"
          sendTo="AW-17385017560/B-xnCPSPyfcaENih6eFA"
        <a
          href="tel:0526736935"
          className={filledButton + " m-auto mt-8 block"}
        >
          ☎️ יש לכם עוד שאלות? התקשרו לייעוץ חינם!
        </ConversionLink>

        {/* Testimonial */}
        <div className="bg-gray-50 py-12 px-6 md:px-20 text-center flex flex-col gap-6 justify-center items-center">
          <ReviewsSlider />
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-secondary text-white px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-text">
            צריך שירות ביובית דחוף? <span className="text-secondary-text">אנחנו בדרך</span>
          </h3>
          <p className="mb-6 text-lg text-primary-text">
            השאר פרטים ונחזור תוך דקות – או התקשר עכשיו ואנחנו מגיעים עם ביובית מקצועית וציוד מתקדם
          </p>
          <ConversionLink
            href="https://wa.me/972526736935"
            sendTo="AW-17385017560/_ZT_CPPR3vsaENih6eFA"
          <a
            href="https://wa.me/972526736935"
            className={filledButton + " mt-4 bg-green-600"}
          >
            💬 שלחו לנו וואטסאפ עכשיו
          </ConversionLink>

        </div>

        <ContactSection />
      </div>
    </div>
  </>
  );
}
