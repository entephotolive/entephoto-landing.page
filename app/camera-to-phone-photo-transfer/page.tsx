// app/camera-to-phone-photo-transfer/page.tsx
import { getArticleBySlug, getRelatedArticles } from "@/lib/knowledge-articles";
import ArticleLayout from "@/components/knowledge/ArticleLayout";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const slug = "camera-to-phone-photo-transfer";

export const metadata: Metadata = {
  title: "Camera to Phone Photo Transfer | Entephoto",
  description:
    "Entephoto enables instant camera to phone photo transfer at events — photos move from the photographer's camera to every guest's phone in under a minute.",
  alternates: { canonical: "https://www.entephoto.co.in/camera-to-phone-photo-transfer" },
  openGraph: {
    title: "Camera to Phone Photo Transfer | Entephoto",
    description: "Entephoto enables instant camera to phone photo transfer at events — photos move from the photographer's camera to every guest's phone in under a minute.",
    url: "https://www.entephoto.co.in/camera-to-phone-photo-transfer",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camera to Phone Photo Transfer | Entephoto",
    description: "Entephoto enables instant camera to phone photo transfer at events — photos move from the photographer's camera to every guest's phone in under a minute.",
    images: ["/og-image.png"],
  },
};

export default function CameraToPhonePhotoTransferPage() {
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
          { "@type": "ListItem", position: 2, name: "Camera to Phone Photo Transfer", item: "https://www.entephoto.co.in/camera-to-phone-photo-transfer" },
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
