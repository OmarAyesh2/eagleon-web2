import React from 'react';
import { ContentStrings } from '../types';
import { Box, Code, Fingerprint, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  content: ContentStrings['services'];
}

export const Services: React.FC<ServicesProps> = ({ content }) => {
  const icons = {
    branding: <Fingerprint className="w-8 h-8" />,
    web: <Code className="w-8 h-8" />,
    cgi: <Box className="w-8 h-8" />
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-background relative">
       <div className="container mx-auto px-6">
         <div className="text-center max-w-4xl mx-auto mb-20">
           <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight mb-6 uppercase">
             {content.title}
           </h2>
           <p className="text-textDim text-lg md:text-xl leading-relaxed">
             {content.subtitle}
           </p>
         </div>

         <div className="grid lg:grid-cols-3 gap-8">
            {(Object.entries(content.items) as [keyof typeof icons, typeof content.items.branding][]).map(([key, item]) => (
              <div 
                key={key}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-surface border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                   <div className="mb-8 flex justify-between items-start">
                     <div className="p-4 rounded-2xl bg-surfaceHighlight text-white group-hover:text-primary transition-colors border border-white/5">
                       {icons[key]}
                     </div>
                   </div>
                   
                   <h3 className="text-2xl font-bold text-white mb-4">
                     {item.title}
                   </h3>
                   <p className="text-textDim leading-relaxed text-sm mb-8 flex-grow">
                     {item.desc}
                   </p>

                   <ul className="space-y-3 pt-6 border-t border-white/10">
                     {item.features?.map((feature, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                         <CheckCircle2 size={16} className="text-primary shrink-0" />
                         <span>{feature}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};