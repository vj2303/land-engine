import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-white/50 mb-6">
        That plot or page is no longer listed.
      </p>
      <Link href="/" className="text-gold hover:underline">
        Back to all plots
      </Link>
    </div>
  );
}
