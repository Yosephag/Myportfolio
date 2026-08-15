import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const Education: React.FC = () => {
  const courses = [
    'Computer Architecture',
    'Database Management Systems',
    'Software Engineering',
    'Microprocessor Interfacing & Assembly',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java/C++)'
  ];

  return (
    <section id="education" className="py-24 bg-dark-bg/95 relative overflow-hidden border-t border-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Display Card */}
        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-brand-blue group-hover:scale-110 transition-transform duration-500">
            <GraduationCap className="w-48 h-48" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-800/40">
            {/* Left Header */}
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-xl shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100">

                  Bachelor of Science in Electrical & Computer Engineering

                </h3>
                <p className="text-sm text-brand-blue font-medium mt-1">
                  Specialization: Computer Engineering
                </p>
                Haramaya University, Ethiopia
              </div>
            </div>

            {/* Right Tag */}
            <div className="text-left md:text-right">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-purple bg-brand-purple/10 border border-brand-purple/20 rounded-md">
                Graduated B.Sc.
              </span>
            </div>
          </div>

          {/* Education Details Body */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            {/* Left Side: Thesis & Focus */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider flex items-center space-x-2">
                <Award className="w-4 h-4 text-brand-purple" />
                <span>B.Sc. Thesis Project</span>
              </h4>
              
              <div className="p-4 bg-gray-950/40 border border-gray-800 rounded-xl space-y-2">
                <h5 className="text-xs font-bold text-gray-200 leading-snug">
                  Web-Based Intelligent Patient Appointment and Triage System
                </h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Developed an scheduling software that runs symptom-based triage using Machine Learning classifiers to assess and route patient severity levels.
                </p>
              </div>
            </div>

            {/* Right Side: Key Coursework */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {courses.map((course, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
