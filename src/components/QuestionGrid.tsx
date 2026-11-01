import React, { useState } from 'react';
import { CheckCircle2, HelpCircle, Circle, Search, ArrowRight } from 'lucide-react';
import { UserAnswerState } from '../types/quiz';
import { soundEffects } from '../utils/soundEffects';

interface QuestionGridProps {
  totalQuestions: number;
  currentIndex: number;
  answers: Record<number, UserAnswerState>;
  onSelectQuestion: (index: number) => void;
  onToggleDoubtful: () => void;
  isCurrentDoubtful: boolean;
  onFinishQuiz: () => void;
  maxAccessibleIndex?: number;
  isMultiplayer?: boolean;
}

export const QuestionGrid: React.FC<QuestionGridProps> = ({
  totalQuestions,
  currentIndex,
  answers,
  onSelectQuestion,
  onToggleDoubtful,
  isCurrentDoubtful,
  onFinishQuiz,
  maxAccessibleIndex,
  isMultiplayer = false,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'unanswered' | 'doubtful'>('all');
  const [jumpInput, setJumpInput] = useState('');

  // Tally counts
  let answeredCount = 0;
  let doubtfulCount = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const a = answers[i];
    if (a?.selectedOption !== null && a?.selectedOption !== undefined) {
      if (a.isDoubtful) {
        doubtfulCount++;
      } else {
        answeredCount++;
      }
    } else if (a?.isDoubtful) {
      doubtfulCount++;
    }
  }

  const unansweredCount = totalQuestions - (answeredCount + doubtfulCount);

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!isNaN(num) && num >= 1 && num <= totalQuestions) {
      soundEffects.playClick();
      onSelectQuestion(num - 1);
      setJumpInput('');
    }
  };

  // Determine button color
  const getButtonStatusClass = (idx: number) => {
    const isCurrent = idx === currentIndex;
    const ans = answers[idx];
    const isAnswered = ans?.selectedOption !== null && ans?.selectedOption !== undefined;
    const isDoubt = ans?.isDoubtful;

    let base = 'transition-all duration-150 font-mono text-xs font-semibold rounded-md flex items-center justify-center ';

    if (isDoubt) {
      // Kuning (Ragu-ragu)
      base += 'bg-amber-400 text-amber-950 dark:bg-amber-500 dark:text-amber-950 hover:bg-amber-300 ';
    } else if (isAnswered) {
      // Hijau (Sudah Dijawab)
      base += 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-emerald-950 hover:bg-emerald-500 ';
    } else {
      // Abu-abu (Belum Dijawab)
      base += 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 ';
    }

    if (isCurrent) {
      base += 'ring-2 ring-blue-600 dark:ring-blue-400 ring-offset-2 dark:ring-offset-slate-900 shadow-md scale-105 z-10';
    }

    return base;
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex flex-col h-full">
      {/* Header Summary */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-3 mb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">
          Navigasi Lembar Jawaban
        </h3>
        
        {/* Status Legends */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-medium truncate">Dijawab: {answeredCount}</span>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="font-medium truncate">Ragu: {doubtfulCount}</span>
          </div>

          <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
            <span className="font-medium truncate">Kosong: {unansweredCount}</span>
          </div>
        </div>

        {/* Quick Jump Input (Ideal for 1-500 questions) */}
        {totalQuestions > 30 && (
          <form onSubmit={handleJump} className="mt-3 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="number"
                min="1"
                max={totalQuestions}
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                placeholder={`Lompat ke No. (1-${totalQuestions})`}
                className="w-full text-xs px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              className="px-2.5 py-1.5 text-xs font-semibold bg-slate-800 text-white dark:bg-slate-700 rounded-md hover:bg-slate-700"
            >
              Lompat
            </button>
          </form>
        )}
      </div>

      {/* Grid Container */}
      <div className="flex-1 overflow-y-auto max-h-[380px] pr-1">
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const ans = answers[idx];
            const isAnswered = ans?.selectedOption !== null && ans?.selectedOption !== undefined;
            const isDoubt = ans?.isDoubtful;

            // Optional filter
            if (filterMode === 'unanswered' && isAnswered) return null;
            if (filterMode === 'doubtful' && !isDoubt) return null;

            const isLocked = maxAccessibleIndex !== undefined && idx > maxAccessibleIndex;

            return (
              <button
                key={idx}
                type="button"
                disabled={isLocked}
                onClick={() => {
                  if (isLocked) {
                    soundEffects.playWrong();
                    return;
                  }
                  soundEffects.playClick();
                  onSelectQuestion(idx);
                }}
                className={`h-9 ${getButtonStatusClass(idx)} ${
                  isLocked ? 'opacity-35 cursor-not-allowed border border-dashed border-slate-300 dark:border-slate-700' : 'cursor-pointer'
                }`}
                title={isLocked ? `Soal No. ${idx + 1} (Terkunci sampai seluruh peserta selesai)` : `Soal No. ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
        {/* Toggle Ragu-ragu for current question */}
        <button
          onClick={onToggleDoubtful}
          className={`w-full py-2 px-3 text-xs font-semibold rounded-lg border flex items-center justify-center gap-1.5 transition-colors ${
            isCurrentDoubtful
              ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-400 text-amber-900 dark:text-amber-300'
              : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
          <span>{isCurrentDoubtful ? 'Hapus Tanda Ragu-Ragu' : 'Tandai Ragu-Ragu (Kuning)'}</span>
        </button>

        {/* Submit Exam */}
        <button
          onClick={onFinishQuiz}
          className="w-full py-2.5 px-3 text-xs font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Selesaikan & Kumpulkan Ujian</span>
        </button>
      </div>
    </div>
  );
};
