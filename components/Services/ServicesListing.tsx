"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiLayers,
  FiLayout,
  FiPackage,
  FiCpu,
  FiDroplet,
  FiSettings,
  FiBookOpen,
  FiTool,
} from "react-icons/fi";

const services = [
  {
    icon: FiLayers,
    title: "Turnkey Plant Installation",
    description:
      "Complete end-to-end rice mill installation from design to commissioning. We handle everything including civil works, electrical, utilities, and machinery setup.",
    href: "/services/turnkey-installation",
    features: [
      "Site survey and feasibility study",
      "Complete civil and foundation works",
      "Electrical and utility installation",
      "Machinery installation and setup",
      "Testing and commissioning",
      "Training and handover",
    ],
    timeline: "8-16 weeks",
  },
  {
    icon: FiLayout,
    title: "Plant Design & Layout",
    description:
      "Expert engineering services for optimal plant layout. We create detailed CAD drawings, 3D layouts, and material handling solutions tailored to your space.",
    href: "/services/plant-design",
    features: [
      "CAD drawings and 3D modeling",
      "Material flow optimization",
      "Space utilization planning",
      "Utility planning",
      "Structural design",
      "Compliance and safety",
    ],
    timeline: "2-4 weeks",
  },
  {
    icon: FiPackage,
    title: "Machinery Supply",
    description:
      "Premium OEM equipment and retrofits for all stages of rice milling. We source and supply the best machinery from trusted manufacturers.",
    href: "/services/machinery-supply",
    features: [
      "OEM equipment supply",
      "Custom machinery solutions",
      "Quality assurance",
      "On-time delivery",
      "Installation support",
      "Warranty coverage",
    ],
    timeline: "4-12 weeks",
  },
  {
    icon: FiCpu,
    title: "Automation & Control Systems",
    description:
      "Modern PLC, SCADA, and smart control systems for efficient plant operations. Reduce manual intervention and improve productivity.",
    href: "/services/automation",
    features: [
      "PLC programming",
      "SCADA systems",
      "Sensor integration",
      "Line monitoring",
      "Remote monitoring",
      "Data analytics",
    ],
    timeline: "4-8 weeks",
  },
  {
    icon: FiDroplet,
    title: "Parboiling & Drying Solutions",
    description:
      "Advanced parboiling and drying systems for enhanced rice quality. Complete solutions from design to installation.",
    href: "/services/parboiling-drying",
    features: [
      "Parboiling plant design",
      "Drying system installation",
      "Temperature control",
      "Energy efficient systems",
      "Quality optimization",
      "Maintenance support",
    ],
    timeline: "6-10 weeks",
  },
  {
    icon: FiSettings,
    title: "Erection & Commissioning",
    description:
      "Professional installation and commissioning services by certified technicians. We ensure your plant is ready for production.",
    href: "/services/commissioning",
    features: [
      "Expert installation team",
      "Equipment alignment",
      "System integration",
      "Performance testing",
      "Quality checks",
      "Documentation",
    ],
    timeline: "2-6 weeks",
  },
  {
    icon: FiBookOpen,
    title: "Training & Operator Manuals",
    description:
      "Comprehensive training programs and detailed manuals to ensure your team can operate and maintain the plant efficiently.",
    href: "/services/training",
    features: [
      "Operator training",
      "Maintenance training",
      "Safety protocols",
      "Troubleshooting guides",
      "Video tutorials",
      "On-site support",
    ],
    timeline: "1-2 weeks",
  },
  {
    icon: FiTool,
    title: "AMC & Spare Parts Support",
    description:
      "Annual Maintenance Contracts and genuine spare parts to keep your plant running smoothly. 24/7 support available.",
    href: "/services/maintenance",
    features: [
      "Annual maintenance contracts",
      "Genuine spare parts",
      "24/7 support",
      "Preventive maintenance",
      "Emergency repairs",
      "Parts inventory management",
    ],
    timeline: "Ongoing",
  },
];

export default function ServicesListing() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Comprehensive rice mill services from consultation to ongoing support
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full card-hover group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Timeline:</span> {service.timeline}
                      </p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="text-primary-600 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="text-primary-600 font-semibold group-hover:translate-x-2 inline-block transition-transform">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts for a free consultation and site survey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              Request Site Survey
            </Link>
            <a
              href="tel:+9118002741355"
              className="btn-secondary bg-primary-700 text-white border-white hover:bg-primary-800"
            >
              Call: 1800-274-1355
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

