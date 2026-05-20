"use client";

import { motion } from "framer-motion";
import { problemIconMap } from "./landing-icons";

export type Problem = {
  title: string;
  desc: string;
  icon: keyof typeof problemIconMap;
};

const accents = [
  "from-primary-sea/15 to-primary-sea/5 text-primary-sea",
  "from-amber-500/15 to-amber-500/5 text-amber-700",
  "from-slate-500/15 to-slate-500/5 text-slate-600",
  "from-sky-500/15 to-sky-500/5 text-sky-700",
  "from-teal-500/15 to-teal-500/5 text-teal-700",
  "from-rose-500/15 to-rose-500/5 text-rose-700",
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

type Props = { items: Problem[] };

export default function ProblemCards({ items }: Props) {
  return (
    <motion.ul
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {items.map((item, i) => {
        const Icon = problemIconMap[item.icon];
        const accent = accents[i % accents.length];
        return (
          <motion.li
            key={item.title}
            variants={cardVariants}
            className="group flex flex-row-reverse gap-3 items-start rounded-xl border border-primary-sea/8 bg-white p-3.5 text-right shadow-sm hover:border-primary-sea/20 hover:shadow-md transition-[box-shadow,border-color] duration-200"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${accent}`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="text-sm font-bold text-primary-text leading-snug">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {item.desc}
              </p>
            </div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
