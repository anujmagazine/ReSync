import React, { useState } from 'react';
import { AppState } from '../types';

interface SearchFormProps {
  onGenerate: (topic: string, sinceDate: string) => void;
  appState: AppState;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onGenerate, appState }) => {
  const [topic, setTopic] = useState('');
  const [sinceDate, setSinceDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic && sinceDate) {
      onGenerate(topic, sinceDate);
    }
  };

  const isLoading = appState === AppState.LOADING;

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden group">
       {/* Decorative gradient glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500 opacity-80" />
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-2">
          Time-Skip Analyst
        </h1>
        <p className="text-slate-400">
          Missed a few years? Get caught up in 30 seconds.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="topic" className="block text-sm font-medium text-slate-300">
            What topic did you miss?
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. React.js, SEO, The Marvel Cinematic Universe"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-slate-300">
            When was the last time you checked in?
          </label>
          <input
            id="date"
            type="date"
            value={sinceDate}
            onChange={(e) => setSinceDate(e.target.value)}
            disabled={isLoading}
            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all [color-scheme:dark]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !topic || !sinceDate}
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
            ${isLoading 
              ? 'bg-slate-700 cursor-not-allowed opacity-70' 
              : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-brand-900/50'
            }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing Timeline...
            </span>
          ) : (
            "Bridge the Gap"
          )}
        </button>
      </form>
    </div>
  );
};