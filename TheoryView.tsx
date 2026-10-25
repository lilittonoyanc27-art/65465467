import React, { useState } from 'react';
import { BookOpen, Sparkles, AlertTriangle, CheckCircle2, Table, Volume2, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { theoryTopics } from './theoryData.ts';
import { InteractiveBilingual } from './InteractiveBilingual.tsx';
import { useTranslation } from './TranslationContext.tsx';

interface TheoryViewProps {
  onGoToExercises?: (topicId: string) => void;
}

export const TheoryView: React.FC<TheoryViewProps> = ({ onGoToExercises }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(theoryTopics[0].id);
  const { showAll, toggleShowAll, speakSpanish } = useTranslation();

  const currentTopic = theoryTopics.find((t) => t.id === selectedTopicId) || theoryTopics[0];

  return (
    <div className="space-y-6">
      {/* Top Banner & Translation Controls */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-white rounded-2xl p-6 shadow-md border border-rose-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-amber-400 text-rose-950 font-bold text-xs uppercase tracking-wider rounded-md font-sans">
                1.º ESO • Lengua y Literatura
              </span>
              <span className="text-amber-200 text-xs font-armenian">
                Իսպաներեն — Հայերեն
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              📖 Teoría Fundamental — Տեսություն
            </h1>
            <p className="text-rose-100 text-sm mt-1 max-w-2xl font-normal leading-relaxed">
              Explicaciones académicas completas, tablas comparativas, ejemplos comentados y consejos clave para el examen oficial de España.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={toggleShowAll}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs md:text-sm shadow-sm transition-all cursor-pointer ${
                showAll
                  ? 'bg-amber-400 text-rose-950 hover:bg-amber-300 font-semibold'
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
              }`}
            >
              {showAll ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showAll ? 'Ocultar traducciones' : 'Mostrar todas las traducciones'}</span>
              <span className="font-armenian text-xs opacity-90">({showAll ? 'Թաքցնել' : 'Ցուցադրել'})</span>
            </button>
          </div>
        </div>

        {/* Theme tabs navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 pt-4 border-t border-rose-700/60">
          {theoryTopics.map((topic, idx) => {
            const isSelected = topic.id === selectedTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`text-left p-3 rounded-xl transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-white text-rose-950 border-amber-400 shadow-md font-bold'
                    : 'bg-rose-950/40 hover:bg-rose-950/70 text-rose-100 border-white/10'
                }`}
              >
                <div className="text-[11px] font-semibold text-amber-500 uppercase tracking-wider">
                  Tema {idx + 1}
                </div>
                <div className="text-sm font-medium line-clamp-1 mt-0.5">
                  {topic.title.es.replace(/^TEMA \d+ — /, '')}
                </div>
                <div className="text-[11px] opacity-80 font-armenian line-clamp-1 mt-0.5">
                  {topic.title.hy.replace(/^ԹԵՄԱ \d+ — /, '')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        {/* Unit Header */}
        <div className="p-6 md:p-8 border-b border-stone-100 bg-gradient-to-b from-stone-50/70 to-white">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-900 border border-rose-200">
              <BookOpen className="w-3.5 h-3.5 text-rose-700" />
              <span>{currentTopic.badge?.es || 'Unidad Temática'}</span>
            </span>

            {onGoToExercises && (
              <button
                onClick={() => onGoToExercises(currentTopic.id)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold bg-rose-800 text-white hover:bg-rose-900 transition-colors cursor-pointer shadow-xs"
              >
                <span>Practicar ejercicios del tema</span>
                <span className="font-armenian opacity-85">(Վարժություններ)</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
            <InteractiveBilingual text={currentTopic.title} showSpeaker />
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Section: Definition */}
          <section className="bg-amber-50/70 border-l-4 border-amber-600 rounded-r-xl p-5 border border-amber-200/60 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-amber-950 font-bold text-sm tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Definición académica rigurosa • Սահմանում</span>
            </div>
            <InteractiveBilingual
              text={currentTopic.definition}
              spanishClassName="text-base md:text-lg text-stone-900 font-medium leading-relaxed"
              armenianClassName="text-stone-800"
              showSpeaker
            />
          </section>

          {/* Section: Simple Explanation */}
          <section className="bg-stone-50 rounded-xl p-5 border border-stone-200/80">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>💡 Explicación sencilla para el alumno • Պարզ բացատրություն</span>
            </h3>
            <InteractiveBilingual
              text={currentTopic.simpleExplanation}
              spanishClassName="text-sm md:text-base text-stone-800 leading-relaxed"
            />
          </section>

          {/* Section: Deep Dive (Puntos clave) */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="w-2 h-5 bg-rose-700 rounded-full inline-block"></span>
              <span>Desarrollo en profundidad del tema • Խորացված տեսություն</span>
            </h3>

            <div className="space-y-3.5">
              {currentTopic.deepDive.map((point, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-stone-200/90 hover:border-amber-400 hover:shadow-xs transition-all"
                >
                  <InteractiveBilingual text={point} showSpeaker />
                </div>
              ))}
            </div>
          </section>

          {/* Section: Tables */}
          {currentTopic.tables && currentTopic.tables.length > 0 && (
            <section className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
                <Table className="w-5 h-5 text-amber-600" />
                <span>Tabla comparativa detallada • Համեմատական աղյուսակ</span>
              </h3>

              {currentTopic.tables.map((table, tIndex) => (
                <div key={tIndex} className="overflow-x-auto rounded-xl border border-stone-200 shadow-xs">
                  <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead className="bg-gradient-to-r from-rose-900 to-rose-800 text-white">
                      <tr>
                        {table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-bold border-b border-rose-950/20">
                            <InteractiveBilingual text={h} spanishClassName="text-white font-bold" />
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50/60'}>
                          <td className="p-3.5 font-semibold text-rose-950 align-top w-1/4">
                            <InteractiveBilingual text={row.col1} />
                          </td>
                          <td className="p-3.5 text-stone-800 align-top">
                            <InteractiveBilingual text={row.col2} />
                          </td>
                          {row.col3 && (
                            <td className="p-3.5 text-stone-800 align-top">
                              <InteractiveBilingual text={row.col3} />
                            </td>
                          )}
                          {row.col4 && (
                            <td className="p-3.5 text-stone-800 align-top">
                              <InteractiveBilingual text={row.col4} />
                            </td>
                          )}
                          {row.col5 && (
                            <td className="p-3.5 text-stone-800 align-top">
                              <InteractiveBilingual text={row.col5} />
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </section>
          )}

          {/* Section: Examples with literary breakdown */}
          <section className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-stone-900 flex items-center gap-2">
              <span className="w-2 h-5 bg-amber-500 rounded-full inline-block"></span>
              <span>Ejemplos literarios comentados • Վերլուծված գրական օրինակներ</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTopic.examples.map((ex, eIdx) => (
                <div
                  key={eIdx}
                  className="bg-stone-50/80 rounded-xl p-5 border border-stone-200/90 flex flex-col justify-between hover:shadow-xs transition"
                >
                  <div>
                    <div className="font-serif italic text-base md:text-lg text-rose-950 font-medium border-l-2 border-rose-700 pl-3.5 my-2">
                      <InteractiveBilingual text={ex.quote} showSpeaker />
                    </div>

                    {ex.authorOrSource && (
                      <div className="text-xs font-semibold text-stone-500 mt-2 mb-3">
                        <InteractiveBilingual text={ex.authorOrSource} />
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 text-xs md:text-sm text-stone-700 bg-amber-50/60 rounded-lg p-2.5 border border-amber-200/50">
                    <span className="font-bold text-amber-900 block mb-1">
                      🔍 Análisis / Վերլուծություն:
                    </span>
                    <InteractiveBilingual text={ex.explanation} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Rules for Exam & Typical Mistakes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Rules */}
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-5 space-y-3">
              <h4 className="font-bold text-emerald-950 flex items-center gap-2 text-sm uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Reglas de oro para el examen • Քննության ոսկե կանոններ</span>
              </h4>
              <ul className="space-y-2.5">
                {currentTopic.examRules.map((rule, rIdx) => (
                  <li key={rIdx} className="text-xs md:text-sm text-stone-800 flex items-start gap-2">
                    <span className="text-emerald-700 font-bold mt-0.5">•</span>
                    <InteractiveBilingual text={rule} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Mistakes */}
            <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-5 space-y-3">
              <h4 className="font-bold text-rose-950 flex items-center gap-2 text-sm uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Errores típicos de alumnos • Աշակերտների տիպական սխալներ</span>
              </h4>
              <div className="space-y-3">
                {currentTopic.typicalMistakes.map((mis, mIdx) => (
                  <div key={mIdx} className="text-xs md:text-sm text-stone-800 space-y-1">
                    <div className="text-rose-900 font-semibold flex items-start gap-1.5">
                      <span className="text-rose-600">❌</span>
                      <InteractiveBilingual text={mis.mistake} />
                    </div>
                    <div className="text-stone-700 pl-5 text-xs">
                      <span className="font-semibold text-emerald-800">✅ Corrección: </span>
                      <InteractiveBilingual text={mis.correction} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Summary */}
          <section className="bg-stone-900 text-stone-100 rounded-xl p-5 space-y-2">
            <h4 className="text-amber-400 font-bold text-xs uppercase tracking-wider">
              📌 Resumen ejecutivo del tema • Ամփոփում
            </h4>
            {currentTopic.summary.map((sum, sIdx) => (
              <InteractiveBilingual
                key={sIdx}
                text={sum}
                spanishClassName="text-stone-200 font-medium text-sm leading-relaxed"
                armenianClassName="text-amber-100 bg-stone-800 border-amber-500"
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
