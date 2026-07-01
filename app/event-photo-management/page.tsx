// app/event-photo-management/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFeaturePageBySlug, getFeatureJsonLd } from "@/lib/feature-pages";
import FeatureArticleLayout from "@/components/feature-specific/FeatureArticleLayout";

const slug = "event-photo-management";

export const metadata: Metadata = {
  title: "Event Photo Management Software | Entephoto",
  description:
    "Event photo management software for upload coordination, guest delivery, approvals, and gallery workflows. Run event photography operations from one platform.",
  keywords: [
    "event photo management",
    "event photography software",
    "photo management platform for events",
    "event photo workflow software",
    "event image delivery dashboard",
  ],
  alternates: { canonical: "https://www.entephoto.co.in/event-photo-management" },
  openGraph: {
    title: "Event Photo Management Software | Entephoto",
    description:
      "Event photo management software for upload coordination, guest delivery, approvals, and gallery workflows. Run event photography operations from one platform.",
    url: "https://www.entephoto.co.in/event-photo-management",
    siteName: "Entephoto",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Event Photo Management — Entephoto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Photo Management Software | Entephoto",
    description:
      "Event photo management software for upload coordination, guest delivery, approvals, and gallery workflows. Run event photography operations from one platform.",
    images: ["/og-image.png"],
  },
};

export default function EventPhotoManagementPage() {
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
