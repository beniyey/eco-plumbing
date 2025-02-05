import React from 'react'
import SideBySide from '../sideBySide'

export default function Hero() {
    return (
        <div className='p-4 flex flex-col gap-8 relative container'>

            {/* circle animations */}
            <span className=" absolute border-[20px] border-secondary-text opacity-30 w-96 h-96 block rounded-full top-0 -left-1/2 lg:top-10 right-0 z-0 lg:duration-300" />
            <span className=" absolute border-[50px] border-gray w-96 h-96 block rounded-full top-2/3 md:top-96 -right-1/2 z-0" />

            {/* heading */}
            <section className='flex flex-col justify-between items-center gap-3 md:gap-8 max-w-3xl m-auto leading-8'>
                <p className='text-primary-sea'>קצת עלינו</p>
                <h1 className='text-black text-4xl font-semibold md:font-bold  text-center max-w-2xl'>אנחנו מתחייבים לשירות והאיכות הטובים ביותר שתוכלו לקבל</h1>
                <p className='text-center'>אנחנו צוות אינסטלטורים מנוסה המספק שירותי תיקון, התקנה ותחזוקה.
                    מתמחים בנזילות, פתיחת סתימות והתקנת מערכות מים לבתים ועסקים.
                    שמים דגש על שירות אמין, עבודה יסודית ופתרונות מותאמים אישית.</p>
            </section>

            {/* side by sides */}
            <section className='flex flex-col gap-8'>
                <SideBySide
                    title='הכירו אותנו'
                    imgSrc='/images/pipe-fitting.jpg'
                    imgAlt='fitting of industrial pipes'
                    linkTo='/services'
                    content='הצוות שלנו מורכב מאנשי מקצוע מנוסים, בעלי ידע רחב ומומחיות מעשית בכל תחומי האינסטלציה. כל אחד מאיתנו מביא איתו שנים של ניסיון, דיוק ושירות ללא פשרות, מתוך מטרה להעניק לכל לקוח פתרון אמין, איכותי ומותאם אישית.
                    אנחנו עובדים עם הכלים והטכנולוגיות החדישות ביותר, תוך שמירה על סטנדרטים גבוהים של ביצוע ואחריות מלאה על כל עבודה'
                    bgColor="primary-sea"
                />
                <SideBySide
                    title='למה לבחור בנו'
                    imgSrc='/images/quality-control.jpg'
                    imgAlt='a woman checking the quality of her work'
                    linkTo=''
                    content='כאשר אתם מחפשים אינסטלטור, אתם רוצים מישהו שיגיע בזמן, יבצע עבודה מקצועית וישאיר את המקום נקי ומסודר – וזה בדיוק מה שאנחנו עושים!

                    אנחנו מביאים איתנו ניסיון רב שנים, שימוש בטכנולוגיות מתקדמות וציוד חדשני, לצד יחס אישי ושירות שקוף ואמין. אנו מתחייבים לפתרונות מהירים ויעילים, עבודה איכותית עם אחריות, ומחירים הוגנים ללא הפתעות.
                    
'                    bgColor="secondary-text"
                    reverse={true}
                />
            </section>

        </div>
    )
}