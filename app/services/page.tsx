import React from 'react'
import services from "../../data/services.json"
import Image from 'next/image'
import { underlineButton } from '@/components/buttons'
import Link from 'next/link'
import ContactSection from '@/components/contact-section'

type Props = {}

export default function page({ }: Props) {
  return (
    <div className='flex flex-col gap-20 relative'>



      {/* hero section */}
      <section className='flex flex-col justify-center items-center gap-5 p-4 relative mt-9'>
        {/* circles */}
        <span>
        <span className="absolute border-4 border-secondary-text w-36 h-36 block rounded-full top-5 right-5 -z-10 lg:right-5 right-[-40px] lg:duration-300" />
<span className="absolute border-4 border-secondary-text w-24 h-24 block rounded-full top-72 left-10 -z-10 lg:left-10 left-[-40px] lg:duration-300" />
<span className="absolute border-4 border-white w-32 h-32 block rounded-full top-[500px] right-8 -z-50 lg:right-8 right-[-40px] lg:duration-300" />
<span className="absolute border-4 border-secondary-text w-28 h-28 block rounded-full top-[800px] left-[15%] -z-20 lg:left-[15%] left-[-30px] lg:duration-300" />
<span className="absolute border-4 border-secondary-text w-36 h-36 block rounded-full top-[1050px] left-[65%] -z-30 lg:left-[65%] left-[-20px] lg:duration-300" />
<span className="absolute border-4 border-white w-28 h-28 block rounded-full top-[1350px] right-[25%] -z-40 lg:right-[25%] right-[-30px] lg:duration-300" />
<span className="absolute border-4 border-secondary-text w-20 h-20 block rounded-full top-[1650px] left-[70%] -z-10 lg:left-[70%] left-[-20px] lg:duration-300" />
<span className="absolute border-4 border-white w-20 h-20 block rounded-full bottom-[400px] left-5 -z-30 lg:left-5 left-[-30px] lg:duration-300" />
        </span>
        <h1 className='text-6xl text-center font-bold'>השירותים <span className=' text-secondary-text'>שלנו</span></h1>
        <p className='pt-4 text-center font-normal md:w-1/2'>
          שירותי אינסטלציה מתקדמים (ביובית), איתור נזילות מדויק ותיקוני צנרת חכמים – עם דגש על פתרונות יעילים, עבודה נקייה ושירות אישי 24/7.
        </p>
      </section>

      {/* services */}
      <section className='flex  box-border flex-row justify-center items-center gap-16 p-16 w-3/4 flex-wrap container'>
        {
          services.map((el, index) => {
            return (
              <div className='flex flex-grow flex-col gap-6 justify-end items-end w-1/4 min-w-80' key={index}>
                <Image
                  className=' w-full h-[320px] object-cover rounded-xl'
                  src={el.imageSrc}
                  width={500}
                  height={500}
                  alt={'an image of ' + el.imageSrc}
                />
                <span className='flex flex-col gap-2 justify-around items-end'>
                  <p className='text-primary-sea font-medium'>{el.category}</p>
                  <h2 className='text-2xl font-bold'>{el.serviceName}</h2>
                  <p>{el.overview}</p>
                  <Link className={underlineButton + " text-secondary-text border-secondary-text"} href={el.linkTo}>לעמוד השירות</Link>
                </span>
              </div>
            )
          })
        }
      </section>

      <ContactSection />

    </div>
  )
}