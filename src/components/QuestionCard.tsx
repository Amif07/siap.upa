import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Check,
  CheckCircle2,
  XCircle,
  Lock,
  Users,
  Clock,
  Scale,
  Trophy,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import { UPAQuestion, QuestionOptionKey, UserAnswerState } from '../types/quiz';
import { soundEffects } from '../utils/soundEffects';

interface QuestionCardProps {
  question: UPAQuestion;
  index: number;
  totalQuestions: number;
  userAnswer?: UserAnswerState;
  onSelectOption: (optionKey: QuestionOptionKey) => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleDoubtful: () => void;
  isFirst: boolean;
  isLast: boolean;
  onFinishQuiz: () => void;
  isNextLocked?: boolean;
  lockReasonText?: string;
  isMultiplayer?: boolean;
  isHost?: boolean;
  peersAnsweredCount?: number;
  totalPeersCount?: number;
  secondsRemaining?: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  totalQuestions,
  userAnswer,
  onSelectOption,
  onPrev,
  onNext,
  onToggleDoubtful,
  isFirst,
  isLast,
  onFinishQuiz,
  isNextLocked = false,
  lockReasonText,
  isMultiplayer = false,
  isHost = true,
  peersAnsweredCount = 1,
  totalPeersCount = 1,
  secondsRemaining,
}) => {
  const selectedKey = userAnswer?.selectedOption;
  const hasAnswered = selectedKey !== null && selectedKey !== undefined;
  const isTimeUp = Boolean(userAnswer?.timeSpentSeconds && !selectedKey);
  const isRevealed = hasAnswered || isTimeUp;
  const isDoubtful = userAnswer?.isDoubtful || false;
  const isCorrect = selectedKey === question.correctAnswer;

  const handleSelect = (key: QuestionOptionKey) => {
    if (isRevealed) return; // Prevent changing answer once submitted
    onSelectOption(key);
  };

  return (
    <div className="bg-white dark:bg-[#151b26] border border-stone-200/80 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col justify-between transition-colors">
      <div>
        {/* Unboxed Metadata with Typographic Separator (Zero-Pill discipline) */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-stone-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-amber-700 dark:text-amber-400">
              {question.category}
            </span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="font-mono tabular-nums font-semibold text-slate-800 dark:text-slate-200">
              Soal {index + 1} dari {totalQuestions}
            </span>
          </div>

          {secondsRemaining !== undefined && (
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
              secondsRemaining <= 10
                ? 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-400 animate-pulse border border-rose-300 dark:border-rose-800'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{secondsRemaining}s</span>
            </div>
          )}
        </div>

        {/* Real-time Multiplayer Synchronization Status Header */}
        {isMultiplayer && (
          <div className="mb-5 p-3 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Mode Multiplayer Sinkron:
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {isHost
                  ? isNextLocked
                    ? 'Menunggu semua peserta aktif menjawab atau waktu habis'
                    : 'Siap melanjutkan ke tahap berikutnya'
                  : 'Layar dikendalikan Admin bersama seluruh peserta'}
              </span>
            </div>
            <div>
              <span
                className={`inline-flex items-center gap-1.5 font-bold px-2.5 py-1 rounded-lg text-xs ${
                  peersAnsweredCount >= totalPeersCount
                    ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60'
                    : secondsRemaining !== undefined && secondsRemaining <= 0
                    ? 'bg-sky-100 dark:bg-sky-950/70 text-sky-900 dark:text-sky-300 border border-sky-300/60 dark:border-sky-700/60'
                    : 'bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/60'
                }`}
              >
                {peersAnsweredCount >= totalPeersCount ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Semua peserta menjawab: {peersAnsweredCount}/{totalPeersCount} selesai</span>
                  </>
                ) : secondsRemaining !== undefined && secondsRemaining <= 0 ? (
                  <>
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>Waktu habis · {peersAnsweredCount}/{totalPeersCount} selesai</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                    <span>Menunggu peserta menjawab: {peersAnsweredCount}/{totalPeersCount} selesai</span>
                  </>
                )}
              </span>
            </div>
          </div>
        )}

        {/* Question Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${question.id}-${index}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
          >
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed tracking-tight mb-6">
              {question.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3 mb-6" role="radiogroup" aria-label="Pilihan Jawaban">
              {question.options.map((opt) => {
                const isSelected = selectedKey === opt.key;
                const isThisKeyCorrect = opt.key === question.correctAnswer;

                let buttonStyle =
                  'border-stone-200/80 dark:border-slate-800 bg-stone-50/40 dark:bg-[#111722] hover:border-stone-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer';
                let badgeStyle =
                  'bg-stone-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400';

                if (isRevealed) {
                  if (isThisKeyCorrect) {
                    // Correct key always highlighted in emerald green
                    buttonStyle =
                      'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/60 dark:border-emerald-500 ring-2 ring-emerald-500/30 text-emerald-950 dark:text-emerald-100 font-medium cursor-default';
                    badgeStyle = 'bg-emerald-600 text-white font-bold shadow-xs';
                  } else if (isSelected && !isThisKeyCorrect) {
                    // Wrong selection highlighted in rose red
                    buttonStyle =
                      'border-rose-500 bg-rose-50/90 dark:bg-rose-950/60 dark:border-rose-500 ring-2 ring-rose-500/30 text-rose-950 dark:text-rose-100 font-medium cursor-default';
                    badgeStyle = 'bg-rose-600 text-white font-bold shadow-xs';
                  } else {
                    // Other unselected options dimmed
                    buttonStyle =
                      'border-stone-200/50 dark:border-slate-800/50 bg-stone-50/20 dark:bg-slate-900/20 opacity-50 text-slate-400 dark:text-slate-500 cursor-not-allowed';
                    badgeStyle = 'bg-stone-200/50 dark:bg-slate-800/50 text-slate-400';
                  }
                } else if (isSelected) {
                  buttonStyle =
                    'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 dark:border-amber-500 shadow-sm ring-1 ring-amber-500/20';
                  badgeStyle =
                    'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950 shadow-sm';
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    disabled={isRevealed}
                    onClick={() => handleSelect(opt.key)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-150 flex items-start gap-3.5 group ${buttonStyle}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${badgeStyle}`}
                    >
                      {opt.key}
                    </span>
                    <span className="flex-1 pt-0.5 leading-relaxed">
                      {opt.text}
                    </span>

                    {/* Result Badges after revealing */}
                    {isRevealed && isThisKeyCorrect && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-600 text-white shrink-0 self-center shadow-2xs">
                        <Check className="w-3.5 h-3.5" />
                        <span>KUNCI JAWABAN</span>
                      </span>
                    )}
                    {isRevealed && isSelected && !isThisKeyCorrect && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-rose-600 text-white shrink-0 self-center shadow-2xs">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>PILIHAN ANDA</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* INSTANT LEGAL BASIS & EXPLANATION CARD (TAMPIL LANGSUNG SETELAH DIJAWAB) */}
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="mt-6 p-5 sm:p-6 rounded-2xl border border-amber-500/30 bg-amber-50/40 dark:bg-amber-950/20 dark:border-amber-500/30 space-y-4"
              >
                {/* Result Notification Banner */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-200/80 dark:border-amber-900/50">
                  <div className="flex items-center gap-3">
                    {isCorrect ? (
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs">
                        <AlertCircle className="w-5 h-5" />
                      </div>
                    )}
                    <div>
                      <h3
                        className={`text-sm font-bold ${
                          isCorrect
                            ? 'text-emerald-800 dark:text-emerald-300'
                            : 'text-rose-800 dark:text-rose-300'
                        }`}
                      >
                        {isCorrect
                          ? 'Jawaban Anda Tepat! (+1 Poin)'
                          : isTimeUp
                          ? 'Waktu Mengerjakan Habis (0 Poin)'
                          : 'Jawaban Anda Kurang Tepat (0 Poin)'}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Kunci Jawaban:{' '}
                        <span className="font-bold text-slate-900 dark:text-white">
                          Pilihan {question.correctAnswer}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300 text-xs font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                    <span>Pembahasan Yuridis</span>
                  </div>
                </div>

                {/* Dasar Hukum Positif & Bunyi Pasal */}
                <div className="bg-white dark:bg-slate-900/90 p-4 rounded-xl border border-amber-300/80 dark:border-amber-700/50 shadow-2xs space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                    <Scale className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>DASAR HUKUM POSITIF &amp; BUNYI PASAL:</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed font-legal">
                    {question.explanation.legalBasis}
                  </p>
                  {question.explanation.statuteText ? (
                    <blockquote className="pl-3.5 pr-3 py-2.5 border-l-3 border-amber-500/80 dark:border-amber-400/70 bg-amber-50/50 dark:bg-amber-950/25 rounded-r-lg text-xs sm:text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                      "{question.explanation.statuteText.replace(/^["“]|["”]$/g, '')}"
                    </blockquote>
                  ) : (
                    <blockquote className="pl-3.5 pr-3 py-2.5 border-l-3 border-amber-500/70 dark:border-amber-400/60 bg-amber-50/40 dark:bg-amber-950/20 rounded-r-lg text-xs sm:text-sm italic text-slate-700 dark:text-slate-200 leading-relaxed">
                      Inti Ketentuan: {question.explanation.summary}
                    </blockquote>
                  )}
                </div>

                {/* Ringkasan Kaidah Hukum (ditampilkan saat bunyi pasal terpisah tersedia agar tidak duplikat) */}
                {question.explanation.statuteText && (
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                      Ringkasan Kaidah Hukum:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {question.explanation.summary}
                    </p>
                  </div>
                )}

                {/* Analisis & Catatan Pembaruan (RUU KUHAP) atau Analisis Yuridis Mendalam */}
                {question.explanation.ruuComparison || question.category === 'Hukum Acara Pidana' ? (
                  <div className="bg-sky-50/80 dark:bg-sky-950/25 p-4 rounded-xl border border-sky-200/90 dark:border-sky-800/60 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-800 dark:text-sky-300">
                      <BookOpen className="w-4 h-4 shrink-0 text-sky-600 dark:text-sky-400" />
                      <span>ANALISIS &amp; CATATAN PEMBARUAN (RUU KUHAP)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {question.explanation.analysis}
                    </p>
                    {question.explanation.ruuComparison && (
                      <div className="pt-2.5 border-t border-sky-200/70 dark:border-sky-800/50">
                        <span className="text-[11px] font-bold text-sky-800 dark:text-sky-300 uppercase tracking-wider block mb-1">
                          Perbandingan Pembaruan (RUU KUHAP):
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {question.explanation.ruuComparison}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                      Analisis Yuridis Mendalam:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {question.explanation.analysis}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-5 border-t border-stone-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 mt-6">
        {/* Toggle Doubtful Flag */}
        <button
          type="button"
          onClick={() => {
            soundEffects.playClick();
            onToggleDoubtful();
          }}
          className={`px-3 py-2 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
            isDoubtful
              ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700/60 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-amber-500" />
          <span>{isDoubtful ? 'Status: Ragu-ragu' : 'Tandai Ragu'}</span>
        </button>

        {/* Prev / Next / Submit Controls */}
        <div className="flex items-center gap-2.5">
          {/* Previous question button (Only enabled in Solo mode; in multiplayer all participants are kept on same screen) */}
          {!isMultiplayer && (
            <button
              type="button"
              disabled={isFirst}
              onClick={() => {
                soundEffects.playClick();
                onPrev();
              }}
              className={`px-4 py-2.5 text-xs font-semibold rounded-xl border flex items-center gap-1 transition-colors ${
                isFirst
                  ? 'opacity-40 cursor-not-allowed border-stone-200 dark:border-slate-800 text-slate-400'
                  : 'border-stone-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Sebelumnya</span>
            </button>
          )}

          {/* MULTIPLAYER MODE CONTROLS */}
          {isMultiplayer ? (
            isHost ? (
              // HOST / ADMIN CONTROLS: Locked until all active participants answer OR timer reaches 0
              !isLast ? (
                <button
                  type="button"
                  disabled={isNextLocked}
                  onClick={() => {
                    if (isNextLocked) {
                      soundEffects.playWrong();
                      return;
                    }
                    soundEffects.playClick();
                    onNext();
                  }}
                  title={
                    isNextLocked
                      ? lockReasonText || `Menunggu peserta menjawab (${peersAnsweredCount}/${totalPeersCount})`
                      : 'Lanjut ke soal berikutnya untuk seluruh peserta'
                  }
                  className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
                    isNextLocked
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 cursor-not-allowed opacity-75'
                      : 'text-white bg-amber-600 hover:bg-amber-500 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer ring-2 ring-amber-500/20'
                  }`}
                >
                  {isNextLocked ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Next Soal Terkunci ({peersAnsweredCount}/{totalPeersCount} selesai)</span>
                    </>
                  ) : (
                    <>
                      <span>Lanjut ke Soal Berikutnya (Next Soal)</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isNextLocked}
                  onClick={() => {
                    if (isNextLocked) {
                      soundEffects.playWrong();
                      return;
                    }
                    soundEffects.playClick();
                    onNext();
                  }}
                  title={
                    isNextLocked
                      ? lockReasonText || `Menunggu peserta menjawab (${peersAnsweredCount}/${totalPeersCount})`
                      : 'Selesaikan ujian dan tampilkan hasil akhir untuk seluruh peserta'
                  }
                  className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
                    isNextLocked
                      ? 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-700 cursor-not-allowed opacity-75'
                      : 'text-white bg-emerald-600 hover:bg-emerald-500 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer ring-2 ring-emerald-500/20'
                  }`}
                >
                  {isNextLocked ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Selesai Ujian Terkunci ({peersAnsweredCount}/{totalPeersCount} selesai)</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Selesai Ujian & Evaluasi Seluruh Peserta</span>
                    </>
                  )}
                </button>
              )
            ) : (
              // GUEST / NON-HOST: Waits for Admin to trigger Next Question
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 text-xs text-amber-900 dark:text-amber-300 font-semibold shadow-2xs">
                <Clock className="w-4 h-4 animate-spin text-amber-600 dark:text-amber-400" />
                <span>
                  {isRevealed
                    ? 'Menunggu Admin/Host berpindah ke soal berikutnya...'
                    : 'Pilih jawaban Anda terlebih dahulu...'}
                </span>
              </div>
            )
          ) : (
            // SOLO MODE CONTROLS
            !isLast ? (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onNext();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>{hasAnswered ? 'Lanjut ke Soal Berikutnya' : 'Berikutnya'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  onFinishQuiz();
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Selesai & Lihat Skor</span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
