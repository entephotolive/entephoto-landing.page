// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";

export const metadata: Metadata = {
  title: "About Us | Entephoto",
  description:
    "Learn about Entephoto, the AI-powered event photo delivery platform based in Kerala, India. We are transforming how event memories are shared globally.",
  alternates: {
    canonical: "https://www.entephoto.co.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff]">
      <SiteNav />

      <header className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
          Our Story
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] tracking-tight mb-5">
          About Entephoto
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Based in Kerala, India, we are on a mission to completely eliminate the friction between capturing a great event moment and delivering it to the person in the frame.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-12 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">The Problem We Saw</h2>
          <p className="mb-4">
            Event photography has always had a delivery problem. A wedding, a corporate conference, or a college festival generates thousands of incredible photos. But for decades, getting those photos to the actual guests involved sending massive Google Drive links, passing around USB sticks, or waiting weeks for manual sorting.
          </p>
          <p>
            We realized that in an era where we can instantly share a thought with the world, waiting days to see a professional photo of yourself makes no sense.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">What We Built</h2>
          <p className="mb-4">
            Entephoto is the answer to that delay. We built an AI-powered platform that bridges the gap between the photographer's camera and the guest's phone in real time. 
          </p>
          <p>
            By leveraging advanced face recognition technology, Entephoto processes incoming event photos instantly, matches the faces to registered guests, and delivers a private, personalized gallery directly to their WhatsApp or SMS within seconds. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Privacy First:</strong> We believe you should only see photos of yourself. We never sell data and strictly adhere to modern data protection laws.</li>
            <li><strong>Speed is a Feature:</strong> If a photo arrives three days late, the moment is gone. We engineer our platform for sub-60-second delivery.</li>
            <li><strong>Empowering Photographers:</strong> We don't replace event photographers; we give them a superpower. By automating the admin work, we let them focus on the art.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mt-12 text-center">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">Get in Touch</h2>
          <p className="mb-4">Want to use Entephoto for your next event or join our partner network?</p>
          <a href="mailto:entephoto.live@gmail.com" className="text-purple-600 font-bold hover:underline">entephoto.live@gmail.com</a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
