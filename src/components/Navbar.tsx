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
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
          LN.
        </a>
        
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 ml-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:scale-105 transition-transform flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {mounted && theme === "dark" ? (
              <FaSun className="w-4 h-4 text-yellow-500" />
            ) : (
              <FaMoon className="w-4 h-4 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}