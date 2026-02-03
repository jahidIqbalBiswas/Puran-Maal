import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary">
          পুরান মাল
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/products" className="hover:text-primary">
            সব পণ্য
          </Link>
          <Link
            href="/create"
            className="bg-secondary text-black px-4 py-2 rounded-button"
          >
            বিক্রি করুন
          </Link>
        </div>
      </div>
    </nav>
  );
}
