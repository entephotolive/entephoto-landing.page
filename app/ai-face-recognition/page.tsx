// app/ai-face-recognition/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "ai-face-recognition";

export const metadata: Metadata = {
  title: "AI Face Recognition for Events | Entephoto",
  description:
    "Entephoto uses advanced AI face recognition to automatically identify guests in event photos and deliver personalized galleries — accurately, privately, and instantly.",
  alternates: { canonical: "https://www.entephoto.co.in/ai-face-recognition" },
  openGraph: {
    title: "AI Face Recognition for Events | Entephoto",
    description: "Entephoto uses advanced AI face recognition to automatically identify guests in event photos and deliver personalized galleries — accurately, privately, and instantly.",
    url: "https://www.entephoto.co.in/ai-face-recognition",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Face Recognition for Events | Entephoto",
    description: "Entephoto uses advanced AI face recognition to automatically identify guests in event photos and deliver personalized galleries — accurately, privately, and instantly.",
    images: ["/og-image.png"],
  },
};

export default function AiFaceRecognitionPage() {
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
          { "@type": "ListItem", position: 2, name: "AI Face Recognition", item: "https://www.entephoto.co.in/ai-face-recognition" },
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
