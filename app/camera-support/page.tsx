// app/camera-support/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cameraBrands } from "@/lib/camera-support";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";

export const metadata: Metadata = {
  title: "Camera Support | Entephoto Event Delivery",
  description:
    "See how to connect your Canon, Sony, Nikon, or Fujifilm camera to Entephoto for real-time live event photo sharing and instant delivery.",
  alternates: {
    canonical: "https://www.entephoto.co.in/camera-support",
  },
};

export default function CameraSupportIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff]">
      <SiteNav />

      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
          Camera Compatibility
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] tracking-tight mb-5">
          Connect Any Camera to Entephoto
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you shoot with a DSLR, mirrorless, or smartphone, if you can get the photo to a connected device, Entephoto can deliver it instantly.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cameraBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/camera-support/${brand.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all text-center"
            >
              <h2 className="font-bold text-xl text-[#1a1a2e] group-hover:text-purple-600 transition-colors mb-2">
                {brand.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">View workflows for {brand.name} bodies</p>
              <span className="text-sm font-semibold text-purple-600 group-hover:underline mt-auto">
                Read guide →
              </span>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
