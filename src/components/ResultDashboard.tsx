import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, XCircle, HelpCircle, Clock, RotateCcw, BookOpen, Trophy, ArrowRight, Share2 } from 'lucide-react';
import { QuizSessionSummary, Participant, UPAQuestion, UserAnswerState } from '../types/quiz';
import { soundEffects } from '../utils/soundEffects';

interface ResultDashboardProps {
  summary: QuizSessionSummary;
  questions: UPAQuestion[];
  answers: Record<number, UserAnswerState>;
  onOpenReview: () => void;
  onRestart: () => void;
  onNewQuiz: () => void;
  isMultiplayer: boolean;
  participants: Participant[];
  currentUser: Participant | null;
}

export const ResultDashboard: React.FC<ResultDashboardProps> = ({
  summary,
  onOpenReview,
  onRestart,
  onNewQuiz,
  isMultiplayer,
  participants,
  currentUser,
}) => {
  // Trigger fanfare and confetti if passed
  useEffect(() => {
    if (summary.passed) {
      soundEffects.playSuccessFanfare();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d97706', '#f59e0b', '#0f172a', '#10b981'],
        });
      } catch {
        // Ignore
      }
    }
  }, [summary.passed]);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${minutes} Menit ${seconds} Detik`;
  };

  // Sort participants by score desc, then time spent asc
  const leaderboard = [...participants].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.timeSpentSeconds - b.timeSpentSeconds;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Primary Result Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-10 shadow-sm text-center relative overflow-hidden">
        {/* Subtle decorative background accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700"></div>

        <div className="max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 mb-1 border border-amber-200 dark:border-amber-900/60">
            {summary.passed ? <Trophy className="w-8 h-8" /> : <Award className="w-8 h-8" />}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-legal text-slate-900 dark:text-white">
            {summary.passed ? 'SELAMAT! ANDA LULUS PASSING GRADE' : 'HASIL SIMULASI UJIAN PROFESI ADVOKAT'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {summary.passed
              ? `Skor Anda telah melampaui ambang batas kelulusan standar UPA PERADI (70%). Terus pertahankan ketajaman penalaran yuridis dan pemahaman dasar hukum Anda!`
              : `Ambang batas kelulusan standar UPA adalah 70%. Jangan berkecil hati, pelajari dasar hukum konkret dan analisis kasus pada lembar pembahasan di bawah ini.`}
          </p>

          {/* Big Score Box */}
          <div className="py-4">
            <span className="text-5xl sm:text-6xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight">
              {summary.scorePercent.toFixed(1)}
              <span className="text-2xl sm:text-3xl font-sans text-slate-400 dark:text-slate-500">/100</span>
            </span>
            <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {summary.passed ? 'Status: MEMENUHI SYARAT KELULUSAN' : 'Status: PERLU PENGAYAAN MATERI'}
            </div>
          </div>
        </div>

        {/* 4 Core Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">
              Akurasi Jawaban
            </span>
            <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {summary.scorePercent.toFixed(0)}%
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
            <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 block mb-1">
              Jawaban Benar
            </span>
            <span className="text-xl font-bold font-mono text-emerald-800 dark:text-emerald-300">
              {summary.correctCount} / {summary.totalQuestions}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
            <span className="text-[11px] font-medium text-rose-700 dark:text-rose-400 block mb-1">
              Jawaban Salah
            </span>
            <span className="text-xl font-bold font-mono text-rose-800 dark:text-rose-300">
              {summary.wrongCount} Soal
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block mb-1">
              Durasi Pengerjaan
            </span>
            <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {Math.floor(summary.totalDurationSeconds / 60)}m {summary.totalDurationSeconds % 60}s
            </span>
          </div>
        </div>
      </div>

      {/* Multiplayer Leaderboard (if room is active) */}
      {isMultiplayer && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-base sm:text-lg font-bold font-legal text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Papan Peringkat Ruang Ujian (Leaderboard)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Hasil pengerjaan serempak bersama rekan satu ruangan
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">
              {leaderboard.length} Peserta
            </span>
          </div>

          <div className="space-y-2.5">
            {leaderboard.map((participant, index) => {
              const isCurrentUser = participant.id === currentUser?.id;
              const rank = index + 1;

              return (
                <div
                  key={participant.id}
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-4 transition-colors ${
                    isCurrentUser
                      ? 'border-amber-500 bg-amber-50/60 dark:bg-amber-950/40 ring-1 ring-amber-500/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                        rank === 1
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : rank === 2
                          ? 'bg-slate-300 text-slate-900 dark:bg-slate-600 dark:text-white'
                          : rank === 3
                          ? 'bg-amber-800 text-white dark:bg-amber-900'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      {rank}
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white">
                          {participant.name}
                        </span>
                        {isCurrentUser && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-medium">
                            Anda
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        {participant.answeredCount} Soal Dijawab
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-base font-bold font-mono text-slate-900 dark:text-white">
                      {participant.score.toFixed(0)}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 block font-mono">
                      {Math.floor(participant.timeSpentSeconds / 60)}m {participant.timeSpentSeconds % 60}s
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Competency by Legal Domain (Materi UPA) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h3 className="text-base font-bold font-legal text-slate-900 dark:text-white mb-2">
          Analisis Penguasaan Bidang Hukum
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Evaluasi akurasi Anda per materi resmi UPA untuk panduan fokus belajar
        </p>

        <div className="space-y-4">
          {summary.categoryBreakdown.map((cat) => {
            const pct = cat.percentage;
            return (
              <div key={cat.category} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {cat.category}
                  </span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    {cat.correct} / {cat.total} ({pct.toFixed(0)}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={() => {
            soundEffects.playClick();
            onNewQuiz();
          }}
          className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Atur Simulasi Baru</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            onOpenReview();
          }}
          className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          <span>Lihat Pembahasan Lengkap & Dasar Hukum</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
