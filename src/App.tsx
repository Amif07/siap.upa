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
  const [quizSummary, setQuizSummary] = useState<QuizSessionSummary | null>(null);

  // Mobile drawer for Question Grid
  const [mobileGridOpen, setMobileGridOpen] = useState(false);

  // Permanent Save & Install Guide Modal
  const [saveModalOpen, setSaveModalOpen] = useState(false);

  // Realtime Multiplayer Room State (Supabase Realtime & WebRTC P2P)
  const [currentRoom, setCurrentRoom] = useState<RoomSettings | null>(null);
  const [currentUser, setCurrentUser] = useState<Participant | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [roomMessages, setRoomMessages] = useState<RoomChatMessage[]>([]);
  const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);
  const [realtimeTransport, setRealtimeTransport] = useState<RealtimeTransportType>('broadcast');
  const [connectionStatusText, setConnectionStatusText] = useState<string>('Siap terhubung');
  const [urlRoomCode, setUrlRoomCode] = useState<string>('');

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

  // Real-time Presence & Activity Heartbeat
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
        activity = 'Membuka Bank Data 500 Soal';
      } else if (activeView === 'cheatsheet') {
        activity = 'Menghafal Pasal-Pasal Kunci';
      } else if (activeView === 'monitor') {
        activity = 'Memantau Peserta Online & Riwayat';
      }

      userService.updateActivity(activity);
      const online = userService.getAllUsers().filter((u) => u.isOnline).length;
      setOnlineUserCount(online);
    };

    reportHeartbeat();
    const timer = setInterval(reportHeartbeat, 8000);

    // Listen to auth sync broadcast
    let bc: BroadcastChannel | null = null;
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      bc = new BroadcastChannel('advokatquiz_auth_sync');
      bc.onmessage = () => {
        const online = userService.getAllUsers().filter((u) => u.isOnline).length;
        setOnlineUserCount(online);
      };
    }

    return () => {
      clearInterval(timer);
      if (bc) bc.close();
    };
  }, [authProfile, activeView, currentIndex, quizQuestions.length, currentRoom]);

  // Real-Time Multiplayer Event Subscriptions (Supabase Realtime & WebRTC P2P)
  useEffect(() => {
    realtimeMultiplayerService.onParticipantsChange((updatedList) => {
      setParticipants(updatedList);
    });

    realtimeMultiplayerService.onStartExam((roomSettings, seed, lockedQuestions) => {
      startPreparedQuiz(roomSettings, seed, lockedQuestions);
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

    realtimeMultiplayerService.onNextQuestionSync((targetIndex) => {
      soundEffects.playClick();
      setCurrentIndex(targetIndex);
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

  // Main Timer ticker
  useEffect(() => {
    if (activeView !== 'quiz') return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          handleTimerExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeView, timerMode, currentIndex, quizQuestions.length]);

  // Handle timer expiration
  const handleTimerExpire = useCallback(() => {
    if (timerMode === 'flash') {
      // Per-question flash timer expired
      soundEffects.playUrgentTick();

      // If this question wasn't answered, mark it
      setAnswers((prev) => {
        if (!prev[currentIndex]) {
          return {
            ...prev,
            [currentIndex]: {
              selectedOption: null,
              isDoubtful: false,
              timeSpentSeconds: currentRoom?.flashSecondsPerQuestion || 60,
            },
          };
        }
        return prev;
      });

      // Move to next question or finish
      if (currentIndex < quizQuestions.length - 1) {
        setCurrentIndex((i) => i + 1);
        const nextFlashSec = currentRoom ? currentRoom.flashSecondsPerQuestion : 60;
        setSecondsRemaining(nextFlashSec);
        setTotalSeconds(nextFlashSec);
      } else {
        finishQuiz();
      }
    } else {
      // Official total exam timer expired!
      finishQuiz();
    }
  }, [timerMode, currentIndex, quizQuestions.length, currentRoom]);

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

    setQuizQuestions(questions);
    setCurrentIndex(0);
    setAnswers({});
    setTimerMode(config.timerMode);
    setQuizStartTime(Date.now());

    if (config.timerMode === 'official') {
      const totalSec = config.officialMinutes * 60;
      setTotalSeconds(totalSec);
      setSecondsRemaining(totalSec);
    } else {
      const flashSec = config.flashSeconds;
      setTotalSeconds(flashSec);
      setSecondsRemaining(flashSec);
    }

    setActiveView('quiz');
  };

  // Helper to start prepared quiz (for solo & multiplayer with locked questions)
  const startPreparedQuiz = (room: RoomSettings, seed: string, lockedQuestions?: UPAQuestion[]) => {
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

    setQuizQuestions(questions);
    setCurrentIndex(0);
    setAnswers({});
    setTimerMode(room.timerMode);
    setQuizStartTime(Date.now());

    if (room.timerMode === 'official') {
      const totalSec = room.officialTotalMinutes * 60;
      setTotalSeconds(totalSec);
      setSecondsRemaining(totalSec);
    } else {
      const flashSec = room.flashSecondsPerQuestion;
      setTotalSeconds(flashSec);
      setSecondsRemaining(flashSec);
    }

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
    };

    setCurrentRoom(settings);
    setCurrentUser(hostUser);
    setParticipants([hostUser]);

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

    // Connect to Supabase Realtime channel
    realtimeMultiplayerService.joinRoom(settings, hostUser);
  };

  // Join Real Multiplayer Room (Supabase Realtime & WebRTC P2P)
  const handleJoinRoom = (code: string, userName: string) => {
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
    };

    const mockRoom: RoomSettings = {
      code,
      roomName: `Ruang UPA (${code})`,
      hostName: 'Host Penyelenggara',
      questionCount: 20,
      timerMode: 'official',
      categoryFilter: 'Semua Materi',
      flashSecondsPerQuestion: 60,
      officialTotalMinutes: 30,
    };

    setCurrentRoom(mockRoom);
    setCurrentUser(guest);
    setParticipants([guest]);

    // Initialize Room Live Chat
    const joinMsg: RoomChatMessage = {
      id: 'sys-join-' + Date.now(),
      roomCode: code,
      senderId: 'sys',
      senderName: 'Sistem UPA',
      message: `${userName} bergabung ke ruangan.`,
      timestamp: Date.now(),
      isSystem: true,
    };

    setRoomMessages([
      {
        id: 'sys-welcome-' + Date.now(),
        roomCode: code,
        senderId: 'sys',
        senderName: 'Sistem UPA',
        message: `Selamat bergabung di Ruang Ujian (${code}).`,
        timestamp: Date.now() - 500,
        isSystem: true,
      },
      joinMsg,
    ]);

    // Connect to Supabase Realtime channel
    realtimeMultiplayerService.joinRoom(mockRoom, guest);
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

    // 3. Server/Host mengirimkan daftar soal yang sudah fix tersebut ke semua pengguna yang ada di Room ID secara bersamaan
    realtimeMultiplayerService.startExam(currentRoom, seed, fixedQuestions);

    // Host juga memulai dengan data soal yang sudah dikunci
    startPreparedQuiz(currentRoom, seed, fixedQuestions);
  };

  // Leave room
  const handleLeaveRoom = () => {
    realtimeMultiplayerService.leaveRoom();
    setCurrentRoom(null);
    setCurrentUser(null);
    setParticipants([]);
    setRoomMessages([]);
    setChatModalOpen(false);
    setActiveView('home');
  };

  // Option selection
  const handleSelectOption = (key: QuestionOptionKey) => {
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

        realtimeMultiplayerService.submitQuestionAnswer(currentIndex, answeredIndices);
        realtimeMultiplayerService.updateMyScore(scorePct, answeredIndices.length, false, timeSpent);
      }

      return updated;
    });

    // In solo flash timer mode only, automatically transition to next question after selecting
    if (timerMode === 'flash' && !currentRoom) {
      setTimeout(() => {
        if (currentIndex < quizQuestions.length - 1) {
          setCurrentIndex((i) => i + 1);
          const flashSec = 60;
          setSecondsRemaining(flashSec);
          setTotalSeconds(flashSec);
        }
      }, 300);
    }
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

  const totalPeersCount = Math.max(1, connectedParticipants.length);

  // Check how many participants have answered the current question index
  const peersWhoAnsweredCurrent = connectedParticipants.filter((p) => {
    if (p.id === currentUser?.id) {
      return answers[currentIndex]?.selectedOption !== null && answers[currentIndex]?.selectedOption !== undefined;
    }
    return p.isFinished || (p.answeredIndices && p.answeredIndices.includes(currentIndex));
  });

  const peersAnsweredCount = peersWhoAnsweredCurrent.length;

  // Strict Synchronization Gate:
  // In multiplayer mode, neither host nor any other participant can advance to the next question
  // until EVERY participant in the room has answered the current question!
  const isNextQuestionLocked = isMultiplayerActive && totalPeersCount > 1 && peersAnsweredCount < totalPeersCount;

  // Navigate questions
  const handleSelectQuestionIndex = (index: number) => {
    // In multiplayer mode, players cannot jump ahead past currentIndex while the gate is locked
    if (isMultiplayerActive && index > currentIndex && isNextQuestionLocked) {
      soundEffects.playWrong();
      return;
    }

    setCurrentIndex(index);
    setMobileGridOpen(false);

    // If flash mode, reset timer for the new question
    if (timerMode === 'flash') {
      const flashSec = currentRoom ? currentRoom.flashSecondsPerQuestion : 60;
      setSecondsRemaining(flashSec);
      setTotalSeconds(flashSec);
    }
  };

  const handleNext = () => {
    // Strict Gate: neither host nor other participants can open next question until all answered
    if (isNextQuestionLocked) {
      soundEffects.playWrong();
      return;
    }

    if (currentIndex < quizQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);

      // If multiplayer, synchronize advance to all devices in the room
      if (currentRoom) {
        realtimeMultiplayerService.syncNextQuestion(nextIdx);
      }

      if (timerMode === 'flash') {
        const flashSec = currentRoom ? currentRoom.flashSecondsPerQuestion : 60;
        setSecondsRemaining(flashSec);
        setTotalSeconds(flashSec);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      if (timerMode === 'flash') {
        const flashSec = currentRoom ? currentRoom.flashSecondsPerQuestion : 60;
        setSecondsRemaining(flashSec);
        setTotalSeconds(flashSec);
      }
    }
  };

  // Finish quiz & calculate summary
  const finishQuiz = () => {
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
            finishQuiz();
          }
        }}
        onOpenSaveModal={() => setSaveModalOpen(true)}
        currentUser={authProfile}
        onLogout={() => {
          userService.logout();
          setAuthProfile(null);
        }}
        onOpenMonitor={() => setActiveView('monitor')}
        onlineUserCount={onlineUserCount}
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
                  onFinishQuiz={finishQuiz}
                  isNextLocked={isNextQuestionLocked}
                  lockReasonText={`Menunggu Teman (${peersAnsweredCount}/${totalPeersCount})`}
                  isMultiplayer={isMultiplayerActive}
                  peersAnsweredCount={peersAnsweredCount}
                  totalPeersCount={totalPeersCount}
                />
              </div>

              {/* Desktop Question Grid Sidebar (1 to 500 Numbers with Color Status) */}
              <div className="hidden md:block md:col-span-4 lg:col-span-4 sticky top-20">
                <QuestionGrid
                  totalQuestions={quizQuestions.length}
                  currentIndex={currentIndex}
                  answers={answers}
                  onSelectQuestion={handleSelectQuestionIndex}
                  onToggleDoubtful={handleToggleDoubtful}
                  isCurrentDoubtful={currentAns?.isDoubtful || false}
                  onFinishQuiz={finishQuiz}
                  isMultiplayer={isMultiplayerActive}
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
                      onFinishQuiz={finishQuiz}
                      isMultiplayer={isMultiplayerActive}
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
            defaultUserName={authProfile?.name || ''}
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
            onNewQuiz={() => setActiveView('home')}
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

        {/* VIEW 6: QUESTION BANK DATABASE MANAGER (500 Questions) */}
        {activeView === 'bank' && (
          <QuestionBankModal
            customQuestions={customQuestions}
            onAddQuestion={(newQ) => setCustomQuestions((prev) => [...prev, newQ])}
          />
        )}

        {/* VIEW 7: QUICK CHEAT SHEET PASAL EMAS */}
        {activeView === 'cheatsheet' && <QuickCheatSheet />}

        {/* VIEW 8: MONITOR PESERTA ONLINE & SELURUH RIWAYAT UJIAN */}
        {activeView === 'monitor' && authProfile && (
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
