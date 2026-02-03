import React, { useEffect, useRef, useState } from 'react';
import { ContentStrings, Language } from '../types';
import { ArrowRight, ChevronDown, Zap } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';

interface HeroProps {
  content: ContentStrings['hero'];
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ content, lang }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 perspective-1000"
    >
      
      {/* --- Background System --- */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black z-0 pointer-events-none"></div>

      {/* 2. 3D Perspective Floor Grid */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none opacity-40">
        <div 
          className="w-[200vw] h-[200vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] origin-top bg-[linear-gradient(rgba(0,212,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.4)_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{ 
            transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            animation: 'gridScroll 2s linear infinite',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* 3. Ceiling Grid (Mirrored) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none opacity-20">
         <div 
          className="w-[200vw] h-[200vh] absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[40%] origin-bottom bg-[linear-gradient(rgba(0,212,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.2)_1px,transparent_1px)] bg-[size:60px_60px]"
          style={{ 
            transform: 'perspective(500px) rotateX(-60deg) translateY(100px) translateZ(-200px)',
            animation: 'gridScroll 2s linear infinite reverse',
             maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        ></div>
      </div>

      {/* 4. Interactive Mouse Spotlight */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.08), transparent 40%)`
        }}
      ></div>

      {/* 5. Central Cyber Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0 animate-spin-slow pointer-events-none opacity-30">
        <div className="absolute inset-0 border-t border-r border-primary/20 rounded-full"></div>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00D4FF]"></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00D4FF]"></div>
      </div>

      {/* 6. Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[size:100%_4px] opacity-10"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[100px] w-full animate-scanline opacity-20"></div>

      {/* --- Content --- */}
      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8 animate-fade-in-up shadow-[0_0_20px_rgba(0,212,255,0.15)]">
          <Zap size={14} className="text-primary fill-primary animate-pulse" />
          <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">System Optimized</span>
        </div>

        <h1 className="max-w-5xl font-display font-black text-4xl md:text-6xl lg:text-8xl leading-[1.1] text-white tracking-tighter mb-8 drop-shadow-2xl uppercase relative mx-auto">
          {content.title}
        </h1>

        <p className="max-w-2xl text-base md:text-xl text-textDim font-light leading-relaxed mb-12 relative mx-auto">
          {content.subtitle}
          <span className="absolute -left-4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></span>
          <span className="absolute -right-4 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <ShinyButton onClick={scrollToContact} className="uppercase font-bold tracking-widest text-sm md:text-base">
            <span className="flex items-center gap-2">
              {content.cta} <ArrowRight className="w-5 h-5" />
            </span>
          </ShinyButton>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-primary opacity-50">
        <ChevronDown size={24} />
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-24 left-6 w-32 h-32 border-l border-t border-white/10 rounded-tl-3xl pointer-events-none"></div>
      <div className="absolute bottom-6 right-6 w-32 h-32 border-r border-b border-white/10 rounded-br-3xl pointer-events-none"></div>
    </section>
  );
};