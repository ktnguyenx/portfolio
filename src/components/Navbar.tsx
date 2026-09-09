"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="pointer-events-auto flex items-center justify-between px-6 py-3 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-orange-100/40 dark:border-zinc-800/50 rounded-full shadow-sm w-full max-w-3xl"
      >
        <a href="#" className="text-xl font-black tracking-tighter bg-gradient-to-r from-orange-500 via-rose-400 to-amber-500 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-300">
          LN.
        </a>
        
        <div className="flex items-center gap-6 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
          <a href="#projects" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
            Skills
          </a>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center w-14 h-7 bg-zinc-200 dark:bg-zinc-800 rounded-full p-1 transition-colors border border-zinc-300 dark:border-zinc-700 cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            <motion.div
              className="w-5 h-5 bg-white dark:bg-zinc-950 rounded-full flex items-center justify-center shadow-sm"
              animate={{ x: mounted && theme === "dark" ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {mounted && theme === "dark" ? (
                <FaMoon className="w-3 h-3 text-orange-400" />
              ) : (
                <FaSun className="w-3 h-3 text-amber-500" />
              )}
            </motion.div>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
