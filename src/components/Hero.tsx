"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/projectsData";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Hi, I'm Lorraine!
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-6">
          I love creative programming and designing thoughtful interfaces.
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed">
          I enjoy building tools and experiences that are both technically thoughtful and easy to use! Lately, I've been interested in projects at the intersection of design, programming, and human behavior. Currently studying CS & Statistics at {profile.school}.
        </p>
        
        <div className="flex gap-4 items-center">
          <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:scale-105 transition-transform">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:scale-105 transition-transform">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${profile.email}`} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:scale-105 transition-transform">
            <Mail className="w-6 h-6" />
          </a>
          <a href="/Resume_Lorraine Nguyen.pdf" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform">
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}