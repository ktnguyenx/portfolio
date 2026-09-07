import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}