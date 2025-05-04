export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">🎓</span> Education & Academic Pursuits
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                As an undergraduate Physics student at the University of
                Ioannina, I combine my passion for scientific inquiry with
                modern technology. My academic journey has equipped me with
                strong analytical skills and proficiency in C and C++
                programming languages, while I actively expand my knowledge into
                web development and data science.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">💻</span> Web Development Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                As a junior web developer, I&apos;m building my expertise in
                modern web technologies. I&apos;m currently working with React,
                Next.js, and TypeScript to create responsive and user-friendly
                applications. My background in Physics and data science provides
                me with a unique perspective on problem-solving and analytical
                thinking in web development.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">📊</span> Data Science Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, I am expanding my expertise through data science
                courses with Workearly Greece, mastering Python, SQL, and
                Tableau. These tools are essential for modern analytics and data
                visualization, complementing my web development skills.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">🗣️</span> Skills & Expertise
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "HTML",
                      "CSS",
                      "Tailwind",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Programming & Data</h4>
                  <div className="flex flex-wrap gap-2">
                    {["C", "C++", "Python", "SQL", "Tableau"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Problem-solving",
                      "Analytical Thinking",
                      "Teamwork",
                      "Adaptability",
                      "Continuous Learning",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">🎸</span> Personal Interests
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="mr-2">🏋️‍♂️</span>
                  <span>Working out</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🎸</span>
                  <span>Playing the guitar</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📖</span>
                  <span>Writing my book</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="mr-2">🔥</span> Passion & Dedication
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I am driven by a deep passion for technology and an unwavering
                commitment to achieving excellence. My unique combination of
                Physics background, data science knowledge, and web development
                skills allows me to approach problems from multiple
                perspectives. I thrive on challenges and am always eager to
                learn and grow in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
