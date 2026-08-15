import React from 'react';
import { Github, Linkedin, Mail, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-gray-900 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo/Info */}
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-md">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-100 font-bold text-lg">
              Yoseph<span className="text-gradient">.</span>
            </span>
            <span className="text-xs text-gray-500 border-l border-gray-800 pl-2">
              Electrical & Computer Engineer(Computer focus)
            </span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center order-3 md:order-2">
            &copy; {currentYear} Yoseph. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4 order-2 md:order-3">
            <a
              href="https://github.com/Yosephag"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-lg transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/yoseph-agimassie-39837441b"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-lg transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:yosephagimassie2@gmail.com"
              className="p-2 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-lg transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
