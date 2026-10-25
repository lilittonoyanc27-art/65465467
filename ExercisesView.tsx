import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  Filter,
  Check,
  Eye,
  EyeOff,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { exercisesList } from './exercisesData.ts';
import { Exercise, ExerciseType, Difficulty, TestOption } from './types.ts';
import { InteractiveBilingual } from './InteractiveBilingual.tsx';
import { useTranslation } from './TranslationContext.tsx';

interface ExercisesViewProps {
  initialTopicId?: string;
  onRecordAnswer?: (exerciseId: string, topicId: string, isCorrect: boolean) => void;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  initialTopicId,
  onRecordAnswer,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopicId || 'todos');
  const [selectedType, setSelectedType] = useState<string>('todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('todos');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Exercise interactive state
  const [userSelectedAnswer, setUserSelectedAnswer] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // States for matching pairs modality
  const [selectedMatchLeft, setSelectedMatchLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<{ [leftId: string]: string }>({});

  // State for open ended / transformation student text
  const [studentText, setStudentText] = useState<string>('');
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);

  // State for classification
  const [classifiedItems, setClassifiedItems] = useState<{ [itemId: string]: string }>({});

  const { showAll, toggleShowAll } = useTranslation();

  // Filter exercises
  const filteredExercises = exercisesList.filter((ex) => {
    const matchesTopic = selectedTopic === 'todos' || ex.topicId === selectedTopic;
    const matchesType = selectedType === 'todos' || ex.type === selectedType;
    const matchesDiff = selectedDifficulty === 'todos' || ex.difficulty === selectedDifficulty;
    return matchesTopic && matchesType && matchesDiff;
  });

  const currentExercise: Exercise | undefined = filteredExercises[currentIndex] || filteredExercises[0];

  useEffect(() => {
    if (initialTopicId) {
      setSelectedTopic(initialTopicId);
      setCurrentIndex(0);
    }
  }, [initialTopicId]);

  // Reset exercise state when moving to a new exercise
  const resetExerciseState = () => {
    setUserSelectedAnswer('');
    setIsChecked(false);
    setIsCorrect(null);
    setSelectedMatchLeft(null);
    setMatchedPairs({});
    setStudentText('');
    setShowModelAnswer(false);
    setClassifiedItems({});
  };

  const handleNext = () => {
    if (currentIndex < filteredExercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetExerciseState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      resetExerciseState();
    }
  };

  // Check answer logic
  const handleCheckAnswer = () => {
    if (!currentExercise) return;

    let correct = false;

    if (currentExercise.type === 'test') {
      correct = userSelectedAnswer === currentExercise.correctOption;
    } else if (currentExercise.type === 'verdadero_falso') {
      const boolVal = userSelectedAnswer === 'verdadero';
      correct = boolVal === currentExercise.isTrue;
    } else if (currentExercise.type === 'completa') {
      correct = userSelectedAnswer === currentExercise.correctAnswer;
    } else if (currentExercise.type === 'encuentra_error') {
      correct = parseInt(userSelectedAnswer, 10) === currentExercise.correctIndex;
    } else if (currentExercise.type === 'identifica_figura') {
      correct = userSelectedAnswer === currentExercise.correctFigure;
    } else if (currentExercise.type === 'no_confundas') {
      correct = parseInt(userSelectedAnswer, 10) === currentExercise.correctIndex;
    } else if (currentExercise.type === 'justifica') {
      correct = parseInt(userSelectedAnswer, 10) === currentExercise.correctIndex;
    } else if (currentExercise.type === 'relaciona') {
      const allMatched = currentExercise.pairs.every(
        (p) => matchedPairs[p.left.es] === p.right.es
      );
      correct = allMatched;
    } else if (currentExercise.type === 'clasificacion') {
      const allCorrect = currentExercise.items.every(
        (item) => classifiedItems[item.id] === item.correctCategoryId
      );
      correct = allCorrect;
    } else if (currentExercise.type === 'transforma' || currentExercise.type === 'pregunta_abierta') {
      correct = studentText.trim().length >= 15;
      setShowModelAnswer(true);
    } else if (currentExercise.type === 'analiza_metafora') {
      correct = userSelectedAnswer === currentExercise.structureType;
    }

    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // silent fallback
      }
    }

    // Save answer to parent and local history
    if (onRecordAnswer) {
      onRecordAnswer(currentExercise.id, currentExercise.topicId, correct);
    }

    try {
      const historyKey = 'eso_lengua_exercise_history';
      const existing = JSON.parse(localStorage.getItem(historyKey) || '[]');
      const updated = existing.filter((item: { exerciseId: string }) => item.exerciseId !== currentExercise.id);
      updated.push({
        exerciseId: currentExercise.id,
        topicId: currentExercise.topicId,
        isCorrect: correct,
        timestamp: Date.now(),
      });
      localStorage.setItem(historyKey, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  if (!currentExercise) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-xs border border-stone-200">
        <HelpCircle className="w-12 h-12 text-stone-300 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-stone-800">No se encontraron actividades con estos filtros</h3>
        <p className="text-stone-500 text-sm mt-1">Prueba a seleccionar «Todos» en los filtros superiores.</p>
        <button
          onClick={() => {
            setSelectedTopic('todos');
            setSelectedType('todos');
            setSelectedDifficulty('todos');
          }}
          className="mt-4 px-4 py-2 bg-rose-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
        >
          Restablecer filtros
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Banner & Filters */}
      <div className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-900 text-white rounded-2xl p-6 shadow-md border border-rose-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-amber-400 text-rose-950 font-bold text-xs uppercase tracking-wider rounded-md mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Banco de Ejercicios • 250+ Actividades</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              ✏️ Ejercicios y Práctica — Վարժություններ
            </h1>
            <p className="text-rose-100 text-sm mt-1 max-w-2xl font-normal leading-relaxed">
              Practica de forma independiente sin ver las respuestas de antemano. Recuerda que puedes traducir cada pregunta y cada opción de forma aislada al hacer clic.
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

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-rose-800/60 text-xs">
          {/* Topic Filter */}
          <div>
            <label className="block text-rose-200 font-semibold mb-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>Tema:</span>
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setCurrentIndex(0);
                resetExerciseState();
              }}
              className="w-full bg-rose-950/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-400 cursor-pointer"
            >
              <option value="todos">Todos los temas (Բոլոր թեմաները)</option>
              <option value="tema-1">Tema 1: Literatura popular y culta</option>
              <option value="tema-2">Tema 2: El lenguaje literario</option>
              <option value="tema-3">Tema 3: La prosa y el verso</option>
              <option value="tema-4">Tema 4: Cuento, leyenda, mito y romance</option>
              <option value="figuras">Figuras Literarias (Գեղարվեստական միջոցներ)</option>
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-rose-200 font-semibold mb-1">Modalidad de actividad:</label>
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentIndex(0);
                resetExerciseState();
              }}
              className="w-full bg-rose-950/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-400 cursor-pointer"
            >
              <option value="todos">Todas las modalidades (12)</option>
              <option value="test">Test con 4 opciones (A, B, C, D)</option>
              <option value="verdadero_falso">Verdadero o Falso</option>
              <option value="completa">Completa el texto</option>
              <option value="relaciona">Relaciona las columnas</option>
              <option value="encuentra_error">Encuentra el error</option>
              <option value="identifica_figura">Identifica la figura</option>
              <option value="no_confundas">No confundas (Comparativo)</option>
              <option value="analiza_metafora">Analiza la metáfora (A y B)</option>
              <option value="justifica">Justifica tu respuesta</option>
              <option value="transforma">Transforma las frases</option>
              <option value="clasificacion">Clasificación</option>
              <option value="pregunta_abierta">Preguntas abiertas</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-rose-200 font-semibold mb-1">Dificultad:</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => {
                setSelectedDifficulty(e.target.value);
                setCurrentIndex(0);
                resetExerciseState();
              }}
              className="w-full bg-rose-950/70 border border-white/20 rounded-xl px-3 py-2 text-white focus:outline-hidden focus:border-amber-400 cursor-pointer"
            >
              <option value="todos">Todos los niveles (Բոլոր մակարդակները)</option>
              <option value="básico">Básico • Հիմնական</option>
              <option value="intermedio">Intermedio • Միջին</option>
              <option value="examen">Nivel Examen ESO • Քննական</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Exercise Card */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-xs space-y-6">
        {/* Navigation & Counter Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
              Actividad {currentIndex + 1} de {filteredExercises.length}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-600 uppercase">
              {currentExercise.type.replace('_', ' ')}
            </span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                currentExercise.difficulty === 'básico'
                  ? 'bg-emerald-100 text-emerald-800'
                  : currentExercise.difficulty === 'intermedio'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-rose-100 text-rose-800'
              }`}
            >
              {currentExercise.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-lg border border-stone-200 hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
              title="Actividad anterior"
            >
              <ChevronLeft className="w-4 h-4 text-stone-700" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === filteredExercises.length - 1}
              className="p-2 rounded-lg border border-stone-200 hover:bg-stone-50 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
              title="Actividad siguiente"
            >
              <ChevronRight className="w-4 h-4 text-stone-700" />
            </button>
          </div>
        </div>

        {/* Instruction with click to translate */}
        <div className="text-xs md:text-sm font-semibold text-rose-900 bg-rose-50/70 p-3 rounded-xl border border-rose-200/70">
          <InteractiveBilingual text={currentExercise.instruction} />
        </div>

        {/* ============================================================ */}
        {/* RENDER ACCORDING TO EXERCISE TYPE */}
        {/* ============================================================ */}

        {/* 1. TEST CON 4 OPCIONES (A, B, C, D) */}
        {currentExercise.type === 'test' && (
          <div className="space-y-4">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <h3 className="text-base md:text-lg font-bold text-stone-900">
                <InteractiveBilingual text={currentExercise.question} showSpeaker />
              </h3>
            </div>

            <div className="space-y-3">
              {currentExercise.options.map((opt: TestOption) => {
                const isSelected = userSelectedAnswer === opt.id;
                let optionStyle = 'border-stone-200 hover:border-amber-400 bg-white';

                if (isChecked) {
                  if (opt.id === currentExercise.correctOption) {
                    optionStyle = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-rose-500 bg-rose-50/70 text-rose-950';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-amber-600 bg-amber-50/60 shadow-xs ring-2 ring-amber-500/20';
                }

                return (
                  <div
                    key={opt.id}
                    className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${optionStyle}`}
                  >
                    {/* Separate Answer Selector Radio Button */}
                    <button
                      type="button"
                      disabled={isChecked}
                      onClick={() => setUserSelectedAnswer(opt.id)}
                      className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center font-bold text-xs transition cursor-pointer mt-0.5 ${
                        isSelected
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                      title={`Seleccionar opción ${opt.id}`}
                    >
                      {opt.id}
                    </button>

                    {/* Option Text with INDEPENDENT translation that DOES NOT select the answer */}
                    <div className="flex-1">
                      <InteractiveBilingual text={opt.text} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. VERDADERO O FALSO */}
        {currentExercise.type === 'verdadero_falso' && (
          <div className="space-y-5">
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                Afirmación a evaluar:
              </div>
              <InteractiveBilingual
                text={currentExercise.statement}
                spanishClassName="text-base md:text-lg font-medium text-stone-900"
                showSpeaker
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                disabled={isChecked}
                onClick={() => setUserSelectedAnswer('verdadero')}
                className={`flex-1 py-3.5 px-4 rounded-xl border font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 ${
                  userSelectedAnswer === 'verdadero'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-white border-stone-200 hover:bg-emerald-50 text-stone-800'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>Verdadero (Ճիշտ է)</span>
              </button>

              <button
                type="button"
                disabled={isChecked}
                onClick={() => setUserSelectedAnswer('falso')}
                className={`flex-1 py-3.5 px-4 rounded-xl border font-bold text-sm transition cursor-pointer flex items-center justify-center gap-2 ${
                  userSelectedAnswer === 'falso'
                    ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                    : 'bg-white border-stone-200 hover:bg-rose-50 text-stone-800'
                }`}
              >
                <XCircle className="w-4 h-4" />
                <span>Falso (Սխալ է)</span>
              </button>
            </div>
          </div>
        )}

        {/* 3. COMPLETA EL TEXTO */}
        {currentExercise.type === 'completa' && (
          <div className="space-y-5">
            <div className="p-5 bg-amber-50/60 rounded-xl border border-amber-200 text-base md:text-lg text-stone-900 leading-relaxed font-medium">
              <span>{currentExercise.sentenceBefore.es} </span>
              <span className="px-3 py-1 bg-amber-200 text-amber-950 font-bold rounded-lg border border-amber-300 inline-block my-1">
                {userSelectedAnswer || currentExercise.blankPlaceholder}
              </span>
              <span> {currentExercise.sentenceAfter.es}</span>

              <div className="mt-3 pt-3 border-t border-amber-200/60">
                <InteractiveBilingual
                  text={{
                    es: 'Traducir oración completa al armenio',
                    hy: `${currentExercise.sentenceBefore.hy} [ ... ] ${currentExercise.sentenceAfter.hy}`,
                  }}
                  spanishClassName="text-xs text-amber-800 font-bold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-500 uppercase">
                Selecciona la palabra o concepto para rellenar el espacio:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentExercise.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={isChecked}
                    onClick={() => setUserSelectedAnswer(opt.es)}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      userSelectedAnswer === opt.es
                        ? 'bg-amber-600 text-white font-bold border-amber-600'
                        : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <InteractiveBilingual
                      text={opt}
                      spanishClassName={userSelectedAnswer === opt.es ? 'text-white' : ''}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. RELACIONA LAS COLUMNAS */}
        {currentExercise.type === 'relaciona' && (
          <div className="space-y-4">
            <div className="text-xs text-stone-500 font-medium">
              Haz clic en un elemento de la izquierda y luego en su pareja correspondiente de la derecha:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-2">
                <div className="font-bold text-xs uppercase text-rose-900 mb-1">Concepto / Figura</div>
                {currentExercise.pairs.map((pair) => {
                  const isMatched = !!matchedPairs[pair.left.es];
                  const isCurrent = selectedMatchLeft === pair.left.es;
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isChecked}
                      onClick={() => setSelectedMatchLeft(pair.left.es)}
                      className={`w-full text-left p-3 rounded-xl border text-xs md:text-sm transition cursor-pointer ${
                        isCurrent
                          ? 'border-amber-500 bg-amber-50 font-bold ring-2 ring-amber-400'
                          : isMatched
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-950 font-semibold'
                          : 'border-stone-200 bg-white hover:bg-stone-50'
                      }`}
                    >
                      <InteractiveBilingual text={pair.left} />
                      {isMatched && (
                        <div className="text-[11px] text-emerald-700 mt-1 font-sans">
                          ➜ {matchedPairs[pair.left.es]}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <div className="font-bold text-xs uppercase text-amber-900 mb-1">Definición / Ejemplo</div>
                {currentExercise.pairs.map((pair) => {
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={isChecked || !selectedMatchLeft}
                      onClick={() => {
                        if (selectedMatchLeft) {
                          setMatchedPairs((prev) => ({
                            ...prev,
                            [selectedMatchLeft]: pair.right.es,
                          }));
                          setSelectedMatchLeft(null);
                        }
                      }}
                      className="w-full text-left p-3 rounded-xl border border-stone-200 bg-white hover:border-amber-400 hover:bg-stone-50 text-xs md:text-sm transition cursor-pointer"
                    >
                      <InteractiveBilingual text={pair.right} />
                    </button>
                  );
                })}
              </div>
            </div>

            {Object.keys(matchedPairs).length > 0 && !isChecked && (
              <button
                type="button"
                onClick={() => setMatchedPairs({})}
                className="text-xs text-rose-800 hover:underline cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Restablecer emparejamientos</span>
              </button>
            )}
          </div>
        )}

        {/* 5. ENCUENTRA EL ERROR */}
        {currentExercise.type === 'encuentra_error' && (
          <div className="space-y-5">
            <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
              <div className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-1">
                ⚠️ Texto que contiene un error conceptual:
              </div>
              <InteractiveBilingual
                text={currentExercise.erroneousStatement}
                spanishClassName="text-base text-rose-950 font-medium"
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-500 uppercase">
                Selecciona la corrección adecuada:
              </div>
              <div className="space-y-2">
                {currentExercise.correctionOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={isChecked}
                    onClick={() => setUserSelectedAnswer(i.toString())}
                    className={`w-full p-3.5 rounded-xl border text-left transition cursor-pointer ${
                      userSelectedAnswer === i.toString()
                        ? 'border-amber-600 bg-amber-50/70 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <InteractiveBilingual text={opt} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 6. IDENTIFICA LA FIGURA */}
        {currentExercise.type === 'identifica_figura' && (
          <div className="space-y-5">
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-serif italic text-base md:text-lg text-rose-950 border-l-3 border-rose-800 pl-4 py-1">
                <InteractiveBilingual text={currentExercise.textSnippet} showSpeaker />
              </div>
              {currentExercise.authorOrSource && (
                <div className="text-xs text-stone-500 font-semibold mt-2 pl-4">
                  Fuente: {currentExercise.authorOrSource}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-500 uppercase">
                ¿Qué figura retórica predomina en este fragmento?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentExercise.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={isChecked}
                    onClick={() => setUserSelectedAnswer(opt.es)}
                    className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                      userSelectedAnswer === opt.es
                        ? 'border-amber-600 bg-amber-50/80 shadow-xs ring-2 ring-amber-500/20 font-bold'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <InteractiveBilingual text={opt} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 7. NO CONFUNDAS */}
        {currentExercise.type === 'no_confundas' && (
          <div className="space-y-5">
            <div className="p-4 bg-orange-50/70 rounded-xl border border-orange-200">
              <div className="text-xs font-bold text-orange-900 uppercase tracking-wider mb-2">
                Dilema comparativo: {currentExercise.concept1} vs {currentExercise.concept2}
              </div>
              <InteractiveBilingual
                text={currentExercise.scenario}
                spanishClassName="text-sm md:text-base text-stone-900 font-medium"
              />
            </div>

            <div className="space-y-2">
              <InteractiveBilingual
                text={currentExercise.question}
                spanishClassName="font-bold text-stone-900 text-sm md:text-base"
              />
              <div className="space-y-2 pt-2">
                {currentExercise.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={isChecked}
                    onClick={() => setUserSelectedAnswer(i.toString())}
                    className={`w-full p-3.5 rounded-xl border text-left transition cursor-pointer ${
                      userSelectedAnswer === i.toString()
                        ? 'border-amber-600 bg-amber-50/70 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <InteractiveBilingual text={opt} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 8. ANALIZA LA METÁFORA */}
        {currentExercise.type === 'analiza_metafora' && (
          <div className="space-y-5">
            <div className="p-5 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border border-amber-300">
              <div className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2">
                Expresión metafórica a analizar:
              </div>
              <div className="font-serif italic text-lg text-rose-950 font-bold mb-3">
                <InteractiveBilingual text={currentExercise.expression} showSpeaker />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white/80 p-3 rounded-lg border border-amber-200">
                <div>
                  <span className="font-bold text-rose-900 block">Término Real A:</span>
                  <InteractiveBilingual text={currentExercise.realElementA} />
                </div>
                <div>
                  <span className="font-bold text-amber-900 block">Término Figurado B:</span>
                  <InteractiveBilingual text={currentExercise.figurativeElementB} />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-500 uppercase">
                ¿Qué estructura metafórica presenta?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['A es B', 'B', 'B de A'] as const).map((struct) => (
                  <button
                    key={struct}
                    type="button"
                    disabled={isChecked}
                    onClick={() => setUserSelectedAnswer(struct)}
                    className={`p-3.5 rounded-xl border text-center transition cursor-pointer font-bold ${
                      userSelectedAnswer === struct
                        ? 'border-amber-600 bg-amber-600 text-white shadow-xs'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    {struct}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 9. JUSTIFICA TU RESPUESTA */}
        {currentExercise.type === 'justifica' && (
          <div className="space-y-5">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="font-serif italic text-sm md:text-base text-rose-950 border-l-2 border-rose-800 pl-3">
                <InteractiveBilingual text={currentExercise.statement} showSpeaker />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-bold text-stone-900">
                <InteractiveBilingual text={currentExercise.leadIn} inline />
              </div>
              <div className="space-y-2 pt-1">
                {currentExercise.options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={isChecked}
                    onClick={() => setUserSelectedAnswer(i.toString())}
                    className={`w-full p-3.5 rounded-xl border text-left transition cursor-pointer ${
                      userSelectedAnswer === i.toString()
                        ? 'border-amber-600 bg-amber-50/70 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-800'
                    }`}
                  >
                    <InteractiveBilingual text={opt} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 10. TRANSFORMA LAS FRASES & 11. PREGUNTAS ABIERTAS */}
        {(currentExercise.type === 'transforma' || currentExercise.type === 'pregunta_abierta') && (
          <div className="space-y-5">
            {currentExercise.type === 'transforma' ? (
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <InteractiveBilingual text={currentExercise.originalSentence} showSpeaker />
              </div>
            ) : (
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <InteractiveBilingual text={currentExercise.question} showSpeaker />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">
                Escribe tu propuesta o respuesta en español:
              </label>
              <textarea
                value={studentText}
                onChange={(e) => setStudentText(e.target.value)}
                rows={4}
                placeholder="Escribe tu redacción aquí..."
                className="w-full p-3.5 rounded-xl border border-stone-300 focus:outline-hidden focus:border-amber-500 text-sm leading-relaxed"
              />
            </div>

            {showModelAnswer && (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 space-y-2">
                <div className="text-xs font-bold text-emerald-900 uppercase">
                  ⭐ Respuesta modelo / Օրինակելի պատասխան:
                </div>
                <InteractiveBilingual
                  text={currentExercise.modelAnswer}
                  spanishClassName="text-emerald-950 font-serif italic text-base"
                />
              </div>
            )}
          </div>
        )}

        {/* 12. CLASIFICACIÓN */}
        {currentExercise.type === 'clasificacion' && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentExercise.categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col min-h-[160px]"
                >
                  <div className="font-bold text-xs uppercase text-rose-900 border-b border-stone-200 pb-2 mb-3">
                    <InteractiveBilingual text={cat.name} />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {currentExercise.items
                      .filter((item) => classifiedItems[item.id] === cat.id)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="p-2 bg-white rounded-lg border border-stone-300 text-xs shadow-2xs font-medium"
                        >
                          <InteractiveBilingual text={item.text} />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-xs font-bold text-amber-950 mb-2">
                Elementos pendientes de asignar:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentExercise.items
                  .filter((item) => !classifiedItems[item.id])
                  .map((item) => (
                    <div key={item.id} className="p-2 bg-white rounded-lg border border-stone-200 text-xs flex items-center gap-2">
                      <InteractiveBilingual text={item.text} />
                      <select
                        onChange={(e) => {
                          if (e.target.value) {
                            setClassifiedItems((prev) => ({
                              ...prev,
                              [item.id]: e.target.value,
                            }));
                          }
                        }}
                        className="text-[11px] bg-stone-100 border border-stone-300 rounded px-1.5 py-0.5 cursor-pointer"
                      >
                        <option value="">Asignar a...</option>
                        {currentExercise.categories.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name.es}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* CHECK & FEEDBACK SECTION */}
        {/* ============================================================ */}
        <div className="pt-4 border-t border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {!isChecked ? (
              <button
                type="button"
                onClick={handleCheckAnswer}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-800 to-rose-700 hover:from-rose-900 hover:to-rose-800 text-white font-bold text-sm shadow-sm transition cursor-pointer flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Comprobar respuesta</span>
                <span className="font-armenian text-xs opacity-85">(Ստուգել)</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={resetExerciseState}
                className="px-5 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reintentar (Կրկնել)</span>
              </button>
            )}

            {isChecked && (
              <div
                className={`flex items-center gap-2 font-bold text-sm px-3.5 py-2 rounded-xl ${
                  isCorrect
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    : 'bg-rose-100 text-rose-900 border border-rose-200'
                }`}
              >
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>¡Correcto! • Ճիշտ է։</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-600" />
                    <span>Incorrecto • Սխալ է։</span>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleNext}
              disabled={currentIndex === filteredExercises.length - 1}
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
            >
              <span>Siguiente actividad</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bilingual Explanation on Check */}
        {isChecked && currentExercise.explanation && (
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs md:text-sm space-y-1 mt-4">
            <div className="font-bold text-amber-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Explicación didáctica • Ուսուցողական բացատրություն:</span>
            </div>
            <InteractiveBilingual text={currentExercise.explanation} />
          </div>
        )}
      </div>
    </div>
  );
};
