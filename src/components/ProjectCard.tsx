"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    tech: string[];
    description: string;
    metrics?: string;
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: -1.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col h-full p-8 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all"
    >
      <div className="flex justify-between items-start gap-4 mb-4">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug font-serif">
          {project.title}
        </h3>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 -mr-2 text-gray-400 hover:text-indigo-500 transition-colors"
        >
          <FaGithub className="w-6 h-6"/>
        </a>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-base mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      {project.metrics && (
        <div className="mb-6 p-4 bg-white/60 dark:bg-black/20 rounded-2xl border border-gray-100/50 dark:border-gray-800/50">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.metrics}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech?.map((tag) => (
          <span 
            key={tag} 
            className="px-4 py-1.5 text-xs font-bold tracking-wide bg-gray-900/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}