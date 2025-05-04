export default function Skills() {
  const skills = {
    "Frontend Development": [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
    "Backend Development": [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
    ],
    "Database & Tools": [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Git", level: 90 },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
