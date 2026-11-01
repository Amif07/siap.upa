import React, { useEffect, useRef } from 'react';
import { Clock, AlertTriangle, Zap, ShieldAlert } from 'lucide-react';
import { TimerMode } from '../types/quiz';
import { soundEffects } from '../utils/soundEffects';

interface TimerDisplayProps {
  timerMode: TimerMode;
  secondsRemaining: number;
  totalSeconds: number;
  onExpire: () => void;
  isPaused?: boolean;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  timerMode,
  secondsRemaining,
  totalSeconds,
  onExpire,
}) => {
  const isUrgent = totalSeconds > 0 && secondsRemaining <= Math.max(5, Math.floor(totalSeconds * 0.10));
  const hasExpiredRef = useRef(false);

  // Trigger sound when entering urgency and when expiring
  useEffect(() => {
    if (isUrgent && secondsRemaining > 0 && secondsRemaining % 2 === 0) {
      soundEffects.playUrgentTick();
    }
  }, [isUrgent, secondsRemaining]);

  useEffect(() => {
    if (secondsRemaining <= 0 && !hasExpiredRef.current) {
      hasExpiredRef.current = true;
      onExpire();
    }
  }, [secondsRemaining, onExpire]);

  // Format MM:SS or HH:MM:SS
  const formatTime = (secs: number) => {
    const s = Math.max(0, secs);
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const seconds = s % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const percentLeft = totalSeconds > 0 ? Math.max(0, Math.min(100, (secondsRemaining / totalSeconds) * 100)) : 100;

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-mono font-semibold tabular-nums transition-all ${
          isUrgent
            ? 'bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-600 dark:text-rose-400 animate-pulse shadow-sm shadow-rose-500/20'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
        }`}
      >
        {timerMode === 'flash' ? (
          <Zap className={`w-4 h-4 ${isUrgent ? 'text-rose-600 dark:text-rose-400 animate-bounce' : 'text-amber-500'}`} />
        ) : (
          <Clock className={`w-4 h-4 ${isUrgent ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500 dark:text-slate-400'}`} />
        )}

        <span>{formatTime(secondsRemaining)}</span>

        <span className="text-[11px] font-sans font-normal text-slate-500 dark:text-slate-400">
          {timerMode === 'flash' ? 'sisa / soal' : 'sisa waktu'}
        </span>

        {isUrgent && (
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-sans font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            Kritis
          </span>
        )}
      </div>

      {/* Mini Progress Bar */}
      <div className="hidden lg:block w-24 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            isUrgent ? 'bg-rose-500 animate-pulse' : percentLeft > 40 ? 'bg-amber-500' : 'bg-amber-600'
          }`}
          style={{ width: `${percentLeft}%` }}
        />
      </div>
    </div>
  );
};
