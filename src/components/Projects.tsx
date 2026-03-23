import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  imageUrl: string;
  githubUrl?: string;
};

export default function Projects() {
  const projects = [
    {
      title: "Portofino Digital Menu",
      description:
        "QR-powered restaurant menu experience with multilingual support for easy access across devices.",
      technologies: ["Next.js", "Vercel", "Responsive Design"],
      liveUrl: "https://portofino-eight.vercel.app",
      imageUrl: "/images/projects/portofino.png",
    },
    {
      title: "Illuminate",
      description:
        "A focused brand website with clean visuals and calming presentation for a psychology service.",
      technologies: ["Web Design", "Brand Identity", "Responsive UI"],
      liveUrl: "https://illuminate-psy.com",
      imageUrl: "/images/projects/illuminate.png",
    },
    {
      title: "DeVerse",
      description:
        "Agency landing page showcasing digital services, project highlights, and modern UI interactions.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://deverse-pi.vercel.app",
      imageUrl: "/images/projects/deverse.png",
    },
  ] satisfies Project[];

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
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                />
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
                    Visit Website
                  </a>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
