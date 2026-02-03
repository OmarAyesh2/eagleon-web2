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
          <div className="w-full h-full max-w-5xl aspect-video rounded-lg shadow-2xl shadow-primary/20 overflow-hidden bg-black">
            <iframe 
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              className="w-full h-full border-0"
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
          className="max-w-full max-h-[80vh] rounded-lg shadow-2xl shadow-primary/20 outline-none"
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
        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-primary/20 select-none"
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
               className="group relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl bg-surfaceHighlight cursor-pointer border border-white/5 hover:border-white/20 transition-colors animate-fade-in"
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

      {/* Lightbox Modal (Album View) */}
      {activeProject && activeMedia && (
        <div 
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/98 backdrop-blur-xl animate-fade-in"
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close Button - Fixed position for reliability */}
          <button 
            className="fixed top-6 right-6 md:top-8 md:right-8 p-3 md:p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 z-[101] cursor-pointer shadow-2xl group"
            onClick={closeLightbox}
            aria-label="Close Gallery"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Navigation UI: Prev Button */}
          {activeProject.media.length > 1 && (
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[100] hidden md:block cursor-pointer backdrop-blur-sm"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Navigation UI: Next Button */}
          {activeProject.media.length > 1 && (
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[100] hidden md:block cursor-pointer backdrop-blur-sm"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Main Content Area */}
          <div 
            className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] flex items-center justify-center">
              {renderMedia()}
            </div>
            
            <div className="mt-8 text-center animate-fade-in-up select-none">
              <span className="text-primary font-mono text-sm uppercase tracking-widest block mb-2">
                {activeProject.category}
              </span>
              <h3 className="font-display font-bold text-2xl md:text-4xl text-white">
                {activeProject.title}
              </h3>
              <p className="text-textDim text-sm mt-2 flex items-center justify-center gap-2">
                 <span>{mediaIndex + 1} / {activeProject.media.length}</span>
              </p>
              
              {/* Pagination Dots */}
              {activeProject.media.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {activeProject.media.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setMediaIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${idx === mediaIndex ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/50'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}