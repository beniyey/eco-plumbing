"use client";
import React, { useState } from "react";
import reviews from "@/data/reviews.json";
import { outlinedButton } from "@/components/buttons";
import Image from "next/image";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const review = reviews[currentIndex];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="container py-24 lg:py-32">
      <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between p-10">
          {/* Review Text & Controls */}
          <div className="md:w-1/2 flex flex-col justify-center items-end gap-6 text-right">
            {/* Animated review content */}
            <div className="transition-opacity duration-500" key={currentIndex}>
              <p className="text-primary-sea text-lg">{review.name}</p>
              <p className="text-xl font-bold italic">"{review.review}"</p>
              {/* Star rating (static example: 5 stars) */}
              <div className="flex flex-row gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-yellow-600"
                    viewBox="0 0 47.94 47.94"
                  >
                    <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex flex-row gap-4">
              <button
                onClick={prevReview}
                className={`${outlinedButton} px-4 py-2`}
              >
                הקודם
              </button>
              <button
                onClick={nextReview}
                className={`${outlinedButton} px-4 py-2`}
              >
                הבא
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex flex-row gap-2 mt-4">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? "bg-primary-sea" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Review Avatar/Image */}
          <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
            <Image
              src="/images/avatar-portrait-svgrepo-com.svg"
              alt="an image of an avatar"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
