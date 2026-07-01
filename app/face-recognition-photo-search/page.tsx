// app/face-recognition-photo-search/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "face-recognition-photo-search";

export const metadata: Metadata = {
  title: "Face Recognition Photo Search | Entephoto",
  description:
    "Search thousands of event photos by face in seconds. Entephoto's face recognition photo search finds every photo you appear in — instantly and privately.",
  alternates: { canonical: "https://www.entephoto.co.in/face-recognition-photo-search" },
  openGraph: {
    title: "Face Recognition Photo Search | Entephoto",
    description: "Search thousands of event photos by face in seconds. Entephoto's face recognition photo search finds every photo you appear in — instantly and privately.",
    url: "https://www.entephoto.co.in/face-recognition-photo-search",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Face Recognition Photo Search | Entephoto",
    description: "Search thousands of event photos by face in seconds. Entephoto's face recognition photo search finds every photo you appear in — instantly and privately.",
    images: ["/og-image.png"],
  },
};

export default function FaceRecognitionPhotoSearchPage() {
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
          { "@type": "ListItem", position: 2, name: "Face Recognition Photo Search", item: "https://www.entephoto.co.in/face-recognition-photo-search" },
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
