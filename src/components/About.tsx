import React from 'react';
import { BookOpen, Codepen, Cpu, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-dark-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-relaxed">
            I am an Electrical and Computer Engineering graduate with a strong
            passion for computer engineering and full-stack web development.
            I enjoy solving real-world problems by building clean, scalable,
            and user-friendly applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-6">

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Cpu className="w-6 h-6" />
                </div>

                <h3 className="ml-4 text-xl font-semibold text-white">
                  Computer Engineering
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                My educational background has provided me with a solid
                understanding of computer systems, digital electronics,
                embedded systems, networking, programming, and software
                engineering principles.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple">
                  <Codepen className="w-6 h-6" />
                </div>

                <h3 className="ml-4 text-xl font-semibold text-white">
                  Full-Stack Development
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                I build responsive frontend interfaces with React and develop
                scalable backend applications using Node.js, Express, and
                relational databases while following clean coding practices.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue">
                  <BookOpen className="w-6 h-6" />
                </div>

                <h3 className="ml-4 text-xl font-semibold text-white">
                  Education
                </h3>
              </div>

              <h4 className="text-gray-200 font-semibold">
                B.Sc. Electrical and Computer Engineering
              </h4>

              <p className="text-brand-blue mt-2">
                Specialization: Computer Engineering
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                During my studies, I gained practical knowledge in programming,
                computer architecture, operating systems, databases, networking,
                embedded systems, and software development methodologies.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple">
                  <Award className="w-6 h-6" />
                </div>

                <h3 className="ml-4 text-xl font-semibold text-white">
                  Career Goal
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                My goal is to become a professional Software Engineer and
                Full-Stack Developer, contributing to innovative software
                solutions, building scalable applications, and continuously
                improving my technical and problem-solving skills.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;