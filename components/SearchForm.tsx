
import React, { useState, useEffect } from 'react';
import { AppState } from '../types';

interface SearchFormProps {
  onGenerate: (topic: string, sinceDate: string) => void;
  appState: AppState;
}

const EXAMPLE_TOPICS = [
  "Virat Kohli's Career",
  "Apple in AI",
  "NVIDIA & GPU Tech",
  "OpenAI's O1 Model",
  "Manchester United",
  "Tesla FSD Progress",
  "The MCU Phase 5",
  "Taylor Swift's Eras",
  "React.js 19",
  "SpaceX Starship"
];

export const SearchForm: React.FC<SearchFormProps> = ({ onGenerate, appState }) => {
  const [topic, setTopic] = useState('');
  const [sinceDate, setSinceDate] = useState('');
  const [dateError, setDateError] = useState<string | null>(null);

  const today = new Date().toISOString().split('T')[0];

  // Validate date whenever it changes
  useEffect(() => {
    if (sinceDate && sinceDate > today) {
      setDateError("The past hasn't happened yet! Please select a date in the past or today.");
    } else {
      setDateError(null);
    }
  }, [sinceDate, today]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic && sinceDate && !dateError) {
      onGenerate(topic, sinceDate);
    }
  };

  const isLoading = appState === AppState.LOADING;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group">
       {/* Decorative gradient glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-accent-400 to-brand-400 opacity-80" />
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 mb-3 tracking-tight">
          ReSync
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
          Rapidly bridge your knowledge gaps. Enter a topic and the date you last followed it to receive a concise, AI-generated briefing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="topic" className="block text-sm font-medium text-slate-700">
            What topic did you miss?
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Virat Kohli, Apple in AI, Bitcoin..."
            disabled={isLoading}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all focus:bg-white"
            required
          />
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-xs font-medium text-slate-400 self-center">Try:</span>
            {EXAMPLE_TOPICS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTopic(t)}
                disabled={isLoading}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 border border-slate-200 transition-all disabled:opacity-50"
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-slate-700">
            When was the last time you checked in?
          </label>
          <input
            id="date"
            type="date"
            value={sinceDate}
            max={today}
            onChange={(e) => setSinceDate(e.target.value)}
            disabled={isLoading}
            className={`w-full px-4 py-3 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all focus:bg-white
              ${dateError 
                ? 'bg-red-50 border-red-300 focus:ring-red-500' 
                : 'bg-slate-50 border-slate-200 focus:ring-brand-500'
              }`}
            required
          />
          {dateError && (
            <p className="text-xs font-semibold text-red-600 animate-fade-in flex items-center gap-1.5 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              {dateError}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || !topic || !sinceDate || !!dateError}
          className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg
            ${isLoading || !!dateError || !topic || !sinceDate
              ? 'bg-slate-300 cursor-not-allowed opacity-70' 
              : 'bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-brand-500/30'
            }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Resyncing Timeline...
            </span>
          ) : (
            "Generate Briefing"
          )}
        </button>
      </form>
    </div>
  );
};
