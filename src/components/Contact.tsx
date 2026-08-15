import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-dark-bg/95 relative overflow-hidden border-t border-gray-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="text-gradient">Me</span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations,
            freelance projects, or simply connecting with fellow developers.
            Feel free to reach out using the information below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto space-y-8">

          {/* Email */}
          <div className="flex items-center space-x-5">
            <div className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl text-brand-blue">
              <Mail className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Email
              </h3>

              <a
                href="mailto:yosephagimassie2@gmail.com"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                yosephagimassie2@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-5">
            <div className="p-4 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-purple">
              <Phone className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Phone
              </h3>

              <p className="text-gray-400">
                +251 912 483 272
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-5">
            <div className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl text-brand-blue">
              <MapPin className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Location
              </h3>

              <p className="text-gray-400">
                Bahar Dar, Ethiopia
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;