"use client";

import Navbar from "@/components/feature-specific/landing/Navbar";
import Hero from "@/components/feature-specific/landing/Hero";
import About from "@/components/feature-specific/landing/About";
import SmartFilter from "@/components/feature-specific/landing/SmartFilter";
import HowItWorks from "@/components/feature-specific/landing/HowItWorks";
import BuildForEveryone from "@/components/feature-specific/landing/BuildForEveryone";
import Why from "@/components/feature-specific/landing/Why";
import Contact from "@/components/feature-specific/landing/Contact";
import Footer from "@/components/feature-specific/landing/Footer";
import SmoothScrollProvider from "@/components/feature-specific/landing/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
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
    </SmoothScrollProvider>
  );
}