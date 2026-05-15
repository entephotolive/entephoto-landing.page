import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://entephoto.co.in"),
  title: {
    default: "Entephoto | Events Live Sharing & AI Photo Delivery",
    template: "%s | Entephoto",
  },
  description:
    "Entephoto is the premier platform for events live sharing, AI face recognition photo delivery, seamless memory sharing, and professional event photography management.",
  keywords: [
    "events live sharing",
    "live photo sharing",
    "AI photo delivery",
    "instant event photos",
    "QR code event sharing",
    "face recognition photo sharing",
    "photography",
    "event photography",
    "photo sharing",
    "wedding photos",
    "Entephoto",
  ],
  authors: [{ name: "Entephoto" }],
  openGraph: {
    title: "Entephoto | Events Live Sharing & AI Photo Delivery",
    description: "Premium platform for events live sharing, AI face recognition photo delivery, and seamless memory sharing.",
    url: "https://entephoto.co.in",
    siteName: "Entephoto",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Entephoto Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entephoto | Events Live Sharing & AI Photo Delivery",
    description: "Premium platform for events live sharing, AI face recognition photo delivery, and seamless memory sharing.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(jakarta.variable, outfit.variable)}>
      <body className="font-sans antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://entephoto.co.in/#website",
                  "url": "https://entephoto.co.in/",
                  "name": "Entephoto",
                  "description": "Events live sharing and AI photo delivery platform",
                  "publisher": {
                    "@id": "https://entephoto.co.in/#organization",
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://entephoto.co.in/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://entephoto.co.in/#organization",
                  "name": "Entephoto",
                  "url": "https://entephoto.co.in/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://entephoto.co.in/logo.png",
                  },
                  "description": "Entephoto provides an advanced event photography platform with live photo sharing, AI-powered face recognition photo delivery, and secure cloud storage.",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
