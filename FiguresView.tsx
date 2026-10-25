import React, { useState } from 'react';
import { Sparkles, Music, Layers, BookCheck, AlertCircle, HelpCircle, Check, Search } from 'lucide-react';
import { literaryFigures } from './figuresData.ts';
import { LiteraryFigure, FigureLevel } from './types.ts';
import { InteractiveBilingual } from './InteractiveBilingual.tsx';
import { useTranslation } from './TranslationContext.tsx';

interface FiguresViewProps {
  onPracticeFigure?: (figureName: string) => void;
}

export const FiguresView: React.FC<FiguresViewProps> = ({ onPracticeFigure }) => {
  const [activeLevel, setActiveLevel] = useState<FigureLevel | 'todas'>('todas');
  const [selectedFigureId, setSelectedFigureId] = useState<string>(literaryFigures[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { showAll, toggleShowAll } = useTranslation();

  const filteredFigures = literaryFigures.filter((fig) => {
    const matchesLevel = activeLevel === 'todas' || fig.level === activeLevel;
    const matchesSearch =
      fig.name.es.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fig.name.hy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  const currentFigure: LiteraryFigure =
    literaryFigures.find((f) => f.id === selectedFigureId) || literaryFigures[0];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 shadow-md border border-rose-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-400 text-rose-950 font-bold text-xs uppercase tracking-wider rounded-md mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bloque Especial • 11 Figuras Retóricas</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Figuras Literarias — Գեղարվեստական արտահայտչամիջոցներ
            </h1>
            <p className="text-rose-100 text-sm mt-1 max-w-2xl font-normal leading-relaxed">
              Guía completa con 8–10 ejemplos comentados por figura, métodos de identificación, contraste entre conceptos afines y trampas de examen.
            </p>
          </div>

          <button
            onClick={toggleShowAll}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition cursor-pointer shadow-xs ${
              showAll
                ? 'bg-amber-400 text-rose-950'
                : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
            }`}
          >
            {showAll ? 'Ocultar traducciones' : 'Mostrar todas las traducciones'}
          </button>
        </div>

        {/* Level Filters & Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-rose-800/60">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todas', label: { es: 'Todas (11)', hy: 'Բոլորը (11)' } },
              { id: 'fónico', label: { es: 'Nivel Fónico (4)', hy: 'Հնչյունային (4)' }, icon: Music },
              { id: 'morfosintáctico', label: { es: 'Nivel Morfosintáctico (6)', hy: 'Ձևաբանական-շարահյուսական (6)' }, icon: Layers },
              { id: 'semántico', label: { es: 'Nivel Semántico: Metáfora', hy: 'Իմաստային. Փոխաբերություն' }, icon: BookCheck },
            ].map((lvl) => {
              const isActive = activeLevel === lvl.id;
              const Icon = lvl.icon;
              return (
                <button
                  key={lvl.id}
                  onClick={() => setActiveLevel(lvl.id as FigureLevel | 'todas')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-amber-400 text-rose-950 font-bold shadow-xs'
                      : 'bg-rose-950/40 text-rose-100 hover:bg-rose-900 border border-white/10'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{lvl.label.es}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-rose-300 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar figura / Որոնել..."
              className="w-full bg-rose-950/50 text-white placeholder-rose-300 text-xs rounded-xl pl-9 pr-3 py-2 border border-white/15 focus:outline-hidden focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Two Column Layout: Figures Sidebar + Main Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: List of figures */}
        <div className="lg:col-span-4 space-y-2">
          <div className="bg-white rounded-2xl p-3 border border-stone-200 shadow-xs max-h-[780px] overflow-y-auto custom-scrollbar">
            <div className="text-xs font-bold text-stone-500 uppercase px-3 py-2">
              Figuras ({filteredFigures.length})
            </div>
            <div className="space-y-1.5">
              {filteredFigures.map((fig) => {
                const isSelected = fig.id === selectedFigureId;
                return (
                  <button
                    key={fig.id}
                    onClick={() => setSelectedFigureId(fig.id)}
                    className={`w-full text-left p-3 rounded-xl transition cursor-pointer border ${
                      isSelected
                        ? 'bg-gradient-to-r from-rose-50 to-amber-50/60 border-amber-500 shadow-xs'
                        : 'bg-stone-50/70 hover:bg-stone-100/80 border-transparent text-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-stone-900">{fig.name.es}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          fig.level === 'fónico'
                            ? 'bg-purple-100 text-purple-800'
                            : fig.level === 'morfosintáctico'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-900'
                        }`}
                      >
                        {fig.level}
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 font-armenian mt-0.5">{fig.name.hy}</div>
                    <div className="text-[11px] text-stone-600 line-clamp-1 mt-1 opacity-80">
                      {fig.shortDesc.es}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column: Figure Deep Dive Card */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-xs space-y-7">
          {/* Header */}
          <div className="border-b border-stone-200 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-200">
                <Layers className="w-3.5 h-3.5" />
                <InteractiveBilingual text={currentFigure.levelName} inline />
              </span>

              {onPracticeFigure && (
                <button
                  onClick={() => onPracticeFigure(currentFigure.name.es)}
                  className="px-3.5 py-1.5 bg-rose-800 hover:bg-rose-900 text-white rounded-lg text-xs font-semibold cursor-pointer shadow-xs"
                >
                  Practicar ejercicios de {currentFigure.name.es}
                </button>
              )}
            </div>

            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              <InteractiveBilingual text={currentFigure.name} showSpeaker />
            </h2>
          </div>

          {/* Full Definition */}
          <section className="bg-amber-50/60 border-l-4 border-amber-600 rounded-r-xl p-5 border border-amber-200/50">
            <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Definición completa • Սահմանում</span>
            </h3>
            <InteractiveBilingual
              text={currentFigure.fullDefinition}
              spanishClassName="text-base text-stone-900 font-medium leading-relaxed"
            />
          </section>

          {/* Metaphor special breakdown: A es B, B, B de A */}
          {currentFigure.id === 'metafora' && (
            <section className="bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 rounded-xl p-5 border border-amber-300 shadow-xs space-y-4">
              <h3 className="font-extrabold text-rose-950 text-sm md:text-base flex items-center gap-2">
                <span>⭐ Las 3 Estructuras Clave de la Metáfora en 1.º de ESO</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs md:text-sm">
                <div className="bg-white p-3.5 rounded-xl border border-rose-200 shadow-xs">
                  <div className="font-black text-rose-900 text-sm mb-1">1. A es B (Impura)</div>
                  <div className="text-stone-700 italic font-serif">«Tus ojos son estrellas»</div>
                  <div className="text-[11px] text-stone-600 mt-2">
                    Aparecen ambos términos explícitamente unidos por el verbo copulativo.
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-amber-300 shadow-xs">
                  <div className="font-black text-amber-900 text-sm mb-1">2. B (Pura)</div>
                  <div className="text-stone-700 italic font-serif">«Dos luceros me miraban»</div>
                  <div className="text-[11px] text-stone-600 mt-2">
                    El término real A (ojos) está implícito y debe deducirse del contexto.
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-orange-200 shadow-xs">
                  <div className="font-black text-orange-950 text-sm mb-1">3. B de A (Preposicional)</div>
                  <div className="text-stone-700 italic font-serif">«El oro de su cabello»</div>
                  <div className="text-[11px] text-stone-600 mt-2">
                    El término figurado B («oro») precede al real A («cabello») mediante «de».
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* How to identify step by step */}
          <section className="space-y-3">
            <h3 className="text-base md:text-lg font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Cómo reconocerla paso a paso • Ինչպե՞ս ճանաչել քայլ առ քայլ</span>
            </h3>
            <div className="space-y-2">
              {currentFigure.howToIdentify.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs md:text-sm"
                >
                  <InteractiveBilingual text={step} />
                </div>
              ))}
            </div>
          </section>

          {/* 8-10 Analyzed Examples */}
          <section className="space-y-4">
            <h3 className="text-base md:text-lg font-bold text-stone-900 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <BookCheck className="w-4 h-4 text-rose-700" />
                <span>Banco de ejemplos comentados ({currentFigure.examples.length}) • Օրինակներ</span>
              </span>
              <span className="text-xs text-stone-500 font-normal">
                Haz clic en cualquier texto para ver la traducción
              </span>
            </h3>

            <div className="space-y-3">
              {currentFigure.examples.map((ex, exIdx) => (
                <div
                  key={exIdx}
                  className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-serif italic text-sm md:text-base text-rose-950 border-l-2 border-amber-600 pl-3">
                      <InteractiveBilingual text={ex.quote} showSpeaker />
                    </div>
                    {ex.authorOrContext && (
                      <span className="text-[11px] font-semibold text-stone-500 shrink-0 bg-stone-100 px-2 py-0.5 rounded">
                        {ex.authorOrContext}
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-stone-700 pl-3.5 pt-1">
                    <span className="font-bold text-amber-900">Análisis: </span>
                    <InteractiveBilingual text={ex.analysis} />
                  </div>

                  {ex.acousticOrSemanticNote && (
                    <div className="text-[11px] text-stone-600 pl-3.5 bg-amber-50/50 p-2 rounded border border-amber-200/50">
                      <InteractiveBilingual text={ex.acousticOrSemanticNote} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Comparison with similar figures */}
          {currentFigure.similarFiguresComparison.length > 0 && (
            <section className="space-y-3">
              <h3 className="text-base md:text-lg font-bold text-stone-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600" />
                <span>No confundas con... • Մի՛ շփոթիր</span>
              </h3>

              <div className="space-y-3">
                {currentFigure.similarFiguresComparison.map((comp, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-orange-50/50 border border-orange-200 text-xs md:text-sm space-y-2"
                  >
                    <div className="font-bold text-orange-950 flex items-center gap-2">
                      <span>Diferencia con {comp.comparedWith}:</span>
                    </div>
                    <InteractiveBilingual text={comp.difference} />
                    <div className="bg-white/80 p-2.5 rounded-lg border border-orange-200/60 text-xs text-stone-700 font-medium">
                      <span className="text-orange-900 font-bold">🎯 Truco de examen: </span>
                      <InteractiveBilingual text={comp.trick} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Practical Exam Rule */}
          <div className="p-4 rounded-xl bg-stone-900 text-stone-100 flex items-start gap-3">
            <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                Regla Práctica para el Examen Oficial de 1.º ESO
              </div>
              <InteractiveBilingual
                text={currentFigure.practicalRule}
                spanishClassName="text-white text-sm font-medium"
                armenianClassName="text-amber-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
