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

export const metadata: Metadata = {
  title: "אקו - שירותי אינסטלציה",
  description: "שירותי אינסטלציה מתקדמים בכל אזור השרון, זמינות 24/7, תיקון נזילות, פתיחת סתימות, החלפת צנרת ועוד.",
  keywords: [
    "אינסטלטור",
    "תיקון נזילות",
    "פתיחת סתימות",
    "אינסטלציה",
    "תיקון צנרת",
    "תיקוני אל הרס",
    "צילום קווי ביוב",
  ],
  icons: [
    "logo.svg"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"bg-background-primary-light"}>
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
    </html>
  );
}
