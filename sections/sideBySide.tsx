import { underlineButton } from '@/components/buttons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    imgSrc: string,
    imgAlt: string,
    title: string,
    content: string
    linkTo: string
    bgColor: string
    reverse?: boolean
}

export default function SideBySide({ imgSrc, title, content, imgAlt, linkTo, bgColor, reverse }: Props) {
    return (
        <div className={'flex flex-col gap-10 justify-between items-center  py-20 z-10 ' + (reverse ? "md:flex-row-reverse border-t-4 border-dotted" : "md:flex-row")}>
            <section className='relative md:w-1/2'>
                <Image
                    src={imgSrc}
                    width={500}
                    height={500}
                    alt={imgAlt}
                    className={'object-cover aspect-video rounded-xl m-auto'}
                    style={{
                        boxShadow: "-10px -12px 0 0 #0b5d6a"
                    }}
                />

            </section>
            <section className='flex flex-col justify-between items-end gap-8 md:w-1/2'>
                <h2 className='text-3xl font-bold text-black'>{title}</h2>
                <p className='font-light md:font-normal'>{content}</p>
                <Link className={underlineButton + " text-secondary-text border-secondary-text"} href={linkTo}>קרא עוד</Link>
            </section>
        </div>
    )
}