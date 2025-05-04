export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Background
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              With over [X] years of experience in web development, I specialize
              in creating modern and efficient web applications. My journey in
              tech started with [your background] and has evolved into a passion
              for building exceptional digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm constantly learning and adapting to new technologies, ensuring
              that I can provide the best solutions for any project I work on.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              What I Do
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Frontend Development (React, Next.js)
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Backend Development (Node.js, Python)
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Database Design & Management
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                UI/UX Design
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Current Focus</h4>
              <p className="text-gray-600 dark:text-gray-400">
                I'm currently focused on [your current interests/projects],
                exploring [specific technologies or concepts], and contributing
                to open-source projects in my free time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
