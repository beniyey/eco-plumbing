"use client"
import { filledButton, underlineButton } from "@/components/buttons";
import Image from "next/image";
import Link from "next/link";
import plumber from "../images/plumber.webp"
import sinkRepair from "../images/sink-repair.webp"
import washingHands from "../images/washing-hands.webp"

export default function Home() {

  return (
    <div className="m-auto">
      {/* Hero section */}
      <div className="container flex flex-row justify-between p-6 px-10 pb-0">
        {/* image and circles */}
        <div className="relative">
          <Image
            className=" z-40"
            src={plumber}
            alt="an image of a plumber"
            width={500}
          />
          <div className="absolute w-full h-5/6 bg-primary-sea block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10 rounded-full" />
          <span className="circle absolute border-4 border-secondary-text w-40 h-40 block rounded-full top-10 right-0 -z-10 duration1" />
          <span className="circle absolute border-4 border-secondary-text w-20 h-20 block rounded-full top-64 left-0 -z-10 duration1" />
          <span className="circle absolute border-4 border-white w-40 h-40 block rounded-full top-96 right-0 -z-50 duration1" />

        </div>
        {/* content */}
        <div className="flex flex-col w-1/2 gap-8 text-right">
          <h1>
            אנו מספקים שירותי אינסטלציה מתקדמים
          </h1>
          <p>
            מתמחים באיתור נזילות, פתיחת סתימות והתקנות אינסטלציה מתקדמות. השירות שלנו זמין בכל אזור המרכז והשרון, עם אחריות מלאה ושירות מעולה
          </p>
          <span className="flex flex-row justify-end gap-8 items-center">
            <Link className={underlineButton} href={"/contact"}>צור קשר</Link>
            <Link className={filledButton} href={"/about"}>קצת עלינו</Link>
          </span>
          <div className="flex flex-row justify-end">
            <span className=" px-8">
              <p className="font-extrabold text-[42px] text-primary-sea">20+</p>
              <p>השתלמויות מקצועיות</p>
            </span>
            <span className="border-l-2 border-gray-300 px-8">
              <p className="font-extrabold text-[42px] text-primary-sea">150+</p>
              <p>פרוייקטים גמורים</p>
            </span>
            <span className="border-l-2 border-gray-300 pl-8">
              <p className="font-extrabold text-[42px] text-primary-sea">200+</p>
              <p>לקוחות מרוצים</p>
            </span>
          </div>
        </div>
      </div>

      {/* About us section */}
      <div className="w-full bg-white flex flex-col gap-24">
        <div className="container flex flex-row relative">
          <div className="relative w-1/2 p-20">
            <Image
              className="rounded-xl shadow-xl"
              src={sinkRepair}
              alt="a plumber repairing a sink"
              width={600}
            />
            <Image
              className="absolute rounded-xl right-0 bottom-8 image-shadow"
              src={washingHands}
              alt="a person washing its hands"
              width={200}
            />
          </div>
          <div className="flex flex-col text-right p-20 items-end w-1/2 gap-6">
            <p className="font-medium text-primary-sea" >על החברה שלנו</p>
            <h1 className="text-primary-sea">עמידה בזמנים ומקצעיות מעל הכל</h1>
            <p>אנחנו , צוות מומחים באינסטלציה עם ניסיון של שנים וידע מעמיק בטיפול בכל בעיות הצנרת. אנו מתמחים באיתור נזילות, פתיחת סתימות, והתקנות מתקדמות, תוך שימוש בטכנולוגיות החדשניות ביותר.
              החזון שלנו הוא להעניק שירות אמין, מהיר ואיכותי לכל לקוח, עם דגש על מקצועיות ושביעות רצון. כשאתם בוחרים בנו, אתם בוחרים בשקט נפשי

            </p>
            <Link href={"/contact"} className={filledButton}>להזמנת אינסטלטור</Link>
          </div>
        </div>

        <div>
          <span className="w-fit m-auto flex flex-col items-center justify-center">
            <p className="font-medium text-primary-sea" >השירותים שלנו</p>
            <h1>במה נוכל לעזור לך היום</h1>
          </span>

        </div>
      </div>



    </div>
  );
}
