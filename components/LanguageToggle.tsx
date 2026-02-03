import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(currentLang === 'en' ? 'ar' : 'en')}
      className="text-xs font-bold text-textDim hover:text-white transition-colors uppercase tracking-wider"
    >
      {currentLang === 'en' ? 'AR' : 'EN'}
    </button>
  );
};