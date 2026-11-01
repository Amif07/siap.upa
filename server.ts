import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { MASTER_UPA_DATABASE } from './src/data/upaQuestions';
import { UPAQuestion, QuestionOptionKey, QuestionOption } from './src/types/quiz';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory store of locked questions per Room ID on the server
interface LockedRoomSession {
  roomId: string;
  createdAt: number;
  questionIds: number[];
  questions: UPAQuestion[];
}

const lockedRoomStore = new Map<string, LockedRoomSession>();

// Seeded pseudorandom generator for deterministic reproducible server locking per room
function createServerRNG(seedStr: string) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 16777619);
  }
  return function () {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    return ((h += h << 5) >>> 0) / 4294967296;
  };
}

/**
 * Server algorithm to pick, shuffle, and freeze questions & options for a Room ID.
 * Guarantees that all clients in the room receive identical questions and option orders.
 */
export function lockRoomQuestions(
  roomId: string,
  questionCount: number,
  categoryFilter: string
): UPAQuestion[] {
  // Check if room questions are already locked
  const existing = lockedRoomStore.get(roomId);
  if (existing) {
    return existing.questions;
  }

  const rng = createServerRNG(roomId + '-upa-room-lock-2026');

  // Filter pool by category if specified
  const pool = !categoryFilter || categoryFilter === 'Semua Materi'
    ? [...MASTER_UPA_DATABASE]
    : MASTER_UPA_DATABASE.filter((q) => q.category === categoryFilter);

  const available = pool.length > 0 ? pool : [...MASTER_UPA_DATABASE];
  const targetCount = Math.min(questionCount || 20, available.length);

  // Fisher-Yates shuffle using server room RNG
  const shuffledPool = [...available];
  for (let i = shuffledPool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
  }

  const selected = shuffledPool.slice(0, targetCount);

  // Freeze questions and standardize options A, B, C, D so answer positions match 100%
  const optionKeys: QuestionOptionKey[] = ['A', 'B', 'C', 'D'];
  const fixedQuestions: UPAQuestion[] = selected.map((q, idx) => {
    // Determine the original correct option text
    const originalCorrectOption = q.options.find((o) => o.key === q.correctAnswer);
    const correctText = originalCorrectOption ? originalCorrectOption.text : q.options[0]?.text;

    // Shuffle options deterministically for this room
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    // Reassign keys A, B, C, D in fixed order and identify new correct key
    let newCorrectKey: QuestionOptionKey = 'A';
    const finalOptions: QuestionOption[] = shuffledOptions.map((opt, optIdx) => {
      const key = optionKeys[optIdx] || 'A';
      if (opt.text === correctText) {
        newCorrectKey = key;
      }
      return {
        key,
        text: opt.text,
      };
    });

    return {
      ...q,
      options: finalOptions,
      correctAnswer: newCorrectKey,
    };
  });

  // Store locked questions in server state
  lockedRoomStore.set(roomId, {
    roomId,
    createdAt: Date.now(),
    questionIds: fixedQuestions.map((q) => q.id),
    questions: fixedQuestions,
  });

  return fixedQuestions;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isDev = process.env.NODE_ENV !== 'production';

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // ALUR 1 SERVER: Lock and fetch fixed question package for Room ID
  app.post('/api/rooms/:roomId/lock-questions', (req, res) => {
    const { roomId } = req.params;
    const { questionCount = 20, categoryFilter = 'Semua Materi' } = req.body;

    if (!roomId) {
      return res.status(400).json({ error: 'Room ID wajib disertakan' });
    }

    const questions = lockRoomQuestions(roomId, Number(questionCount), String(categoryFilter));
    const questionIds = questions.map((q) => q.id);

    res.json({
      success: true,
      roomId,
      totalQuestions: questions.length,
      questionIds,
      questions,
    });
  });

  // ALUR 1 SERVER: Get locked questions for Room ID
  app.get('/api/rooms/:roomId/questions', (req, res) => {
    const { roomId } = req.params;
    const session = lockedRoomStore.get(roomId);

    if (!session) {
      return res.status(404).json({
        success: false,
        error: `Room ${roomId} belum mengunci paket soal. Host belum memulai ujian.`,
      });
    }

    res.json({
      success: true,
      roomId,
      totalQuestions: session.questions.length,
      questionIds: session.questionIds,
      questions: session.questions,
    });
  });

  // Clean old room sessions every hour
  setInterval(() => {
    const now = Date.now();
    for (const [id, session] of lockedRoomStore.entries()) {
      if (now - session.createdAt > 4 * 60 * 60 * 1000) {
        lockedRoomStore.delete(id);
      }
    }
  }, 60 * 60 * 1000);

  if (isDev) {
    // Mount Vite middlewares in development
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        allowedHosts: true,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AdvokatQuiz Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start AdvokatQuiz server:', err);
  process.exit(1);
});
