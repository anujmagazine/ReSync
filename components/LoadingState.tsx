import React from 'react';

export const LoadingState: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center py-20 space-y-8">
      <div className="relative w-32 h-32 mx-auto">
        <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-brand-500 rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-4 border-slate-700 rounded-full"></div>
        <div className="absolute inset-4 border-r-4 border-accent-500 rounded-full animate-spin-slow"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl animate-pulse">⏳</span>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white mb-2">Compressing Time...</h3>
        <p className="text-slate-400">Scanning news, releases, and shifts in the timeline.</p>
      </div>
      
      <div className="flex justify-center gap-1">
        <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-0"></div>
        <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-brand-500 rounded-full animate-bounce delay-200"></div>
      </div>
    </div>
  );
};