import React from 'react';
import { ContentStrings } from '../types';

interface WhyUsProps {
  content: ContentStrings['whyUs'];
}

export const WhyUs: React.FC<WhyUsProps> = ({ content }) => {
  return (
    <section className="py-24 bg-surfaceHighlight relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          <div className="md:w-1/3">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white sticky top-24 leading-tight">
              {content.title}
            </h2>
            <div className="w-20 h-2 bg-primary mt-6"></div>
          </div>

          <div className="md:w-2/3 grid gap-8">
            {content.reasons.map((reason, idx) => (
              <div 
                key={idx} 
                className="group p-8 md:p-10 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="flex items-start gap-6">
                   <span className="text-4xl font-display font-bold text-white/10 group-hover:text-primary transition-colors">
                     0{idx + 1}
                   </span>
                   <div>
                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                       {reason.title}
                     </h3>
                     <p className="text-textDim leading-relaxed text-lg">
                       {reason.desc}
                     </p>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};