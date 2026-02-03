import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ContentStrings, Language } from '../types';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  content: ContentStrings['nav'];
  lang: Language;
  setLang: (lang: Language) => void;
  isVisible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ content, lang, setLang, isVisible }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 100; // Offset for navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: content.home },
    { id: 'about', label: content.about },
    { id: 'services', label: content.services },
    { id: 'projects', label: content.projects },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pt-4 md:pt-6 ${
          isScrolled ? 'pt-2' : ''
        } ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div 
          className={`
            relative flex items-center justify-between px-6 py-3 rounded-full 
            transition-all duration-500 backdrop-blur-xl border border-white/5
            ${isScrolled ? 'bg-surface/80 shadow-2xl shadow-black/50 w-[95%] md:w-[750px]' : 'bg-transparent w-[95%] md:w-[90%] max-w-7xl'}
          `}
        >
          {/* Logo - Left aligned */}
          <div 
            className="flex items-center gap-2 cursor-pointer relative z-20 shrink-0" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
             <img 
               src="Images/Asset1.png" 
               alt="Eagleon Logo" 
               className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform"
             />
          </div>

          {/* Desktop Nav - Absolutely Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 bg-surfaceHighlight/50 px-2 py-1.5 rounded-full border border-white/5 z-10">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)}
                className="px-5 py-2 rounded-full text-sm font-medium text-textDim hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 ltr:border-l rtl:border-r border-white/10 h-4 flex items-center">
              <LanguageToggle currentLang={lang} onToggle={setLang} />
            </div>
          </div>

          {/* Contact Button - Right Aligned */}
          <div className="hidden md:block relative z-20 shrink-0">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-colors"
            >
              {content.contact}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white bg-surfaceHighlight p-2.5 rounded-full relative z-50 border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
         <div className="flex flex-col items-center gap-6">
           {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-4xl font-display font-bold text-white/50 hover:text-white hover:scale-110 transition-all"
              >
                {item.label}
              </a>
           ))}
           <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-4xl font-display font-bold text-primary hover:scale-110 transition-all mt-4"
            >
              {content.contact}
            </a>
         </div>

         <div className="absolute bottom-12">
           <LanguageToggle currentLang={lang} onToggle={(l) => { setLang(l); setMobileMenuOpen(false); }} />
         </div>
      </div>
    </>
  );
};