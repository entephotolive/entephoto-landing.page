// app/event-photo-gallery/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "event-photo-gallery";

export const metadata: Metadata = {
  title: "Event Photo Gallery Software | Entephoto",
  description:
    "Event photo gallery software with AI-organized guest galleries, controlled downloads, and faster delivery. Build event galleries that guests can actually use.",
  keywords: [
    "event photo gallery",
    "event gallery software",
    "AI photo gallery for events",
    "private event gallery",
    "guest photo gallery platform",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/event-photo-gallery" },
  openGraph: {
    title: "Event Photo Gallery Software | Entephoto",
    description:
      "Event photo gallery software with AI-organized guest galleries, controlled downloads, and faster delivery. Build event galleries that guests can actually use.",
    url: "https://www.entephoto.co.in/event-photo-gallery",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Event Photo Gallery — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Photo Gallery Software | Entephoto",
    description:
      "Event photo gallery software with AI-organized guest galleries, controlled downloads, and faster delivery. Build event galleries that guests can actually use.",
    images: ["/og-image.png"],
  },
};

export default function EventPhotoGalleryPage() {
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
