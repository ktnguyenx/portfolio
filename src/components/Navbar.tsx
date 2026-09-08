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
        className="pointer-events-auto flex items-center justify-between px-6 py-3 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-full shadow-lg w-full max-w-3xl"
      >
        <a href="#" className="text-xl font-extrabold tracking-tighter bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          LN.
        </a>
        
        <div className="flex items-center gap-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center w-14 h-7 bg-gray-200 dark:bg-gray-800 rounded-full p-1 transition-colors border border-gray-300 dark:border-gray-700"
            aria-label="Toggle Dark Mode"
          >
            <motion.div
              className="w-5 h-5 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-sm"
              animate={{ x: mounted && theme === "dark" ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {mounted && theme === "dark" ? (
                <FaMoon className="w-3 h-3 text-purple-400" />
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