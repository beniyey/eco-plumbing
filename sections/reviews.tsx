"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const imageCount = 4;
const imageBaseUrl = "/reviews"; // התמונות ב־public/reviews

const ReviewsSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageCount);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % imageCount);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const imgVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 w-full">
      <h2 className="text-3xl font-bold text-pink-600 m-auto text-center mb-8">לקוחות מדרג ממליצים</h2>

      <div
        className="relative overflow-hidden rounded-lg shadow-lg bg-white"
        style={{
          height: "300px", // גובה קבוע כדי למנוע קפיצות
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imgVariants}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full flex justify-center items-center"
          >
            <Image
              src={`${imageBaseUrl}/${current + 1}.png`}
              alt={`Review ${current + 1}`}
              width={800}
              height={500}
              className="object-contain max-h-full max-w-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ניווט */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          הקודם
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
        >
          הבא
        </button>
      </div>

      {/* נקודות */}
      <div className="flex justify-center gap-2 mt-4">
        {[...Array(imageCount)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-yellow-500" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;
