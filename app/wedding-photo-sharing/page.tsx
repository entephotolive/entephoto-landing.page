// app/wedding-photo-sharing/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "wedding-photo-sharing";

export const metadata: Metadata = {
  title: "Wedding Photo Sharing Platform | Entephoto",
  description:
    "Wedding photo sharing with private guest galleries, AI face matching, and same-day delivery. Entephoto helps couples and photographers share wedding memories faster.",
  keywords: [
    "wedding photo sharing",
    "wedding guest photo delivery",
    "AI wedding photo sharing",
    "wedding photo gallery for guests",
    "same day wedding photos",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/wedding-photo-sharing" },
  openGraph: {
    title: "Wedding Photo Sharing Platform | Entephoto",
    description:
      "Wedding photo sharing with private guest galleries, AI face matching, and same-day delivery. Every guest receives their own wedding photos instantly.",
    url: "https://www.entephoto.co.in/wedding-photo-sharing",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wedding Photo Sharing — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photo Sharing Platform | Entephoto",
    description:
      "Same-day wedding photo delivery for every guest. AI face matching sends each person their personal wedding gallery — no sorting, no waiting.",
    images: ["/og-image.png"],
  },
};

export default function WeddingPhotoSharingPage() {
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
