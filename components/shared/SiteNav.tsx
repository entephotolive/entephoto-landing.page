import Link from "next/link";
import Image from "next/image";

export default function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="relative block w-40 h-10">
          <Image
            src="/logo.png"
            alt="Entephoto"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <div className="flex items-center gap-6 text-sm font-semibold text-gray-600">
          <Link href="/knowledge" className="hover:text-purple-600 transition-colors hidden md:block">
            Knowledge Hub
          </Link>
          <Link href="/pricing" className="hover:text-purple-600 transition-colors hidden md:block">
            Pricing
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
