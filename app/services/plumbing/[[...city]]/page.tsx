import ContactSection from "@/sections/contact-section";
import Image from "next/image";
import { filledButton } from "@/components/buttons";
import TogglesGenerator from "@/components/toggles-generator";
import ConversionLink from "@/components/ConversionLink";
import ReviewsSlider from "@/sections/reviews";

const items = [
    {
        title: "מה כוללים שירותי אינסטלציה כלליים?",
        content:
            "שירותי אינסטלציה כוללים התקנה, תיקון ותחזוקה של מערכות מים וביוב – כולל כיורים, ברזים, אסלות, דודי שמש, קווי מים וביוב ועוד."
    },
    {
        title: "מתי כדאי להזמין אינסטלטור מקצועי?",
        content:
            "אם יש לך נזילה, לחץ מים חלש, בעיה בזרימה, ריח רע מהביוב, התקנה שדורשת דיוק או צורך להחליף קווים ישנים – זה הזמן לקרוא לנו."
    },
    {
        title: "איך השירות שלנו עובד?",
        content:
            "אנחנו מגיעים עם ציוד מתקדם ומבצעים בדיקה יסודית, מבצעים את ההתקנה או התיקון הדרוש במהירות ובצורה נקייה – עם אחריות מלאה."
    },
    {
        title: "למה לבחור ב-אקו אינסטלציה?",
        content:
            "אנחנו זמינים 24/7, עם צוות מקצועי, אמין ומנוסה. עובדים בציוד מתקדם, מחירים שקופים ושירות אישי בכל עבודה – קטנה או גדולה."
    }
];

export async function generateMetadata({ params }: { params: Promise<{ city?: string[] }> }) {
    let { city }: any = await params
    city = city ? decodeURIComponent(city[0]) : "באזורכם";

    const title = `אינסטלטור ${city} | שירותי אינסטלציה כלליים 24/7`;
    const description = `אינסטלטור מקצועי ${city} – תיקוני צנרת, התקנות, החלפות, לחץ מים נמוך, דודי שמש, פתיחת סתימות ועוד. זמינות מיידית עם אחריות מלאה. אקו אינסטלציה.`;

    const image = "https://www.eco-plumbers.com/images/plumber.webp"; // ודא שקיים

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://www.eco-plumbers.com/services/plumbing/${city}`,
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
            canonical: `https://www.eco-plumbers.com/services/plumbing/${city}`
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
                        שירותי אינסטלציה לבית ולעסק {cityName} <span className="text-secondary-text">עם מענה מידי, וזמינות בכל שעות היום</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-sea">
                        כל עבודות האינסטלציה לבית ולעסק – התקנות, תיקונים, החלפות ופתרון תקלות חירום – עם אחריות מלאה, יחס אישי, הגעה מהירה וציוד מתקדם.
                    </p>
                    <ConversionLink
                        href="tel:0526736935"
                        sendTo="AW-17385017560/wphUCNue_IMbENih6eFA"
                        className={filledButton + " m-auto mt-8 block"}
                    >
                        ☎️ צריכים אינסטלטור מיידי? התקשרו - 052-6736935
                    </ConversionLink>
                    <a target="blank" href="https://www.midrag.co.il/SpCard/Sp/128232?sectorId=4&listId=2" className={filledButton + " m-auto mt-8 block bg-pink-600 "}>
                        ⭐ קראו את הביקורות עלינו באתר מידרג
                    </a>
                </div>

                {/* Image Section */}
                <div className="relative flex-wrap m-auto w-full h-fit p-6 lg:p-10 flex flex-col justify-center gap-12 items-center lg:flex-row-reverse lg:bg-white lg:rounded-2xl lg:shadow-xl lg:px-20 lg:w-10/12 max-w-[2000px]">
                    <Image
                        src="/images/plumbing-service.png"
                        alt="שירותי אינסטלציה כלליים"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-2xl border-4 border-secondary-text aspect-square object-cover"
                    />

                    {/* Text Section */}
                    <section className="bg-gray-50 lg:bg-transparent lg:shadow-none py-16 px-6 md:px-20 text-right text-primary rounded-2xl shadow-lg lg:min-w-[900px]">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center text-secondary-text">מתי להזמין אותנו?</h2>

                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    אינסטלטור יידע לאתר ולפתור בעיות כמו נזילות, זרם חלש, התקנות שדורשות דיוק או שדרוג מערכת הצנרת.
                                    טיפול בזמן ימנע נזקים מיותרים ויאריך את חיי המערכת.
                                </p>

                                <h3 className="text-xl font-semibold mt-8">מה כוללים השירותים שלנו?</h3>
                                <ul className="list-disc pr-5 space-y-2 mt-3 text-base">
                                    <li>תיקוני צנרת מים וביוב</li>
                                    <li>התקנת כלים סניטריים – כיורים, אסלות, ברזים</li>
                                    <li>טיפול בלחץ מים נמוך</li>
                                    <li>התקנה והחלפת דודים</li>
                                    <li>שירות חירום בכל שעה</li>
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
                        <li>✅ זמינות 24/7 כולל חירום</li>
                        <li>✅ שירות מקצועי עם ניסיון</li>
                        <li>✅ עבודה נקייה ומדויקת</li>
                        <li>✅ אחריות מלאה על כל עבודה</li>
                        <li>✅ מחירים שקופים והוגנים</li>
                    </ul>
                    <ConversionLink
                        href="tel:0526736935"
                        sendTo="AW-17385017560/wphUCNue_IMbENih6eFA"
                        className={filledButton + " m-auto mt-8 block"}
                    >
                        אני צריך אתכם!
                    </ConversionLink>
                </div>

                {/* FAQ Accordion */}
                <TogglesGenerator questions={items} />

                {/* Testimonial */}
                <div className="bg-gray-50 py-12 px-6 md:px-20 text-center flex flex-col gap-6 justify-center items-center">
                    <ReviewsSlider />
                </div>

                {/* CTA */}
                <div className="text-center py-12 bg-secondary text-white px-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-text">
                        צריכים אינסטלטור עכשיו? <span className="text-secondary-text">אנחנו כאן בשבילך</span>
                    </h3>
                    <p className="mb-6 text-lg text-primary-text">
                        שלחו לנו הודעה בווטסאפ, או חייגו - והצוות שלנו כבר בדרך אליכם
                    </p>
                    <ConversionLink
                        href="tel:0526736935"
                        sendTo="AW-17385017560/wphUCNue_IMbENih6eFA"
                        className={filledButton + " m-auto mt-8 block"}
                    >
                        דברו איתנו עכשיו ☎️
                    </ConversionLink>

                    <ConversionLink
                        href="https://api.whatsapp.com/send?phone=972526736935"
                        sendTo="AW-17385017560/L2RQCNKN_IMbENih6eFA"
                        className={filledButton + " m-auto mt-8 block"}
                    >
                        שילחו לנו הודעה
                    </ConversionLink>
                </div>

                <ContactSection />
            </div>
        </div>
    );
}