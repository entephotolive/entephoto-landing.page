// app/live-event-photo-sharing/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "live-event-photo-sharing";

export const metadata: Metadata = {
  title: "Live Event Photo Sharing Software | Entephoto",
  description:
    "Live event photo sharing software for weddings, conferences, activations, and stage events. Deliver private AI-matched guest photo galleries during the event.",
  keywords: [
    "live event photo sharing",
    "event live sharing",
    "real time event photos",
    "event guest photo delivery",
    "AI photo sharing platform",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/live-event-photo-sharing" },
  openGraph: {
    title: "Live Event Photo Sharing Software | Entephoto",
    description:
      "Live photo sharing for events — guests receive personalized galleries during the event, not days later. AI-matched, private, and instant.",
    url: "https://www.entephoto.co.in/live-event-photo-sharing",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Live Event Photo Sharing — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Event Photo Sharing Software | Entephoto",
    description:
      "Deliver personalized photo galleries to every guest during the event. Live sharing with AI face matching — no open folders, no manual sorting.",
    images: ["/og-image.png"],
  },
};

export default function LiveEventPhotoSharingPage() {
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
