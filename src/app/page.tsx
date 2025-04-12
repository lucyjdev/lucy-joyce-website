import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="mb-6 flex items-center">
            <span className="text-accent-primary font-mono mr-2">$</span>
            <h1 className="text-4xl md:text-5xl font-bold typing-animation">
              <span className="text-accent-primary">Lucy</span> Joyce
            </h1>
            <span className="animate-pulse ml-1 h-8 w-2 bg-accent-primary"></span>
          </div>

          <div className="mb-4 flex">
            <span className="text-accent-secondary font-mono mr-2">&gt;</span>
            <p className="text-xl md:text-2xl font-mono">
              Software Developer & Career Changer
            </p>
          </div>

          <div className="code-block mb-8 text-text-muted">
            <div className="code-line">
              <span className="code-comment">// About me</span>
            </div>
            <div className="code-line">
              <span className="code-keyword">const</span>{" "}
              <span className="code-variable">developer</span> = {"{"}
            </div>
            <div className="code-line pl-8">
              <span className="code-variable">background</span>:{" "}
              <span className="code-string">"Previous Career Changer"</span>,
            </div>
            <div className="code-line pl-8">
              <span className="code-variable">focus</span>:{" "}
              <span className="code-string">"Modern Web Applications"</span>,
            </div>
            <div className="code-line pl-8">
              <span className="code-variable">skills</span>: [
              <span className="code-string">"React"</span>,{" "}
              <span className="code-string">"TypeScript"</span>,{" "}
              <span className="code-string">"Node.js"</span>,{" "}
              <span className="code-string">"Next.js"</span>],
            </div>
            <div className="code-line">{"}"};</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-accent-primary text-white font-mono rounded-lg hover:bg-accent-primary/80 transition-all glowing-border"
            >
              $ cd /about
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-border-color text-accent-secondary font-mono rounded-lg hover:bg-card-bg transition-all"
            >
              $ cd /projects
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="terminal-window relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden p-2">
            <div className="terminal-header absolute top-0 left-0 right-0">
              <div className="terminal-dots flex gap-1.5">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
              </div>
            </div>

            {/* Profile photo with coder style frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-primary/30">
              <Image
                src="/profile-lucy.jpg"
                alt="Lucy Joyce"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-accent-secondary p-2 font-mono text-xs">
                lucy@dev:~$ <span className="cursor-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12">
        <h2 className="mb-8 font-mono text-3xl font-bold text-center">
          Featured Sections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me */}
          <div className="coder-card p-6">
            <div className="terminal-header rounded-t mb-4">
              <div className="terminal-dots flex gap-1.5">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
              </div>
              <div className="terminal-title ml-2">about.js</div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              <span className="text-accent-secondary">{"<"}</span>
              About My Journey
              <span className="text-accent-secondary">{"/>"}</span>
            </h3>

            <p className="text-text-muted mb-4">
              Learn about my career transition, background, skills, and what led
              me to tech.
            </p>

            <Link
              href="/about"
              className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center font-mono"
            >
              import <span className="text-white mx-1">{" { "}</span>MyStory
              <span className="text-white mx-1">{" } "}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Certificates */}
          <div className="coder-card p-6">
            <div className="terminal-header rounded-t mb-4">
              <div className="terminal-dots flex gap-1.5">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
              </div>
              <div className="terminal-title ml-2">certificates.js</div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              <span className="text-accent-secondary">{"<"}</span>
              Certificates & Learning
              <span className="text-accent-secondary">{"/>"}</span>
            </h3>

            <p className="text-text-muted mb-4">
              See the certifications and learning paths that helped me
              transition to tech.
            </p>

            <Link
              href="/certificates"
              className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center font-mono"
            >
              import <span className="text-white mx-1">{" { "}</span>
              Certificates<span className="text-white mx-1">{" } "}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Blog */}
          <div className="coder-card p-6">
            <div className="terminal-header rounded-t mb-4">
              <div className="terminal-dots flex gap-1.5">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
              </div>
              <div className="terminal-title ml-2">blog.tsx</div>
            </div>

            <h3 className="text-xl font-semibold mb-3">
              <span className="text-accent-secondary">{"<"}</span>
              Career Change Blog
              <span className="text-accent-secondary">{"/>"}</span>
            </h3>

            <p className="text-text-muted mb-4">
              Read my thoughts on software development and insights on changing
              careers into tech.
            </p>

            <Link
              href="/blog"
              className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center font-mono"
            >
              import <span className="text-white mx-1">{" { "}</span>BlogPosts
              <span className="text-white mx-1">{" } "}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <h2 className="mb-8 font-mono text-3xl font-bold text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="coder-card">
            <div className="terminal-header rounded-t">
              <div className="terminal-dots flex gap-1.5">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
              </div>
              <div className="terminal-title ml-2">portfolio-project.jsx</div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-accent-primary font-mono">const</span>{" "}
                CareerTransitionPortfolio
              </h3>

              <p className="text-text-muted mb-4">
                A showcase of my progression from beginner to professional
                developer, highlighting key milestones.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TailwindCSS</span>
              </div>

              <Link
                href="/projects"
                className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center font-mono"
              >
                {"() => "} viewProject()
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="coder-card">
            <div className="terminal-header rounded-t">
              <div className="terminal-dots flex gap-1.5">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
              </div>
              <div className="terminal-title ml-2">skills-showcase.tsx</div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-accent-primary font-mono">const</span>{" "}
                TechSkillsShowcase
              </h3>

              <p className="text-text-muted mb-4">
                A collection of projects demonstrating the technical skills I've
                developed during my career transition.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>

              <Link
                href="/projects"
                className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center font-mono"
              >
                {"() => "} viewProject()
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
