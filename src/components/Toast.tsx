import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const config = {
    success: {
      bg: 'bg-green-950/40 border-green-500/30 text-green-300',
      icon: <CheckCircle className="w-5 h-5 text-green-400" />
    },
    error: {
      bg: 'bg-red-950/40 border-red-500/30 text-red-300',
      icon: <AlertCircle className="w-5 h-5 text-red-400" />
    },
    info: {
      bg: 'bg-blue-950/40 border-blue-500/30 text-blue-300',
      icon: <Info className="w-5 h-5 text-blue-400" />
    }
  };

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex items-center space-x-3 max-w-sm p-4 border rounded-xl shadow-2xl backdrop-blur-md animate-slide-in ${config[type].bg}`}>
      <div>{config[type].icon}</div>
      <div className="flex-1 text-sm font-medium pr-2">{message}</div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-200 transition-colors focus:outline-none"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
