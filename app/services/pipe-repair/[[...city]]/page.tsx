
"use client";

import ContactSection from "@/sections/contact-section";
import React, { useState } from "react";
import Image from "next/image";
import { filledButton } from "@/components/buttons";

const items = [
  {
    title: "איזה סוגי תקלות דורשות תיקון צנרת?",
    content:
      "נזילות, שברים בצינור, לחץ מים נמוך, פיצוצים, קורוזיה או סתימות חוזרות – כל אלו מצריכים בדיקה מקצועית ותיקון צנרת מהיר."
  },
  {
    title: "איך אנחנו מאבחנים את הבעיה?",
    content:
      "בעזרת ציוד צילום תרמי, מצלמות לקווי ביוב, בדיקות לחץ ואמצעים טכנולוגיים נוספים – אנו מזהים את מקור הבעיה במדויק."
  },
  {
    title: "איך מתבצע תיקון הצנרת?",
    content:
      "לאחר אבחון, נבצע את התיקון בצורה נקודתית או נחליף קטע מהצינור. העבודה נעשית בניקיון, במהירות ועם אחריות."
  },
  {
    title: "למה לבחור ב-Eco Plumbers?",
    content:
      "צוות מקצועי, ניסיון עם מערכות מים וביוב מכל הסוגים, שימוש בציוד חדשני וזמינות מיידית – גם לשירות חירום."
  }
];

export default function Page({ params }: { params: Promise<{ city?: string[] }> }) {
  const { city } = React.use(params);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cityName = city ? "ב" + decodeURIComponent(city[0]) : null;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            תיקון צנרת {cityName} <span className="text-secondary-text">עם אחריות ושקט נפשי</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-sea">
            מומחים באיתור ותיקון צנרת מים וביוב – בבית, בגינה או בבניין – עם ציוד חדיש ועבודה נקייה ומהירה
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex-wrap m-auto w-full h-fit p-6 lg:p-10 flex flex-col justify-center gap-12 items-center lg:flex-row-reverse lg:bg-white lg:rounded-2xl lg:shadow-xl lg:px-20 lg:w-10/12 max-w-[2000px]">
          <Image
            src="/images/plumbing-service.png"
            alt="תיקון צנרת"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl border-4 border-secondary-text aspect-square object-cover"
          />

          {/* Text Section */}
          <section className="bg-gray-50 lg:bg-transparent lg:shadow-none py-16 px-6 md:px-20 text-right text-primary rounded-2xl shadow-lg lg:min-w-[900px]">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center text-secondary-text">מתי צריך תיקון צנרת?</h2>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  כל סימן לנזילה, לחץ מים חלש, הצפות או רטיבות – דורש בדיקה. טיפול מהיר ימנע נזק מיותר ויחסוך עלויות.
                </p>

                <h3 className="text-xl font-semibold mt-8">מה כוללים השירותים שלנו?</h3>
                <ul className="list-disc pr-5 space-y-2 mt-3 text-base">
                  <li>איתור נזק בצנרת מים וביוב</li>
                  <li>צילום קווים עם מצלמות סיב אופטי</li>
                  <li>תיקון נקודתי או החלפת קטע</li>
                  <li>תיקון צנרת סמויה או גלויה</li>
                  <li>אחריות מלאה על כל תיקון</li>
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
            <li>✅ מומחיות בצנרת מים וביוב</li>
            <li>✅ צילום ואבחון מדויק</li>
            <li>✅ תיקון מהיר ונקי</li>
            <li>✅ אחריות מלאה</li>
            <li>✅ זמינות מיידית גם לשירותי חירום</li>
          </ul>
        </div>

        {/* FAQ Accordion */}
        <div className="container rtl flex flex-col gap-6 p-4 relative">
          <div className="absolute bottom-0 left-10 w-16 h-16 bg-secondary-text rounded-full opacity-10" />

          <h2 className="text-3xl text-center font-bold mt-6">שאלות נפוצות</h2>
          {items.map((item, index) => (
            <div key={index} className="border-2 border-gray-250 rounded-md overflow-hidden">
              <button
                className="w-full text-right px-4 py-4 bg-gray-100 hover:bg-gray-200 font-semibold flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <span className={openIndex === index ? "text-primary-sea" : ""}>{item.title}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-96 p-4 opacity-100" : "max-h-0 p-0 opacity-0"}`}>
                <div className="text-right text-sm text-gray-700">{item.content}</div>
              </div>
            </div>
          ))}
        </div>

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
            “הייתה לי נזילה בצינור מתחת לרצפה – Eco Plumbers מצאו את הבעיה ותיקנו בלי בלגן. מקצוענים!”
          </blockquote>
          <p className="mt-4 font-bold text-secondary-text">אייל, רמת השרון</p>
        </div>

        {/* CTA */}
        <div className="text-center py-12 bg-secondary text-white px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-text">
            צריך לתקן צנרת? <span className="text-secondary-text">נדאג לזה מייד</span>
          </h3>
          <p className="mb-6 text-lg text-primary-text">
            השאר פרטים או התקשר עכשיו – נגיע לאבחון ותיקון מדויק עם אחריות מלאה
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
