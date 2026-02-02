
import React from 'react';
import { Crown, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 text-white shadow-xl">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
            <Crown className="w-8 h-8 text-amber-300" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
              Iron Lady
              <Sparkles className="w-4 h-4 text-amber-300" />
            </h1>
            <p className="text-purple-200 text-xs font-medium uppercase tracking-widest">Career Navigator</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-black/10 px-3 py-1.5 rounded-full border border-white/5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-white/90">AI Support Online</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
