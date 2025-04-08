import ContactSection from "@/sections/contact-section";
import React from "react";
import Image from "next/image";
import { filledButton } from "@/components/buttons";
import TogglesGenerator from "@/components/toggles-generator";

const items = [
    {
        title: "מה זה פתיחת סתימות?",
        content:
            "פתיחת סתימות היא תהליך של ניקוי והסרת חסימות בצנרת או קווי ביוב, לרוב בעזרת לחץ מים גבוה באמצעות ביובית. זהו פתרון מהיר ויעיל לפתיחת קווים פנימיים וחיצוניים."
    },
    {
        title: "למה חשוב לטפל בזה מיד?",
        content:
            "סתימה שלא מטופלת בזמן עלולה לגרום להצפות, נזק לריצוף ולקירות, ריח רע, ושיבוש בשגרת החיים. ככל שממתינים – הנזק גדל והעלות עולה."
    },
    {
        title: "איך השירות שלנו עובד?",
        content:
            "אנחנו מגיעים עם מגוון פתרונות מתקדמים – כולל ביובית, כבל חשמלי (flexshaft), מצלמות לצילום קווי ביוב, ומכשור לאיתור מדויק. לאחר אבחון הבעיה, נבחר את הכלי הנכון ונפתח את הסתימה בצורה היעילה והנקייה ביותר. בסיום, תקבלו סיכום מקצועי והמלצות למניעת חזרת הבעיה."
    },
    {
        title: "למה לבחור ב-Eco Plumbers?",
        content:
            "כי אנחנו זמינים 24/7, מדורגים 9.9 במדרג, משתמשים בציוד המתקדם ביותר, לא משאירים בלאגן – ונותנים לכם שירות אמין, מהיר ונקי."
    }
];

export async function generateMetadata({ params }: { params: Promise<{ city?: string[] }> }) {
    let { city }: any = await params
    city = city ? decodeURIComponent(city[0]) : "באזורכם";

    const title = `פתיחת סתימות ${city} | שירות 24/7 עם ביובית מקצועית`;
    const description = `נמאס מהריח? הצפה בבית? אנחנו ב-Eco Plumbers פותרים סתימות ${city} עם ביובית, מצלמה וכבל חשמלי – 24/7 כולל חגים. מעל 100 לקוחות מרוצים עם דירוג 9.9 במדרג!`;

    const image = "https://www.eco-plumbers.com/images/drain-cleaning-service.png"; // לוודא שזה URL תקין

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://www.eco-plumbers.com/services/drain-cleaning/${city}`,
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
            canonical: `https://www.eco-plumbers.com/services/drain-cleaning/${city}`
        },
        metadataBase: new URL("https://www.eco-plumbers.com")
    };
}


