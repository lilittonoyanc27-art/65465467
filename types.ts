export interface BilingualText {
  es: string;
  hy: string;
}

export interface ExampleItem {
  quote: BilingualText;
  authorOrSource?: BilingualText;
  explanation: BilingualText;
  highlightWords?: string[];
  literaryFigure?: string;
}

export interface ComparisonItem {
  aspect: BilingualText;
  conceptA: BilingualText;
  conceptB: BilingualText;
}

export interface TableRow {
  col1: BilingualText;
  col2: BilingualText;
  col3?: BilingualText;
  col4?: BilingualText;
  col5?: BilingualText;
}

export interface TheorySection {
  id: string;
  title: BilingualText;
  badge?: BilingualText;
  definition: BilingualText;
  simpleExplanation: BilingualText;
  deepDive: BilingualText[];
  characteristics?: BilingualText[];
  tables?: {
    headers: BilingualText[];
    rows: TableRow[];
  }[];
  examples: ExampleItem[];
  examRules: BilingualText[];
  typicalMistakes: {
    mistake: BilingualText;
    correction: BilingualText;
    why: BilingualText;
  }[];
  summary: BilingualText[];
  subsections?: {
    id: string;
    title: BilingualText;
    content: BilingualText[];
    examples?: ExampleItem[];
  }[];
}

export type FigureLevel = 'fónico' | 'morfosintáctico' | 'semántico';

export interface LiteraryFigure {
  id: string;
  name: BilingualText;
  level: FigureLevel;
  levelName: BilingualText;
  shortDesc: BilingualText;
  fullDefinition: BilingualText;
  howToIdentify: BilingualText[];
  metaphorStructure?: 'A es B' | 'B' | 'B de A' | 'varias';
  examples: {
    quote: BilingualText;
    authorOrContext?: string;
    analysis: BilingualText;
    acousticOrSemanticNote?: BilingualText;
  }[];
  similarFiguresComparison: {
    comparedWith: string;
    difference: BilingualText;
    trick: BilingualText;
  }[];
  examMistakes: BilingualText[];
  practicalRule: BilingualText;
}

export type ExerciseType =
  | 'test'
  | 'verdadero_falso'
  | 'completa'
  | 'relaciona'
  | 'encuentra_error'
  | 'identifica_figura'
  | 'no_confundas'
  | 'transforma'
  | 'analiza_metafora'
  | 'justifica'
  | 'clasificacion'
  | 'pregunta_abierta';

export type Difficulty = 'básico' | 'intermedio' | 'examen';

export interface BaseExercise {
  id: string;
  topicId: string;
  topicTitle: BilingualText;
  type: ExerciseType;
  difficulty: Difficulty;
  instruction: BilingualText;
  explanation: BilingualText;
}

export interface TestOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: BilingualText;
}

export interface TestExercise extends BaseExercise {
  type: 'test';
  question: BilingualText;
  options: TestOption[];
  correctOption: 'A' | 'B' | 'C' | 'D';
}

export interface TrueFalseExercise extends BaseExercise {
  type: 'verdadero_falso';
  statement: BilingualText;
  isTrue: boolean;
  correctionIfFalse?: BilingualText;
}

export interface CompleteExercise extends BaseExercise {
  type: 'completa';
  sentenceBefore: BilingualText;
  blankPlaceholder: string;
  sentenceAfter: BilingualText;
  options: BilingualText[];
  correctAnswer: string;
}

export interface MatchPair {
  id: string;
  left: BilingualText;
  right: BilingualText;
}

export interface MatchExercise extends BaseExercise {
  type: 'relaciona';
  pairs: MatchPair[];
}

export interface FindErrorExercise extends BaseExercise {
  type: 'encuentra_error';
  erroneousStatement: BilingualText;
  highlightedError: BilingualText;
  correctionOptions: BilingualText[];
  correctIndex: number;
}

