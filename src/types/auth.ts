export type UserRole = 'admin' | 'user' | 'peserta';
export type UserApprovalStatus = 'approved' | 'pending' | 'rejected';

export interface AppUserRow {
  email: string;
  username: string | null;
  role: 'admin' | 'user' | string;
  is_approved: boolean;
  created_at: string;
}

export interface StoredAuthSession {
  email: string;
  username: string | null;
  role: UserRole;
}

export interface UserProfile {
  id: string;
  name: string;
  username?: string | null;
  email: string;
  organization?: string;
  role: UserRole;
  is_approved?: boolean;
  approvalStatus?: UserApprovalStatus;
  approvedAt?: number;
  approvedBy?: string;
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
