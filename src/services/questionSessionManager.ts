/**
 * Question Session & Rotation Manager
 * Solves question repetition across practice sessions:
 * 1. Tracks questions previously seen/completed by user across sessions.
 * 2. Strictly guarantees 0 duplicated question texts in any single session.
 * 3. Rotates through the entire 500-question pool across consecutive sessions before repeating.
 * 4. Randomizes question order, mixed legal categories, and option choices per session.
 */
import { UPAQuestion, UPACategory, QuestionOptionKey, QuestionOption } from '../types/quiz';
import { MASTER_UPA_DATABASE } from '../data/upaQuestions';
import { createSeededRandom } from '../utils/seededRandom';

const STORAGE_KEY_SEEN_QUESTIONS = 'advokatquiz_seen_questions_pool_v3';

export interface RotationStats {
  totalInPool: number;
  seenCount: number;
  unseenCount: number;
  percentageCompleted: number;
}

export function normalizeQuestionText(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Fallback in-memory storage for test/SSR environments
let inMemorySeenIds: Set<number> = new Set();

export class QuestionSessionManager {
  /**
   * Get all seen question IDs from localStorage or in-memory fallback
   */
  public getSeenQuestionIds(): Set<number> {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem(STORAGE_KEY_SEEN_QUESTIONS);
      if (raw) {
        try {
          const arr = JSON.parse(raw);
          return new Set(Array.isArray(arr) ? arr : []);
        } catch {
          return new Set();
        }
      }
    }
    return new Set(inMemorySeenIds);
  }

  /**
   * Save newly seen question IDs
   */
  public markQuestionsAsSeen(ids: number[]): void {
    ids.forEach((id) => inMemorySeenIds.add(id));
    if (typeof window !== 'undefined' && ids.length > 0) {
      const current = this.getSeenQuestionIds();
      ids.forEach((id) => current.add(id));
      localStorage.setItem(STORAGE_KEY_SEEN_QUESTIONS, JSON.stringify(Array.from(current)));
    }
  }

  /**
   * Reset seen question history (start fresh cycle)
   */
  public resetRotation(): void {
    inMemorySeenIds.clear();
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY_SEEN_QUESTIONS);
    }
  }

  /**
   * Get current rotation statistics
   */
  public getRotationStats(categoryFilter?: UPACategory | 'Semua Materi', customQuestions: UPAQuestion[] = []): RotationStats {
    const all = [...MASTER_UPA_DATABASE, ...customQuestions];
    const filtered = !categoryFilter || categoryFilter === 'Semua Materi'
      ? all
      : all.filter((q) => q.category === categoryFilter);

    const seenSet = this.getSeenQuestionIds();
    let seenInFilter = 0;
    filtered.forEach((q) => {
      if (seenSet.has(q.id)) seenInFilter++;
    });

    const total = filtered.length;
    const unseen = Math.max(0, total - seenInFilter);
    const pct = total > 0 ? (seenInFilter / total) * 100 : 0;

    return {
      totalInPool: total,
      seenCount: seenInFilter,
      unseenCount: unseen,
      percentageCompleted: Math.min(100, Math.round(pct)),
    };
  }

  /**
   * Select non-repeating, randomized questions for a new session
   * Automatically randomizes sections/categories and option positions.
   * STRICT GUARANTEE: Zero duplicate question texts in every session!
   */
  public getSessionQuestions(config: {
    questionCount: number;
    categoryFilter: UPACategory | 'Semua Materi';
    customQuestions?: UPAQuestion[];
    seed?: string;
    randomizeOptions?: boolean;
  }): { questions: UPAQuestion[]; isFreshCycle: boolean; unseenPicked: number } {
    const all = [...MASTER_UPA_DATABASE, ...(config.customQuestions || [])];
    
    // Deduplicate entire master pool by normalized question text first
    const uniquePoolMap = new Map<string, UPAQuestion>();
    all.forEach((q) => {
      const key = normalizeQuestionText(q.question);
      if (!uniquePoolMap.has(key)) {
        uniquePoolMap.set(key, q);
      }
    });
    const uniqueAll = Array.from(uniquePoolMap.values());

    const pool = config.categoryFilter === 'Semua Materi'
      ? uniqueAll
      : uniqueAll.filter((q) => q.category === config.categoryFilter);

    const targetPool = pool.length > 0 ? pool : uniqueAll;
    const requestedCount = Math.min(config.questionCount, targetPool.length);

    const seenSet = this.getSeenQuestionIds();

    // Split target pool into unseen and already seen
    const unseen = targetPool.filter((q) => !seenSet.has(q.id));
    const seen = targetPool.filter((q) => seenSet.has(q.id));

    // Randomize using seed or high-entropy random
    const rng = config.seed ? createSeededRandom(config.seed) : Math.random;

    const shuffleArray = <T>(arr: T[]): T[] => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const shuffledUnseen = shuffleArray(unseen);
    const shuffledSeen = shuffleArray(seen);

    let selected: UPAQuestion[] = [];
    let isFreshCycle = false;
    let unseenPicked = 0;

    if (shuffledUnseen.length >= requestedCount) {
      // 100% unseen questions guaranteed! No repetition from previous sessions!
      selected = shuffledUnseen.slice(0, requestedCount);
      unseenPicked = requestedCount;
    } else {
      // Take all remaining unseen questions
      selected = [...shuffledUnseen];
      unseenPicked = shuffledUnseen.length;
      const needed = requestedCount - selected.length;
      
      // Select from seen, ensuring NO duplicate text with what was already picked in this session
      const selectedKeys = new Set(selected.map((q) => normalizeQuestionText(q.question)));
      for (const q of shuffledSeen) {
        const k = normalizeQuestionText(q.question);
        if (!selectedKeys.has(k)) {
          selectedKeys.add(k);
          selected.push(q);
          if (selected.length >= requestedCount) break;
        }
      }

      // If we completely exhausted unseen questions, reset rotation cycle automatically for future sessions
      if (shuffledUnseen.length === 0) {
        this.resetRotation();
        isFreshCycle = true;
      }
    }

    // STRICT IN-SESSION DEDUPLICATION:
    // Guarantee that every single number in this session has a 100% unique question
    const sessionSeenTexts = new Set<string>();
    const strictlyUnique: UPAQuestion[] = [];
    for (const q of selected) {
      const key = normalizeQuestionText(q.question);
      if (!sessionSeenTexts.has(key)) {
        sessionSeenTexts.add(key);
        strictlyUnique.push(q);
      }
    }

    // "setiap sesi baru buat soal menjadi acak bagiannya"
    // Randomize order of questions across different legal categories so sections are intermixed dynamically
    const randomizedQuestions = shuffleArray(strictlyUnique);

    // Randomize options A, B, C, D per question while preserving the true answer key
    const randomizeOptions = config.randomizeOptions !== false;
    const finalQuestions: UPAQuestion[] = randomizedQuestions.map((q) => {
      if (!randomizeOptions) return q;
      return this.shuffleQuestionOptions(q, rng);
    });

    // Mark selected question IDs as seen for future sessions
    this.markQuestionsAsSeen(finalQuestions.map((q) => q.id));

    return {
      questions: finalQuestions,
      isFreshCycle,
      unseenPicked,
    };
  }

  /**
   * Shuffle options A, B, C, D for a question while maintaining the correct answer key
   */
  private shuffleQuestionOptions(question: UPAQuestion, rng: () => number = Math.random): UPAQuestion {
    const originalCorrectText = question.options.find((o) => o.key === question.correctAnswer)?.text;

    // Fisher-Yates shuffle on options texts
    const shuffledTexts = question.options.map((o) => o.text);
    for (let i = shuffledTexts.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffledTexts[i], shuffledTexts[j]] = [shuffledTexts[j], shuffledTexts[i]];
    }

    const standardKeys: QuestionOptionKey[] = ['A', 'B', 'C', 'D'];
    const newOptions: QuestionOption[] = shuffledTexts.map((text, idx) => ({
      key: standardKeys[idx],
      text,
    }));

    // Find the new key where the original correct text ended up
    const newCorrectOption = newOptions.find((o) => o.text === originalCorrectText);
    const newCorrectAnswer: QuestionOptionKey = newCorrectOption ? newCorrectOption.key : question.correctAnswer;

    return {
      ...question,
      options: newOptions,
      correctAnswer: newCorrectAnswer,
    };
  }

  /**
   * Deterministically locks and returns fixed questions and options for a Room ID.
   * STRICT GUARANTEE: Does NOT filter by local user history.
   * Shuffles questions and freezes options A, B, C, D once with room seed.
   * Every client calling this with the same roomId and config receives the exact same array.
   */
  public getFixedRoomQuestions(config: {
    roomId: string;
    questionCount: number;
    categoryFilter: UPACategory | 'Semua Materi';
    customQuestions?: UPAQuestion[];
  }): UPAQuestion[] {
    const all = [...MASTER_UPA_DATABASE, ...(config.customQuestions || [])];
    const uniquePoolMap = new Map<string, UPAQuestion>();
    all.forEach((q) => {
      const key = normalizeQuestionText(q.question);
      if (!uniquePoolMap.has(key)) {
        uniquePoolMap.set(key, q);
      }
    });
    const uniqueAll = Array.from(uniquePoolMap.values());
    const pool = !config.categoryFilter || config.categoryFilter === 'Semua Materi'
      ? uniqueAll
      : uniqueAll.filter((q) => q.category === config.categoryFilter);

    const available = pool.length > 0 ? pool : uniqueAll;
    const count = Math.min(config.questionCount, available.length);

    const rng = createSeededRandom(config.roomId + '-upa-room-lock-2026');
    const copy = [...available];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    const selected = copy.slice(0, count);
    return selected.map((q) => this.shuffleQuestionOptions(q, rng));
  }

  /**
   * Alur Server & Client: Fetches locked questions from backend API (/api/rooms/:roomId/lock-questions),
   * with automatic seamless fallback to deterministic room locking algorithm.
   */
  public async fetchOrLockRoomQuestions(
    roomId: string,
    questionCount: number,
    categoryFilter: UPACategory | 'Semua Materi',
    customQuestions: UPAQuestion[] = []
  ): Promise<UPAQuestion[]> {
    try {
      const res = await fetch(`/api/rooms/${roomId}/lock-questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionCount, categoryFilter }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.questions) && data.questions.length > 0) {
          return data.questions;
        }
      }
    } catch {
      // In offline / static fallback mode
    }
    return this.getFixedRoomQuestions({
      roomId,
      questionCount,
      categoryFilter,
      customQuestions,
    });
  }
}

export const questionSessionManager = new QuestionSessionManager();