export interface IdentifyFigureExercise extends BaseExercise {
  type: 'identifica_figura';
  textSnippet: BilingualText;
  authorOrSource?: string;
  options: BilingualText[];
  correctFigure: string;
}

export interface DoNotConfuseExercise extends BaseExercise {
  type: 'no_confundas';
  concept1: string;
  concept2: string;
  scenario: BilingualText;
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
}

export interface TransformExercise extends BaseExercise {
  type: 'transforma';
  originalSentence: BilingualText;
  targetFigure: BilingualText;
  modelAnswer: BilingualText;
  keyElementsRequired: BilingualText[];
}

export interface AnalyzeMetaphorExercise extends BaseExercise {
  type: 'analiza_metafora';
  expression: BilingualText;
  realElementA: BilingualText;
  figurativeElementB: BilingualText;
  structureType: 'A es B' | 'B' | 'B de A';
  whyItIsMetaphor: BilingualText;
}

export interface JustifyExercise extends BaseExercise {
  type: 'justifica';
  statement: BilingualText;
  leadIn: BilingualText; // e.g. "Es una anáfora porque..."
  options: BilingualText[];
  correctIndex: number;
}

export interface ClassificationCategory {
  id: string;
  name: BilingualText;
}

export interface ClassificationItem {
  id: string;
  text: BilingualText;
  correctCategoryId: string;
}

export interface ClassificationExercise extends BaseExercise {
  type: 'clasificacion';
  categories: ClassificationCategory[];
  items: ClassificationItem[];
}

export interface OpenQuestionExercise extends BaseExercise {
  type: 'pregunta_abierta';
  question: BilingualText;
  modelAnswer: BilingualText;
  rubricCriteria: BilingualText[];
}

export type Exercise =
  | TestExercise
  | TrueFalseExercise
  | CompleteExercise
  | MatchExercise
  | FindErrorExercise
  | IdentifyFigureExercise
  | DoNotConfuseExercise
  | TransformExercise
  | AnalyzeMetaphorExercise
  | JustifyExercise
  | ClassificationExercise
  | OpenQuestionExercise;

export interface ReadingQuestion {
  id: string;
  questionNumber: number;
  category: 'tipo_texto' | 'vocabulario' | 'idea_principal' | 'detalles' | 'recursos_literarios' | 'interpretacion' | 'escrita';
  categoryLabel: BilingualText;
  question: BilingualText;
  options?: TestOption[];
  correctOption?: 'A' | 'B' | 'C' | 'D';
  modelAnswer?: BilingualText;
  isOpenEnded?: boolean;
  explanation: BilingualText;
}

export interface ReadingText {
  id: string;
  title: BilingualText;
  genre: BilingualText;
  authorInfo?: BilingualText;
  introContext: BilingualText;
  paragraphs: BilingualText[];
  literaryAnalysisGuide: {
    theme: BilingualText;
    narrativeVoice: BilingualText;
    keyFigures: BilingualText[];
    message: BilingualText;
  };
  vocabularyGlossary: {
    word: string;
    definition: BilingualText;
  }[];
  questions: ReadingQuestion[];
}

export interface ExamQuestion {
  id: string;
  originTopic: string;
  question: BilingualText;
  options: TestOption[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: BilingualText;
}

export interface ExamBlueprint {
  id: string;
  title: BilingualText;
  description: BilingualText;
  questionCount: number;
  timeLimitMinutes: number;
  topicFilter?: string;
  questions: ExamQuestion[];
}

export interface UserAnswerHistory {
  exerciseId: string;
  topicId: string;
  isCorrect: boolean;
  userAnswer: string;
  timestamp: number;
}

export interface ExamAttempt {
  id: string;
  examId: string;
  examTitle: string;
  scoreOutOf10: number;
  correctCount: number;
  totalQuestions: number;
  date: string;
  weakTopics: string[];
  answers: {
    questionId: string;
    userSelected: string;
    correctOption: string;
    isCorrect: boolean;
  }[];
}
