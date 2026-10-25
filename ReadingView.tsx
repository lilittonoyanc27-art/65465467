import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  FileText,
  RotateCcw,
  Eye,
  EyeOff,
  Feather,
} from 'lucide-react';
import { readingTexts } from './readingsData.ts';
import { ReadingText, ReadingQuestion } from './types.ts';
import { InteractiveBilingual } from './InteractiveBilingual.tsx';
import { useTranslation } from './TranslationContext.tsx';

export const ReadingView: React.FC = () => {
  const [selectedTextId, setSelectedTextId] = useState<string>(readingTexts[0].id);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});
  const [checkedQuestions, setCheckedQuestions] = useState<{ [qId: string]: boolean }>({});
  const [revealedModelAnswers, setRevealedModelAnswers] = useState<{ [qId: string]: boolean }>({});

  const { showAll, toggleShowAll, speakSpanish } = useTranslation();

  const currentText: ReadingText =
    readingTexts.find((t) => t.id === selectedTextId) || readingTexts[0];

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (checkedQuestions[questionId]) return; // already evaluated
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleCheckQuestion = (question: ReadingQuestion) => {
    const selected = userAnswers[question.id];
    if (!selected && !question.isOpenEnded) return;

    setCheckedQuestions((prev) => ({ ...prev, [question.id]: true }));

    if (question.correctOption && selected === question.correctOption) {
      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.8 },
        });
      } catch {
        // silent
      }
    }
  };

  const handleResetQuestions = () => {
    setUserAnswers({});
    setCheckedQuestions({});
    setRevealedModelAnswers({});
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 shadow-md border border-rose-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-400 text-rose-950 font-bold text-xs uppercase tracking-wider rounded-md mb-2">
              <Feather className="w-3.5 h-3.5" />
              <span>Lecturas y Análisis Literario • 1.º ESO</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Comprensión Lectora — Ընթերցանություն
            </h1>
            <p className="text-rose-100 text-sm mt-1 max-w-2xl font-normal leading-relaxed">
              Lee con atención el texto en español. Haz clic en cualquier párrafo para ver su traducción al armenio. Responde a las preguntas de análisis antes de verificar tus soluciones.
            </p>
          </div>

          <button
            onClick={toggleShowAll}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition cursor-pointer shadow-xs ${
              showAll
                ? 'bg-amber-400 text-rose-950'
                : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
            }`}
          >
            {showAll ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showAll ? 'Ocultar traducciones' : 'Mostrar todas las traducciones'}</span>
          </button>
        </div>

        {/* Text selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 pt-4 border-t border-rose-800/60">
          {readingTexts.map((text) => {
            const isSelected = text.id === selectedTextId;
            return (
              <button
                key={text.id}
                onClick={() => {
                  setSelectedTextId(text.id);
                  handleResetQuestions();
                }}
                className={`text-left p-3 rounded-xl transition cursor-pointer border ${
                  isSelected
                    ? 'bg-white text-rose-950 border-amber-400 shadow-md font-bold'
                    : 'bg-rose-950/40 hover:bg-rose-950/70 text-rose-100 border-white/10'
                }`}
              >
                <div className="text-[11px] font-semibold text-amber-500 uppercase tracking-wider">
                  {text.genre.es.split(' ')[0]}
                </div>
                <div className="text-sm font-medium line-clamp-1 mt-0.5">{text.title.es}</div>
                <div className="text-[11px] font-armenian line-clamp-1 opacity-80 mt-0.5">
                  {text.title.hy}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Reading Text + Comprehension Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: The Literary Text */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-900 border border-rose-200 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-rose-700" />
              <InteractiveBilingual text={currentText.genre} inline />
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
              <InteractiveBilingual text={currentText.title} showSpeaker />
            </h2>

            {currentText.authorInfo && (
              <div className="text-xs text-stone-500 mt-1 italic">
                <InteractiveBilingual text={currentText.authorInfo} />
              </div>
            )}
          </div>

          {/* Context Intro */}
          <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200 text-xs md:text-sm text-stone-800 leading-relaxed italic">
            <InteractiveBilingual text={currentText.introContext} />
          </div>

          {/* Paragraphs with paragraph-by-paragraph translation on click */}
          <div className="space-y-4 font-serif text-base md:text-lg text-stone-800 leading-relaxed">
            {currentText.paragraphs.map((p, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl hover:bg-amber-50/40 transition-colors border-l-2 border-transparent hover:border-amber-400"
              >
                <InteractiveBilingual
                  text={p}
                  spanishClassName="leading-relaxed select-text"
                  armenianClassName="font-sans text-sm"
                  showSpeaker
                />
              </div>
            ))}
          </div>

          {/* Vocabulary Glossary */}
          {currentText.vocabularyGlossary && currentText.vocabularyGlossary.length > 0 && (
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 mt-6">
              <div className="font-bold text-xs uppercase text-amber-900 tracking-wider">
                📖 Glosario de vocabulario contextual • Բառարան
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {currentText.vocabularyGlossary.map((vocab, vIdx) => (
                  <div key={vIdx} className="bg-white p-3 rounded-lg border border-stone-200">
                    <span className="font-bold text-rose-900 block text-sm mb-0.5">
                      {vocab.word}:
                    </span>
                    <InteractiveBilingual text={vocab.definition} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Literary Analysis Guide */}
          <div className="p-5 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border border-rose-200 space-y-3">
            <div className="font-bold text-xs uppercase text-rose-950 tracking-wider">
              🔍 Guía de análisis literario de la obra
            </div>
            <div className="text-xs space-y-2 text-stone-800">
              <div>
                <span className="font-bold text-rose-900">Tema central: </span>
                <InteractiveBilingual text={currentText.literaryAnalysisGuide.theme} inline />
              </div>
              <div>
                <span className="font-bold text-rose-900">Voz narrativa: </span>
                <InteractiveBilingual text={currentText.literaryAnalysisGuide.narrativeVoice} inline />
              </div>
              <div>
                <span className="font-bold text-rose-900">Mensaje / Moraleja: </span>
                <InteractiveBilingual text={currentText.literaryAnalysisGuide.message} inline />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Comprehension & Analysis Questions */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-extrabold text-base text-stone-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-rose-800" />
                <span>Preguntas de comprensión ({currentText.questions.length})</span>
              </h3>

              <button
                type="button"
                onClick={handleResetQuestions}
                className="text-xs text-rose-800 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reiniciar</span>
              </button>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {currentText.questions.map((q) => {
                const isChecked = !!checkedQuestions[q.id];
                const selectedOpt = userAnswers[q.id];
                const isCorrect = isChecked && selectedOpt === q.correctOption;

                return (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl bg-stone-50/80 border border-stone-200 space-y-3.5"
                  >
                    {/* Question Header & Category */}
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-amber-800 uppercase tracking-wider">
                        Pregunta {q.questionNumber} • {q.categoryLabel.es}
                      </span>
                      {isChecked && !q.isOpenEnded && (
                        <span
                          className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                          {isCorrect ? 'Correcto' : 'Incorrecto'}
                        </span>
                      )}
                    </div>

                    {/* Question text with translation */}
                    <div className="text-sm font-bold text-stone-900">
                      <InteractiveBilingual text={q.question} showSpeaker />
                    </div>

                    {/* Multiple Choice Options */}
                    {q.options && (
                      <div className="space-y-2">
                        {q.options.map((opt) => {
                          const isSelected = selectedOpt === opt.id;
                          let optStyle = 'border-stone-200 bg-white hover:border-amber-400';

                          if (isChecked) {
                            if (opt.id === q.correctOption) {
                              optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                            } else if (isSelected && !isCorrect) {
                              optStyle = 'border-rose-500 bg-rose-50 text-rose-950';
                            }
                          } else if (isSelected) {
                            optStyle = 'border-amber-600 bg-amber-50/70 font-semibold ring-2 ring-amber-500/20';
                          }

                          return (
                            <div
                              key={opt.id}
                              className={`p-2.5 rounded-xl border text-xs transition flex items-start gap-2.5 ${optStyle}`}
                            >
                              <button
                                type="button"
                                disabled={isChecked}
                                onClick={() => handleSelectOption(q.id, opt.id)}
                                className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-[11px] transition cursor-pointer mt-0.5 ${
                                  isSelected
                                    ? 'bg-amber-600 text-white shadow-xs'
                                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                                }`}
                              >
                                {opt.id}
                              </button>

                              <div className="flex-1">
                                <InteractiveBilingual text={opt.text} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Open Ended Writing Question */}
                    {q.isOpenEnded && (
                      <div className="space-y-2">
                        <textarea
                          rows={3}
                          placeholder="Escribe tu reflexión o análisis aquí..."
                          value={userAnswers[q.id] || ''}
                          onChange={(e) =>
                            setUserAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                          }
                          className="w-full p-2.5 rounded-lg border border-stone-300 text-xs focus:outline-hidden focus:border-amber-500"
                        />

                        {revealedModelAnswers[q.id] && q.modelAnswer && (
                          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-300 text-xs text-stone-800 space-y-1">
                            <span className="font-bold text-emerald-900 block">
                              ⭐ Criterio y Respuesta Modelo:
                            </span>
                            <InteractiveBilingual text={q.modelAnswer} />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action button to evaluate */}
                    <div className="pt-1 flex items-center justify-between">
                      {!isChecked ? (
                        <button
                          type="button"
                          onClick={() => {
                            handleCheckQuestion(q);
                            if (q.isOpenEnded) {
                              setRevealedModelAnswers((prev) => ({ ...prev, [q.id]: true }));
                            }
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-rose-800 hover:bg-rose-900 text-white font-semibold text-xs cursor-pointer shadow-2xs"
                        >
                          {q.isOpenEnded ? 'Ver criterios y solución' : 'Comprobar'}
                        </button>
                      ) : (
                        <div className="text-[11px] text-stone-500 font-medium">
                          Pregunta respondida
                        </div>
                      )}
                    </div>

                    {/* Explanation */}
                    {isChecked && q.explanation && (
                      <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs space-y-1">
                        <span className="font-bold text-amber-900 block">Explicación:</span>
                        <InteractiveBilingual text={q.explanation} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
