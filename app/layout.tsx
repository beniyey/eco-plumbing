import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import 'animate.css';
import Footer from "@/components/footer";
import "animate.css/animate.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" className="bg-background-primary-light">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
