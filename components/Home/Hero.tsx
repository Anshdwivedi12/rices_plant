"use client";

import { motion } from "framer-motion";
import { FiPlay, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";


export default function Hero() {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-section");
    videoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <img
          src="/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg"
          alt="Rice mill machinery"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Contact Buttons */}
      <div className="absolute top-24 right-4 md:right-8 z-30 flex flex-col space-y-3">
        <a
          href="tel:+9118002741355"
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors group"
        >
          <FiPhone className="w-5 h-5 text-primary-600" />
          <span className="font-semibold text-gray-900">Call Now</span>
        </a>
        <a
          href="https://wa.me/9118002741355"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-[#25D366] px-4 py-2 rounded-full shadow-lg hover:bg-[#20BA5A] transition-colors group"
        >
          <FaWhatsappSolid className="w-5 h-5 text-white" />
          <span className="font-semibold text-white">WhatsApp</span>
        </a>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            End-to-End Rice Mill Solutions
            <br />
            <span className="text-primary-400">Supply, Install & Commission</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Turnkey rice-milling plants from 2 TPH to 200 TPD. Expert installation, local support, and reliable machinery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Quote
            </Link>
            <button
              onClick={scrollToVideo}
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
            >
              <FiPlay className="w-5 h-5" />
              <span>Watch Video</span>
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "1000+", label: "Plants Installed" },
            { number: "50+", label: "Years Experience" },
            { number: "200+", label: "Team Members" },
            { number: "24/7", label: "Support" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

