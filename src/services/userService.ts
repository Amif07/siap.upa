import { UserProfile, UserQuizHistoryRecord, QuestionResultItem } from '../types/auth';

const STORAGE_KEY_CURRENT_USER = 'advokatquiz_current_user_v1';
const STORAGE_KEY_ALL_USERS = 'advokatquiz_all_users_v1';
const STORAGE_KEY_HISTORY = 'advokatquiz_all_history_v1';

// No bots or simulated dummy users. Only genuine registered human users are tracked.
const INITIAL_SEED_USERS: UserProfile[] = [];
const INITIAL_SEED_HISTORY: UserQuizHistoryRecord[] = [];

class UserService {
  private channel: BroadcastChannel | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
      this.channel = new BroadcastChannel('advokatquiz_auth_sync');
    }
  }

  // Get current logged-in user
  public getCurrentUser(): UserProfile | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  // Login or Register User (Support email-only login)
  public login(nameOrEmpty: string, email: string, organization?: string): UserProfile {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check if user already exists in directory
    const all = this.getAllUsers();
    const existing = all.find((u) => u.email === cleanEmail);

    let cleanName = nameOrEmpty?.trim();
    if (!cleanName) {
      if (existing?.name) {
        cleanName = existing.name;
      } else if (cleanEmail === 'ahmadmiftahulfauzi07@gmail.com' || cleanEmail === 'amifaveiro9@gmail.com') {
        cleanName = 'Ahmad Miftahul Fauzi, S.H.';
      } else {
        const localPart = cleanEmail.split('@')[0] || 'Peserta';
        const words = localPart
          .replace(/[\._\-0-9]/g, ' ')
          .trim()
          .split(/\s+/)
          .filter(Boolean)
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1));
        cleanName = words.length > 0 ? `${words.join(' ')}, S.H.` : 'Calon Advokat, S.H.';
      }
    }

    // Recognize admin by email
    const isAdmin =
      cleanEmail === 'ahmadmiftahulfauzi07@gmail.com' ||
      cleanEmail === 'amifaveiro9@gmail.com' ||
      cleanEmail.includes('admin');

    const user: UserProfile = {
      id: existing?.id || ('usr-' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 12)),
      name: cleanName,
      email: cleanEmail,
      organization: organization?.trim() || existing?.organization || (isAdmin ? 'DPN PERADI / Tim Penguji' : 'PKPA PERADI 2026'),
      role: isAdmin ? 'admin' : (existing?.role || 'peserta'),
      createdAt: existing?.createdAt || Date.now(),
      lastActive: Date.now(),
      isOnline: true,
      currentActivity: 'Di Halaman Utama AdvokatQuiz',
    };

    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));

    // Also register into all users directory
    this.upsertUserDirectory(user);

    // Notify other tabs
    if (this.channel) {
      this.channel.postMessage({ type: 'USER_LOGIN', user });
    }

    return user;
  }

  // Logout
  public logout(): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      currentUser.isOnline = false;
      currentUser.lastActive = Date.now();
      this.upsertUserDirectory(currentUser);
      if (this.channel) {
        this.channel.postMessage({ type: 'USER_LOGOUT', userId: currentUser.id });
      }
    }
    localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
  }

  // Update Activity & Heartbeat
  public updateActivity(activityText: string): void {
    const user = this.getCurrentUser();
    if (!user) return;

    user.currentActivity = activityText;
    user.lastActive = Date.now();
    user.isOnline = true;

    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
    this.upsertUserDirectory(user);

    if (this.channel) {
      this.channel.postMessage({ type: 'USER_HEARTBEAT', user });
    }
  }

  // Get all registered / active users (strictly genuine human users only, no bots)
  public getAllUsers(): UserProfile[] {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY_ALL_USERS);
    let list: UserProfile[] = [];
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          // Strictly filter out any old simulated/bot seed users
          list = parsed.filter(
            (u: UserProfile) =>
              u &&
              u.id &&
              !u.id.startsWith('user-seed-') &&
              !u.email.includes('seed') &&
              !u.id.includes('seed')
          );
        }
      } catch {
        list = [];
      }
    }

    // Persist cleaned list if old seeds were purged
    localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(list));

    // Update isOnline status based on lastActive threshold (active in last 5 minutes)
    const now = Date.now();
    return list.map((u) => ({
      ...u,
      isOnline: now - u.lastActive <= 5 * 60 * 1000,
    }));
  }

  // Save new user or update existing
  private upsertUserDirectory(user: UserProfile): void {
    const all = this.getAllUsers();
    const index = all.findIndex((u) => u.email === user.email || u.id === user.id);
    if (index >= 0) {
      all[index] = { ...all[index], ...user, lastActive: Date.now() };
    } else {
      all.unshift(user);
    }
    localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(all));
  }

  // Record an exam / quiz attempt
  public saveQuizHistory(record: UserQuizHistoryRecord): void {
    const all = this.getAllHistory();
    all.unshift(record);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(all));

    // Update user's last activity
    this.updateActivity(`Selesai mengerjakan ${record.quizTitle} (Skor: ${record.scorePercent.toFixed(1)}%)`);

    if (this.channel) {
      this.channel.postMessage({ type: 'NEW_HISTORY_RECORD', record });
    }
  }

  // Get all quiz history (genuine real users only, no fake bots)
  public getAllHistory(): UserQuizHistoryRecord[] {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (!raw) {
      return [];
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const cleaned = parsed.filter(
          (h: UserQuizHistoryRecord) =>
            h &&
            h.id &&
            !h.id.startsWith('hist-seed-') &&
            (!h.userId || !h.userId.startsWith('user-seed-'))
        );
        localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(cleaned));
        return cleaned;
      }
      return [];
    } catch {
      return [];
    }
  }

  // Export history to CSV
  public exportHistoryCsv(historyList: UserQuizHistoryRecord[]): void {
    const headers = [
      'ID',
      'Tanggal',
      'Nama Peserta',
      'Email',
      'Paket Ujian',
      'Materi',
      'Total Soal',
      'Skor Akhir',
      'Akurasi (%)',
      'Status Kelulusan',
      'Benar',
      'Salah',
      'Ragu-ragu',
      'Durasi (Menit)'
    ];

    const rows = historyList.map((h) => [
      h.id,
      new Date(h.timestamp).toLocaleString('id-ID'),
      `"${h.userName.replace(/"/g, '""')}"`,
      h.userEmail,
      `"${h.quizTitle.replace(/"/g, '""')}"`,
      `"${h.categoryFilter.replace(/"/g, '""')}"`,
      h.totalQuestions,
      h.score.toFixed(1),
      h.scorePercent.toFixed(0),
      h.passed ? 'LULUS' : 'TIDAK LULUS',
      h.correctCount,
      h.wrongCount,
      h.doubtfulCount,
      Math.round(h.durationSeconds / 60)
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `riwayat_ujian_advokatquiz_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

export const userService = new UserService();
