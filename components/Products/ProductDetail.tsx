"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiPhone, FaWhatsapp } from "react-icons/fi";
import { FaWhatsapp as FaWhatsappSolid } from "react-icons/fa";

// Mock product data - in real app, fetch from API
const productData: Record<string, any> = {
  "1": {
    name: "Pre-Cleaner",
    category: "Pre-Cleaning",
    description:
      "Our Pre-Cleaner is designed to remove impurities, dust, stones, and metal from paddy before the milling process. Built with high-quality materials and advanced technology for maximum efficiency.",
    capacity: "2-200 TPH",
    power: "2-15 HP",
    material: "Stainless Steel / MS",
    dimensions: "Varies by capacity",
    weight: "500-5000 kg",
    throughput: "2-200 TPH",
    warranty: "1 Year",
    features: [
      "Removes stones, dust, and foreign materials",
      "High efficiency cleaning system",
      "Low power consumption",
      "Easy maintenance",
      "Durable construction",
      "Customizable capacity",
    ],
    applications: [
      "Small scale rice mills (2-10 TPH)",
      "Medium scale rice mills (10-50 TPH)",
      "Large scale rice mills (50-200 TPH)",
    ],
    price: "Starting from ₹2,50,000",
  },
};

export default function ProductDetail({ productId }: { productId: string }) {
  const product = productData[productId] || productData["1"];
  const [activeTab, setActiveTab] = useState("specifications");

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom">
          <nav className="text-sm mb-4">
            <Link href="/products" className="hover:text-primary-200">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
          <p className="text-xl text-primary-100 mt-2 max-w-2xl">{product.description}</p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Image */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg"
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex border-b border-gray-200 mb-6">
                {[
                  { id: "specifications", label: "Specifications" },
                  { id: "features", label: "Features" },
                  { id: "applications", label: "Applications" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-primary-600 text-primary-600"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {activeTab === "specifications" && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-3 px-4 font-semibold text-gray-700">Capacity</td>
                          <td className="py-3 px-4 text-gray-900">{product.capacity}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-gray-700">Motor Power</td>
                          <td className="py-3 px-4 text-gray-900">{product.power}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-gray-700">Material</td>
                          <td className="py-3 px-4 text-gray-900">{product.material}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-gray-700">Dimensions</td>
                          <td className="py-3 px-4 text-gray-900">{product.dimensions}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-gray-700">Weight</td>
                          <td className="py-3 px-4 text-gray-900">{product.weight}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-gray-700">Throughput</td>
                          <td className="py-3 px-4 text-gray-900">{product.throughput}</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-gray-700">Warranty</td>
                          <td className="py-3 px-4 text-gray-900">{product.warranty}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "features" && (
                  <ul className="space-y-3">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "applications" && (
                  <ul className="space-y-3">
                    {product.applications.map((app: string, idx: number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-primary-600 mt-1">•</span>
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pricing</h3>
                <p className="text-3xl font-bold text-primary-600">{product.price}</p>
                <p className="text-sm text-gray-500 mt-2">*Price varies based on capacity and specifications</p>
              </div>

              <div className="space-y-4 mb-6">
                <Link
                  href="/contact"
                  className="w-full btn-primary text-center block"
                >
                  Request Quote
                </Link>
                <a
                  href="tel:+9118002741355"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/9118002741355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors"
                >
                  <FaWhatsappSolid className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Downloads</h4>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <FiDownload className="w-5 h-5" />
                    <span>Product Datasheet (PDF)</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <FiDownload className="w-5 h-5" />
                    <span>Installation Manual (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <Link key={idx} href={`/products/${idx}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg"
                    alt="Related product"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">Related Product {idx}</h3>
                    <p className="text-sm text-gray-600 mt-1">View details →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

