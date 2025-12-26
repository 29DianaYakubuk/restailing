'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '@/data/reviews';
import Link from 'next/link';

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Discover Why Our Customers Love Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don&apos;t just take our word for it. Read what our satisfied
              customers have to say about their experience working with us.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0</span>
              <span className="text-gray-600">Positive Reviews</span>
            </div>

            <Link
              href="/reviews"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              See More Reviews
            </Link>
          </div>

          <div className="relative">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 italic">
                &quot;{currentReview.text}&quot;
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {currentReview.name}
                </p>
                {currentReview.location && (
                  <p className="text-sm text-gray-500">
                    {currentReview.location}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 mt-6 justify-center">
              <button
                onClick={prevReview}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-50"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={nextReview}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:bg-gray-50"
                aria-label="Next review"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-600'
                      : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
