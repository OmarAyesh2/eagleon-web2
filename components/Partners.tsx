import React from 'react';
import { ContentStrings, Language } from '../types';

interface PartnersProps {
  content: ContentStrings['partners'];
  lang: Language;
}

export const Partners: React.FC<PartnersProps> = ({ content, lang }) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...content.items, ...content.items];

  return (
    <section className="py-12 bg-background border-y border-white/5 relative overflow-hidden">
      
      {/* Title */}
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-textDim text-xs font-mono uppercase tracking-widest">
          {content.title}
        </p>
      </div>

      {/* Marquee Container - Force LTR to ensure consistent geometry for animation math */}
      <div className="relative w-full overflow-hidden" dir="ltr">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

        {/* Scroll Content */}
        <div 
          className="flex items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
          style={{ 
            width: 'max-content',
            // Reverse animation in Arabic so content moves Left->Right (Natural for RTL)
            // Normal (English): Moves Right->Left (Standard Marquee)
            animationDirection: lang === 'ar' ? 'reverse' : 'normal' 
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div 
              key={index} 
              className="inline-flex items-center justify-center mx-12 md:mx-16 opacity-40 hover:opacity-100 transition-all duration-300 cursor-default group grayscale hover:grayscale-0"
            >
               <img 
                 src={item.logo} 
                 alt={item.name}
                 className="h-16 md:h-24 w-auto object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};