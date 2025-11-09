"use client";

import { motion } from "framer-motion";
import {
  FiSearch,
  FiLayout,
  FiPackage,
  FiTool,
  FiSettings,
  FiBookOpen,
  FiHeadphones,
} from "react-icons/fi";

const processSteps = [
  {
    icon: FiSearch,
    title: "Consultation & Feasibility Survey",
    description:
      "We visit your site to evaluate capacity, utilities, and layout constraints to create the optimal plan.",
    color: "bg-blue-500",
  },
  {
    icon: FiLayout,
    title: "Plant Design & Layout",
    description:
      "Our engineers create detailed CAD drawings and 3D layouts optimized for your space and production goals.",
    color: "bg-purple-500",
  },
  {
    icon: FiPackage,
    title: "Machinery Supply",
    description:
      "We supply premium equipment: Pre-cleaners, Huskers, Separators, Polishers, Graders, and Packaging systems.",
    color: "bg-green-500",
  },
  {
    icon: FiTool,
    title: "Civil & Foundation Works",
    description:
      "Expert civil engineering and foundation work to ensure your machinery is installed on solid ground.",
    color: "bg-orange-500",
  },
  {
    icon: FiSettings,
    title: "Installation & Commissioning",
    description:
      "Professional installation by certified technicians followed by thorough testing and commissioning.",
    color: "bg-red-500",
  },
  {
    icon: FiBookOpen,
    title: "Training & Handover",
    description:
      "Comprehensive operator training and detailed manuals to ensure your team can run the plant efficiently.",
    color: "bg-indigo-500",
  },
  {
    icon: FiHeadphones,
    title: "After-sales Support & Spare Parts",
    description:
      "Ongoing maintenance support, AMC options, and genuine spare parts to keep your plant running smoothly.",
    color: "bg-teal-500",
  },
];

export default function ProcessOverview() {
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
            Solutions for Every Step
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial consultation to ongoing support, we guide you through the complete rice mill installation lifecycle.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 transform -translate-x-1/2" />

          <div className="space-y-12">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 lg:w-5/12">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow card-hover">
                      <div className="flex items-start space-x-4">
                        <div className={`${step.color} p-3 rounded-lg text-white flex-shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="text-2xl font-bold">{idx + 1}</span>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden lg:block flex-1 lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/services"
            className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Learn more about our services →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

