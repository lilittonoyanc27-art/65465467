import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Award,
} from 'lucide-react';
import { examBlueprints } from './examsData.ts';
import { ExamBlueprint, ExamQuestion, ExamAttempt } from './types.ts';
import { InteractiveBilingual } from './InteractiveBilingual.tsx';
import { useTranslation } from './TranslationContext.tsx';

interface ExamSimulatorProps {
  onPracticeErrors?: (failedQuestionIds: string[]) => void;
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({ onPracticeErrors }) => {
  const [selectedExamId, setSelectedExamId] = useState<string>(examBlueprints[0].id);
  const [isExamInProgress, setIsExamInProgress] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);

  const { showAll, toggleShowAll } = useTranslation();

  const currentExam: ExamBlueprint =
    examBlueprints.find((e) => e.id === selectedExamId) || examBlueprints[0];

  // Timer countdown
  useEffect(() => {
    if (!isExamInProgress || isSubmitted || secondsRemaining <= 0) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamInProgress, isSubmitted, secondsRemaining]);

  const handleStartExam = () => {
    setIsExamInProgress(true);
    setIsSubmitted(false);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setSecondsRemaining(currentExam.timeLimitMinutes * 60);
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsExamInProgress(false);

    // Calculate score
    const questions = currentExam.questions;
    let correctCount = 0;
    const weakTopicsSet = new Set<string>();

    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOption) {
        correctCount += 1;
      } else {
        weakTopicsSet.add(q.originTopic);
      }
    });

    const scoreOutOf10 = Number(((correctCount / questions.length) * 10).toFixed(1));

    if (scoreOutOf10 >= 5) {
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {
        // silent
      }
    }

    // Save attempt to local storage
    try {
      const historyKey = 'eso_lengua_exam_attempts';
      const existing: ExamAttempt[] = JSON.parse(localStorage.getItem(historyKey) || '[]');
      const newAttempt: ExamAttempt = {
        id: `attempt_${Date.now()}`,
        examId: currentExam.id,
        examTitle: currentExam.title.es,
        scoreOutOf10,
        correctCount,
        totalQuestions: questions.length,
        date: new Date().toLocaleDateString('es-ES'),
        weakTopics: Array.from(weakTopicsSet),
        answers: questions.map((q) => ({
          questionId: q.id,
          userSelected: selectedAnswers[q.id] || '',
          correctOption: q.correctOption,
          isCorrect: selectedAnswers[q.id] === q.correctOption,
        })),
      };
      existing.unshift(newAttempt);
      localStorage.setItem(historyKey, JSON.stringify(existing.slice(0, 20)));

      // Also record failed questions to general error bank
      const errorBankKey = 'eso_lengua_failed_questions';
      const currentErrors: string[] = JSON.parse(localStorage.getItem(errorBankKey) || '[]');
      questions.forEach((q) => {
        if (selectedAnswers[q.id] !== q.correctOption && !currentErrors.includes(q.id)) {
          currentErrors.push(q.id);
        }
      });
      localStorage.setItem(errorBankKey, JSON.stringify(currentErrors));
    } catch {
      // ignore
    }
  };

  // Helper for ESO grade classification
  const getEsaGrade = (score: number) => {
    if (score >= 9) return { label: 'Sobresaliente (Գերազանց)', color: 'text-emerald-700 bg-emerald-100' };
    if (score >= 7) return { label: 'Notable (Շատ լավ)', color: 'text-blue-700 bg-blue-100' };
    if (score >= 6) return { label: 'Bien (Լավ)', color: 'text-cyan-700 bg-cyan-100' };
    if (score >= 5) return { label: 'Suficiente (Բավարար)', color: 'text-amber-700 bg-amber-100' };
    return { label: 'Insuficiente (Անբավարար)', color: 'text-rose-700 bg-rose-100' };
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculated stats when submitted
  const correctCount = currentExam.questions.filter(
    (q) => selectedAnswers[q.id] === q.correctOption
  ).length;
  const scoreOutOf10 = Number(((correctCount / currentExam.questions.length) * 10).toFixed(1));
  const gradeInfo = getEsaGrade(scoreOutOf10);
  const percentage = Math.round((correctCount / currentExam.questions.length) * 100);

  const failedQuestionIds = currentExam.questions
    .filter((q) => selectedAnswers[q.id] !== q.correctOption)
    .map((q) => q.id);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 shadow-md border border-rose-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-400 text-rose-950 font-bold text-xs uppercase tracking-wider rounded-md mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Simulador Oficial • Pruebas de Evaluación</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Exámenes Oficiales — Քննություններ
            </h1>
            <p className="text-rose-100 text-sm mt-1 max-w-2xl font-normal leading-relaxed">
              Las soluciones no se revelan durante la prueba. Al finalizar obtendrás tu nota oficial sobre 10, porcentaje, desglose de errores y recomendaciones para repasar.
            </p>
          </div>

          <button
            onClick={toggleShowAll}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer ${
              showAll ? 'bg-amber-400 text-rose-950' : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
            }`}
          >
            {showAll ? 'Ocultar traducciones' : 'Mostrar todas las traducciones'}
          </button>
        </div>

        {/* Exam Type Selector */}
        {!isExamInProgress && !isSubmitted && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-rose-800/60">
            {examBlueprints.map((exam) => {
              const isSelected = exam.id === selectedExamId;
              return (
                <button
                  key={exam.id}
                  onClick={() => setSelectedExamId(exam.id)}
                  className={`text-left p-4 rounded-xl border transition cursor-pointer ${
                    isSelected
                      ? 'bg-white text-rose-950 border-amber-400 shadow-md font-bold'
                      : 'bg-rose-950/40 hover:bg-rose-950/70 text-rose-100 border-white/10'
                  }`}
                >
                  <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                    {exam.questionCount} preguntas • {exam.timeLimitMinutes} min
                  </div>
                  <div className="text-sm font-bold mt-1 line-clamp-1">{exam.title.es}</div>
                  <div className="text-xs font-armenian opacity-80 mt-0.5 line-clamp-1">
                    {exam.title.hy}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* BEFORE EXAM: Start Screen */}
      {!isExamInProgress && !isSubmitted && (
        <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-stone-900">
              <InteractiveBilingual text={currentExam.title} />
            </h2>
            <div className="text-stone-600 text-sm mt-2">
              <InteractiveBilingual text={currentExam.description} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 py-4 border-y border-stone-100 text-center">
            <div>
              <div className="text-xs text-stone-500 font-semibold uppercase">Preguntas</div>
              <div className="text-xl font-extrabold text-stone-900 mt-0.5">
                {currentExam.questionCount}
              </div>
            </div>
            <div>
              <div className="text-xs text-stone-500 font-semibold uppercase">Tiempo</div>
              <div className="text-xl font-extrabold text-stone-900 mt-0.5">
                {currentExam.timeLimitMinutes} min
              </div>
            </div>
            <div>
              <div className="text-xs text-stone-500 font-semibold uppercase">Calificación</div>
              <div className="text-xl font-extrabold text-stone-900 mt-0.5">Sobre 10</div>
            </div>
          </div>

          <div className="text-xs text-stone-500 bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-left">
            💡 <strong>Instrucciones para el alumno:</strong> Puedes hacer clic sobre cualquier pregunta o sobre cada opción A, B, C, D de forma individual para ver su traducción al armenio. Para seleccionar la respuesta definitiva pulsa en el botón redondo con la letra.
          </div>

          <button
            onClick={handleStartExam}
            className="px-8 py-3.5 bg-gradient-to-r from-rose-800 to-rose-700 hover:from-rose-900 hover:to-rose-800 text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer text-base"
          >
            Comenzar el examen ahora (Սկսել քննությունը)
          </button>
        </div>
      )}

      {/* DURING EXAM: Interactive Runner */}
      {isExamInProgress && !isSubmitted && (
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-xs space-y-6">
          {/* Header Bar with Timer & Progress */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-950 rounded-full border border-amber-200">
                Pregunta {currentQuestionIndex + 1} de {currentExam.questions.length}
              </span>
              <span className="text-xs text-stone-500">
                Respondidas: {Object.keys(selectedAnswers).length} / {currentExam.questions.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-900 rounded-xl font-mono text-sm font-bold border border-rose-200">
                <Clock className="w-4 h-4 text-rose-700" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>

              <button
                onClick={handleSubmitExam}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs cursor-pointer shadow-xs"
              >
                Finalizar examen
              </button>
            </div>
          </div>

          {/* Current Question */}
          {(() => {
            const currentQ = currentExam.questions[currentQuestionIndex];
            const userChoice = selectedAnswers[currentQ.id];

            return (
              <div className="space-y-6">
                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                    {currentQ.originTopic}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-stone-900">
                    <InteractiveBilingual text={currentQ.question} showSpeaker />
                  </h3>
                </div>

                <div className="space-y-3">
                  {currentQ.options.map((opt) => {
                    const isSelected = userChoice === opt.id;
                    return (
                      <div
                        key={opt.id}
                        className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50/70 ring-2 ring-amber-500/20'
                            : 'border-stone-200 bg-white hover:border-amber-300'
                        }`}
                      >
                        {/* Selector Radio button */}
                        <button
                          type="button"
                          onClick={() => handleSelectOption(currentQ.id, opt.id)}
                          className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center font-bold text-xs transition cursor-pointer mt-0.5 ${
                            isSelected
                              ? 'bg-amber-600 text-white shadow-xs'
                              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                          }`}
                        >
                          {opt.id}
                        </button>

                        {/* Text with independent click-to-translate that DOES NOT select answer */}
                        <div className="flex-1">
                          <InteractiveBilingual text={opt.text} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Nav buttons between questions */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                    className="px-4 py-2 border border-stone-300 text-stone-700 text-xs font-semibold rounded-xl hover:bg-stone-50 disabled:opacity-40 cursor-pointer"
                  >
                    Anterior
                  </button>

                  <div className="flex gap-1.5 overflow-x-auto max-w-[280px] sm:max-w-md py-1">
                    {currentExam.questions.map((q, idx) => (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold shrink-0 cursor-pointer ${
                          idx === currentQuestionIndex
                            ? 'bg-rose-900 text-white'
                            : selectedAnswers[q.id]
                            ? 'bg-amber-200 text-amber-950'
                            : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>

                  {currentQuestionIndex < currentExam.questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                      className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-xl hover:bg-stone-800 cursor-pointer"
                    >
                      Siguiente
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitExam}
                      className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-xl hover:bg-emerald-800 cursor-pointer shadow-xs"
                    >
                      Entregar examen
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* AFTER SUBMISSION: RESULTS DASHBOARD */}
      {isSubmitted && (
        <div className="space-y-6">
          {/* Grade Certificate Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm text-center space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Resultado Oficial del Examen</span>
            </div>

            <h2 className="text-3xl font-extrabold text-stone-900">
              Calificación Final: {scoreOutOf10} / 10
            </h2>

            <div className="inline-block px-5 py-2 rounded-xl text-lg font-black tracking-wide">
              <span className={`px-4 py-1.5 rounded-xl ${gradeInfo.color}`}>
                {gradeInfo.label}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto text-xs py-3">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-stone-500 font-semibold block">Aciertos</span>
                <span className="text-emerald-700 font-extrabold text-lg mt-0.5 block">
                  {correctCount}
                </span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-stone-500 font-semibold block">Fallos</span>
                <span className="text-rose-700 font-extrabold text-lg mt-0.5 block">
                  {currentExam.questions.length - correctCount}
                </span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-stone-500 font-semibold block">Porcentaje</span>
                <span className="text-stone-900 font-extrabold text-lg mt-0.5 block">
                  {percentage}%
                </span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="text-stone-500 font-semibold block">Total</span>
                <span className="text-stone-900 font-extrabold text-lg mt-0.5 block">
                  {currentExam.questions.length}
                </span>
              </div>
            </div>

            {/* Error bank button */}
            {failedQuestionIds.length > 0 && onPracticeErrors && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onPracticeErrors(failedQuestionIds)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-800 to-amber-700 hover:from-rose-900 hover:to-amber-800 text-white font-extrabold text-sm shadow-md transition cursor-pointer inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Practicar mis errores ({failedQuestionIds.length})</span>
                  <span className="font-armenian opacity-90">(Կրկնել իմ սխալները)</span>
                </button>
              </div>
            )}
          </div>

          {/* Detailed Question Review */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-xs space-y-6">
            <h3 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>Revisión detallada de todas las preguntas</span>
              <button
                onClick={handleStartExam}
                className="text-xs font-semibold text-rose-800 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Repetir este examen</span>
              </button>
            </h3>

            <div className="space-y-6">
              {currentExam.questions.map((q, idx) => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.correctOption;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border space-y-3.5 ${
                      isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-stone-600">
                        Pregunta {idx + 1} • {q.originTopic}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Acertada' : 'Fallada'}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-stone-900">
                      <InteractiveBilingual text={q.question} showSpeaker />
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isCorrectOpt = opt.id === q.correctOption;
                        const wasSelected = userChoice === opt.id;

                        let style = 'border-stone-200 bg-white';
                        if (isCorrectOpt) {
                          style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (wasSelected && !isCorrect) {
                          style = 'border-rose-500 bg-rose-50 text-rose-950 font-medium';
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${style}`}
                          >
                            <span
                              className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-[11px] ${
                                isCorrectOpt
                                  ? 'bg-emerald-600 text-white'
                                  : wasSelected
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-stone-100 text-stone-600'
                              }`}
                            >
                              {opt.id}
                            </span>
                            <div className="flex-1">
                              <InteractiveBilingual text={opt.text} />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bilingual Explanation */}
                    <div className="p-3 bg-white/90 rounded-lg border border-stone-200 text-xs space-y-1 mt-2">
                      <span className="font-bold text-amber-900 block">Explicación didáctica:</span>
                      <InteractiveBilingual text={q.explanation} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
