import ContactSection from "@/sections/contact-section";
import Hero from "@/sections/about/hero";
import Stats from "@/sections/about/stats";
import OurWork from "@/sections/ourWork";
import Reviews from "@/sections/reviews";
import Image from "next/image";

export const metadata = {
    title: "אודות -אקו פתרונות אינסטלציה",
    description: "מחפשים אינסטלטור מקצועי ואמין? אנו מספקים שירותי אינסטלציה איכותיים, תיקון נזילות, פתיחת סתימות והתקנת דודי שמש. זמינות 24/7!",
    keywords: [
        "אינסטלטור מומלץ",
        "שירותי אינסטלציה",
        "אינסטלטור 24/7",
        "אינסטלטור מקצועי",
        "אינסטלטור עם המלצות",
        "תיקון בעיות אינסטלציה",
        "מחירים הוגנים לאינסטלציה",
        "זמינות מיידית לתיקוני אינסטלציה"
    ],
    openGraph: {
        title: "אודות -אקו פתרונות אינסטלציה",
        description: "שירותי אינסטלציה מקצועיים. אנו מתמחים בתיקון נזילות, פתיחת סתימות, החלפת צנרת ושירותי אינסטלציה נוספים. צרו קשר עכשיו!",
        url: "https://yourwebsite.co.il/about",
        type: "website",
        images: [
            {
                url: "https://youtube.com/shorts/JYfWcU1xvoQ?feature=shared",
                width: 1200,
                height: 630,
                alt: "אינסטלטור בעבודה",
            }
        ],
    },
};


export default function About() {
    return (
        <>
            <div className="m-auto flex flex-col gap-8 bg-white">
                {/* Hero Section */}
                <section className="relative h-[30vh] lg:h-[30vh]">
                    {/* Overlay with a gradient for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-60"></div>
                    <Image
                        src="/images/modern-sink.webp"
                        alt="an image of a modern sink"
                        className="object-cover opacity-35"
                        fill={true}
                    />
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 flex items-center justify-center h-fit">
                        <h1 className="text-white text-5xl lg:text-7xl font-extrabold tracking-wider">
                            עלינו
                        </h1>
                    </div>
                </section>

                <Hero />
                <Stats />
                <OurWork />
                <div className="bg-background-primary-light">
                    <Reviews />
                </div>

                <ContactSection />

            </div>
        </>
    );
}
