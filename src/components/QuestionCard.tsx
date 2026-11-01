import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, HelpCircle, Check, Lock, Users, Clock } from 'lucide-react';
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
  peersAnsweredCount?: number;
  totalPeersCount?: number;
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
  peersAnsweredCount = 1,
  totalPeersCount = 1,
}) => {
  const selectedKey = userAnswer?.selectedOption;
  const isDoubtful = userAnswer?.isDoubtful || false;

  const handleSelect = (key: QuestionOptionKey) => {
    soundEffects.playSelectOption();
    onSelectOption(key);
  };

  return (
    <div className="bg-white dark:bg-[#151b26] border border-stone-200/80 dark:border-slate-800 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col justify-between transition-colors">
      <div>
        {/* Unboxed Metadata with Typographic Separator (Zero-Pill discipline) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 pb-3 border-b border-stone-100 dark:border-slate-800/80">
          <span className="font-semibold text-amber-700 dark:text-amber-400">
            {question.category}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>{question.topicTag}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span>Tingkat: {question.difficulty}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
          <span className="font-mono tabular-nums">Soal {index + 1} dari {totalQuestions}</span>
        </div>

        {/* Real-time Multiplayer Synchronization Status Header */}
        {isMultiplayer && (
          <div className="mb-5 p-3 rounded-xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Mode Ujian Bareng Real-Time:
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                Layar terkunci bersama antar peserta
              </span>
            </div>
            <div>
              <span
                className={`inline-flex items-center gap-1.5 font-bold px-2.5 py-1 rounded-lg text-xs ${
                  isNextLocked
                    ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/60'
                    : 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-700/60'
                }`}
              >
                {isNextLocked ? (
                  <>
                    <Lock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                    <span>Menunggu Peserta ({peersAnsweredCount}/{totalPeersCount})</span>
                  </>
                ) : (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Semua Selesai! Buka Soal Selanjutnya ({peersAnsweredCount}/{totalPeersCount})</span>
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

                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelect(opt.key)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all duration-150 flex items-start gap-3.5 group cursor-pointer ${
                      isSelected
                        ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 dark:border-amber-500 shadow-sm ring-1 ring-amber-500/20'
                        : 'border-stone-200/80 dark:border-slate-800 bg-stone-50/40 dark:bg-[#111722] hover:border-stone-300 dark:hover:border-slate-700 hover:bg-stone-100/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950 shadow-sm'
                          : 'bg-stone-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-stone-300/80 dark:group-hover:bg-slate-700'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <span
                      className={`flex-1 pt-0.5 leading-relaxed ${
                        isSelected
                          ? 'font-medium text-amber-950 dark:text-amber-100'
                          : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {opt.text}
                    </span>
                    {isSelected && (
                      <Check className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 self-center" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-4 border-t border-stone-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
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
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={isFirst}
            onClick={() => {
              soundEffects.playClick();
              onPrev();
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border flex items-center gap-1 transition-colors ${
              isFirst
                ? 'opacity-40 cursor-not-allowed border-stone-200 dark:border-slate-800 text-slate-400'
                : 'border-stone-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {!isLast ? (
            <button
              type="button"
              disabled={isNextLocked}
              onClick={() => {
                soundEffects.playClick();
                onNext();
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-sm ${
                isNextLocked
                  ? 'bg-stone-200 dark:bg-slate-800 text-stone-500 dark:text-slate-400 cursor-not-allowed border border-stone-300 dark:border-slate-700'
                  : isMultiplayer
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white ring-2 ring-emerald-500/20 cursor-pointer'
                  : 'text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 cursor-pointer'
              }`}
              title={isNextLocked ? 'Terkunci: Seluruh peserta room harus menjawab soal ini sebelum berpindah.' : ''}
            >
              {isNextLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                  <span>{lockReasonText || `Menunggu Teman (${peersAnsweredCount}/${totalPeersCount})`}</span>
                </>
              ) : (
                <>
                  <span>{isMultiplayer ? `Lanjut Bersama (${peersAnsweredCount}/${totalPeersCount})` : 'Berikutnya'}</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              disabled={isNextLocked}
              onClick={() => {
                soundEffects.playClick();
                onFinishQuiz();
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors shadow-sm ${
                isNextLocked
                  ? 'bg-stone-200 dark:bg-slate-800 text-stone-400 cursor-not-allowed'
                  : 'text-white bg-emerald-600 hover:bg-emerald-500 cursor-pointer'
              }`}
            >
              <span>Selesai & Nilai</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
