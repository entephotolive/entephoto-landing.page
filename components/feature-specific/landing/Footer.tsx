"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#f5f1eb] border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-center justify-between gap-y-6 gap-x-4">
        {/* LEFT */}
        <div className="flex flex-col gap-3 order-1 items-center md:items-start">
          <a href="#home" className="relative block w-40 md:w-56 h-12 hover:scale-105 transition-transform scale-125 origin-left">
            <Image
              src="/logo.png"
              alt="Ente Photo logo"
              fill
              className="object-contain object-center md:object-left"
            />
          </a>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5 text-gray-600 order-3 md:order-2 lg:order-3">
          <a
            href="https://www.instagram.com/_entephoto_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 hover:scale-110 transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://x.com/entephoto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black hover:scale-110 transition"
          >
            <FaXTwitter size={18} />
          </a>

          <a
            href="https://www.linkedin.com/company/114394331/photographer/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 hover:scale-110 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://wa.me/918075393896"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 hover:scale-110 transition"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* CONTACT TEXT */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-gray-600 text-sm w-full lg:w-auto order-2 md:order-3 lg:order-2 lg:flex-1">
          <a href="tel:+918075393896" className="hover:text-purple-600 transition">
            +91 8075393896
          </a>
          <span className="text-gray-300 hidden sm:inline">•</span>

          <a href="tel:+918129415244" className="hover:text-purple-600 transition">
            +91 8129415244
          </a>
          <span className="text-gray-300 hidden sm:inline">•</span>
          
          <a href="tel:+917034137000" className="hover:text-purple-600 transition">
            +91 7034137000
          </a>
          <span className="text-gray-300 hidden lg:inline">•</span>

          <a
            href="mailto:entephoto.live@gmail.com"
            className="hover:text-purple-600 transition"
          >
            entephoto@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
