"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Rice Mill for 5-20 TPD Capacity",
    excerpt:
      "A comprehensive guide to selecting the perfect rice mill machinery for small to medium scale operations. Learn about capacity planning, machinery selection, and cost considerations.",
    author: "Rajesh Kumar",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "How-to",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 2,
    title: "Case Study: Modernizing a 30 TPD Rice Mill Plant",
    excerpt:
      "Discover how we helped a rice mill in Punjab increase efficiency by 40% through modernization. Learn about the challenges, solutions, and results achieved.",
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Case Study",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 3,
    title: "Top 10 Maintenance Tips for Rice Mill Machinery",
    excerpt:
      "Keep your rice mill running smoothly with these essential maintenance tips. From daily checks to annual overhauls, we cover everything you need to know.",
    author: "Amit Patel",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Maintenance",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 4,
    title: "Understanding Parboiling: Benefits and Process",
    excerpt:
      "Learn about the parboiling process, its benefits for rice quality, and how modern parboiling plants can improve your product value and marketability.",
    author: "Sunita Reddy",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Technology",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 5,
    title: "Rice Mill Industry Trends 2024",
    excerpt:
      "Explore the latest trends shaping the rice mill industry in 2024. From automation to sustainability, discover what's driving innovation in rice processing.",
    author: "Vikram Singh",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Industry News",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
  {
    id: 6,
    title: "Energy Efficiency in Rice Mills: A Complete Guide",
    excerpt:
      "Reduce operational costs and environmental impact with energy-efficient rice mill solutions. Learn about modern technologies and best practices.",
    author: "Meera Nair",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Technology",
    image: "/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg",
  },
];

const categories = ["All", "How-to", "Case Study", "Maintenance", "Technology", "Industry News"];

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Latest insights, tips, and case studies from the rice mill industry
          </p>
        </div>
      </section>

      {/* Categories */}
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

      {/* Blog Posts */}
      <section className="container-custom pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover h-full flex flex-col">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <FiUser className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiClock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

