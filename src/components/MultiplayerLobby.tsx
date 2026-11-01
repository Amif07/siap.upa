import React, { useState, useEffect } from 'react';
import { Users, Copy, Check, Play, UserPlus, Shield, AlertCircle, Clock, Zap, Link, Database, Wifi } from 'lucide-react';
import { RoomSettings, Participant, TimerMode, UPACategory, RoomChatMessage } from '../types/quiz';
import { RoomLiveChat } from './RoomLiveChat';
import { generateRoomCode } from '../utils/seededRandom';
import { soundEffects } from '../utils/soundEffects';
import { RealtimeTransportType } from '../services/realtimeMultiplayer';
import { SupabaseConfigModal } from './SupabaseConfigModal';

interface MultiplayerLobbyProps {
  currentRoom: RoomSettings | null;
  participants: Participant[];
  currentUser: Participant | null;
  onCreateRoom: (settings: RoomSettings, hostName: string) => void;
  onJoinRoom: (code: string, userName: string) => void;
  onStartExam: () => void;
  onLeaveRoom: () => void;
  roomMessages: RoomChatMessage[];
  onSendMessage: (message: string) => void;
  realtimeTransport: RealtimeTransportType;
  connectionStatusText: string;
  initialJoinCode?: string;
  defaultUserName?: string;
}

