import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </>
  );
}
