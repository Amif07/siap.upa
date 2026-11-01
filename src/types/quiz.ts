export type UPACategory =
  | 'Hukum Acara Perdata'
  | 'Hukum Acara Pidana'
  | 'Hukum Acara PTUN'
  | 'Hukum Acara Peradilan Agama'
  | 'Kode Etik Profesi Advokat'
  | 'Hukum Acara Mahkamah Konstitusi'
  | 'Hukum Acara PHI'
  | 'Hukum Acara Arbitrase & APS';

export type QuestionOptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuestionOption {
  key: QuestionOptionKey;
  text: string;
}

export interface LegalExplanation {
  summary: string;
  legalBasis: string;
  analysis: string;
}

export interface UPAQuestion {
  id: number;
  category: UPACategory;
  topicTag: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: QuestionOptionKey;
  explanation: LegalExplanation;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
}

export type TimerMode = 'official' | 'flash'; // official = total time, flash = per question

export interface RoomSettings {
  code: string;
  roomName: string;
  hostName: string;
  questionCount: number;
  timerMode: TimerMode;
  categoryFilter: UPACategory | 'Semua Materi';
  flashSecondsPerQuestion: number; // e.g. 60 or 90
  officialTotalMinutes: number; // e.g. 120 or scaled
}

export interface Participant {
  id: string;
  name: string;
  isHost: boolean;
  isReady: boolean;
  currentQuestionIndex: number;
  score: number;
  answeredCount: number;
  isFinished: boolean;
  avatarSeed: string;
  timeSpentSeconds: number;
  answeredIndices?: number[];
}

export interface UserAnswerState {
  selectedOption: QuestionOptionKey | null;
  isDoubtful: boolean; // Ragu-ragu
  timeSpentSeconds: number;
}

export interface QuizSessionSummary {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  doubtfulCount: number;
  unansweredCount: number;
  scorePercent: number;
  passed: boolean; // >= 70%
  totalDurationSeconds: number;
  categoryBreakdown: {
    category: UPACategory;
    total: number;
    correct: number;
    percentage: number;
  }[];
}

export interface RoomChatMessage {
  id: string;
  roomCode: string;
  senderId: string;
  senderName: string;
  senderRole?: 'host' | 'peserta';
  message: string;
  timestamp: number;
  isSystem?: boolean;
}

