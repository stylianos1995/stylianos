export const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-zinc-800/80 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="about-heading"
          className="text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          About
        </h2>
        <div className="mt-4 space-y-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
          <p>
            I&apos;m a web developer focused on building modern, responsive, and
            user-friendly applications.
          </p>
          <p>
            My background in analytical problem solving and hands-on project
            work helps me approach development with both creativity and
            structure.
          </p>
        </div>
      </div>
    </section>
  );
};
