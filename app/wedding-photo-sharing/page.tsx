// app/wedding-photo-sharing/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "wedding-photo-sharing";

export const metadata: Metadata = {
  title: "Wedding Photo Sharing | Entephoto",
  description:
    "Entephoto makes wedding photo sharing effortless. Every guest receives their personal wedding photos instantly via AI face recognition. No sorting, no waiting.",
  alternates: { canonical: "https://www.entephoto.co.in/wedding-photo-sharing" },
  openGraph: {
    title: "Wedding Photo Sharing | Entephoto",
    description: "Entephoto makes wedding photo sharing effortless. Every guest receives their personal wedding photos instantly via AI face recognition. No sorting, no waiting.",
    url: "https://www.entephoto.co.in/wedding-photo-sharing",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photo Sharing | Entephoto",
    description: "Entephoto makes wedding photo sharing effortless. Every guest receives their personal wedding photos instantly via AI face recognition. No sorting, no waiting.",
    images: ["/og-image.png"],
  },
};

export default function WeddingPhotoSharingPage() {
  const article = getArticleBySlug(slug);
  if (!article) return notFound();
  const related = getRelatedArticles(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `https://www.entephoto.co.in/${slug}/#webpage`,
        url: `https://www.entephoto.co.in/${slug}`,
        name: article.h1,
        description: article.intro,
        inLanguage: "en-IN",
        isPartOf: { "@id": "https://www.entephoto.co.in/#website" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.entephoto.co.in/landing" },
          { "@type": "ListItem", position: 2, name: "Wedding Photo Sharing", item: "https://www.entephoto.co.in/wedding-photo-sharing" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleLayout article={article} relatedArticles={related} />
    </>
  );
}
