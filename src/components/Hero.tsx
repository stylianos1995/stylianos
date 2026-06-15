import Image from "next/image";
import {
  outlineButtonClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "@/lib/button-styles";
import { publicAsset } from "@/utils/publicAsset";

const cvDownloadHref = publicAsset("/assets/Stylianos-Kalaitzis-CV.pdf");

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 border-b border-slate-700/40 pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="space-y-12 lg:space-y-14">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Portfolio
            </p>
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.05]"
            >
              Web Developer
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              I build responsive web applications using React, JavaScript,
              Python, and modern frontend technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/stylianos1995"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButtonClass}
            >
              <svg
                className="icon-sm"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/stylianos-kalaitzis-730902260/"
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButtonClass}
            >
              <svg
                className="icon-sm"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a href="#contact" className={primaryButtonClass}>
              Contact
            </a>
          </div>
        </div>

        <div className="surface-panel rounded-2xl p-6 backdrop-blur-sm sm:p-10">
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-12 lg:gap-14">
            <div className="shrink-0">
              <Image
                src={publicAsset("/images/stelios.jpg")}
                alt="Stylianos Kalaitzis"
                width={192}
                height={192}
                priority
                sizes="(max-width: 640px) 160px, 192px"
                className="profile-photo"
              />
            </div>

            <div className="min-w-0 flex-1 space-y-6">
              <div className="space-y-2">
                <p className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                  Hi, I&apos;m Stylianos — nice to meet you!
                </p>
                <p className="text-sm text-zinc-500">
                  Based in Maastricht, Netherlands
                </p>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
                <p>
                  I&apos;m a friendly, communicative person who genuinely enjoys
                  working with others. I like bringing a positive attitude to the
                  table, listening carefully, and helping teams stay motivated —
                  whether we&apos;re shipping a web app or making someone&apos;s day
                  a little brighter at work.
                </p>
                <p>
                  I hold a BSc in Physics from the University of Ioannina and
                  sharpened my data skills at Work Early in Athens, where I worked
                  with SQL, Python, and Tableau on real projects. These days I
                  build responsive sites and apps with React, JavaScript, and
                  Python — you can explore my work on{" "}
                  <a
                    href="https://github.com/stylianos1995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-300 underline decoration-indigo-500/40 underline-offset-2 transition-colors hover:text-indigo-200"
                  >
                    GitHub
                  </a>
                  .
                </p>
                <p>
                  Outside of code, I&apos;m a staff manager at Lacasa Maastricht,
                  where teamwork and a welcoming atmosphere matter every day.
                  I&apos;ve also supported travellers at a travel agency, led
                  hospitality teams in Greece and Cyprus, and trained in military
                  communications — experiences that taught me leadership, empathy,
                  and staying calm when things get busy.
                </p>
                <p className="text-zinc-400">
                  I&apos;m always learning something new and happy to connect —
                  feel free to reach out if you&apos;d like to chat or collaborate.
                </p>
              </div>

              <a
                href={cvDownloadHref}
                download="Stylianos-Kalaitzis-CV.pdf"
                className={outlineButtonClass}
              >
                <svg
                  className="icon-sm"
                  width={16}
                  height={16}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download my CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
