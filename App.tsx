
import React, { useState } from 'react';
import { AppState, ParsedReport } from './types';
import { generateReport } from './services/geminiService';
import { SearchForm } from './components/SearchForm';
import { ReportDisplay } from './components/ReportDisplay';
import { LoadingState } from './components/LoadingState';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [report, setReport] = useState<ParsedReport | null>(null);
  const [currentTopic, setCurrentTopic] = useState<string>('');
  const [sinceDate, setSinceDate] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (topic: string, date: string) => {
    setAppState(AppState.LOADING);
    setCurrentTopic(topic);
    setSinceDate(date);
    setError(null);
    try {
      const data = await generateReport({ topic, sinceDate: date });
      setReport(data);
      setAppState(AppState.SUCCESS);
    } catch (err) {
      console.error(err);
      setError("Failed to generate the report. Please verify your API Key and try again.");
      setAppState(AppState.ERROR);
    }
  };

  const handleReset = () => {
    setAppState(AppState.IDLE);
    setReport(null);
    setCurrentTopic('');
    setSinceDate('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-200 selection:text-brand-900">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-200/40 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-200/40 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <main className="relative z-10 px-4 py-8 md:py-16 max-w-5xl mx-auto">
        
        {appState === AppState.IDLE && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
             <SearchForm onGenerate={handleGenerate} appState={appState} />
          </div>
        )}

        {appState === AppState.LOADING && (
          <LoadingState />
        )}

        {appState === AppState.SUCCESS && report && (
          <ReportDisplay 
            report={report} 
            topic={currentTopic} 
            sinceDate={sinceDate} 
            onReset={handleReset} 
          />
        )}

        {appState === AppState.ERROR && (
          <div className="w-full max-w-lg mx-auto text-center mt-20">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-red-600 font-bold text-lg mb-2">Temporal Anomaly Detected</h3>
              <p className="text-slate-600 mb-6">{error}</p>
              <button 
                onClick={handleReset}
                className="px-6 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-700 font-medium transition-colors"
              >
                Return to Safety
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
