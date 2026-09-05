import { Provider } from '../types';

export const PROVIDERS_DATA: Provider[] = [
  {
    id: 'openrouter',
    name: 'OpenRouter',
    category: 'free',
    url: 'https://openrouter.ai',
    docsUrl: 'https://openrouter.ai/docs/api/reference/limits',
    limitsOverview: '20 req/min • 50 req/day (Up to 1,000 req/day with $10 topup)',
    requirements: 'Free registration (No phone required)',
    notes: [
      'Models share a common quota.',
      'Includes top open models from Google, Meta, Nous, MiniMax, Qwen, and Nvidia.'
    ],
    tags: ['Aggregator', 'High Variety', 'Free Tier', 'Open Source'],
    models: [
      { id: 'google/gemma-3-12b-it:free', name: 'Gemma 3 12B Instruct', link: 'https://openrouter.ai/google/gemma-3-12b-it:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Google', 'Gemma'] },
      { id: 'google/gemma-3-27b-it:free', name: 'Gemma 3 27B Instruct', link: 'https://openrouter.ai/google/gemma-3-27b-it:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Google', 'Gemma'] },
      { id: 'google/gemma-3-4b-it:free', name: 'Gemma 3 4B Instruct', link: 'https://openrouter.ai/google/gemma-3-4b-it:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Google', 'Gemma'] },
      { id: 'nousresearch/hermes-3-llama-3.1-405b:free', name: 'Hermes 3 Llama 3.1 405B', link: 'https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Meta', '405B', 'Nous'] },
      { id: 'meta-llama/llama-3.2-3b-instruct:free', name: 'Llama 3.2 3B Instruct', link: 'https://openrouter.ai/meta-llama/llama-3.2-3b-instruct:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Meta', 'Lightweight'] },
      { id: 'meta-llama/llama-3.3-70b-instruct:free', name: 'Llama 3.3 70B Instruct', link: 'https://openrouter.ai/meta-llama/llama-3.3-70b-instruct:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Meta', '70B'] },
      { id: 'qwen/qwen3-coder:free', name: 'Qwen 3 Coder Free', link: 'https://openrouter.ai/qwen/qwen3-coder:free', isCode: true, limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Alibaba', 'Coding'] },
      { id: 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free', name: 'Dolphin Mistral 24B Venice', link: 'https://openrouter.ai/cognitivecomputations/dolphin-mistral-24b-venice-edition:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Uncensored', 'Mistral'] },
      { id: 'minimax/minimax-m2.5:free', name: 'MiniMax M2.5 Free', link: 'https://openrouter.ai/minimax/minimax-m2.5:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['MiniMax'] },
      { id: 'nvidia/nemotron-3-super-120b-a12b:free', name: 'Nemotron 3 Super 120B', link: 'https://openrouter.ai/nvidia/nemotron-3-super-120b-a12b:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['NVIDIA'] },
      { id: 'openai/gpt-oss-120b:free', name: 'GPT OSS 120B Free', link: 'https://openrouter.ai/openai/gpt-oss-120b:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['OpenAI', 'OSS'] },
      { id: 'z-ai/glm-4.5-air:free', name: 'GLM 4.5 Air Free', link: 'https://openrouter.ai/z-ai/glm-4.5-air:free', limits: { requestsPerMin: 20, requestsPerDay: 50 }, tags: ['Zhipu'] }
    ]
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    category: 'free',
    url: 'https://aistudio.google.com',
    docsUrl: 'https://ai.google.dev/pricing',
    limitsOverview: 'Up to 250k tokens/min • Up to 500 req/day',
    requirements: 'Google Account (Data used for training outside UK/EEA/EU)',
    notes: [
      'Generous free limits for Gemini and Gemma models.',
      'Supports Multimodal inputs (Vision, Audio, Video, Text) and Code Execution.'
    ],
    tags: ['Google', 'Multimodal', 'High Rate Limit', 'Vision', 'Audio', 'Reasoning'],
    models: [
      { id: 'gemini-3-flash', name: 'Gemini 3 Flash', isVision: true, isAudio: true, isReasoning: true, limits: { tokensPerMin: '250,000', requestsPerDay: 20, requestsPerMin: 5 }, tags: ['Flagship', 'Vision', 'Audio'] },
      { id: 'gemini-3.1-flash-lite', name: 'Gemini 3.1 Flash-Lite', isVision: true, isAudio: true, limits: { tokensPerMin: '250,000', requestsPerDay: 500, requestsPerMin: 15 }, tags: ['High RPD', 'Fast'] },
      { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', isVision: true, isAudio: true, limits: { tokensPerMin: '250,000', requestsPerDay: 20, requestsPerMin: 5 }, tags: ['Vision', 'Audio'] },
      { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash-Lite', isVision: true, limits: { tokensPerMin: '250,000', requestsPerDay: 20, requestsPerMin: 10 }, tags: ['Lightweight'] },
      { id: 'gemini-3.1-flash-tts', name: 'Gemini 3.1 Flash TTS', isAudio: true, limits: { tokensPerMin: '10,000', requestsPerDay: 10, requestsPerMin: 3 }, tags: ['TTS', 'Speech'] },
      { id: 'gemma-3-27b', name: 'Gemma 3 27B Instruct', limits: { tokensPerMin: '15,000', requestsPerDay: '14,400', requestsPerMin: 30 }, tags: ['Open Weight', '14.4k RPD'] },
      { id: 'gemma-3-12b', name: 'Gemma 3 12B Instruct', limits: { tokensPerMin: '15,000', requestsPerDay: '14,400', requestsPerMin: 30 }, tags: ['Open Weight', '14.4k RPD'] },
      { id: 'gemma-3-4b', name: 'Gemma 3 4B Instruct', limits: { tokensPerMin: '15,000', requestsPerDay: '14,400', requestsPerMin: 30 }, tags: ['Open Weight', '14.4k RPD'] }
    ]
  },
  {
    id: 'groq',
    name: 'Groq',
    category: 'free',
    url: 'https://console.groq.com',
    docsUrl: 'https://console.groq.com/docs/rate-limits',
    limitsOverview: 'Ultra-fast LPU inference • Up to 14,400 req/day',
    requirements: 'Free registration',
    notes: [
      'Incredible token generation speeds (300-800+ tokens/sec).',
      'Provides Speech-to-Text (Whisper Large v3) and high-speed chat completion.'
    ],
    tags: ['Ultra Fast', 'LPU', 'STT', 'High Throughput', 'Audio', 'Code'],
    models: [
      { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B Versatile', limits: { requestsPerDay: '1,000', tokensPerMin: '12,000' }, tags: ['70B', 'Fast'] },
      { id: 'llama-3.1-8b-instant', name: 'Llama 3.1 8B Instant', limits: { requestsPerDay: '14,400', tokensPerMin: '6,000' }, tags: ['14.4k RPD', 'Instant'] },
      { id: 'llama-4-scout-instruct', name: 'Llama 4 Scout Instruct', limits: { requestsPerDay: '1,000', tokensPerMin: '30,000' }, tags: ['Meta Llama 4'] },
      { id: 'whisper-large-v3', name: 'Whisper Large v3', isAudio: true, limits: { audioSecondsPerMin: '7,200', requestsPerDay: '2,000' }, tags: ['STT', 'Speech-to-Text'] },
      { id: 'whisper-large-v3-turbo', name: 'Whisper Large v3 Turbo', isAudio: true, limits: { audioSecondsPerMin: '7,200', requestsPerDay: '2,000' }, tags: ['STT', 'Fast Speech'] },
      { id: 'allam-2-7b', name: 'Allam 2 7B', limits: { requestsPerDay: '7,000', tokensPerMin: '6,000' }, tags: ['Arabic'] },
      { id: 'groq/compound', name: 'Groq Compound', limits: { requestsPerDay: 250, tokensPerMin: '70,000' }, tags: ['Compound'] },
      { id: 'openai/gpt-oss-120b', name: 'GPT OSS 120B', limits: { requestsPerDay: '1,000', tokensPerMin: '8,000' }, tags: ['120B'] },
      { id: 'qwen/qwen3-32b', name: 'Qwen 3 32B', isCode: true, limits: { requestsPerDay: '1,000', tokensPerMin: '6,000' }, tags: ['Coding', 'Qwen'] }
    ]
  },
  {
    id: 'cerebras',
    name: 'Cerebras',
    category: 'free',
    url: 'https://cloud.cerebras.ai',
    docsUrl: 'https://cloud.cerebras.ai',
    limitsOverview: '30 req/min • 14,400 req/day • 1,000,000 tokens/day',
    requirements: 'Free registration',
    notes: [
      'Powered by Wafer-Scale Engine CS-3 for instant response times.',
      'Generates up to 2000+ tokens/sec on open source models.'
    ],
    tags: ['Wafer Scale', 'Blazing Fast', '14.4k RPD', '1M TPD'],
    models: [
      { id: 'gpt-oss-120b', name: 'GPT OSS 120B', limits: { requestsPerMin: 30, tokensPerMin: '60,000', requestsPerDay: '14,400', tokensPerDay: '1,000,000' }, tags: ['120B', 'Fast'] },
      { id: 'llama-3.1-8b', name: 'Llama 3.1 8B', limits: { requestsPerMin: 30, tokensPerMin: '60,000', requestsPerDay: '14,400', tokensPerDay: '1,000,000' }, tags: ['8B', '2000+ tps'] }
    ]
  },
  {
    id: 'github-models',
    name: 'GitHub Models',
    category: 'free',
    url: 'https://github.com/marketplace/models',
    docsUrl: 'https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits',
    limitsOverview: 'Free prototyping tier for GitHub accounts',
    requirements: 'GitHub account',
    notes: [
      'Provides access to OpenAI GPT-4o, GPT-4.1, DeepSeek-R1, Grok 3, Llama 4, and Phi-4.',
      'Limits depend on GitHub Copilot tier.'
    ],
    tags: ['GitHub', 'Prototyping', 'DeepSeek R1', 'GPT-4o', 'Phi-4', 'Reasoning'],
    models: [
      { id: 'DeepSeek-R1', name: 'DeepSeek R1', isReasoning: true, tags: ['Reasoning', 'DeepSeek'] },
      { id: 'Grok 3', name: 'Grok 3', tags: ['xAI'] },
      { id: 'Grok 3 Mini', name: 'Grok 3 Mini', tags: ['xAI', 'Mini'] },
      { id: 'Llama 4 Maverick 17B', name: 'Llama 4 Maverick 17B', tags: ['Meta Llama 4'] },
      { id: 'Llama-3.3-70B-Instruct', name: 'Llama 3.3 70B Instruct', tags: ['Meta'] },
      { id: 'OpenAI GPT-4o', name: 'OpenAI GPT-4o', isVision: true, tags: ['OpenAI', 'Vision'] },
      { id: 'OpenAI GPT-4o mini', name: 'OpenAI GPT-4o mini', isVision: true, tags: ['OpenAI', 'Mini'] },
      { id: 'OpenAI o3-mini', name: 'OpenAI o3-mini', isReasoning: true, tags: ['Reasoning'] },
      { id: 'Phi-4', name: 'Phi-4', isCode: true, tags: ['Microsoft', 'Code'] },
      { id: 'Codestral 25.01', name: 'Codestral 25.01', isCode: true, tags: ['Mistral', 'Code'] }
    ]
  },
  {
    id: 'cloudflare-workers-ai',
    name: 'Cloudflare Workers AI',
    category: 'free',
    url: 'https://developers.cloudflare.com/workers-ai',
    docsUrl: 'https://developers.cloudflare.com/workers-ai/platform/pricing/#free-allocation',
    limitsOverview: '10,000 neurons/day (~Free daily allocation)',
    requirements: 'Cloudflare account',
    notes: [
      'Serverless AI inference hosted on global edge network.',
      'Supports text generation, vision, audio, and embeddings.'
    ],
    tags: ['Edge Network', 'Cloudflare', '10k Neurons/day', 'Vision', 'Embeddings'],
    models: [
      { id: '@cf/meta/llama-3.3-70b-instruct-fp8-fast', name: 'Llama 3.3 70B Instruct', tags: ['Meta', '70B'] },
      { id: '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', name: 'DeepSeek R1 Distill Qwen 32B', isReasoning: true, tags: ['Reasoning'] },
      { id: '@cf/qwen/qwen2.5-coder-32b-instruct', name: 'Qwen 2.5 Coder 32B', isCode: true, tags: ['Coding'] },
      { id: '@cf/meta/llama-3.2-11b-vision-instruct', name: 'Llama 3.2 11B Vision', isVision: true, tags: ['Vision'] },
      { id: '@cf/google/gemma-3-12b-it', name: 'Gemma 3 12B Instruct', tags: ['Google'] }
    ]
  },
  {
    id: 'nvidia-nim',
    name: 'NVIDIA NIM',
    category: 'free',
    url: 'https://build.nvidia.com/explore/discover',
    docsUrl: 'https://build.nvidia.com/models',
    limitsOverview: '40 requests/minute across hosted open models',
    requirements: 'Phone number verification required',
    notes: [
      'Hosted microservices optimized for enterprise GPU acceleration.',
      'Context windows may be constrained on free tier.'
    ],
    tags: ['NVIDIA', '40 RPM', 'Enterprise GPU', 'Open Weights'],
    models: [
      { id: 'nvidia/llama-3.1-nemotron-70b-instruct', name: 'Llama 3.1 Nemotron 70B', limits: { requestsPerMin: 40 }, tags: ['NVIDIA', '70B'] },
      { id: 'nvidia/llama-3.3-nemotron-super-49b-v1', name: 'Llama 3.3 Nemotron Super 49B', limits: { requestsPerMin: 40 }, tags: ['NVIDIA', 'Super'] },
      { id: 'meta/llama-3.3-70b-instruct', name: 'Llama 3.3 70B Instruct', limits: { requestsPerMin: 40 }, tags: ['Meta'] }
    ]
  },
  {
    id: 'mistral-la-plateforme',
    name: 'Mistral (La Plateforme)',
    category: 'free',
    url: 'https://console.mistral.ai',
    docsUrl: 'https://docs.mistral.ai/getting-started/models/models_overview',
    limitsOverview: '1 req/sec • 500k tokens/min • 1 Billion tokens/month',
    requirements: 'Phone number verification & opting into data training',
    notes: [
      'Free tier (Experiment plan) provides full access to open & proprietary Mistral models.',
      'Huge 1 Billion monthly token allowance.'
    ],
    tags: ['Mistral AI', '1B Tokens/Mo', 'Proprietary', 'European AI'],
    models: [
      { id: 'mistral-large-latest', name: 'Mistral Large', limits: { requestsPerMin: 60, tokensPerMin: '500,000', tokensPerMonth: '1,000,000,000' }, tags: ['Flagship'] },
      { id: 'mistral-small-latest', name: 'Mistral Small 3.1', limits: { requestsPerMin: 60, tokensPerMin: '500,000', tokensPerMonth: '1,000,000,000' }, tags: ['Fast'] },
      { id: 'codestral-latest', name: 'Codestral', isCode: true, limits: { requestsPerMin: 60, tokensPerMin: '500,000', tokensPerMonth: '1,000,000,000' }, tags: ['Code'] },
      { id: 'pixtral-large-latest', name: 'Pixtral Large', isVision: true, limits: { requestsPerMin: 60, tokensPerMin: '500,000', tokensPerMonth: '1,000,000,000' }, tags: ['Vision'] }
    ]
  },
  {
    id: 'cohere',
    name: 'Cohere',
    category: 'free',
    url: 'https://cohere.com',
    docsUrl: 'https://docs.cohere.com/docs/rate-limits',
    limitsOverview: '20 req/min • 1,000 req/month',
    requirements: 'Free registration',
    notes: [
      'Excellent multilingual, reasoning, and vision capabilities with Command A and Aya models.',
      'Models share a common monthly quota.'
    ],
    tags: ['Cohere', 'Multilingual', 'Command A', 'Vision'],
    models: [
      { id: 'command-a-03-2025', name: 'Command A (2025)', limits: { requestsPerMin: 20, requestsPerMonth: '1,000' }, tags: ['Flagship'] },
      { id: 'command-r-plus-08-2024', name: 'Command R+ (08-2024)', limits: { requestsPerMin: 20, requestsPerMonth: '1,000' }, tags: ['RAG', 'Tool Use'] },
      { id: 'c4ai-aya-vision-32b', name: 'C4AI Aya Vision 32B', isVision: true, limits: { requestsPerMin: 20, requestsPerMonth: '1,000' }, tags: ['Vision', 'Multilingual'] },
      { id: 'command-a-reasoning-08-2025', name: 'Command A Reasoning', isReasoning: true, limits: { requestsPerMin: 20, requestsPerMonth: '1,000' }, tags: ['Reasoning'] }
    ]
  },
  {
    id: 'huggingface',
    name: 'HuggingFace Inference Providers',
    category: 'free',
    url: 'https://huggingface.co/docs/inference-providers/en/index',
    docsUrl: 'https://huggingface.co/docs/inference-providers/en/pricing',
    limitsOverview: '$0.10/month free serverless credits',
    requirements: 'HuggingFace account',
    notes: [
      'Access thousands of open weights models smaller than 10GB instantly.',
      'Provides unified OpenAI-compatible serverless API routes.'
    ],
    tags: ['HuggingFace', 'Open Source', 'Serverless', 'Unified API'],
    models: [
      { id: 'meta-llama/Llama-3.1-8B-Instruct', name: 'Llama 3.1 8B Instruct', tags: ['Meta'] },
      { id: 'mistralai/Mistral-7B-Instruct-v0.2', name: 'Mistral 7B Instruct v0.2', tags: ['Mistral'] },
      { id: 'Qwen/Qwen2.5-Coder-32B-Instruct', name: 'Qwen 2.5 Coder 32B', isCode: true, tags: ['Code'] }
    ]
  },
  {
    id: 'opencode-zen',
    name: 'OpenCode Zen',
    category: 'free',
    url: 'https://opencode.ai/docs/zen/',
    limitsOverview: 'Curated Gateway with Free models',
    requirements: 'Free registration',
    notes: [
      'Curated AI gateway providing free models for developer workflow integrations.'
    ],
    tags: ['Gateway', 'Developer Tools'],
    models: [
      { id: 'Big Pickle Stealth', name: 'Big Pickle Stealth', tags: ['Curated'] },
      { id: 'MiniMax M2.5 Free', name: 'MiniMax M2.5 Free', tags: ['MiniMax'] },
      { id: 'Arcee Large Preview Free', name: 'Arcee Large Preview Free', tags: ['Arcee'] }
    ]
  },
  // Trial Providers
  {
    id: 'hyperbolic',
    name: 'Hyperbolic',
    category: 'trial',
    url: 'https://app.hyperbolic.ai/',
    creditsOverview: '$1.00 Trial Credits on Signup',
    limitsOverview: '60 requests/minute',
    requirements: 'Free signup',
    notes: [
      'Provides high-efficiency GPU hosting for DeepSeek, Qwen Coder, and Llama 3.3 models.'
    ],
    tags: ['Trial Credits', '$1 Credit', 'DeepSeek', '60 RPM'],
    models: [
      { id: 'deepseek-ai/DeepSeek-V3-0324', name: 'DeepSeek V3 0324', limits: { requestsPerMin: 60 }, tags: ['DeepSeek'] },
      { id: 'meta-llama/Llama-3.3-70B-Instruct', name: 'Llama 3.3 70B Instruct', limits: { requestsPerMin: 60 }, tags: ['Meta'] },
      { id: 'qwen/qwen3-coder-480b-a35b-instruct', name: 'Qwen 3 Coder 480B', isCode: true, limits: { requestsPerMin: 60 }, tags: ['Code', '480B'] }
    ]
  },
  {
    id: 'sambanova-cloud',
    name: 'SambaNova Cloud',
    category: 'trial',
    url: 'https://cloud.sambanova.ai/',
    creditsOverview: '$5.00 Trial Credits for 3 months',
    requirements: 'Free signup',
    notes: [
      'Reconfigurable Dataflow Unit (RDU) architecture delivering extreme inference speeds.'
    ],
    tags: ['Trial Credits', '$5 Credit', 'RDU Engine', 'DeepSeek V3'],
    models: [
      { id: 'Meta-Llama-3.3-70B-Instruct', name: 'Llama 3.3 70B Instruct', tags: ['Meta'] },
      { id: 'deepseek-ai/DeepSeek-V3.1', name: 'DeepSeek V3.1', tags: ['DeepSeek'] },
      { id: 'Llama-4-Maverick-17B-128E-Instruct', name: 'Llama 4 Maverick 17B', tags: ['Meta Llama 4'] }
    ]
  },
  {
    id: 'scaleway',
    name: 'Scaleway Generative APIs',
    category: 'trial',
    url: 'https://console.scaleway.com/generative-api/models',
    creditsOverview: '1,000,000 Free Tokens upon activation',
    requirements: 'Scaleway account',
    notes: [
      'European cloud provider with sovereign AI infrastructure.'
    ],
    tags: ['Trial Credits', '1M Tokens', 'Sovereign AI', 'EU Cloud'],
    models: [
      { id: 'gemma-3-27b-it', name: 'Gemma 3 27B Instruct', tags: ['Google'] },
      { id: 'llama-3.3-70b-instruct', name: 'Llama 3.3 70B Instruct', tags: ['Meta'] },
      { id: 'qwen3-coder-30b-a3b-instruct', name: 'Qwen 3 Coder 30B', isCode: true, tags: ['Code'] }
    ]
  },
  {
    id: 'fireworks',
    name: 'Fireworks AI',
    category: 'trial',
    url: 'https://fireworks.ai/',
    creditsOverview: '$1.00 Trial Credits on Signup',
    requirements: 'Free signup',
    notes: [
      'Ultra-fast structured outputs, JSON mode, and function calling support.'
    ],
    tags: ['Trial Credits', '$1 Credit', 'Fast Function Calling'],
    models: [
      { id: 'accounts/fireworks/models/llama-v3p3-70b-instruct', name: 'Llama 3.3 70B Instruct', tags: ['Meta'] },
      { id: 'accounts/fireworks/models/deepseek-v3', name: 'DeepSeek V3', tags: ['DeepSeek'] }
    ]
  },
  {
    id: 'baseten',
    name: 'Baseten',
    category: 'trial',
    url: 'https://app.baseten.co/',
    creditsOverview: '$30.00 Trial Credits',
    requirements: 'Free signup',
    notes: [
      'High performance model serving with custom deployment options.'
    ],
    tags: ['Trial Credits', '$30 Credit', 'Custom Deployments'],
    models: [
      { id: 'baseten-open-library', name: 'Open Model Library (Pay per compute)', tags: ['Baseten'] }
    ]
  },
  {
    id: 'nebius',
    name: 'Nebius Token Factory',
    category: 'trial',
    url: 'https://tokenfactory.nebius.com/',
    creditsOverview: '$1.00 Trial Credits',
    requirements: 'Free signup',
    notes: [
      'High density GPU cloud hosting popular open models.'
    ],
    tags: ['Trial Credits', '$1 Credit', 'GPU Cloud'],
    models: [
      { id: 'nebius-open-models', name: 'Various Hosted Open Models', tags: ['Nebius'] }
    ]
  },
  {
    id: 'ai21',
    name: 'AI21 Studio',
    category: 'trial',
    url: 'https://studio.ai21.com/',
    creditsOverview: '$10.00 Credits for 3 months',
    requirements: 'Free signup',
    notes: [
      'Creators of the Jamba hybrid Mamba-Transformer model architecture.'
    ],
    tags: ['Trial Credits', '$10 Credit', 'Jamba Models', 'Mamba-Transformer'],
    models: [
      { id: 'jamba-1.5-large', name: 'Jamba 1.5 Large', tags: ['AI21', 'Jamba'] },
      { id: 'jamba-1.5-mini', name: 'Jamba 1.5 Mini', tags: ['AI21', 'Jamba'] }
    ]
  },
  {
    id: 'upstage',
    name: 'Upstage AI',
    category: 'trial',
    url: 'https://console.upstage.ai/',
    creditsOverview: '$10.00 Credits for 3 months',
    requirements: 'Free signup',
    notes: [
      'Solar Pro & Solar Mini models tailored for documents and logical reasoning.'
    ],
    tags: ['Trial Credits', '$10 Credit', 'Solar Models'],
    models: [
      { id: 'solar-pro', name: 'Solar Pro', tags: ['Upstage'] },
      { id: 'solar-mini', name: 'Solar Mini', tags: ['Upstage'] }
    ]
  },
  {
    id: 'nlp-cloud',
    name: 'NLP Cloud',
    category: 'trial',
    url: 'https://nlpcloud.com/home',
    creditsOverview: '$15.00 Free Trial Credits',
    requirements: 'Phone number verification required',
    notes: [
      'Production-grade NLP and LLM endpoints.'
    ],
    tags: ['Trial Credits', '$15 Credit', 'Phone Verification Required'],
    models: [
      { id: 'nlp-cloud-models', name: 'Various Hosted Open Models', tags: ['NLP Cloud'] }
    ]
  },
  {
    id: 'alibaba-cloud',
    name: 'Alibaba Cloud Model Studio',
    category: 'trial',
    url: 'https://bailian.console.alibabacloud.com/',
    creditsOverview: '1 Million Tokens per Model',
    requirements: 'Alibaba Cloud account',
    notes: [
      'Official home for proprietary Qwen models and AI tools.'
    ],
    tags: ['Trial Credits', '1M Tokens/Model', 'Qwen Official'],
    models: [
      { id: 'qwen-max', name: 'Qwen Max', tags: ['Qwen', 'Flagship'] },
      { id: 'qwen-plus', name: 'Qwen Plus', tags: ['Qwen'] },
      { id: 'qwen-turbo', name: 'Qwen Turbo', tags: ['Qwen', 'Fast'] }
    ]
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'trial',
    url: 'https://modal.com',
    creditsOverview: '$5/month on sign up ($30/month with card)',
    requirements: 'Payment method required for $30 tier',
    notes: [
      'Serverless Python compute infrastructure to run open models.'
    ],
    tags: ['Trial Credits', '$5-$30/month', 'Serverless Python'],
    models: [
      { id: 'modal-compute', name: 'Custom Compute Containers', tags: ['Modal'] }
    ]
  }
];
