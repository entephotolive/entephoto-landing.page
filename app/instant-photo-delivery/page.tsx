// app/instant-photo-delivery/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "instant-photo-delivery";

export const metadata: Metadata = {
  title: "Instant Photo Delivery for Events | Entephoto",
  description:
    "Entephoto delivers event photos instantly from the photographer's camera to every guest's phone using AI face recognition. No searching, no waiting — photos in under 60 seconds.",
  alternates: { canonical: "https://www.entephoto.co.in/instant-photo-delivery" },
  openGraph: {
    title: "Instant Photo Delivery for Events | Entephoto",
    description: "Photos from camera to guest phone in under 60 seconds using AI face recognition.",
    url: "https://www.entephoto.co.in/instant-photo-delivery",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Photo Delivery for Events | Entephoto",
    description: "Photos from camera to guest phone in under 60 seconds using AI face recognition.",
    images: ["/og-image.png"],
  },
};

export default function InstantPhotoDeliveryPage() {
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
          { "@type": "ListItem", position: 2, name: "Instant Photo Delivery", item: "https://www.entephoto.co.in/instant-photo-delivery" },
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
