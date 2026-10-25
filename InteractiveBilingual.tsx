import React, { useState, useEffect } from 'react';
import { Languages, Volume2 } from 'lucide-react';
import { BilingualText } from './types.ts';
import { useTranslation } from './TranslationContext.tsx';

interface InteractiveBilingualProps {
  text: BilingualText;
  className?: string;
  spanishClassName?: string;
  armenianClassName?: string;
  as?: 'div' | 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'li';
  showSpeaker?: boolean;
  inline?: boolean;
  highlightedText?: string;
}

export const InteractiveBilingual: React.FC<InteractiveBilingualProps> = ({
  text,
  className = '',
  spanishClassName = '',
  armenianClassName = '',
  as: Component = 'div',
  showSpeaker = false,
  inline = false,
}) => {
  const { showAll, speakSpanish, audioVoiceFeedback } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(showAll);
  }, [showAll]);

  const toggleTranslation = (e: React.MouseEvent) => {
    // Stop propagation so parent clickable containers (e.g., option wrappers) don't trigger answer selection
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakSpanish(text.es);
  };

  if (inline) {
    return (
      <span className={`inline-block group ${className}`}>
        <span
          onClick={toggleTranslation}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleTranslation(e as unknown as React.MouseEvent);
            }
          }}
          className={`cursor-pointer underline decoration-dotted decoration-amber-500/70 underline-offset-4 hover:text-amber-800 transition-colors ${spanishClassName}`}
          title="Haz clic para ver la traducción al armenio | Սեղմեք հայերեն թարգմանության համար"
        >
          {text.es}
        </span>
        {showSpeaker && audioVoiceFeedback && (
          <button
            type="button"
            onClick={handleSpeak}
            className="inline-flex ml-1 p-0.5 text-stone-400 hover:text-amber-700 transition-colors align-middle"
            title="Escuchar pronunciación en español"
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>
        )}
        {isOpen && text.hy && (
          <span className={`block text-xs md:text-sm text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded mt-1 font-armenian border border-amber-200/80 ${armenianClassName}`}>
            {text.hy}
          </span>
        )}
      </span>
    );
  }

  return (
    <Component className={`group/bilingual my-0.5 ${className}`}>
      <div
        onClick={toggleTranslation}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTranslation(e as unknown as React.MouseEvent);
          }
        }}
        className={`cursor-pointer rounded-lg p-1 -m-1 transition-all duration-150 hover:bg-amber-100/50 flex items-start justify-between gap-2 text-stone-900 ${spanishClassName}`}
        title="Haz clic para alternar la traducción al armenio | Սեղմեք հայերեն թարգմանության համար"
      >
        <span className="flex-1 leading-relaxed select-text">{text.es}</span>

        <span className="flex items-center gap-1 shrink-0 opacity-40 group-hover/bilingual:opacity-100 transition-opacity mt-0.5 select-none">
          {showSpeaker && audioVoiceFeedback && (
            <button
              type="button"
              onClick={handleSpeak}
              className="p-1 text-stone-500 hover:text-amber-800 hover:bg-amber-100 rounded transition"
              title="Escuchar en español"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          )}
          <span
            className={`inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded font-medium transition-colors ${
              isOpen
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
          >
            <Languages className="w-3 h-3" />
            <span className="font-armenian">Հայ</span>
          </span>
        </span>
      </div>

      {isOpen && text.hy && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`mt-1.5 p-2.5 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50/70 border-l-4 border-l-amber-600 border border-amber-200/70 text-stone-800 font-armenian text-sm leading-relaxed shadow-xs transition-all ${armenianClassName}`}
        >
          <div className="flex items-center gap-1.5 mb-1 text-[11px] font-semibold uppercase tracking-wider text-amber-800">
            <span>🇦🇲 Թարգմանություն</span>
          </div>
          <div>{text.hy}</div>
        </div>
      )}
    </Component>
  );
};
