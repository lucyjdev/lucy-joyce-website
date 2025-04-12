import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color bg-background/80 backdrop-blur-sm shadow-inner mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 gap-2 group">
            <div className="flex space-x-1">
              <div className="w-2.5 h-2.5 bg-terminal-red rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-terminal-yellow rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-terminal-green rounded-full"></div>
            </div>
            <span className="self-center text-lg font-mono">
              <span className="text-accent-secondary">{"{"}</span> Lucy Joyce{" "}
              <span className="text-accent-secondary">{"}"}</span>
            </span>
          </Link>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-text-muted sm:mb-0">
            <li>
              <Link
                href="/about"
                className="hover:text-accent-primary transition-colors me-4 md:me-6 font-mono"
              >
                /about
              </Link>
            </li>
            <li>
              <Link
                href="/certificates"
                className="hover:text-accent-primary transition-colors me-4 md:me-6 font-mono"
              >
                /certificates
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-accent-primary transition-colors me-4 md:me-6 font-mono"
              >
                /blog
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-accent-primary transition-colors font-mono"
              >
                /projects
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-border-color sm:mx-auto lg:my-8" />

        <div className="flex flex-wrap justify-between items-center">
          <span className="block text-sm text-text-muted sm:text-center font-mono">
            <span className="text-accent-primary">/**</span> © {currentYear}{" "}
            Lucy Joyce <span className="text-accent-primary">*/</span>
          </span>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
