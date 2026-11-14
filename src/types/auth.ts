export type UserRole = 'admin' | 'user' | 'peserta';
export type UserApprovalStatus = 'approved' | 'pending' | 'rejected';

export interface AppUserRow {
  email: string;
  username: string | null;
  role: 'admin' | 'user' | string;
  is_approved: boolean;
  last_seen?: string | null;
  current_page?: string | null;
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
  last_seen?: string | null;
  isOnline: boolean;
  currentActivity: string;
  current_page?: string | null;
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
