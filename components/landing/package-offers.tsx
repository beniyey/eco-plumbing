"use client";

import { motion } from "framer-motion";
import { IconStar } from "./landing-icons";

export type Package = {
  name: string;
  price: string;
  desc: string;
  recommended: boolean;
};

type Props = {
  packages: Package[];
};

function orderForDesktop(items: Package[]): Package[] {
  const featured = items.find((p) => p.recommended);
  const rest = items.filter((p) => !p.recommended);
  const mid = Math.ceil(rest.length / 2);
  return [...rest.slice(0, mid), ...(featured ? [featured] : []), ...rest.slice(mid)];
}

export default function PackageOffers({ packages }: Props) {
  const display = orderForDesktop(packages);

  return (
    <div dir="rtl" className="relative text-right px-4 md:px-2">
      <div className="flex flex-col gap-4 max-w-md mx-auto md:max-w-none md:flex-row md:flex-nowrap md:gap-5 md:overflow-x-auto md:justify-center md:items-stretch md:pb-2 md:pt-2 scrollbar-thin">
        {display.map((pkg) => (
          <motion.article
            key={pkg.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3 }}
            className={`
              flex w-full flex-col rounded-2xl text-right
              ${pkg.recommended ? "order-first md:order-none" : ""}
              ${
                pkg.recommended
                  ? "p-6 bg-gradient-to-br from-primary-sea via-[#0c6573] to-[#084a55] text-white shadow-lg ring-2 ring-secondary-text md:w-[280px] md:shrink-0 md:scale-105"
                  : "p-5 bg-white border border-primary-sea/10 shadow-sm md:w-[200px] md:shrink-0"
              }
            `}
          >
            {pkg.recommended && (
              <span className="inline-flex items-center gap-1.5 self-start mb-3 bg-secondary-text text-primary-text text-xs font-bold px-2.5 py-1 rounded-full">
                <IconStar className="w-3 h-3 text-primary-text" />
                מומלץ
              </span>
            )}
            <h3
              className={`mb-2 font-bold leading-snug ${
                pkg.recommended ? "text-lg text-white" : "text-base text-primary-text"
              }`}
            >
              {pkg.name}
            </h3>
            <p
              className={`mb-3 font-bold ${
                pkg.recommended ? "text-xl text-secondary-text" : "text-lg text-primary-sea"
              }`}
            >
              {pkg.price}
            </p>
            <p
              className={`text-sm leading-relaxed ${
                pkg.recommended ? "text-white/85" : "text-gray-600"
              }`}
            >
              {pkg.desc}
            </p>
            {pkg.recommended && (
              <p className="mt-3 border-t border-white/20 pt-3 text-xs text-white/70">
                הכי מתאים לסתימות חוזרות ואבחון מדויק
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
