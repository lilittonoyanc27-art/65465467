import React, { createContext, useContext, useState } from 'react';

interface TranslationContextType {
  showAll: boolean;
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
  toggleShowAll: () => void;
  audioVoiceFeedback: boolean;
  setAudioVoiceFeedback: React.Dispatch<React.SetStateAction<boolean>>;
  speakSpanish: (text: string) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [audioVoiceFeedback, setAudioVoiceFeedback] = useState<boolean>(true);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const speakSpanish = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.92;
      window.speechSynthesis.speak(utterance);
    } catch {
      // speech synthesis fallback silent
    }
  };

  return (
    <TranslationContext.Provider
      value={{
        showAll,
        setShowAll,
        toggleShowAll,
        audioVoiceFeedback,
        setAudioVoiceFeedback,
        speakSpanish,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
