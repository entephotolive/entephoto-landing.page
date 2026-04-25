"use client";

import { motion } from "framer-motion";
import {
  Camera,
  ImageIcon,
  ScanFace,
  ShieldCheck,
  ArrowDown,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#05060a] via-[#0b1220] to-black text-white overflow-hidden flex items-center justify-center">

    {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/10 blur-[140px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[140px] bottom-[-200px] right-[-200px]" />
      </div>

      {/* FLOATING TEXT */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 font-semibold tracking-widest"
          style={{
            top: `${20 + i * 25}%`,
            
            fontSize: "22px",
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8 + i, repeat: Infinity }}
        >
          ENTE PHOTO
        </motion.div>
      ))}

      {/* icons */}
      <motion.div
        className="absolute left-10 top-32 text-white/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Camera size={32} />
      </motion.div>

      <motion.div
        className="absolute right-16 top-40 text-white/20"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <ImageIcon size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-1/4 text-white/20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <ScanFace size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-1/4 text-white/20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <ShieldCheck size={32} />
      </motion.div>

      {/* main content */}
      <div className="text-center px-6 max-w-3xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          See Only Your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold">
            Moments
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 text-lg md:text-xl font-medium leading-relaxed"
        >
          Scan your face and instantly access only your photos from events.
          No searching. No confusion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Try It
          </button>

          <button className="border border-white/20 px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition">
            Learn More
          </button>
        </motion.div>
      </div>

      
     {/* scroll thing */}
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-8 w-full flex flex-col items-center justify-center text-white/60"
>
  <p className="text-sm font-medium mb-1">Scroll to explore</p>
  <ArrowDown size={22} />
</motion.div>
    </section>
  );
}