export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2021 - Present",
      description: [
        "Led a team of 5 developers in building and maintaining large-scale web applications",
        "Implemented microservices architecture that improved system scalability by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: [
        "Developed and maintained client websites using React and Node.js",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with designers to implement pixel-perfect UI components",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Startup",
      period: "2017 - 2019",
      description: [
        "Built interactive user interfaces using React and Redux",
        "Improved website performance by implementing lazy loading and code splitting",
        "Worked in an agile environment with daily stand-ups and sprint planning",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>

                {/* Content */}
                <div className="flex-1 md:w-1/2"></div>
                <div className="flex-1 md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mb-4">
                    {exp.period}
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
