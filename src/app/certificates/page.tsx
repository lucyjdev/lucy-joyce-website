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
}

export default function CertificatesPage() {
  // You can replace these with your actual certificates
  const certificates: Certificate[] = [
    {
      id: "cert1",
      title: "Web Development Certification",
      organization: "Example Organization",
      issueDate: "January 2023",
      description:
        "A comprehensive certification covering modern web development technologies and best practices.",
      imageUrl: "/placeholder.png",
      credentialUrl: "#",
    },
    {
      id: "cert2",
      title: "React Developer Certification",
      organization: "Example Academy",
      issueDate: "March 2023",
      description:
        "Advanced certification focusing on React, Redux, and modern frontend architecture.",
      imageUrl: "/placeholder.png",
      credentialUrl: "#",
    },
    {
      id: "cert3",
      title: "TypeScript Professional",
      organization: "Example Institute",
      issueDate: "June 2023",
      description:
        "Professional certification for TypeScript development including advanced type systems and patterns.",
      imageUrl: "/placeholder.png",
      credentialUrl: "#",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Certificates</h1>

      <div className="max-w-3xl mx-auto mb-8">
        <p className="text-center text-gray-700">
          These certifications represent my commitment to continuous learning
          and professional development in the field of software development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 relative">
              {certificate.imageUrl ? (
                <Image
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Certificate Image
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Issuer:</span>{" "}
                {certificate.organization}
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Date:</span>{" "}
                {certificate.issueDate}
              </p>
              <p className="text-gray-700 mb-4">{certificate.description}</p>
              {certificate.credentialUrl && (
                <Link
                  href={certificate.credentialUrl}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify Certificate
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
