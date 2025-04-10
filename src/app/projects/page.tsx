import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

export default function ProjectsPage() {
  // You can replace these with your actual projects
  const projects: Project[] = [
    {
      id: "project1",
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      imageUrl: "/file.svg", // Changed from placeholder.png
      projectUrl: "#",
      githubUrl: "https://github.com/yourusername/ecommerce-project",
    },
    {
      id: "project2",
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      technologies: ["React", "TypeScript", "Firebase", "TailwindCSS"],
      imageUrl: "/file.svg", // Changed from placeholder.png
      projectUrl: "#",
      githubUrl: "https://github.com/yourusername/task-management",
    },
    {
      id: "project3",
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecast weather data for any location using a third-party weather API.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherAPI"],
      imageUrl: "/file.svg", // Changed from placeholder.png
      projectUrl: "#",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
    },
    {
      id: "project4",
      title: "Personal Blog",
      description:
        "A blog platform built with Next.js and TypeScript featuring markdown support, comment system, and search functionality.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Markdown"],
      imageUrl: "/file.svg", // Changed from placeholder.png
      projectUrl: "#",
      githubUrl: "https://github.com/yourusername/personal-blog",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-center text-gray-700">
          Explore my portfolio of software development projects. Each project
          showcases different skills and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-56 bg-gray-200 relative">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Project Screenshot
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.projectUrl && (
                  <Link
                    href={project.projectUrl}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                )}

                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
