"use client"
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Logo from './logo'
import { outlinedButton } from './buttons'

type Props = {}

export default function Header({ }: Props) {
    const [showMenu, setShowMenu] = useState(false)

    const path = usePathname()

    return (
        <header className='flex flex-row  justify-between top-0 items-center px-10 py-6'>
            <Logo />

            <ul className='hidden sm:flex flex-row gap-8 items-center'>
                {
                    siteConfig.navItems.map((el, index) => {
                        return (<li key={index}>
                            <Link className={path == el.href ? " text-secondary-text transition-colors" : " hover:text-secondary-text"} href={el.href}>{el.label}</Link>
                        </li>)
                    })
                }
            </ul>

            <div className='hidden sm:flex flex-row gap-4 items-center'>
                <button className=''>
                    <svg width="23px" className='' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
                <Link className={outlinedButton} href={"/contact"}>צור קשר</Link>
            </div>

            {/* burger menu */}
            <div className='sm:hidden'>
                <button onClick={() => setShowMenu(!showMenu)}>
                    <svg className='w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H18" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M5 17H11" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> <path d="M5 7H15" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                </button>

                <div className={'absolute left-0 top-0 h-screen z-50 bg-white w-1/2 p-6 flex flex-col gap-6 items-end animate__animated ' + (showMenu ? "animate__fadeInLeft" : "animate__fadeOutLeft")}>
                    <span className='flex flex-row justify-between w-full'>
                        <button onClick={() => setShowMenu(false)}>
                            <svg viewBox="0 0 64 64" width="23px" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line><line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line></g></svg>
                        </button>
                        <Logo />
                    </span>
                    <ul className='flex flex-col items-end'>
                        {
                            siteConfig.navItems.map((el, index) => {
                                return (<li key={index}>
                                    <Link className={path == el.href ? " text-secondary-text transition-colors" : ""} href={el.href}>{el.label}</Link>
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}