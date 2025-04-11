import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  category: "tech" | "career" | "learning";
}

export default function BlogPage() {
  // Updated blog posts with career change content
  const blogPosts: BlogPost[] = [
    {
      id: "post1",
      title: "Rebooting my Career: My Tech Transition Story",
      excerpt:
        "The challenges I faced, lessons learned, and how I successfully transitioned into a tech career as a software developer.",
      date: "April 10, 2025",
      author: "Lucy Joyce",
      tags: ["Career Change", "Tech Journey", "Software Development"],
      slug: "journey-to-software-developer",
      category: "career",
    },
    {
      id: "post6",
      title:
        "From Theory to Practice: What I Learned in My First Year as a Developer",
      excerpt:
        "Reflecting on my first year working as a software developer, the projects I contributed to, and how my previous career experience helped me succeed.",
      date: "April 5, 2025",
      author: "Lucy Joyce",
      tags: ["Career Development", "Real Projects", "Lessons Learned"],
      slug: "first-year-as-developer",
      category: "career",
    },
    {
      id: "post2",
      title: "Getting Started with TypeScript: A Career Changer's Perspective",
      excerpt:
        "My experience learning TypeScript as someone new to programming, with tips specifically for other career changers.",
      date: "April 1, 2025",
      author: "Lucy Joyce",
      tags: ["TypeScript", "JavaScript", "Learning Path"],
      slug: "getting-started-with-typescript",
      category: "tech",
    },
    {
      id: "post3",
      title: "Building Modern UIs with React and TailwindCSS",
      excerpt:
        "How I leveraged React and TailwindCSS to create beautiful, responsive user interfaces efficiently while building my portfolio.",
      date: "March 15, 2025",
      author: "Lucy Joyce",
      tags: ["React", "TailwindCSS", "UI/UX"],
      slug: "building-modern-uis-with-react-and-tailwindcss",
      category: "tech",
    },
    {
      id: "post4",
      title: "Learning Resources That Accelerated My Tech Career Change",
      excerpt:
        "The key courses, books, tutorials, and communities that were instrumental in my successful career transition into tech.",
      date: "March 5, 2025",
      author: "Lucy Joyce",
      tags: ["Learning Resources", "Career Change", "Education"],
      slug: "learning-resources-for-career-change",
      category: "learning",
    },
    {
      id: "post5",
      title: "Next.js: The Framework That Boosted My Developer Journey",
      excerpt:
        "Why I chose Next.js for my projects and how it helped me showcase my skills during my career transition.",
      date: "February 28, 2025",
      author: "Lucy Joyce",
      tags: ["Next.js", "React", "Web Development"],
      slug: "nextjs-the-future-of-react-framework",
      category: "tech",
    },
  ];

  // Group posts by category
  const techPosts = blogPosts.filter((post) => post.category === "tech");
  const careerPosts = blogPosts.filter((post) => post.category === "career");
  const learningPosts = blogPosts.filter(
    (post) => post.category === "learning"
  );

  return (
    <main className="container mx-auto px-4 py-12 bg-gray-50">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-center">
          My Tech & Career Change Blog
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-center text-gray-700 text-lg">
            Welcome to my blog where I share insights on software development,
            my career transition journey into tech, and resources that helped me
            along the way.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Post</h2>
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
              {blogPosts[0].category === "career"
                ? "Career Change"
                : blogPosts[0].category === "tech"
                ? "Technology"
                : "Learning Path"}
            </div>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="block mt-1 text-2xl font-bold text-gray-900 hover:text-blue-700 transition-colors"
            >
              {blogPosts[0].title}
            </Link>
            <p className="mt-2 text-gray-600">{blogPosts[0].excerpt}</p>
            <div className="mt-4 flex items-center">
              <div className="text-sm text-gray-500">
                <p className="font-medium">{blogPosts[0].author}</p>
                <p>{blogPosts[0].date}</p>
              </div>
            </div>
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              Read full article →
            </Link>
          </div>
        </div>
      </section>

      {/* Career Change Posts */}
      {careerPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="border-b-4 border-blue-500 pb-2">
              Career Change Journey
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-gray-600 text-sm">{post.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Tech Posts */}
      {techPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="border-b-4 border-green-500 pb-2">
              Technology Insights
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-gray-600 text-sm">{post.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Learning Resources Posts */}
      {learningPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="border-b-4 border-purple-500 pb-2">
              Learning Resources
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-purple-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-gray-600 text-sm">{post.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="text-center py-8">
        <p className="text-gray-600 mb-4">
          Want to stay updated with my latest posts? Subscribe to my newsletter.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
