"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import SmartFilter from "./SmartFilter";

export default function Home() {
  const [darkNav, setDarkNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;

      if (window.scrollY > heroHeight - 80) {
        setDarkNav(false);
      } else {
        setDarkNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      
      <Navbar />

      <Hero />

      <About />

      <SmartFilter />

      {/* HOW IT WORKS */}
      <section id="how" className="py-28 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold">How it works</h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border bg-gray-50"
              >
                <div className="text-sm text-gray-400 mb-2">
                  Step {i + 1}
                </div>
                <p className="text-lg font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-28 text-center px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold">
            Why Ente Photo Exists
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Your photos should never be scanned, sold, or used against you.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 text-center px-6 bg-gray-50"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-semibold">Let’s talk</h2>

          <p className="mt-4 text-gray-600">
            Questions, feedback, or ideas—we’re listening.
          </p>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-full"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-400 bg-black">
        © {new Date().getFullYear()} Ente Photo
      </footer>

    </main>
  );
}

const features = [
  {
    title: "Private by Design",
    desc: "Only you can access your photos.",
  },
  {
    title: "Clean Experience",
    desc: "Minimal interface focused on memories.",
  },
  {
    title: "Cross-device Access",
    desc: "Your photos, anywhere.",
  },
  {
    title: "Full Control",
    desc: "No tracking. No algorithms.",
  },
];

const steps = [
  "Scan your face once",
  "We find your photos instantly",
  "See only your memories",
];