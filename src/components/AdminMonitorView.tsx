import React, { useState, useEffect } from 'react';
import {
  Users,
  History,
  Search,
  Download,
  CheckCircle2,
  XCircle,
  Clock,
  Shield,
  Eye,
  RefreshCw,
  Award,
  ArrowLeft,
  Mail,
  UserCheck,
  UserX,
  AlertCircle,
  Radio,
  Check,
} from 'lucide-react';
import { UserProfile, UserQuizHistoryRecord, QuestionResultItem } from '../types/auth';
import { userService } from '../services/userService';
import { soundEffects } from '../utils/soundEffects';

interface AdminMonitorViewProps {
  currentUser: UserProfile;
  onClose: () => void;
}

export const AdminMonitorView: React.FC<AdminMonitorViewProps> = ({
  currentUser,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'online' | 'approvals' | 'users' | 'history'>('approvals');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [historyList, setHistoryList] = useState<UserQuizHistoryRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'passed' | 'failed'>('all');
  const [selectedRecordForDetail, setSelectedRecordForDetail] = useState<UserQuizHistoryRecord | null>(null);
  const [actionSuccessNotice, setActionSuccessNotice] = useState<string | null>(null);
  const [isProcessingEmail, setIsProcessingEmail] = useState<string | null>(null);

  const isAdmin = currentUser.role === 'admin';

  const loadData = async () => {
    if (!isAdmin) return;
    const remoteUsers = await userService.fetchAllUsers();
    setUsers(remoteUsers);
    setHistoryList(userService.getAllHistory());
  };

  useEffect(() => {
    if (!isAdmin) return;
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 3000);

    const unsubscribe = userService.onAuthEvent((event) => {
      if (
        event.type === 'NEW_ACCESS_REQUEST' ||
        event.type === 'USER_PRESENCE_UPDATE' ||
        event.type === 'USER_APPROVED' ||
        event.type === 'USER_REJECTED'
      ) {
        loadData();
      }
    });

    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, [isAdmin]);

  if (!isAdmin) {
    return (
      <div className="max-w-lg mx-auto my-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-4 shadow-sm">
        <Shield className="w-10 h-10 text-rose-500 mx-auto" />
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Akses Khusus Admin
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Halaman Persetujuan User & Monitor hanya dapat diakses oleh akun dengan role admin.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-amber-600 text-white cursor-pointer"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const onlineUsers = users.filter((u) => u.isOnline);
  const pendingUsers = users.filter((u) => u.is_approved === false || u.approvalStatus === 'pending');
  const approvedUsers = users.filter((u) => u.is_approved === true || (u.is_approved === undefined && u.approvalStatus === 'approved'));

  const handleApprove = async (email: string) => {
    setIsProcessingEmail(email);
    soundEffects.playClick();
    const res = await userService.approveUser(email);
    setIsProcessingEmail(null);
    if (res.success) {
      soundEffects.playSuccess();
      setActionSuccessNotice(`Akun ${email} berhasil disetujui (is_approved = true).`);
      setTimeout(() => setActionSuccessNotice(null), 5000);
      loadData();
    } else {
      setActionSuccessNotice(res.message || `Gagal menyetujui ${email}.`);
    }
  };

  const handleDeleteUser = async (email: string) => {
    setIsProcessingEmail(email);
    soundEffects.playClick();
    const res = await userService.deleteUser(email);
    setIsProcessingEmail(null);
    if (res.success) {
      setActionSuccessNotice(`Permintaan akses ${email} telah dihapus.`);
      setTimeout(() => setActionSuccessNotice(null), 5000);
      loadData();
    } else {
      setActionSuccessNotice(res.message || `Gagal menghapus ${email}.`);
    }
  };

  const filteredHistory = historyList.filter((item) => {
    if (statusFilter === 'passed' && !item.passed) return false;
    if (statusFilter === 'failed' && item.passed) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.userName.toLowerCase().includes(q) ||
        item.userEmail.toLowerCase().includes(q) ||
        item.quizTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleExportCsv = () => {
    soundEffects.playClick();
    userService.exportHistoryCsv(filteredHistory);
  };

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const formatTimeAgo = (timestamp: number) => {
    const diff = Math.floor((Date.now() - timestamp) / 1000);
    if (diff < 15) return 'Sedang aktif sekarang';
    if (diff < 60) return `${diff} detik lalu`;
    if (diff < 3600) return `${Math.floor(diff / 60)} menit lalu`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} jam lalu`;
    return new Date(timestamp).toLocaleDateString('id-ID');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Banner Navigation */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Utama</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
            <Shield className="w-4 h-4" />
            <span>Dashboard Pengawas & Persetujuan Akses Peserta</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-legal text-slate-900 dark:text-white">
            Pemantauan Real-Time & Konfirmasi Akses
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl leading-relaxed">
            Pantau rekan Anda yang sedang membuka website ini secara langsung (real-time), konfirmasi permohonan akses email baru, dan evaluasi riwayat nilai pengerjaan soal.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              soundEffects.playClick();
              loadData();
            }}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
            title="Refresh Data Terkini"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleExportCsv}
            className="px-4 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 transition-colors shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Laporan CSV</span>
          </button>
        </div>
      </div>

      {/* Action Success Toast Banner */}
      {actionSuccessNotice && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-800 dark:text-emerald-300 flex items-center justify-between gap-3 shadow-xs animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{actionSuccessNotice}</span>
          </div>
          <button
            onClick={() => setActionSuccessNotice(null)}
            className="text-xs text-emerald-700 hover:text-emerald-900 font-bold px-2 py-1"
          >
            Tutup
          </button>
        </div>
      )}

      {/* PENDING APPROVAL ALERT BANNER */}
      {pendingUsers.length > 0 && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{pendingUsers.length} Permintaan Akses Menunggu Konfirmasi Anda!</span>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Rekan Anda telah memasukkan email dan sedang menunggu di layar persetujuan untuk mulai belajar.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              setActiveTab('approvals');
            }}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-500 text-white shrink-0 transition-colors shadow-xs cursor-pointer"
          >
            Buka Persetujuan User ({pendingUsers.length})
          </button>
        </div>
      )}

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Realtime Online Indicator */}
        <div
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('online');
          }}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            activeTab === 'online'
              ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700 shadow-xs'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400">Sedang Online</span>
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>
          <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
            {onlineUsers.length} Rekan
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Terbuka di layar browser</span>
        </div>

        {/* Pending Approvals */}
        <div
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('approvals');
          }}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            pendingUsers.length > 0
              ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 animate-pulse'
              : activeTab === 'approvals'
              ? 'bg-white dark:bg-slate-900 border-amber-500'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-semibold text-amber-700 dark:text-amber-400">Butuh Konfirmasi</span>
            <Clock className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <span className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">
            {pendingUsers.length} Permintaan
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">
            {pendingUsers.length > 0 ? 'Klik untuk setujui' : 'Semua telah disetujui'}
          </span>
        </div>

        {/* Approved Users */}
        <div
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('users');
          }}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            activeTab === 'users'
              ? 'bg-white dark:bg-slate-900 border-slate-900 dark:border-white'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Rekan Terkonfirmasi</span>
            <UserCheck className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            {approvedUsers.length} Akun
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Bebas masuk kapan saja</span>
        </div>

        {/* Total Sessions */}
        <div
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('history');
          }}
          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
            activeTab === 'history'
              ? 'bg-white dark:bg-slate-900 border-slate-900 dark:border-white'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Sesi Ujian Selesai</span>
            <Award className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            {historyList.length} Sesi
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">
            Lulus: {historyList.filter((h) => h.passed).length} kali
          </span>
        </div>
      </div>

      {/* Main Tab Controls */}
      <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl max-w-2xl overflow-x-auto">
        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('online');
          }}
          className={`py-2 px-3 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'online'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Peserta Online ({onlineUsers.length})</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('approvals');
          }}
          className={`py-2 px-3 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'approvals'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Shield className="w-3.5 h-3.5 text-amber-600" />
          <span>Persetujuan User</span>
          {pendingUsers.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px]">
              {pendingUsers.length}
            </span>
          )}
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('users');
          }}
          className={`py-2 px-3 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'users'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Rekan Terdaftar ({approvedUsers.length})</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('history');
          }}
          className={`py-2 px-3 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'history'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Riwayat Ujian ({historyList.length})</span>
        </button>
      </div>

      {/* TAB 1: REAL-TIME ONLINE USERS */}
      {activeTab === 'online' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <h2 className="text-base sm:text-lg font-bold font-legal text-slate-900 dark:text-white">
                  Rekan yang Sedang Online Saat Ini (Real-Time)
                </h2>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Tampilan langsung aktivitas teman Anda saat sedang membuka website AdvokatQuiz
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>{onlineUsers.length} Rekan Sedang Terhubung</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {onlineUsers.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs space-y-2">
                <Users className="w-8 h-8 text-slate-400 mx-auto" />
                <p>Saat ini belum ada rekan lain yang sedang membuka website.</p>
                <p className="text-[11px] text-slate-400">
                  Begitu rekan Anda membuka link website di HP atau laptopnya, nama dan aktivitas mereka akan langsung muncul di sini secara otomatis.
                </p>
              </div>
            ) : (
              onlineUsers.map((user) => {
                const isMe = user.id === currentUser.id;

                return (
                  <div
                    key={user.id}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-150"
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Avatar with Live Green Pulse */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-700 to-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs border-2 border-emerald-400">
                          {user.name.slice(0, 2).toUpperCase()}
                        </div>
                        <span
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 animate-pulse"
                          title="Sedang Online"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-slate-900 dark:text-white">
                            {user.name}
                          </span>
                          {isMe && (
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                              Anda (Admin)
                            </span>
                          )}
                          {user.role === 'admin' && !isMe && (
                            <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold">
                              Pengawas
                            </span>
                          )}
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <span>Bebas Masuk</span>
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1 font-mono">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span>{user.email}</span>
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{user.organization || 'PKPA PERADI 2026'}</span>
                        </div>

                        {/* Current Real-Time Activity Ticker */}
                        <div className="mt-1 text-xs text-slate-800 dark:text-slate-200 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-xl inline-flex items-center gap-2 border border-amber-200 dark:border-amber-800/80 shadow-2xs">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping shrink-0" />
                          <span className="font-bold text-amber-800 dark:text-amber-400">Aktivitas Terkini:</span>
                          <span className="font-medium">{user.currentActivity || 'Sedang berada di aplikasi'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status & Last Active */}
                    <div className="sm:text-right shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>ONLINE SEKARANG</span>
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-1 font-mono">
                        {formatTimeAgo(user.lastActive)}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* TAB 2: PERSETUJUAN USER (is_approved === false) */}
      {activeTab === 'approvals' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-legal text-slate-900 dark:text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-600" />
                <span>Persetujuan User</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Daftar pengguna yang menunggu persetujuan Admin sebelum dapat masuk ke aplikasi.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
              {pendingUsers.length} Menunggu Persetujuan
            </span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {pendingUsers.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <p className="font-semibold text-slate-700 dark:text-slate-300">
                  Tidak ada permintaan akses yang menunggu persetujuan.
                </p>
                <p className="text-[11px] text-slate-400">
                  Semua user baru yang mendaftar akan muncul di daftar ini.
                </p>
              </div>
            ) : (
              pendingUsers.map((user) => {
                const isProcessing = isProcessingEmail === user.email;
                const displayUsername = user.username || '-';

                return (
                  <div
                    key={user.email}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-amber-50/40 dark:bg-amber-950/20 p-4 rounded-2xl border border-amber-200/80 dark:border-amber-900/40 mt-3"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-amber-600 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                        {(user.username || user.email).slice(0, 2).toUpperCase()}
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">
                            {displayUsername}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 font-bold">
                            Belum Disetujui
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-mono flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{user.email}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 block">
                          Terdaftar: {new Date(user.createdAt).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons: Setujui & Hapus */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleApprove(user.email)}
                        disabled={isProcessing}
                        className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                        <span>Setujui</span>
                      </button>

                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        disabled={isProcessing}
                        className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* TAB 3: APPROVED USERS DIRECTORY */}
      {activeTab === 'users' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-legal text-slate-900 dark:text-white">
                Daftar User Disetujui
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Daftar akun dengan status disetujui yang dapat langsung masuk menggunakan email masing-masing.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">
              {approvedUsers.length} Akun
            </span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {approvedUsers.map((user) => {
              const isMe = user.email.toLowerCase() === currentUser.email.toLowerCase();
              const isProcessing = isProcessingEmail === user.email;

              return (
                <div key={user.email} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                      {(user.username || user.email).slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900 dark:text-white">
                          {user.username || user.email}
                        </span>
                        {user.role === 'admin' && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold">
                            Admin{isMe ? ' (Anda)' : ''}
                          </span>
                        )}
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Disetujui</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <span className="flex items-center gap-1 font-mono">
                          <Mail className="w-3 h-3" />
                          <span>{user.email}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="sm:text-right">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                          user.isOnline
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                            : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${user.isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                        <span>{user.isOnline ? 'Online' : 'Offline'}</span>
                      </span>
                    </div>

                    {user.role !== 'admin' && (
                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        disabled={isProcessing}
                        className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800 transition-colors cursor-pointer disabled:opacity-50"
                      >
                        Hapus
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: GLOBAL EXAM HISTORY & ANSWER SHEETS */}
      {activeTab === 'history' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-legal text-slate-900 dark:text-white">
                Seluruh Riwayat Pengerjaan Soal Rekan
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Daftar lengkap sesi ujian, skor kelulusan, dan lembar jawaban yang telah dikerjakan oleh seluruh peserta
              </p>
            </div>

            {/* Filter and Search */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama atau email..."
                  className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as 'all' | 'passed' | 'failed')}
                className="text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="all">Semua Status</option>
                <option value="passed">Hanya Lulus (&ge; 70%)</option>
                <option value="failed">Belum Lulus (&lt; 70%)</option>
              </select>
            </div>
          </div>

          {/* History Records Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-semibold border-y border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3 px-4">Tanggal & Jam</th>
                  <th className="py-3 px-4">Nama Peserta</th>
                  <th className="py-3 px-4">Paket Soal</th>
                  <th className="py-3 px-4 text-center">Skor Akhir</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-center">Benar / Salah</th>
                  <th className="py-3 px-4 text-center">Durasi</th>
                  <th className="py-3 px-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredHistory.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-slate-400">
                      Belum ada riwayat pengerjaan soal yang cocok dengan filter pencarian.
                    </td>
                  </tr>
                ) : (
                  filteredHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3.5 px-4 font-mono text-slate-500 whitespace-nowrap">
                        {new Date(item.timestamp).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="font-semibold text-slate-900 dark:text-white block">
                          {item.userName}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {item.userEmail}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="font-medium text-slate-800 dark:text-slate-200 block">
                          {item.quizTitle}
                        </span>
                        <span className="text-[11px] text-amber-700 dark:text-amber-400">
                          {item.categoryFilter} ({item.totalQuestions} Soal)
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span className="font-mono text-base font-bold text-slate-900 dark:text-white">
                          {item.scorePercent.toFixed(1)}
                        </span>
                        <span className="text-[10px] text-slate-400 block font-mono">/100</span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                            item.passed
                              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                              : 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300'
                          }`}
                        >
                          {item.passed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{item.passed ? 'LULUS' : 'BELUM LULUS'}</span>
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap font-mono">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{item.correctCount}</span>
                        <span className="text-slate-400"> / </span>
                        <span className="text-rose-600 dark:text-rose-400">{item.wrongCount}</span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap font-mono text-slate-500">
                        {formatDuration(item.durationSeconds)}
                      </td>

                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => {
                            soundEffects.playClick();
                            setSelectedRecordForDetail(item);
                          }}
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 text-white flex items-center gap-1.5 transition-colors ml-auto shadow-xs cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Lembar Jawaban</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* DETAIL MODAL: VIEW FRIEND'S ANSWER SHEET & LEGAL ANALYSIS */}
      {selectedRecordForDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full max-h-[85vh] p-6 sm:p-8 shadow-2xl relative my-8 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
              <div>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
                  Evaluasi Jawaban Rekan UPA
                </span>
                <h3 className="text-lg font-bold font-legal text-slate-900 dark:text-white mt-0.5">
                  {selectedRecordForDetail.userName} — {selectedRecordForDetail.quizTitle}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {selectedRecordForDetail.userEmail} · Skor Akhir:{' '}
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    {selectedRecordForDetail.scorePercent.toFixed(1)}/100
                  </span>
                </span>
              </div>
              <button
                onClick={() => setSelectedRecordForDetail(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Answer List */}
            <div className="overflow-y-auto py-4 space-y-4 flex-1 pr-2">
              {selectedRecordForDetail.questionResults && selectedRecordForDetail.questionResults.length > 0 ? (
                selectedRecordForDetail.questionResults.map((q, idx) => (
                  <div
                    key={q.id || idx}
                    className={`p-4 rounded-2xl border text-xs ${
                      q.isCorrect
                        ? 'border-emerald-200 bg-emerald-50/40 dark:border-emerald-900/50 dark:bg-emerald-950/20'
                        : 'border-rose-200 bg-rose-50/40 dark:border-rose-900/50 dark:bg-rose-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2 font-semibold">
                      <span className="text-slate-500">
                        Soal #{idx + 1} ({q.category})
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          q.isCorrect
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-900/80 dark:text-rose-200'
                        }`}
                      >
                        {q.isCorrect ? 'Benar (+1)' : 'Salah (0)'}
                      </span>
                    </div>

                    <p className="font-medium text-slate-800 dark:text-slate-200 mb-3 text-xs sm:text-sm">
                      {q.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 block text-[10px]">Pilihan Teman Anda:</span>
                        <span className={`font-mono font-bold ${q.isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {q.userAnswer || '(Tidak Dijawab)'}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 block text-[10px]">Kunci Jawaban:</span>
                        <span className="font-mono font-bold text-emerald-600">
                          {q.correctAnswer}
                        </span>
                      </div>
                    </div>

                    {q.legalBasis && (
                      <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 mt-2">
                        <span className="font-bold text-amber-700 dark:text-amber-400 block mb-0.5">
                          Dasar Hukum: {q.legalBasis}
                        </span>
                        <span>{q.summary}</span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Detail butir soal tidak tersedia untuk sesi ini.
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedRecordForDetail(null)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer"
              >
                Tutup Lembar Jawaban
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
