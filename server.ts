import express from 'express';
import http from 'http';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { WebSocketServer, WebSocket } from 'ws';
import { MASTER_UPA_DATABASE } from './src/data/upaQuestions.ts';
import type { UPAQuestion, QuestionOptionKey, QuestionOption, RoomSettings, Participant, RoomChatMessage } from './src/types/quiz.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server User Accounts Store with Persistent Disk Backup
export interface ServerUserAccount {
  id: string;
  email: string;
  name: string;
  organization?: string;
  role: 'admin' | 'peserta';
  approvalStatus: 'approved' | 'pending' | 'rejected';
  approvedAt?: number;
  approvedBy?: string;
  createdAt: number;
  lastActive: number;
  isOnline: boolean;
  currentActivity: string;
}

const USERS_FILE_PATH = path.resolve(__dirname, 'server_users_store.json');
const serverUsersStore = new Map<string, ServerUserAccount>();

export function isAdminEmail(email: string): boolean {
  const clean = email.trim().toLowerCase();
  return (
    clean === 'ahmadmiftahulfauzi07@gmail.com' ||
    clean === 'amifaveiro9@gmail.com' ||
    clean === 'admin@advokatquiz.id'
  );
}

function loadUsersFromDisk() {
  try {
    if (fs.existsSync(USERS_FILE_PATH)) {
      const data = JSON.parse(fs.readFileSync(USERS_FILE_PATH, 'utf-8'));
      if (Array.isArray(data)) {
        for (const u of data) {
          if (u && u.email) {
            serverUsersStore.set(u.email.toLowerCase(), {
              ...u,
              isOnline: false, // Reset online state on process startup
            });
          }
        }
      }
    }
  } catch (err) {
    console.warn('[AUTH STORE] Error loading users store from disk:', err);
  }

  // Pre-seed Admin Accounts (Auto-approved with Full Access)
  const defaultAdmins = [
    {
      email: 'ahmadmiftahulfauzi07@gmail.com',
      name: 'Ahmad Miftahul Fauzi, S.H.',
      organization: 'Pengawas & Pengembang UPA',
    },
    {
      email: 'amifaveiro9@gmail.com',
      name: 'Ahmad Miftahul Fauzi, S.H.',
      organization: 'Pengawas & Pengembang UPA',
    },
  ];

  for (const adm of defaultAdmins) {
    const existing = serverUsersStore.get(adm.email);
    if (!existing) {
      serverUsersStore.set(adm.email, {
        id: 'usr-admin-' + btoa(adm.email).replace(/[^a-zA-Z0-9]/g, '').slice(0, 8),
        email: adm.email,
        name: adm.name,
        organization: adm.organization,
        role: 'admin',
        approvalStatus: 'approved',
        approvedAt: Date.now(),
        approvedBy: 'System',
        createdAt: Date.now(),
        lastActive: Date.now(),
        isOnline: false,
        currentActivity: 'Di Halaman Pengawas AdvokatQuiz',
      });
    } else {
      existing.role = 'admin';
      existing.approvalStatus = 'approved';
    }
  }
}

function saveUsersToDisk() {
  try {
    const list = Array.from(serverUsersStore.values());
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[AUTH STORE] Error saving users store to disk:', err);
  }
}

// Load initial store
loadUsersFromDisk();

// WebSocket tracking for real-time presence & instant approval broadcasts
interface ConnectedAuthSocket {
  ws: WebSocket;
  email?: string;
  role?: string;
  lastPing: number;
}
const connectedAuthSockets = new Set<ConnectedAuthSocket>();

export function broadcastGlobalAuthEvent(event: any) {
  const jsonStr = JSON.stringify(event);
  for (const client of connectedAuthSockets) {
    if (client.ws.readyState === WebSocket.OPEN) {
      try {
        client.ws.send(jsonStr);
      } catch (err) {
        // Socket closed
      }
    }
  }
}

// In-memory store of locked questions per Room ID on the server
interface LockedRoomSession {
  roomId: string;
  createdAt: number;
  questionIds: number[];
  questions: UPAQuestion[];
}

const lockedRoomStore = new Map<string, LockedRoomSession>();

