// app/camera-support/[brand]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cameraBrands, getCameraBrandBySlug } from "@/lib/camera-support";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";

export async function generateStaticParams() {
  return cameraBrands.map((brand) => ({ brand: brand.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand } = await params;
  const data = getCameraBrandBySlug(brand);
  if (!data) return {};

  return {
    title: `${data.h1} | Entephoto`,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.entephoto.co.in/camera-support/${brand}`,
    },
  };
}

export default async function CameraBrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const data = getCameraBrandBySlug(brand);
  if (!data) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />

      <div className="max-w-4xl mx-auto px-6 pt-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/camera-support" className="hover:text-purple-600 transition-colors">Camera Support</Link>
          <span>/</span>
          <span className="text-gray-600 font-medium truncate">{data.name}</span>
        </nav>
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-10 pb-8">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#1a1a2e] tracking-tight leading-tight mb-5">
          {data.h1}
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">{data.intro}</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">Compatible Models</h2>
          <ul className="flex flex-wrap gap-2">
            {data.compatibleModels.map((model) => (
              <li key={model} className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700">
                {model}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">Setup Workflow</h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {data.workflow.map((step, index) => (
              <li key={step} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 mb-2">Step {index + 1}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-bold text-xl md:text-2xl text-[#1a1a2e] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <article key={faq.question} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-[#1a1a2e] mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
