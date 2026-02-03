import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      // Direct transform for zero latency on the main dot
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Slight delay for the follower ring handled by CSS transition
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer';

      setHovered(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div 
        ref={followerRef}
        className={`
          fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9998] 
          -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out will-change-transform flex items-center justify-center
          ${hovered ? 'scale-150 opacity-100' : 'scale-100 opacity-60'}
        `}
      >
        <img 
          src="\Images\Asset 2.png" 
          alt="cursor" 
          className={`w-full h-full object-contain transition-all duration-300 ${hovered ? 'drop-shadow-[0_0_12px_rgba(0,212,255,0.6)]' : ''}`}
        />
      </div>
    </>
  );
};