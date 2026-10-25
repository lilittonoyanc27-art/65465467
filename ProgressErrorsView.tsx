import React, { useState, useEffect } from 'react';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Award,
  AlertCircle,
  HelpCircle,
  Trash2,
} from 'lucide-react';
import { exercisesList } from './exercisesData.ts';
import { examBlueprints } from './examsData.ts';
import { Exercise, ExamAttempt, ExamQuestion } from './types.ts';
import { InteractiveBilingual } from './InteractiveBilingual.tsx';
import { useTranslation } from './TranslationContext.tsx';

interface ProgressErrorsViewProps {
  onGoToExercise?: (exerciseId: string) => void;
}

export const ProgressErrorsView: React.FC<ProgressErrorsViewProps> = () => {
  const [failedQuestionIds, setFailedQuestionIds] = useState<string[]>([]);
  const [examAttempts, setExamAttempts] = useState<ExamAttempt[]>([]);
  const [activeTab, setActiveTab] = useState<'errores' | 'progreso'>('errores');
  const [retryingId, setRetryingId] = useState<string | null>(null);
  const [retryAnswer, setRetryAnswer] = useState<string>('');
  const [retryResult, setRetryResult] = useState<boolean | null>(null);

  const { showAll, toggleShowAll } = useTranslation();

  // Load from localStorage
  const loadData = () => {
    try {
      const failed = JSON.parse(localStorage.getItem('eso_lengua_failed_questions') || '[]');
      setFailedQuestionIds(failed);

      const attempts = JSON.parse(localStorage.getItem('eso_lengua_exam_attempts') || '[]');
      setExamAttempts(attempts);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleClearErrors = () => {
    try {
      localStorage.removeItem('eso_lengua_failed_questions');
      setFailedQuestionIds([]);
    } catch {
      // ignore
    }
  };

  const handleClearAll = () => {
    try {
      localStorage.removeItem('eso_lengua_failed_questions');
      localStorage.removeItem('eso_lengua_exam_attempts');
      localStorage.removeItem('eso_lengua_exercise_history');
      setFailedQuestionIds([]);
      setExamAttempts([]);
    } catch {
      // ignore
    }
  };

  // Find all failed exercise objects or exam questions
  const allExamQuestions: ExamQuestion[] = examBlueprints.flatMap((b) => b.questions);

  const failedItems = failedQuestionIds
    .map((id) => {
      const foundExercise = exercisesList.find((ex) => ex.id === id);
      if (foundExercise) {
        return { isExercise: true, data: foundExercise };
      }
      const foundExamQ = allExamQuestions.find((q) => q.id === id);
      if (foundExamQ) {
        return { isExercise: false, data: foundExamQ };
      }
      return null;
    })
    .filter(Boolean);

  const handleTestRetry = (item: { isExercise: boolean; data: Exercise | ExamQuestion }) => {
    let isCorrect = false;
    if (item.isExercise) {
      const ex = item.data as Exercise;
      if (ex.type === 'test') {
        isCorrect = retryAnswer === ex.correctOption;
      }
    } else {
      const q = item.data as ExamQuestion;
      isCorrect = retryAnswer === q.correctOption;
    }

    setRetryResult(isCorrect);

    if (isCorrect) {
      // Remove from failed questions
      const updated = failedQuestionIds.filter((id) => id !== item.data.id);
      setFailedQuestionIds(updated);
      localStorage.setItem('eso_lengua_failed_questions', JSON.stringify(updated));
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 shadow-md border border-rose-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-400 text-rose-950 font-bold text-xs uppercase tracking-wider rounded-md mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Seguimiento y Refuerzo • 1.º ESO</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Mis Errores y Progreso — Իմ սխալները և առաջընթացը
            </h1>
            <p className="text-rose-100 text-sm mt-1 max-w-2xl font-normal leading-relaxed">
              Practica una y otra vez aquellas preguntas donde hayas tenido dudas hasta dominarlas por completo para tus exámenes oficiales.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('errores')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'errores'
                  ? 'bg-amber-400 text-rose-950 shadow-xs'
                  : 'bg-rose-950/40 text-rose-100 hover:bg-rose-900'
              }`}
            >
              Mis Errores ({failedQuestionIds.length})
            </button>
            <button
              onClick={() => setActiveTab('progreso')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'progreso'
                  ? 'bg-amber-400 text-rose-950 shadow-xs'
                  : 'bg-rose-950/40 text-rose-100 hover:bg-rose-900'
              }`}
            >
              Mi Progreso
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: MIS ERRORES */}
      {activeTab === 'errores' && (
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <div>
              <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>Banco de errores personalizados ({failedItems.length})</span>
              </h2>
              <p className="text-xs text-stone-500 mt-0.5">
                Cada pregunta que respondas correctamente se eliminará automáticamente de tu banco de errores.
              </p>
            </div>

            {failedItems.length > 0 && (
              <button
                type="button"
                onClick={handleClearErrors}
                className="text-xs text-rose-700 hover:text-rose-900 flex items-center gap-1 cursor-pointer font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Vaciar banco de errores</span>
              </button>
            )}
          </div>

          {failedItems.length === 0 ? (
            <div className="text-center py-12 bg-emerald-50/50 rounded-2xl border border-emerald-200 p-8">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-emerald-950">
                ¡Enhorabuena! No tienes errores pendientes
              </h3>
              <p className="text-xs md:text-sm text-emerald-800 mt-1 max-w-md mx-auto">
                Has superado todas las preguntas que intentaste o aún no has realizado simulacros de examen. ¡Sigue así!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {failedItems.map((item, idx) => {
                if (!item) return null;
                const isRetryActive = retryingId === item.data.id;

                let questionText = { es: '', hy: '' };
                let options: { id: string; text: { es: string; hy: string } }[] = [];
                let explanation = { es: '', hy: '' };
                let topicName = '';

                if (item.isExercise) {
                  const ex = item.data as Exercise;
                  topicName = ex.topicTitle.es;
                  explanation = ex.explanation;
                  if (ex.type === 'test') {
                    questionText = ex.question;
                    options = ex.options;
                  } else {
                    questionText = ex.instruction;
                  }
                } else {
                  const q = item.data as ExamQuestion;
                  topicName = q.originTopic;
                  questionText = q.question;
                  options = q.options;
                  explanation = q.explanation;
                }

                return (
                  <div
                    key={item.data.id}
                    className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-amber-800">
                        Error {idx + 1} • {topicName}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setRetryingId(isRetryActive ? null : item.data.id);
                          setRetryAnswer('');
                          setRetryResult(null);
                        }}
                        className="px-3 py-1 bg-rose-800 hover:bg-rose-900 text-white rounded-lg text-xs font-semibold cursor-pointer flex items-center gap-1 shadow-2xs"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>{isRetryActive ? 'Cerrar' : 'Reintentar ahora'}</span>
                      </button>
                    </div>

                    <div className="text-sm font-bold text-stone-900">
                      <InteractiveBilingual text={questionText} showSpeaker />
                    </div>

                    {/* Retry Form */}
                    {isRetryActive && options.length > 0 && (
                      <div className="space-y-3 p-4 bg-white rounded-xl border border-amber-300">
                        <div className="text-xs font-bold text-stone-500 uppercase">
                          Elige la opción correcta para corregir tu error:
                        </div>

                        <div className="space-y-2">
                          {options.map((opt) => (
                            <div
                              key={opt.id}
                              className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                                retryAnswer === opt.id
                                  ? 'border-amber-600 bg-amber-50 font-bold'
                                  : 'border-stone-200 bg-white hover:bg-stone-50'
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() => setRetryAnswer(opt.id)}
                                className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-bold text-[11px] cursor-pointer ${
                                  retryAnswer === opt.id
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-stone-100 text-stone-700'
                                }`}
                              >
                                {opt.id}
                              </button>
                              <div className="flex-1">
                                <InteractiveBilingual text={opt.text} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <button
                            type="button"
                            onClick={() => handleTestRetry(item)}
                            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl cursor-pointer"
                          >
                            Comprobar corrección
                          </button>

                          {retryResult !== null && (
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-lg ${
                                retryResult
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {retryResult
                                ? '¡Excelente! Eliminado de errores.'
                                : 'Aún incorrecto. Revisa la explicación.'}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Explanation */}
                    <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs space-y-1">
                      <span className="font-bold text-amber-900 block">Explicación teórica:</span>
                      <InteractiveBilingual text={explanation} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: MI PROGRESO */}
      {activeTab === 'progreso' && (
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <span>Historial de evaluaciones oficiales de 1.º ESO</span>
            </h2>

            {examAttempts.length > 0 && (
              <button
                type="button"
                onClick={handleClearAll}
                className="text-xs text-stone-500 hover:text-stone-700 cursor-pointer"
              >
                Limpiar historial
              </button>
            )}
          </div>

          {examAttempts.length === 0 ? (
            <div className="text-center py-10 bg-stone-50 rounded-2xl border border-stone-200 p-8">
              <HelpCircle className="w-10 h-10 text-stone-400 mx-auto mb-2" />
              <h3 className="text-base font-bold text-stone-800">Aún no has completado ningún examen</h3>
              <p className="text-xs text-stone-500 mt-1">
                Ve a la sección «Exámenes», realiza una prueba oficial y aquí verás tus calificaciones y evolución.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-rose-50 p-4 rounded-xl border border-rose-200">
                  <span className="text-xs font-semibold text-rose-800">Total de exámenes realizados</span>
                  <div className="text-2xl font-black text-rose-950 mt-1">{examAttempts.length}</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <span className="text-xs font-semibold text-amber-800">Nota media obtenida</span>
                  <div className="text-2xl font-black text-amber-950 mt-1">
                    {(
                      examAttempts.reduce((acc, curr) => acc + curr.scoreOutOf10, 0) /
                      examAttempts.length
                    ).toFixed(1)}{' '}
                    / 10
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <span className="text-xs font-semibold text-emerald-800">Tasa de aprobados</span>
                  <div className="text-2xl font-black text-emerald-950 mt-1">
                    {Math.round(
                      (examAttempts.filter((a) => a.scoreOutOf10 >= 5).length /
                        examAttempts.length) *
                        100
                    )}
                    %
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-stone-200 mt-4">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-stone-100 text-stone-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Fecha</th>
                      <th className="p-3">Examen</th>
                      <th className="p-3">Aciertos</th>
                      <th className="p-3">Nota / 10</th>
                      <th className="p-3">Calificación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {examAttempts.map((att) => (
                      <tr key={att.id} className="hover:bg-stone-50">
                        <td className="p-3 text-stone-500 font-medium">{att.date}</td>
                        <td className="p-3 font-semibold text-stone-900">{att.examTitle}</td>
                        <td className="p-3 text-stone-700">
                          {att.correctCount} / {att.totalQuestions}
                        </td>
                        <td className="p-3 font-bold text-stone-900">{att.scoreOutOf10}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded font-bold ${
                              att.scoreOutOf10 >= 9
                                ? 'bg-emerald-100 text-emerald-800'
                                : att.scoreOutOf10 >= 7
                                ? 'bg-blue-100 text-blue-800'
                                : att.scoreOutOf10 >= 5
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {att.scoreOutOf10 >= 5 ? 'Aprobado' : 'Suspenso'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
