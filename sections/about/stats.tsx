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
            <span className='flex flex-row gap-4 justify-between items-center'>
                <Image
                    src={imgSrc}
                    width={80}
                    height={80}
                    alt={alt}
                />
                <p>{number}</p>
            </span>
            <p>{content}</p>
        </div>)
}

export default function Stats() {
    return (
        <div className='bg-primary-sea p-20 flex flex-col justify-between items-center gap-20 box-border relative z-10'>
            <span className=" absolute border-[20px] border-secondary-text opacity-30 w-96 h-96 block rounded-full -top-12 -left-1/2 lg:top-10 right-0 z-0" />
            <span className=" absolute border-[50px] border-gray w-96 h-96 block rounded-full top-2/3 md:top-96 -right-1/2 z-0 opacity-30" />
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