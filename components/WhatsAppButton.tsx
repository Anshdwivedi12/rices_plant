"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  // Replace with actual WhatsApp number (format: country code + number without + or spaces)
  const whatsappNumber = "9118002741355"; // Example: 9118002741355 for India
  const message = encodeURIComponent("Hello! I'm interested in your rice mill machinery services.");

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
      <span className="absolute -top-12 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </motion.button>
  );
}

