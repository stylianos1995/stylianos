"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/stylianos" : "";

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-zinc-600 bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400";

const secondaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="home"
      className="scroll-mt-24 border-b border-zinc-800/80 pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Portfolio
            </p>
            <h1
              id="hero-heading"
              className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl lg:leading-[1.05]"
            >
              Web Developer Based in Maastricht
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
              className={secondaryBtn}
            >
              <svg
                className="h-4 w-4 shrink-0"
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
              className={secondaryBtn}
            >
              <svg
                className="h-4 w-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <Link href="#contact" className={primaryBtn}>
              Contact
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[280px] sm:max-w-xs lg:mx-0 lg:max-w-sm">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <Image
              src={`${basePath}/images/stelios.jpg`}
              alt="Stylianos Kalaitzis"
              fill
              sizes="(max-width: 1024px) 320px, 384px"
              className={`object-cover transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              priority
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div
                className="absolute inset-0 animate-pulse bg-zinc-800"
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