export default async function Page({ params }: { params: Promise<{ city?: string[] }> }) {
    const { city } = await params
    const cityName = city ? "ב" + decodeURIComponent(city[0]) : null;

    return (
        // Outer relative container for background decorations
        <div className="relative overflow-hidden rtl">
            {/* Decorative Circles */}
            <div className="absolute top-20 -left-20 w-80 h-80 bg-secondary-text rounded-full opacity-20"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-text rounded-full opacity-20"></div>
            <div className="absolute -inset-0 -top-10 -right-10 w-40 h-40 bg-primary-text rounded-full opacity-10"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary-text rounded-full opacity-10"></div>

            {/* Main Content */}
            <div className="relative z-10 space-y-4 mt-10">
                {/* Hero Section */}
                <div className="text-center px-4 md:px-20 py-16 bg-primary text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary-text">
                        פתיחת סתימות {cityName} <span className="text-secondary-text">בצורה מהירה ונקייה</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-sea">
                        פתרון חכם לסתימות מורכבות – ביובית, מצלמה, כבל חשמלי ואחריות, אנחנו נעבוד ואתם תנוחו
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative flex-wrap m-auto w-full h-fit p-6 lg:p-10 flex flex-col justify-center gap-12 items-center lg:flex-row-reverse lg:bg-white lg:rounded-2xl lg:shadow-xl lg:px-20 lg:w-10/12 max-w-[2000px]">
                    <Image
                        src="/images/drain-cleaning-service.png"
                        alt="פתיחת סתימות ביובית"
                        width={500}
                        height={500}
                        className="rounded-2xl aspect-square shadow-2xl object-cover border-4 border-secondary-text"
                    />

                    {/* article section */}
                    <section className="bg-gray-50 lg:bg-transparent lg:shadow-none py-16 px-6 md:px-20 text-right text-primary rounded-2xl shadow-lg lg:min-w-[900px]">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center text-secondary-text">למה סתימות קורות?</h2>

                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    סתימות בצנרת נגרמות כתוצאה מהצטברות של שומנים, שיער, מגבונים, שורשים בביוב וחלקיקים אחרים שמצטברים לאורך הזמן בצנרת.
                                    סתימה יכולה להופיע בקו פנימי (כיור, אסלה) או בקווים החיצוניים של הביוב.
                                </p>

                                <p>
                                    במקרים רבים הסתימה תתבטא בזרימה איטית, ריח רע, עלייה חוזרת של מים או אף הצפה ממשית.
                                    ברגעים כאלה חשוב לטפל בבעיה במהירות כדי למנוע נזקים לרצפה, לקירות או למערכות החשמל.
                                </p>

                                <h3 className="text-xl font-semibold mt-8">איך ניתן למנוע סתימות?</h3>
                                <ul className="list-disc pr-5 space-y-2 mt-3 text-base">
                                    <li>להימנע מהשלכת מגבונים ופסולת לשירותים</li>
                                    <li>שפיכת מים רותחים עם סודה לשתייה אחת לחודש בקווי הניקוז</li>
                                    <li>תחזוקה שנתית ע\"י איש מקצוע כולל ניקוי בלחץ מים</li>
                                    <li>בדיקה תקופתית עם מצלמה במבנים ישנים</li>
                                </ul>

                                <h3 className="text-xl font-semibold mt-8">איך פותרים סתימה מקצועית?</h3>
                                <p>
                                    אנו משתמשים בשיטות מתקדמות הכוללות ביובית עם לחץ מים גבוה, כבל חשמלי לפתיחה מכנית ומצלמות לאיתור מדויק של מקור הסתימה.
                                    השירות מבוצע בצורה נקייה, ללא הרס, וכולל דוח מצב מקצועי במידת הצורך.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Contact Section */}
                <ContactSection />


                {/* Why Us */}
                <div className="text-center px-6 md:px-20 py-10 relative">
                    {/* decoration circles */}
                    <div className="absolute top-10 -left-20 w-60 h-60 bg-secondary-text rounded-full opacity-20"></div>
                    <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-primary-text rounded-full opacity-20"></div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6">למה לבחור בנו?</h2>
                    <ul className="max-w-3xl mx-auto space-y-3 text-right text-lg">
                        <li>✅ זמינות 24/7 כולל סופי שבוע וחגים</li>
                        <li>✅ ציוד ביובית מתקדם לפתיחת סתימות בצורה בטוחה</li>
                        <li>✅ עבודה נקייה, מהירה ואחראית</li>
                        <li>✅ שקיפות מלאה ומחירים ללא הפתעות</li>
                        <li>✅ המלצות מעשרות לקוחות מרוצים ודירוג 9.9 במדרג</li>
                    </ul>
                </div>

                {/* Description Accordion */}
                <TogglesGenerator questions={items} />

                {/* Testimonial Section */}
                <div className="bg-gray-50 py-12 px-6 md:px-20 text-center flex flex-col gap-6 justify-center items-center">
                    <Image
                        src={"/icons/male-avatar.svg"}
                        width={100}
                        height={100}
                        alt="a male avatar outline"
                        className="shadow-2xl bg-transparent rounded-full"
                    />
                    <blockquote className="max-w-2xl mx-auto text-lg italic text-gray-700">
                        “התקשרתי אליהם ב-11 בלילה בגלל הצפה – הגיעו תוך חצי שעה, פתחו את הסתימה וניקו הכל בלי השארת לכלוך. שירות באמת יוצא דופן!”
                    </blockquote>
                    <p className="mt-4 font-bold text-secondary-text">יוסי, רעננה</p>
                </div>

                {/* Call to Action */}
                <div className="text-center py-12 bg-secondary text-white px-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-text">הצנרת סתומה? <span className="text-secondary-text">אנחנו כאן בשבילך</span></h3>
                    <p className="mb-6 text-lg text-primary-text">
                        השאר פרטים ונחזור אליך תוך דקות או התקשר עכשיו – נגיע עם ביובית וציוד מלא
                    </p>
                    <a href="tel:0526736935" className={filledButton}>
                        ☎️ דברו איתנו עכשיו
                    </a>
                </div>

                {/* Contact Section */}
                <ContactSection />
            </div>
        </div>
    );
}
