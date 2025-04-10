import Image from "next/image";

export default function AboutPage() {
  // You can replace these with your actual skills
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "Express", "HTML", "CSS",
    "Tailwind CSS", "Git", "GitHub", "MongoDB"
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <section className="mb-12 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="relative w-full aspect-square max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-200">
            {/* Replace with your actual photo */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">Your Photo</div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Hello, I'm Your Name</h2>
          <p className="mb-4">
            I am a passionate software developer with expertise in building web applications using modern technologies.
            With a strong foundation in both front-end and back-end development, I enjoy creating responsive and
            user-friendly applications that solve real-world problems.
          </p>
          <p className="mb-4">
            I have X years of experience working in the software development industry, specializing in full-stack
            development. My journey in technology began when [your story here].
          </p>
          <p>
            When I'm not coding, you can find me [your hobbies/interests]. I believe in continuous learning and
            regularly attend tech conferences and contribute to open-source projects.
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Education</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h3 className="text-xl font-medium">Degree Name</h3>
            <p className="text-gray-700">University Name, Graduation Year</p>
            <p className="mt-2">Brief description of your education, achievements, or relevant coursework.</p>
          </div>
          
          {/* Add more education items as needed */}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Work Experience</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <div className="flex flex-wrap justify-between items-center mb-2">
              <h3 className="text-xl font-medium">Job Position</h3>
              <span className="text-gray-600 text-sm">Jan 2022 - Present</span>
            </div>
            <p className="text-gray-700 mb-2">Company Name, Location</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Key responsibility or achievement</li>
              <li>Another responsibility or achievement</li>
              <li>One more responsibility or achievement</li>
            </ul>
          </div>
          
          {/* Add more work experience items as needed */}
        </div>
      </section>
    </main>
  );
}