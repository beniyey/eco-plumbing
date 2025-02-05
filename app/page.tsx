"use client"
import { filledButton, underlineButton } from "@/components/buttons";
import Image from "next/image";
import Link from "next/link";
import Reviews from "@/sections/reviews";
import OurWork from "@/sections/ourWork";


export default function Home() {

  return (
    <div className="m-auto">
      {/* Hero section */}
      <div className="container flex flex-col gap-14 lg:flex-row justify-between p-6 px-10 pb-12 lg:pb-0">
        {/* image and circles */}
        <div className="relative w-fit m-auto">
          <Image
            className=" z-40"
            src={"/images/plumber.webp"}
            alt="an image of a plumber"
            width={500}
            height={500}
          />
          <div className="absolute w-full h-5/6 bg-primary-sea block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-10 rounded-full" />
          <span className=" absolute border-4 border-secondary-text w-40 h-40 block rounded-full top-0 lg:top-10 right-0 -z-10 lg:duration-300 circle" />
          <span className=" absolute border-4 border-secondary-text w-20 h-20 block rounded-full top-56 lg:top-64 left-0 -z-10 lg:duration1 circle" />
          <span className=" absolute border-4 border-white w-40 h-40 block rounded-full top-56 md:top-96 right-0 -z-50 lg:duration1 circle" />

        </div>
        {/* content */}
        <div className="flex flex-col w-full lg:w-1/2 gap-8 text-center lg:text-right ">
          <h1 className="font-bold text-4xl lg:text-6xl">
            אנו מספקים שירותי אינסטלציה מתקדמים
          </h1>
          <p>
            מתמחים באיתור נזילות, פתיחת סתימות והתקנות אינסטלציה מתקדמות. השירות שלנו זמין בכל אזור המרכז והשרון, עם אחריות מלאה ושירות מעולה
          </p>
          <span className="flex flex-col-reverse md:flex-row justify-center lg:justify-end gap-8 items-center">
            <Link className={underlineButton} href={"/contact"}>צור קשר</Link>
            <Link className={filledButton} href={"/about"}>קצת עלינו</Link>
          </span>
          <div className="flex flex-col justify-around items-center gap-8 md:flex-row lg:justify-end">
            <span className=" lg:px-8">
              <p className="font-extrabold text-[42px] text-primary-sea">20+</p>
              <p>השתלמויות מקצועיות</p>
            </span>
            <span className="lg:border-l-2 border-gray-300 lg:px-8">
              <p className="font-extrabold text-[42px] text-primary-sea">150+</p>
              <p>פרוייקטים גמורים</p>
            </span>
            <span className="lg:border-l-2 border-gray-300 lg:pl-8">
              <p className="font-extrabold text-[42px] text-primary-sea">200+</p>
              <p>לקוחות מרוצים</p>
            </span>
          </div>
        </div>
      </div>

      {/* About us section */}
      <div className="w-full bg-white flex flex-col gap-24 py-14 relative">
        <span className=" absolute -left-2/3 top-28 w-96 h-96 md:-left-1/3 md:top-96 md:w-1/2 md:h-96 border-gray-400 border-[40px] rounded-full" />
        <span className=" z-0 absolute -right-1/3 top-1/4 w-52 md:-right-20 md:top-1/4 h-52 border-secondary-text border-[10px] rounded-full" />

        <div className="container flex flex-col lg:flex-row relative">
          <div className="relative lg:w-1/2 p-6 lg:p-20">
            <Image
              className="rounded-xl shadow-xl w-4/5 lg:w-full m-auto"
              src={"/images/sink-repair.webp"}
              height={1000}
              alt="a plumber repairing a sink"
              width={600}
            />
            <Image
              className="absolute rounded-xl right-6 bottom-2 lg:right-0 lg:bottom-8 image-shadow w-1/4"
              src={"/images/washing-hands.webp"}
              height={1000}
              alt="a person washing its hands"
              width={200}
            />
          </div>
          <div className="flex flex-col text-right p-6 lg:p-20 items-center lg:items-end lg:w-1/2 gap-6">
            <p className="font-medium text-primary-sea" >על החברה שלנו</p>
            <h2 className="text-black text-4xl font-bold">עמידה בזמנים ומקצעיות מעל הכל</h2>
            <p>אנחנו , צוות מומחים באינסטלציה עם ניסיון של שנים וידע מעמיק בטיפול בכל בעיות הצנרת. אנו מתמחים באיתור נזילות, פתיחת סתימות, והתקנות מתקדמות, תוך שימוש בטכנולוגיות החדשניות ביותר.
              החזון שלנו הוא להעניק שירות אמין, מהיר ואיכותי לכל לקוח, עם דגש על מקצועיות ושביעות רצון. כשאתם בוחרים בנו, אתם בוחרים בשקט נפשי

            </p>
            <Link href={"/contact"} className={filledButton}>להזמנת אינסטלטור</Link>
          </div>
        </div>

        {/* services section */}
        <div className="flex flex-col gap-20">
          <span className="z-10 w-fit m-auto flex flex-col items-center justify-center">
            <p className="font-medium text-primary-sea" >השירותים שלנו</p>
            <h2 className="text-black text-center text-4xl font-bold mt-4">במה נוכל לעזור לך היום</h2>
          </span>


          {/* services */}
          <div className=" flex flex-row flex-wrap gap-y-48 justify-center gap-12 mb-24">
            <div className="relative min-w-80 p-4">
              <Image
                src={"/images/pipe.jpg"}
                alt="an image of a pipe"
                width={400}
                height={400}
                className="w-96 h-96 object-cover rounded-lg"
              />
              <span className="absolute bg-background-primary-light p-10 rounded-lg w-5/6 -bottom-24  shadow-xl left-1/2 -translate-x-1/2 m-auto flex flex-col justify-center items-end gap-1">
                <p className="font-medium text-primary-sea">נזילות וצנרת</p>
                <h2 className="font-bold text-2xl">תיקוני צנרת</h2>
                <p className="text-right my-5">איתור ותיקון נזילות, פיצוצי צנרת ושדרוג מערכות מים מקצועי</p>
                <Link className={underlineButton} href={"/services/leak-repair"}>לעמוד השירות</Link>
              </span>
            </div>
            <div className="relative min-w-80 p-4">
              <Image
                src={"/images/plumber-working.jpg"}
                alt="an image of a plumber in his work"
                width={400}
                height={400}
                className="w-96 h-96 object-cover rounded-lg"
              />
              <span className="absolute bg-background-primary-light p-10 rounded-lg w-5/6 -bottom-24  shadow-xl left-1/2 -translate-x-1/2 m-auto flex flex-col justify-center items-end gap-1">
                <p className="font-medium text-primary-sea">אינסטלציה</p>
                <h2 className="font-bold text-2xl">אינסטלציה כללית</h2>
                <p className="text-right my-5">תיקון והתקנת צנרת, ברזים וכלים סניטריים עם שירות מקצועי ואמין</p>
                <Link className={underlineButton} href={"/services/plumbing"}>לעמוד השירות</Link>
              </span>

            </div>
            <div className="relative min-w-80 p-4">
              <Image
                src={"/images/sink.jpg"}
                alt="an image of a sink"
                width={400}
                height={400}
                className="w-96 h-96 object-cover rounded-lg"
              />
              <span className="absolute bg-background-primary-light p-10 rounded-lg w-5/6 -bottom-24  shadow-xl left-1/2 -translate-x-1/2 m-auto flex flex-col justify-center items-end gap-1">
                <p className="font-medium text-primary-sea">ניקוי צנרת</p>
                <h2 className="font-bold text-2xl">פתיחת סתימות</h2>
                <p className="text-right my-5">פתיחת סתימות מקצועית ללא נזק, עם ציוד מתקדם ופתרון מהיר</p>
                <Link className={underlineButton} href={"/services/drain-cleaning"}>לעמוד השירות</Link>
              </span>
            </div>
          </div>

          <Link className={filledButton + " m-auto py-5 px-12"} href={"/services"} >לכל השירותים</Link>
        </div>
      </div>


      {/* free estimate section */}
      <div className="py-32 lg:py-40 relative px-4 overflow-hidden">
        <div className="w-full lg:w-4/5 m-auto p-4 lg:p-16 bg-primary-sea text-white text-center rounded-xl flex flex-col gap-2 justify-center items-center shadow-2xl">
          <h2 className="text-white text-4xl font-bold">בין אם מדובר בתיקון צנרת, כרסום שורשים, פתיחת סתימות קשות או כל שירות אחר</h2>
          <p>אנו מספקים הצעות מחיר ללא עלות על כלל העבודות הדרושות</p>
          <Link href={"/estimate"} className={filledButton + " mt-6"} >לקבלת הצעת מחיר</Link>
        </div>
        <span className="absolute border-8 border-secondary-text w-40 h-40 block rounded-full top-6 lg:top-16 right-2 lg:right-20 -z-10 duration1" />
        <span className="absolute border-8 border-secondary-text w-32 h-32 block rounded-full top-[600px] lg:top-80 left-4 lg:left-24 -z-10 duration1" />
        <span className="absolute border-8 border-white w-40 h-40 block rounded-full top-[450px]  lg:top-[450px] -right-24 lg:right-24  duration1" />
      </div>

      {/* our work */}
      <OurWork />

      <Reviews />


      <div className="flex flex-col gap-20 bg-white py-40">
        <span className="w-fit m-auto flex flex-col items-center justify-center">
          <p className="font-medium text-primary-sea" >למדו עוד על ביתכם</p>
          <h2 className="text-black font-bold text-4xl">בקרו בבלוג שלנו</h2>
        </span>

        <div className="flex flex-row justify-center flex-wrap gap-y-40 gap-12 mb-24">
          <div className="relative min-w-80 p-4">
            <Image
              src={"/images/pipe.jpg"}
              alt="an image of a pipe"
              width={400}
              height={400}
              className="w-96 h-96 object-cover rounded-lg"
            />
            <span className="absolute bg-background-primary-light p-10 rounded-lg w-5/6 -bottom-24  shadow-xl left-1/2 -translate-x-1/2 m-auto flex flex-col justify-center items-end gap-1">
              <p className="font-medium text-primary-sea">סתימות</p>
              <h2 className="font-bold text-2xl text-right">מים עומדים בכיור</h2>
              <p className="text-right my-5">מים עומדים, יכולים להעיד על שלל בעיות חוץ מסתימה, אותן חשוב לבדוק לפני גישה לטיפול, בקרו בכתבה ולמדו עליהן</p>
              <Link className={underlineButton} href={"/services/leak-repair"}>לכתבה</Link>
            </span>
          </div>
          <div className="relative min-w-80 p-4">
            <Image
              src={"/images/plumber-working.jpg"}
              alt="an image of a plumber in his work"
              width={400}
              height={400}
              className="w-96 h-96 object-cover rounded-lg"
            />
            <span className="absolute bg-background-primary-light p-10 rounded-lg w-5/6 -bottom-24  shadow-xl left-1/2 -translate-x-1/2 m-auto flex flex-col justify-center items-end gap-1">
              <p className="font-medium text-primary-sea">אינסטלציה</p>
              <h2 className="font-bold text-2xl">אינסטלציה כללית</h2>
              <p className="text-right my-5">תיקון והתקנת צנרת, ברזים וכלים סניטריים עם שירות מקצועי ואמין</p>
              <Link className={underlineButton} href={"/services/plumbing"}>לעמוד השירות</Link>
            </span>

          </div>
          <div className="relative min-w-80 p-4">
            <Image
              src={"/images/sink.jpg"}
              alt="an image of a sink"
              width={400}
              height={400}
              className="w-96 h-96 object-cover rounded-lg"
            />
            <span className="absolute bg-background-primary-light p-10 rounded-lg w-5/6 -bottom-24  shadow-xl left-1/2 -translate-x-1/2 m-auto flex flex-col justify-center items-end gap-1">
              <p className="font-medium text-primary-sea">ניקוי צנרת</p>
              <h2 className="font-bold text-2xl">פתיחת סתימות</h2>
              <p className="text-right my-5">פתיחת סתימות מקצועית ללא נזק, עם ציוד מתקדם ופתרון מהיר</p>
              <Link className={underlineButton} href={"/services/drain-cleaning"}>לעמוד השירות</Link>
            </span>
          </div>
        </div>

      </div>



    </div>
  );
}
