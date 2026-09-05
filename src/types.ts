export interface ModelLimit {
  requestsPerMin?: number | string;
  requestsPerDay?: number | string;
  requestsPerHour?: number | string;
  requestsPerMonth?: number | string;
  tokensPerMin?: number | string;
  tokensPerDay?: number | string;
  tokensPerHour?: number | string;
  tokensPerMonth?: number | string;
  audioSecondsPerMin?: number | string;
  notes?: string;
}

export interface ModelInfo {
  id: string;
  name: string;
  description?: string;
  contextWindow?: string;
  limits?: ModelLimit;
  link?: string;
  tags?: string[];
  isVision?: boolean;
  isAudio?: boolean;
  isReasoning?: boolean;
  isEmbedding?: boolean;
  isCode?: boolean;
}

export interface Provider {
  id: string;
  name: string;
  category: 'free' | 'trial';
  logoText?: string;
  url: string;
  docsUrl?: string;
  limitsOverview?: string;
  creditsOverview?: string;
  requirements?: string;
  notes?: string[];
  models: ModelInfo[];
  tags: string[];
}

export type CategoryFilter = 'all' | 'free' | 'trial';
export type CapabilityFilter = 'all' | 'vision' | 'audio' | 'reasoning' | 'code' | 'embedding';
