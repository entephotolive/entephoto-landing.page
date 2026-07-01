// components/knowledge/ArticleLayout.tsx
import Link from "next/link";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";
import CTABlock from "./CTABlock";
import type { KnowledgeArticle } from "@/lib/knowledge-articles";

interface ArticleLayoutProps {
  article: KnowledgeArticle;
  relatedArticles: KnowledgeArticle[];
}

export default function ArticleLayout({
  article,
  relatedArticles,
}: ArticleLayoutProps) {
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
            <Link href="/knowledge" className="hover:text-purple-600 transition-colors">
              Knowledge Hub
            </Link>
            <Link href="/pricing" className="hover:text-purple-600 transition-colors">
              Pricing
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

      {/* ── BREADCRUMB ── */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/landing" className="hover:text-purple-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/knowledge" className="hover:text-purple-600 transition-colors">Knowledge</Link>
          <span>/</span>
          <span className="text-gray-600 font-medium truncate">{article.h1}</span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <header className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#1a1a2e] tracking-tight leading-tight mb-5">
          {article.h1}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{article.intro}</p>
        <div className="flex items-center gap-4 mt-6 text-xs text-gray-400">
          <time dateTime={article.updatedAt}>
            Last updated: {new Date(article.updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </time>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        {/* ── CONTENT SECTIONS ── */}
        <article className="space-y-10">
          {article.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-3">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </article>

        {/* ── BENEFITS ── */}
        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">
            Key Benefits
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {article.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-orange-400 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-gray-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={article.faqs} />
        </section>

        {/* ── PRICING PROMO ── */}
        <section className="rounded-2xl bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-100 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">Our Plans</p>
            <h2 className="font-extrabold text-xl text-[#1a1a2e] mb-1">Starting at ₹999 per event</h2>
            <p className="text-sm text-gray-500">Self Service or With a dedicated Entephoto Executive on-site.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/pricing"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-shadow whitespace-nowrap"
            >
              View Pricing →
            </Link>
          </div>
        </section>

        {/* ── RELATED ── */}
        {relatedArticles.length > 0 && (
          <section>
            <h2 className="font-bold text-xl text-[#1a1a2e] mb-5">Related Topics</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/knowledge/${rel.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition-all"
                >
                  <p className="text-sm font-semibold text-[#1a1a2e] group-hover:text-purple-600 transition-colors leading-snug">
                    {rel.h1}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                    {rel.intro}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <CTABlock />
      </div>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 bg-[#f5f1eb] border-t border-gray-200 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Entephoto. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
          <Link href="/landing" className="hover:text-purple-600 transition-colors">Home</Link>
          <Link href="/knowledge" className="hover:text-purple-600 transition-colors">Knowledge Hub</Link>
          <Link href="/pricing" className="hover:text-purple-600 transition-colors">Pricing</Link>
          <Link href="/landing#contact" className="hover:text-purple-600 transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
