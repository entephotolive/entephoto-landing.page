// app/landing/layout.tsx
// Server component wrapper — exports full metadata for the /landing page
// without touching the "use client" page.tsx component.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entephoto | Events Live Sharing & AI Photo Delivery",
  description:
    "Entephoto is India's premier AI-powered event photo delivery platform. Guests receive their photos instantly via face recognition — directly to their phones via WhatsApp or SMS. No sorting, no waiting.",
  keywords: [
    "events live sharing",
    "live photo sharing",
    "AI photo delivery",
    "instant event photos",
    "QR code event sharing",
    "face recognition photo sharing",
    "event photography India",
    "wedding photo delivery",
    "real-time photo sharing Kerala",
    "Entephoto",
  ],
  alternates: {
    canonical: "https://www.entephoto.co.in/landing",
  },
  openGraph: {
    title: "Entephoto | Events Live Sharing & AI Photo Delivery",
    description:
      "India's premier platform for live event photo sharing. AI face recognition delivers every guest's photos to their phone — instantly, privately, and without any app download.",
    url: "https://www.entephoto.co.in/landing",
    siteName: "Entephoto",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Entephoto — AI-Powered Event Photo Delivery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entephoto | Events Live Sharing & AI Photo Delivery",
    description:
      "Photos from camera to guest's phone in under 60 seconds. AI face recognition. No app needed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
