import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import 'animate.css';
import Footer from "@/components/footer";
import "animate.css/animate.min.css";
import { Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoogleAnalytics } from '@next/third-parties/google'




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"]
})

// app/layout.tsx or app/head.tsx (Next.js App Router)
export const metadata = {
  title: "אקו אינסטלציה | אינסטלטורים מקצועיים במרכז הארץ",
  description:
    "פתיחת סתימות, איתור נזילות, תיקוני צנרת ופתרונות אל הרס – אקו אינסטלציה מציעים שירות 24/7, ביובית מקצועית ודירוג 9.9 במדרג.",
  keywords: [
    "אינסטלטור", "פתיחת סתימות", "איתור נזילות", "ביובית", "תיקון צנרת", "שיקום קווים", "אל הרס", "אינסטלציה", "תיקוני צנרת", "אינסטלטור מומלץ"
  ],
  openGraph: {
    title: "אקו אינסטלציה | אינסטלציה מקצועית במרכז הארץ",
    description:
      "שירותי אינסטלציה מתקדמים: פתיחת סתימות, ביובית, איתור נזילות, תיקוני אל הרס – עם זמינות 24/7 ודירוג מושלם במדרג.",
    url: "https://www.eco-plumbers.com",
    type: "website",
    images: [
      {
        url: "https://www.eco-plumbers.com/images/site-cover.png",
        width: 1200,
        height: 630,
        alt: "אקו אינסטלציה"
      }
    ]
  },
  alternates: {
    canonical: "https://www.eco-plumbers.com"
  },
  metadataBase: new URL("https://www.eco-plumbers.com")
  , icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" className={"bg-background-primary-light"}>
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "אקו אינסטלציה",
            "url": "https://www.eco-plumbers.com",
            "logo": "https://www.eco-plumbers.com/favicon.ico",
            "description": "חברת אינסטלציה מתקדמת המספקת שירותים כגון פתיחת סתימות, איתור נזילות, תיקוני צנרת ושיקום ללא הרס, עם שירות מקצועי וזמינות 24/7.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "מרכז",
              "addressCountry": "IL"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+972-526-736935",
              "contactType": "customer service",
              "areaServed": "IL",
              "availableLanguage": ["Hebrew", "Russian", "English"]
            }
          })}
        </script>
      </head>
      <body className="relative">
        <Header />
        <Link
          target="blank"
          href="https://api.whatsapp.com/send?phone=972526736935"
          title="שלחו לנו הודעה"
          className="fixed bottom-8 left-8 text-[#ffffffb3] hover:text-secondary-text w-fit flex flex-row-reverse gap-2 z-50"
        >     
          <Image
            src={"/whatsapp-svgrepo-com.svg"}
            height={60}
            width={60}
            alt="a logo of whatsapp"
            className="w-16"
          />
        </Link>

        <Suspense fallback={<p>loading...</p>}>
          {children}
        </Suspense>
        <Footer />
      </body>

      <GoogleAnalytics gaId="G-TDYRFHXYKS" />
    </html>
  );
}
