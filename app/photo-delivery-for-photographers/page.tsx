// app/photo-delivery-for-photographers/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "photo-delivery-for-photographers";

export const metadata: Metadata = {
  title: "Photo Delivery Software for Photographers | Entephoto",
  description:
    "Photo delivery software for photographers who want faster guest sharing, less manual sorting, and a more premium event service offering.",
  keywords: [
    "photo delivery for photographers",
    "photographer photo delivery software",
    "event photo delivery for studios",
    "photo gallery software for photographers",
    "guest delivery platform photographers",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/photo-delivery-for-photographers" },
  openGraph: {
    title: "Photo Delivery Software for Photographers | Entephoto",
    description:
      "Photo delivery software for photographers who want faster guest sharing, less manual sorting, and a more premium event service offering.",
    url: "https://www.entephoto.co.in/photo-delivery-for-photographers",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Photo Delivery for Photographers — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Delivery Software for Photographers | Entephoto",
    description:
      "Photo delivery software for photographers who want faster guest sharing, less manual sorting, and a more premium event service offering.",
    images: ["/og-image.png"],
  },
};

export default function PhotoDeliveryForPhotographersPage() {
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
