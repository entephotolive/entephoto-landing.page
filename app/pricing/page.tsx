// app/pricing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, User, Users, Camera, QrCode, Upload, Headphones, Star } from "lucide-react";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";

export const metadata: Metadata = {
  title: "Pricing | Entephoto – Event Photo Delivery Plans",
  description:
    "Simple, transparent pricing for AI-powered event photo delivery. Self Service at ₹999 or With Entephoto Executive at ₹3,499. No hidden fees.",
  keywords: [
    "Entephoto pricing",
    "event photo delivery cost",
    "AI photo sharing price",
    "wedding photo delivery package",
    "event photography service price India",
  ],
  alternates: {
    canonical: "https://www.entephoto.co.in/pricing",
  },
  openGraph: {
    title: "Pricing | Entephoto – Event Photo Delivery Plans",
    description:
      "Choose your plan: Self Service at ₹999 or With Entephoto Executive at ₹3,499. AI-powered instant photo delivery for any event.",
    url: "https://www.entephoto.co.in/pricing",
    siteName: "Entephoto",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Entephoto Pricing" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Entephoto – Event Photo Delivery Plans",
    description: "Self Service at ₹999 or With Executive at ₹3,499. AI photo delivery for events.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const selfServiceFeatures = [
  "Full access to Entephoto platform",
  "AI face recognition photo delivery",
  "QR code + selfie check-in for guests",
  "Instant WhatsApp / SMS delivery",
  "Photographer handles QR display setup",
  "Photographer manages all uploads",
  "Unlimited guest photo galleries",

];

const executiveFeatures = [
  "Everything handle by entephoto executive",
  "Entephoto executive on-site at event",
  "Executive sets up QR display & banners",
  "Live upload monitoring & quality control",
  "On-site guest registration support",
  "Priority delivery & real-time troubleshooting",
  "Post-event gallery report & analytics",
  
];

const selfServiceSteps = [
  {
    name: "Sign Up & Create Event",
    text: "Register on Entephoto, create your event, and configure guest registration settings.",
  },
  {
    name: "Set Up QR Display at Venue",
    text: "Print and display the QR code poster at your event entry point. Guests scan and register with a selfie.",
  },
  {
    name: "Shoot & Upload Photos",
    text: "Capture the event. Upload photos directly to the Entephoto dashboard — our AI processes and delivers them instantly to matched guests.",
  },
  {
    name: "Guests Receive Their Photos",
    text: "Each guest receives a WhatsApp / SMS link with their personal gallery of every photo they appear in.",
  },
];

const executiveSteps = [
  {
    name: "Book and Brief",
    text: "Book the Executive plan and share event details. Our executive reviews logistics, venue layout, and guest count in advance.",
  },
  {
    name: "Executive Arrives & Sets Up",
    text: "Your dedicated Entephoto executive arrives at the venue, sets up QR display stands and banners, and registers early guests.",
  },
  {
    name: "Live Event Management",
    text: "The executive monitors uploads in real time, handles guest registration queries, and ensures photo delivery is running smoothly throughout the event.",
  },
  {
    name: "Post-Event Report",
    text: "You receive a detailed analytics report: photos delivered, guest engagement, download rates, and top-shared moments.",
  },
];

const faqs = [
  {
    q: "What's the difference between Self Service and With Executive?",
    a: "With Self Service, your photographer handles all uploads and you set up the QR code display yourself. With the Executive plan, an Entephoto team member is physically present at your event — setting up QR banners, monitoring uploads, and supporting guests on-site.",
  },
  {
    q: "Is the price per event or per month?",
    a: "The pricing is per event. ₹999 for one Self Service event, ₹3,499 for one event with an Entephoto Executive.",
  },
  {
    q: "Is there a guest or photo limit?",
    a: "No. Both plans support unlimited guests and unlimited photos per event. You only pay per event, not per guest.",
  },
  {
    q: "Can I upgrade from Self Service to Executive after booking?",
    a: "Yes. Contact us before your event and we'll arrange an Executive upgrade subject to availability.",
  },
  {
    q: "How do guests receive their photos?",
    a: "Guests scan the QR code, register with a selfie, and receive a WhatsApp or SMS link to their personal gallery within 60 seconds of each photo being uploaded.",
  },
  {
    q: "Do guests need to download an app?",
    a: "No app required. The entire guest experience runs via a web link delivered on WhatsApp or SMS.",
  },
  {
    q: "What area does the Executive plan cover?",
    a: "The Executive plan is currently available across Kerala, India. Contact us for availability in other states.",
  },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.entephoto.co.in/landing" },
          { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.entephoto.co.in/pricing" },
        ],
      },
      {
        "@type": "Product",
        name: "Entephoto Self Service",
        description:
          "AI-powered event photo delivery platform. The photographer manages QR display setup and all uploads. Guests receive their photos instantly via WhatsApp.",
        brand: { "@type": "Brand", name: "Entephoto" },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "999",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.entephoto.co.in/pricing",
        },
        category: "Event Photography Service",
      },
      {
        "@type": "Product",
        name: "Entephoto With Executive",
        description:
          "Full-service event photo delivery with a dedicated Entephoto executive on-site. Executive sets up QR displays, monitors uploads, and supports guests live.",
        brand: { "@type": "Brand", name: "Entephoto" },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "3499",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.entephoto.co.in/pricing",
        },
        category: "Event Photography Service",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to Use Entephoto Self Service",
        description: "Step-by-step guide to using Entephoto's Self Service plan at your event.",
        step: selfServiceSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff]">
        <SiteNav />

        {/* ── BREADCRUMB ── */}
        <div className="max-w-5xl mx-auto px-6 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/landing" className="hover:text-purple-600 transition-colors">Home</Link>
            <span aria-hidden>/</span>
            <span className="text-gray-600 font-medium">Pricing</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <header className="max-w-5xl mx-auto px-6 pt-12 pb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">Pricing</p>
          <h1 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] tracking-tight mb-5">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            One event. One price. No per-guest fees, no hidden charges.
            Choose how hands-on you want us to be.
          </p>
        </header>

        {/* ── PRICING CARDS ── */}
        <main>
          <section aria-labelledby="plans-heading" className="max-w-5xl mx-auto px-6 pb-16">
            <h2 id="plans-heading" className="sr-only">Pricing Plans</h2>
            <div className="grid md:grid-cols-2 gap-8">

              {/* Self Service */}
              <article
                aria-label="Self Service plan"
                className="relative flex flex-col bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-purple-400 to-blue-400" />
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <User size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#1a1a2e]">Self Service</h3>
                      <p className="text-xs text-gray-400 font-medium">You're in control</p>
                    </div>
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="font-extrabold text-5xl text-[#1a1a2e]">₹999</span>
                    <span className="text-gray-400 text-sm mb-2">/ event</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    Your photographer handles everything — QR code display setup at the venue and all photo uploads. Entephoto's AI delivers photos to guests instantly.
                  </p>

                  <ul className="flex-1 space-y-3" aria-label="Self Service features">
                    {selfServiceFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check size={16} className="text-purple-500 mt-0.5 shrink-0" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* FIXED BUTTON POSITION */}
                  <div className="mt-auto pt-8">
                    <a 
                      href={`${process.env.NEXT_PUBLIC_APP_URL}/photographer/login`}
                      className="block text-center w-full py-4 rounded-xl bg-green-600 text-white font-semibold text-base hover:bg-green-700 transition"
                    >
                      Create Event →
                    </a>
                  </div>
                </div>
              </article>

              {/* With Executive */}
              <article
                aria-label="With Entephoto Executive plan"
                className="relative flex flex-col bg-white rounded-3xl border-2 border-purple-500 shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
              >
                {/* Popular badge */}
                <div className="absolute top-5 right-5 flex items-center gap-1 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  <Star size={10} aria-hidden /> Most Popular
                </div>
                <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 to-orange-500" />
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-orange-100 flex items-center justify-center">
                      <Users size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#1a1a2e]">With Entephoto Executive</h3>
                      <p className="text-xs text-gray-400 font-medium">We manage everything on-site</p>
                    </div>
                  </div>

                  <div className="flex items-end gap-2">
                    <span className="font-extrabold text-5xl text-[#1a1a2e]">₹3,499</span>
                    <span className="text-gray-400 text-sm mb-2">/ event</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    A dedicated Entephoto executive is physically present at your event — setting up QR displays, monitoring uploads live, and supporting your guests on-site.
                  </p>

                  <ul className="flex-1 space-y-3" aria-label="Executive plan features">
                    {executiveFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check size={16} className="text-orange-500 mt-0.5 shrink-0" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/918848086285?text=Hi!%20I'm%20interested%20in%20booking%20the%20Entephoto%20Executive%20plan%20for%20my%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    id="executive-cta"
                    className="mt-2 block text-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-sm shadow-lg hover:shadow-purple-300 transition-shadow"
                  >
                    Book Executive – ₹3,499
                  </a>
                </div>
              </article>
            </div>
          </section>

          
          

          {/* ── HOW IT WORKS ── */}
          <section aria-labelledby="how-heading" className="max-w-5xl mx-auto px-6 pb-20">
            <h2 id="how-heading" className="font-bold text-2xl md:text-3xl text-[#1a1a2e] text-center mb-12">
              How Each Plan Works
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Self Service steps */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <User size={18} className="text-purple-600" aria-hidden />
                  <h3 className="font-bold text-lg text-[#1a1a2e]">Self Service</h3>
                </div>
                <ol className="space-y-6" aria-label="Self Service steps">
                  {selfServiceSteps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a1a2e] text-sm mb-1">{step.name}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex items-center gap-3 text-xs text-gray-400 bg-purple-50 rounded-xl px-4 py-3">
                  <QrCode size={16} className="text-purple-400 shrink-0" aria-hidden />
                  <span>Photographer sets up the QR display and manages all uploads independently.</span>
                </div>
              </div>

              {/* Executive steps */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Users size={18} className="text-orange-500" aria-hidden />
                  <h3 className="font-bold text-lg text-[#1a1a2e]">With Entephoto Executive</h3>
                </div>
                <ol className="space-y-6" aria-label="Executive plan steps">
                  {executiveSteps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-[#1a1a2e] text-sm mb-1">{step.name}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 flex items-center gap-3 text-xs text-gray-400 bg-orange-50 rounded-xl px-4 py-3">
                  <Headphones size={16} className="text-orange-400 shrink-0" aria-hidden />
                  <span>Your dedicated executive handles everything on-site so you can focus on the event.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section aria-labelledby="faq-heading" className="max-w-3xl mx-auto px-6 pb-20">
            <h2 id="faq-heading" className="font-bold text-2xl text-[#1a1a2e] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 px-6 py-5 shadow-sm">
                  <h3 className="font-semibold text-sm text-[#1a1a2e] mb-2">{faq.q}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section aria-labelledby="learn-more-heading" className="max-w-5xl mx-auto px-6 pb-20">
            <h2 id="learn-more-heading" className="font-bold text-lg text-[#1a1a2e] mb-5 text-center">
              Learn More About How Entephoto Works
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Instant Photo Delivery", href: "/instant-photo-delivery", desc: "How photos reach guests in under 60 seconds" },
                { label: "AI Face Recognition", href: "/ai-face-recognition", desc: "The technology behind our photo matching" },
                { label: "Wedding Photo Sharing", href: "/wedding-photo-sharing", desc: "Perfect for weddings of any size" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group block bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:border-purple-300 hover:shadow-md transition-all"
                >
                  <p className="text-sm font-semibold text-[#1a1a2e] group-hover:text-purple-600 transition-colors">{link.label}</p>
                  <p className="text-xs text-gray-400 mt-1">{link.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section aria-labelledby="final-cta-heading" className="max-w-3xl mx-auto px-6 pb-20 text-center">
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 p-px shadow-xl">
              <div className="rounded-2xl bg-white px-8 py-12">
                <h2 id="final-cta-heading" className="font-extrabold text-2xl text-[#1a1a2e] mb-3">
                  Ready to Deliver Memories Instantly?
                </h2>
                <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                  Contact us to book your plan, ask about availability, or get a custom quote for large events.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/918848086285?text=Hi!%20I'm%20interested%20in%20Entephoto%20for%20my%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-sm shadow-lg hover:shadow-purple-300 transition-shadow"
                  >
                    Book Now →
                  </a>
                  <Link
                    href="/knowledge"
                    className="px-7 py-3 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:border-purple-400 hover:text-purple-600 transition-colors"
                  >
                    Read Guides
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
