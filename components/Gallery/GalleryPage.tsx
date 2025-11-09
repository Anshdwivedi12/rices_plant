"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiFilter } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    category: "Projects",
    title: "30 TPD Rice Mill Plant",
    location: "Punjab",
    date: "2024",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 2,
    category: "Machinery",
    title: "Pre-Cleaner Installation",
    location: "Haryana",
    date: "2024",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 3,
    category: "Installation",
    title: "Plant Setup in Progress",
    location: "Gujarat",
    date: "2024",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 4,
    category: "Projects",
    title: "50 TPD Modern Plant",
    location: "Telangana",
    date: "2023",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 5,
    category: "Machinery",
    title: "Color Sorter Setup",
    location: "Karnataka",
    date: "2024",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 6,
    category: "Installation",
    title: "Commissioning Process",
    location: "Uttar Pradesh",
    date: "2024",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 7,
    category: "Projects",
    title: "100 TPD Complete Plant",
    location: "Andhra Pradesh",
    date: "2023",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 8,
    category: "Machinery",
    title: "Polisher Assembly",
    location: "Tamil Nadu",
    date: "2024",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 9,
    category: "Installation",
    title: "Final Plant View",
    location: "West Bengal",
    date: "2024",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
];

const categories = ["All", "Projects", "Machinery", "Installation"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Explore our completed projects, machinery installations, and plant photos
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container-custom py-8">
        <div className="flex flex-wrap gap-3 justify-center">
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
      </section>

      {/* Gallery Grid */}
      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-xs font-semibold text-primary-300 mb-1">{item.category}</div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">
                      {item.location} • {item.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <FiX className="w-8 h-8" />
              </button>
              {(() => {
                const item = galleryItems.find((i) => i.id === selectedImage);
                if (!item) return null;
                return (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="mt-4 text-white text-center">
                      <div className="text-sm text-primary-300 mb-2">{item.category}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">
                        {item.location} • {item.date}
                      </p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

