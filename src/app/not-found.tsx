import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center flex-col px-4">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
