"use client";

import Link from "next/link";
import { FiCalendar, FiClock, FiUser, FiArrowLeft } from "react-icons/fi";

// Mock blog post data
const blogData: Record<string, any> = {
  "1": {
    title: "How to Choose the Right Rice Mill for 5-20 TPD Capacity",
    author: "Rajesh Kumar",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "How-to",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    content: `
      <p>Choosing the right rice mill for your capacity requirements is crucial for the success of your business. This guide will help you make an informed decision for a 5-20 TPD (Tonnes Per Day) rice mill setup.</p>
      
      <h2>Understanding Capacity Requirements</h2>
      <p>Before selecting machinery, you need to understand your actual capacity needs. Consider factors like:</p>
      <ul>
        <li>Daily paddy intake</li>
        <li>Peak season requirements</li>
        <li>Future expansion plans</li>
        <li>Market demand</li>
      </ul>
      
      <h2>Machinery Selection</h2>
      <p>For a 5-20 TPD plant, you'll need:</p>
      <ul>
        <li>Pre-cleaner (2-5 TPH capacity)</li>
        <li>Pneumatic husker (2-5 TPH)</li>
        <li>Paddy separator (2-5 TPH)</li>
        <li>Rice whitener (2-5 TPH)</li>
        <li>Rice polisher (2-5 TPH)</li>
        <li>Grading and sorting equipment</li>
      </ul>
      
      <h2>Cost Considerations</h2>
      <p>Budget planning is essential. Consider not just machinery costs but also:</p>
      <ul>
        <li>Civil works and foundation</li>
        <li>Electrical installation</li>
        <li>Installation and commissioning</li>
        <li>Training and documentation</li>
        <li>Spare parts inventory</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Selecting the right rice mill requires careful planning and expert consultation. Our team can help you design the perfect solution for your needs.</p>
    `,
  },
};

export default function BlogPost({ postId }: { postId: string }) {
  const post = blogData[postId] || blogData["1"];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-primary-200 hover:text-white mb-6 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="bg-primary-700/50 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-primary-100">
            <div className="flex items-center space-x-2">
              <FiUser className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCalendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiClock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <img src="/muhammed-a-mustapha-mHSyB9zlhGQ-unsplash.jpg" alt={post.title} className="w-full h-96 object-cover" />
          </div>
          <div
            className="prose prose-lg max-w-none bg-white rounded-2xl shadow-xl p-8 md:p-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="container-custom pb-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing Your Rice Mill?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our experts can help you design the perfect solution for your capacity and budget.
          </p>
          <Link href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

