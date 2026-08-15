import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer (Self Projects)',
      duration: '2023 - Present',
      description: 'Architecting and developing full-stack engineering and web solutions. Implementing modern backend services, databases, and responsive client-side interfaces.',
      bullets: [
        'Designing and coding responsive client-side interfaces utilizing React, TypeScript, and Tailwind CSS.',
        'Building secure backend servers with Node.js and Express, implementing JWT session authentication.',
        'Designing relational databases, mapping schemas, and configuring constraints with PostgreSQL, MySQL, and Prisma ORM.',
        'Developing and testing structured RESTful APIs using Postman and incorporating middleware layers for validation and error handling.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 sm:before:left-1/2 before:w-0.5 before:bg-gray-800">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between group">
              
              {/* Timeline Center Point Indicator */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-dark-bg border-2 border-brand-blue rounded-full z-10 group-hover:border-brand-purple group-hover:scale-110 transition-all duration-300"></div>

              {/* Experience Card */}
              <div className="w-full sm:w-[calc(50%-2rem)] sm:odd:text-right pl-12 sm:pl-0 sm:group-odd:mr-auto sm:group-even:ml-auto">
                <div className="glass-card p-6 rounded-2xl text-left relative">
                  
                  {/* Category Header */}
                  <div className="flex items-center space-x-2.5 mb-2 text-brand-blue font-semibold text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.role}</span>
                  </div>

                  {/* Calendar tag */}
                  <div className="flex items-center space-x-1.5 text-xs text-gray-500 mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullets grid */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
