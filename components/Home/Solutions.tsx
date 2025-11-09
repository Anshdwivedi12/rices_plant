"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiLayers,
  FiPackage,
  FiDroplet,
  FiCpu,
  FiTool,
  FiRefreshCw,
} from "react-icons/fi";

const solutions = [
  {
    icon: FiLayers,
    title: "Turnkey Plant Setup",
    description: "Complete end-to-end rice mill installation from design to commissioning.",
    href: "/services/turnkey-installation",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FiPackage,
    title: "Machineries",
    description: "Premium rice mill machinery: cleaners, huskers, polishers, graders, and more.",
    href: "/products",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FiDroplet,
    title: "Parboiling & Drying",
    description: "Advanced parboiling and drying solutions for enhanced rice quality.",
    href: "/services/parboiling-drying",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FiCpu,
    title: "Automation & Controls",
    description: "PLC, SCADA, and smart control systems for efficient plant operations.",
    href: "/services/automation",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FiTool,
    title: "Spare Parts & Maintenance",
    description: "Genuine spare parts and comprehensive maintenance support services.",
    href: "/services/maintenance",
    color: "from-red-500 to-red-600",
  },
  {
    icon: FiRefreshCw,
    title: "Plant Modernization",
    description: "Upgrade your existing plant with modern machinery and technology.",
    href: "/services/modernization",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function Solutions() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive rice mill solutions tailored to your production needs and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link href={solution.href}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full card-hover group">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <span className="text-primary-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

