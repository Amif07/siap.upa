import React from 'react';
import { Scale, Volume2, VolumeX, Moon, Sun, Users, BookOpen, Layers, RotateCcw, Smartphone, Shield, LogOut, Activity } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';
import { UserProfile } from '../types/auth';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeView: 'home' | 'quiz' | 'multiplayer' | 'bank' | 'cheatsheet' | 'results' | 'review' | 'monitor';
  setActiveView: (view: 'home' | 'quiz' | 'multiplayer' | 'bank' | 'cheatsheet' | 'monitor') => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  isQuizActive: boolean;
  onExitQuiz?: () => void;
  onOpenSaveModal: () => void;
  currentUser?: UserProfile | null;
  onLogout?: () => void;
  onOpenMonitor?: () => void;
  onlineUserCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  activeView,
  setActiveView,
  soundEnabled,
  setSoundEnabled,
  isQuizActive,
  onExitQuiz,
  onOpenSaveModal,
  currentUser,
  onLogout,
  onOpenMonitor,
  onlineUserCount = 1,
}) => {
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEffects.enabled = next;
    if (next) soundEffects.playClick();
  };

  const toggleDark = () => {
    soundEffects.playClick();
    setDarkMode(!darkMode);
  };

  const handleNavClick = (view: 'home' | 'quiz' | 'multiplayer' | 'bank' | 'cheatsheet' | 'monitor') => {
    soundEffects.playClick();
    if (isQuizActive && onExitQuiz) {
      if (confirm('Ujian sedang berlangsung. Apakah Anda yakin ingin beralih tab? Jawaban saat ini tetap tersimpan.')) {
        setActiveView(view);
      }
    } else {
      setActiveView(view);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark (Single text element with refined crest) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0 group select-none"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 dark:from-amber-500 dark:to-amber-700 flex items-center justify-center text-white shadow-sm shadow-amber-900/10">
            <Scale className="w-5 h-5 text-amber-100" />
          </div>
          <div>
            <span className="font-legal text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Advokat<span className="text-amber-600 dark:text-amber-500">Quiz</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              UPA Simulator
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Clean unboxed text links) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white pb-0.5 ${
              activeView === 'home' || activeView === 'quiz'
                ? 'text-amber-600 dark:text-amber-400 font-semibold border-b-2 border-amber-600 dark:border-amber-400'
                : ''
            }`}
          >
            Simulasi Ujian
          </button>

          <button
            onClick={() => handleNavClick('multiplayer')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white pb-0.5 ${
              activeView === 'multiplayer'
                ? 'text-amber-600 dark:text-amber-400 font-semibold border-b-2 border-amber-600 dark:border-amber-400'
                : ''
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Ruang Belajar Bersama</span>
          </button>

          <button
            onClick={() => handleNavClick('bank')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white pb-0.5 ${
              activeView === 'bank'
                ? 'text-amber-600 dark:text-amber-400 font-semibold border-b-2 border-amber-600 dark:border-amber-400'
                : ''
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Bank 500 Soal</span>
          </button>

          <button
            onClick={() => handleNavClick('cheatsheet')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white pb-0.5 ${
              activeView === 'cheatsheet'
                ? 'text-amber-600 dark:text-amber-400 font-semibold border-b-2 border-amber-600 dark:border-amber-400'
                : ''
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Pasal-Pasal Kunci</span>
          </button>

          <button
            onClick={() => handleNavClick('monitor')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 dark:hover:text-white pb-0.5 ${
              activeView === 'monitor'
                ? 'text-amber-600 dark:text-amber-400 font-semibold border-b-2 border-amber-600 dark:border-amber-400'
                : ''
            }`}
            title="Pantau Peserta Online & Seluruh Riwayat Ujian"
          >
            <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Monitor & Riwayat</span>
            <span className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {onlineUserCount} Online
            </span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* In-App Refresh / Reset Button */}
          <button
            onClick={() => {
              soundEffects.playClick();
              if (confirm('Apakah Anda ingin memuat ulang halaman aplikasi?')) {
                window.location.reload();
              }
            }}
            aria-label="Refresh Aplikasi"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Muat Ulang / Refresh Halaman"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={soundEnabled ? 'Suara Aktif' : 'Suara Mati'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle Mode Gelap"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Ganti Mode Terang / Gelap"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Simpan & Pasang App Guide Button */}
          <button
            onClick={() => {
              soundEffects.playClick();
              onOpenSaveModal();
            }}
            aria-label="Simpan dan Pasang Aplikasi"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors shrink-0"
            title="Cara Simpan & Pasang Aplikasi Secara Permanen"
          >
            <Smartphone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Simpan App</span>
          </button>

          {/* User Profile Badge & Quick Action */}
          {currentUser && (
            <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={() => handleNavClick('monitor')}
                className="flex items-center gap-2 p-1 sm:px-2 sm:py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                title={`Akun: ${currentUser.name} (${currentUser.email}) - Klik untuk buka Monitor`}
              >
                <div className="relative">
                  <div className="w-7 h-7 rounded-full bg-slate-900 dark:bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
                </div>
                <div className="hidden lg:flex flex-col">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 max-w-[100px] truncate leading-tight">
                    {currentUser.name}
                  </span>
                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium leading-none">
                    {currentUser.role === 'admin' ? 'Pengawas' : 'Peserta'}
                  </span>
                </div>
              </button>

              {onLogout && (
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    if (confirm('Keluar dari sesi akun saat ini dan kembali ke halaman masuk?')) {
                      onLogout();
                    }
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                  title="Ganti Akun / Keluar"
                  aria-label="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Quick Action Button */}
          {activeView !== 'quiz' ? (
            <button
              onClick={() => handleNavClick('home')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              Mulai Latihan
            </button>
          ) : (
            <button
              onClick={onExitQuiz}
              className="px-3.5 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/50 border border-rose-200 dark:border-rose-900/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              Akhiri Ujian
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 px-2 py-2 text-xs font-medium">
        <button
          onClick={() => handleNavClick('home')}
          className={`px-2 py-1 rounded ${activeView === 'home' || activeView === 'quiz' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Simulasi
        </button>
        <button
          onClick={() => handleNavClick('multiplayer')}
          className={`px-2 py-1 rounded ${activeView === 'multiplayer' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Multiplayer
        </button>
        <button
          onClick={() => handleNavClick('bank')}
          className={`px-2 py-1 rounded ${activeView === 'bank' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Bank 500
        </button>
        <button
          onClick={() => handleNavClick('cheatsheet')}
          className={`px-2 py-1 rounded ${activeView === 'cheatsheet' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Pasal
        </button>
        <button
          onClick={() => handleNavClick('monitor')}
          className={`flex items-center gap-1 px-2 py-1 rounded ${activeView === 'monitor' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          <span>Monitor</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </button>
      </div>
    </header>
  );
};
