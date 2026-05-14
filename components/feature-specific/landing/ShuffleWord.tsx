"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Moments", "Events", "Memories"];

export default function ShuffleWord() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <span
          key={idx}
          className="absolute top-0 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 whitespace-nowrap"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent"
          >
            {WORDS[idx]}
          </motion.span>
        </span>
      </AnimatePresence>
      <span className="opacity-0 pointer-events-none select-none">
        Memories
      </span>
    </span>
  );
}
