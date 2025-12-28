
import React from 'react';
import { ParsedReport } from '../types';

interface ReportDisplayProps {
  report: ParsedReport;
  onReset: () => void;
}

const SectionIcon = ({ type }: { type: 'rocket' | 'trophy' | 'calendar' | 'brain' | 'flash' | 'sync' | 'pdf' | 'check' }) => {
  switch (type) {
    case 'rocket':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-500">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.003c-.004.004-.008.008-.012.012a.75.75 0 01-.818.154c-.198-.056-.399-.091-.602-.109-.99-.087-1.931-.303-2.766-.636l-.063-.025a1.5 1.5 0 01-.06-.026l-.946-.425a1.996 1.996 0 00-1.879.098l-.495.297a6.236 6.236 0 01-1.272.58l-.667.222a2.805 2.805 0 00-1.748 3.518l.217.65c.3.9.155 1.9-.387 2.646-.248.34-.415.74-.486 1.168a3.75 3.75 0 004.603 4.296c.219-.053.434-.117.643-.19.98-.344 1.866-.99 2.518-1.835.534-.693 1.516-.76 2.122-.164l.842.828a.75.75 0 001.127-.086c.655-.735 1.258-1.523 1.796-2.356a.75.75 0 00-.315-1.076 17.552 17.552 0 00-3.32-1.398.75.75 0 00-.735.253c-.354.434-.784.81-1.288 1.107a.75.75 0 01-1.037-.239l-.427-.69a.75.75 0 00-1.238-.075l-.478.69c-.27.391-.767.535-1.196.347a.75.75 0 01-.274-.986l1.242-2.368c.113-.216.27-.404.458-.552.18-.142.384-.239.6-.285.346-.073.705-.065 1.05.025a7.51 7.51 0 003.882-.242.75.75 0 00.528-.858 7.505 7.505 0 00-1.356-3.085.75.75 0 00-1.038-.175 4.542 4.542 0 00-1.63 1.977.75.75 0 01-1.39-.564 6.046 6.046 0 012.37-2.923.75.75 0 00.126-1.166zM5.385 10.183a.75.75 0 00-.977 1.139c1.63 1.398 2.067 3.654 1.156 5.568l-.248.52a.75.75 0 00.99 1.006c2.479-1.042 3.737-3.929 2.91-6.529a.75.75 0 00-1.123-.393l-.437.262a2.996 2.996 0 01-2.27.327z" clipRule="evenodd" />
        </svg>
      );
    case 'trophy':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
          <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
        </svg>
      );
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-cyan-600">
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM11.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path fillRule="evenodd" d="M7.5 1.5a.75.75 0 01.75.75V3h7.5V2.25a.75.75 0 011.5 0V3h2.25c.828 0 1.5.672 1.5 1.5v13.5c0 .828-.672 1.5-1.5 1.5H4.5A1.5 1.5 0 013 18V4.5c0-.828.672-1.5 1.5-1.5h2.25V2.25A.75.75 0 017.5 1.5zm-3 16.5h15V6.75H4.5v11.25z" clipRule="evenodd" />
        </svg>
      );
    case 'brain':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-500">
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      );
    case 'flash':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
          <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
        </svg>
      );
    case 'sync':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-500">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
        </svg>
      );
    case 'pdf':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" clipRule="evenodd" />
          <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
        </svg>
      );
    case 'check':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-500">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.74-5.24z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};

