"use client"; // Add this line to mark as a Client Component

import Image from "next/image";
import Link from "next/link";
import MatrixBackground from "../../components/MatrixBackground";
import "./projects.css"; // Import the CSS file

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  imageObjectPosition?: string;
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
      imageUrl: "/file.svg",
      projectUrl: "#",
      githubUrl: "https://github.com/yourusername/ecommerce-project",
    },
    {
      id: "project2",
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      technologies: ["React", "TypeScript", "Firebase", "TailwindCSS"],
      imageUrl: "/file.svg",
      projectUrl: "#",
      githubUrl: "https://github.com/yourusername/task-management",
    },
    {
      id: "project3",
      title: "React Weather Dashboard",
      description:
        "A weather dashboard built with React that displays current and forecast weather data for any location using a third-party weather API.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "OpenWeatherAPI",
        "React",
        "Bootstrap",
      ],
      imageUrl: "/weather-app-1.png",
      projectUrl: "https://hardcore-varahamihira-b12763.netlify.app/",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      imageObjectPosition: "center 40%",
    },
    {
      id: "project4",
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current and forecast weather data for any location using a third-party weather API.",
      technologies: ["JavaScript", "HTML", "CSS", "OpenWeatherAPI"],
      imageUrl: "/weather-app-2.png",
      projectUrl: "https://sleepy-panini-bdebb2.netlify.app/",
      githubUrl: "https://github.com/yourusername/personal-blog",
      imageObjectPosition: "center 60%",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 bg-gray-900 text-gray-100 min-h-screen">
      {/* Matrix Background Animation */}
      <MatrixBackground />

      <div className="max-w-6xl mx-auto">
        {/* Terminal-like header */}
        <div className="mb-12 border border-gray-700 rounded-lg overflow-hidden bg-gray-800 shadow-lg">
          <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <code className="text-gray-400 text-sm font-mono">~/projects</code>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-green-400 font-mono mr-2">$</span>
              <h1 className="text-4xl font-bold font-mono text-blue-400 inline typing-animation">
                My Projects
              </h1>
              <span className="animate-pulse ml-1">_</span>
            </div>
            <p className="text-gray-400 pl-5 border-l-2 border-gray-700">
              Explore my portfolio of software development projects. Each
              project showcases different skills and technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
            >
              <div className="h-56 bg-gray-700 relative">
                <div className="absolute top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm px-4 py-2 flex items-center border-b border-gray-700 z-10">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <code className="text-gray-400 text-xs font-mono truncate">
                    {project.title}.tsx
                  </code>
                </div>
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="transition-all duration-500 hover:scale-105"
                    style={{
                      objectFit: "cover",
                      objectPosition: project.imageObjectPosition || "center",
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-mono">
                    {"// Screenshot not available"}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400 font-mono flex items-center">
                  <span className="text-green-400 mr-2">{">"}</span>
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-blue-300 px-3 py-1 rounded-md text-sm font-mono border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.projectUrl && (
                    <Link
                      href={project.projectUrl}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-flex items-center group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">Live Demo</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  )}

                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors inline-flex items-center border border-gray-600 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">GitHub</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.891 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Matrix-inspired code line animations */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-10">
          <div className="code-rain"></div>
        </div>
      </div>
    </main>
  );
}
