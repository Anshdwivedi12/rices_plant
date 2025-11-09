import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RM</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Rice Mill Pro</h3>
                <p className="text-xs">Machinery & Installation</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Leading provider of rice mill machinery installation, supply, and commissioning services across India. Trusted by 1000+ clients.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-primary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm hover:text-primary-400 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="/brochure.pdf" className="text-sm hover:text-primary-400 transition-colors">
                  Download Brochure
                </a>
              </li>
              <li>
                <Link href="/support" className="text-sm hover:text-primary-400 transition-colors">
                  Support Portal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-sm">
                  4, keshvapuram kanpur ,<br />
                  Nacharam, Kanpur Uttar Pardesh 208019
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:+918112721689"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  8112721689
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:sales@ricemillpro.com"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  anshdubeyjii@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/9118002741355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-2">Subscribe to Newsletter</h4>
            <p className="text-sm mb-4">Get updates on new products and industry insights.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Rice Mill Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

