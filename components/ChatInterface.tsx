
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Trash2, ArrowDownCircle, Sparkles } from 'lucide-react';
import MessageBubble from './MessageBubble';
import QuickReplies from './QuickReplies';
import TypingIndicator from './TypingIndicator';
import { Message, ChatHistoryItem } from '../types';
import { getGeminiResponse } from '../services/geminiService';
import { PROGRAMS } from '../constants';

const STORAGE_KEY = 'iron-lady-chat-history';

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content: "Hello! ✨ Welcome to Iron Lady - where 78,000+ women have transformed their careers!\n\nI'm your Career Navigator, here to help you find the perfect leadership program for your journey.\n\nTell me, what brings you here today? Are you looking to get promoted, break the glass ceiling, or perhaps target a board position?"
};

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        } else {
          setMessages([WELCOME_MESSAGE]);
        }
      } catch (e) {
        setMessages([WELCOME_MESSAGE]);
      }
    } else {
      setMessages([WELCOME_MESSAGE]);
    }
    setIsHydrated(true);
  }, []);

  // Save history to localStorage whenever messages change
  useEffect(() => {
    if (isHydrated && messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages, isHydrated]);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setShowScrollBottom(scrollHeight - scrollTop - clientHeight > 300);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const history: ChatHistoryItem[] = messages.slice(1).map(msg => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const result = await getGeminiResponse(text, history);

    const assistantMessage: Message = { 
      role: "assistant", 
      content: result.text 
    };

    if (result.recommendedProgramId) {
      const program = PROGRAMS.find(p => p.id === result.recommendedProgramId);
      if (program) {
        assistantMessage.isProgramCard = true;
        assistantMessage.programData = program;
      }
    }

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const resetChat = () => {
    if (confirm("Reset conversation? This will clear your career roadmap history.")) {
      setMessages([WELCOME_MESSAGE]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (!isHydrated) return null;

  return (
    <div className="flex flex-col h-full w-full bg-white relative overflow-hidden">
      {/* Scroll to bottom floating button */}
      {showScrollBottom && (
        <button 
          onClick={() => scrollToBottom()}
          className="absolute bottom-36 right-8 z-20 bg-purple-600 text-white p-3 rounded-full shadow-2xl hover:bg-purple-700 transition-all hover:scale-110 animate-bounce"
        >
          <ArrowDownCircle className="w-6 h-6" />
        </button>
      )}

      {/* Messages Area */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-6 md:px-12 py-10 space-y-4 scroll-smooth bg-gradient-to-b from-purple-50/30 to-white"
      >
        <div className="text-center mb-12">
          <span className="bg-purple-100/50 text-purple-700 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-purple-200 backdrop-blur-sm">
            Secure Career Advisory Session
          </span>
        </div>
        
        <div className="max-w-5xl mx-auto w-full space-y-6">
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Footer Area */}
      <div className="w-full bg-white border-t border-purple-100/50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-10">
        <div className="max-w-5xl mx-auto">
          {!isLoading && messages.length <= 6 && (
            <QuickReplies onSelect={sendMessage} />
          )}

          <div className="p-4 md:p-8">
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              <button 
                type="button"
                onClick={resetChat}
                className="p-3.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all border border-transparent hover:border-red-100"
                title="Reset Chat"
              >
                <Trash2 className="w-6 h-6" />
              </button>
              
              <div className="flex-1 flex items-center gap-2 bg-gray-50/80 border-2 border-purple-100/30 focus-within:border-purple-400 focus-within:bg-white focus-within:shadow-xl focus-within:shadow-purple-500/10 rounded-[2rem] p-2 pr-4 transition-all duration-300">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Share your goals, challenges, or current role..."
                  className="flex-1 bg-transparent px-5 py-3 outline-none text-gray-800 font-medium placeholder-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`p-3.5 rounded-full transition-all duration-500 ${
                    input.trim() && !isLoading
                      ? 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-200 hover:scale-105 active:scale-95'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5 fill-current" />
                </button>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-gray-400 font-semibold tracking-wide uppercase opacity-70">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Personalized Leadership Roadmap Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
