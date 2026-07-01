// components/knowledge/CTABlock.tsx
import Link from "next/link";

interface CTABlockProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABlock({
  heading = "Ready to Transform Your Event Photography?",
  subtext = "Join photographers and event organizers who deliver photos instantly with Entephoto.",
  primaryLabel = "Get Started Free",
  primaryHref = "/landing#contact",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: CTABlockProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-purple-600 to-orange-500 p-px shadow-xl">
      <div className="rounded-2xl bg-white px-8 py-12 text-center">
        <h2 className="font-extrabold text-2xl md:text-3xl text-[#1a1a2e] tracking-tight mb-3">
          {heading}
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold text-sm shadow-lg hover:shadow-purple-300 transition-shadow"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="px-7 py-3 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:border-purple-400 hover:text-purple-600 transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
