import { MetadataRoute } from "next";

const BASE = "https://www.entephoto.co.in";

const dedicatedPages = [
  "instant-photo-delivery",
  "live-event-photo-sharing",
  "wedding-photo-sharing",
  "event-photo-gallery",
  "ai-face-recognition",
  "face-recognition-photo-search",
  "event-photo-management",
  "photo-delivery-for-photographers",
  "real-time-photo-sharing",
  "camera-to-phone-photo-transfer",
];

const knowledgeSlugs = [
  "instant-photo-delivery",
  "live-event-photo-sharing",
  "wedding-photo-sharing",
  "event-photo-gallery",
  "ai-face-recognition",
  "face-recognition-photo-search",
  "event-photo-management",
  "photo-delivery-for-photographers",
  "real-time-photo-sharing",
  "camera-to-phone-photo-transfer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}`, lastModified: now, changeFrequency: "yearly", priority: 1 },
    { url: `${BASE}/landing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/knowledge`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/camera-support`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/security`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    ...dedicatedPages.map((slug) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...knowledgeSlugs.map((slug) => ({
      url: `${BASE}/knowledge/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
