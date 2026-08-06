import React, { useState, useEffect, useRef } from 'react';
import { ContentStrings } from '../types';
import { ArrowUpRight, X, ZoomIn, ChevronLeft, ChevronRight, Play, Layers } from 'lucide-react';

interface PortfolioProps {
  content: ContentStrings['portfolio'];
  setLightboxOpen: (isOpen: boolean) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ content, setLightboxOpen }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  
  // Use refs for touch coordinates to handle swipes without re-renders/state lag
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const minSwipeDistance = 50;

  // Filter items based on active tab
  const filteredProjects = content.items.filter(
    item => activeFilter === 'all' || item.filter === activeFilter
  );

  const activeProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;
  const activeMedia = activeProject ? activeProject.media[mediaIndex] : null;

  // --- Helper Functions ---

  const getGoogleDriveId = (url: string) => {
    const match = url.match(/(?:file\/d\/|id=|open\?id=)([^/&?]+)/);
    return match ? match[1] : null;
  };

  const openLightbox = (index: number) => {
    setSelectedProjectIndex(index);
    setMediaIndex(0); // Always start from the first image in the album
    setLightboxOpen(true);
  };

  const closeLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedProjectIndex(null);
    setMediaIndex(0);
    setLightboxOpen(false);
  };

  // --- Navigation Logic (Inside Album) ---

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeProject) return;
    setMediaIndex((prev) => (prev + 1) % activeProject.media.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeProject) return;
    setMediaIndex((prev) => (prev - 1 + activeProject.media.length) % activeProject.media.length);
  };

  // --- Swipe Gesture Logic ---

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null; 
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // --- Keyboard & Scroll Locking ---

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activeProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const renderMedia = () => {
    if (!activeMedia) return null;

    if (activeMedia.type === 'video') {
      const driveId = getGoogleDriveId(activeMedia.url);
      
      if (driveId) {
        return (
          <div className="w-full h-full object-contain overflow-hidden bg-black flex items-center justify-center">
            <iframe 
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              className="w-full h-full border-0 object-contain"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title="Project Video"
            ></iframe>
          </div>
        );
      }

      return (
        <video 
          key={activeMedia.url} // Force re-render on change
          controls 
          autoPlay 
          className="w-full h-full object-contain outline-none"
          src={activeMedia.url}
        >
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <img 
        key={activeMedia.url}
        src={activeMedia.url} 
        alt={`${activeProject?.title} - ${mediaIndex + 1}`} 
        className="w-full h-full object-contain select-none"
        draggable={false}
      />
    );
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-background text-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-4 uppercase">
              {content.title}
            </h2>
             <p className="text-textDim text-lg max-w-xl">{content.subtitle}</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
            {content.viewAll} <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Category Filter Nav */}
        <div className="mb-12 flex flex-wrap gap-2 md:gap-4">
          {content.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveFilter(tab.id); setSelectedProjectIndex(null); }}
              className={`
                px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300
                ${activeFilter === tab.id 
                  ? 'bg-white text-black scale-105' 
                  : 'bg-surfaceHighlight text-textDim border border-white/5 hover:text-white hover:border-white/20'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Albums */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[500px]">
          {filteredProjects.map((project, index) => (
             <div 
               key={`${project.title}-${index}`} 
               onClick={() => openLightbox(index)}
               className="group relative aspect-[4/3] md:aspect-golden overflow-hidden rounded-3xl bg-surfaceHighlight cursor-pointer border border-white/5 hover:border-white/20 transition-colors animate-fade-in"
               style={{ animationDelay: `${index * 100}ms` }}
             >
                {/* Album Cover */}
                <img 
                  src={project.coverUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex justify-between items-end">
                     <div>
                       <span className="text-primary font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                         <Layers size={14} />
                         {project.category}
                       </span>
                       <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                         {project.title}
                       </h3>
                       <p className="text-textDim text-xs mt-1 font-mono uppercase tracking-wide">
                         {project.media.length} items
                       </p>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                       <ZoomIn size={20} />
                     </div>
                   </div>
                </div>
             </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
           <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">
            {content.viewAll} <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal (Case Study Overlay) */}
      {activeProject && activeMedia && (
        <div 
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in p-4 md:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button - Fixed position for reliability */}
          <button 
            className="fixed top-6 right-6 md:top-8 md:right-8 p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 z-[101] cursor-pointer shadow-2xl group"
            onClick={closeLightbox}
            aria-label="Close Gallery"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Unified Container */}
          <div 
            className="relative w-full max-w-6xl bg-[#0d0d0e] border border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 overflow-y-auto max-h-[90vh] custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Flexbox Architecture */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              
              {/* Left Pane Layout (Media) */}
              <div className="w-full lg:w-[52%] lg:flex-shrink-0 flex flex-col items-center justify-center relative">
                <div className="relative w-full h-[45vh] md:h-[50vh] lg:h-[500px] flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                  {/* Navigation UI: Prev Button */}
                  {activeProject.media.length > 1 && (
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors z-[100] hidden md:block cursor-pointer backdrop-blur-md border border-white/10"
                      onClick={handlePrev}
                    >
                      <ChevronLeft size={24} className="md:w-8 md:h-8" />
                    </button>
                  )}

                  {/* Navigation UI: Next Button */}
                  {activeProject.media.length > 1 && (
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors z-[100] hidden md:block cursor-pointer backdrop-blur-md border border-white/10"
                      onClick={handleNext}
                    >
                      <ChevronRight size={24} className="md:w-8 md:h-8" />
                    </button>
                  )}

                  {renderMedia()}
                </div>

                {/* Pagination Dots & Nav */}
                <div className="mt-6 text-center animate-fade-in-up select-none w-full">
                  {activeProject.media.length > 1 && (
                    <div className="flex flex-col items-center">
                      <p className="text-textDim text-sm font-mono tracking-widest mb-3" dir="ltr">
                         {mediaIndex + 1} / {activeProject.media.length}
                      </p>
                      <div className="flex justify-center gap-2.5">
                        {activeProject.media.map((_, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setMediaIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === mediaIndex ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/50'}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Pane Layout (Text) */}
              <div className="w-full lg:w-[45%] lg:flex-shrink-0 flex flex-col justify-start animate-fade-in-up">
                <div className="mb-6">
                  <span className="text-primary font-mono text-xs md:text-sm uppercase tracking-widest inline-flex items-center gap-2 bg-zinc-900/80 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                    <Layers size={14} className="md:w-4 md:h-4" />
                    {activeProject.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-8 leading-tight">
                  {activeProject.title}
                </h3>
                
                <div className="space-y-8 lg:space-y-10">
                  {/* Challenge */}
                  {(activeProject as any).challenge && (
                    <div className="relative ltr:pl-5 ltr:border-l-2 rtl:pr-5 rtl:border-r-2 border-white/10">
                      <div className="absolute top-0 ltr:left-[-2px] rtl:right-[-2px] w-[2px] h-6 bg-primary"></div>
                      <h4 className="text-white font-bold text-xs md:text-sm mb-2 uppercase tracking-widest font-mono">The Challenge</h4>
                      <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
                        {(activeProject as any).challenge}
                      </p>
                    </div>
                  )}
                  
                  {/* Solution */}
                  {(activeProject as any).solution && (
                    <div className="relative ltr:pl-5 ltr:border-l-2 rtl:pr-5 rtl:border-r-2 border-white/10">
                      <div className="absolute top-0 ltr:left-[-2px] rtl:right-[-2px] w-[2px] h-6 bg-primary"></div>
                      <h4 className="text-white font-bold text-xs md:text-sm mb-2 uppercase tracking-widest font-mono">Our Solution</h4>
                      <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
                        {(activeProject as any).solution}
                      </p>
                    </div>
                  )}

                  {/* Metrics */}
                  {(activeProject as any).metrics && (
                    <div className="pt-4">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                        {((activeProject as any).metrics).map((metric: any, idx: number) => (
                          <div key={idx} className="bg-surfaceHighlight border border-white/5 hover:border-white/20 transition-colors p-4 md:p-5 rounded-2xl flex flex-col items-start justify-center text-start">
                            <span className="text-primary font-display font-bold text-2xl md:text-3xl mb-1 md:mb-2">{metric.value}</span>
                            <span className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest font-bold">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </section>
  )
}