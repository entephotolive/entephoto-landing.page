// app/knowledge/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/knowledge-articles";

export const metadata: Metadata = {
  title: "Knowledge Hub | Entephoto",
  description:
    "Learn everything about event photo sharing, AI face recognition, instant photo delivery, and more. The Entephoto knowledge hub — your guide to modern event photography.",
  openGraph: {
    title: "Knowledge Hub | Entephoto",
    description:
      "Explore guides on live event photo sharing, AI face recognition, instant delivery, and professional event photography management.",
    url: "https://www.entephoto.co.in/knowledge",
    siteName: "Entephoto",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  "instant-photo-delivery": "from-orange-400 to-pink-400",
  "live-event-photo-sharing": "from-purple-400 to-blue-400",
  "wedding-photo-sharing": "from-pink-400 to-rose-400",
  "event-photo-gallery": "from-blue-400 to-cyan-400",
  "ai-face-recognition": "from-violet-500 to-purple-500",
  "face-recognition-photo-search": "from-indigo-400 to-violet-400",
  "event-photo-management": "from-teal-400 to-green-400",
  "photo-delivery-for-photographers": "from-amber-400 to-orange-400",
  "real-time-photo-sharing": "from-red-400 to-orange-400",
  "camera-to-phone-photo-transfer": "from-sky-400 to-blue-400",
};

export default function KnowledgeHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff]">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/landing" className="relative block w-40 h-10">
            <Image
              src="/logo.png"
              alt="Entephoto"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="/landing" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link
              href="/landing#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
          Knowledge Hub
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] tracking-tight mb-5">
          Everything You Need to Know About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
            Event Photo Sharing
          </span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Deep guides on AI face recognition, instant photo delivery, live event sharing, and professional photography management — written by the Entephoto team.
        </p>
      </header>

      {/* ── ARTICLE GRID ── */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/knowledge/${article.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all overflow-hidden"
            >
              {/* Color accent bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${
                  categoryColors[article.slug] ?? "from-purple-400 to-orange-400"
                }`}
              />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h2 className="font-bold text-base text-[#1a1a2e] group-hover:text-purple-600 transition-colors leading-snug">
                  {article.h1}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
                  {article.intro}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-400">
                    {new Date(article.updatedAt).toLocaleDateString("en-IN", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs font-semibold text-purple-600 group-hover:underline">
                    Read guide →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pricing card */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 p-px shadow-xl">
          <Link
            href="/pricing"
            className="group flex flex-col sm:flex-row items-center justify-between gap-5 bg-white rounded-2xl px-8 py-7 hover:bg-gray-50 transition-colors"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">Pricing</p>
              <p className="font-extrabold text-xl text-[#1a1a2e] group-hover:text-purple-600 transition-colors">
                Simple Pricing — Starting at ₹999 per Event
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Self Service or with a dedicated Entephoto Executive on-site. No per-guest fees.
              </p>
            </div>
            <span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-sm whitespace-nowrap shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
              View Plans →
            </span>
          </Link>
        </div>
      </main>

      {/* ── CTA STRIP ── */}
      <section className="bg-gradient-to-r from-purple-600 to-orange-500 py-14 px-6 text-center text-white">
        <h2 className="font-extrabold text-2xl md:text-3xl mb-3">
          Ready to Try Entephoto at Your Next Event?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto text-sm">
          Join photographers and event organizers delivering instant, personalized photos.
        </p>
        <Link
          href="/landing#contact"
          className="inline-block px-8 py-3 rounded-full bg-white text-purple-600 font-bold text-sm shadow-lg hover:shadow-xl transition-shadow"
        >
          Get Started →
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 bg-[#f5f1eb] border-t border-gray-200 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Entephoto. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="/landing" className="hover:text-purple-600 transition-colors">Home</Link>
          <Link href="/landing#contact" className="hover:text-purple-600 transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
