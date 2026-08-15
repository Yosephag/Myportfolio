import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Cpu } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-dark-bg px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="glow-light bg-brand-blue top-1/4 left-1/3"></div>
      <div className="glow-light bg-brand-purple bottom-1/4 right-1/3"></div>

      <div className="text-center relative z-10 max-w-md space-y-6">
        {/* Symbol */}
        <div className="flex justify-center">
          <div className="p-4 bg-gradient-to-tr from-brand-blue/10 to-brand-purple/10 border border-brand-blue/20 text-brand-blue rounded-full relative">
            <Compass className="w-12 h-12 text-brand-purple animate-spin" style={{ animationDuration: '8s' }} />
            <Cpu className="w-6 h-6 text-brand-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-white tracking-tight select-none">
          4<span className="text-gradient">0</span>4
        </h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-200">System Path Not Found</h2>
          <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
            The page directory you are requesting does not exist in Yoseph's portfolio environment.
          </p>
        </div>

        {/* Button */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-95 text-sm font-semibold text-white rounded-xl shadow-lg transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
