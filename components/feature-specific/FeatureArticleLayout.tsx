import Link from "next/link";
import Image from "next/image";
import type { FeaturePageData } from "@/lib/feature-pages";
import { articles } from "@/lib/knowledge-articles";
import SiteNav from "../shared/SiteNav";
import SiteFooter from "../shared/SiteFooter";

interface FeatureArticleLayoutProps {
  page: FeaturePageData;
}

function formatSlugTitle(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function FeatureArticleLayout({
  page,
}: FeatureArticleLayoutProps) {
  const relatedKnowledge = articles
    .filter((article) => article.slug !== page.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff]">
      <SiteNav />

      <div className="max-w-5xl mx-auto px-6 pt-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-600 font-medium truncate">{formatSlugTitle(page.slug)}</span>
        </nav>
      </div>

      <header className="max-w-5xl mx-auto px-6 pt-10 pb-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-purple-600 mb-4">
          {page.eyebrow}
        </p>
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#1a1a2e] tracking-tight leading-tight mb-5">
          {page.h1}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          {page.intro}
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
        <section className="grid gap-6 md:grid-cols-2">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-xl text-[#1a1a2e] mb-3">The problem</h2>
            <p className="text-gray-600 leading-relaxed">{page.problem}</p>
          </article>
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-xl text-[#1a1a2e] mb-3">Traditional workflow</h2>
            <p className="text-gray-600 leading-relaxed">{page.traditionalWorkflow}</p>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-xl text-[#1a1a2e] mb-3">Why traditional methods fail</h2>
            <p className="text-gray-600 leading-relaxed">{page.whyTraditionalFails}</p>
          </article>
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-xl text-[#1a1a2e] mb-3">How Entephoto solves it</h2>
            <p className="text-gray-600 leading-relaxed">{page.solution}</p>
          </article>
        </section>

        <article className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-3">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </article>

        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">
            Step-by-step workflow
          </h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {page.workflow.map((step, index) => (
              <li
                key={step}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-2">
                  Step {index + 1}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">
            Key benefits
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {page.benefits.map((benefit) => (
              <li
                key={benefit}
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

        <section className="grid gap-6 md:grid-cols-3">
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-lg text-[#1a1a2e] mb-3">Privacy</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{page.privacy}</p>
          </article>
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-lg text-[#1a1a2e] mb-3">Security</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{page.security}</p>
          </article>
          <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-lg text-[#1a1a2e] mb-3">Camera compatibility</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{page.compatibility}</p>
          </article>
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-purple-600 to-orange-500 p-px shadow-xl">
          <div className="rounded-3xl bg-white px-8 py-8">
            <h2 className="font-bold text-2xl text-[#1a1a2e] mb-3">Real event example</h2>
            <p className="text-gray-600 leading-relaxed">{page.realEventExample}</p>
          </div>
        </section>

        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <h3 className="font-semibold text-[#1a1a2e] mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="font-bold text-xl text-[#1a1a2e]">Related articles</h2>
            <Link href={`/knowledge/${page.slug}`} className="text-sm font-semibold text-purple-600 hover:underline">
              Read the knowledge guide
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedKnowledge.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="group block bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition-all"
              >
                <p className="text-sm font-semibold text-[#1a1a2e] group-hover:text-purple-600 transition-colors leading-snug">
                  {article.h1}
                </p>
                <p className="text-xs text-gray-400 mt-2 line-clamp-3">
                  {article.intro}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-100 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1">Talk to us</p>
            <h2 className="font-extrabold text-xl text-[#1a1a2e] mb-1">See how Entephoto fits your next event</h2>
            <p className="text-sm text-gray-500">Share your event type, guest count, and camera setup, and we will recommend the best workflow.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/pricing"
              className="px-6 py-2.5 rounded-full bg-white border border-purple-200 text-purple-700 font-bold text-sm shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
            >
              View Pricing
            </Link>
            <Link
              href="/landing#whats-app"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-shadow whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

