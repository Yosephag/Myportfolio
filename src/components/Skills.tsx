import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: (
        <Code2 className="w-5 h-5 text-brand-blue" />
      ),
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'C++',
      ],
    },

    {
      title: 'Frontend Development',
      icon: (
        <Layout className="w-5 h-5 text-brand-purple" />
      ),
      skills: [
        'React',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
      ],
    },

    {
      title: 'Backend Systems',
      icon: (
        <Server className="w-5 h-5 text-brand-blue" />
      ),
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
      ],
    },

    {
      title: 'Databases',
      icon: (
        <Database className="w-5 h-5 text-brand-purple" />
      ),
      skills: [
        'PostgreSQL',
        'MySQL',
      ],
    },

    {
      title: 'Tools & Utilities',
      icon: (
        <Wrench className="w-5 h-5 text-brand-blue" />
      ),
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-dark-bg relative overflow-hidden"
    >
      {/* =================================
          BACKGROUND GLOW
      ================================== */}
      <div className="glow-light bg-brand-blue/10 top-1/3 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =================================
            SECTION TITLE
        ================================== */}
        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My{' '}
            <span className="text-gradient">
              Skills
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full"></div>

        </div>

        {/* =================================
            SKILL CATEGORIES
        ================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/20"
            >

              {/* Category Header */}
              <div className="flex items-center space-x-3.5 mb-6">

                <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl">
                  {category.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-200">
                  {category.title}
                </h3>

              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">

                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-2 text-xs font-semibold text-gray-300 bg-gray-950 border border-gray-800 hover:border-gray-700 rounded-lg hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;