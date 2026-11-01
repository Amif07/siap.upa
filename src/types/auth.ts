export type UserRole = 'admin' | 'peserta';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  organization?: string;
  role: UserRole;
  createdAt: number;
  lastActive: number;
  isOnline: boolean;
  currentActivity: string;
}

export interface QuestionResultItem {
  id: number;
  question: string;
  category: string;
  topicTag: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  userAnswer: 'A' | 'B' | 'C' | 'D' | null;
  isCorrect: boolean;
  legalBasis: string;
  summary: string;
}

export interface UserQuizHistoryRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  quizTitle: string;
  categoryFilter: string;
  totalQuestions: number;
  score: number;
  scorePercent: number;
  passed: boolean;
  correctCount: number;
  wrongCount: number;
  doubtfulCount: number;
  unansweredCount: number;
  durationSeconds: number;
  timestamp: number;
  questionResults: QuestionResultItem[];
}
