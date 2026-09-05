import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ProviderCard } from './components/ProviderCard';
import { CodeSnippetModal } from './components/CodeSnippetModal';
import { CompareMatrixModal } from './components/CompareMatrixModal';
import { PROVIDERS_DATA } from './data/providersData';
import { CategoryFilter, CapabilityFilter, Provider, ModelInfo } from './types';
import { Sparkles, Cpu, Layers, Info, CheckCircle2 } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [capabilityFilter, setCapabilityFilter] = useState<CapabilityFilter>('all');
  const [selectedTag, setSelectedTag] = useState('');

  // Modals State
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [codeModalProvider, setCodeModalProvider] = useState<Provider | null>(null);
  const [codeModalModel, setCodeModalModel] = useState<ModelInfo | null>(null);

  // Extract all tags across providers
  const availableTags = useMemo(() => {
    const tagsSet = new Set<string>();
    PROVIDERS_DATA.forEach((p) => {
      p.tags.forEach((t) => tagsSet.add(t));
      p.models.forEach((m) => {
        if (m.tags) m.tags.forEach((mt) => tagsSet.add(mt));
      });
    });
    return Array.from(tagsSet);
  }, []);

  // Total metrics
  const freeProvidersCount = useMemo(
    () => PROVIDERS_DATA.filter((p) => p.category === 'free').length,
    []
  );
  const trialProvidersCount = useMemo(
    () => PROVIDERS_DATA.filter((p) => p.category === 'trial').length,
    []
  );
  const totalModelsCount = useMemo(
    () => PROVIDERS_DATA.reduce((acc, p) => acc + p.models.length, 0),
    []
  );

  // Filtered Providers and Models
  const filteredProviders = useMemo(() => {
    return PROVIDERS_DATA.map((provider) => {
      // 1. Category Filter
      if (categoryFilter !== 'all' && provider.category !== categoryFilter) {
        return null;
      }

      // 2. Filter Provider Models by Search & Capabilities & Tags
      const filteredModels = provider.models.filter((model) => {
        // Capability Check
        if (capabilityFilter === 'vision' && !model.isVision) return false;
        if (capabilityFilter === 'audio' && !model.isAudio) return false;
        if (capabilityFilter === 'code' && !model.isCode) return false;
        if (capabilityFilter === 'reasoning' && !model.isReasoning) return false;

        // Tag Check
        if (selectedTag) {
          const hasProviderTag = provider.tags.includes(selectedTag);
          const hasModelTag = model.tags && model.tags.includes(selectedTag);
          if (!hasProviderTag && !hasModelTag) return false;
        }

        // Search Query Check
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchProvider = provider.name.toLowerCase().includes(q);
          const matchModelName = model.name.toLowerCase().includes(q);
          const matchModelId = model.id.toLowerCase().includes(q);
          const matchLimits = provider.limitsOverview?.toLowerCase().includes(q) || false;
          const matchTags =
            provider.tags.some((t) => t.toLowerCase().includes(q)) ||
            (model.tags && model.tags.some((t) => t.toLowerCase().includes(q)));

          if (!matchProvider && !matchModelName && !matchModelId && !matchLimits && !matchTags) {
            return false;
          }
        }

        return true;
      });

      // If query/filter is active and no models match, check if provider name matched query
      if (
        filteredModels.length === 0 &&
        searchQuery.trim() &&
        !provider.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return null;
      }

      return {
        ...provider,
        models: filteredModels.length > 0 ? filteredModels : provider.models
      };
    }).filter(Boolean) as Provider[];
  }, [searchQuery, categoryFilter, capabilityFilter, selectedTag]);

  const handleOpenCodeForModel = (provider: Provider, model: ModelInfo) => {
    setCodeModalProvider(provider);
    setCodeModalModel(model);
    setIsCodeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      <div>
        {/* Header */}
        <Header
          totalProviders={PROVIDERS_DATA.length}
          freeProvidersCount={freeProvidersCount}
          trialProvidersCount={trialProvidersCount}
          totalModels={totalModelsCount}
          onOpenCompare={() => setIsCompareModalOpen(true)}
          onOpenCodeModal={() => {
            setCodeModalProvider(PROVIDERS_DATA[0]);
            setCodeModalModel(PROVIDERS_DATA[0].models[0]);
            setIsCodeModalOpen(true);
          }}
        />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Free API Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Access 100+ Free & Trial LLM APIs
              </h2>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                Legitimate, zero-cost LLM endpoints for Google AI Studio, OpenRouter, Groq, Cerebras, GitHub Models, Cloudflare, Mistral, Cohere, and more. Compare rate limits, quotas, and generate ready-to-use code.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
              <Cpu className="w-96 h-96 text-cyan-400" />
            </div>
          </div>

          {/* Filter Bar */}
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categoryFilter={categoryFilter}
            onCategoryChange={setCategoryFilter}
            capabilityFilter={capabilityFilter}
            onCapabilityChange={setCapabilityFilter}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            availableTags={availableTags}
          />

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-slate-200">{filteredProviders.length}</strong> providers
            </span>
            {(searchQuery || categoryFilter !== 'all' || capabilityFilter !== 'all' || selectedTag) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                  setCapabilityFilter('all');
                  setSelectedTag('');
                }}
                className="text-cyan-400 hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Providers Grid */}
          {filteredProviders.length === 0 ? (
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
              <Info className="w-8 h-8 text-slate-500 mx-auto" />
              <h3 className="text-lg font-semibold text-slate-200">No Providers Found</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                No providers match your search query or capability filter. Try clearing filters or searching for a broader model name.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  searchQuery={searchQuery}
                  onSelectModelForCode={handleOpenCodeForModel}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/60 border-t border-slate-800/80 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Free LLM API Resources • Generated & Maintained for Developers
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-emerald-400 flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> All Legitimate Providers
            </span>
          </div>
        </div>
      </footer>

      {/* Code Snippet Modal */}
      <CodeSnippetModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        selectedProvider={codeModalProvider}
        selectedModel={codeModalModel}
        allProviders={PROVIDERS_DATA}
        onSelectProvider={setCodeModalProvider}
        onSelectModel={setCodeModalModel}
      />

      {/* Compare Matrix Modal */}
      <CompareMatrixModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        providers={PROVIDERS_DATA}
      />
    </div>
  );
}

export default App;
