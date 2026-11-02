import React, { useState } from 'react';
import { Play, Sparkles, BookOpen, Clock, Zap, Users, CheckCircle2, Shield, Award, Scale } from 'lucide-react';
import { TimerMode, UPACategory } from '../types/quiz';
import { UPA_CATEGORIES, MASTER_UPA_DATABASE } from '../data/upaQuestions';
import { soundEffects } from '../utils/soundEffects';

interface QuizSetupProps {
  onStartSoloQuiz: (config: {
    questionCount: number;
    timerMode: TimerMode;
    categoryFilter: UPACategory | 'Semua Materi';
    flashSeconds: number;
    officialMinutes: number;
  }) => void;
  onOpenMultiplayer: () => void;
  onOpenBank: () => void;
  onOpenCheatSheet: () => void;
}

export const QuizSetup: React.FC<QuizSetupProps> = ({
  onStartSoloQuiz,
  onOpenMultiplayer,
  onOpenBank,
  onOpenCheatSheet,
}) => {
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [timerMode, setTimerMode] = useState<TimerMode>('official');
  const [categoryFilter, setCategoryFilter] = useState<UPACategory | 'Semua Materi'>('Semua Materi');
  const [flashSeconds, setFlashSeconds] = useState<number>(60);
  const [officialMinutes, setOfficialMinutes] = useState<number>(30);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playClick();
    onStartSoloQuiz({
      questionCount,
      timerMode,
      categoryFilter,
      flashSeconds,
      officialMinutes,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Developer Attribution Header Bar (Top) */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-950/40 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 shadow-2xs">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span className="font-normal text-slate-700 dark:text-slate-300">
            Web Developed by <strong className="font-semibold text-amber-700 dark:text-amber-400">Ahmad Miftahul Fauzi, S.H.</strong>
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-700/80 dark:text-amber-400/80">
          <Shield className="w-3.5 h-3.5" />
          <span>Edisi Resmi UPA 2026</span>
        </span>
      </div>

      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Simulasi Ujian Profesi Advokat Resmi Standar PERADI</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-legal tracking-tight text-white leading-tight">
            Kuasai Ujian Advokat dengan Penalaran Hukum Presisi
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dilengkapi bank data 500 soal hukum acara komprehensif, analisis yuridis mendalam per butir soal, dasar hukum konkrit (Pasal HIR/RBg, KUHAP, UU PTUN, KEAI), serta mode latihan bersama (multiplayer).
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                soundEffects.playClick();
                onStartSoloQuiz({
                  questionCount: 120,
                  timerMode: 'official',
                  categoryFilter: 'Semua Materi',
                  flashSeconds: 60,
                  officialMinutes: 120,
                });
              }}
              className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-amber-950/20"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Mulai Try Out Resmi (120 Soal Lampiran PDF - 120 Menit)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onStartSoloQuiz({
                  questionCount: 20,
                  timerMode: 'official',
                  categoryFilter: 'Semua Materi',
                  flashSeconds: 60,
                  officialMinutes: 30,
                });
              }}
              className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Tryout Cepat (20 Soal)</span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenMultiplayer();
              }}
              className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Ruang Multiplayer</span>
            </button>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="font-mono text-xl font-bold text-amber-400 block">500</span>
            <span className="text-slate-400">Bank Soal Terstruktur</span>
          </div>
          <div>
            <span className="font-mono text-xl font-bold text-amber-400 block">8</span>
            <span className="text-slate-400">Materi Hukum Utama</span>
          </div>
          <div>
            <span className="font-mono text-xl font-bold text-amber-400 block">100%</span>
            <span className="text-slate-400">Disertai Dasar Hukum</span>
          </div>
          <div>
            <span className="font-mono text-xl font-bold text-amber-400 block">70%</span>
            <span className="text-slate-400">Passing Grade Standar</span>
          </div>
        </div>
      </div>

      {/* Configuration Customizer Box */}
      <form
        onSubmit={handleStart}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="pb-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold font-legal text-slate-900 dark:text-white">
              Konfigurasi Paket Simulasi
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Sesuaikan jumlah soal, materi khusus, dan mode timer sesuai target belajar Anda hari ini
            </p>
          </div>

          {/* Clean Non-Repeat Indicator Badge */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div className="leading-tight">
              <span className="font-bold block">Bebas Pengulangan Soal Aktif</span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                Tiap sesi menyajikan soal baru & pilihan jawaban diacak
              </span>
            </div>
          </div>
        </div>

        {/* 1. Category Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Materi UPA yang Diujikan
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setCategoryFilter('Semua Materi')}
              className={`p-3 text-left rounded-xl border text-xs transition-all ${
                categoryFilter === 'Semua Materi'
                  ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-semibold'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              Semua Materi (Standar Tryout)
            </button>

            {UPA_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`p-3 text-left rounded-xl border text-xs transition-all ${
                  categoryFilter === cat
                    ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-semibold'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Question Count */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Jumlah Soal yang Dikerjakan
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
            {[10, 20, 50, 100, 120, 500].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => {
                  setQuestionCount(count);
                  if (count === 120) setOfficialMinutes(120);
                }}
                className={`py-3 px-2 text-center rounded-xl border text-xs transition-all ${
                  questionCount === count
                    ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-bold'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <span className="font-mono text-sm block">{count} Soal</span>
                <span className="text-[10px] text-slate-400 block mt-0.5 truncate">
                  {count === 10 ? 'Latihan Cepat' : count === 20 ? 'Standar' : count === 50 ? 'Komprehensif' : count === 100 ? 'Tryout Lengkap' : count === 120 ? 'Naskah Tryout PDF' : 'Master Bank 500'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. Timer Mode */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Mode Pewaktu Otomatis (Timer)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <button
              type="button"
              onClick={() => setTimerMode('official')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                timerMode === 'official'
                  ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-semibold'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs mb-1">
                <Clock className="w-4 h-4 text-amber-600" />
                <span className="font-bold">Mode Ujian Resmi (Global Countdown)</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                Waktu dialokasikan sekaligus untuk seluruh paket (misal: 120 menit). Anda bebas berpindah antar nomor kapan saja.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setTimerMode('flash')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                timerMode === 'flash'
                  ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100 font-semibold'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs mb-1">
                <Zap className="w-4 h-4 text-amber-600" />
                <span className="font-bold">Mode Kilat / Latihan per Soal</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
                Waktu dihitung mundur per soal (misal: 60-90 detik). Jika waktu habis, otomatis pindah ke soal berikutnya dan dianggap salah.
              </p>
            </button>
          </div>

          {timerMode === 'official' ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600 dark:text-slate-400">Total Waktu Ujian:</span>
              <div className="flex gap-2">
                {[15, 30, 60, 90, 120].map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setOfficialMinutes(mins)}
                    className={`px-3 py-1.5 text-xs rounded-lg font-mono ${
                      officialMinutes === mins
                        ? 'bg-amber-600 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {mins} Menit
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600 dark:text-slate-400">Durasi per Soal:</span>
              <div className="flex gap-2">
                {[45, 60, 90, 120].map((secs) => (
                  <button
                    key={secs}
                    type="button"
                    onClick={() => setFlashSeconds(secs)}
                    className={`px-3 py-1.5 text-xs rounded-lg font-mono ${
                      flashSeconds === secs
                        ? 'bg-amber-600 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {secs} Detik
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Start Button */}
        <button
          type="submit"
          className="w-full py-3.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Mulai Simulasi Ujian Sekarang</span>
        </button>
      </form>

      {/* Developer Attribution Footer Note (Bottom) */}
      <div className="pt-2 pb-1 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Web Developed by <span className="font-semibold text-slate-800 dark:text-slate-200">Ahmad Miftahul Fauzi, S.H.</span>
        </p>
      </div>
    </div>
  );
};
