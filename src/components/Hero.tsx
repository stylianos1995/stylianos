import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Hi, I&apos;m <span className={styles.gradientText}>Stelios</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
            Data Scientist & Web Developer enthusiast
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            I&apos;m a data scientist and web developer enthusiast with a
            passion for creating innovative solutions. Optimizing processes and
            building efficient systems is my jam.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 px-8 py-3 rounded-lg transition-colors"
            >
              View Projects
            </Link>
          </div>
          <div className="flex gap-6 justify-center lg:justify-start text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/stylianos1995"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/stylianos-kalaitzis-730902260/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="w-72 h-72 relative mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg">
              <Image
                src={`${
                  process.env.NODE_ENV === "production" ? "/stylianos" : ""
                }/images/stelios.jpg`}
                alt="Stelios"
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
