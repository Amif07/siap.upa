import React, { useState } from 'react';
import { Download, Smartphone, Globe, Code, Copy, Check, X, ShieldCheck, ExternalLink, Bookmark, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../utils/usePWAInstall';
import { soundEffects } from '../utils/soundEffects';
import { MASTER_UPA_DATABASE } from '../data/upaQuestions';

interface PermanentSaveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PermanentSaveModal: React.FC<PermanentSaveModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedCodeGuide, setCopiedCodeGuide] = useState(false);

  if (!isOpen) return null;

  const publicUrl = window.location.href.split('?')[0];

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(publicUrl);
    soundEffects.playClick();
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleInstallClick = async () => {
    soundEffects.playClick();
    if (isInstallable) {
      await install();
    }
  };

  const handleDownloadJson = () => {
    soundEffects.playClick();
    const jsonStr = JSON.stringify(MASTER_UPA_DATABASE, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `advokatquiz_500_soal_upa_lengkap_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2.5 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Panduan Penyimpanan & Penggunaan Permanen</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-legal text-slate-900 dark:text-white">
          Simpan Aplikasi AdvokatQuiz
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 mb-6 leading-relaxed">
          Ada 4 cara mudah agar aplikasi ini tersimpan di perangkat Anda dan dapat diakses kapan saja secara permanen:
        </p>

        {/* 4 Methods Container */}
        <div className="space-y-4">
          
          {/* Method 1: Install to Phone/PC (PWA) */}
          <div className="p-4 rounded-2xl border border-amber-300 dark:border-amber-800/80 bg-amber-50/50 dark:bg-amber-950/20">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    1. Pasang di Layar Utama HP / Laptop (PWA)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Aplikasi akan muncul seperti aplikasi bawaan (native app) dengan ikon resmi di layar HP/desktop Anda, layar penuh tanpa bar browser, dan dapat diakses saat offline.
                  </p>
                </div>
              </div>

              {/* Install Trigger */}
              <div className="shrink-0 pt-1">
                {isInstalled ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 rounded-xl">
                    <CheckCircle2 className="w-4 h-4" />
                    Terpasang
                  </span>
                ) : isInstallable ? (
                  <button
                    onClick={handleInstallClick}
                    className="px-4 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow-xs transition-colors"
                  >
                    Pasang Sekarang
                  </button>
                ) : isIOS ? (
                  <div className="text-[11px] text-right text-slate-500 dark:text-slate-400">
                    Buka di Safari &rarr; Bagikan &rarr; <strong>Tambah ke Layar Utama</strong>
                  </div>
                ) : (
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Klik menu browser &rarr; <strong>Install App</strong>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Method 2: Bookmark Shared App URL */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-700 text-amber-400 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  2. Simpan & Bookmark Link Publik (Permanen di Cloud)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  Aplikasi telah di-hosting aktif secara daring di Google Cloud Run. Simpan link ini di bookmark browser atau bagikan ke rekan seangkatan:
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={publicUrl}
                    className="w-full text-xs font-mono px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 select-all"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 flex items-center gap-1 shrink-0"
                  >
                    {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedUrl ? 'Tersalin' : 'Salin URL'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Method 3: Download Complete 500 Questions JSON */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-700 text-emerald-400 flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    3. Unduh File Database 500 Soal (.JSON)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                    Simpan seluruh naskah soal, kunci jawaban resmi, dan pembahasan dasar hukum ke laptop Anda dalam format file JSON standar.
                  </p>
                </div>
              </div>
              <button
                onClick={handleDownloadJson}
                className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh JSON</span>
              </button>
            </div>
          </div>

          {/* Method 4: Self-Hosting / GitHub Code Export */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 dark:bg-slate-700 text-blue-400 flex items-center justify-center shrink-0">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  4. Export Source Code & Hosting Gratis Mandiri
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  Kode program ini adalah React + TypeScript + Vite standar. Anda dapat mengunduh seluruh proyek dari AI Studio, menyimpannya di <strong>GitHub</strong>, dan menghubungkannya ke <strong>Vercel</strong> atau <strong>Netlify</strong> untuk di-hosting gratis selamanya dengan domain Anda sendiri.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 rounded-xl transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
