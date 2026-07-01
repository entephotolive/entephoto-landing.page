// app/knowledge/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";

// Generate all static paths at build time
export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

// Generate per-page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://www.entephoto.co.in/knowledge/${slug}`,
      siteName: "Entephoto",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    alternates: {
      canonical: `https://www.entephoto.co.in/knowledge/${slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(slug);

  // Per-page structured data: Article + FAQPage + BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.h1,
        description: article.metaDescription,
        author: {
          "@type": "Organization",
          name: "Entephoto",
          url: "https://www.entephoto.co.in",
        },
        publisher: {
          "@type": "Organization",
          name: "Entephoto",
          logo: {
            "@type": "ImageObject",
            url: "https://www.entephoto.co.in/favicon.png",
          },
        },
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.entephoto.co.in/knowledge/${slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.entephoto.co.in/landing",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Knowledge Hub",
            item: "https://www.entephoto.co.in/knowledge",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.h1,
            item: `https://www.entephoto.co.in/knowledge/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout article={article} relatedArticles={relatedArticles} />
    </>
  );
}
