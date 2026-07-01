// app/event-photo-management/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "event-photo-management";

export const metadata: Metadata = {
  title: "Event Photo Management Platform | Entephoto",
  description:
    "Entephoto is the complete event photo management platform for photographers and organizers. Upload, organize, deliver, and analyze event photos from one dashboard.",
  alternates: { canonical: "https://www.entephoto.co.in/event-photo-management" },
  openGraph: {
    title: "Event Photo Management Platform | Entephoto",
    description: "Entephoto is the complete event photo management platform for photographers and organizers. Upload, organize, deliver, and analyze event photos from one dashboard.",
    url: "https://www.entephoto.co.in/event-photo-management",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Photo Management Platform | Entephoto",
    description: "Entephoto is the complete event photo management platform for photographers and organizers. Upload, organize, deliver, and analyze event photos from one dashboard.",
    images: ["/og-image.png"],
  },
};

export default function EventPhotoManagementPage() {
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
          { "@type": "ListItem", position: 2, name: "Event Photo Management", item: "https://www.entephoto.co.in/event-photo-management" },
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
