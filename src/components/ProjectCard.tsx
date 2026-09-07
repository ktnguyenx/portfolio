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
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col h-full p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
          {project.title}
        </h3>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
        {project.description}
      </p>

      {project.metrics && (
        <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-950 rounded-lg border border-gray-100 dark:border-gray-800">
          <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
            {project.metrics}
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}