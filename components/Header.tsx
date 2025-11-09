"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    category: "Pre-Cleaning Machines",
    items: [
      { name: "Pre-Cleaner", href: "/products/pre-cleaner" },
      { name: "Grain Classifier", href: "/products/grain-classifier" },
      { name: "Paddy Cleaner", href: "/products/paddy-cleaner" },
    ],
  },
  {
    category: "Husking & Shelling",
    items: [
      { name: "Pneumatic Husker", href: "/products/pneumatic-husker" },
      { name: "Husk Aspirator", href: "/products/husk-aspirator" },
    ],
  },
  {
    category: "Separators",
    items: [
      { name: "Paddy Separator", href: "/products/paddy-separator" },
    ],
  },
  {
    category: "Polishing Machines",
    items: [
      { name: "Rice Whitener", href: "/products/rice-whitener" },
      { name: "Rice Polisher", href: "/products/rice-polisher" },
    ],
  },
  {
    category: "Grading Machines",
    items: [
      { name: "Rice Grader", href: "/products/rice-grader" },
      { name: "Color Sorter", href: "/products/color-sorter" },
    ],
  },
  {
    category: "Parboiling & Drying",
    items: [
      { name: "Parboiling Plant", href: "/products/parboiling-plant" },
      { name: "Dryer", href: "/products/dryer" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Rice Mill Pro</h1>
              <p className="text-xs text-gray-600">Machinery & Installation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                pathname === "/" ? "text-primary-600" : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Home
            </Link>
            
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-primary-600 transition-colors">
                <span>Our Products</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {products.map((group, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                            {group.category}
                          </h3>
                          <ul className="space-y-2">
                            {group.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        href="/products"
                        className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                      >
                        View All Products →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/services"
              className={`font-medium transition-colors ${
                pathname === "/services" ? "text-primary-600" : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                pathname === "/about" ? "text-primary-600" : "text-gray-700 hover:text-primary-600"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`font-medium transition-colors ${
                pathname === "/blog" ? "text-primary-600" : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/gallery"
              className={`font-medium transition-colors ${
                pathname === "/gallery" ? "text-primary-600" : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                pathname === "/contact" ? "text-primary-600" : "text-gray-700 hover:text-primary-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+9118002741355"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <FiPhone className="w-5 h-5" />
              <span className="font-medium">1800-274-1355</span>
            </a>
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="container-custom py-4 space-y-4">
              <Link href="/" className="block font-medium text-gray-700 hover:text-primary-600">
                Home
              </Link>
              <div>
                <button
                  className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-primary-600"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <span>Our Products</span>
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {products.map((group, idx) => (
                      <div key={idx} className="mt-3">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">
                          {group.category}
                        </h4>
                        {group.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-primary-600 py-1"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/services" className="block font-medium text-gray-700 hover:text-primary-600">
                Services
              </Link>
              <Link href="/about" className="block font-medium text-gray-700 hover:text-primary-600">
                About Us
              </Link>
              <Link href="/blog" className="block font-medium text-gray-700 hover:text-primary-600">
                Blogs
              </Link>
              <Link href="/gallery" className="block font-medium text-gray-700 hover:text-primary-600">
                Gallery
              </Link>
              <Link href="/contact" className="block font-medium text-gray-700 hover:text-primary-600">
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+9118002741355"
                  className="flex items-center space-x-2 text-gray-700 font-medium"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>1800-274-1355</span>
                </a>
                <Link href="/contact" className="btn-primary block text-center">
                  Request Quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

