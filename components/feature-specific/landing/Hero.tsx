"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ImageIcon, ScanFace, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

import ShuffleWord from "./ShuffleWord";

export default function Hero() {
  const router = useRouter();
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.4,
    once: false,
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff] pt-[calc(7rem+env(safe-area-inset-top))] pb-10"
    >
      {/* ================= FLOATING ICONS ================= */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* LEFT TOP */}
        <motion.div
          className="absolute left-[2%] top-[15%] sm:left-[2%] sm:top-[20%] md:left-[8%] md:top-[30%] flex flex-col items-center opacity-80 scale-75 sm:scale-75 md:scale-100 origin-left md:origin-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-400 text-white flex items-center justify-center shadow-lg">
              <Camera size={20} />
            </div>

            {/* 🔥 H4 animation */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[10px] mt-2 text-gray-400 font-bold uppercase tracking-wider text-center "
            >
              Smart Capture
            </motion.p>
          </motion.div>
        </motion.div>

        {/* LEFT BOTTOM */}
        <motion.div
          className="absolute left-[2%] top-[55%] sm:left-[5%] md:left-[10%] md:top-[55%] flex flex-col items-center opacity-80 scale-75 sm:scale-75 md:scale-100 origin-left md:origin-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shadow-lg">
              <ScanFace size={20} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] mt-2 text-gray-400 font-bold uppercase tracking-wider text-center "
            >
              Face Recognition
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT TOP */}
        <motion.div
          className="absolute right-[2%] top-[20%] sm:right-[2%] sm:top-[25%] md:right-[8%] md:top-[30%] flex flex-col items-center opacity-80 scale-75 sm:scale-75 md:scale-100 origin-right md:origin-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-purple-500 flex items-center justify-center shadow-lg">
              <ImageIcon size={20} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ delay: 0.35 }}
              className="text-[10px] mt-2 text-gray-400 font-bold uppercase tracking-wider text-center "
            >
              Only Your Photos
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT BOTTOM */}
        <motion.div
          className="absolute right-[2%] top-[60%] sm:right-[5%] md:right-[10%] md:top-[55%] flex flex-col items-center opacity-80 scale-75 sm:scale-75 md:scale-100 origin-right md:origin-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.8, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-xl bg-white text-pink-500 flex items-center justify-center shadow-lg">
              <ShieldCheck size={20} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[10px] mt-2 text-gray-400 font-bold uppercase tracking-wider text-center "
            >
              Private & Secure
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        {/* 🔥 PREMIUM HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl font-black font-heading text-[#1a1a2e] leading-[1.1] sm:leading-tight"
        >
          See Only Your <br className="sm:hidden" /><ShuffleWord />
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-500 text-lg max-w-xl mx-auto"
        >
          Scan your face and instantly access only your photos from events. No
          searching. No confusion.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={() => router.push("/qr-scanner")}
            className="w-44 sm:w-auto px-6 py-3 rounded-full text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-orange-400 to-purple-600 shadow-xl hover:scale-105 transition"
          >
            Try It Now →
          </button>

          <button
            onClick={() => {
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-44 sm:w-auto px-6 py-3 rounded-full border border-purple-100 bg-white text-gray-700 font-semibold text-sm sm:text-base hover:bg-gray-50 transition"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* ================= PHOTO STRIP ================= */}
      <div className="mt-16 flex justify-center gap-6 px-6 relative z-20">
        {[1, 2, 3, 4].map((_, i) => (
          <motion.div
            key={i}
            className={`relative shrink-0 w-44 md:w-56 aspect-[10/7] rounded-xl shadow-2xl border border-white overflow-hidden ${
              i >= 2 ? "hidden md:block" : ""
            }`}
            style={{
              rotate: i % 2 === 0 ? -8 + i : 8 - i,
            }}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80 }
            }
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <Image
              src={`https://picsum.photos/seed/${i}/500/350`}
              alt={`Event preview ${i + 1}`}
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* ================= SCROLL ================= */}
      <motion.div
        className="flex flex-col items-center gap-2 z-40 mb-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-purple-600 text-xl"
        >
          ↓
        </motion.div>

        <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-purple-700">
          Scroll Down
        </span>
      </motion.div>

      {/* bottom colors */}
      <div className="absolute bottom-0 left-0 w-full h-[450px] pointer-events-none z-0">
        {/* 🔥 center soft radial glow (NEW) */}
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[250px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200/40 via-pink-100/20 to-transparent" />

        {/* 🔥 subtle vertical depth fade (NEW) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 to-pink-100/40" />

        {/* LEFT SHAPE (same but slightly deeper) */}
        <div className="absolute -bottom-10 -left-16 w-[450px] md:w-[600px] opacity-90">
          <svg viewBox="0 0 200 200">
            <path
              fill="#E9D5FF"
              d="M40,190 Q10,110 60,50 Q100,110 40,190"
              fillOpacity="0.6"
            />
            <path
              fill="#A855F7"
              d="M20,180 Q-10,120 40,60 Q70,120 20,180"
              fillOpacity="0.35"
            />
          </svg>
        </div>

        {/* RIGHT SHAPE */}
        <div className="absolute -bottom-10 -right-16 w-[450px] md:w-[600px] opacity-90">
          <svg viewBox="0 0 200 200">
            <path
              fill="#FFEDD5"
              d="M160,190 Q190,110 140,50 Q100,110 160,190"
              fillOpacity="0.6"
            />
            <path
              fill="#F97316"
              d="M180,180 Q210,120 160,60 Q130,120 180,180"
              fillOpacity="0.35"
            />
          </svg>
        </div>

        {/* SOFT FLOOR */}
        <div className="absolute bottom-0 w-full h-[220px] bg-gradient-to-t from-pink-100 via-purple-50 to-transparent opacity-90" />

        {/* PURPLE GLOW (adjusted) */}
        <div className="absolute bottom-[-60px] left-[-5%] w-[55%] h-[280px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300/40 to-transparent rounded-full" />

        {/* ORANGE GLOW (adjusted) */}
        <div className="absolute bottom-[-60px] right-[-5%] w-[55%] h-[280px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-300/40 to-transparent rounded-full" />
      </div>
      
      
    </section>
    
  
  );
}
