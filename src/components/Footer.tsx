import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 dark:border-gray-900 mt-12">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Lorraine (Khanh) Nguyen. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/ktnguyenx" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/ktnguyenx" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:ktnguyen@brynmawr.edu" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}