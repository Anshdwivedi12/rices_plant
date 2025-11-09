"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiFilter, FiX, FiSearch } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Pre-Cleaner",
    category: "Pre-Cleaning",
    capacity: "2-200 TPH",
    power: "2-15 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Removes impurities, dust, stones, and metal from paddy before milling.",
  },
  {
    id: 2,
    name: "Grain Classifier",
    category: "Pre-Cleaning",
    capacity: "2-200 TPH",
    power: "1-10 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Classifies grains by size and removes foreign materials.",
  },
  {
    id: 3,
    name: "Paddy Cleaner",
    category: "Pre-Cleaning",
    capacity: "2-200 TPH",
    power: "2-15 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Advanced cleaning system for paddy with high efficiency.",
  },
  {
    id: 4,
    name: "Pneumatic Husker",
    category: "Husking",
    capacity: "2-200 TPH",
    power: "5-30 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Efficient husking machine with pneumatic system for optimal performance.",
  },
  {
    id: 5,
    name: "Husk Aspirator",
    category: "Husking",
    capacity: "2-200 TPH",
    power: "3-20 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Removes husk and dust from paddy after husking process.",
  },
  {
    id: 6,
    name: "Paddy Separator",
    category: "Separation",
    capacity: "2-200 TPH",
    power: "2-15 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Separates paddy from brown rice with high precision.",
  },
  {
    id: 7,
    name: "Rice Whitener",
    category: "Polishing",
    capacity: "2-200 TPH",
    power: "5-40 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Primary polishing machine for rice whitening.",
  },
  {
    id: 8,
    name: "Rice Polisher",
    category: "Polishing",
    capacity: "2-200 TPH",
    power: "5-40 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Final polishing machine for premium rice quality.",
  },
  {
    id: 9,
    name: "Rice Grader",
    category: "Grading",
    capacity: "2-200 TPH",
    power: "2-15 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Grades rice by length, width, and thickness.",
  },
  {
    id: 10,
    name: "Color Sorter",
    category: "Grading",
    capacity: "1-50 TPH",
    power: "3-25 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Advanced color sorting technology for premium rice quality.",
  },
  {
    id: 11,
    name: "Parboiling Plant",
    category: "Parboiling",
    capacity: "5-200 TPD",
    power: "20-200 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Complete parboiling solution for enhanced rice quality.",
  },
  {
    id: 12,
    name: "Dryer",
    category: "Drying",
    capacity: "5-200 TPD",
    power: "15-150 HP",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
    description: "Efficient drying system for parboiled rice.",
  },
];

const categories = ["All", "Pre-Cleaning", "Husking", "Separation", "Polishing", "Grading", "Parboiling", "Drying"];

export default function ProductsListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Complete range of rice mill machinery for every stage of the milling process
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FiFilter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/products/${product.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover h-full flex flex-col">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Capacity:</span>
                        <span className="font-medium text-gray-900">{product.capacity}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Power:</span>
                        <span className="font-medium text-gray-900">{product.power}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 text-center px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 text-center px-4 py-2 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
}

