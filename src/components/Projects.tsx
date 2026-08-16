import React from 'react';
import { Github } from 'lucide-react';

import portfolioImage from '../assets/portfolio.png';
import garageImage from '../assets/Garage.jpg';

// Project interface
interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string;
  githubLink: string;
  image: string;
}

const Projects: React.FC = () => {
  // Static frontend project data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Garage Website',
      description:
        'A responsive automotive garage website allowing customers to book repair services, view progress, and purchase car components. Admin features include service scheduling, inventory management, and invoice generation.',
      technologies:
        'React, Node.js, Express, MySQL, Tailwind CSS',
      githubLink:
        'https://github.com/Yosephag/AAGY-Sgaragemainapp',
      image: garageImage,
    },

    {
      id: 2,
      title:
        'Web-Based Intelligent Patient Appointment and Triage System',
      description:
        'B.Sc. Thesis Project. An intelligent healthcare platform combining medical appointment scheduling with an ML-based triage classifier. Assesses patient symptoms to recommend triage severity levels and schedule clinics appropriately.',
      technologies:
        'React, Node.js, Express, MySQL, Python, Flask, Tailwind CSS',
      githubLink:
        'https://github.com/AbebeNega1/intelligent-triage-system/tree/feature/yosef-version',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    },

    {
      id: 3,
      title: 'Personal Portfolio',
      description:
        'A fully responsive and modern personal portfolio website showcasing my academic achievements, engineering projects, technical skills, certifications, and professional experience, with an interactive contact section.',
      technologies:
        'React, TypeScript, Tailwind CSS',
      githubLink:
        'https://github.com/Yosephag/Myportfolio',
      image: portfolioImage,
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-dark-bg/95 relative overflow-hidden border-t border-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================
            SECTION TITLE
        ========================== */}
        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My{' '}
            <span className="text-gradient">
              Projects
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full"></div>

        </div>

        {/* =========================
            PROJECTS
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, idx) => {

            const techTags = project.technologies
              .split(',')
              .map((t) => t.trim())
              .filter((t) => t.length > 0);

            return (
              <div
                key={project.id ?? idx}
                className="glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-1.5 transition-all duration-300"
              >

                {/* =========================
                    CARD IMAGE
                ========================== */}
                <div className="h-48 overflow-hidden relative group">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const image =
                        e.target as HTMLImageElement;

                      image.src = garageImage;
                    }}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent pointer-events-none"></div>

                </div>

                {/* =========================
                    CARD BODY
                ========================== */}
                <div className="p-6 flex-1 flex flex-col justify-between">

                  <div className="space-y-3">

                    {/* Project Title */}
                    <h3 className="text-lg font-bold text-gray-100 hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                  </div>

                  <div className="mt-6 space-y-4">

                    {/* =========================
                        TECHNOLOGY TAGS
                    ========================== */}
                    <div className="flex flex-wrap gap-1.5">

                      {techTags.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] font-semibold text-brand-blue bg-brand-blue/5 border border-brand-blue/10 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                    {/* =========================
                        GITHUB LINK
                    ========================== */}
                    <div className="flex items-center space-x-4 pt-2 border-t border-gray-800/40">

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 text-xs text-gray-300 hover:text-white transition-colors"
                      >

                        <Github className="w-4 h-4 text-gray-400" />

                        <span>
                          Code Repository
                        </span>

                      </a>

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Projects;