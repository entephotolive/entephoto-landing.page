"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Instant Photo Delivery", href: "/instant-photo-delivery" },
  { label: "Live Event Photo Sharing", href: "/live-event-photo-sharing" },
  { label: "Wedding Photo Sharing", href: "/wedding-photo-sharing" },
  { label: "Event Photo Gallery", href: "/event-photo-gallery" },
  { label: "Photo Delivery for Photographers", href: "/photo-delivery-for-photographers" },
];

const knowledgeLinks = [
  { label: "AI Face Recognition", href: "/knowledge/ai-face-recognition" },
  { label: "Face Recognition Photo Search", href: "/knowledge/face-recognition-photo-search" },
  { label: "Real-Time Photo Sharing", href: "/knowledge/real-time-photo-sharing" },
  { label: "Camera to Phone Transfer", href: "/knowledge/camera-to-phone-photo-transfer" },
  { label: "Event Photo Management", href: "/knowledge/event-photo-management" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f1eb] border-t border-gray-200">
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand col */}
        <div className="flex flex-col gap-4">
          <a href="/landing" className="relative block w-40 md:w-56 h-12 hover:scale-105 transition-transform scale-125 origin-left">
            <Image
              src="/logo.png"
              alt="Ente Photo logo"
              fill
              className="object-contain object-left"
            />
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            AI-powered instant photo delivery for events. Every guest gets their memories — privately and instantly.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-4 text-gray-500 mt-1">
            <a href="https://www.instagram.com/_entephoto_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition">
              <FaInstagram size={18} />
            </a>
            <a href="https://x.com/entephoto" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:scale-110 transition">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.linkedin.com/company/114394331/photographer/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:scale-110 transition">
              <FaLinkedin size={18} />
            </a>
            <a href="https://wa.me/918075393896" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 hover:scale-110 transition">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* Quick links col */}
        <div>
          <h3 className="font-bold text-sm text-[#1a1a2e] mb-4 uppercase tracking-wide">Features</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Knowledge hub col */}
        <div>
          <h3 className="font-bold text-sm text-[#1a1a2e] mb-4 uppercase tracking-wide">
            <Link href="/knowledge" className="hover:text-purple-600 transition-colors">Knowledge Hub</Link>
          </h3>
          <ul className="space-y-2.5">
            {knowledgeLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact col */}
        <div>
          <h3 className="font-bold text-sm text-[#1a1a2e] mb-4 uppercase tracking-wide">Contact</h3>
          <ul className="space-y-2.5 text-sm text-gray-500">
            <li>
              <a href="tel:+918075393896" className="hover:text-purple-600 transition-colors">+91 8075393896</a>
            </li>
            <li>
              <a href="tel:+918129415244" className="hover:text-purple-600 transition-colors">+91 8129415244</a>
            </li>
            <li>
              <a href="tel:+917034137000" className="hover:text-purple-600 transition-colors">+91 7034137000</a>
            </li>
            <li>
              <a href="mailto:entephoto.live@gmail.com" className="hover:text-purple-600 transition-colors">entephoto@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Entephoto. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/pricing" className="hover:text-purple-600 transition-colors">Pricing</Link>
            <Link href="/knowledge" className="hover:text-purple-600 transition-colors">Knowledge Hub</Link>
            <Link href="/landing#contact" className="hover:text-purple-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

