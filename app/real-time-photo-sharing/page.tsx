// app/real-time-photo-sharing/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "real-time-photo-sharing";

export const metadata: Metadata = {
  title: "Real-Time Photo Sharing for Events | Entephoto",
  description:
    "Real-time photo sharing for events with guest-specific galleries, fast uploads, and a smoother camera-to-phone workflow for photographers and organizers.",
  keywords: [
    "real-time photo sharing",
    "real time event photos",
    "camera to guest phone",
    "live photo sharing platform",
    "event photo delivery in real time",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/real-time-photo-sharing" },
  openGraph: {
    title: "Real-Time Photo Sharing for Events | Entephoto",
    description:
      "Real-time photo sharing for events with guest-specific galleries, fast uploads, and a smoother camera-to-phone workflow for photographers and organizers.",
    url: "https://www.entephoto.co.in/real-time-photo-sharing",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Real-Time Photo Sharing — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time Photo Sharing for Events | Entephoto",
    description:
      "Real-time photo sharing for events with guest-specific galleries, fast uploads, and a smoother camera-to-phone workflow for photographers and organizers.",
    images: ["/og-image.png"],
  },
};

export default function RealTimePhotoSharingPage() {
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
