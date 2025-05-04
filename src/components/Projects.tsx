import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and responsive design.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      title: "Project Two",
      description:
        "An e-commerce platform developed using Next.js and Stripe for payments. Includes product management, shopping cart, and order processing.",
      image: "/project2.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/yourusername/project2",
    },
    {
      title: "Project Three",
      description:
        "A real-time chat application built with WebSocket technology. Features include private messaging, group chats, and file sharing.",
      image: "/project3.jpg",
      technologies: ["Socket.io", "React", "Node.js", "Redis"],
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/yourusername/project3",
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
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                  Project Image
                </div>
                {/* Uncomment and add your project images
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
                */}
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
                    target="_blank"
                    rel="noopener noreferrer"
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