// Server-Authoritative Realtime Room Store (Strict Zero-Bot Policy: Only Real Connected Sockets)
interface ServerParticipant extends Participant {
  ws?: WebSocket;
}

interface ServerRoom {
  code: string;
  roomName: string;
  hostId: string;
  hostName: string;
  settings: RoomSettings;
  status: 'lobby' | 'in_progress' | 'finished';
  currentQuestionIndex: number;
  questionStartTime: number;
  questionDuration: number;
  questions: UPAQuestion[];
  participants: Map<string, ServerParticipant>;
  messages: RoomChatMessage[];
}

const serverRooms = new Map<string, ServerRoom>();

function getCleanParticipants(room: ServerRoom): Participant[] {
  return Array.from(room.participants.values()).map((p) => ({
    id: p.id,
    name: p.name,
    isHost: p.isHost,
    isReady: p.isReady,
    currentQuestionIndex: room.currentQuestionIndex,
    score: p.score,
    answeredCount: p.answeredCount,
    isFinished: p.isFinished,
    avatarSeed: p.avatarSeed,
    timeSpentSeconds: p.timeSpentSeconds,
    answeredIndices: p.answeredIndices || [],
  }));
}

function broadcastToRoom(room: ServerRoom, payload: any) {
  const jsonStr = JSON.stringify(payload);
  for (const p of room.participants.values()) {
    if (p.ws && p.ws.readyState === WebSocket.OPEN) {
      try {
        p.ws.send(jsonStr);
      } catch (err) {
        console.warn(`[WS] Failed to send message to participant ${p.name}:`, err);
      }
    }
  }
}

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
  const fixedQuestions: UPAQuestion[] = selected.map((q) => {
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
  const PORT = 3000;
  const isDev = process.env.NODE_ENV !== 'production';

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // REST API: Login or Request Access
  app.post('/api/auth/login-or-request', (req, res) => {
    const { email, name, organization } = req.body;
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, error: 'Email wajib disertakan' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const isAdmin = isAdminEmail(cleanEmail);

    let user = serverUsersStore.get(cleanEmail);
    if (!user) {
      let cleanName = name?.trim();
      if (!cleanName) {
        if (isAdmin) {
          cleanName = 'Ahmad Miftahul Fauzi, S.H.';
        } else {
          const localPart = cleanEmail.split('@')[0] || 'Peserta';
          const words = localPart
            .replace(/[\._\-0-9]/g, ' ')
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1));
          cleanName = words.length > 0 ? `${words.join(' ')}, S.H.` : 'Calon Advokat, S.H.';
        }
      }

      user = {
        id: 'usr-' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 12),
        email: cleanEmail,
        name: cleanName,
        organization: organization?.trim() || (isAdmin ? 'Pengawas & Pengembang UPA' : 'PKPA PERADI 2026'),
        role: isAdmin ? 'admin' : 'peserta',
        approvalStatus: isAdmin ? 'approved' : 'pending',
        approvedAt: isAdmin ? Date.now() : undefined,
        approvedBy: isAdmin ? 'System' : undefined,
        createdAt: Date.now(),
        lastActive: Date.now(),
        isOnline: true,
        currentActivity: isAdmin ? 'Di Halaman Pengawas AdvokatQuiz' : 'Menunggu Konfirmasi Admin',
      };

      serverUsersStore.set(cleanEmail, user);
      saveUsersToDisk();

      // Notify admin via WebSocket broadcast about new access request
      if (!isAdmin) {
        broadcastGlobalAuthEvent({
          type: 'NEW_ACCESS_REQUEST',
          user,
        });
      }
    } else {
      if (name && name.trim()) user.name = name.trim();
      if (organization && organization.trim()) user.organization = organization.trim();
      user.lastActive = Date.now();
      user.isOnline = true;
      if (isAdmin) {
        user.role = 'admin';
        user.approvalStatus = 'approved';
      }
      saveUsersToDisk();
    }

    res.json({
      success: true,
      status: user.approvalStatus,
      user,
      message:
        user.approvalStatus === 'approved'
          ? 'Login berhasil'
          : user.approvalStatus === 'pending'
          ? 'Akun Anda sedang menunggu konfirmasi dari Admin (Ahmad Miftahul Fauzi, S.H.).'
          : 'Akses akun Anda telah ditolak oleh Admin.',
    });
  });

  // REST API: Check Approval Status for polling
  app.get('/api/auth/status', (req, res) => {
    const email = String(req.query.email || '').trim().toLowerCase();
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email parameter diperlukan' });
    }

    const user = serverUsersStore.get(email);
    if (!user) {
      return res.json({ success: true, status: 'not_found' });
    }

    res.json({
      success: true,
      status: user.approvalStatus,
      user,
    });
  });

  // REST API: List all users & real-time presence (for Admin Monitor)
  app.get('/api/auth/users', (_req, res) => {
    const now = Date.now();
    const users = Array.from(serverUsersStore.values()).map((u) => {
      const hasActiveSocket = Array.from(connectedAuthSockets).some(
        (c) => c.email === u.email && c.ws.readyState === WebSocket.OPEN
      );
      const isOnline = hasActiveSocket || (u.isOnline && now - u.lastActive < 25000);
      return {
        ...u,
        isOnline,
      };
    });

    const pendingCount = users.filter((u) => u.approvalStatus === 'pending').length;
    const onlineCount = users.filter((u) => u.isOnline).length;

    res.json({
      success: true,
      users,
      pendingCount,
      onlineCount,
      serverTime: now,
    });
  });

  // REST API: Admin Approve Access (Teman bebas masuk kapan saja setelah ini)
  app.post('/api/auth/approve', (req, res) => {
    const { email, adminEmail } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email wajib disertakan' });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const user = serverUsersStore.get(cleanEmail);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User tidak ditemukan' });
    }

    user.approvalStatus = 'approved';
    user.approvedAt = Date.now();
    user.approvedBy = adminEmail || 'Ahmad Miftahul Fauzi, S.H.';
    saveUsersToDisk();

    // Broadcast instant approval event to all sockets (so waiting screen unlocks automatically!)
    broadcastGlobalAuthEvent({
      type: 'USER_APPROVED',
      email: cleanEmail,
      user,
    });

    res.json({
      success: true,
      user,
      message: `Akun ${cleanEmail} telah berhasil disetujui! Rekan Anda sekarang bebas masuk kapan saja.`,
    });
  });

  // REST API: Admin Reject Access
  app.post('/api/auth/reject', (req, res) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email wajib disertakan' });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const user = serverUsersStore.get(cleanEmail);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User tidak ditemukan' });
    }

    user.approvalStatus = 'rejected';
    saveUsersToDisk();

    broadcastGlobalAuthEvent({
      type: 'USER_REJECTED',
      email: cleanEmail,
      user,
    });

    res.json({ success: true, message: `Permintaan akses ${cleanEmail} telah ditolak.` });
  });

  // REST API: Real-Time Heartbeat & Activity Sync
  app.post('/api/auth/heartbeat', (req, res) => {
    const { email, name, currentActivity } = req.body;
    if (!email) {
      return res.json({ success: false });
    }

    const cleanEmail = String(email).trim().toLowerCase();
    let user = serverUsersStore.get(cleanEmail);
    const now = Date.now();

    if (!user) {
      const isAdmin = isAdminEmail(cleanEmail);
      user = {
        id: 'usr-' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 12),
        email: cleanEmail,
        name: name || cleanEmail,
        role: isAdmin ? 'admin' : 'peserta',
        approvalStatus: isAdmin ? 'approved' : 'pending',
        createdAt: now,
        lastActive: now,
        isOnline: true,
        currentActivity: currentActivity || 'Aktif di AdvokatQuiz',
      };
      serverUsersStore.set(cleanEmail, user);
      saveUsersToDisk();
    } else {
      user.lastActive = now;
      user.isOnline = true;
      if (currentActivity) user.currentActivity = currentActivity;
      if (name && name !== user.name) user.name = name;
    }

    broadcastGlobalAuthEvent({
      type: 'USER_PRESENCE_UPDATE',
      email: cleanEmail,
      isOnline: true,
      lastActive: user.lastActive,
      currentActivity: user.currentActivity,
      user,
    });

    const onlineCount = Array.from(serverUsersStore.values()).filter(
      (u) => u.isOnline && now - u.lastActive < 25000
    ).length;

    res.json({
      success: true,
      isApproved: user.approvalStatus === 'approved',
      onlineCount,
    });
  });

  // REST API: Logout (Immediately update online status)
  app.post('/api/auth/logout', (req, res) => {
    const { email } = req.body;
    if (email) {
      const cleanEmail = String(email).trim().toLowerCase();
      const user = serverUsersStore.get(cleanEmail);
      if (user) {
        user.isOnline = false;
        user.lastActive = Date.now();
        user.currentActivity = 'Offline';
        saveUsersToDisk();
        broadcastGlobalAuthEvent({
          type: 'USER_PRESENCE_UPDATE',
          email: cleanEmail,
          isOnline: false,
          lastActive: user.lastActive,
          currentActivity: 'Offline',
          user,
        });
      }
    }
    res.json({ success: true });
  });

  // REST API: Get or create room state
  app.get('/api/rooms/:roomId/state', (req, res) => {
    const { roomId } = req.params;
    const room = serverRooms.get(roomId);
    if (!room) {
      return res.status(404).json({ success: false, error: 'Ruang tidak ditemukan' });
    }
    res.json({
      success: true,
      roomCode: room.code,
      settings: room.settings,
      status: room.status,
      currentQuestionIndex: room.currentQuestionIndex,
      questionStartTime: room.questionStartTime,
      questionDuration: room.questionDuration,
      participants: getCleanParticipants(room),
      questions: room.status === 'in_progress' ? room.questions : undefined,
    });
  });

  // REST API: Lock and fetch fixed question package for Room ID
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

  // REST API: Get locked questions for Room ID
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
    for (const [id, room] of serverRooms.entries()) {
      if (now - (room.questionStartTime || 0) > 6 * 60 * 60 * 1000 && room.participants.size === 0) {
        serverRooms.delete(id);
      }
    }
  }, 60 * 60 * 1000);

  const httpServer = http.createServer(app);

  // Initialize Native WebSocket Server attached to httpServer
  const wss = new WebSocketServer({ noServer: true });

  httpServer.on('upgrade', (request, socket, head) => {
    try {
      const url = new URL(request.url || '', `http://${request.headers.host || 'localhost'}`);
      if (url.pathname === '/ws') {
        wss.handleUpgrade(request, socket, head, (ws) => {
          wss.emit('connection', ws, request);
        });
      }
    } catch {
      // Allow other upgrade handlers (like Vite HMR) to proceed
    }
  });

  wss.on('connection', (ws) => {
    let currentParticipantId: string | null = null;
    let currentRoomCode: string | null = null;

    const authClient: ConnectedAuthSocket = { ws, lastPing: Date.now() };
    connectedAuthSockets.add(authClient);

    ws.on('message', (data) => {
      try {
        const payload = JSON.parse(data.toString());

        switch (payload.type) {
          case 'AUTH_IDENTIFY':
          case 'AUTH_HEARTBEAT': {
            const { email, name, currentActivity } = payload;
            if (email) {
              const cleanEmail = String(email).trim().toLowerCase();
              authClient.email = cleanEmail;
              authClient.lastPing = Date.now();
              const user = serverUsersStore.get(cleanEmail);
              if (user) {
                user.isOnline = true;
                user.lastActive = Date.now();
                if (currentActivity) user.currentActivity = currentActivity;
                if (name && name !== user.name) user.name = name;
                authClient.role = user.role;
                broadcastGlobalAuthEvent({
                  type: 'USER_PRESENCE_UPDATE',
                  email: cleanEmail,
                  isOnline: true,
                  lastActive: user.lastActive,
                  currentActivity: user.currentActivity,
                  user,
                });
              }
            }
            break;
          }

          case 'JOIN_ROOM': {
            const { roomCode, participant, roomSettings } = payload;
            if (!roomCode || !participant) return;

            currentParticipantId = participant.id;
            currentRoomCode = roomCode;

            let room = serverRooms.get(roomCode);
            if (!room) {
              const settings: RoomSettings = roomSettings || {
                code: roomCode,
                roomName: `Ruang UPA (${roomCode})`,
                hostName: participant.name,
                questionCount: 20,
                timerMode: 'flash',
                categoryFilter: 'Semua Materi',
                flashSecondsPerQuestion: 60,
                officialTotalMinutes: 30,
              };

              room = {
                code: roomCode,
                roomName: settings.roomName,
                hostId: participant.isHost ? participant.id : '',
                hostName: settings.hostName,
                settings,
                status: 'lobby',
                currentQuestionIndex: 0,
                questionStartTime: 0,
                questionDuration: settings.flashSecondsPerQuestion || 60,
                questions: [],
                participants: new Map(),
                messages: [],
              };
              serverRooms.set(roomCode, room);
            }

            // If the room has no host, make the first participant the host
            if (!room.hostId) {
              room.hostId = participant.id;
              room.hostName = participant.name;
              participant.isHost = true;
            }

            // Register real human participant (Zero bots)
            const serverP: ServerParticipant = {
              ...participant,
              isHost: participant.id === room.hostId || participant.isHost,
              answeredIndices: participant.answeredIndices || [],
              ws,
            };

            room.participants.set(participant.id, serverP);

            // Send initial room sync to this user
            ws.send(
              JSON.stringify({
                type: 'ROOM_SYNC',
                roomCode: room.code,
                roomSettings: room.settings,
                status: room.status,
                currentQuestionIndex: room.currentQuestionIndex,
                questionStartTime: room.questionStartTime,
                questionDuration: room.questionDuration,
                participants: getCleanParticipants(room),
                questions: room.status === 'in_progress' ? room.questions : undefined,
                messages: room.messages,
                serverTime: Date.now(),
              })
            );

            // Broadcast participant join to all participants in this room
            broadcastToRoom(room, {
              type: 'PARTICIPANTS_UPDATE',
              roomCode: room.code,
              participants: getCleanParticipants(room),
            });
            break;
          }

          case 'START_EXAM': {
            const { roomCode, settings } = payload;
            const room = serverRooms.get(roomCode);
            if (!room) return;

            // Only host can start exam
            if (currentParticipantId !== room.hostId && !room.participants.get(currentParticipantId || '')?.isHost) {
              return;
            }

            const lockedQuestions = lockRoomQuestions(
              room.code,
              settings?.questionCount || room.settings.questionCount,
              settings?.categoryFilter || room.settings.categoryFilter
            );

            room.questions = lockedQuestions;
            room.status = 'in_progress';
            room.currentQuestionIndex = 0;
            room.questionDuration = settings?.flashSecondsPerQuestion || room.settings.flashSecondsPerQuestion || 60;
            room.questionStartTime = Date.now();
            if (settings) {
              room.settings = { ...room.settings, ...settings };
            }

            // Reset participant counters for clean live exam
            for (const p of room.participants.values()) {
              p.score = 0;
              p.answeredCount = 0;
              p.answeredIndices = [];
              p.isFinished = false;
              p.timeSpentSeconds = 0;
            }

            broadcastToRoom(room, {
              type: 'EXAM_STARTED',
              roomCode: room.code,
              questions: room.questions,
              currentQuestionIndex: 0,
              questionStartTime: room.questionStartTime,
              questionDuration: room.questionDuration,
              roomSettings: room.settings,
              participants: getCleanParticipants(room),
              serverTime: Date.now(),
            });
            break;
          }

          case 'SUBMIT_ANSWER': {
            const { roomCode, participantId, questionIndex, selectedOption, timeSpentSeconds } = payload;
            const room = serverRooms.get(roomCode);
            if (!room) return;

            const p = room.participants.get(participantId);
            if (p) {
              if (!p.answeredIndices) {
                p.answeredIndices = [];
              }
              if (!p.answeredIndices.includes(questionIndex)) {
                p.answeredIndices.push(questionIndex);
                p.answeredCount = p.answeredIndices.length;
              }
              if (timeSpentSeconds !== undefined) {
                p.timeSpentSeconds = timeSpentSeconds;
              }

              // Compute score based on room questions
              let correct = 0;
              for (const idx of p.answeredIndices) {
                const targetQ = room.questions[idx];
                if (targetQ && idx === questionIndex) {
                  if (selectedOption === targetQ.correctAnswer) correct++;
                }
              }
              // Update score percentage
              const totalQ = room.questions.length || 1;
              p.score = Math.round((p.score * (p.answeredCount - 1) / totalQ) + ((selectedOption === room.questions[questionIndex]?.correctAnswer ? 1 : 0) / totalQ * 100));

              broadcastToRoom(room, {
                type: 'ANSWER_UPDATE',
                roomCode: room.code,
                participantId,
                questionIndex,
                answeredIndices: p.answeredIndices,
                participants: getCleanParticipants(room),
              });
            }
            break;
          }

          case 'ADMIN_NEXT_QUESTION': {
            const { roomCode, targetIndex } = payload;
            const room = serverRooms.get(roomCode);
            if (!room) return;

            // Only host can trigger next question
            const p = room.participants.get(currentParticipantId || '');
            if (!p || (!p.isHost && p.id !== room.hostId)) {
              return;
            }

            room.currentQuestionIndex = targetIndex;
            room.questionStartTime = Date.now();

            broadcastToRoom(room, {
              type: 'NEXT_QUESTION_SYNC',
              roomCode: room.code,
              targetIndex,
              questionStartTime: room.questionStartTime,
              questionDuration: room.questionDuration,
              serverTime: Date.now(),
            });
            break;
          }

          case 'ADMIN_FINISH_EXAM': {
            const { roomCode } = payload;
            const room = serverRooms.get(roomCode);
            if (!room) return;

            room.status = 'finished';
            broadcastToRoom(room, {
              type: 'EXAM_FINISHED',
              roomCode: room.code,
              participants: getCleanParticipants(room),
            });
            break;
          }

          case 'CHAT_MESSAGE': {
            const { roomCode, message } = payload;
            const room = serverRooms.get(roomCode);
            if (!room || !message) return;

            room.messages.push(message);
            if (room.messages.length > 100) {
              room.messages.shift();
            }

            broadcastToRoom(room, {
              type: 'CHAT_MESSAGE',
              roomCode: room.code,
              message,
            });
            break;
          }
        }
      } catch (err) {
        console.warn('[WS] Error processing message:', err);
      }
    });

    ws.on('close', () => {
      connectedAuthSockets.delete(authClient);
      if (authClient.email) {
        const stillConnected = Array.from(connectedAuthSockets).some(
          (c) => c.email === authClient.email && c.ws.readyState === WebSocket.OPEN
        );
        if (!stillConnected) {
          const user = serverUsersStore.get(authClient.email);
          if (user) {
            user.isOnline = false;
            user.lastActive = Date.now();
            broadcastGlobalAuthEvent({
              type: 'USER_PRESENCE_UPDATE',
              email: authClient.email,
              isOnline: false,
              lastActive: user.lastActive,
              currentActivity: 'Offline',
              user,
            });
            saveUsersToDisk();
          }
        }
      }

      if (currentRoomCode && currentParticipantId) {
        const room = serverRooms.get(currentRoomCode);
        if (room) {
          room.participants.delete(currentParticipantId);
          broadcastToRoom(room, {
            type: 'PARTICIPANTS_UPDATE',
            roomCode: room.code,
            participants: getCleanParticipants(room),
          });
        }
      }
    });
  });

  if (isDev) {
    // Mount Vite middlewares in development with HMR and WS disabled
    const vite = await createViteServer({
      plugins: [
        {
          name: 'disable-vite-hmr-ws',
          enforce: 'post',
          transform(code, id) {
            if (id.includes('vite/dist/client/client.mjs')) {
              return code.replace(
                /const transport = normalizeModuleRunnerTransport\(\(\(\) => \{[\s\S]*?\}\)\(\)\);/,
                'const transport = normalizeModuleRunnerTransport({ async connect() {}, async disconnect() {}, send() {} });'
              );
            }
          },
        },
      ],
      server: {
        middlewareMode: true,
        host: '0.0.0.0',
        allowedHosts: true,
        hmr: false,
        ws: false,
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

  httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`AdvokatQuiz Server running on http://0.0.0.0:${PORT} (with Native WebSocket at /ws)`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start AdvokatQuiz server:', err);
  process.exit(1);
});

