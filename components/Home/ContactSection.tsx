"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiUpload, FiSend } from "react-icons/fi";

const steps = [
  { number: 1, title: "We receive your enquiry", description: "Our team reviews your requirements" },
  { number: 2, title: "Site survey/scope definition", description: "We visit your site and finalize scope" },
  { number: 3, title: "Proposal & quotation", description: "Detailed proposal with pricing" },
  { number: 4, title: "Project kick-off", description: "We begin installation and setup" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    capacity: "",
    projectType: "",
    message: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        capacity: "",
        projectType: "",
        message: "",
        preferredTime: "",
      });
    }, 3000);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you within 48 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-2">
                      Required Capacity (TPD/TPH) *
                    </label>
                    <input
                      type="text"
                      id="capacity"
                      name="capacity"
                      required
                      placeholder="e.g., 10 TPD"
                      value={formData.capacity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="new">New Plant</option>
                      <option value="expansion">Expansion</option>
                      <option value="modernization">Modernization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    placeholder="e.g., Morning 9-12 PM"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="file" className="hidden" id="file-upload" />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center space-x-2 text-sm text-gray-600 cursor-pointer hover:text-primary-600"
                    >
                      <FiUpload className="w-5 h-5" />
                      <span>Upload file (optional, max 10MB)</span>
                    </label>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FiCheck className="w-5 h-5" />
                      <span>Submitted Successfully!</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We reply within 48 hours. Your information is secure and will not be shared.
                </p>
              </div>
            </form>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <a
                  href="/brochure.pdf"
                  download
                  className="block w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Download Brochure
                </a>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-800 transition-colors border-2 border-white"
                >
                  Schedule Site Survey
                </a>
                <a
                  href="https://wa.me/9118002741355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#20BA5A] transition-colors"
                >
                  WhatsApp Quick Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

