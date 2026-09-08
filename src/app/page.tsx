import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 transition-colors duration-500">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}