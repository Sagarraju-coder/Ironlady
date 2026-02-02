
import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 animate-fadeIn mb-4">
      <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-700 border border-purple-200 flex items-center justify-center shadow-sm">
        <Bot className="w-5 h-5" />
      </div>
      <div className="bg-white text-gray-700 rounded-2xl rounded-tl-sm border border-purple-100 px-5 py-4 shadow-sm flex items-center gap-3">
        <span className="text-xs font-bold text-purple-500/80 uppercase tracking-widest italic">AI is crafting your roadmap</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
