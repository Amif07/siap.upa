import React, { useState } from 'react';
import { Scale, Mail, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';
import { userService } from '../services/userService';
import { UserProfile } from '../types/auth';
import { soundEffects } from '../utils/soundEffects';

interface LoginGateModalProps {
  onLoginSuccess: (user: UserProfile) => void;
}

export const LoginGateModal: React.FC<LoginGateModalProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setErrorMsg('Mohon masukkan alamat email Anda.');
      return;
    }

    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setErrorMsg('Format email tidak valid. Masukkan email yang benar.');
      return;
    }

    soundEffects.playClick();
    const user = userService.login('', cleanEmail);
    onLoginSuccess(user);
  };

  const handleQuickLoginAdmin = () => {
    soundEffects.playClick();
    const user = userService.login(
      'Ahmad Miftahul Fauzi, S.H.',
      'ahmadmiftahulfauzi07@gmail.com',
      'Pengembang & Pengawas UPA'
    );
    onLoginSuccess(user);
  };

  const handleQuickLoginFriend = () => {
    soundEffects.playClick();
    const user = userService.login(
      'Budi Santoso, S.H.',
      'budi.santoso@gmail.com',
      'PKPA PERADI 2026'
    );
    onLoginSuccess(user);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700" />

        {/* Branding Crest */}
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-md shadow-amber-950/20 mx-auto">
            <Scale className="w-7 h-7 text-amber-100" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-legal text-slate-900 dark:text-white tracking-tight">
              Advokat<span className="text-amber-600 dark:text-amber-500">Quiz</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Portal Akses Simulasi Ujian Profesi Advokat Indonesia
            </p>
          </div>
        </div>

        {/* Info Banner */}
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5 mb-5">
          <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Cukup masukkan alamat email Anda untuk mengakses seluruh simulasi soal, papan peringkat, dan riwayat ujian.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs text-rose-600 dark:text-rose-400 mb-4">
            {errorMsg}
          </div>
        )}

        {/* Email Only Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Alamat Email Anda <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="nama.anda@gmail.com"
                className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-2xs"
              />
            </div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 block">
              Nama dan profil Anda akan disesuaikan otomatis dengan akun email ini.
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Masuk Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Testing Shortcuts */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center space-y-2">
          <span className="text-[11px] text-slate-400 dark:text-slate-500 block">
            Pintasan Masuk Cepat:
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={handleQuickLoginAdmin}
              className="flex-1 py-2 px-2.5 text-[11px] font-semibold rounded-xl border border-amber-300 dark:border-amber-800/80 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors truncate"
              title="ahmadmiftahulfauzi07@gmail.com"
            >
              Masuk sbg Pengembang / Pengawas
            </button>
            <button
              type="button"
              onClick={handleQuickLoginFriend}
              className="flex-1 py-2 px-2.5 text-[11px] font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors truncate"
              title="budi.santoso@gmail.com"
            >
              Masuk sbg Rekan Belajar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
