/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/Header';
import { QuizSetup } from './components/QuizSetup';
import { QuestionCard } from './components/QuestionCard';
import { QuestionGrid } from './components/QuestionGrid';
import { TimerDisplay } from './components/TimerDisplay';
import { ResultDashboard } from './components/ResultDashboard';
import { ReviewModal } from './components/ReviewModal';
import { MultiplayerLobby } from './components/MultiplayerLobby';
import { QuestionBankModal } from './components/QuestionBankModal';
import { QuickCheatSheet } from './components/QuickCheatSheet';
import { PermanentSaveModal } from './components/PermanentSaveModal';

import {
  UPAQuestion,
  UserAnswerState,
  TimerMode,
  RoomSettings,
  Participant,
  QuizSessionSummary,
  QuestionOptionKey,
  UPACategory,
  RoomChatMessage,
} from './types/quiz';
import { UserProfile, QuestionResultItem } from './types/auth';
import { userService } from './services/userService';
import { LoginGateModal } from './components/LoginGateModal';
import { AdminMonitorView } from './components/AdminMonitorView';
import { RoomLiveChat } from './components/RoomLiveChat';
import { MASTER_UPA_DATABASE, UPA_CATEGORIES } from './data/upaQuestions';
import { shuffleWithSeed } from './utils/seededRandom';
import { soundEffects } from './utils/soundEffects';
import { realtimeMultiplayerService, RealtimeTransportType } from './services/realtimeMultiplayer';
import { questionSessionManager } from './services/questionSessionManager';
import { LayoutGrid, X, Users, AlertCircle, MessageSquare } from 'lucide-react';

