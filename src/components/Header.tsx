import React from 'react';
import { Cpu, Zap, Sparkles, ShieldAlert, Code2, Scale } from 'lucide-react';

interface HeaderProps {
  totalProviders: number;
  freeProvidersCount: number;
  trialProvidersCount: number;
  totalModels: number;
  onOpenCompare: () => void;
  onOpenCodeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalProviders,
  freeProvidersCount,
  trialProvidersCount,
  totalModels,
  onOpenCompare,
  onOpenCodeModal
}) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-white tracking-tight">Free LLM API Resources</h1>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  2026 Directory
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Directory and rate-limit tracker for free & trial LLM API providers
              </p>
            </div>
          </div>

          {/* Quick Metrics & Actions */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center space-x-3 bg-slate-950/60 border border-slate-800/80 px-3 py-1.5 rounded-lg text-slate-300">
              <div>
                <span className="font-semibold text-cyan-400">{freeProvidersCount}</span> Free Providers
              </div>
              <div className="w-px h-3 bg-slate-800" />
              <div>
                <span className="font-semibold text-blue-400">{trialProvidersCount}</span> Trial Credits
              </div>
              <div className="w-px h-3 bg-slate-800" />
              <div>
                <span className="font-semibold text-emerald-400">{totalModels}+</span> Models
              </div>
            </div>

            <button
              onClick={onOpenCompare}
              className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg font-medium transition cursor-pointer border border-slate-700/60"
            >
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Compare Rates</span>
            </button>

            <button
              onClick={onOpenCodeModal}
              className="flex items-center space-x-1.5 bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg font-medium transition cursor-pointer shadow-sm shadow-cyan-600/30"
            >
              <Code2 className="w-4 h-4" />
              <span>Code Snippets</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