export const MultiplayerLobby: React.FC<MultiplayerLobbyProps> = ({
  currentRoom,
  participants,
  currentUser,
  onCreateRoom,
  onJoinRoom,
  onStartExam,
  onLeaveRoom,
  roomMessages,
  onSendMessage,
  realtimeTransport,
  connectionStatusText,
  initialJoinCode = '',
  defaultUserName = '',
}) => {
  const [activeTab, setActiveTab] = useState<'create' | 'join'>(initialJoinCode ? 'join' : 'create');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  // Form states for Create
  const [hostName, setHostName] = useState(defaultUserName || 'Calon Advokat ' + Math.floor(Math.random() * 900 + 100));
  const [roomName, setRoomName] = useState('Latihan Bersama UPA 2026');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [timerMode, setTimerMode] = useState<TimerMode>('official');
  const [flashSeconds, setFlashSeconds] = useState<number>(60);
  const [officialMinutes, setOfficialMinutes] = useState<number>(30);
  const [categoryFilter, setCategoryFilter] = useState<UPACategory | 'Semua Materi'>('Semua Materi');

  // Form states for Join
  const [joinCode, setJoinCode] = useState(initialJoinCode || '');
  const [guestName, setGuestName] = useState(defaultUserName || '');

  useEffect(() => {
    if (initialJoinCode) {
      setJoinCode(initialJoinCode);
      setActiveTab('join');
    }
  }, [initialJoinCode]);

  useEffect(() => {
    if (defaultUserName && !guestName) {
      setGuestName(defaultUserName);
    }
    if (defaultUserName && (!hostName || hostName.startsWith('Calon Advokat'))) {
      setHostName(defaultUserName);
    }
  }, [defaultUserName]);

  const getInviteUrl = () => {
    if (!currentRoom) return '';
    const base = window.location.origin + window.location.pathname;
    return `${base}?room=${currentRoom.code}`;
  };

  const handleCopyCode = () => {
    if (!currentRoom) return;
    navigator.clipboard.writeText(currentRoom.code);
    soundEffects.playClick();
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyLink = () => {
    if (!currentRoom) return;
    const url = getInviteUrl();
    navigator.clipboard.writeText(url);
    soundEffects.playClick();
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playClick();
    const newCode = generateRoomCode();
    const settings: RoomSettings = {
      code: newCode,
      roomName: roomName.trim() || 'Ruang Latihan UPA',
      hostName: hostName.trim() || 'Host Advokat',
      questionCount,
      timerMode,
      categoryFilter,
      flashSecondsPerQuestion: flashSeconds,
      officialTotalMinutes: officialMinutes,
    };
    onCreateRoom(settings, hostName.trim() || 'Host Advokat');
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinCode.trim() || !guestName.trim()) return;
    soundEffects.playClick();
    onJoinRoom(joinCode.trim().toUpperCase(), guestName.trim());
  };

  // If already in an active room lobby
  if (currentRoom) {
    const isHost = currentUser?.isHost ?? false;

    return (
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Realtime Channel Connection Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {realtimeTransport === 'supabase'
                ? 'Supabase Realtime Terhubung (WebSockets)'
                : realtimeTransport === 'webrtc'
                ? 'WebRTC P2P Terhubung (Direct Peer)'
                : 'Saluran Realtime Aktif'}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 dark:text-slate-400">
              Multiplayer nyata antar perangkat (Vercel Ready)
            </span>
          </div>

          <button
            onClick={() => setShowConfigModal(true)}
            className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <Database className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Pengaturan Supabase</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Room Info & Real Participants */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-700 dark:text-amber-400 font-semibold mb-1">
                  <Users className="w-4 h-4" />
                  <span>Ruang Ujian Kolaboratif Aktif</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-legal tracking-tight">
                  {currentRoom.roomName}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span>Materi: {currentRoom.categoryFilter}</span>
                  <span aria-hidden="true">·</span>
                  <span>Jumlah: {currentRoom.questionCount} Soal</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    Mode Timer: {currentRoom.timerMode === 'official' ? `${currentRoom.officialTotalMinutes} Menit (Resmi)` : `${currentRoom.flashSecondsPerQuestion} Detik/Soal (Kilat)`}
                  </span>
                </div>
              </div>

              {/* Room Code & Invite Link Box */}
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex flex-col items-center justify-center shrink-0">
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Kode Akses Ruangan
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-2xl font-extrabold tracking-widest text-slate-900 dark:text-white">
                    {currentRoom.code}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white transition-colors"
                    title="Salin Kode Ruang"
                  >
                    {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Direct Shareable Invite Link Button */}
                <button
                  onClick={handleCopyLink}
                  className="mt-2.5 px-3 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-amber-400 text-slate-800 dark:text-slate-200 flex items-center gap-1.5 transition-colors shadow-2xs"
                  title="Salin Link Langsung untuk Teman"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Link className="w-3.5 h-3.5 text-amber-600" />}
                  <span>{copiedLink ? 'Link Tersalin!' : 'Salin Link Undangan'}</span>
                </button>
              </div>
            </div>

            {/* Real Lobby Participant List */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>Peserta Nyata Terhubung</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 font-mono text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-800">
                    {participants.length} Orang Online
                  </span>
                </h3>

                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {isHost ? 'Anda bertindak sebagai Host' : 'Menunggu aba-aba Host'}
                </span>
              </div>

              {participants.length === 1 ? (
                <div className="p-6 rounded-2xl border border-dashed border-amber-300 dark:border-amber-800/80 bg-amber-50/30 dark:bg-amber-950/20 text-center space-y-2 mb-4">
                  <Users className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Menunggu Rekan Bergabung
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Kirim link undangan atau kode <strong>{currentRoom.code}</strong> ke rekan Anda. Ketika mereka membuka link di Vercel atau browser lain, mereka akan langsung masuk ke daftar ini secara otomatis.
                  </p>
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-900/60 hover:bg-amber-200 rounded-xl transition-colors"
                  >
                    <Link className="w-3.5 h-3.5" />
                    <span>Salin Link Undangan ke WhatsApp / Telegram</span>
                  </button>
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {participants.map((p) => {
                  const isMe = p.id === currentUser?.id;
                  return (
                    <div
                      key={p.id}
                      className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-colors ${
                        isMe
                          ? 'border-amber-500 bg-amber-50/60 dark:bg-amber-950/40 ring-1 ring-amber-500/20'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50'
                      }`}
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                          {p.name.slice(0, 2).toUpperCase()}
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                            {p.name}
                          </span>
                          {p.isHost && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                              Host
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block truncate">
                          {isMe ? 'Anda Sendiri' : 'Rekan Online (Siap)'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sync Notice */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-3">
              <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Sinkronisasi Soal Seragam Real-Time (Server-Authoritative)
                </p>
                <p className="mt-0.5 leading-relaxed text-slate-600 dark:text-slate-400">
                  Saat Host menekan tombol <strong>Mulai Ujian Bersama</strong>, server mengunci urutan paket soal dan susunan opsi pilihan ganda (A, B, C, D) khusus untuk Room ID ini. Seluruh perangkat peserta menampilkan urutan soal dan kunci jawaban yang 100% identik tanpa pengacakan lokal.
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onLeaveRoom();
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Tinggalkan Ruangan
              </button>

              {isHost ? (
                <button
                  onClick={() => {
                    soundEffects.playClick();
                    onStartExam();
                  }}
                  className="px-6 py-3 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl shadow-md flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Mulai Ujian Bersama Sekarang</span>
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                  <span>Menunggu Host ({currentRoom.hostName}) memulai ujian...</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Real-time Live Room Chat */}
          <div className="lg:col-span-5 sticky top-20">
            <RoomLiveChat
              roomCode={currentRoom.code}
              currentUser={currentUser}
              messages={roomMessages}
              onSendMessage={onSendMessage}
            />
          </div>
        </div>

        {/* Supabase Config Modal */}
        <SupabaseConfigModal
          isOpen={showConfigModal}
          onClose={() => setShowConfigModal(false)}
          currentTransport={realtimeTransport}
          connectionStatus={connectionStatusText}
        />
      </div>
    );
  }

  // If not in a room, render Create / Join tabs
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-legal text-slate-900 dark:text-white">
          Ruang Ujian Kolaboratif Real-Time
        </h2>

        {/* Realtime Engine Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          <Wifi className="w-3.5 h-3.5 text-emerald-500" />
          <span>Realtime: {realtimeTransport === 'supabase' ? 'Supabase Realtime' : 'WebRTC P2P'}</span>
          <button
            onClick={() => setShowConfigModal(true)}
            className="text-amber-600 dark:text-amber-400 hover:underline font-semibold ml-1"
          >
            Konfigurasi
          </button>
        </div>
      </div>

      {/* Segmented Tab Controls */}
      <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl max-w-md mx-auto">
        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('create');
          }}
          className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'create'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Bikin Ruang Baru
        </button>
        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('join');
          }}
          className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
            activeTab === 'join'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Gabung Ruang Teman
        </button>
      </div>

      {/* Create Room Form */}
      {activeTab === 'create' && (
        <form
          onSubmit={handleCreateSubmit}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Nama Anda (Host Ruangan)
            </label>
            <input
              type="text"
              required
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              placeholder="Contoh: Rian Pratama, S.H."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Nama Ruangan Latihan
            </label>
            <input
              type="text"
              required
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Contoh: Belajar Bareng PKPA DPC Jakarta"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Jumlah Soal
              </label>
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value={10}>10 Soal (Latihan Cepat)</option>
                <option value={20}>20 Soal (Simulasi Standar)</option>
                <option value={50}>50 Soal (Paket Komprehensif)</option>
                <option value={100}>100 Soal (Tryout Penuh)</option>
                <option value={120}>120 Soal (Try Out Naskah Resmi PERADI)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Cakupan Materi
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as UPACategory | 'Semua Materi')}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="Semua Materi">Semua Materi (Standar UPA)</option>
                <option value="Hukum Acara Perdata">Hukum Acara Perdata</option>
                <option value="Hukum Acara Pidana">Hukum Acara Pidana</option>
                <option value="Hukum Acara PTUN">Hukum Acara PTUN</option>
                <option value="Hukum Acara Peradilan Agama">Hukum Acara Peradilan Agama</option>
                <option value="Kode Etik Profesi Advokat">Kode Etik Profesi Advokat</option>
                <option value="Hukum Acara Mahkamah Konstitusi">Hukum Acara MK</option>
                <option value="Hukum Acara PHI">Hukum Acara PHI</option>
                <option value="Hukum Acara Arbitrase & APS">Hukum Acara Arbitrase & APS</option>
              </select>
            </div>
          </div>

          {/* Timer Settings */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Pengaturan Mode Pewaktu (Timer)
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button
                type="button"
                onClick={() => setTimerMode('official')}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  timerMode === 'official'
                    ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-xs mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Mode Ujian Resmi</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Hitung mundur serempak untuk seluruh paket soal.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setTimerMode('flash')}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  timerMode === 'flash'
                    ? 'border-amber-600 bg-amber-50/70 dark:bg-amber-950/40 text-amber-950 dark:text-amber-100'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="flex items-center gap-1.5 font-semibold text-xs mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>Mode Kilat / Soal</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Waktu per soal (45-120 dtk). Otomatis lompat jika habis.
                </p>
              </button>
            </div>

            {timerMode === 'official' ? (
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-600 dark:text-slate-400">Durasi Total:</span>
                <div className="flex gap-2">
                  {[15, 30, 60, 90, 120].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setOfficialMinutes(mins)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-mono ${
                        officialMinutes === mins
                          ? 'bg-amber-600 text-white font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-600 dark:text-slate-400">Waktu per Soal:</span>
                <div className="flex gap-2">
                  {[45, 60, 90, 120].map((secs) => (
                    <button
                      key={secs}
                      type="button"
                      onClick={() => setFlashSeconds(secs)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-mono ${
                        flashSeconds === secs
                          ? 'bg-amber-600 text-white font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {secs}d
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Users className="w-4 h-4" />
            <span>Buat Ruangan & Dapatkan Kode / Link Undangan</span>
          </button>
        </form>
      )}

      {/* Join Room Form */}
      {activeTab === 'join' && (
        <form
          onSubmit={handleJoinSubmit}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Kode Unik Ruangan (Room Code)
            </label>
            <input
              type="text"
              required
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              placeholder="Contoh: UPA-ABC123"
              className="w-full text-base font-mono font-bold tracking-wider px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white uppercase focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block">
              Dapatkan kode ini dari teman Anda yang membuat ruangan, atau klik link undangan langsung.
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Nama Peserta Anda
            </label>
            <input
              type="text"
              required
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Contoh: Dewi Lestari, S.H."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Gabung ke Ruang Ujian Real-Time</span>
          </button>
        </form>
      )}

      {/* Supabase Config Modal */}
      <SupabaseConfigModal
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
        currentTransport={realtimeTransport}
        connectionStatus={connectionStatusText}
      />
    </div>
  );
};
