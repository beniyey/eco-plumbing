'use client';
import React from 'react';
import { reportConversion } from '@/lib/gtag';

interface Props {
  href: string;
  sendTo: string;
  className?: string;
  children: React.ReactNode;
}

export default function ConversionLink({ href, sendTo, className, children }: Props) {
  const handleClick = () => {
    reportConversion(sendTo);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
