import Image from "next/image";
import { publicAsset } from "@/utils/publicAsset";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
};

const cardClass =
  "group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-sm transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-950/50";

const ghostBtn =
  "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-transparent px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500";

const solidBtn =
  "inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portofino Digital Menu",
      description:
        "Built a responsive, QR-driven menu experience with multilingual content and reliable performance across phones and tablets.",
      technologies: ["Next.js", "React", "Vercel", "Responsive UI"],
      liveUrl: "https://portofino-eight.vercel.app",
      githubUrl: "https://github.com/stylianos1995",
      imageUrl: publicAsset("/images/projects/portofino.png"),
    },
    {
      title: "Illuminate",
      description:
        "Delivered a marketing site with clear information hierarchy, accessible typography, and a calm visual system for a psychology practice.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive layout"],
      liveUrl: "https://illuminate-psy.com",
      githubUrl: "https://github.com/stylianos1995",
      imageUrl: publicAsset("/images/projects/illuminate.png"),
    },
    {
      title: "DeVerse",
      description:
        "Implemented a conversion-focused agency landing page in React and TypeScript with structured sections and Tailwind-based styling.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://deverse-pi.vercel.app",
      githubUrl: "https://github.com/stylianos1995",
      imageUrl: publicAsset("/images/projects/deverse.png"),
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-zinc-800/80 py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mb-12 max-w-2xl">
        <h2
          id="projects-heading"
          className="text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          Projects
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Selected work
        </p>
        <p className="mt-4 text-lg text-zinc-400">
          Production-ready interfaces: performance, responsive layout, and
          maintainable frontend structure.
        </p>
      </div>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {projects.map((project) => (
          <li key={project.title}>
            <article className={cardClass}>
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-900">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <span className="inline-block rounded-full border border-zinc-700/80 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-300">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ghostBtn}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={solidBtn}
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
