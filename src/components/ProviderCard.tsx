import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Eye, Mic, Code, Brain, ChevronDown, ChevronUp, ShieldAlert, Sparkles, BookOpen, Terminal } from 'lucide-react';
import { Provider, ModelInfo } from '../types';

interface ProviderCardProps {
  provider: Provider;
  searchQuery?: string;
  onSelectModelForCode: (provider: Provider, model: ModelInfo) => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({
  provider,
  searchQuery,
  onSelectModelForCode
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [copiedModelId, setCopiedModelId] = useState<string | null>(null);

  const handleCopyModelId = (e: React.MouseEvent, modelId: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(modelId);
    setCopiedModelId(modelId);
    setTimeout(() => setCopiedModelId(null), 2000);
  };

  const isFree = provider.category === 'free';

  return (
    <div className="bg-slate-900/80 border border-slate-800/90 hover:border-slate-700/80 rounded-xl transition shadow-lg shadow-black/20 overflow-hidden flex flex-col justify-between">
      <div>
        {/* Header Section */}
        <div className="p-5 border-b border-slate-800/60 bg-gradient-to-b from-slate-900 to-slate-900/90">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition">
                  {provider.name}
                </h3>
                <span
                  className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border ${
                    isFree
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                  }`}
                >
                  {isFree ? 'Free Tier' : 'Trial Credits'}
                </span>
              </div>

              {provider.limitsOverview && (
                <p className="text-xs font-medium text-cyan-400 mt-1 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1 text-cyan-400 shrink-0" />
                  <span>{provider.limitsOverview}</span>
                </p>
              )}

              {provider.creditsOverview && (
                <p className="text-xs font-semibold text-emerald-400 mt-1">
                  💳 {provider.creditsOverview}
                </p>
              )}
            </div>

            {/* Provider Links */}
            <div className="flex items-center space-x-1.5 shrink-0">
              {provider.docsUrl && (
                <a
                  href={provider.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View API Documentation"
                  className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              )}
              <a
                href={provider.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${provider.name}`}
                className="p-1.5 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Requirements & Info */}
          {provider.requirements && (
            <div className="mt-2 text-xs text-slate-400 flex items-start space-x-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{provider.requirements}</span>
            </div>
          )}

          {/* Notes */}
          {provider.notes && provider.notes.length > 0 && (
            <div className="mt-2 space-y-1">
              {provider.notes.map((note, idx) => (
                <p key={idx} className="text-[11px] text-slate-400 leading-relaxed">
                  • {note}
                </p>
              ))}
            </div>
          )}

          {/* Provider Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {provider.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Models List Section */}
        <div className="p-4">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5 font-medium">
            <div className="flex items-center space-x-2">
              <span>Models ({provider.models.length})</span>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center space-x-1 cursor-pointer"
            >
              <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {isExpanded && (
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {provider.models.length === 0 ? (
                <p className="text-xs text-slate-500 italic py-2">No matching models found.</p>
              ) : (
                provider.models.map((model) => (
                  <div
                    key={model.id}
                    className="group/model bg-slate-950/70 hover:bg-slate-950 border border-slate-800/80 hover:border-slate-700/80 rounded-lg p-2.5 transition flex flex-col justify-between gap-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center space-x-1.5 flex-wrap">
                          <span className="text-xs font-semibold text-slate-100 truncate">
                            {model.name}
                          </span>

                          {/* Capability Badges */}
                          {model.isVision && (
                            <span title="Supports Vision / Image Input" className="inline-flex items-center text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 py-0.2 rounded">
                              <Eye className="w-3 h-3 mr-0.5" /> Vision
                            </span>
                          )}
                          {model.isAudio && (
                            <span title="Supports Audio / STT / TTS" className="inline-flex items-center text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.2 rounded">
                              <Mic className="w-3 h-3 mr-0.5" /> Audio
                            </span>
                          )}
                          {model.isCode && (
                            <span title="Optimized for Coding" className="inline-flex items-center text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.2 rounded">
                              <Code className="w-3 h-3 mr-0.5" /> Code
                            </span>
                          )}
                          {model.isReasoning && (
                            <span title="Reasoning / Thinking Model" className="inline-flex items-center text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.2 rounded">
                              <Brain className="w-3 h-3 mr-0.5" /> Reasoning
                            </span>
                          )}
                        </div>

                        <div className="text-[11px] font-mono text-slate-500 truncate mt-0.5 select-all">
                          {model.id}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-1 shrink-0">
                        <button
                          onClick={(e) => handleCopyModelId(e, model.id)}
                          title="Copy Model ID"
                          className="p-1 rounded bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition cursor-pointer"
                        >
                          {copiedModelId === model.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          onClick={() => onSelectModelForCode(provider, model)}
                          title="Generate API Code"
                          className="p-1 rounded bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition cursor-pointer"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Model Limits Breakdown */}
                    {model.limits && (
                      <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-mono bg-slate-900/60 p-1.5 rounded border border-slate-800/40">
                        {model.limits.requestsPerMin && (
                          <span>⚡ {model.limits.requestsPerMin} req/min</span>
                        )}
                        {model.limits.requestsPerDay && (
                          <span>📅 {model.limits.requestsPerDay} req/day</span>
                        )}
                        {model.limits.requestsPerMonth && (
                          <span>🗓️ {model.limits.requestsPerMonth} req/mo</span>
                        )}
                        {model.limits.tokensPerMin && (
                          <span>📊 {model.limits.tokensPerMin} tpm</span>
                        )}
                        {model.limits.tokensPerMonth && (
                          <span>📦 {model.limits.tokensPerMonth} tok/mo</span>
                        )}
                        {model.limits.audioSecondsPerMin && (
                          <span>🎙️ {model.limits.audioSecondsPerMin} sec/min</span>
                        )}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
