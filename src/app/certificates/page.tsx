import Image from "next/image";
import Link from "next/link";

interface Certificate {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  description: string;
  imageUrl?: string;
  credentialUrl?: string;
  details?: string[];
}

export default function CertificatesPage() {
  // Lucy's actual certificates and education
  const certificates: Certificate[] = [
    {
      id: "cert1",
      title: "Code First Girls Degree in Full Stack Development",
      organization: "Code First Girls",
      issueDate: "2024",
      description:
        "An intensive 13-week course covering full stack development fundamentals and specialization topics.",
      imageUrl: "/file.svg", // Using available SVG as placeholder
      details: [
        "The Foundation part focused on data structures, APIs, libraries, testing and problem solving using Python, plus SQL fundamentals.",
        "The Specialisation part covered advanced HTML, CSS, JavaScript, React, TypeScript, UX, version control, debugging, and computer science topics.",
        "Collaborated on a 5-week group project where I played a key role in creating the React user interface and integrating front-end and back-end services.",
      ],
    },
    {
      id: "cert2",
      title: "iOS and Swift - The Complete iOS App Development Bootcamp",
      organization: "Udemy",
      issueDate: "December 2021",
      description:
        "Comprehensive iOS development course covering Swift, SwiftUI, and modern app development.",
      imageUrl: "/file.svg", // Using available SVG as placeholder
      credentialUrl:
        "https://www.udemy.com/certificate/UC-713a6b81-5bd3-4b58-bb4f-4e376fc765b4/",
      details: [
        "Covered Object Oriented Programming, control structures, data structures, software design, networking, and persistent local data storage.",
        "Learned advanced topics including In-App Purchases with Apple StoreKit, machine learning, augmented reality, and SwiftUI.",
        "Built over 20 iOS apps throughout the course and subsequently started developing my own iOS collaborative events calendar app and timer app.",
      ],
    },
    {
      id: "cert3",
      title: "SheCodes React Workshop",
      organization: "SheCodes",
      issueDate: "2021",
      description:
        "Advanced workshop focused on React development and modern frontend techniques.",
      imageUrl: "/file.svg", // Using available SVG as placeholder
      credentialUrl:
        "https://www.shecodes.io/certificates/2f60992402a11738860ab607c86441a7",
      details: [
        "Detailed focus on React components, events, states, forms, properties, conditional rendering, loops, AJAX, and external components.",
        "Covered using terminal, npm, create-react-app, React debugging and hosting.",
        "Built a weather application using React as the final project.",
      ],
    },
    {
      id: "cert4",
      title: "SheCodes Plus Workshop",
      organization: "SheCodes",
      issueDate: "2021",
      description:
        "Eight-week workshop covering advanced frontend development with API integration.",
      imageUrl: "/file.svg", // Using available SVG as placeholder
      credentialUrl:
        "https://www.shecodes.io/certificates/11f56e5b1674d9ffa5688086518f599a",
      details: [
        "Learned advanced HTML and CSS, plus introduction to GitHub, Bootstrap and hosting.",
        "Covered advanced JavaScript topics and API integration.",
        "Built a weather app using the Open Weather Map API in JavaScript as the final project.",
      ],
    },
    {
      id: "cert5",
      title: "SheCodes Introduction to Coding",
      organization: "SheCodes",
      issueDate: "2021",
      description:
        "Two-week introductory workshop covering web development fundamentals.",
      imageUrl: "/file.svg", // Using available SVG as placeholder
      credentialUrl:
        "https://www.shecodes.io/certificates/40f353a498faeb8fc59832e6d2e752d6",
      details: [
        "Workshop for beginners covering HTML, CSS, JavaScript and VS Code.",
        "Built a landing page using HTML, CSS and JavaScript as the final project.",
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Software Development Learning Journey
      </h1>

      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-center text-gray-700">
          These certifications represent my journey in software development,
          showcasing my commitment to continuous learning and skill development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Issuer:</span>{" "}
                {certificate.organization}
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Completed:</span>{" "}
                {certificate.issueDate}
              </p>
              <p className="text-gray-700 mb-4">{certificate.description}</p>

              {certificate.details && (
                <div className="mb-4">
                  <h4 className="text-lg font-medium mb-2">Course Details:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {certificate.details.map((detail, index) => (
                      <li key={index} className="text-gray-700">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {certificate.credentialUrl && (
                <Link
                  href={certificate.credentialUrl}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
