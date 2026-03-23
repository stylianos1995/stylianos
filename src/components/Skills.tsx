export default function Skills() {
  const skills = {
    "Web Development": [
      "React",
      "Next.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind",
    ],
    "Programming & Data": [
      "C",
      "C++",
      "Python",
      "SQL",
      "Tableau",
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 border border-blue-100 dark:border-blue-800/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
