"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp as FaWhatsappSolid } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Get in touch with our experts for quotes, support, or consultations
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isSubmitted
                      ? "Message Sent Successfully!"
                      : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Office Address */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Address</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FiMapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      keshvapuram kanpur 
                      <br />
                      Kanpur, Uttar Pardesh, 20819
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FiPhone className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <a href="tel:+9118002741355" className="text-gray-700 hover:text-primary-600 transition-colors">
                    1800-274-XXX
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FiMail className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <a
                    href="mailto:sales@ricemillpro.com"
                    className="text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    xyz@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FiClock className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-primary-600 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
              <div className="space-y-4">
                <a
                  href="tel:+9118002741355"
                  className="flex items-center space-x-3 w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/9118002741355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <FaWhatsappSolid className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:sales@ricemillpro.com"
                  className="flex items-center space-x-3 w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors border-2 border-white"
                >
                  <FiMail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <h3 className="font-semibold text-red-900 mb-2">Emergency Support</h3>
              <p className="text-sm text-red-700 mb-3">
                For urgent technical support or breakdown assistance, call our 24/7 helpline:
              </p>
              <a
                href="tel:+9118002741355"
                className="text-red-600 font-bold text-lg hover:text-red-700 transition-colors"
              >
                1800-274-XYZ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.543210!3d17.384567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA0LjQiTiA3OMKwMzInMzUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

