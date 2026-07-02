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
          {/* FIXED BUTTON POSITION */}
          <div className="mt-auto pt-8 w-full sm:w-auto">
            <a 
              href={`${process.env.NEXT_PUBLIC_APP_URL}/photographer/login`}
              className="block text-center w-full px-8 py-4 rounded-xl bg-green-600 text-white font-semibold text-base hover:bg-green-700 transition"
            >
              Create Event →
            </a>
          </div>
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
