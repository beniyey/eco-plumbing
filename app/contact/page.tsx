import ContactSection from '@/sections/contact-section'
import React from 'react'
import Head from 'next/head'

type Props = {}

export default function page({ }: Props) {
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17385017560" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17385017560');`
                    }}
                />
            </Head>
            <div>
                <ContactSection />
            </div>
        </>
    )
}