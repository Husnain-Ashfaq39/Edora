"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-900 pt-16 pb-12 border-t border-gray-200 dark:border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold text-[#2A3546] dark:text-white mb-4">Edora</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Empowering learners worldwide with cutting-edge educational content and tools.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#5D87FF] hover:text-[#4D77EF] transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-[#5D87FF] hover:text-[#4D77EF] transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-[#5D87FF] hover:text-[#4D77EF] transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-[#5D87FF] hover:text-[#4D77EF] transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="text-[#5D87FF] hover:text-[#4D77EF] transition-colors">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Links - Products */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-[#2A3546] dark:text-white mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Online Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Live Workshops
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Interactive Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Certification Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Learning Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Company */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-[#2A3546] dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Support */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-[#2A3546] dark:text-white mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12">
          <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl">
            <h3 className="text-lg font-bold text-[#2A3546] dark:text-white mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Get the latest updates, news, and special offers delivered directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-200 dark:border-neutral-700 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#5D87FF]"
              />
              <button className="px-6 py-3 bg-[#5D87FF] text-white rounded-lg hover:bg-[#4D77EF] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Edora. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#5D87FF] dark:hover:text-[#5D87FF] text-sm">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 