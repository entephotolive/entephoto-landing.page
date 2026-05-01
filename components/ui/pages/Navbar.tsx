"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  
];

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          darkNav
            ? "text-white"
            : "bg-gradient-to-r from-[#f6f2ff] via-[#fff3f0] to-[#eef4ff] backdrop-blur-md text-[#1f2937]"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 font-semibold text-[#1f2937]">
            <img src="/logo.png" className="w-8 h-8" />
            <span>Ente Photo</span>
          </a>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-8 text-sm items-center">
            {links.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-orange-600 hover:text-black transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#build"
            className="hidden md:block px-6 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 shadow-md"
          >
            Contact us →
          </motion.a>

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-2xl text-[#1f2937]"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Ente Photo
              </a>

              <button onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col gap-8 px-8 text-lg mt-10">
              {links.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="px-6 pb-10">
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center py-3 bg-black text-white rounded-xl"
              >
                Get in touch →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}