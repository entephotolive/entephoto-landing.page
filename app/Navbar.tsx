"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [darkNav, setDarkNav] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setDarkNav(window.scrollY < heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition ${
          darkNav ? "text-white" : "bg-white text-black shadow-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-3 font-semibold">
            <img src="/logo.png" className="w-8 h-8" />
            <span>Ente Photo</span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how">How</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Desktop Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className={`hidden md:block px-5 py-2 rounded-full text-sm ${
              darkNav ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            Contact
          </motion.a>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between"
          >

            {/* Top */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <div className="flex items-center gap-3 font-semibold">
                <img src="/logo.png" className="w-8 h-8" />
                <span>Ente Photo</span>
              </div>

              <button
                className="text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-8 px-8 text-lg mt-10">
              {links.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:opacity-70"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom Button */}
            <div className="px-6 pb-10">
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center py-3 bg-black text-white rounded-xl"
              >
                Get in touch
              </motion.a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "#contact" },
];