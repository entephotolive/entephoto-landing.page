// app/photo-delivery-for-photographers/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "photo-delivery-for-photographers";

export const metadata: Metadata = {
  title: "Photo Delivery for Photographers | Entephoto",
  description:
    "Entephoto is the photo delivery platform designed for professional event photographers. Automate delivery, delight clients, and grow your photography business.",
  alternates: { canonical: "https://www.entephoto.co.in/photo-delivery-for-photographers" },
  openGraph: {
    title: "Photo Delivery for Photographers | Entephoto",
    description: "Entephoto is the photo delivery platform designed for professional event photographers. Automate delivery, delight clients, and grow your photography business.",
    url: "https://www.entephoto.co.in/photo-delivery-for-photographers",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Delivery for Photographers | Entephoto",
    description: "Entephoto is the photo delivery platform designed for professional event photographers. Automate delivery, delight clients, and grow your photography business.",
    images: ["/og-image.png"],
  },
};

export default function PhotoDeliveryForPhotographersPage() {
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
          { "@type": "ListItem", position: 2, name: "Photo Delivery for Photographers", item: "https://www.entephoto.co.in/photo-delivery-for-photographers" },
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
