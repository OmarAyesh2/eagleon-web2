import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Services } from './components/Services';
import { AntiTemplate } from './components/AntiTemplate';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [loading, setLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Update HTML dir attribute for RTL/LTR support
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const currentContent = CONTENT[lang];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <CustomCursor />
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar 
        content={currentContent.nav} 
        lang={lang} 
        setLang={setLang} 
        isVisible={!isLightboxOpen}
      />
      
      <main className="relative z-10">
        <Hero content={currentContent.hero} lang={lang} />
        <Partners content={currentContent.partners} lang={lang} />
        <Services content={currentContent.services} />
        <AntiTemplate content={currentContent.antiTemplate} />
        <WhyUs content={currentContent.whyUs} />
        <Portfolio 
          content={currentContent.portfolio} 
          setLightboxOpen={setIsLightboxOpen}
        />
        <About content={currentContent.about} />
        <Contact content={currentContent.contact} />
      </main>
      
      <Footer content={currentContent.footer} />

      {/* Global Noise Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.6" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}

export default App;