import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

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
  metadataBase: new URL("https://www.entephoto.co.in/"),
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
    description:
      "Premium platform for events live sharing, AI face recognition photo delivery, and seamless memory sharing.",
    url: "https://www.entephoto.co.in",
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
    description:
      "Premium platform for events live sharing, AI face recognition photo delivery, and seamless memory sharing.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
                  "@id": "https://www.entephoto.co.in/#website",
                  url: "https://www.entephoto.co.in/",
                  name: "Entephoto",
                  description:
                    "Events live sharing and AI photo delivery platform",
                  publisher: {
                    "@id": "https://www.entephoto.co.in/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://www.entephoto.co.in/search?q={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.entephoto.co.in/#organization",
                  name: "Entephoto",
                  url: "https://www.entephoto.co.in/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.entephoto.co.in/favicon.png",
                  },
                  description:
                    "Entephoto provides an advanced event photography platform with live photo sharing, AI-powered face recognition photo delivery, and secure cloud storage.",
                  sameAs: [
                    "https://www.instagram.com/_entephoto_/",
                    "https://x.com/entephoto",
                    "https://www.linkedin.com/company/114394331/",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+918075393896",
                    contactType: "customer service",
                    email: "entephoto.live@gmail.com",
                    areaServed: "IN",
                    availableLanguage: ["English", "Hindi", "Malayalam"],
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Entephoto",
                  applicationCategory: "MultimediaApplication",
                  operatingSystem: "Web, Android, iOS",
                  url: "https://www.entephoto.co.in/",
                  description:
                    "AI-powered event photo sharing and delivery platform. Guests receive their photos instantly via face recognition — no sorting, no waiting.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "INR",
                  },
                  featureList: [
                    "AI face recognition",
                    "Instant photo delivery",
                    "Live event photo sharing",
                    "WhatsApp and SMS delivery",
                    "Event photo gallery management",
                    "Multi-photographer support",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.entephoto.co.in/#localbusiness",
                  name: "Entephoto",
                  description:
                    "AI-powered event photo delivery service based in Kerala, India. We offer instant photo sharing for weddings, corporate events, and live events using face recognition technology.",
                  url: "https://www.entephoto.co.in/",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.entephoto.co.in/favicon.png",
                  },
                  image: "https://www.entephoto.co.in/og-image.png",
                  telephone: "+918075393896",
                  email: "entephoto.live@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Kerala",
                    addressRegion: "KL",
                    addressCountry: "IN",
                  },
                  areaServed: [
                    { "@type": "State", name: "Kerala" },
                    { "@type": "Country", name: "India" },
                  ],
                  priceRange: "₹999 - ₹3,499",
                  sameAs: [
                    "https://www.instagram.com/_entephoto_/",
                    "https://x.com/entephoto",
                    "https://www.linkedin.com/company/114394331/",
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Entephoto Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Self Service Event Photo Delivery",
                          description: "Photographer manages QR display and uploads. AI delivers photos to all guests instantly.",
                        },
                        price: "999",
                        priceCurrency: "INR",
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Entephoto Executive Event Photo Delivery",
                          description: "A dedicated Entephoto executive attends your event, sets up QR displays, monitors uploads, and supports guests on-site.",
                        },
                        price: "3499",
                        priceCurrency: "INR",
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
