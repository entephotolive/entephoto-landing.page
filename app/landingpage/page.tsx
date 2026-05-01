"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/ui/pages/Navbar";
import Hero from "../../components/ui/pages/Hero";
import About from "../../components/ui/pages/About";
import SmartFilter from "../../components/ui/pages/SmartFilter";
import HowItWorks from "../../components/ui/pages/HowItWorks";
import BuildForEveryone from "../../components/ui/pages/BuildForEveryone";
import Why from "../../components/ui/pages/Why";
import Contact from "../../components/ui/pages/Contact";
import Footer from "../../components/ui/pages/Footer"

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

      <BuildForEveryone />      

     <HowItWorks />
     
      <Why />

      <Contact />

      <Footer />

     

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