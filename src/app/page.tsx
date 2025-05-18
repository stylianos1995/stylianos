"use client";

import { Suspense } from "react";
import Hero from "@/components/Hero";
import { About } from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <div className="container mx-auto px-4 py-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </Suspense>
    </>
  );
}
