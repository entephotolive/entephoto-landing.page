// app/ai-face-recognition/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "ai-face-recognition";

export const metadata: Metadata = {
  title: "AI Face Recognition for Event Photos | Entephoto",
  description:
    "AI face recognition for event photos that automatically matches guests to their images and delivers personalized galleries. Built for events, privacy-first, high-volume ready.",
  keywords: [
    "AI face recognition for events",
    "face recognition event photos",
    "AI event photography software",
    "photo matching by face",
    "event guest photo matching",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/ai-face-recognition" },
  openGraph: {
    title: "AI Face Recognition for Event Photos | Entephoto",
    description:
      "AI face recognition for event photos that automatically matches guests to their images and delivers personalized galleries. Built for events, privacy-first, high-volume ready.",
    url: "https://www.entephoto.co.in/ai-face-recognition",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AI Face Recognition for Events — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Face Recognition for Event Photos | Entephoto",
    description:
      "AI-powered face recognition automatically identifies guests in event photos and delivers personalized galleries — accurately, privately, and instantly.",
    images: ["/og-image.png"],
  },
};

export default function AiFaceRecognitionPage() {
  const page = getFeaturePageBySlug(slug);
  if (!page) return notFound();

  const jsonLd = getFeatureJsonLd(page);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FeatureArticleLayout page={page} />
    </>
  );
}
