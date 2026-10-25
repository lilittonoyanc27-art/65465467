import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Edit3,
  Feather,
  GraduationCap,
  AlertCircle,
  TrendingUp,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Layers,
  Languages,
} from 'lucide-react';
import { TranslationProvider, useTranslation } from './TranslationContext.tsx';
import { TheoryView } from './TheoryView.tsx';
import { FiguresView } from './FiguresView.tsx';
import { ExercisesView } from './ExercisesView.tsx';
import { ReadingView } from './ReadingView.tsx';
import { ExamSimulator } from './ExamSimulator.tsx';
import { ProgressErrorsView } from './ProgressErrorsView.tsx';

type TabType =
  | 'teoria'
  | 'figuras'
  | 'ejercicios'
  | 'lecturas'
  | 'examenes'
  | 'errores'
  | 'progreso';

const MainAppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('teoria');
  const [exerciseTopicFilter, setExerciseTopicFilter] = useState<string>('todos');

  const {
    showAll,
    toggleShowAll,
    audioVoiceFeedback,
    setAudioVoiceFeedback,
  } = useTranslation();

  const handleJumpToExercises = (topicId: string) => {
    setExerciseTopicFilter(topicId);
    setActiveTab('ejercicios');
  };

  const handlePracticeErrors = () => {
    setActiveTab('errores');
  };

  const navItems = [
    {
      id: 'teoria',
      labelEs: 'Teoría',
      labelHy: 'Տեսություն',
      icon: BookOpen,
      badge: '4 Temas',
    },
    {
      id: 'figuras',
      labelEs: 'Figuras Literarias',
      labelHy: 'Գեղարվեստական միջոցներ',
      icon: Sparkles,
      badge: '11 Figuras',
    },
    {
      id: 'ejercicios',
      labelEs: 'Ejercicios',
      labelHy: 'Վարժություններ',
      icon: Edit3,
      badge: '250+ Actividades',
    },
    {
      id: 'lecturas',
      labelEs: 'Comprensión Lectora',
      labelHy: 'Ընթերցանություն',
      icon: Feather,
      badge: '10 Textos',
    },
    {
      id: 'examenes',
      labelEs: 'Exámenes',
      labelHy: 'Քննություններ',
      icon: GraduationCap,
      badge: 'Simulacros',
    },
    {
      id: 'errores',
      labelEs: 'Mis Errores',
      labelHy: 'Իմ սխալները',
      icon: AlertCircle,
      badge: 'Refuerzo',
    },
    {
      id: 'progreso',
      labelEs: 'Mi Progreso',
      labelHy: 'Իմ առաջընթացը',
      icon: TrendingUp,
      badge: 'Notas /10',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 flex flex-col font-sans selection:bg-rose-200 selection:text-rose-950">
      {/* Top Academic Header */}
      <header className="bg-gradient-to-r from-rose-950 via-rose-900 to-amber-950 text-white shadow-lg border-b border-rose-900 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo and Academic Crest */}
            <div
              className="flex items-center gap-3.5 cursor-pointer select-none"
              onClick={() => setActiveTab('teoria')}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-rose-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-amber-400 text-lg tracking-wider">
                    1.º
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-lg md:text-xl tracking-wide text-white">
                    Lengua Castellana y Literatura
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rounded-md bg-amber-400 text-rose-950">
                    1.º ESO
                  </span>
                </div>
                <div className="text-xs text-amber-200/90 font-armenian font-medium tracking-wide">
                  Իսպաներեն լեզու և գրականություն — Ինտերակտիվ դասագիրք և քննական թրեյներ
                </div>
              </div>
            </div>

            {/* Quick Actions (Audio, Global Translation, Academic Info) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Audio toggle button */}
              <button
                type="button"
                onClick={() => setAudioVoiceFeedback((prev) => !prev)}
                className={`p-2 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  audioVoiceFeedback
                    ? 'bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 border border-amber-400/30'
                    : 'bg-white/10 text-stone-300 hover:bg-white/20'
                }`}
                title={
                  audioVoiceFeedback
                    ? 'Voz de pronunciación en español activada'
                    : 'Voz de pronunciación desactivada'
                }
              >
                {audioVoiceFeedback ? (
                  <Volume2 className="w-4 h-4 text-amber-400" />
                ) : (
                  <VolumeX className="w-4 h-4 text-stone-400" />
                )}
                <span className="hidden md:inline text-xs">Audio es-ES</span>
              </button>

              {/* Global Translation Switch */}
              <button
                type="button"
                onClick={toggleShowAll}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-xs ${
                  showAll
                    ? 'bg-amber-400 text-rose-950 hover:bg-amber-300'
                    : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                }`}
                title="Mostrar u ocultar todas las traducciones en la pantalla actual"
              >
                <Languages className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {showAll ? 'Ocultar traducciones' : 'Traducir todo'}
                </span>
                <span className="font-armenian text-[11px] opacity-90">
                  {showAll ? 'Թաքցնել' : 'Հայ'}
                </span>
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="flex space-x-1 overflow-x-auto pb-2.5 pt-1 custom-scrollbar">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as TabType)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-amber-400 text-rose-950 border-amber-300 shadow-md transform scale-[1.02]'
                      : 'bg-rose-950/40 text-rose-100 hover:bg-rose-900/60 border-white/10 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-rose-950' : 'text-amber-400'}`} />
                  <span>{item.labelEs}</span>
                  <span className={`text-[11px] font-armenian font-normal opacity-85 ${isActive ? 'text-rose-900' : 'text-rose-300'}`}>
                    • {item.labelHy}
                  </span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-rose-950 text-amber-400'
                          : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Page Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'teoria' && (
          <TheoryView onGoToExercises={handleJumpToExercises} />
        )}

        {activeTab === 'figuras' && (
          <FiguresView
            onPracticeFigure={() => {
              setExerciseTopicFilter('figuras');
              setActiveTab('ejercicios');
            }}
          />
        )}

        {activeTab === 'ejercicios' && (
          <ExercisesView initialTopicId={exerciseTopicFilter} />
        )}

        {activeTab === 'lecturas' && <ReadingView />}

        {activeTab === 'examenes' && (
          <ExamSimulator onPracticeErrors={handlePracticeErrors} />
        )}

        {activeTab === 'errores' && <ProgressErrorsView />}

        {activeTab === 'progreso' && <ProgressErrorsView />}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-6 border-t border-stone-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-amber-400">
              Lengua Castellana y Literatura — 1.º de ESO
            </span>
            <span>•</span>
            <span className="font-armenian">Իսպաներենի և գրականության ուսումնական ծրագիր</span>
          </div>

          <div className="text-stone-500">
            Plataforma interactiva bilingüe para estudiantes en España
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <TranslationProvider>
      <MainAppContent />
    </TranslationProvider>
  );
}