export const ReportDisplay: React.FC<ReportDisplayProps> = ({ report, onReset }) => {
  const handleDownloadPDF = () => {
    // The most reliable way in a frontend-only app to "download as PDF" with 100% style fidelity 
    // is to trigger the browser's optimized print engine. 
    // We handle the styling via @media print in the component.
    window.print();
  };

  if (!report.catchUp && !report.currentStand) {
    return (
      <div className="text-red-500 p-4 bg-red-50 rounded border border-red-200">
        Failed to parse report. 
        <pre className="mt-4 text-xs whitespace-pre-wrap text-slate-700">{report.raw}</pre>
        <button onClick={onReset} className="mt-4 text-brand-600 underline hover:text-brand-800">Try Again</button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-fade-in pb-16 report-container">
      {/* Print-specific style block */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0 !important; padding: 20px !important; }
          .report-container { max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
          .bg-white { border: 1px solid #e2e8f0 !important; box-shadow: none !important; }
          .shadow-xl, .shadow-sm, .shadow-md { box-shadow: none !important; }
          .rounded-3xl { border-radius: 1rem !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          a { text-decoration: none !important; color: #0284c7 !important; }
          .grid { display: block !important; }
          .grid > div { margin-bottom: 1.5rem !important; page-break-inside: avoid; }
          .timeline-item { page-break-inside: avoid; }
        }
      `}</style>
      
      {/* Action Bar */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 no-print">
        <div className="flex items-center gap-6">
          <button 
            onClick={onReset} 
            className="text-slate-500 hover:text-brand-600 flex items-center gap-2 transition-colors text-sm group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Analyze Another Topic
          </button>
          <button 
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-200"
          >
            <SectionIcon type="pdf" />
            Download as PDF
          </button>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-slate-400 text-[10px] uppercase tracking-wider font-bold">Generated by Gemini 2.5</span>
        </div>
      </div>

      {/* Print Header (Only visible when printing) */}
      <div className="hidden print:block mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-slate-900">ReSync Briefing</h1>
        <p className="text-slate-500 text-sm">Generated on {new Date().toLocaleDateString()}</p>
      </div>

      {/* 🚀 Catch Up - Hero Section */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transform translate-x-10 -translate-y-10 no-print">
          <svg className="w-48 h-48 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.95 1.47-8.95 4.47L2.95 15.47 12 11zm11 1.53l-2.95 1.47L12 18.53 3.95 14.53 1 16l11 5.5 11-5.5-1.05-1.47z"/></svg>
        </div>
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-2 bg-brand-50 rounded-xl border border-brand-200">
            <SectionIcon type="rocket" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">The 30-Second Catch-Up</h2>
        </div>
        <p className="text-xl text-slate-700 leading-relaxed font-medium relative z-10">
          {report.catchUp}
        </p>
      </div>

      {/* 🏆 Big Three */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {report.bigThree.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all group flex flex-col shadow-sm">
            <div className="flex items-center gap-3 mb-4 no-print">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-yellow-600 font-bold text-sm border border-slate-200 group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                {index + 1}
              </span>
              <div className="h-px bg-slate-200 flex-grow group-hover:bg-yellow-200 transition-colors"></div>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-yellow-700 transition-colors">
              <span className="hidden print:inline mr-2">{index + 1}.</span>
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.description}</p>
          </div>
        ))}
      </div>

      {/* 🔄 Then vs Now (Paradigm Shift) */}
      {report.thenVsNow && report.thenVsNow.length > 0 && (
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl break-inside-avoid">
          <div className="p-8 pb-4 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-50 rounded-xl border border-indigo-200">
                <SectionIcon type="sync" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Then vs. Now</h2>
            </div>
            <p className="text-slate-500 ml-1">How the paradigm has shifted since your last check-in.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-slate-100">
             {report.thenVsNow.map((item, idx) => (
               <React.Fragment key={idx}>
                 <div className="bg-white p-6 md:col-span-2 grid md:grid-cols-2 gap-6 relative group hover:bg-slate-50/50 transition-colors break-inside-avoid">
                    <div className="space-y-2 relative">
                      <div className="text-xs font-bold text-slate-400 uppercase mb-1">The Old Way</div>
                      <div className="flex items-start gap-3">
                         <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-300"></div>
                         <p className="text-slate-500 line-through decoration-slate-300 decoration-2 text-lg">{item.old}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full items-center justify-center text-slate-400 z-10 border border-slate-200 shadow-sm no-print">
                      →
                    </div>
                    <div className="space-y-2">
                       <div className="text-xs font-bold text-brand-600 uppercase mb-1">The New Way</div>
                       <div className="flex items-start gap-3">
                         <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(14,165,233,0.4)]"></div>
                         <div>
                            <p className="text-slate-900 font-bold text-lg">{item.new}</p>
                            <p className="text-brand-600 text-sm mt-1 font-medium">{item.benefit}</p>
                         </div>
                      </div>
                    </div>
                 </div>
               </React.Fragment>
             ))}
          </div>
        </div>
      )}

      {/* 📅 Timeline */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-cyan-50 rounded-xl border border-cyan-200">
             <SectionIcon type="calendar" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Timeline of Evolution</h2>
        </div>
        
        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-8 md:space-y-12 pb-4">
          {report.timeline.map((row, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group timeline-item">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-cyan-500 group-hover:bg-cyan-500 group-hover:scale-110 transition-all"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                <div className="mb-1 md:mb-0 md:w-32 flex-shrink-0">
                  <span className="inline-block py-1 px-2 rounded bg-slate-100 text-cyan-700 text-xs font-mono font-bold border border-slate-200">
                    {row.date}
                  </span>
                </div>
                <div className="flex-grow">
                   <h4 className="text-lg font-bold text-slate-900 mb-2">{row.event}</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">{row.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {report.terminology.length > 0 && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm break-inside-avoid">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-50 rounded-xl border border-pink-200">
                <SectionIcon type="brain" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">New Terminology</h2>
            </div>
            <ul className="space-y-5">
              {report.terminology.map((item, idx) => (
                <li key={idx} className="flex gap-4 group">
                   <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" />
                   <div>
                     <span className="block font-bold text-slate-800 text-lg mb-1">{item.term}</span>
                     <span className="text-sm text-slate-600 leading-relaxed">{item.definition}</span>
                   </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={`bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100 flex flex-col shadow-sm break-inside-avoid ${report.terminology.length === 0 ? 'md:col-span-2' : ''}`}>
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-xl border border-green-200">
              <SectionIcon type="flash" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">The New Standard</h2>
          </div>
          <div className="text-slate-700 leading-relaxed flex-grow text-lg space-y-4">
             {report.currentStand.split('\n').map((para, i) => (
               <p key={i}>{para}</p>
             ))}
          </div>
        </div>
      </div>

      {/* Sources Footer */}
      {report.sources && report.sources.length > 0 && (
        <div className="pt-8 border-t border-slate-200 break-inside-avoid">
           <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Sources & Further Reading</h4>
           <div className="flex flex-wrap gap-2">
             {report.sources.map((source, idx) => (
               <a 
                key={idx} 
                href={source.uri} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-brand-600 hover:text-white hover:bg-brand-600 bg-white px-3 py-2 rounded-lg border border-slate-200 transition-all flex items-center gap-2"
               >
                 <span>🔗</span>
                 {source.title || new URL(source.uri || '').hostname}
               </a>
             ))}
           </div>
        </div>
      )}

      {/* Footer Branding (Print Only) */}
      <div className="hidden print:block mt-12 pt-4 border-t text-center text-[10px] text-slate-400">
        This briefing was intelligently curated by ReSync using the Gemini 2.5 Flash API.
      </div>
    </div>
  );
};
