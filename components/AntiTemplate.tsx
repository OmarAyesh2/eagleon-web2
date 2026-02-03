import React from 'react';
import { ContentStrings } from '../types';
import { Check, X, AlertTriangle, Cpu, Terminal, Zap } from 'lucide-react';

interface AntiTemplateProps {
  content: ContentStrings['antiTemplate'];
}

export const AntiTemplate: React.FC<AntiTemplateProps> = ({ content }) => {
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
          <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-red-900/20 to-transparent transition-all hover:scale-[0.98] duration-500">
            <div className="absolute -top-3 -left-3 bg-red-500/10 border border-red-500/30 text-red-500 px-4 py-1 rounded text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
              <AlertTriangle size={12} /> Deprecated
            </div>
            
            <div className="h-full bg-black/40 backdrop-blur-sm rounded-[22px] border border-red-500/10 p-8 md:p-12 flex flex-col relative overflow-hidden">
               {/* Glitch Effect Background */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-100 mix-blend-color-dodge bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover bg-center pointer-events-none"></div>
               
               <div className="relative z-10">
                  <h3 className="font-mono font-bold text-2xl text-gray-400 mb-2 group-hover:text-red-400 transition-colors">
                    {content.cards.template.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-red-900/50 mb-8"></div>
                  
                  <ul className="space-y-6 flex-grow">
                    {content.cards.template.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-gray-500 font-mono text-sm group-hover:text-gray-400 transition-colors">
                        <span className="shrink-0 mt-0.5 text-red-900 group-hover:text-red-600 font-bold">[ERR]</span>
                        <span className="decoration-red-900/50 group-hover:line-through transition-all">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-red-900/20">
                    <div className="text-red-800 text-xs font-mono uppercase">Status: Bottleneck Detected</div>
                  </div>
               </div>
            </div>
          </div>

          {/* RIGHT: Custom (The Solution) */}
          <div className="group relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-600 to-primary rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative h-full bg-surfaceHighlight rounded-3xl border border-white/10 p-8 md:p-12 flex flex-col overflow-hidden">
               
               {/* Shine Effect */}
               <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
               
               <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.6)]">
                 <Zap size={12} fill="currentColor" /> Optimized
               </div>

               <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20 shadow-[0_0_30px_rgba(0,212,255,0.15)] group-hover:scale-110 transition-transform duration-500">
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
                        <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                    <div className="text-primary text-xs font-mono uppercase tracking-widest">Performance: 100%</div>
                    <div className="flex gap-1">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`w-1 h-3 rounded-full ${i===4 ? 'bg-primary animate-pulse' : 'bg-primary/50'}`}></div>
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