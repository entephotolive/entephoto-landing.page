// app/real-time-photo-sharing/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "real-time-photo-sharing";

export const metadata: Metadata = {
  title: "Real-Time Photo Sharing for Events | Entephoto",
  description:
    "Entephoto delivers real-time photo sharing at any event. Photos go from camera to guest phone in under 60 seconds — no app download required.",
  alternates: { canonical: "https://www.entephoto.co.in/real-time-photo-sharing" },
  openGraph: {
    title: "Real-Time Photo Sharing for Events | Entephoto",
    description: "Entephoto delivers real-time photo sharing at any event. Photos go from camera to guest phone in under 60 seconds — no app download required.",
    url: "https://www.entephoto.co.in/real-time-photo-sharing",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time Photo Sharing for Events | Entephoto",
    description: "Entephoto delivers real-time photo sharing at any event. Photos go from camera to guest phone in under 60 seconds — no app download required.",
    images: ["/og-image.png"],
  },
};

export default function RealTimePhotoSharingPage() {
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
          { "@type": "ListItem", position: 2, name: "Real-Time Photo Sharing", item: "https://www.entephoto.co.in/real-time-photo-sharing" },
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
