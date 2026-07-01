import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="py-8 px-6 bg-[#f5f1eb] border-t border-gray-200 text-center text-xs text-gray-400">
      <p>© {new Date().getFullYear()} Entephoto. All rights reserved.</p>
      <div className="flex justify-center flex-wrap gap-4 mt-3">
        <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
        <Link href="/knowledge" className="hover:text-purple-600 transition-colors">Knowledge Hub</Link>
        <Link href="/camera-support" className="hover:text-purple-600 transition-colors">Camera Support</Link>
        <Link href="/pricing" className="hover:text-purple-600 transition-colors">Pricing</Link>
        <Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link>
        <Link href="/security" className="hover:text-purple-600 transition-colors">Security</Link>
        <Link href="/#contact" className="hover:text-purple-600 transition-colors">Contact</Link>
      </div>
    </footer>
  );
}
