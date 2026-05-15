import Image from "next/image";
import { outlineButtonClass } from "@/lib/button-styles";
import { publicAsset } from "@/utils/publicAsset";

const cvDownloadHref = publicAsset("/assets/Stylianos-Kalaitzis-CV.pdf");

export const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-slate-700/40 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          About
        </h2>

        <div className="surface-panel mt-10 rounded-2xl p-6 backdrop-blur-sm sm:p-10">
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
                <p className="text-base font-medium text-indigo-300/90 sm:text-lg">
                  Data Scientist · Web Developer · Physicist
                </p>
                <p className="text-sm text-zinc-500">Based in Maastricht, Netherlands</p>
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
};
