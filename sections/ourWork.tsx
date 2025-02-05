import { filledButton } from '@/components/buttons'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function OurWork(props: Props) {
    return (
        <div className="w-full bg-white py-16 p-4 lg:p-20">
            <div className=" flex flex-row justify-center container lg:flex-nowrap flex-wrap gap-6">
                <div className="lg:w-1/2 flex flex-col lg:justify-end items-center lg:items-end  p-4 lg:p-20 gap-6 text-right">
                    <p className="font-medium text-primary-sea">המטרה שלנו</p>
                    <h2 className="text-center lg:text-right text-black text-4xl font-bold">המטרה שלנו היא לספק שירות אמין, איכותי וזמין</h2>
                    <p className="text-center lg:text-right">אנו נטפל לכם בכל תקלה בטווח זמנים נוח, אם איכות ללא פשרות ואחריות לכלל העבודות</p>
                    <Link href={"/services"} className={filledButton} >עוד פרטים</Link>
                </div>
                <div className=" text-right min-w-80 lg:w-1/2 flex flex-col justify-center items-center gap-6 pb-14 lg:pb-0">
                    <span className="flex flex-row gap-10 border-4 border-background-primary-light w-full lg:w-4/5 py-5 px-10 items-center justify-between rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_415_6)">
                                <path d="M1.43799 4.73438H23.563" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.43799 8.4375H23.563V3.75C23.563 2.1967 22.3038 0.937501 20.7505 0.937501H4.25049C2.69719 0.937501 1.43799 2.1967 1.43799 3.75V9.46875C1.43799 11.022 2.69719 12.2812 4.25049 12.2812H20.7505C21.0792 12.2812 21.3948 12.2249 21.688 12.1212" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.4849 0.937501V12.2812" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.51611 0.937501V12.2812" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.5667 17.0156V20.25C17.5667 21.8033 18.8259 23.0625 20.3792 23.0625H23.5628" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.7505 18.8438L16.5921 17.0022C17.1412 16.453 18.0316 16.453 18.5808 17.0022L20.4224 18.8438" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.38727 17.0156V20.25C7.38727 21.8033 6.12807 23.0625 4.57477 23.0625H1.43799" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.2036 18.8438L8.36203 17.0022C7.81289 16.453 6.92246 16.453 6.37332 17.0022L4.53174 18.8438" stroke="#F4BD14" stroke-width="1.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_415_6">
                                    <rect width="24" height="24" fill="white" transform="translate(0.500488)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className="hover:text-secondary-text font-bold text-xl">תיקוני צנרת וריחות רעים</h2>
                    </span>
                    <span className="flex flex-row gap-10 border-4 border-background-primary-light w-full lg:w-4/5 py-5 px-10 items-center justify-between rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M19.8364 11.0625C20.3542 11.0625 20.7739 10.6428 20.7739 10.125V3.75C20.7739 1.68219 19.0917 0 17.0239 0H8.02393C5.95612 0 4.27393 1.68219 4.27393 3.75V17.4375C4.27393 19.5053 5.95612 21.1875 8.02393 21.1875H8.21143V23.0625C8.21143 23.5803 8.6311 24 9.14893 24C9.66675 24 10.0864 23.5803 10.0864 23.0625V21.1875H15.0083V23.0625C15.0083 23.5803 15.428 24 15.9458 24C16.4636 24 16.8833 23.5803 16.8833 23.0625V21.1875H17.0239C19.0917 21.1875 20.7739 19.5053 20.7739 17.4375V15.0938C20.7739 14.6364 20.444 14.2458 19.9932 14.1694C19.8769 14.1497 17.0972 13.6875 12.5239 13.6875C9.57611 13.6875 7.37335 13.8796 6.14893 14.0213V3.75C6.14893 2.71619 6.99011 1.875 8.02393 1.875H17.0239C18.0577 1.875 18.8989 2.71619 18.8989 3.75V10.125C18.8989 10.6428 19.3186 11.0625 19.8364 11.0625V11.0625ZM12.5239 15.5625C15.553 15.5625 17.7902 15.7764 18.8989 15.9109V17.4375C18.8989 18.4713 18.0577 19.3125 17.0239 19.3125H8.02393C6.99011 19.3125 6.14893 18.4713 6.14893 17.4375V15.9106C7.25507 15.7758 9.48621 15.5625 12.5239 15.5625V15.5625ZM11.5864 17.4375C11.5864 16.9197 12.0061 16.5 12.5239 16.5C13.0417 16.5 13.4614 16.9197 13.4614 17.4375C13.4614 17.9553 13.0417 18.375 12.5239 18.375C12.0061 18.375 11.5864 17.9553 11.5864 17.4375ZM13.5497 4.78125C13.5497 4.26343 13.13 3.84375 12.6122 3.84375H12.5239C12.3057 3.84375 12.0942 3.91992 11.9261 4.05908C11.6033 4.32623 9.33643 6.68225 9.33643 8.61621C9.33643 10.3786 10.7663 11.8125 12.5239 11.8125C14.2816 11.8125 15.7114 10.3786 15.7114 8.61621C15.7114 7.35315 14.938 6.64911 14.3733 6.13495C13.832 5.64221 13.5497 5.35822 13.5497 4.78125ZM12.5239 9.9375C11.8003 9.9375 11.2114 9.34479 11.2114 8.61621C11.2114 8.06708 11.7119 7.22992 12.2136 6.55371C12.4888 6.9549 12.825 7.26086 13.1111 7.52142C13.6376 8.00061 13.8364 8.21924 13.8364 8.61621C13.8364 9.34479 13.2476 9.9375 12.5239 9.9375Z" fill="#F4BD14" />
                        </svg>
                        <h2 className="hover:text-secondary-text font-bold text-xl">פתיחת סתימות וכרסום שורשים</h2>
                    </span>
                    <span className="flex flex-row gap-10 border-4 border-background-primary-light w-full lg:w-4/5 py-5 px-10 items-center justify-between rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <g clip-path="url(#clip0_415_2)">
                                <path d="M22.4545 18.6872C23.4586 20.0499 23.5747 20.7339 23.5747 21.13V21.1875C23.5747 21.7053 23.155 22.125 22.6372 22.125C22.1194 22.125 21.6997 21.7053 21.6997 21.1875V21.1353C21.6962 21.1073 21.6369 20.7303 20.9158 19.76C20.8642 19.6906 20.8127 19.6229 20.7622 19.5575C20.7086 19.6267 20.6542 19.6985 20.5996 19.7719C19.887 20.7336 19.8282 21.1073 19.8247 21.1353V21.1875C19.8247 21.7044 20.2453 22.125 20.7622 22.125C21.28 22.125 21.6997 22.5447 21.6997 23.0625C21.6997 23.5803 21.28 24 20.7622 24C19.2113 24 17.9497 22.7384 17.9497 21.1875V21.13C17.9497 20.7339 18.0658 20.0499 19.0699 18.6872C19.5621 18.0189 20.0494 17.484 20.0699 17.4615C20.2475 17.267 20.4989 17.1562 20.7622 17.1562C21.0255 17.1562 21.2769 17.267 21.4545 17.4617C21.475 17.484 21.9621 18.0189 22.4545 18.6872V18.6872ZM24.5122 14.5312C24.5122 15.0491 24.0925 15.4688 23.5747 15.4688H17.9497C17.4319 15.4688 17.0122 15.0491 17.0122 14.5312C17.0122 14.0134 17.4319 13.5938 17.9497 13.5938V9.84375H15.231V19.3125C15.231 21.8972 13.1282 24 10.5435 24H6.13721C3.55249 24 1.44971 21.8972 1.44971 19.3125V1.875C0.931885 1.875 0.512207 1.45532 0.512207 0.9375C0.512207 0.419678 0.931885 0 1.44971 0H7.07471C7.59253 0 8.01221 0.419678 8.01221 0.9375C8.01221 1.45532 7.59253 1.875 7.07471 1.875V18.5625H9.60596V8.90625C9.60596 6.32153 11.7087 4.21875 14.2935 4.21875H18.8872C21.4719 4.21875 23.5747 6.32153 23.5747 8.90625V13.5938C24.0925 13.5938 24.5122 14.0134 24.5122 14.5312ZM3.32471 1.875V13.5469H5.19971V1.875H3.32471ZM13.356 19.3125V15.4688H11.481V19.5C11.481 20.0178 11.0613 20.4375 10.5435 20.4375H6.13721C5.61938 20.4375 5.19971 20.0178 5.19971 19.5V15.4219H3.32471V19.3125C3.32471 20.8634 4.5863 22.125 6.13721 22.125H10.5435C12.0944 22.125 13.356 20.8634 13.356 19.3125ZM19.8247 8.90625V13.5938H21.6997V8.90625C21.6997 7.35535 20.4381 6.09375 18.8872 6.09375H14.2935C12.7426 6.09375 11.481 7.35535 11.481 8.90625V13.5938H13.356V8.90625C13.356 8.38843 13.7756 7.96875 14.2935 7.96875H18.8872C19.405 7.96875 19.8247 8.38843 19.8247 8.90625Z" fill="#F4BD14" />
                            </g>
                            <defs>
                                <clipPath id="clip0_415_2">
                                    <rect width="24" height="24" fill="white" transform="translate(0.512207)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h2 className="hover:text-secondary-text font-bold text-xl">פתרונות אינסטלציה לבית ולעסק</h2>
                    </span>
                </div>

            </div>
        </div>
    )
}