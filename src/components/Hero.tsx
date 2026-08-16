import React from "react";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

interface HeroProps {
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-dark-bg pt-20"
    >
      {/* Background Glow Lights */}
      <div className="glow-light bg-brand-blue top-1/4 left-1/4 animate-pulse-slow"></div>
      <div
        className="glow-light bg-brand-purple bottom-1/4 right-1/4 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 rounded-full px-4.5 py-1.5 mb-6 text-sm font-semibold text-brand-blue"
            >
              <Terminal className="w-4 h-4 text-brand-blue" />
              <span>Computer Engineering & Full-Stack Web Development</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Hi, I'm <span className="text-gradient">Yosef </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
            >
              Electrical & Computer Engineer
              <span className="text-gray-500"> | </span>
              Full-Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10"
            >
              I am an Electrical and Computer Engineer specializing in
              Computer Engineering and Full-Stack Web Development.
              I enjoy designing scalable web applications,
              solving engineering problems, and building modern digital
              solutions that create real-world impact.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-95 font-semibold text-white rounded-xl shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/35 transition-all flex items-center justify-center space-x-2 group focus:outline-none"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Download CV */}
              <a
                href="/resume.pdf"
                download="Yoseph_Resume.pdf"
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 border border-gray-800 hover:border-gray-700 font-semibold text-gray-200 rounded-xl hover:text-white transition-all flex items-center justify-center space-x-2 focus:outline-none"
              >
                <Download className="w-4 h-4 text-brand-blue" />
                <span>Download CV</span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-purple/30 hover:border-brand-purple/50 font-semibold text-brand-purple hover:text-brand-purple-light rounded-xl transition-all flex items-center justify-center space-x-2 focus:outline-none"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Side Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple blur-3xl opacity-30"></div>

              {/* Circular Frame */}
              <div className="relative w-full h-full rounded-full border-4 border-brand-blue overflow-hidden bg-gray-900 shadow-2xl shadow-brand-blue/30">
                <img
                  src={profile}
                  alt="Yoseph Agimasie"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;