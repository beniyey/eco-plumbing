import React from 'react'
import SideBySide from '../sideBySide'

export default function Hero() {
    return (
        <div className='p-4'>
            {/* heading */}
            <section className='flex flex-col justify-between items-center gap-3'>
                <p className='text-primary-sea'>קצת עלינו</p>
                <h1 className='text-black text-4xl font-semibold  text-center'>אנחנו מתחייבים לשירות והאיכות הטובים ביותר שתוכלו לקבל</h1>
                <p className='text-center'>אנחנו צוות אינסטלטורים מנוסה המספק שירותי תיקון, התקנה ותחזוקה.
                    מתמחים בנזילות, פתיחת סתימות והתקנת מערכות מים לבתים ועסקים.
                    שמים דגש על שירות אמין, עבודה יסודית ופתרונות מותאמים אישית.</p>
            </section>

            {/* side by sides */}
            <section>
                <SideBySide
                    title=''
                    imgSrc=''
                    imgAlt=''
                    linkTo=''
                    content=''
                    bgColor=""
                />
                <SideBySide
                    title=''
                    imgSrc=''
                    imgAlt=''
                    linkTo=''
                    content=''
                    bgColor=""
                />
            </section>

        </div>
    )
}