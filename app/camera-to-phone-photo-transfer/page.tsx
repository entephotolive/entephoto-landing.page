// app/camera-to-phone-photo-transfer/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "camera-to-phone-photo-transfer";

export const metadata: Metadata = {
  title: "Camera to Phone Photo Transfer for Events | Entephoto",
  description:
    "Instant camera to phone photo transfer for event photographers. Move photos directly from DSLR to guest phones in under a minute with AI delivery.",
  keywords: [
    "camera to phone transfer",
    "DSLR to phone photo transfer",
    "wireless event photo sharing",
    "instant photo delivery for guests",
    "PTP MTP photo transfer",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/camera-to-phone-photo-transfer" },
  openGraph: {
    title: "Camera to Phone Photo Transfer for Events | Entephoto",
    description:
      "Instant camera to phone photo transfer for event photographers. Move photos directly from DSLR to guest phones in under a minute with AI delivery.",
    url: "https://www.entephoto.co.in/camera-to-phone-photo-transfer",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Camera to Phone Photo Transfer — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camera to Phone Photo Transfer for Events | Entephoto",
    description:
      "Move event photos from camera to guest phones instantly. Fast, automated, AI-powered photo delivery for any event.",
    images: ["/og-image.png"],
  },
};

export default function CameraToPhoneTransferPage() {
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
