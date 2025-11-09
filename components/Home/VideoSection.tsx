"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiX } from "react-icons/fi";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="video-section" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story — How We Build Efficient Rice Mills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we transform paddy into premium rice with world-class machinery and expert installation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Video Thumbnail */}
          <div
            className="relative aspect-video bg-gray-900 cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src="/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg"
              alt="Rice mill video thumbnail"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <FiPlay className="w-10 h-10 text-primary-600 ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">Turning Paddy into Progress</p>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <FiX className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/1a5nyrMtRsk?start=13&autoplay=1"
                  title="Rice Mill Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <a href="/contact" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Connect with us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

