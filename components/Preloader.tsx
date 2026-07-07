import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setExit(true);
      // Let the transition finish before removing the component
      setTimeout(onComplete, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onComplete]);

  return (
    <div 
      className={`
        fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out transform origin-center
        ${exit ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}
      `}
    >
      <div className="relative z-10 text-center">
        <h1 className="font-display font-black text-6xl md:text-9xl tracking-tighter text-white mb-2 relative overflow-hidden">
          <span className="inline-block animate-fade-in-up">EAGLEON</span>
          <span className="text-primary text-4xl md:text-6xl absolute top-0 -right-8 md:-right-12 animate-pulse">.</span>
        </h1>
        
        <div className="flex items-center justify-between w-full max-w-[200px] mx-auto mt-8 border-t border-white/20 pt-4">
           <span className="font-mono text-xs text-textDim uppercase tracking-widest">System Boot</span>
           <span className="font-mono text-xl text-primary font-bold">INIT</span>
        </div>
      </div>

      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
    </div>
  );
};