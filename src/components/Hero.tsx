"use client";

import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/projectsData";

export default function Hero() {
  return (
    <section className="max-w-4xl px-6 pt-48 pb-20 mx-auto">
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
        Hi, I'm Lorraine!
      </h1>

      <h2 className="text-xl md:text-2xl font-medium tracking-wide text-zinc-700 dark:text-zinc-300 leading-snug mb-8 max-w-3xl">
        I love creative programming and designing thoughtful interfaces.
      </h2>

      <p className="text-base md:text-lg font-normal text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mb-10">
        I enjoy building tools and experiences that are both technically thoughtful and easy 
        to use! Lately, I've been interested in projects at the intersection of design, 
        programming, and human behavior. Currently studying CS & Statistics at{" "}
        <span className="font-semibold text-zinc-800 dark:text-zinc-100">Bryn Mawr College.</span>
      </p>
      
      <div className="flex flex-wrap gap-4 items-center">
        <a 
          href={profile.github} 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 bg-orange-100/40 text-orange-900 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 rounded-full hover:scale-105 hover:bg-orange-100 transition-all shadow-sm"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a 
          href={profile.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="p-3 bg-orange-100/40 text-orange-900 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 rounded-full hover:scale-105 hover:bg-orange-100 transition-all shadow-sm"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a 
          href={`mailto:${profile.email}`} 
          className="p-3 bg-orange-100/40 text-orange-900 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 rounded-full hover:scale-105 hover:bg-orange-100 transition-all shadow-sm"
        >
          <Mail className="w-5 h-5" />
        </a>
        
        <a 
          href="/Resume_Lorraine Nguyen.pdf" 
          target="_blank" 
          className="flex items-center gap-2 px-5 py-3 bg-zinc-900 text-amber-50 dark:bg-amber-50 dark:text-zinc-950 rounded-full font-medium shadow-sm hover:scale-105 hover:bg-orange-950 dark:hover:bg-white transition-all"
        >
          <FileText className="w-4 h-4 text-orange-400 dark:text-orange-600" />
          Resume
        </a>
      </div>
    </section>
  );
}