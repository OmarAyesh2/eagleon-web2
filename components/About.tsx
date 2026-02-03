import React from 'react';
import { ContentStrings } from '../types';
import { Target, Users, Zap, Shield, Eye } from 'lucide-react';

interface AboutProps {
  content: ContentStrings['about'];
}

export const About: React.FC<AboutProps> = ({ content }) => {
  const icons = [Zap, Target, Eye, Shield, Users];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
           <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 uppercase">
             {content.title}
           </h2>
           <p className="text-xl text-textDim max-w-4xl mx-auto leading-relaxed">
             {content.subtitle}
           </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-24 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl opacity-50 rounded-3xl"></div>
             <div className="relative p-8 md:p-12 rounded-3xl bg-surface border border-white/5">
                <h3 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-primary"></span>
                  {content.story.title}
                </h3>
                <p className="text-textDim leading-relaxed text-lg">
                  {content.story.content}
                </p>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-12">
               <h3 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-white"></span>
                  {content.philosophy.title}
               </h3>
               <p className="text-white/90 leading-relaxed text-lg border-l-2 border-primary pl-6 py-2">
                 {content.philosophy.content}
               </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
           <h3 className="text-center text-2xl font-display font-bold text-white mb-12 uppercase tracking-widest">
             {content.values.title}
           </h3>
           <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
             {content.values.list.map((item, idx) => {
               const Icon = icons[idx % icons.length];
               return (
                 <div key={idx} className="bg-surfaceHighlight p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group">
                   <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                     <Icon size={24} />
                   </div>
                   <h4 className="text-white font-bold mb-3">{item.title}</h4>
                   <p className="text-textDim text-sm">{item.desc}</p>
                 </div>
               );
             })}
           </div>
        </div>

      </div>
    </section>
  );
};