import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-t-brand-blue border-r-brand-purple border-b-transparent border-l-transparent`}
      ></div>
      {size === 'lg' && (
        <span className="text-sm font-medium text-gray-400 animate-pulse tracking-wide">
          Loading Yoseph's Portfolio...
        </span>
      )}
    </div>
  );
};

export default Loading;
