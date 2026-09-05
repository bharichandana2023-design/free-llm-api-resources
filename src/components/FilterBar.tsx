import React from 'react';
import { Search, Filter, Eye, Mic, Code, Brain, Sparkles, Check } from 'lucide-react';
import { CategoryFilter, CapabilityFilter } from '../types';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  categoryFilter: CategoryFilter;
  onCategoryChange: (c: CategoryFilter) => void;
  capabilityFilter: CapabilityFilter;
  onCapabilityChange: (cap: CapabilityFilter) => void;
  selectedTag: string;
  onTagChange: (t: string) => void;
  availableTags: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  capabilityFilter,
  onCapabilityChange,
  selectedTag,
  onTagChange,
  availableTags
}) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search models (e.g., Llama 3.3, Gemini 3, DeepSeek R1, Whisper), providers, or rate limits..."
          className="w-full bg-slate-950/80 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1 border-t border-slate-800/60">
        {/* Category Tabs */}
        <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => onCategoryChange('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition cursor-pointer ${
              categoryFilter === 'all'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Providers
          </button>
          <button
            onClick={() => onCategoryChange('free')}
            className={`px-3 py-1.5 rounded-md font-medium transition cursor-pointer ${
              categoryFilter === 'free'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Free Tier Only
          </button>
          <button
            onClick={() => onCategoryChange('trial')}
            className={`px-3 py-1.5 rounded-md font-medium transition cursor-pointer ${
              categoryFilter === 'trial'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Trial Credits
          </button>
        </div>

        {/* Capability Filters */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-slate-400 font-medium mr-1 flex items-center">
            <Filter className="w-3.5 h-3.5 mr-1" /> Capability:
          </span>
          <button
            onClick={() => onCapabilityChange('all')}
            className={`px-2.5 py-1 rounded-md transition cursor-pointer border ${
              capabilityFilter === 'all'
                ? 'bg-slate-800 text-cyan-400 border-slate-700 font-semibold'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => onCapabilityChange('vision')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition cursor-pointer border ${
              capabilityFilter === 'vision'
                ? 'bg-slate-800 text-purple-400 border-slate-700 font-semibold'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-purple-400" />
            <span>Vision</span>
          </button>
          <button
            onClick={() => onCapabilityChange('audio')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition cursor-pointer border ${
              capabilityFilter === 'audio'
                ? 'bg-slate-800 text-amber-400 border-slate-700 font-semibold'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Mic className="w-3.5 h-3.5 text-amber-400" />
            <span>Audio / STT / TTS</span>
          </button>
          <button
            onClick={() => onCapabilityChange('code')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition cursor-pointer border ${
              capabilityFilter === 'code'
                ? 'bg-slate-800 text-emerald-400 border-slate-700 font-semibold'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            <span>Coding</span>
          </button>
          <button
            onClick={() => onCapabilityChange('reasoning')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-md transition cursor-pointer border ${
              capabilityFilter === 'reasoning'
                ? 'bg-slate-800 text-blue-400 border-slate-700 font-semibold'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Brain className="w-3.5 h-3.5 text-blue-400" />
            <span>Reasoning</span>
          </button>
        </div>
      </div>

      {/* Popular Tag Pills */}
      {availableTags.length > 0 && (
        <div className="flex items-center space-x-2 text-xs pt-1 overflow-x-auto no-scrollbar">
          <span className="text-slate-500 shrink-0">Tags:</span>
          {selectedTag && (
            <button
              onClick={() => onTagChange('')}
              className="bg-cyan-950 text-cyan-300 border border-cyan-800/80 px-2 py-0.5 rounded flex items-center space-x-1 cursor-pointer shrink-0"
            >
              <span>{selectedTag}</span>
              <span className="text-cyan-400 ml-1">×</span>
            </button>
          )}
          {availableTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => onTagChange(selectedTag === tag ? '' : tag)}
              className={`px-2 py-0.5 rounded text-xs transition cursor-pointer shrink-0 ${
                selectedTag === tag
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
