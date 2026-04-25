"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* INCOMING */
const incomingPhotos = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
];

/* RESULT */
const resultPhotos = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
  "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400",
];

export default function SmartFilter() {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.5 });

  const [stage, setStage] = useState<
    "idle" | "scanning" | "loading" | "success" | "done"
  >("idle");

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;

    if (isInView) {
      setStage("scanning");

      t1 = setTimeout(() => setStage("loading"), 1500);
      t2 = setTimeout(() => setStage("success"), 3000);
      t3 = setTimeout(() => setStage("done"), 4200);
    } else {
      setStage("idle");
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-20 md:py-24 bg-gradient-to-br from-[#f5f0ea] to-[#e6dbcf] relative overflow-hidden"
    >
      {/* BG */}
      <div className="absolute inset-0 bg-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.08))]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center relative">

        {/* ================= LEFT ================= */}
        <div className="text-center md:text-left">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-[#efe7df] border text-[#8b5e3c] text-xs">
            Smart Filter
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1f2937] leading-tight">
            Find your photos{" "}
            <span className="block text-[#8b5e3c] font-bold">
              instantly
            </span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Your photos appear the moment you need them. No searching, no clutter — just your moments.
          </p>

          <div className="mt-10 space-y-6 text-left max-w-md mx-auto md:mx-0">

            <div className="flex gap-4">
              <div className="w-[2px] bg-[#8b5e3c]" />
              <div>
                <h4 className="text-base font-semibold text-[#1f2937]">
                  Instant results
                </h4>
                <p className="text-sm text-gray-500">
                  Photos surface instantly with zero effort.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[2px] bg-[#8b5e3c]" />
              <div>
                <h4 className="text-base font-semibold text-[#1f2937]">
                  Only your photos
                </h4>
                <p className="text-sm text-gray-500">
                  AI filters out everything unrelated.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-[2px] bg-[#8b5e3c]" />
              <div>
                <h4 className="text-base font-semibold text-[#1f2937]">
                  Private by design
                </h4>
                <p className="text-sm text-gray-500">
                  Your data stays secure and fully yours.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex justify-center items-center relative mt-10 md:mt-0">

          {/* GLOW */}
          <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] bg-[#8b5e3c]/10 blur-[100px] rounded-full" />

          {/* ================= MOBILE ================= */}
          <div className="relative w-[220px] h-[460px] sm:w-[240px] sm:h-[500px] md:w-[260px] md:h-[520px] bg-black rounded-[40px] border-[6px] border-black shadow-[0_30px_80px_rgba(0,0,0,0.3)] overflow-hidden">

            {/* NOTCH */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] md:w-[120px] md:h-[28px] bg-black rounded-b-2xl z-10" />

            {/* SCREEN */}
            <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">

              {/* IDLE */}
              {stage === "idle" && (
                <img src="/logo.png" className="w-10 opacity-60" />
              )}

              {/* INCOMING */}
              <AnimatePresence>
                {stage === "scanning" &&
                  incomingPhotos.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover"
                      initial={{
                        x: i % 2 === 0 ? -200 : 200,
                        y: i * 15 - 30,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 0.5,
                        opacity: 1,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
              </AnimatePresence>

              {/* SCAN */}
              {stage === "loading" && (
                <div className="flex flex-col items-center gap-4">

                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                    <img
                      src=  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
                      className="w-full h-full object-cover"
                    />

                    <motion.div
                      className="absolute inset-0 border-4 border-[#8b5e3c] rounded-full"
                      animate={{ scale: [1, 1.4], opacity: [0.8, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    />
                  </div>

                  <motion.p
                    className="text-sm text-gray-500"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    Scanning face...
                  </motion.p>
                </div>
              )}

              {/* SUCCESS */}
              {stage === "success" && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-lg">
                    ✓
                  </div>
                  <p className="text-sm text-gray-600">
                    Face matched
                  </p>
                </motion.div>
              )}

              {/* RESULT (VERTICAL STACK) */}
              {stage === "done" && (
                <div className="flex flex-col gap-3 p-3 w-full">

                  {resultPhotos.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      className={`object-cover rounded-xl w-full ${
                        i === 0 ? "h-36 sm:h-40" : "h-20 sm:h-24"
                      }`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                    />
                  ))}

                </div>
              )}

            </div>

            {/* EDGE GLOW */}
            <div className="absolute inset-0 rounded-[40px] shadow-[0_0_40px_rgba(139,94,60,0.15)] pointer-events-none" />

          </div>

        </div>

      </div>
    </section>
  );
}