// app/face-recognition-photo-search/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "face-recognition-photo-search";

export const metadata: Metadata = {
  title: "Face Recognition Photo Search for Events | Entephoto",
  description:
    "Face recognition photo search for event guests who need to find their own pictures quickly. Search event photos by face without browsing the full gallery manually.",
  keywords: [
    "face recognition photo search",
    "find my event photos",
    "search event photos by face",
    "photo search by selfie",
    "AI event photo search",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/face-recognition-photo-search" },
  openGraph: {
    title: "Face Recognition Photo Search for Events | Entephoto",
    description:
      "Face recognition photo search for event guests who need to find their own pictures quickly. Search event photos by face without browsing the full gallery manually.",
    url: "https://www.entephoto.co.in/face-recognition-photo-search",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Face Recognition Photo Search — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Face Recognition Photo Search for Events | Entephoto",
    description:
      "Face recognition photo search for event guests who need to find their own pictures quickly. Search event photos by face without browsing the full gallery manually.",
    images: ["/og-image.png"],
  },
};

export default function FaceRecognitionPhotoSearchPage() {
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
