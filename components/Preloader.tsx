import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 5;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setExit(true);
        setTimeout(onComplete, 800); // Wait for slide up animation
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div 
      className={`
        fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center
        transition-transform duration-700 cubic-bezier(0.76, 0, 0.24, 1)
        ${exit ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      <div className="relative z-10 text-center">
        <h1 className="font-display font-black text-6xl md:text-9xl tracking-tighter text-white mb-2 relative overflow-hidden">
          <span className="inline-block animate-fade-in-up">EAGLEON</span>
          <span className="text-primary text-4xl md:text-6xl absolute top-0 -right-8 md:-right-12 animate-pulse">.</span>
        </h1>
        
        <div className="flex items-center justify-between w-full max-w-[200px] mx-auto mt-8 border-t border-white/20 pt-4">
           <span className="font-mono text-xs text-textDim uppercase tracking-widest">System Boot</span>
           <span className="font-mono text-xl text-primary font-bold">{Math.min(progress, 100)}%</span>
        </div>
      </div>

      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </div>
  );
};