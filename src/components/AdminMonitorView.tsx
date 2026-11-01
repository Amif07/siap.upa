import React, { useState, useEffect } from 'react';
import { Users, History, Search, Download, CheckCircle2, XCircle, Clock, Shield, Eye, RefreshCw, Award, ArrowLeft, Mail } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'online' | 'history'>('online');
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [historyList, setHistoryList] = useState<UserQuizHistoryRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'passed' | 'failed'>('all');
  const [selectedRecordForDetail, setSelectedRecordForDetail] = useState<UserQuizHistoryRecord | null>(null);

  const loadData = () => {
    setUsers(userService.getAllUsers());
    setHistoryList(userService.getAllHistory());
  };

  useEffect(() => {
    loadData();

    // Auto-refresh presence every 6 seconds
    const interval = setInterval(() => {
      loadData();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const onlineUsers = users.filter((u) => u.isOnline);

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
    if (diff < 60) return 'Baru saja';
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Utama</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
            <Shield className="w-4 h-4" />
            <span>Portal Pengawas & Evaluasi Hasil Belajar Peserta</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-legal text-slate-900 dark:text-white">
            Dashboard Pemantauan & Riwayat Pengerjaan
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Pantau siapa saja rekan Anda yang sedang aktif di aplikasi dan evaluasi seluruh riwayat pengerjaan soal serta lembar jawaban mereka.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              soundEffects.playClick();
              loadData();
            }}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-colors"
            title="Refresh Data Terkini"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleExportCsv}
            className="px-4 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-2 transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Laporan CSV</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Sedang Online</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
            {onlineUsers.length} Peserta
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Aktif dalam 5 menit terakhir</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
            Total Teman Terdaftar
          </span>
          <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            {users.length} Akun
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Menggunakan login email</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
            Total Sesi Diselesaikan
          </span>
          <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            {historyList.length} Kali
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Terekam di sistem</span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
            Tingkat Kelulusan
          </span>
          <span className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">
            {historyList.length > 0
              ? `${((historyList.filter((h) => h.passed).length / historyList.length) * 100).toFixed(0)}%`
              : '0%'}
          </span>
          <span className="text-[11px] text-slate-400 block mt-1">Passing grade &ge; 70%</span>
        </div>
      </div>

      {/* Main Tab Controls */}
      <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl max-w-md">
        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('online');
          }}
          className={`flex-1 py-2 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
            activeTab === 'online'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Sedang Login ({onlineUsers.length})</span>
        </button>

        <button
          onClick={() => {
            soundEffects.playClick();
            setActiveTab('history');
          }}
          className={`flex-1 py-2 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
            activeTab === 'history'
              ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>Seluruh Riwayat Ujian ({historyList.length})</span>
        </button>
      </div>

      {/* TAB 1: USERS ONLINE & DIRECTORY */}
      {activeTab === 'online' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-legal text-slate-900 dark:text-white">
                Daftar Peserta & Status Aktivitas Real-Time
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Mendeteksi siapa yang sedang berada di dalam aplikasi dan aktivitas yang sedang mereka jalankan
              </p>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">
              Total {users.length} Akun Terdaftar
            </span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {users.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs">
                Belum ada peserta lain yang terdaftar. Hanya akun pengguna nyata yang akan ditampilkan di sini (tanpa bot).
              </div>
            ) : (
              users.map((user) => {
              const isMe = user.id === currentUser.id;

              return (
                <div key={user.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    {/* Avatar with live status dot */}
                    <div className="relative">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-700 to-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                        {user.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span
                        className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900 ${
                          user.isOnline ? 'bg-emerald-500' : 'bg-slate-400'
                        }`}
                        title={user.isOnline ? 'Sedang Online' : 'Offline'}
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900 dark:text-white">
                          {user.name}
                        </span>
                        {isMe && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-medium">
                            Anda
                          </span>
                        )}
                        {user.role === 'admin' && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-medium">
                            Pengawas
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          <span>{user.email}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{user.organization || 'Calon Advokat'}</span>
                      </div>

                      {/* Current Activity Ticker */}
                      <div className="mt-1.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 px-2.5 py-1 rounded-lg inline-block border border-slate-100 dark:border-slate-800">
                        <span className="font-medium text-amber-700 dark:text-amber-400">Aktivitas: </span>
                        <span>{user.currentActivity || 'Membuka aplikasi'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Status & Last Active */}
                  <div className="sm:text-right shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        user.isOnline
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${user.isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                      <span>{user.isOnline ? 'Sedang Login' : 'Offline'}</span>
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Aktif: {formatTimeAgo(user.lastActive)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
          </div>
        </div>
      )}

      {/* TAB 2: GLOBAL EXAM HISTORY & ANSWER SHEETS */}
      {activeTab === 'history' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base sm:text-lg font-bold font-legal text-slate-900 dark:text-white">
                Seluruh Riwayat Pengerjaan Soal Teman
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
                          minute: '2-digit'
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
                          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 text-white flex items-center gap-1.5 transition-colors ml-auto shadow-xs"
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
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
              <div>
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider block mb-1">
                  Inspeksi Lembar Jawaban Peserta
                </span>
                <h3 className="text-xl font-bold font-legal text-slate-900 dark:text-white">
                  {selectedRecordForDetail.userName}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span>{selectedRecordForDetail.userEmail}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedRecordForDetail.quizTitle}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                    Skor: {selectedRecordForDetail.scorePercent.toFixed(1)}/100 ({selectedRecordForDetail.passed ? 'Lulus' : 'Belum Lulus'})
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedRecordForDetail(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Questions Results List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
              {selectedRecordForDetail.questionResults && selectedRecordForDetail.questionResults.length > 0 ? (
                selectedRecordForDetail.questionResults.map((q, idx) => (
                  <div
                    key={q.id || idx}
                    className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 ${
                      q.isCorrect
                        ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20'
                        : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/30 dark:bg-rose-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        Soal No. {idx + 1} · {q.category}
                      </span>
                      <span
                        className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                          q.isCorrect
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300'
                        }`}
                      >
                        {q.isCorrect ? 'Jawaban Benar' : 'Jawaban Salah'}
                      </span>
                    </div>

                    <p className="font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                      {q.question}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 block text-[10px]">Pilihan Teman Anda:</span>
                        <span className={`font-mono font-bold ${q.isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {q.userAnswer || '(Tidak Dijawab)'}
                        </span>
                      </div>

                      <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="text-slate-400 block text-[10px]">Kunci Jawaban Resmi:</span>
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
                <div className="p-8 text-center text-slate-500 text-xs">
                  Ringkasan butir soal untuk sesi ini tercatat dengan skor {selectedRecordForDetail.scorePercent.toFixed(1)}/100 ({selectedRecordForDetail.correctCount} Benar, {selectedRecordForDetail.wrongCount} Salah).
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedRecordForDetail(null)}
                className="px-5 py-2 text-xs font-bold text-white bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 rounded-xl transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
