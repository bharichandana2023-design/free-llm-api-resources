import React, { useState } from 'react';
import { X, Scale, Sparkles, Check, ShieldAlert, ExternalLink } from 'lucide-react';
import { Provider } from '../types';

interface CompareMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  providers: Provider[];
}

export const CompareMatrixModal: React.FC<CompareMatrixModalProps> = ({
  isOpen,
  onClose,
  providers
}) => {
  if (!isOpen) return null;

  // Filter top major free providers for comparison table
  const majorProviders = providers.filter((p) =>
    ['google-ai-studio', 'groq', 'cerebras', 'openrouter', 'mistral-la-plateforme', 'github-models', 'cloudflare-workers-ai', 'cohere'].includes(p.id)
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center space-x-2">
            <Scale className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-white text-base">Free Provider Rate Limits Comparison</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Matrix Content */}
        <div className="p-4 overflow-x-auto overflow-y-auto flex-1">
          <table className="w-full text-xs text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                <th className="p-3 font-semibold w-1/4">Provider</th>
                <th className="p-3 font-semibold w-1/4">Rate Limits Overview</th>
                <th className="p-3 font-semibold w-1/4">Requirements</th>
                <th className="p-3 font-semibold w-1/4">Top Models Available</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {majorProviders.map((p) => (
                <tr key={p.id} className="hover:bg-slate-950/40 transition">
                  <td className="p-3 font-bold text-white flex items-center space-x-2">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition flex items-center space-x-1"
                    >
                      <span>{p.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </td>

                  <td className="p-3 font-mono text-cyan-300">
                    {p.limitsOverview || 'Varies by model'}
                  </td>

                  <td className="p-3 text-slate-400">
                    {p.requirements || 'Free registration'}
                  </td>

                  <td className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {p.models.slice(0, 3).map((m) => (
                        <span key={m.id} className="bg-slate-950 text-slate-300 border border-slate-800 px-1.5 py-0.5 rounded text-[10px]">
                          {m.name}
                        </span>
                      ))}
                      {p.models.length > 3 && (
                        <span className="text-[10px] text-slate-500 font-semibold self-center">
                          +{p.models.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
