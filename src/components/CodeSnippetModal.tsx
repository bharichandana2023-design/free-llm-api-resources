import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Code2 } from 'lucide-react';
import { Provider, ModelInfo } from '../types';

interface CodeSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProvider: Provider | null;
  selectedModel: ModelInfo | null;
  allProviders: Provider[];
  onSelectProvider: (p: Provider) => void;
  onSelectModel: (m: ModelInfo) => void;
}

export const CodeSnippetModal: React.FC<CodeSnippetModalProps> = ({
  isOpen,
  onClose,
  selectedProvider,
  selectedModel,
  allProviders,
  onSelectProvider,
  onSelectModel
}) => {
  const [language, setLanguage] = useState<'python' | 'javascript' | 'curl'>('python');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const provider = selectedProvider || allProviders[0];
  const model = selectedModel || (provider?.models[0] ?? { id: 'default-model', name: 'Default Model' });

  const getBaseUrl = (pId: string) => {
    switch (pId) {
      case 'openrouter':
        return 'https://openrouter.ai/api/v1';
      case 'groq':
        return 'https://api.groq.com/openai/v1';
      case 'google-ai-studio':
        return 'https://generativelanguage.googleapis.com/v1beta';
      case 'cerebras':
        return 'https://api.cerebras.ai/v1';
      case 'github-models':
        return 'https://models.inference.ai.azure.com';
      case 'hyperbolic':
        return 'https://api.hyperbolic.xyz/v1';
      case 'cloudflare-workers-ai':
        return 'https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1';
      default:
        return `https://api.${pId}.com/v1`;
    }
  };

  const getApiKeyEnv = (pId: string) => {
    return `${pId.replace(/-/g, '_').toUpperCase()}_API_KEY`;
  };

  const generateCode = () => {
    const baseUrl = getBaseUrl(provider.id);
    const apiKeyEnv = getApiKeyEnv(provider.id);

    if (language === 'python') {
      if (provider.id === 'google-ai-studio') {
        return `# Google GenAI SDK
from google import genai

client = genai.Client(api_key="${apiKeyEnv}")

response = client.models.generate_content(
    model="${model.id}",
    contents="Hello! How do free API rate limits work?",
)
print(response.text)`;
      }

      return `# Standard OpenAI SDK for ${provider.name}
from openai import OpenAI
import os

client = OpenAI(
    base_url="${baseUrl}",
    api_key=os.environ.get("${apiKeyEnv}", "your-api-key"),
)

completion = client.chat.completions.create(
    model="${model.id}",
    messages=[
        {"role": "user", "content": "Hello! Explain your rate limits in 2 sentences."}
    ]
)

print(completion.choices[0].message.content)`;
    }

    if (language === 'javascript') {
      if (provider.id === 'google-ai-studio') {
        return `import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.${apiKeyEnv} });

async function run() {
  const response = await ai.models.generateContent({
    model: '${model.id}',
    contents: 'Hello! Explain rate limits briefly.',
  });
  console.log(response.text);
}

run();`;
      }

      return `import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: '${baseUrl}',
  apiKey: process.env.${apiKeyEnv} || 'your-api-key',
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: '${model.id}',
    messages: [{ role: 'user', content: 'Hello!' }],
  });

  console.log(completion.choices[0].message.content);
}

main();`;
    }

    if (language === 'curl') {
      return `curl -X POST "${baseUrl}/chat/completions" \\
  -H "Authorization: Bearer $${apiKeyEnv}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${model.id}",
    "messages": [
      {
        "role": "user",
        "content": "Hello world!"
      }
    ]
  }'`;
    }

    return '';
  };

  const codeText = generateCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center space-x-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-white text-base">API Code Snippet Generator</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls */}
        <div className="p-4 border-b border-slate-800 bg-slate-900 space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Provider:</label>
              <select
                value={provider.id}
                onChange={(e) => {
                  const p = allProviders.find((x) => x.id === e.target.value);
                  if (p) {
                    onSelectProvider(p);
                    if (p.models.length > 0) {
                      onSelectModel(p.models[0]);
                    }
                  }
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                {allProviders.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.category === 'free' ? 'Free' : 'Trial'})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Model:</label>
              <select
                value={model.id}
                onChange={(e) => {
                  const m = provider.models.find((x) => x.id === e.target.value);
                  if (m) onSelectModel(m);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                {provider.models.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setLanguage('python')}
                className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                  language === 'python' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setLanguage('javascript')}
                className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                  language === 'javascript' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                JavaScript / Node
              </button>
              <button
                onClick={() => setLanguage('curl')}
                className={`px-3 py-1 rounded-md font-medium transition cursor-pointer ${
                  language === 'curl' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                cURL
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg transition cursor-pointer text-xs font-semibold border border-slate-700"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Display */}
        <div className="p-4 bg-slate-950 overflow-x-auto flex-1 font-mono text-xs text-slate-200 leading-relaxed">
          <pre>{codeText}</pre>
        </div>
      </div>
    </div>
  );
};
