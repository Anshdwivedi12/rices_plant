"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTrendingUp, FiClock } from "react-icons/fi";

const stats = [
  { icon: FiAward, number: "1000+", label: "Plants Installed", color: "from-blue-500 to-blue-600" },
  { icon: FiUsers, number: "200+", label: "Team Members", color: "from-green-500 to-green-600" },
  { icon: FiTrendingUp, number: "50+", label: "Years Experience", color: "from-purple-500 to-purple-600" },
  { icon: FiClock, number: "24/7", label: "Support Available", color: "from-orange-500 to-orange-600" },
];

const team = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    bio: "30+ years of experience in rice mill machinery industry. Visionary leader committed to innovation.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    bio: "Expert in plant design and automation. Led 500+ successful installations across India.",
  },
  {
    name: "Amit Patel",
    role: "Head of Installation",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    bio: "20+ years in field operations. Ensures smooth installation and commissioning of every project.",
  },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "ISO 14001:2015", description: "Environmental Management" },
  { name: "OHSAS 18001", description: "Occupational Health & Safety" },
];

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Leading rice mill machinery installation company with 50+ years of excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Established in 1974, we have been at the forefront of rice mill machinery installation and
                supply in India. What started as a small engineering firm has grown into a trusted name
                with 1000+ successful installations across the country.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred
                choice for rice mill owners, from small-scale operations to large industrial plants.
              </p>
              <p>
                We pride ourselves on indigenous manufacturing, experienced installation teams, and
                comprehensive after-sales support that keeps your plant running efficiently for years to
                come.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg"
              alt="Rice mill plant"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide world-class rice mill machinery and installation services at affordable prices,
              helping rice mill owners achieve higher productivity, better quality, and increased
              profitability.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be India's most trusted and innovative rice mill machinery company, recognized for
              excellence in quality, service, and customer satisfaction, while contributing to the growth
              of the rice processing industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the rice mill machinery industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Indigenous Manufacturing",
                description: "Made in India, made for Indian conditions. Our machinery is built to last in tough operating environments.",
              },
              {
                title: "Experienced Teams",
                description: "Our installation and service teams have decades of combined experience in rice mill operations.",
              },
              {
                title: "ISO Certified",
                description: "ISO 9001:2015 certified quality management system ensures consistent quality in every project.",
              },
              {
                title: "Nationwide Presence",
                description: "Service centers and installation teams across India for quick response and local support.",
              },
              {
                title: "Comprehensive Support",
                description: "From consultation to after-sales, we provide end-to-end support throughout your plant's lifecycle.",
              },
              {
                title: "Proven Track Record",
                description: "1000+ successful installations and 50+ years of experience speak for our reliability.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts leading our company to success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality assured and industry recognized
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiAward className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

