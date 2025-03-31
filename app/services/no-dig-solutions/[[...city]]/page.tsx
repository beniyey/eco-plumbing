import ContactSection from "@/sections/contact-section";
import Image from "next/image";
import { filledButton } from "@/components/buttons";
import TogglesGenerator from "@/components/toggles-generator";

const items = [
  {
    title: "מה זה תיקון אל הרס?",
    content:
      "תיקון אל הרס הוא פתרון טכנולוגי מתקדם לתיקון צנרת סמויה מבלי לשבור קירות או ריצוף. העבודה מתבצעת מבפנים – על ידי חידוש או ציפוי הצינור הקיים."
  },
  {
    title: "מתי נדרש תיקון אל הרס?",
    content:
      "כאשר יש סדקים, שברים, נזילות או חדירת שורשים בצנרת – במיוחד כשמדובר בקווים סמויים מתחת לרצפה או בתוך קירות, שלא נגישים לפירוק."
  },
  {
    title: "איך השירות שלנו עובד?",
    content:
      "אנחנו מאתרים את הנזק במדויק באמצעות מצלמה, מבצעים ניקוי יסודי לקו, ולאחר מכן מצפים או מחזקים את הצינור בטכנולוגיה מתקדמת – והכל מבלי לפתוח קיר."
  },
  {
    title: "למה לבחור ב-Eco Plumbers?",
    content:
      "אנחנו מציעים פתרון חכם, חסכוני, מהיר ונקי – בלי לשבור כלום. עם ציוד ברמה הגבוהה בישראל, ניסיון רב ויחס אישי לאורך כל הדרך."
  }
];

export async function generateMetadata({ params }: { params: { city?: string[] } }) {
    const city = params.city ? decodeURIComponent(params.city[0]) : "באזורכם";
  
    const title = `תיקון צנרת אל הרס ${city} | בלי לשבור קירות`;
    const description = `פתרון חכם לצנרת סמויה ${city} – צילום קווים, ציפוי פנימי לצנרת, ואחריות מלאה – בלי לשבור קירות או ריצוף. Eco Plumbers זמינים מידית עם טכנולוגיה מתקדמת.`;
  
    const image = "https://www.eco-plumbers.com/images/plumbing-service.png";
  
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://www.eco-plumbers.com/services/no-dig-solutions/${city}`,
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
        canonical: `https://www.eco-plumbers.com/services/no-dig-solutions/${city}`
      },
      metadataBase: new URL("https://www.eco-plumbers.com")
    };
  }
  

export default async function Page({ params }: { params: Promise<{ city?: string[] }> }) {
  const { city } = await params;
  const cityName = city ? "ב" + decodeURIComponent(city[0]) : null;

  return (
    <div className="relative overflow-hidden rtl">
      <div className="absolute top-20 -left-20 w-80 h-80 bg-secondary-text rounded-full opacity-20" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-text rounded-full opacity-20" />
      <div className="absolute -inset-0 -top-10 -right-10 w-40 h-40 bg-primary-text rounded-full opacity-10" />
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary-text rounded-full opacity-10" />

      <div className="relative z-10 space-y-4 mt-10">
        {/* Hero */}
        <div className="text-center px-4 md:px-20 py-16 bg-primary text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary-text">
            תיקוני צנרת אל הרס {cityName} <span className="text-secondary-text">ללא שבירה וללא בלאגן</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-sea">
            פתרון מושלם לצנרת סמויה – עם מצלמות, ציוד חידוש קווים וטכנולוגיה שמבצעת את העבודה בלי לפגוע בקירות או ברצפה
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex-wrap m-auto w-full h-fit p-6 lg:p-10 flex flex-col justify-center gap-12 items-center lg:flex-row-reverse lg:bg-white lg:rounded-2xl lg:shadow-xl lg:px-20 lg:w-10/12 max-w-[2000px]">
          <Image
            src="/images/plumbing-service.png"
            alt="תיקון אל הרס"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl border-4 border-secondary-text aspect-square object-cover"
          />

          {/* Text Section */}
          <section className="bg-gray-50 lg:bg-transparent lg:shadow-none py-16 px-6 md:px-20 text-right text-primary rounded-2xl shadow-lg lg:min-w-[900px]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center text-secondary-text">למה לבחור בתיקון אל הרס?</h2>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  בעיות בצנרת לא חייבות להיגמר בשיפוץ כולל. עם הטכנולוגיות של היום אפשר לתקן את הקווים מבפנים – בצורה מדויקת, מהירה וללא הרס.
                </p>

                <h3 className="text-xl font-semibold mt-8">מה כוללים השירותים שלנו?</h3>
                <ul className="list-disc pr-5 space-y-2 mt-3 text-base">
                  <li>צילום קווים עם מצלמה מתקדמת</li>
                  <li>איתור מדויק של נזק בצנרת</li>
                  <li>ניקוי יסודי לקו לפני חידוש</li>
                  <li>ציפוי פנימי לצנרת קיימת</li>
                  <li>שיקום קווים עם אחריות</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Why Us */}
        <div className="text-center px-6 md:px-20 py-10 relative">
          <div className="absolute top-10 -left-20 w-60 h-60 bg-secondary-text rounded-full opacity-20" />
          <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-primary-text rounded-full opacity-20" />

          <h2 className="text-2xl md:text-3xl font-bold mb-6">למה לבחור בנו?</h2>
          <ul className="max-w-3xl mx-auto space-y-3 text-right text-lg">
            <li>✅ ציוד מהמתקדמים בישראל</li>
            <li>✅ פתרונות נקיים, חכמים ויעילים</li>
            <li>✅ אין צורך בשבירת ריצוף או קירות</li>
            <li>✅ אחריות מלאה על כל עבודה</li>
            <li>✅ מאות לקוחות מרוצים</li>
          </ul>
        </div>

        {/* FAQ Accordion */}
        <TogglesGenerator questions={items}/>

        {/* Testimonial */}
        <div className="bg-gray-50 py-12 px-6 md:px-20 text-center flex flex-col gap-6 justify-center items-center">
          <Image
            src="/icons/male-avatar.svg"
            width={100}
            height={100}
            alt="a male avatar outline"
            className="shadow-2xl bg-transparent rounded-full"
          />
          <blockquote className="max-w-2xl mx-auto text-lg italic text-gray-700">
            “חשבנו שצריך לשבור את כל הרצפה, אבל הצוות של Eco Plumbers ביצע תיקון אל הרס מושלם – בלי לכלוך, בלי בלאגן.”
          </blockquote>
          <p className="mt-4 font-bold text-secondary-text">תומר, הוד השרון</p>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-secondary text-white px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-text">
            צריך תיקון בלי לשבור קירות? <span className="text-secondary-text">אנחנו הכתובת</span>
          </h3>
          <p className="mb-6 text-lg text-primary-text">
            השאר פרטים ונחזור אליך – או התקשר עכשיו ונתאם ביקור לבדיקה וצילום קו
          </p>
          <a href="tel:0526736935" className={filledButton}>
            ☎️ דברו איתנו עכשיו
          </a>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
