import React, { useState, useEffect, useRef } from 'react';
import { Scale, Mail, ArrowRight, Lock, CheckCircle2, Clock, Shield, RefreshCw, AlertTriangle } from 'lucide-react';
import { userService } from '../services/userService';
import { UserProfile } from '../types/auth';
import { soundEffects } from '../utils/soundEffects';

interface LoginGateModalProps {
  onLoginSuccess: (user: UserProfile) => void;
}

export const LoginGateModal: React.FC<LoginGateModalProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);
  const [checkCount, setCheckCount] = useState(0);

  // Polling & WebSocket listener for Pending Approval State
  useEffect(() => {
    if (!pendingEmail) return;

    let isMounted = true;

    // Check status immediately and periodically
    const checkNow = async () => {
      const res = await userService.checkApprovalStatus(pendingEmail);
      if (!isMounted) return;

      setCheckCount((prev) => prev + 1);

      if (res.status === 'approved' && res.user) {
        soundEffects.playSuccess();
        onLoginSuccess(res.user);
      } else if (res.status === 'rejected') {
        setErrorMsg('Permintaan akses untuk email ini ditolak oleh Admin.');
        setPendingEmail(null);
      }
    };

    checkNow();
    const interval = setInterval(checkNow, 2500);

    // Instant WebSocket event listener
    const unsubscribe = userService.onAuthEvent((event) => {
      if (
        event &&
        event.type === 'USER_APPROVED' &&
        event.email &&
        event.email.toLowerCase() === pendingEmail.toLowerCase()
      ) {
        soundEffects.playSuccess();
        const user = event.user || userService.getCurrentUser();
        if (user) {
          onLoginSuccess(user);
        }
      }
    });

    return () => {
      isMounted = false;
      clearInterval(interval);
      unsubscribe();
    };
  }, [pendingEmail, onLoginSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setErrorMsg('Mohon masukkan alamat email Anda.');
      return;
    }

    if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setErrorMsg('Format email tidak valid. Masukkan alamat email yang benar.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
    soundEffects.playClick();

    try {
      const result = await userService.loginOrRequestAccess(cleanEmail);

      if (result.status === 'approved') {
        soundEffects.playSuccess();
        onLoginSuccess(result.user);
      } else if (result.status === 'pending') {
        setPendingEmail(cleanEmail);
      } else if (result.status === 'rejected') {
        setErrorMsg('Akses Anda belum disetujui oleh Admin. Silakan hubungi admin untuk konfirmasi.');
      }
    } catch {
      setErrorMsg('Terjadi kendala jaringan saat menghubungi server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickLoginAdmin = async () => {
    soundEffects.playClick();
    setIsLoading(true);
    const result = await userService.loginOrRequestAccess(
      'ahmadmiftahulfauzi07@gmail.com',
      'Ahmad Miftahul Fauzi, S.H.',
      'Pengawas & Pengembang UPA'
    );
    setIsLoading(false);
    if (result.status === 'approved') {
      onLoginSuccess(result.user);
    }
  };

  const handleCancelPending = () => {
    soundEffects.playClick();
    setPendingEmail(null);
    setErrorMsg('');
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

        {/* STATE A: PENDING ADMIN CONFIRMATION */}
        {pendingEmail ? (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto animate-pulse">
                <Clock className="w-6 h-6" />
              </div>
              
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Menunggu Konfirmasi Admin
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Permintaan akses untuk akun berikut telah dikirim ke Admin:
                </p>
                <div className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-amber-300 dark:border-amber-700 font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                  {pendingEmail}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-100 dark:border-amber-900/40 text-[11px] text-slate-600 dark:text-slate-300 text-left space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400">
                  <Shield className="w-3.5 h-3.5 shrink-0" />
                  <span>Protokol Keamanan Akses:</span>
                </div>
                <p className="leading-relaxed">
                  Admin (Ahmad Miftahul Fauzi) akan mengonfirmasi akun Anda di dashboard pengawas. Begitu disetujui, halaman ini akan otomatis masuk secara langsung, dan Anda bebas masuk kapan saja di waktu mendatang.
                </p>
              </div>

              {/* Pulsing Live Check Indicator */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span>Memantau persetujuan real-time...</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCancelPending}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer text-center"
            >
              Ganti Email Lain
            </button>
          </div>
        ) : (
          /* STATE B: LOGIN / REQUEST ACCESS FORM */
          <div className="space-y-4">
            {/* Info Banner */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Masuk menggunakan email Anda. Pengguna baru memerlukan konfirmasi admin di awal, dan setelah disetujui Anda bebas masuk kapan saja.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs text-rose-600 dark:text-rose-400 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Email Form */}
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
                    disabled={isLoading}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="nama.rekan@gmail.com"
                    className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-2xs"
                  />
                </div>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-1.5 block">
                  Jika sudah pernah dikonfirmasi sebelumnya, Anda akan langsung masuk otomatis.
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 disabled:opacity-50 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Memverifikasi Akses...</span>
                  </>
                ) : (
                  <>
                    <span>Lanjutkan Masuk</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Admin Quick Login */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
              <span className="text-[11px] text-slate-400 dark:text-slate-500 block mb-2">
                Akses Khusus Admin / Pengawas:
              </span>
              <button
                type="button"
                onClick={handleQuickLoginAdmin}
                className="w-full py-2 px-3 text-[11px] font-semibold rounded-xl border border-amber-300 dark:border-amber-800/80 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>Masuk sbg Admin (Ahmad Miftahul Fauzi, S.H.)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
