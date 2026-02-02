
export interface Message {
  role: 'user' | 'assistant';
  content: string;
  isProgramCard?: boolean;
  programData?: Program;
}

export interface Program {
  id: string;
  name: string;
  type: string;
  duration: string;
  format: string;
  price: string;
  bestFor: string;
  outcomes: string[];
  cta: string;
}

export interface ChatHistoryItem {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export interface GeminiResponse {
  text: string;
  recommendedProgramId?: string;
}
