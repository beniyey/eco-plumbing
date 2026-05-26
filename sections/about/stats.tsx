import Image from 'next/image'
import React from 'react'

type cardProps = {
    imgSrc: string,
    alt: string,
    number: string,
    content: string
}

function Card({
    imgSrc,
    alt,
    number,
    content
}: cardProps) {
    return (
        <div className='flex flex-col gap-4 text-2xl text-white font-bold w-fit z-10'>
            <span className='flex flex-row gap-4 justify-between items-center z-50'>
                <Image
                    src={imgSrc}
                    width={80}
                    height={80}
                    alt={alt}
                    className='z-30'
                />
                <p>{number}</p>
            </span>
            <p>{content}</p>
        </div>)
}

export default function Stats() {
    return (
        <div className='bg-primary-sea px-6 py-16 md:py-20 flex flex-col justify-between items-center gap-12 md:gap-16 box-border
                        md:flex-row md:justify-center md:max-w-6xl md:mx-auto' dir="rtl">
            <Card
                imgSrc='/icons/google.svg'
                alt='a logo of google'
                number="5"
                content='ציון בגוגל'
            />
            <Card
                imgSrc='/icons/rating.svg'
                alt='a logo of google'
                number="9.6"
                content='ציון במדרג'
            />
            <Card
                imgSrc='/icons/customer.svg'
                alt='a logo of google'
                number="200+"
                content='לקוחות מרוצים'
            />
        </div>
    )
}