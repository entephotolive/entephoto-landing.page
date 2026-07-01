// app/event-photo-gallery/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "event-photo-gallery";

export const metadata: Metadata = {
  title: "Event Photo Gallery | Entephoto",
  description:
    "Entephoto's smart event photo gallery organizes thousands of photos automatically using AI. Every guest gets a personal, private gallery — no manual sorting required.",
  alternates: { canonical: "https://www.entephoto.co.in/event-photo-gallery" },
  openGraph: {
    title: "Event Photo Gallery | Entephoto",
    description: "Entephoto's smart event photo gallery organizes thousands of photos automatically using AI. Every guest gets a personal, private gallery — no manual sorting required.",
    url: "https://www.entephoto.co.in/event-photo-gallery",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Photo Gallery | Entephoto",
    description: "Entephoto's smart event photo gallery organizes thousands of photos automatically using AI. Every guest gets a personal, private gallery — no manual sorting required.",
    images: ["/og-image.png"],
  },
};

export default function EventPhotoGalleryPage() {
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
          { "@type": "ListItem", position: 2, name: "Event Photo Gallery", item: "https://www.entephoto.co.in/event-photo-gallery" },
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
