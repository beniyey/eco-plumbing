// components/Clarity.tsx
'use client'
import { useEffect } from 'react'
import Clarity from '@microsoft/clarity';


export default function ClarityInit() {
    useEffect(() => {
        // Make sure to add your actual project id instead of "yourProjectId".
        const projectId = "rftnbv9c0g"

        Clarity.init(projectId);
    }, [])

    return null
}

