// app/security/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/shared/SiteNav";
import SiteFooter from "@/components/shared/SiteFooter";

export const metadata: Metadata = {
  title: "Security & Privacy | Entephoto",
  description:
    "How Entephoto protects your data, facial biometrics, and event photos. We are committed to GDPR and DPDP Act compliance.",
  alternates: {
    canonical: "https://www.entephoto.co.in/security",
  },
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf7ff] via-[#fff5f3] to-[#f3f6ff]">
      <SiteNav />

      <header className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
          Trust Center
        </p>
        <h1 className="font-extrabold text-4xl md:text-5xl text-[#1a1a2e] tracking-tight mb-5">
          Security & Privacy
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          We use facial recognition to deliver photos, which means we handle sensitive data. Here is exactly how we protect it.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-12 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Data Retention & Deletion</h2>
          <p className="mb-4">
            We do not want your data forever. Our systems are designed to process, deliver, and delete. 
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Facial Embeddings:</strong> When you upload a selfie, we convert it into a mathematical string (an embedding). The original selfie image is deleted immediately. The mathematical embedding is automatically deleted 30 days after the event concludes.</li>
            <li><strong>Event Photos:</strong> Event galleries expire based on the timeline set by the organizer or photographer (typically 30 to 90 days). Once expired, high-resolution source files are securely purged from our servers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Privacy by Design</h2>
          <p className="mb-4">
            Entephoto was built to be more private than traditional event photography methods. 
          </p>
          <p className="mb-4">
            Traditionally, photographers share a massive Google Drive or Dropbox folder containing thousands of photos of every guest. Anyone with the link can download anyone else's photos.
          </p>
          <p>
            With Entephoto, you only receive photos in which our AI has identified you. You cannot browse other guests' private galleries. This ensures that sensitive or private moments (especially at family events like weddings) remain restricted to the people involved.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Infrastructure Security</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Encryption:</strong> All data in transit is encrypted using industry-standard TLS. All photos stored on our servers are encrypted at rest using AES-256.</li>
            <li><strong>Cloud Providers:</strong> We host our infrastructure on leading cloud providers (AWS/GCP) that maintain SOC 2 Type II, ISO 27001, and PCI-DSS compliance.</li>
            <li><strong>No Third-Party Selling:</strong> We have never, and will never, sell guest data, phone numbers, or facial biometrics to third-party advertisers or data brokers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Compliance</h2>
          <p>
            Our processing systems are built to align with the European Union's GDPR (General Data Protection Regulation) and India's DPDP Act (Digital Personal Data Protection Act). Guest registration requires explicit, active consent before any face matching occurs.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
