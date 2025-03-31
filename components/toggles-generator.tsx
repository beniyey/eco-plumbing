"use client"
import { Question } from '@/app/types'
import React, { useState } from 'react'

type Props = {
    questions: Question[]
}

export default function TogglesGenerator({ questions }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container rtl flex flex-col gap-6 p-4 relative">
            {/* decoration circles */}
            <div className="absolute bottom-0 left-10 w-16 h-16 bg-secondary-text rounded-full opacity-10"></div>

            <h2 className="text-3xl text-center font-bold mt-6">שאלות נפוצות</h2>
            {questions.map((item, index) => (
                <div key={index} className="border-2 border-gray-250 rounded-md overflow-hidden">
                    <button
                        className="w-full text-right px-4 py-4 bg-gray-100 hover:bg-gray-200 font-semibold flex justify-between items-center"
                        onClick={() => toggle(index)}
                    >
                        <span className={openIndex === index ? "text-primary-sea" : ""}>
                            {item.title}
                        </span>
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </button>
                    <div
                        className={`transition-all duration-300 overflow-hidden ${openIndex === index
                            ? "max-h-96 p-4 opacity-100"
                            : "max-h-0 p-0 opacity-0"
                            }`}
                    >
                        <div className="text-right text-sm text-gray-700">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}