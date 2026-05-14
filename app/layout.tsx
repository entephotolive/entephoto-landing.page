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
  title: "Entephoto | Capture Your Best Moments",
  description:
    "Entephoto is the premier platform for event photography, seamless memory sharing, and professional photo management.",
  keywords: [
    "photography",
    "event photography",
    "photo sharing",
    "wedding photos",
    "Entephoto",
  ],
  authors: [{ name: "Entephoto" }],
  openGraph: {
    title: "Entephoto | Capture Your Best Moments",
    description: "Premium platform for event photography and memory sharing.",
    url: "https://entephoto.co.in",
    siteName: "Entephoto",
    images: [
      {
        url: "/og-image.png", // Ensure you add an og-image.jpg in your public folder!
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
    title: "Entephoto | Capture Your Best Moments",
    description: "Premium platform for event photography and memory sharing.",
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
        {children}
      </body>
    </html>
  );
}
