"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL", "HTML/CSS"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Streamlit", "spaCy", "NLTK", "Pandas", "NumPy", "HTML5 Canvas"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git/GitHub", "Docker", "Vercel", "Linux/Unix", "Obsidian API"]
  },
  {
    category: "Core Concepts",
    items: ["Memory Optimization", "State Management", "Algorithmic Layout", "Object-Oriented Design", "NLP Pipelines"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section id= "skills" className="py-20 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-100 dark:border-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Technical Skills
        </h2>
        <div className="w-12 h-1 bg-black dark:bg-white rounded-full"></div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillsData.map((skillGroup) => (
          <div key={skillGroup.category} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-wide">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <motion.span
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 
                            text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg shadow-sm cursor-default transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}