import Image from "next/image";
import Link from "next/link";
import Comments from "@/components/Comments";

export default function TechTransitionBlogPost() {
  const blogSlug = "journey-to-software-developer";

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to all posts
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Rebooting my Career: My Tech Transition Story
        </h1>
        <div className="flex items-center text-gray-600">
          <span>April 10, 2025</span>
          <span className="mx-2">•</span>
          <span>Lucy Joyce</span>
          <span className="mx-2">•</span>
          <span>Career Change</span>
        </div>
      </header>

      <div className="relative h-96 w-full mb-12 rounded-xl overflow-hidden">
        <Image
          src="/file.svg"
          alt="Career transition illustration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/50 to-purple-700/30 flex items-center justify-center p-6">
          <p className="text-white text-2xl md:text-3xl font-light max-w-2xl text-center italic">
            "This blog chronicles my transition from the world of customer
            relations to the realm of code, highlighting the challenges,
            triumphs, and lessons learned along the way."
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-6">
          Changing careers is a thrilling yet daunting prospect, especially when
          you've spent years developing expertise in a different field. After
          nearly ten years in customer relations, I reached a pivotal moment.
          While I valued the experience I'd gained, on reflection I realised
          that I needed a new challenge - one that would continuously push me to
          learn and grow. This blog chronicles my transition from the world of
          customer relations to the realm of code, highlighting the challenges,
          triumphs, and lessons learned along the way.
        </p>

        <p className="mb-6">
          The tech world had always intrigued me, but self-doubt and life's
          demands held me back. Then, in 2020, when I was furloughed, I finally
          had the space and time to explore this curiosity. I embarked on my
          coding journey with a self-paced Python course, grasping the
          fundamentals of programming logic. Later, through the SheCodes Plus
          course, I began to develop an understanding of front-end development
          with JavaScript and React, building a weather app that fetched
          real-time data from an API—an interesting challenge that fuelled my
          passion.
        </p>

        <div className="flex justify-center my-10">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/globe.svg"
              alt="Learning to code illustration"
              fill
              className="object-contain bg-gray-100"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          The Decision to Switch
        </h2>
        <p className="mb-6">
          Returning to full-time work made it clear that I couldn't postpone my
          tech dream any longer. In 2021, encouraged by my incredibly supportive
          partner, who also became a valuable mentor, I made the leap. I handed
          in my notice and committed fully to developing the skills I'd need to
          break into the tech industry.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          The Learning Process
        </h2>
        <p className="mb-6">
          I started with an iOS app development course and threw myself into
          learning Swift, building several apps along the way. These included
          everything from an AR app that made Pokémon pop out of cards to a
          recreation of the iconic "Hot Dog or Not Hot Dog" app from Silicon
          Valley. While great for building the basics, I wanted to push
          further—so I created Kitty Timer, a timer app that meowed when time
          was up (delightful for me, slightly less so for my partner, who
          endured a chorus of meows from my workspace). Building something on my
          own was a fun way to apply what I'd learned and grow my confidence.
        </p>

        <p className="mb-6">
          In my Swift projects, I had been handling business logic and data
          storage locally on the device. But my curiosity about what happens
          beyond frontend apps led me to learn more about backend development. I
          explored this by developing a collaborative events calendar app, using
          Swift for the frontend and Node.js, Express, and Postgres for the
          backend. I often got stuck, but the challenge taught me so much—and
          seeing the client and server working together felt like a real
          breakthrough.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Challenges Faced</h2>
        <p className="mb-6">
          With a few projects under my belt, I started looking for junior
          developer roles. That's when I noticed a common theme in job
          descriptions: a preference for degrees or years of experience. It was
          disheartening at first, but discovering Code First Girls (CFG) changed
          everything. Their full-stack degree program gave me hands-on
          experience, technical depth, and the confidence to keep going.
          Completing the CFG program was a huge milestone—and in November 2022,
          all the time I'd invested paid off when I landed my first significant
          developer role at Sahaj Software.
        </p>

        <div className="flex justify-center my-10">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="/window.svg"
              alt="First developer role illustration"
              fill
              className="object-contain bg-gray-50"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Diving In Headfirst
        </h2>
        <p className="mb-6">
          Those first few weeks at Sahaj felt like diving into the deep end—in
          the best possible way. I was lucky enough to have my colleague
          Elizabeth, another CFG graduate, on the journey with me.
        </p>

        <p className="mb-6">
          We were assigned teachers to guide us through Gurukul, the unique
          onboarding experience at Sahaj. While Gurukul is usually designed for
          recent university graduates, our teachers thoughtfully adapted it to
          suit our different backgrounds as career switchers. I'm genuinely
          grateful for the care and effort they put into tailoring the program
          to our needs. It wasn't just about coding—it was a holistic learning
          experience that covered everything from practical programming and
          problem-solving to consulting skills and agile methodologies.
        </p>

        <p className="mb-6">
          Our teachers didn't follow a rigid curriculum. They started with a
          rough guide but adjusted it regularly as they got to know us,
          mentoring us through both technical challenges and mindset shifts. It
          was intense—Java was new to me, the code editor felt unfamiliar, and
          everything moved fast. But I quickly realised I didn't need to master
          everything at once. What mattered most was learning to break down
          problems and trust the process. One highlight was solving Conway's
          Game of Life using Test-Driven Development (TDD). When the solution
          finally clicked, it felt like a real breakthrough—I couldn't believe
          how much I'd learned in such a short time.
        </p>

        <p className="mb-6">
          That experience taught me to embrace uncertainty, stay curious, and
          build confidence–one small step at a time. I'll always be grateful to
          the Gurukul teachers for their patience and dedication.
        </p>

        <p className="mb-6">
          By the end of Gurukul, I felt ready—if still a little nervous—to take
          on my first client project.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Finding My Rhythm</h2>
        <p className="mb-6">
          Starting my first client project was both exciting and intimidating.
          It wasn't just about learning the codebase but also understanding the
          business domain and project goals. At first, it felt like every
          conversation uncovered something new that I didn't know, which was
          overwhelming at times. But I kept returning to what I'd learned: break
          it down, take it step by step, and ask questions.
        </p>

        <p className="mb-6">
          From the start, I worked across different areas of the same project,
          each requiring me to quickly learn new concepts and navigate both the
          technical and business sides. It took time to process everything, but
          the experience taught me how to adapt and approach challenges with
          flexibility. Pairing with colleagues and breaking down tasks became
          the cornerstone of my growth, helping me build confidence and deepen
          my understanding.
        </p>

        {/* Featured quote with styled blockquote */}
        <div className="my-16 relative">
          <blockquote className="text-3xl md:text-4xl font-light italic text-blue-700 leading-relaxed px-10 py-8 border-l-4 border-blue-600 bg-blue-50 rounded-r-lg">
            <svg
              className="absolute top-0 left-4 w-16 h-16 text-blue-200 transform -translate-y-1/2"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            Over time, I gained confidence and reached a point where I started
            feeling less like a "career changer" and started to feel more like a
            developer.
            <svg
              className="absolute bottom-0 right-4 w-16 h-16 text-blue-200 transform translate-y-1/2 rotate-180"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </blockquote>
        </div>

        <p className="mb-6">
          Taking my turn leading sprint ceremonies, like stand-ups and reviews,
          felt daunting at first, but I grew to enjoy them and it really helped
          my confidence to grow. Testing and PR reviews were great opportunities
          to learn, helping me sharpen my eye for detail and my coding skills. I
          was even able to use my background in customer relations to think like
          a user, focusing on clarity and experience.
        </p>

        <p className="mb-6">
          One of the most significant moments was leading the development of a
          new feature—one of the hardest yet most rewarding experiences of my
          software development career, so far. It reinforced the importance of
          collaboration, not just in sharing the workload, but in discussing
          ideas to ensure they made sense, uncovering gaps, and learning from
          different perspectives. Being able to test out approaches, get
          feedback, and understand why one solution might be better than another
          was invaluable.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Growing Beyond Code: Learning, Confidence, and Community
        </h2>
        <p className="mb-6">
          Adjusting to the tech world was just as transformative as learning the
          technical skills. At Sahaj, the emphasis on trust, curiosity and
          continuous learning creates an environment where growth feels natural.
        </p>

        {/* Timeline visualization of growth */}
        <div className="relative py-12 px-4 my-10 bg-gray-50 rounded-lg">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>

          <div className="relative z-10 mb-12 ml-6 md:ml-0 md:flex">
            <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-700">
                  Beginning the Journey
                </h3>
                <p className="text-sm text-gray-600">
                  Self-doubt, exploration, and first steps
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 mb-12 ml-6 md:ml-0 md:flex">
            <div className="md:w-1/2"></div>
            <div className="absolute left-1/2 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-700">
                  Diving into Code
                </h3>
                <p className="text-sm text-gray-600">
                  Learning Swift, building projects, expanding skills
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mb-12 ml-6 md:ml-0 md:flex">
            <div className="flex items-center md:w-1/2 md:justify-end md:pr-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-700">
                  First Developer Role
                </h3>
                <p className="text-sm text-gray-600">
                  Challenges, mentorship, and growth at Sahaj
                </p>
              </div>
            </div>
            <div className="absolute left-1/2 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 ml-6 md:ml-0 md:flex">
            <div className="md:w-1/2"></div>
            <div className="absolute left-1/2 w-6 h-6 rounded-full bg-blue-600 transform -translate-x-1/2"></div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white p-4 rounded-lg shadow-md border-2 border-blue-500">
                <h3 className="font-semibold text-blue-700">
                  Feeling Like a Developer
                </h3>
                <p className="text-sm text-gray-600">
                  Confidence, leadership, and continued learning
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-6">
          Beyond project work, the learning opportunities at Sahaj have been
          endless. I've taken part in knowledge-sharing sessions, deep-dive
          workshops, and even a book club, exploring topics like data
          engineering, large language models, and efficient problem-solving.
          There are always fascinating conversations happening across the
          company, whether it's a casual chat or a deep discussion in a team
          meeting, creating great opportunities to discover new ideas and stay
          on top of developments in tech. These experiences have not only
          strengthened my technical skills but also helped me become more
          confident in sharing ideas and discussing complex concepts with
          others.
        </p>

        <p className="mb-6">
          At the same time, my confidence has grown in unexpected ways. When I
          first started, I was often overwhelmed by feeling that my perspective
          didn't carry much weight due to my lack of experience. But from day
          one, I was encouraged to contribute, ask questions, and learn from the
          many experienced and inspiring people around me. Every pairing session
          and conversation leaves me feeling more capable, reinforcing the value
          of listening, noting down tips, and staying open to feedback. When
          things go wrong, discussions are open and constructive, making it
          easier to learn and improve.
        </p>

        <p className="mb-6">
          I've also come to appreciate the power of efficiency—whether it's
          mastering IDE shortcuts or leveraging AI tools—small but impactful
          changes that make a real difference. Investing time in these areas and
          picking up tips from colleagues has been invaluable.
        </p>

        <div className="flex justify-center my-10">
          <div className="relative h-72 w-full rounded-lg overflow-hidden">
            <Image
              src="/profile-lucy.jpg"
              alt="Lucy Joyce - Software Developer"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Overcoming Challenges: Mindset and Personal Growth
        </h2>

        {/* Two-column section for challenges and solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 bg-gray-50 p-6 rounded-lg">
          <div>
            <h3 className="font-semibold text-red-600 mb-4">Challenges</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Starting over in a new industry</li>
              <li>Feeling like a beginner again</li>
              <li>Comparing progress to experienced developers</li>
              <li>Setting unrealistic expectations</li>
              <li>Being my own harshest critic</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-600 mb-4">
              How I Overcame Them
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Recognizing transferable skills from previous roles</li>
              <li>Support from mentors and colleagues</li>
              <li>Being kinder to myself</li>
              <li>Challenging self-criticism</li>
              <li>Embracing not knowing all the answers</li>
            </ul>
          </div>
        </div>

        <p className="mb-6">
          If I had to name my biggest challenge over the past two years, it
          wouldn't be a technical problem—it would be my own mindset.
        </p>

        <p className="mb-6">
          Starting over in a completely new industry was overwhelming. Coming
          from a career where I was a senior with years of experience, suddenly
          feeling like a beginner again was a tough adjustment. I often caught
          myself comparing my progress to those with far more experience,
          setting unrealistic expectations, and being my own harshest critic. In
          the rush to absorb everything, I sometimes forgot that I wasn't
          starting from scratch—I already had valuable skills from my previous
          roles. Whether it was communicating with clients, thinking like a
          user, or approaching problems with a structured mindset, those
          experiences still applied. I had to remind myself to lean on them
          rather than focus only on what I didn't know.
        </p>

        <p className="mb-6">
          What helped me move past this was the support of my mentors and
          colleagues, but also a conscious effort to shift my perspective. I
          worked on being kinder to myself, challenging my self-criticism, and
          recognising that growth takes time. More importantly, I became
          comfortable with not knowing. What mattered wasn't having all the
          answers, but knowing how to find them. Once I embraced that, the
          uncertainty stopped feeling intimidating and started feeling exciting.
          Every challenge became an opportunity to learn something new, and that
          shift in mindset has been empowering.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Summary</h2>
        <p className="mb-6">
          This journey has been about so much more than just learning technical
          skills—it's been about resilience, self-belief, and embracing growth
          in all its forms. I'm incredibly grateful to everyone I've worked with
          along the way. Growth is never a solo endeavour, so I want to say a
          heartfelt thank you to everyone who's helped me get to this point.
        </p>

        <p className="mb-6">
          There are still days when things don't click, or when I find myself
          doubting my abilities. In those moments, it's my teammates, family,
          and friends who help ground me. Their guidance, patience, and
          encouragement continue to mean the world.
        </p>

        <p className="mb-6">
          If you're considering a similar leap, know that it is possible. Trust
          yourself, take it one step at a time, and never underestimate the
          power of asking for help.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p className="text-lg font-medium text-blue-800">
            Looking back, I'm proud of how far I've come—and even more excited
            about what's ahead. I feel more confident in my skills, more
            connected to the tech community, and more inspired than ever to keep
            learning and growing. I can't wait to see where this path leads
            next.
          </p>
        </div>
      </div>

      <div className="mt-16 py-8 border-t">
        <h3 className="text-xl font-semibold mb-6">Share this post</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-12 flex justify-between items-center">
        <Link
          href="/blog"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to all posts
        </Link>
      </div>

      <Comments slug={blogSlug} />
    </article>
  );
}
