import React, { useState } from 'react';
import { Database, ShieldCheck, X, Check, ExternalLink, HelpCircle, Server, RefreshCw } from 'lucide-react';
import { realtimeMultiplayerService, SupabaseConfig, RealtimeTransportType } from '../services/realtimeMultiplayer';
import { soundEffects } from '../utils/soundEffects';

interface SupabaseConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTransport: RealtimeTransportType;
  connectionStatus: string;
}

export const SupabaseConfigModal: React.FC<SupabaseConfigModalProps> = ({
  isOpen,
  onClose,
  currentTransport,
  connectionStatus,
}) => {
  const currentConfig = realtimeMultiplayerService.getSupabaseConfig();
  const [url, setUrl] = useState(currentConfig.url);
  const [anonKey, setAnonKey] = useState(currentConfig.anonKey);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playClick();
    realtimeMultiplayerService.saveSupabaseConfig({
      url: url.trim(),
      anonKey: anonKey.trim(),
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetDefault = () => {
    soundEffects.playClick();
    const defaults = {
      url: (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_URL || 'https://advokatquiz-realtime.supabase.co',
      anonKey: (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.demo_advokatquiz_realtime_key',
    };
    setUrl(defaults.url);
    setAnonKey(defaults.anonKey);
    realtimeMultiplayerService.saveSupabaseConfig(defaults);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
          <Database className="w-4 h-4" />
          <span>Koneksi Realtime Static Web (Vercel Ready)</span>
        </div>
        <h2 className="text-xl font-bold font-legal text-slate-900 dark:text-white">
          Pengaturan Supabase Realtime
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-5 leading-relaxed">
          AdvokatQuiz menggunakan arsitektur serverless static web. Agar Anda dan rekan seangkatan dapat terhubung secara nyata antar perangkat/laptop di Vercel, sistem menggunakan saluran <strong>Supabase Realtime Broadcast & Presence</strong> dengan fallback WebRTC P2P.
        </p>

        {/* Current Active Transport Status */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Status Saluran: {connectionStatus}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Mode aktif: {currentTransport === 'supabase' ? 'Supabase Realtime (WebSocket)' : currentTransport === 'webrtc' ? 'WebRTC P2P (Bebas Server)' : 'Broadcast Channel'}
              </span>
            </div>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Form Config */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Supabase Project URL
            </label>
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://xyzcompany.supabase.co"
              className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Dapat ditemukan di Supabase Dashboard &rarr; Project Settings &rarr; API &rarr; Project URL
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Supabase Anon Public Key
            </label>
            <textarea
              required
              rows={3}
              value={anonKey}
              onChange={(e) => setAnonKey(e.target.value)}
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              className="w-full text-xs font-mono px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <span className="text-[11px] text-slate-400 mt-1 block">
              Kunci anonim publik (aman digunakan di browser client)
            </span>
          </div>

          {/* Vercel Env Vars Tip */}
          <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-300 space-y-1">
            <span className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Untuk Deploy Otomatis di Vercel:</span>
            </span>
            <p className="leading-relaxed text-[11px]">
              Tambahkan dua variabel ini di <strong>Vercel &rarr; Settings &rarr; Environment Variables</strong>:
              <br />
              <code>VITE_SUPABASE_URL</code> dan <code>VITE_SUPABASE_ANON_KEY</code>
            </p>
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handleResetDefault}
              className="px-3.5 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
            >
              {savedSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : null}
              <span>{savedSuccess ? 'Tersimpan & Terhubung!' : 'Simpan Pengaturan'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