export default function App() {
  // Authentication / User Session State (Email Login required on first entry)
  const [authProfile, setAuthProfile] = useState<UserProfile | null>(() => {
    return userService.getCurrentUser();
  });
  const [onlineUserCount, setOnlineUserCount] = useState<number>(() => {
    return userService.getAllUsers().filter((u) => u.isOnline).length;
  });
  const [pendingApprovalCount, setPendingApprovalCount] = useState<number>(0);

  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('advokatquiz_dark') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sound state
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('advokatquiz_sound') !== 'false';
    }
    return true;
  });

  // View state
  const [activeView, setActiveView] = useState<
    'home' | 'quiz' | 'multiplayer' | 'bank' | 'cheatsheet' | 'results' | 'review' | 'monitor'
  >('home');

  // Custom added questions
  const [customQuestions, setCustomQuestions] = useState<UPAQuestion[]>([]);

  // Active Quiz State
  const [quizQuestions, setQuizQuestions] = useState<UPAQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, UserAnswerState>>({});
  const [timerMode, setTimerMode] = useState<TimerMode>('official');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [questionDuration, setQuestionDuration] = useState<number>(60);
  const [quizSummary, setQuizSummary] = useState<QuizSessionSummary | null>(null);

  // Mobile drawer for Question Grid
  const [mobileGridOpen, setMobileGridOpen] = useState(false);

  // Permanent Save & Install Guide Modal
  const [saveModalOpen, setSaveModalOpen] = useState(false);

  // Realtime Multiplayer Room State (Supabase Realtime & WebRTC P2P)
  const [currentRoom, setCurrentRoom] = useState<RoomSettings | null>(null);
  const [currentUser, setCurrentUser] = useState<Participant | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [roomStatus, setRoomStatus] = useState<'lobby' | 'in_progress' | 'finished'>('lobby');
  const [roomMessages, setRoomMessages] = useState<RoomChatMessage[]>([]);
  const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
  const [realtimeTransport, setRealtimeTransport] = useState<RealtimeTransportType>('broadcast');
  const [connectionStatusText, setConnectionStatusText] = useState<string>('Siap terhubung');
  const [urlRoomCode, setUrlRoomCode] = useState<string>('');

  // Mutable refs to prevent stale closures inside WebSocket/Realtime callbacks
  const isFinishingRef = useRef<boolean>(false);
  const expiredForIndexRef = useRef<number | null>(null);
  const finishQuizRef = useRef<() => void>(() => {});
  const quizQuestionsRef = useRef<UPAQuestion[]>(quizQuestions);
  quizQuestionsRef.current = quizQuestions;
  const activeViewRef = useRef(activeView);
  activeViewRef.current = activeView;
  const currentRoomRef = useRef(currentRoom);
  currentRoomRef.current = currentRoom;

  // Check URL query params on mount for invitation link (?room=UPA-XYZ123)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const roomParam = params.get('room');
      if (roomParam) {
        setUrlRoomCode(roomParam.toUpperCase());
        setActiveView('multiplayer');
      }
    }
  }, []);

  // Sync with HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('advokatquiz_dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('advokatquiz_dark', 'false');
    }
  }, [darkMode]);

  useEffect(() => {
    soundEffects.enabled = soundEnabled;
    localStorage.setItem('advokatquiz_sound', String(soundEnabled));
  }, [soundEnabled]);

  // Real-time Presence, Activity Heartbeat & User Directory Synchronization
  useEffect(() => {
    const syncDirectory = async () => {
      const users = await userService.fetchAllUsers();
      const online = users.filter((u) => u.isOnline).length;
      const pending = users.filter((u) => u.is_approved === false || u.approvalStatus === 'pending').length;
      setOnlineUserCount(online);
      setPendingApprovalCount(pending);

      // Verify non-admin account status against app_users / server store
      const current = userService.getCurrentUser();
      if (current && current.role !== 'admin' && users.length > 0) {
        const found = users.find((u) => u.email.toLowerCase() === current.email.toLowerCase());
        if (!found || found.is_approved === false || found.approvalStatus === 'rejected') {
          userService.logout();
          setAuthProfile(null);
          setActiveView('home');
        }
      }
    };

    syncDirectory();
    const syncTimer = setInterval(syncDirectory, 4000);

    const unsubscribe = userService.onAuthEvent(() => {
      syncDirectory();
    });

    return () => {
      clearInterval(syncTimer);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!authProfile) return;

    const reportHeartbeat = () => {
      let activity = 'Di Beranda AdvokatQuiz';
      if (activeView === 'quiz') {
        const cat = quizQuestions[currentIndex]?.category || 'Materi UPA';
        activity = `Mengerjakan Soal ${currentIndex + 1}/${quizQuestions.length} (${cat})`;
      } else if (activeView === 'multiplayer') {
        activity = currentRoom ? `Di Ruang Belajar: ${currentRoom.roomName}` : 'Di Lobi Multiplayer';
      } else if (activeView === 'results') {
        activity = 'Melihat Ringkasan Skor & Evaluasi';
      } else if (activeView === 'review') {
        activity = 'Membaca Pembahasan Mendalam & Dasar Hukum';
      } else if (activeView === 'bank') {
        activity = 'Membuka Ratusan Bank Data Soal UPA';
      } else if (activeView === 'cheatsheet') {
        activity = 'Menghafal Pasal-Pasal Kunci';
      } else if (activeView === 'monitor') {
        activity = 'Memantau Peserta Online & Riwayat';
      }

      userService.updateActivity(activity);
    };

    reportHeartbeat();
    const timer = setInterval(reportHeartbeat, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [authProfile, activeView, currentIndex, quizQuestions.length, currentRoom]);

  // Real-Time Multiplayer Event Subscriptions (Supabase Realtime & WebRTC P2P)
  useEffect(() => {
    realtimeMultiplayerService.onParticipantsChange((updatedList) => {
      setParticipants(updatedList);
    });

    realtimeMultiplayerService.onStartExam((roomSettings, seed, lockedQuestions, initialIndex, startTime, duration) => {
      startPreparedQuiz(roomSettings, seed, lockedQuestions, initialIndex, startTime, duration);
    });

    realtimeMultiplayerService.onScoreUpdate((data) => {
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === data.participantId
            ? {
                ...p,
                score: data.score,
                answeredCount: data.answeredCount,
                isFinished: data.isFinished,
                timeSpentSeconds: data.timeSpentSeconds,
              }
            : p
        )
      );
    });

    realtimeMultiplayerService.onQuestionAnswered((data) => {
      setParticipants((prev) =>
        prev.map((p) => {
          if (p.id === data.participantId) {
            const existingIndices = p.answeredIndices ? [...p.answeredIndices] : [];
            if (!existingIndices.includes(data.answeredIndex)) {
              existingIndices.push(data.answeredIndex);
            }
            return {
              ...p,
              answeredIndices: data.answeredIndices || existingIndices,
              answeredCount: (data.answeredIndices || existingIndices).length,
            };
          }
          return p;
        })
      );
    });

    realtimeMultiplayerService.onNextQuestionSync((targetIndex, newStartTime, duration) => {
      soundEffects.playClick();
      expiredForIndexRef.current = null;
      setCurrentIndex(targetIndex);
      const startTime = newStartTime || Date.now();
      const qDur = duration || 60;
      setQuestionStartTime(startTime);
      setQuestionDuration(qDur);
      setSecondsRemaining(qDur);
      setTotalSeconds(qDur);
    });

    realtimeMultiplayerService.onExamFinished((finalParticipants, fallbackQuestions) => {
      if (Array.isArray(finalParticipants) && finalParticipants.length > 0) {
        setParticipants(finalParticipants);
      }
      if (Array.isArray(fallbackQuestions) && fallbackQuestions.length > 0 && quizQuestionsRef.current.length === 0) {
        setQuizQuestions(fallbackQuestions);
      }
      setRoomStatus('finished');
      if (currentRoomRef.current && activeViewRef.current === 'quiz') {
        finishQuizRef.current();
      }
    });

    realtimeMultiplayerService.onChatMessage((msg) => {
      setRoomMessages((prev) => {
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [...prev, msg];
      });
      soundEffects.playClick();
    });

    realtimeMultiplayerService.onStatusChange((status, transport) => {
      setConnectionStatusText(status);
      setRealtimeTransport(transport);
    });

    return () => {
      realtimeMultiplayerService.leaveRoom();
    };
  }, []);

  // Automatically redirect participants to Final Results (Leaderboard & Pembahasan) when room status becomes finished
  useEffect(() => {
    if (currentRoom && roomStatus === 'finished' && activeView === 'quiz') {
      finishQuizRef.current();
    }
  }, [currentRoom, roomStatus, activeView]);

  // Safety-net room state sync polling for non-host participants during active multiplayer quiz
  useEffect(() => {
    if (!currentRoom || activeView !== 'quiz' || currentUser?.isHost) return;

    const pollRoomState = async () => {
      try {
        const res = await fetch(`/api/rooms/${encodeURIComponent(currentRoom.code)}/state`);
        if (!res.ok) return;
        const data = await res.json();
        if (!data || !data.success) return;

        if (Array.isArray(data.participants)) {
          setParticipants(data.participants);
        }

        if (data.status === 'finished') {
          if (Array.isArray(data.questions) && data.questions.length > 0 && quizQuestionsRef.current.length === 0) {
            setQuizQuestions(data.questions);
          }
          setRoomStatus('finished');
          return;
        }

        if (
          data.status === 'in_progress' &&
          typeof data.currentQuestionIndex === 'number' &&
          data.currentQuestionIndex > currentIndex
        ) {
          const qDur = data.questionDuration || 60;
          const skew = data.serverTime ? data.serverTime - Date.now() : 0;
          const adjustedStart = data.questionStartTime ? data.questionStartTime - skew : Date.now();
          expiredForIndexRef.current = null;
          setCurrentIndex(data.currentQuestionIndex);
          setQuestionStartTime(adjustedStart);
          setQuestionDuration(qDur);
          setTotalSeconds(qDur);
          const elapsed = Math.floor((Date.now() - adjustedStart) / 1000);
          setSecondsRemaining(Math.max(0, qDur - elapsed));
        }
      } catch {
        // Ignore transient network errors
      }
    };

    const interval = setInterval(pollRoomState, 4000);
    return () => clearInterval(interval);
  }, [currentRoom, activeView, currentUser?.isHost, currentIndex]);

  // Handle timer expiration
  const handleTimerExpire = useCallback(() => {
    if (expiredForIndexRef.current !== currentIndex) {
      expiredForIndexRef.current = currentIndex;
      soundEffects.playUrgentTick();
    }

    // If this question wasn't answered yet, mark it so key and explanation are revealed
    setAnswers((prev) => {
      if (!prev[currentIndex]) {
        return {
          ...prev,
          [currentIndex]: {
            selectedOption: null,
            isDoubtful: false,
            timeSpentSeconds: questionDuration,
          },
        };
      }
      return prev;
    });

    // In multiplayer: NEVER auto advance without admin! Stay on current screen showing explanation.
    // In solo mode: user stays on current question with explanation revealed until they click next.
  }, [currentIndex, questionDuration]);

  // Main Timer ticker (Authoritative synchronization for multiplayer)
  useEffect(() => {
    if (activeView !== 'quiz') return;

    const tick = () => {
      if (currentRoom) {
        // Authoritative synchronized timer: compute remaining seconds from server questionStartTime
        const elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
        const remaining = Math.max(0, questionDuration - elapsed);
        setSecondsRemaining(remaining);
        if (remaining <= 0) {
          handleTimerExpire();
        }
      } else {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleTimerExpire();
            return 0;
          }
          return prev - 1;
        });
      }
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [activeView, currentRoom, questionStartTime, questionDuration, handleTimerExpire]);

  // Start Solo Quiz (Bebas Pengulangan & Acak Bagian/Pilihan)
  const handleStartSoloQuiz = (config: {
    questionCount: number;
    timerMode: TimerMode;
    categoryFilter: UPACategory | 'Semua Materi';
    flashSeconds: number;
    officialMinutes: number;
  }) => {
    setCurrentRoom(null);
    setCurrentUser(null);
    setParticipants([]);

    // Select non-repeating questions & thoroughly randomize sections and answer choices
    const { questions } = questionSessionManager.getSessionQuestions({
      questionCount: config.questionCount,
      categoryFilter: config.categoryFilter,
      customQuestions,
      randomizeOptions: true,
    });

    const qDur = config.flashSeconds || 60;
    const now = Date.now();

    isFinishingRef.current = false;
    expiredForIndexRef.current = null;
    setRoomStatus('lobby');
    setQuizSummary(null);
    setQuizQuestions(questions);
    setCurrentIndex(0);
    setAnswers({});
    setTimerMode(config.timerMode);
    setQuizStartTime(now);
    setQuestionStartTime(now);
    setQuestionDuration(qDur);
    setTotalSeconds(qDur);
    setSecondsRemaining(qDur);

    setActiveView('quiz');
  };

  // Helper to start prepared quiz (for solo & multiplayer with locked questions)
  const startPreparedQuiz = (
    room: RoomSettings,
    seed: string,
    lockedQuestions?: UPAQuestion[],
    initialIndex: number = 0,
    startTime?: number,
    duration?: number
  ) => {
    let questions: UPAQuestion[];

    if (lockedQuestions && lockedQuestions.length > 0) {
      // ALUR APLIKASI (CLIENT/HP):
      // DILARANG KERAS melakukan pengacakan (shuffle) soal maupun pilihan jawaban secara lokal.
      // Langsung gunakan array data soal yang dikirim dari server/host!
      questions = lockedQuestions;
    } else {
      // Fallback: kunci paket soal secara deterministik untuk Room ID tanpa filter riwayat lokal
      questions = questionSessionManager.getFixedRoomQuestions({
        roomId: room.code || seed,
        questionCount: room.questionCount,
        categoryFilter: room.categoryFilter,
        customQuestions,
      });
    }

    const qDur = duration || room.flashSecondsPerQuestion || 60;
    const qStart = startTime || Date.now();
    const elapsed = Math.floor((Date.now() - qStart) / 1000);
    const remaining = Math.max(0, qDur - elapsed);

    isFinishingRef.current = false;
    expiredForIndexRef.current = null;
    setRoomStatus('in_progress');
    setQuizSummary(null);
    setQuizQuestions(questions);
    setCurrentIndex(initialIndex);
    setAnswers({});
    setTimerMode(room.timerMode);
    setQuizStartTime(qStart);
    setQuestionStartTime(qStart);
    setQuestionDuration(qDur);
    setTotalSeconds(qDur);
    setSecondsRemaining(remaining);

    setActiveView('quiz');
  };

  // Create Real Multiplayer Room (Supabase Realtime & WebRTC P2P)
  const handleCreateRoom = (settings: RoomSettings, hostName: string) => {
    const hostUser: Participant = {
      id: authProfile?.id || ('host-' + Date.now()),
      name: hostName,
      isHost: true,
      isReady: true,
      currentQuestionIndex: 0,
      score: 0,
      answeredCount: 0,
      isFinished: false,
      avatarSeed: hostName,
      timeSpentSeconds: 0,
      isOnline: true,
    };

    setCurrentRoom(settings);
    setCurrentUser(hostUser);
    setParticipants([hostUser]);
    setRoomStatus('lobby');

    // Initialize Room Live Chat
    const welcomeMsg: RoomChatMessage = {
      id: 'sys-create-' + Date.now(),
      roomCode: settings.code,
      senderId: 'sys',
      senderName: 'Sistem UPA',
      message: `Ruang "${settings.roomName}" (${settings.code}) aktif. Bagikan kode atau link undangan ke rekan Anda! ⚖️`,
      timestamp: Date.now(),
      isSystem: true,
    };
    setRoomMessages([welcomeMsg]);

    // Connect to WebSocket / Realtime channel
    realtimeMultiplayerService.joinRoom(settings, hostUser);
  };

  // Join Real Multiplayer Room (Supabase Realtime & WebRTC P2P)
  const handleJoinRoom = async (code: string, userName: string) => {
    const cleanCode = code.trim().toUpperCase();
    const guest: Participant = {
      id: authProfile?.id || ('guest-' + Date.now()),
      name: userName,
      isHost: false,
      isReady: true,
      currentQuestionIndex: 0,
      score: 0,
      answeredCount: 0,
      isFinished: false,
      avatarSeed: userName,
      timeSpentSeconds: 0,
      isOnline: true,
    };

    let targetRoom: RoomSettings = {
      code: cleanCode,
      roomName: `Ruang UPA (${cleanCode})`,
      hostName: 'Host Penyelenggara',
      questionCount: 20,
      timerMode: 'flash',
      categoryFilter: 'Semua Materi',
      flashSecondsPerQuestion: 60,
      officialTotalMinutes: 30,
    };

    let fetchedStatus: 'lobby' | 'in_progress' | 'finished' = 'lobby';
    try {
      const res = await fetch(`/api/rooms/${encodeURIComponent(cleanCode)}/state`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.settings) {
          targetRoom = {
            ...data.settings,
            code: data.roomCode || cleanCode,
          };
          if (data.status === 'in_progress' || data.status === 'finished') {
            fetchedStatus = data.status;
          }
          if (data.participants && Array.isArray(data.participants) && data.participants.length > 0) {
            setParticipants(data.participants);
          }
        }
      }
    } catch (e) {
      console.warn('Could not fetch server room state:', e);
    }

    setCurrentRoom(targetRoom);
    setCurrentUser(guest);
    setRoomStatus(fetchedStatus);
    setParticipants((prev) => (prev.length > 0 ? prev : [guest]));

    // Initialize Room Live Chat
    const joinMsg: RoomChatMessage = {
      id: 'sys-join-' + Date.now(),
      roomCode: cleanCode,
      senderId: 'sys',
      senderName: 'Sistem UPA',
      message: `${userName} bergabung ke ruangan.`,
      timestamp: Date.now(),
      isSystem: true,
    };

    setRoomMessages([
      {
        id: 'sys-welcome-' + Date.now(),
        roomCode: cleanCode,
        senderId: 'sys',
        senderName: 'Sistem UPA',
        message: `Selamat bergabung di Ruang Ujian (${cleanCode}).`,
        timestamp: Date.now() - 500,
        isSystem: true,
      },
      joinMsg,
    ]);

    // Connect to WebSocket & Realtime channel
    realtimeMultiplayerService.joinRoom(targetRoom, guest);
  };

  // Send message in Room Live Chat
  const handleSendChatMessage = (text: string) => {
    if (!currentRoom || !currentUser || !text.trim()) return;
    const sent = realtimeMultiplayerService.sendChatMessage(text.trim());
    if (sent) {
      setRoomMessages((prev) => [...prev, sent]);
    }
  };

  // Start exam from multiplayer lobby (Host triggers sync across all devices)
  const handleStartMultiplayerExam = async () => {
    if (!currentRoom) return;
    const seed = currentRoom.code;

    // ALUR SERVER:
    // 1. Ambil paket soal dari server (/api/rooms/:roomId/lock-questions) atau master database
    // 2. Server mengacak daftar soal tersebut dan mengunci urutannya khusus untuk Room ID tersebut
    //    beserta urutan pilihan ganda A, B, C, D yang seragam.
    const fixedQuestions = await questionSessionManager.fetchOrLockRoomQuestions(
      currentRoom.code,
      currentRoom.questionCount,
      currentRoom.categoryFilter,
      customQuestions
    );

    const qDur = currentRoom.flashSecondsPerQuestion || 60;
    const now = Date.now();

    // 3. Server/Host mengirimkan daftar soal yang sudah fix tersebut ke semua pengguna yang ada di Room ID secara bersamaan
    realtimeMultiplayerService.startExam(currentRoom, seed, fixedQuestions);

    // Host juga memulai dengan data soal dan waktu yang sinkron
    startPreparedQuiz(currentRoom, seed, fixedQuestions, 0, now, qDur);
  };

  // Leave room
  const handleLeaveRoom = () => {
    realtimeMultiplayerService.leaveRoom();
    isFinishingRef.current = false;
    setRoomStatus('lobby');
    setCurrentRoom(null);
    setCurrentUser(null);
    setParticipants([]);
    setRoomMessages([]);
    setChatModalOpen(false);
    setActiveView('home');
  };

  // Option selection - immediately reveals official answer key & statutory explanation
  const handleSelectOption = (key: QuestionOptionKey) => {
    // If already answered, do not allow changing answer
    if (answers[currentIndex]?.selectedOption !== undefined && answers[currentIndex]?.selectedOption !== null) {
      return;
    }

    const currentQ = quizQuestions[currentIndex];
    const isCorrect = currentQ?.correctAnswer === key;

    if (isCorrect) {
      soundEffects.playCorrect();
    } else {
      soundEffects.playWrong();
    }

    setAnswers((prev) => {
      const existing = prev[currentIndex];
      const updated = {
        ...prev,
        [currentIndex]: {
          selectedOption: key,
          isDoubtful: existing?.isDoubtful || false,
          timeSpentSeconds: (existing?.timeSpentSeconds || 0) + 1,
        },
      };

      // Broadcast real-time score and answer event to room participants
      if (currentRoom && currentUser) {
        let correctCount = 0;
        quizQuestions.forEach((q, idx) => {
          if (updated[idx]?.selectedOption === q.correctAnswer) {
            correctCount++;
          }
        });
        const scorePct = (correctCount / quizQuestions.length) * 100;
        const answeredIndices = Object.keys(updated)
          .filter((k) => updated[Number(k)]?.selectedOption !== null && updated[Number(k)]?.selectedOption !== undefined)
          .map(Number);
        const timeSpent = Math.floor((Date.now() - quizStartTime) / 1000);

        // Update local participant state in state array
        setParticipants((pList) =>
          pList.map((p) =>
            p.id === currentUser.id
              ? {
                  ...p,
                  score: scorePct,
                  answeredCount: answeredIndices.length,
                  answeredIndices,
                }
              : p
          )
        );

        realtimeMultiplayerService.submitQuestionAnswer(currentIndex, answeredIndices, key);
        realtimeMultiplayerService.updateMyScore(scorePct, answeredIndices.length, false, timeSpent);
      }

      return updated;
    });

    // Stay on current question so participant can read the legal basis and juridical analysis!
    // In multiplayer: wait for admin to trigger next.
    // In solo: wait for user to click next.
  };

  // Toggle doubtful flag
  const handleToggleDoubtful = () => {
    setAnswers((prev) => {
      const existing = prev[currentIndex];
      return {
        ...prev,
        [currentIndex]: {
          selectedOption: existing?.selectedOption || null,
          isDoubtful: !existing?.isDoubtful,
          timeSpentSeconds: existing?.timeSpentSeconds || 0,
        },
      };
    });
  };

  // Synchronization Gate State Calculations
  const isMultiplayerActive = Boolean(currentRoom);
  const connectedParticipants = participants.length > 0
    ? participants
    : (currentUser ? [currentUser] : []);

  // Exclude disconnected participants so Next Soal cannot be locked indefinitely if someone drops
  const activeParticipants = connectedParticipants.filter((p) => p.isOnline !== false);
  const effectiveParticipants = activeParticipants.length > 0
    ? activeParticipants
    : (currentUser ? [currentUser] : []);

  const totalPeersCount = Math.max(1, effectiveParticipants.length);

  // Check how many active participants have answered the current question index
  const peersWhoAnsweredCurrent = effectiveParticipants.filter((p) => {
    if (p.id === currentUser?.id) {
      return answers[currentIndex]?.selectedOption !== null && answers[currentIndex]?.selectedOption !== undefined;
    }
    return p.isFinished || (p.answeredIndices && p.answeredIndices.includes(currentIndex));
  });

  const peersAnsweredCount = peersWhoAnsweredCurrent.length;
  const allActiveAnswered = peersAnsweredCount >= totalPeersCount;
  const isTimerRunning = secondsRemaining > 0;

  // Next question is locked for Admin ONLY while timer > 0 AND not all active participants have answered
  const isNextQuestionLocked = isMultiplayerActive && isTimerRunning && !allActiveAnswered;

  // Navigate questions
  const handleSelectQuestionIndex = (index: number) => {
    // In multiplayer mode, all participant screens are locked strictly to the current question
    if (isMultiplayerActive) {
      soundEffects.playWrong();
      return;
    }

    setCurrentIndex(index);
    setMobileGridOpen(false);

    // Reset countdown timer for the selected question
    const now = Date.now();
    expiredForIndexRef.current = null;
    setQuestionStartTime(now);
    setSecondsRemaining(questionDuration);
    setTotalSeconds(questionDuration);
  };

  const handleNext = () => {
    if (isMultiplayerActive) {
      // In multiplayer: only host / admin can advance to next question or finish exam
      if (!currentUser?.isHost || isNextQuestionLocked) {
        soundEffects.playWrong();
        return;
      }

      if (currentIndex < quizQuestions.length - 1) {
        const nextIdx = currentIndex + 1;
        expiredForIndexRef.current = null;
        realtimeMultiplayerService.adminNextQuestion(nextIdx);
        setCurrentIndex(nextIdx);
        const now = Date.now();
        setQuestionStartTime(now);
        setSecondsRemaining(questionDuration);
        setTotalSeconds(questionDuration);
      } else {
        setRoomStatus('finished');
        realtimeMultiplayerService.adminFinishExam();
        finishQuiz();
      }
      return;
    }

    // Solo mode: user advances and resets timer
    if (currentIndex < quizQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      expiredForIndexRef.current = null;
      setCurrentIndex(nextIdx);
      const now = Date.now();
      setQuestionStartTime(now);
      setSecondsRemaining(questionDuration);
      setTotalSeconds(questionDuration);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (isMultiplayerActive) {
      // Screens are strictly synchronized in multiplayer
      return;
    }
    if (currentIndex > 0) {
      expiredForIndexRef.current = null;
      setCurrentIndex((i) => i - 1);
      const now = Date.now();
      setQuestionStartTime(now);
      setSecondsRemaining(questionDuration);
      setTotalSeconds(questionDuration);
    }
  };

  // Finish quiz & calculate summary
  const finishQuiz = () => {
    if (isFinishingRef.current) return;
    isFinishingRef.current = true;

    const totalDurationSeconds = Math.max(1, Math.floor((Date.now() - quizStartTime) / 1000));
    const totalQ = quizQuestions.length;
    let correct = 0;
    let wrong = 0;
    let doubtful = 0;
    let answered = 0;

    const catStats: Record<UPACategory, { total: number; correct: number }> = {
      'Hukum Acara Perdata': { total: 0, correct: 0 },
      'Hukum Acara Pidana': { total: 0, correct: 0 },
      'Hukum Acara PTUN': { total: 0, correct: 0 },
      'Hukum Acara Peradilan Agama': { total: 0, correct: 0 },
      'Kode Etik Profesi Advokat': { total: 0, correct: 0 },
      'Hukum Acara Mahkamah Konstitusi': { total: 0, correct: 0 },
      'Hukum Acara PHI': { total: 0, correct: 0 },
      'Hukum Acara Arbitrase & APS': { total: 0, correct: 0 },
    };

    quizQuestions.forEach((q, idx) => {
      const ans = answers[idx];
      if (catStats[q.category]) {
        catStats[q.category].total++;
      }

      if (ans?.selectedOption !== null && ans?.selectedOption !== undefined) {
        answered++;
        if (ans.selectedOption === q.correctAnswer) {
          correct++;
          if (catStats[q.category]) catStats[q.category].correct++;
        } else {
          wrong++;
        }
      } else {
        wrong++;
      }

      if (ans?.isDoubtful) {
        doubtful++;
      }
    });

    const scorePercent = totalQ > 0 ? (correct / totalQ) * 100 : 0;
    const passed = scorePercent >= 70; // Standard UPA passing grade is 70%

    const categoryBreakdown = Object.entries(catStats)
      .filter(([_, data]) => data.total > 0)
      .map(([cat, data]) => ({
        category: cat as UPACategory,
        total: data.total,
        correct: data.correct,
        percentage: data.total > 0 ? (data.correct / data.total) * 100 : 0,
      }));

    const summary: QuizSessionSummary = {
      totalQuestions: totalQ,
      answeredCount: answered,
      correctCount: correct,
      wrongCount: wrong,
      doubtfulCount: doubtful,
      unansweredCount: totalQ - answered,
      scorePercent,
      passed,
      totalDurationSeconds,
      categoryBreakdown,
    };

    setQuizSummary(summary);

    // Save full detailed history to userService so the admin and friends can review anytime
    if (authProfile) {
      const questionResults: QuestionResultItem[] = quizQuestions.map((q, idx) => {
        const ans = answers[idx];
        const sel = ans?.selectedOption || null;
        const isCorrect = sel === q.correctAnswer;
        return {
          id: q.id,
          question: q.question,
          category: q.category,
          topicTag: q.topicTag,
          options: q.options,
          correctAnswer: q.correctAnswer,
          userAnswer: sel,
          isCorrect,
          legalBasis: q.explanation.legalBasis,
          summary: q.explanation.summary,
        };
      });

      const examTitle = currentRoom
        ? currentRoom.roomName
        : totalQ === 120
        ? 'Try Out Resmi UPA 2026 (120 Soal)'
        : `Simulasi Mandiri ${totalQ} Soal UPA`;

      userService.saveQuizHistory({
        id: 'hist-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6),
        userId: authProfile.id,
        userName: authProfile.name,
        userEmail: authProfile.email,
        quizTitle: examTitle,
        categoryFilter: currentRoom ? currentRoom.categoryFilter : 'Semua Materi',
        totalQuestions: totalQ,
        score: scorePercent,
        scorePercent,
        passed,
        correctCount: correct,
        wrongCount: wrong,
        doubtfulCount: doubtful,
        unansweredCount: totalQ - answered,
        durationSeconds: totalDurationSeconds,
        timestamp: Date.now(),
        questionResults,
      });
    }

    // Update current user score in participants list
    if (currentUser) {
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === currentUser.id
            ? {
                ...p,
                score: scorePercent,
                answeredCount: answered,
                isFinished: true,
                timeSpentSeconds: totalDurationSeconds,
              }
            : p
        )
      );

      // Broadcast finish to all real peers in room
      if (currentRoom) {
        realtimeMultiplayerService.updateMyScore(scorePercent, answered, true, totalDurationSeconds);
      }
    }

    setActiveView('results');
  };

  // Keep finishQuizRef pointing to latest closure
  finishQuizRef.current = finishQuiz;

  const handleAdminOrSoloFinish = () => {
    if (currentRoom && currentUser?.isHost) {
      setRoomStatus('finished');
      realtimeMultiplayerService.adminFinishExam();
    }
    finishQuiz();
  };

  const currentQ = quizQuestions[currentIndex];
  const currentAns = answers[currentIndex];

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0c1017] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Bar Contract compliant Navigation */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeView={activeView}
        setActiveView={setActiveView}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        isQuizActive={activeView === 'quiz'}
        onExitQuiz={() => {
          if (confirm('Apakah Anda yakin ingin mengakhiri simulasi ini? Skor akan langsung dihitung.')) {
            handleAdminOrSoloFinish();
          }
        }}
        onOpenSaveModal={() => setSaveModalOpen(true)}
        currentUser={authProfile}
        onLogout={() => {
          userService.logout();
          setAuthProfile(null);
          setActiveView('home');
        }}
        onOpenMonitor={() => {
          if (authProfile?.role === 'admin') {
            setActiveView('monitor');
          }
        }}
        onlineUserCount={onlineUserCount}
        pendingApprovalCount={authProfile?.role === 'admin' ? pendingApprovalCount : 0}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* VIEW 1: HOME & SETUP */}
        {activeView === 'home' && (
          <QuizSetup
            onStartSoloQuiz={handleStartSoloQuiz}
            onOpenMultiplayer={() => setActiveView('multiplayer')}
            onOpenBank={() => setActiveView('bank')}
            onOpenCheatSheet={() => setActiveView('cheatsheet')}
          />
        )}

        {/* VIEW 2: ACTIVE QUIZ SIMULATION */}
        {activeView === 'quiz' && currentQ && (
          <div className="space-y-4">
            {/* Top Examination Status Bar */}
            <div className="bg-white dark:bg-[#151b26] border border-stone-200/80 dark:border-slate-800 rounded-2xl p-3 sm:p-4 shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-legal font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  Lembar Ujian UPA
                </span>
                <span className="hidden sm:inline-block text-xs text-slate-400">|</span>
                <span className="hidden sm:inline-block text-xs text-slate-500 dark:text-slate-400">
                  {currentRoom ? currentRoom.roomName : 'Simulasi Mandiri'}
                </span>
              </div>

              {/* Countdown Timer with urgency highlight */}
              <div className="flex items-center gap-2">
                <TimerDisplay
                  timerMode={timerMode}
                  secondsRemaining={secondsRemaining}
                  totalSeconds={totalSeconds}
                  onExpire={handleTimerExpire}
                />

                {/* Multiplayer Live Chat Toggle */}
                {currentRoom && (
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setChatModalOpen(!chatModalOpen);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 text-xs font-semibold hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors shrink-0 cursor-pointer"
                    title="Obrolan Langsung Ruangan"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span className="hidden sm:inline">Chat Ruang</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-amber-600 text-white text-[10px] font-mono font-bold">
                      {roomMessages.length}
                    </span>
                  </button>
                )}

                {/* Mobile Grid Toggle Button */}
                <button
                  type="button"
                  onClick={() => setMobileGridOpen(true)}
                  className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  title="Buka Lembar Jawaban"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Split Grid & Question Screen */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Question Card (Dominant focal anchor) */}
              <div className="md:col-span-8 lg:col-span-8">
                <QuestionCard
                  question={currentQ}
                  index={currentIndex}
                  totalQuestions={quizQuestions.length}
                  userAnswer={currentAns}
                  onSelectOption={handleSelectOption}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  onToggleDoubtful={handleToggleDoubtful}
                  isFirst={currentIndex === 0}
                  isLast={currentIndex === quizQuestions.length - 1}
                  onFinishQuiz={handleAdminOrSoloFinish}
                  isNextLocked={isNextQuestionLocked}
                  lockReasonText={`Menunggu peserta menjawab: ${peersAnsweredCount}/${totalPeersCount} selesai`}
                  isMultiplayer={isMultiplayerActive}
                  isHost={currentUser ? currentUser.isHost : true}
                  peersAnsweredCount={peersAnsweredCount}
                  totalPeersCount={totalPeersCount}
                  secondsRemaining={secondsRemaining}
                />
              </div>

              {/* Desktop Question Grid Sidebar */}
              <div className="hidden md:block md:col-span-4 lg:col-span-4 sticky top-20">
                <QuestionGrid
                  totalQuestions={quizQuestions.length}
                  currentIndex={currentIndex}
                  answers={answers}
                  onSelectQuestion={handleSelectQuestionIndex}
                  onToggleDoubtful={handleToggleDoubtful}
                  isCurrentDoubtful={currentAns?.isDoubtful || false}
                  onFinishQuiz={handleAdminOrSoloFinish}
                  isMultiplayer={isMultiplayerActive}
                  isHost={currentUser ? currentUser.isHost : true}
                  maxAccessibleIndex={isMultiplayerActive && isNextQuestionLocked ? currentIndex : quizQuestions.length - 1}
                />
              </div>
            </div>

            {/* Mobile Bottom-sheet Modal for Question Grid */}
            {mobileGridOpen && (
              <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center p-0">
                <div className="w-full max-h-[85vh] bg-white dark:bg-[#151b26] rounded-t-2xl p-4 shadow-xl border-t border-slate-200 dark:border-slate-800 flex flex-col">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      Lembar Nomor Soal (1 - {quizQuestions.length})
                    </span>
                    <button
                      onClick={() => setMobileGridOpen(false)}
                      className="p-1 rounded-md text-slate-500 hover:text-slate-800 dark:hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <QuestionGrid
                      totalQuestions={quizQuestions.length}
                      currentIndex={currentIndex}
                      answers={answers}
                      onSelectQuestion={handleSelectQuestionIndex}
                      onToggleDoubtful={handleToggleDoubtful}
                      isCurrentDoubtful={currentAns?.isDoubtful || false}
                      onFinishQuiz={handleAdminOrSoloFinish}
                      isMultiplayer={isMultiplayerActive}
                      isHost={currentUser ? currentUser.isHost : true}
                      maxAccessibleIndex={isMultiplayerActive && isNextQuestionLocked ? currentIndex : quizQuestions.length - 1}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: MULTIPLAYER LOBBY */}
        {activeView === 'multiplayer' && (
          <MultiplayerLobby
            currentRoom={currentRoom}
            participants={participants}
            currentUser={currentUser}
            onCreateRoom={handleCreateRoom}
            onJoinRoom={handleJoinRoom}
            onStartExam={handleStartMultiplayerExam}
            onLeaveRoom={handleLeaveRoom}
            roomMessages={roomMessages}
            onSendMessage={handleSendChatMessage}
            realtimeTransport={realtimeTransport}
            connectionStatusText={connectionStatusText}
            initialJoinCode={urlRoomCode}
            defaultUserName={authProfile?.username || authProfile?.name || ''}
          />
        )}

        {/* VIEW 4: RESULTS DASHBOARD */}
        {activeView === 'results' && quizSummary && (
          <ResultDashboard
            summary={quizSummary}
            questions={quizQuestions}
            answers={answers}
            onOpenReview={() => setActiveView('review')}
            onRestart={() => {
              if (currentRoom) {
                const existing = realtimeMultiplayerService.getCurrentLockedQuestions();
                startPreparedQuiz(currentRoom, currentRoom.code, existing || undefined);
              } else {
                setAnswers({});
                setCurrentIndex(0);
                setActiveView('quiz');
              }
            }}
            onNewQuiz={() => {
              if (currentRoom) {
                handleLeaveRoom();
              } else {
                setActiveView('home');
              }
            }}
            isMultiplayer={Boolean(currentRoom)}
            participants={participants}
            currentUser={currentUser}
          />
        )}

        {/* VIEW 5: DEEP LEGAL REVIEW */}
        {activeView === 'review' && (
          <ReviewModal
            questions={quizQuestions}
            answers={answers}
            onClose={() => setActiveView('results')}
          />
        )}

        {/* VIEW 6: QUESTION BANK DATABASE MANAGER */}
        {activeView === 'bank' && (
          <QuestionBankModal
            customQuestions={customQuestions}
            onAddQuestion={(newQ) => setCustomQuestions((prev) => [...prev, newQ])}
          />
        )}

        {/* VIEW 7: QUICK CHEAT SHEET PASAL EMAS */}
        {activeView === 'cheatsheet' && <QuickCheatSheet />}

        {/* VIEW 8: PERSETUJUAN USER & MONITOR (KHUSUS ADMIN) */}
        {activeView === 'monitor' && authProfile?.role === 'admin' && (
          <AdminMonitorView
            currentUser={authProfile}
            onClose={() => setActiveView('home')}
          />
        )}
      </main>

      {/* Clean quiet footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span>AdvokatQuiz &copy; 2026 · Simulator UPA Standar PERADI</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">Web Developed by <strong className="text-amber-700 dark:text-amber-400 font-semibold">Ahmad Miftahul Fauzi, S.H.</strong></span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Pasal HIR/RBg</span>
            <span>KUHAP</span>
            <span>UU PTUN</span>
            <span>Kode Etik Advokat</span>
            <span>UU MK</span>
          </div>
        </div>
      </footer>

      {/* Permanent Save & Install Guide Modal */}
      <PermanentSaveModal
        isOpen={saveModalOpen}
        onClose={() => setSaveModalOpen(false)}
      />

      {/* Floating Live Chat Widget for Multiplayer Room */}
      {currentRoom && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50">
          {chatModalOpen ? (
            <RoomLiveChat
              roomCode={currentRoom.code}
              currentUser={currentUser}
              messages={roomMessages}
              onSendMessage={handleSendChatMessage}
              onClose={() => setChatModalOpen(false)}
              isFloating={true}
            />
          ) : (
            activeView === 'quiz' && (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setChatModalOpen(true);
                }}
                className="px-4 py-2.5 rounded-full bg-slate-900 dark:bg-amber-600 text-white font-bold text-xs shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-slate-700 dark:border-amber-500"
                title="Buka Obrolan Ruang Langsung"
              >
                <div className="relative">
                  <MessageSquare className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span>Chat Ruangan</span>
                {roomMessages.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-amber-500 dark:bg-slate-950 text-white text-[10px] font-mono font-bold">
                    {roomMessages.length}
                  </span>
                )}
              </button>
            )
          )}
        </div>
      )}

      {/* Required Email Login Gate for first-time entry */}
      {!authProfile && (
        <LoginGateModal
          onLoginSuccess={(user) => {
            setAuthProfile(user);
          }}
        />
      )}
    </div>
  );
}
