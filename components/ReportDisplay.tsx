import React from 'react';
import { ParsedReport, GroundingSource } from '../types';

interface ReportDisplayProps {
  report: ParsedReport;
  onReset: () => void;
}

const SectionIcon = ({ type }: { type: 'rocket' | 'trophy' | 'calendar' | 'brain' | 'crystal' }) => {
  switch (type) {
    case 'rocket':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-400">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.003c-.004.004-.008.008-.012.012a.75.75 0 01-.818.154c-.198-.056-.399-.091-.602-.109-.99-.087-1.931-.303-2.766-.636l-.063-.025a1.5 1.5 0 01-.06-.026l-.946-.425a1.996 1.996 0 00-1.879.098l-.495.297a6.236 6.236 0 01-1.272.58l-.667.222a2.805 2.805 0 00-1.748 3.518l.217.65c.3.9.155 1.9-.387 2.646-.248.34-.415.74-.486 1.168a3.75 3.75 0 004.603 4.296c.219-.053.434-.117.643-.19.98-.344 1.866-.99 2.518-1.835.534-.693 1.516-.76 2.122-.164l.842.828a.75.75 0 001.127-.086c.655-.735 1.258-1.523 1.796-2.356a.75.75 0 00-.315-1.076 17.552 17.552 0 00-3.32-1.398.75.75 0 00-.735.253c-.354.434-.784.81-1.288 1.107a.75.75 0 01-1.037-.239l-.427-.69a.75.75 0 00-1.238-.075l-.478.69c-.27.391-.767.535-1.196.347a.75.75 0 01-.274-.986l1.242-2.368c.113-.216.27-.404.458-.552.18-.142.384-.239.6-.285.346-.073.705-.065 1.05.025a7.51 7.51 0 003.882-.242.75.75 0 00.528-.858 7.505 7.505 0 00-1.356-3.085.75.75 0 00-1.038-.175 4.542 4.542 0 00-1.63 1.977.75.75 0 01-1.39-.564 6.046 6.046 0 012.37-2.923.75.75 0 00.126-1.166zM5.385 10.183a.75.75 0 00-.977 1.139c1.63 1.398 2.067 3.654 1.156 5.568l-.248.52a.75.75 0 00.99 1.006c2.479-1.042 3.737-3.929 2.91-6.529a.75.75 0 00-1.123-.393l-.437.262a2.996 2.996 0 01-2.27.327z" clipRule="evenodd" />
        </svg>
      );
    case 'trophy':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
          <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
        </svg>
      );
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-cyan-400">
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM11.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path fillRule="evenodd" d="M7.5 1.5a.75.75 0 01.75.75V3h7.5V2.25a.75.75 0 011.5 0V3h2.25c.828 0 1.5.672 1.5 1.5v13.5c0 .828-.672 1.5-1.5 1.5H4.5A1.5 1.5 0 013 18V4.5c0-.828.672-1.5 1.5-1.5h2.25V2.25A.75.75 0 017.5 1.5zm-3 16.5h15V6.75H4.5v11.25z" clipRule="evenodd" />
        </svg>
      );
    case 'brain':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-400">
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      );
    case 'crystal':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-400">
          <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
        </svg>
      );
  }
};

export const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, onReset }) => {
  if (!report.catchUp && !report.outlook) {
    // Fallback if parsing failed completely
    return (
      <div className="text-red-400 p-4 bg-slate-800 rounded">
        Failed to parse report. 
        <pre className="mt-4 text-xs whitespace-pre-wrap">{report.raw}</pre>
        <button onClick={onReset} className="mt-4 text-brand-400 underline">Try Again</button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in pb-16">
      
      {/* Action Bar */}
      <div className="flex justify-between items-center">
        <button 
          onClick={onReset} 
          className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm"
        >
          ← Analyze Another Topic
        </button>
        <span className="text-slate-500 text-xs uppercase tracking-wider font-bold">Generated by Gemini 2.5</span>
      </div>

      {/* 🚀 Catch Up */}
      <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <SectionIcon type="rocket" />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-brand-900/50 rounded-lg border border-brand-700/50">
            <SectionIcon type="rocket" />
          </div>
          <h2 className="text-xl font-bold text-white">The 30-Second Catch-Up</h2>
        </div>
        <p className="text-lg text-slate-200 leading-relaxed font-medium">
          {report.catchUp}
        </p>
      </div>

      {/* 🏆 Big Three */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {report.bigThree.map((item, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-yellow-500/30 transition-all group">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-500 font-mono text-xl opacity-60">0{index + 1}</span>
            </div>
            <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* 📅 Timeline */}
      <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-cyan-900/50 rounded-lg border border-cyan-700/50">
             <SectionIcon type="calendar" />
          </div>
          <h2 className="text-xl font-bold text-white">Timeline of Evolution</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-700 text-xs font-bold text-slate-500 uppercase tracking-wider w-32">When</th>
                <th className="p-4 border-b border-slate-700 text-xs font-bold text-slate-500 uppercase tracking-wider w-48">What</th>
                <th className="p-4 border-b border-slate-700 text-xs font-bold text-slate-500 uppercase tracking-wider">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {report.timeline.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-mono text-sm text-cyan-400 whitespace-nowrap">{row.date}</td>
                  <td className="p-4 font-bold text-white text-sm">{row.event}</td>
                  <td className="p-4 text-slate-400 text-sm">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🧠 Jargon */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-pink-900/50 rounded-lg border border-pink-700/50">
              <SectionIcon type="brain" />
            </div>
            <h2 className="text-xl font-bold text-white">New Terminology</h2>
          </div>
          <ul className="space-y-4">
            {report.terminology.map((item, idx) => (
              <li key={idx} className="flex gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2.5 flex-shrink-0" />
                 <div>
                   <span className="block font-bold text-slate-200">{item.term}</span>
                   <span className="text-sm text-slate-400">{item.definition}</span>
                 </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔮 Future */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-800 rounded-2xl p-6 border border-indigo-700/50 flex flex-col">
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-900/80 rounded-lg border border-indigo-500/50">
              <SectionIcon type="crystal" />
            </div>
            <h2 className="text-xl font-bold text-white">Future Outlook</h2>
          </div>
          <p className="text-slate-300 leading-relaxed flex-grow">
            {report.outlook}
          </p>
        </div>
      </div>

      {/* Sources Footer */}
      {report.sources && report.sources.length > 0 && (
        <div className="pt-8 border-t border-slate-800">
           <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Sources</h4>
           <div className="flex flex-wrap gap-2">
             {report.sources.map((source, idx) => (
               <a 
                key={idx} 
                href={source.uri} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-brand-500 hover:text-brand-400 hover:underline bg-slate-800 px-2 py-1 rounded border border-slate-700"
               >
                 {source.title || source.uri}
               </a>
             ))}
           </div>
        </div>
      )}

    </div>
  );
};