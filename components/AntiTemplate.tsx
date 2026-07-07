import React, { useState } from 'react';
import { ContentStrings } from '../types';
import { Check, X, AlertTriangle, Cpu, Terminal, Zap } from 'lucide-react';

interface AntiTemplateProps {
  content: ContentStrings['antiTemplate'];
}

export const AntiTemplate: React.FC<AntiTemplateProps> = ({ content }) => {
  const [activeCard, setActiveCard] = useState<'none' | 'standard' | 'custom'>('none');

  return (
    <section id="approach" className="py-32 relative mx-4 md:mx-10 mb-32">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-surfaceHighlight rounded-[3rem] overflow-hidden">
        {/* The Clash Line - Diagonal Split */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-primary/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,transparent_30%,#000_100%)] pointer-events-none"></div>
        
        {/* Animated Grid on Right Side */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[linear-gradient(rgba(0,212,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_left,black,transparent)]"></div>
        
        {/* Noise on Left Side */}
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] [mask-image:linear-gradient(to_right,black,transparent)] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/20 bg-black/50 backdrop-blur-sm mb-6">
             <Terminal size={14} className="text-textDim" />
             <span className="text-xs font-mono text-textDim uppercase tracking-widest">System Analysis</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-7xl text-white mb-6 uppercase tracking-tight">
            {content.title}
          </h2>
          <p className="text-textDim text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* LEFT: Template (The Problem) */}
          <div 
            className="group relative p-1 rounded-3xl bg-gradient-to-b from-red-900/20 to-transparent transition-all duration-700"
            onMouseEnter={() => setActiveCard('standard')}
            onMouseLeave={() => setActiveCard('none')}
          >
            <div className="absolute -top-3 -left-3 bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-1 rounded text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 z-20">
              <AlertTriangle size={12} /> Deprecated
            </div>
            
            <div className={`h-full bg-black/40 backdrop-blur-sm rounded-[22px] border border-red-500/10 p-8 md:p-12 flex flex-col relative overflow-hidden transition-all duration-700 ${activeCard === 'standard' ? 'grayscale brightness-50 opacity-80 blur-[2px] scale-[0.98]' : ''}`}>
               {/* Glitch Effect Background */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-100 mix-blend-color-dodge bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover bg-center pointer-events-none"></div>
               
               <div className="relative z-10">
                  <h3 className="font-mono font-bold text-2xl text-white mb-2 transition-colors duration-300">
                    {content.cards.template.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-red-900/50 mb-8"></div>
                  
                  <ul className="space-y-6 flex-grow">
                    {content.cards.template.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-textDim font-mono text-sm transition-colors duration-300">
                        <span className="shrink-0 mt-0.5 text-red-900 font-bold">[ERR]</span>
                        <span className="decoration-red-900/50 transition-all">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-red-900/20">
                    <div className="text-red-800 text-xs font-mono uppercase transition-colors duration-300">Status: Bottleneck Detected</div>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT: Custom (The Solution) */}
          <div 
            className="group relative"
            onMouseEnter={() => setActiveCard('custom')}
            onMouseLeave={() => setActiveCard('none')}
          >
            {/* Glowing Border Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-600 to-primary rounded-3xl blur transition duration-1000 animate-tilt ${activeCard === 'custom' ? 'opacity-100 duration-200' : 'opacity-30'}`}></div>
            
            <div className={`relative h-full bg-surfaceHighlight rounded-3xl border transition-all duration-500 p-8 md:p-12 flex flex-col overflow-hidden ${activeCard === 'custom' ? 'border-primary scale-[1.03] shadow-[0_0_50px_rgba(0,212,255,0.2)]' : 'border-white/10'}`}>
               
               {/* Shine Effect */}
               <div className={`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 ${activeCard === 'custom' ? 'animate-shine' : ''}`} />
               
               <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.6)]">
                 <Zap size={12} fill="currentColor" /> Optimized
               </div>

               <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20 shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-transform duration-500 ${activeCard === 'custom' ? 'scale-110' : ''}`}>
                    <Cpu size={24} />
                  </div>

                  <h3 className="font-display font-bold text-3xl text-white mb-2">
                    {content.cards.custom.title}
                  </h3>
                  <div className="h-1 w-20 bg-primary mb-8 shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
                  
                  <ul className="space-y-5 flex-grow">
                    {content.cards.custom.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-white font-medium text-lg">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black shrink-0 shadow-lg shadow-primary/20">
                          <Check size={14} strokeWidth={4} />
                        </div>
                        <span className={`transition-transform duration-300 ${activeCard === 'custom' ? 'translate-x-2 text-white' : 'text-zinc-200'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className={`text-xs font-mono uppercase tracking-widest transition-colors duration-500 ${activeCard === 'custom' ? 'text-primary drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]' : 'text-primary/70'}`}>
                      Performance: {activeCard === 'custom' ? '100%' : '90%'}
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`w-1 h-3 rounded-full transition-all duration-500 ${activeCard === 'custom' || i <= 3 ? 'bg-primary shadow-[0_0_8px_rgba(0,212,255,0.8)]' : 'bg-primary/30'} ${activeCard === 'custom' && i === 4 ? 'animate-pulse' : ''}`}></div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};