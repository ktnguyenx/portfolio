import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAF9F5] dark:bg-zinc-950 transition-colors duration-500 overflow-x-hidden">
      
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-200/40 to-emerald-200/30 dark:from-orange-950/20 dark:to-emerald-950/10 rounded-full filter blur-[120px] pointer-events-none animate-blob"></div>
      <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-rose-200/40 to-amber-100/40 dark:from-rose-950/10 dark:to-amber-950/10 rounded-full filter blur-[100px] pointer-events-none animate-blob animation-delay-2000"></div>
      <div className="absolute top-[35%] left-[15%] w-[650px] h-[650px] bg-gradient-to-r from-emerald-100/30 to-orange-100/30 dark:from-zinc-900/20 dark:to-emerald-950/10 rounded-full filter blur-[140px] pointer-events-none animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}