
import React from 'react';
import { User, Bot } from 'lucide-react';
import { Message } from '../types';
import ProgramCard from './ProgramCard';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  // Highlight prices and currency
  const formatContent = (content: string) => {
    const parts = content.split(/(₹[0-9,kL+.-]+)/g);
    return parts.map((part, i) => {
      if (part.startsWith('₹')) {
        return (
          <span key={i} className={`font-black ${isUser ? 'text-amber-300 underline decoration-amber-300/30' : 'text-amber-600'}`}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'} animate-fadeIn w-full group/bubble`}>
      <div className={`flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover/bubble:scale-110 ${
        isUser 
          ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white border border-purple-400/30' 
          : 'bg-white text-purple-700 border border-purple-100 shadow-purple-100/50'
      }`}>
        {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </div>
      
      <div className={`flex flex-col gap-3 max-w-[85%] sm:max-w-[70%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-5 py-4 shadow-xl shadow-black/[0.02] transition-all duration-300 ${
          isUser 
            ? 'bg-purple-600 text-white rounded-[1.5rem] rounded-tr-none hover:bg-purple-700 shadow-purple-500/10' 
            : 'bg-white text-gray-800 rounded-[1.5rem] rounded-tl-none border border-purple-50/50 hover:border-purple-200'
        }`}>
          <p className="whitespace-pre-wrap text-[15px] leading-relaxed font-medium">
            {formatContent(message.content)}
          </p>
        </div>
        
        {message.isProgramCard && message.programData && (
          <div className="w-full max-w-sm mt-1 transform transition-all duration-500 hover:translate-y-[-4px]">
            <ProgramCard program={message.programData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
