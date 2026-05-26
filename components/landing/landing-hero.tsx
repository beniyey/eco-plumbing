"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CtaGroup from "./cta-group";
import { trustIconMap } from "./landing-icons";
import { BRAND_NAME } from "@/lib/landing/constants";

const defaultTrustTags: { label: string; icon: keyof typeof trustIconMap }[] = [
  { label: "זמינות מהירה", icon: "zap" },
  { label: "ציוד מתקדם", icon: "camera" },
  { label: "שירות מקצועי", icon: "shield" },
  { label: "פתרונות ללא הרס", icon: "wrench" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.3 + i * 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

export type LandingHeroProps = {
  image: string;
  imageAlt: string;
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  cityLabel?: string;
  trustTags?: { label: string; icon: keyof typeof trustIconMap }[];
  showTrustTags?: boolean;
};

export default function LandingHero({
  image,
  imageAlt,
  badge = BRAND_NAME,
  title,
  titleHighlight,
  subtitle,
  cityLabel,
  trustTags = defaultTrustTags,
  showTrustTags = true,
}: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-primary-sea/8">
      <div
        className="absolute inset-0 bg-gradient-to-tr from-primary-sea/[0.03] via-transparent to-secondary-text/[0.04] pointer-events-none"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -left-[35%] top-20 h-72 w-72 rounded-full border-[28px] border-white/60 md:h-96 md:w-96 circle opacity-60"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-12 top-1/3 h-36 w-36 rounded-full border-[6px] border-secondary-text/25 circle"
        style={{ animationDuration: "6s" }}
        aria-hidden
      />

      <div className="container relative z-10 flex flex-col items-center gap-12 px-4 py-14 md:px-10 md:py-20 lg:flex-row lg:justify-between lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full justify-center lg:w-auto lg:justify-start shrink-0"
        >
          <div className="relative mx-auto flex w-[min(100%,400px)] max-w-[400px] items-center justify-center p-4 sm:p-6 md:p-10">
            <div
              className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(11,93,106,0.14)_0%,rgba(11,93,106,0.05)_40%,transparent_72%)]"
              aria-hidden
            />
            <div
              className="absolute inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_30%_20%,rgba(244,189,20,0.1)_0%,transparent_55%)]"
              aria-hidden
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto"
            >
              <Image
                className="mx-auto block rounded-2xl object-cover aspect-square w-full max-w-[min(calc(100vw-2rem),400px)] shadow-[0_16px_48px_-12px_rgba(11,93,106,0.2)] ring-1 ring-white/80"
                src={image}
                alt={imageAlt}
                width={400}
                height={400}
                priority
              />
            </motion.div>
            <span
              className="circle pointer-events-none absolute right-0 top-2 hidden md:block h-28 w-28 rounded-full border-2 border-secondary-text/30 lg:h-32 lg:w-32"
              aria-hidden
            />
            <span
              className="circle pointer-events-none absolute bottom-4 left-0 hidden md:block h-16 w-16 rounded-full border-2 border-primary-sea/20"
              style={{ animationDuration: "5.5s" }}
              aria-hidden
            />
          </div>
        </motion.div>

        <div className="flex w-full flex-col gap-6 text-center lg:w-[52%] lg:text-right">
          {badge && (
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto inline-block rounded-full border border-primary-sea/10 bg-white/70 px-4 py-1.5 text-sm font-semibold text-primary-sea shadow-sm backdrop-blur-sm lg:mx-0"
            >
              {badge}
            </motion.span>
          )}

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold leading-tight text-primary-text md:text-4xl lg:text-5xl"
          >
            {title}{" "}
            {titleHighlight ? (
              <span className="text-primary-sea">{titleHighlight}</span>
            ) : null}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg leading-relaxed text-gray-600 md:text-xl max-w-xl lg:mr-0 mx-auto"
          >
            {subtitle}
            {cityLabel ? (
              <span className="block mt-2 text-primary-sea font-medium">
                שירות ב{cityLabel}
              </span>
            ) : null}
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible">
            <CtaGroup className="justify-center lg:justify-start" />
          </motion.div>

          {showTrustTags && (
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {trustTags.map(({ label, icon }, i) => {
                const Icon = trustIconMap[icon];
                return (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.3, duration: 0.3 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-sea/10 bg-white/80 px-3.5 py-2 text-sm text-primary-sea shadow-sm backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-secondary-text" />
                    {label}
                  </motion.span>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
