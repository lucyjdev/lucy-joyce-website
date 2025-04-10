import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">My Portfolio</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="/certificates" className="hover:underline me-4 md:me-6">Certificates</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline me-4 md:me-6">Blog</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">Projects</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} My Portfolio. All Rights Reserved.</span>
      </div>
    </footer>
  );
}