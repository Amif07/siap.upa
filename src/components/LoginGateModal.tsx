import React, { useState, useEffect } from 'react';
import { Scale, Mail, User, ArrowRight, Clock, Shield, RefreshCw, AlertTriangle } from 'lucide-react';
import { userService } from '../services/userService';
import { UserProfile } from '../types/auth';
import { soundEffects } from '../utils/soundEffects';

interface LoginGateModalProps {
  onLoginSuccess: (user: UserProfile) => void;
}

export const LoginGateModal: React.FC<LoginGateModalProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingInfo, setPendingInfo] = useState<{ email: string; username?: string | null; message: string } | null>(null);

  // Polling & WebSocket listener while waiting for Admin approval
  useEffect(() => {
    if (!pendingInfo?.email) return;

    let isMounted = true;

    const checkNow = async () => {
      const res = await userService.checkApprovalStatus(pendingInfo.email);
      if (!isMounted) return;

      if (res.status === 'approved' && res.user) {
        soundEffects.playSuccess();
        onLoginSuccess(res.user);
      } else if (res.status === 'rejected' || res.status === 'not_found') {
        setErrorMsg('Permintaan akses Anda dihapus atau belum disetujui oleh Admin.');
        setPendingInfo(null);
      }
    };

    checkNow();
    const interval = setInterval(checkNow, 2500);

    const unsubscribe = userService.onAuthEvent((event) => {
      if (
        event &&
        event.type === 'USER_APPROVED' &&
        event.email &&
        event.email.toLowerCase() === pendingInfo.email.toLowerCase()
      ) {
        checkNow();
      } else if (
        event &&
        event.type === 'USER_REJECTED' &&
        event.email &&
        event.email.toLowerCase() === pendingInfo.email.toLowerCase()
      ) {
        setErrorMsg('Permintaan akses Anda ditolak/dihapus oleh Admin.');
        setPendingInfo(null);
      }
    });

    return () => {
      isMounted = false;
      clearInterval(interval);
      unsubscribe();
    };
  }, [pendingInfo, onLoginSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    const cleanUsername = username.trim();

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
      const result = await userService.loginOrRequestAccess(cleanEmail, cleanUsername);

      if (result.status === 'approved' && result.user) {
        soundEffects.playSuccess();
        onLoginSuccess(result.user);
      } else if (result.status === 'pending') {
        setPendingInfo({
          email: cleanEmail,
          username: result.user?.username ?? (cleanUsername || null),
          message: result.message || 'Permintaan akses terkirim. Silakan tunggu persetujuan Admin.',
        });
      } else if (result.status === 'rejected') {
        setErrorMsg('Akses Anda belum disetujui oleh Admin.');
      } else {
        setErrorMsg(result.message || 'Terjadi kendala saat memproses login.');
      }
    } catch {
      setErrorMsg('Terjadi kendala jaringan saat menghubungi server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToForm = () => {
    soundEffects.playClick();
    setPendingInfo(null);
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700" />

        {/* Branding */}
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

        {/* STATE A: WAITING FOR ADMIN APPROVAL */}
        {pendingInfo ? (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto animate-pulse">
                <Clock className="w-6 h-6" />
              </div>

              <div className="space-y-1.5">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Menunggu Persetujuan Admin
                </h2>
                <p className="text-xs font-medium text-amber-900 dark:text-amber-200 leading-relaxed">
                  {pendingInfo.message}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-amber-200 dark:border-amber-800 text-xs text-left space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-500 dark:text-slate-400">Email:</span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-white truncate">
                    {pendingInfo.email}
                  </span>
                </div>
                {pendingInfo.username && (
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-500 dark:text-slate-400">Username:</span>
                    <span className="font-semibold text-slate-900 dark:text-white truncate">
                      {pendingInfo.username}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span>Halaman akan terbuka otomatis setelah disetujui Admin...</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleBackToForm}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer text-center"
            >
              Kembali ke Halaman Login
            </button>
          </div>
        ) : (
          /* STATE B: LOGIN FORM (STRICTLY 2 INPUTS: EMAIL & USERNAME) */
          <div className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-xs text-rose-600 dark:text-rose-400 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email <span className="text-rose-500">*</span>
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
                    placeholder="Masukkan email Anda"
                    className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Username
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    name="custom_username_input"
                    autoComplete="off"
                    disabled={isLoading}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (errorMsg) setErrorMsg('');
                    }}
                    placeholder="Ketik username Anda sendiri"
                    className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all shadow-2xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 disabled:opacity-50 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Memproses...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-500">
              <Shield className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Pengguna baru memerlukan persetujuan Admin sebelum masuk.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
