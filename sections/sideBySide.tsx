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
}

export default function SideBySide({ imgSrc, title, content, imgAlt, linkTo, bgColor }: Props) {
    return (
        <div>
            <section>
                <Image
                    src={imgSrc}
                    fill={true}
                    alt={imgAlt}
                />
            </section>
            <section>
                <h2>{title}</h2>
                <p>{content}</p>
                <Link href={linkTo}>קרא עוד</Link>
            </section>
        </div>
    )
}