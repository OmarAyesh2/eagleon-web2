import React from 'react';
import { ContentStrings } from '../types';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  content: ContentStrings['footer'];
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-surfaceHighlight border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img 
               src="https://github.com/OmarAyesh2/eagleon-web2/blob/main/Images/Asset1.png?raw=true" 
               alt="Eagleon" 
               className="h-10 w-auto mb-6 opacity-90" 
            />
            <h4 className="font-bold text-white mb-4">{content.about.title}</h4>
            <p className="text-textDim text-sm leading-relaxed">
              {content.about.desc}
            </p>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">{content.links.title}</h4>
             <ul className="space-y-3">
               {content.links.items.map((item, i) => (
                 <li key={i}><a href="#" className="text-textDim hover:text-primary transition-colors text-sm">{item}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h4 className="font-bold text-white mb-6">{content.services.title}</h4>
             <ul className="space-y-3">
               {content.services.items.map((item, i) => (
                 <li key={i}><a href="#" className="text-textDim hover:text-primary transition-colors text-sm">{item}</a></li>
               ))}
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">{content.contact.title}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-textDim hover:text-white hover:bg-primary hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-textDim hover:text-white hover:bg-primary hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-textDim hover:text-white hover:bg-primary hover:text-black transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textDim text-xs">{content.copyright}</p>
        </div>

      </div>
    </footer>
  );
};