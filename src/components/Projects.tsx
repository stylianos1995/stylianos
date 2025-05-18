export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built with Next.js and Tailwind CSS. Features include dark mode, responsive design, and contact form integration.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "EmailJS"],
      liveUrl: "/under-construction",
      githubUrl: "https://github.com/stylianos1995/stylianos",
    },
    {
      title: "Project Two",
      description: "Coming soon...",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "/under-construction",
      githubUrl: "https://github.com/stylianos1995",
    },
    {
      title: "Project Three",
      description: "Coming soon...",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "/under-construction",
      githubUrl: "https://github.com/stylianos1995",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                Project Preview
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
