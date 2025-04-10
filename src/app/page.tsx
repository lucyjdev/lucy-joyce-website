import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600">Lucy Joyce</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Software Developer & Career Changer
          </p>
          <p className="mb-8 text-gray-700">
            I successfully transitioned into tech and now build modern web applications using the latest technologies.
            My journey from <span className="italic">previous career</span> to software development gives me a unique perspective.
            Explore my site to learn about my skills, journey, certificates, thoughts on tech, and projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            {/* Profile photo */}
            <Image 
              src="/profile-lucy.jpg" 
              alt="Lucy Joyce"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">About My Journey</h3>
            <p className="text-gray-600 mb-4">
              Learn about my career transition, background, skills, and what led me to tech.
            </p>
            <Link
              href="/about"
              className="text-blue-600 hover:underline flex items-center"
            >
              Read More
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
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Certificates & Learning</h3>
            <p className="text-gray-600 mb-4">
              See the certifications and learning paths that helped me transition to tech.
            </p>
            <Link
              href="/certificates"
              className="text-blue-600 hover:underline flex items-center"
            >
              View Certificates
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
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Career Change Blog</h3>
            <p className="text-gray-600 mb-4">
              Read my thoughts on software development and insights on changing careers into tech.
            </p>
            <Link
              href="/blog"
              className="text-blue-600 hover:underline flex items-center"
            >
              Read Blog
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
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Career Transition Portfolio</h3>
            <p className="text-gray-600 mb-4">
              A showcase of my progression from beginner to professional developer, highlighting key milestones.
            </p>
            <Link
              href="/projects"
              className="text-blue-600 hover:underline flex items-center"
            >
              View Project
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

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Tech Skills Showcase</h3>
            <p className="text-gray-600 mb-4">
              A collection of projects demonstrating the technical skills I've developed during my career transition.
            </p>
            <Link
              href="/projects"
              className="text-blue-600 hover:underline flex items-center"
            >
              View Project
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
    </main>
  );
}
