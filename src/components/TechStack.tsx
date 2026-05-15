import type { IconType } from "react-icons/lib";
import { TbChartDots } from "react-icons/tb";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type StackItem = { name: string; icon: IconType };

type StackGroup = { title: string; items: StackItem[] };

const groups: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ],
  },
  {
    title: "Data & tools",
    items: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiMysql },
      { name: "Tableau", icon: TbChartDots },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];

const itemClass =
  "flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 text-center transition-[border-color,background-color] duration-200 hover:border-zinc-600 hover:bg-zinc-900/60 focus-within:border-zinc-600";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="scroll-mt-24 border-b border-slate-700/40 py-20 sm:py-24"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mb-12 max-w-2xl">
        <h2
          id="tech-stack-heading"
          className="text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          Tech stack
        </h2>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Tools I ship with
        </p>
        <p className="mt-4 text-lg text-zinc-400">
          Grouped by how I use them day to day on real projects.
        </p>
      </div>

      <div className="space-y-12">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {group.title}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {group.items.map(({ name, icon: Icon }) => (
                <li key={name}>
                  <div className={itemClass}>
                    <Icon
                      className="icon-lg text-zinc-300"
                      size={32}
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-zinc-200">
                      {name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
