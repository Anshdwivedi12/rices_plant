"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Kumar",
    designation: "Managing Director",
    company: "Golden Grains Ltd.",
    location: "Punjab",
    rating: 5,
    quote:
      "They delivered our 30 TPD plant on time and trained our staff. Support has been excellent. The machinery quality is outstanding and we've seen minimal breakdowns.",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    name: "Priya Sharma",
    designation: "Owner",
    company: "Sharma Rice Mills",
    location: "Haryana",
    rating: 5,
    quote:
      "Excellent service from start to finish. The team was professional, and the installation was completed without any delays. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "Amit Patel",
    designation: "CEO",
    company: "Patel Agro Industries",
    location: "Gujarat",
    rating: 5,
    quote:
      "We've been running our 50 TPD plant for 2 years now. The after-sales support is top-notch, and spare parts are always available when needed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    name: "Sunita Reddy",
    designation: "Director",
    company: "Reddy Rice Processing",
    location: "Telangana",
    rating: 5,
    quote:
      "The modernization of our existing plant exceeded expectations. Production efficiency increased by 40% and quality improved significantly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    name: "Vikram Singh",
    designation: "Managing Partner",
    company: "Singh Rice Mill",
    location: "Uttar Pradesh",
    rating: 5,
    quote:
      "Best investment we made. The turnkey installation was smooth, and the team guided us through every step. Our ROI was achieved in just 18 months.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    name: "Meera Nair",
    designation: "Operations Head",
    company: "Nair Grains Pvt. Ltd.",
    location: "Kerala",
    rating: 5,
    quote:
      "Professional team, quality machinery, and excellent customer service. They truly understand the rice milling business and deliver solutions that work.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by 1000+ rice mill owners across India. Here's what our clients have to say.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="relative mb-6">
                    <FaQuoteLeft className="w-12 h-12 text-primary-300 absolute -top-2 -left-2" />
                    <p className="text-lg text-gray-700 relative z-10 italic">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].designation}, {testimonials[currentIndex].company}
                    </p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-primary-600 w-8" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

