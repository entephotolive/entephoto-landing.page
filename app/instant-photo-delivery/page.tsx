// app/instant-photo-delivery/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "instant-photo-delivery";

export const metadata: Metadata = {
  title: "Instant Photo Delivery for Events | Entephoto",
  description:
    "Instant photo delivery for weddings, corporate events, and live activations. Entephoto moves event photos from camera to guest phone in minutes with AI face matching.",
  keywords: [
    "instant photo delivery",
    "instant event photo delivery",
    "camera to phone delivery",
    "event photo sharing software",
    "AI event photo delivery",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/instant-photo-delivery" },
  openGraph: {
    title: "Instant Photo Delivery for Events | Entephoto",
    description:
      "Instant photo delivery for weddings, corporate events, and live activations. Entephoto moves event photos from camera to guest phone in minutes with AI face matching.",
    url: "https://www.entephoto.co.in/instant-photo-delivery",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Instant Photo Delivery — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Photo Delivery for Events | Entephoto",
    description:
      "Instant photo delivery for weddings, corporate events, and live activations. Camera to guest phone in minutes with AI face matching.",
    images: ["/og-image.png"],
  },
};

export default function InstantPhotoDeliveryPage() {
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
