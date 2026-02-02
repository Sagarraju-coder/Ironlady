
import React from 'react';
import { Calendar, MapPin, Tag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white border border-purple-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-500/10 group hover:border-purple-300 transition-all duration-300">
      <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 p-6 relative overflow-hidden">
        {/* Decorative background icon */}
        <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-white/5 rotate-12" />
        
        <div className="relative z-10">
          <div className="bg-amber-400 text-purple-900 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full w-fit mb-3">
            Recommended for you
          </div>
          <h3 className="text-white font-extrabold text-xl leading-tight">{program.name}</h3>
          <p className="text-purple-200 text-sm font-semibold mt-1 opacity-90">{program.type}</p>
        </div>
      </div>
      
      <div className="p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4 text-[11px] font-bold text-gray-500">
          <div className="flex items-center gap-2 bg-purple-50/50 p-2 rounded-xl">
            <Calendar className="w-4 h-4 text-purple-600" />
            {program.duration}
          </div>
          <div className="flex items-center gap-2 bg-purple-50/50 p-2 rounded-xl">
            <MapPin className="w-4 h-4 text-purple-600" />
            {program.format}
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-100 rounded-2xl">
          <Tag className="w-5 h-5 text-amber-600" />
          <div>
            <p className="text-[10px] text-amber-700 font-bold uppercase tracking-wider">Investment</p>
            <p className="text-sm font-extrabold text-purple-900">{program.price}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <div className="h-px bg-gray-200 flex-1"></div>
            Outcomes
            <div className="h-px bg-gray-200 flex-1"></div>
          </p>
          <ul className="space-y-2.5">
            {program.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[13px] text-gray-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full mt-4 py-4 px-6 bg-purple-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 group-hover:scale-[1.03] active:scale-95 text-sm uppercase tracking-widest">
          {program.cta}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
