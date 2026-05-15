import Image from "next/image";
import { publicAsset } from "@/utils/publicAsset";

const cvDownloadHref = publicAsset("/assets/Stylianos-Kalaitzis-CV.pdf");

const downloadBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500";

export const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-zinc-800/80 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          About
        </h2>

        <div className="mt-10 flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-12 lg:gap-16">
          <div className="relative shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:h-48 sm:w-48">
              <Image
                src={publicAsset("/images/stelios.jpg")}
                alt="Stylianos Kalaitzis"
                fill
                sizes="(max-width: 640px) 160px, 192px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-6">
            <p className="text-lg font-medium text-zinc-200 sm:text-xl">
              Data Scientist · Web Developer · Physicist
            </p>
            <div className="space-y-5 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              <p>
                I&apos;m a friendly, collaborative professional based in
                Maastricht. I build modern, responsive web applications with
                React, JavaScript, and Python, and I bring an analytical
                mindset from physics and data science to every project.
              </p>
              <p>
                I&apos;m pursuing a BSc in Data Science &amp; AI at Maastricht
                University, with hands-on work in SQL, Python, and Tableau from
                my time at Work Early in Athens. I also hold a BSc in Physics
                from the University of Ioannina. I learn continuously, work well
                in teams, and enjoy turning complex problems into clear,
                user-friendly solutions.
              </p>
              <p>
                Beyond development, I&apos;ve led hospitality teams, supported
                travel clients with tailored bookings, and completed military
                communications training with top performance—experiences that
                sharpened my leadership, communication, and calm under pressure.
              </p>
            </div>

            <a
              href={cvDownloadHref}
              download="Stylianos-Kalaitzis-CV.pdf"
              className={downloadBtn}
            >
              <svg
                className="h-4 w-4 shrink-0"
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
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
