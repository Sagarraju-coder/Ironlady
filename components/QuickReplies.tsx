
import React from 'react';
import { ChevronRight, Target, Sparkles, BookOpen, UserCheck, Building } from 'lucide-react';

interface QuickRepliesProps {
  onSelect: (text: string) => void;
}

const QUICK_REPLY_OPTIONS = [
  { text: "What programs do you offer?", icon: <BookOpen className="w-4 h-4" /> },
  { text: "I want to get promoted", icon: <Target className="w-4 h-4" /> },
  { text: "Help me choose a program", icon: <Sparkles className="w-4 h-4" /> },
  { text: "What is 1 Crore+ Club?", icon: <CrownIcon /> },
  { text: "Share success stories", icon: <UserCheck className="w-4 h-4" /> },
  { text: "I'm from HR/Corporate", icon: <Building className="w-4 h-4" /> }
];

function CrownIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  );
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ onSelect }) => {
  return (
    <div className="px-6 md:px-12 py-6 bg-transparent">
      <p className="text-[10px] text-purple-400 mb-4 font-black uppercase tracking-[0.2em] px-1 text-center md:text-left">Suggested for you</p>
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar -mx-6 px-6 md:-mx-0 md:px-0">
        {QUICK_REPLY_OPTIONS.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option.text)}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 text-xs font-bold bg-white text-purple-700 rounded-2xl border border-purple-100/50 hover:border-purple-400 hover:bg-purple-50 hover:text-purple-900 transition-all duration-300 shadow-sm shadow-purple-500/5 whitespace-nowrap group hover:-translate-y-1"
          >
            <span className="text-purple-500 group-hover:scale-125 transition-transform duration-300">{option.icon}</span>
            {option.text}
            <ChevronRight className="w-3.5 h-3.5 text-purple-200 group-hover:translate-x-0.5 group-hover:text-purple-400 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;
