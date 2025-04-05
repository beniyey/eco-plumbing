import ContactSection from "@/sections/contact-section";
import Image from "next/image";
import { filledButton } from "@/components/buttons";
import TogglesGenerator from "@/components/toggles-generator";

const items = [
    {
        title: "מה זה איתור נזילות מקצועי?",
        content:
            "איתור נזילות מקצועי מתבצע בעזרת ציוד מתקדם כמו מצלמה תרמית, גלאים אקוסטיים ובדיקות לחץ – ללא הרס מיותר לקירות או רצפה."
    },
    {
        title: "איך מזהים שיש נזילה?",
        content:
            "סימנים נפוצים הם חשבון מים גבוה, רטיבות על הקיר או תקרה, עובש, שינוי בלחץ המים, או ריח טחב. במקרים כאלו – חשוב לפנות מיד."
    },
    {
        title: "איך השירות שלנו עובד?",
        content:
            "אנחנו מגיעים עם ציוד תרמי ואקוסטי, מאתרים את הנזילה בדיוק של סנטימטרים, מציעים פתרון במקום ונותנים דוח מקצועי ואחריות."
    },
    {
        title: "ומה אם לא הצלחתם לאתר את הנזילה? 😱",
        content:
            "במקרים נדירים שבהם לא ניתן לאתר את מקור הנזילה – אתם לא משלמים. באקו אינסטלציה אנחנו עובדים בהוגנות מלאה: לא פתרנו? לא שילמתם."
    },
    {
        title: "למה לבחור ב'אקו אינסטלציה'?",
        content:
            "כי אנחנו לא שוברים בלי סיבה – אנחנו מאתרים, מציעים פתרון נקודתי, משתמשים בציוד מהמתקדם בארץ, וזמינים גם בשבת."
    }
];

export async function generateMetadata({ params }: { params: Promise<{ city?: string[] }> }) {
    let { city }: any = await params
    city = city ? decodeURIComponent(city[0]) : "באזורכם";

    const title = `איתור נזילות ${city} | מצלמה תרמית ודוחות ביטוח`;
    const description = `איתור נזילות מקצועי ${city} עם מצלמות תרמיות, ציוד אקוסטי וללא הרס – דוחות ביטוח, פתרון מיידי וזמינות 24/7. אקו אינסטלציה - אמינות וניסיון.`;

    const image = "https://www.eco-plumbers.com/images/leak-detection.png";

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://www.eco-plumbers.com/services/leak-detection/${city}`,
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
            canonical: `https://www.eco-plumbers.com/services/leak-detection/${city}`
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
                        איתור נזילות {cityName} <span className="text-secondary-text">ללא הרס ובדיוק מירבי</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-sea">
                        מצלמות תרמיות, ציוד אקוסטי, דוחות מקצועיים ופתרון מדויק – בלי לנחש, בלי לשבור, בלי הפתעות
                    </p>
                </div>

                {/* Image Section */}
                <div className="relative flex-wrap m-auto w-full h-fit p-6 lg:p-10 flex flex-col justify-center gap-12 items-center lg:flex-row-reverse lg:bg-white lg:rounded-2xl lg:shadow-xl lg:px-20 lg:w-10/12 max-w-[2000px]">
                    <Image
                        src="/images/leak-detection.png"
                        alt="איתור נזילות"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-2xl border-4 border-secondary-text aspect-square object-cover"
                    />

                    {/* Text Section */}
                    <section className="bg-gray-50 lg:bg-transparent lg:shadow-none py-16 px-6 md:px-20 text-right text-primary rounded-2xl shadow-lg lg:min-w-[900px]">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center text-secondary-text">איך מזהים נזילה?</h2>

                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    חשבון מים שקפץ? כתמי רטיבות? לחץ מים נמוך? כל אלו עלולים להעיד על נזילה – חשוב לטפל מיד לפני שהנזק מחמיר.
                                </p>

                                <h3 className="text-xl font-semibold mt-8">מה כוללים השירותים שלנו?</h3>
                                <ul className="list-disc pr-5 space-y-2 mt-3 text-base">
                                    <li>איתור נזילות באמצעים טכנולוגיים</li>
                                    <li>בדיקות לחץ בצנרת</li>
                                    <li>איתור רטיבות בקירות ובתקרה</li>
                                    <li>גלאי רטיבות אקוסטיים</li>
                                    <li>דוחות מקצועיים לחברות ביטוח</li>
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
                        <li>✅ מצלמות תרמיות וציוד מתקדם</li>
                        <li>✅ פתרונות מדויקים וללא הרס</li>
                        <li>✅ דוחות מקצועיים לחברות ביטוח</li>
                        <li>✅ זמינות מהירה כולל סופי שבוע</li>
                        <li>✅ שירות אישי, נקי ואחראי</li>
                    </ul>
                </div>

                {/* נזקי נזילות ומחיר */}
                <div className="relative flex-wrap m-auto w-full h-fit p-6 lg:p-10 flex flex-col justify-center gap-12 items-center lg:flex-row lg:bg-white lg:rounded-2xl lg:shadow-xl lg:px-20 lg:w-10/12 max-w-[2000px]">
                    <section className="bg-gray-50 lg:bg-transparent lg:shadow-none py-16 px-6 md:px-20 text-right text-primary rounded-2xl shadow-lg lg:min-w-[900px]">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center text-secondary-text">מה קורה אם לא מטפלים בנזילה?</h2>
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p>
                                    נזילה שלא מטופלת בזמן עלולה לגרום לנזק מצטבר: רטיבות בתקרה, קירות שמתפוררים, עובש וריח טחב שמזיקים לבריאות, והחמרה של הבעיה עד לפגיעה בתשתיות. לפעמים הנזק יתגלה רק כשהוא כבר גדול – או כששכנים יתלוננו על טפטוף.
                                </p>
                                <p>
                                    ככל שממתינים יותר – הנזק גדל. טיפול מוקדם חוסך כסף, תיקונים יקרים ועוגמת נפש. אנחנו ב"אקו אינסטלציה" מאתרים את הנזילה במהירות ומונעים החמרה מיותרת.
                                </p>
                                <h3 className="text-xl font-semibold mt-8">מה המחיר?</h3>
                                <p>
                                    מחיר איתור נזילה מתחיל מ-₪800 לביקור הכולל צילום תרמי, בדיקות לחץ ודוח מסודר – בהתאם לסוג המקרה. התקשרו ונשמח לתת הצעת מחיר מותאמת.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* FAQ Accordion */}
                <TogglesGenerator questions={items} />

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
                        “לא ידענו מאיפה הרטיבות – אקו אינסטלציה הגיעו עם מצלמה תרמית, מצאו את הנזילה בלי לשבור כלום ופתרו את הבעיה. ממליץ!”
                    </blockquote>
                    <p className="mt-4 font-bold text-secondary-text">עמית, תל אביב</p>
                </div>

                {/* CTA */}
                <div className="text-center py-12 bg-secondary text-white px-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-text">
                        חושד בנזילה? <span className="text-secondary-text">תן לנו לבדוק</span>
                    </h3>
                    <p className="mb-6 text-lg text-primary-text">
                        השאר פרטים ונחזור אליך תוך דקות – או התקשר עכשיו ונגיע עם ציוד תרמי לאיתור מיידי
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