import { UserProfile, UserQuizHistoryRecord, UserApprovalStatus } from '../types/auth';

const STORAGE_KEY_CURRENT_USER = 'advokatquiz_current_user_v1';
const STORAGE_KEY_ALL_USERS = 'advokatquiz_all_users_v1';
const STORAGE_KEY_HISTORY = 'advokatquiz_all_history_v1';

export type AuthEventListener = (event: any) => void;

class UserService {
  private channel: BroadcastChannel | null = null;
  private ws: WebSocket | null = null;
  private wsReconnectTimer: any = null;
  private authListeners: Set<AuthEventListener> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      if ('BroadcastChannel' in window) {
        this.channel = new BroadcastChannel('advokatquiz_auth_sync');
        this.channel.onmessage = (e) => {
          this.notifyListeners(e.data);
        };
      }
      this.initWebSocket();
    }
  }

  // Real-time WebSocket connection to server at /ws for presence & instant approvals
  private initWebSocket() {
    if (typeof window === 'undefined') return;

    try {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.host}/ws`;

      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
          this.sendWsMessage({
            type: 'AUTH_IDENTIFY',
            email: currentUser.email,
            name: currentUser.name,
            currentActivity: currentUser.currentActivity || 'Di Beranda AdvokatQuiz',
          });
        }
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'USER_APPROVED') {
            const current = this.getCurrentUser();
            if (current && current.email === data.email) {
              current.approvalStatus = 'approved';
              this.setCurrentUser(current);
            }
          }
          this.notifyListeners(data);
        } catch {
          // ignore non-json
        }
      };

      this.ws.onclose = () => {
        if (!this.wsReconnectTimer) {
          this.wsReconnectTimer = setTimeout(() => {
            this.wsReconnectTimer = null;
            this.initWebSocket();
          }, 6000);
        }
      };

      this.ws.onerror = (e) => {
        // Silently handled: HTTP polling automatically handles presence and sync as fallback
      };
    } catch {
      // Offline fallback
    }
  }

  private sendWsMessage(payload: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify(payload));
      } catch {}
    }
  }

  public onAuthEvent(listener: AuthEventListener): () => void {
    this.authListeners.add(listener);
    return () => {
      this.authListeners.delete(listener);
    };
  }

  private notifyListeners(event: any) {
    for (const listener of this.authListeners) {
      try {
        listener(event);
      } catch (err) {
        console.warn('[AUTH] Error in auth listener:', err);
      }
    }
  }

  // Get current logged-in user from localStorage
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

  // Set current user in localStorage
  public setCurrentUser(user: UserProfile | null): void {
    if (typeof window === 'undefined') return;
    if (user) {
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
      this.upsertUserDirectory(user);
    } else {
      localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
    }
  }

  // Login or Request Access via Server
  public async loginOrRequestAccess(
    email: string,
    nameOrEmpty?: string,
    organization?: string
  ): Promise<{ status: UserApprovalStatus; user: UserProfile; message?: string }> {
    const cleanEmail = email.trim().toLowerCase();

    try {
      const res = await fetch('/api/auth/login-or-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          name: nameOrEmpty?.trim(),
          organization: organization?.trim(),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const user: UserProfile = data.user;
        const status: UserApprovalStatus = data.status || 'pending';

        if (status === 'approved') {
          this.setCurrentUser(user);
          this.sendWsMessage({
            type: 'AUTH_IDENTIFY',
            email: user.email,
            name: user.name,
            currentActivity: user.currentActivity,
          });
        }

        return { status, user, message: data.message };
      }
    } catch (err) {
      console.warn('[AUTH] Server login request failed, falling back to local verification:', err);
    }

    // Local fallback if offline
    return this.loginLocalFallback(nameOrEmpty || '', cleanEmail, organization);
  }

  // Synchronous local login fallback
  public login(nameOrEmpty: string, email: string, organization?: string): UserProfile {
    const cleanEmail = email.trim().toLowerCase();
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

    const isAdmin =
      cleanEmail === 'ahmadmiftahulfauzi07@gmail.com' ||
      cleanEmail === 'amifaveiro9@gmail.com' ||
      cleanEmail.includes('admin');

    const user: UserProfile = {
      id: existing?.id || ('usr-' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 12)),
      name: cleanName,
      email: cleanEmail,
      organization: organization?.trim() || existing?.organization || (isAdmin ? 'Pengawas & Pengembang UPA' : 'PKPA PERADI 2026'),
      role: isAdmin ? 'admin' : (existing?.role || 'peserta'),
      approvalStatus: isAdmin ? 'approved' : (existing?.approvalStatus || 'approved'),
      createdAt: existing?.createdAt || Date.now(),
      lastActive: Date.now(),
      isOnline: true,
      currentActivity: 'Di Halaman Utama AdvokatQuiz',
    };

    this.setCurrentUser(user);

    // Async sync with server in background
    fetch('/api/auth/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: cleanEmail,
        name: cleanName,
        currentActivity: user.currentActivity,
      }),
    }).catch(() => {});

    return user;
  }

  private loginLocalFallback(nameOrEmpty: string, email: string, organization?: string) {
    const user = this.login(nameOrEmpty, email, organization);
    return {
      status: user.approvalStatus || 'approved',
      user,
      message: 'Masuk melalui verifikasi lokal.',
    };
  }

  // Check Approval Status (for waiting modal polling)
  public async checkApprovalStatus(email: string): Promise<{ status: UserApprovalStatus | 'not_found'; user?: UserProfile }> {
    try {
      const res = await fetch(`/api/auth/status?email=${encodeURIComponent(email)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.status === 'approved' && data.user) {
          this.setCurrentUser(data.user);
        }
        return { status: data.status, user: data.user };
      }
    } catch {
      // Offline fallback
    }

    const user = this.getAllUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
    return {
      status: user?.approvalStatus || 'pending',
      user,
    };
  }

  // Admin Approve User (Teman bebas masuk kapan saja setelah ini)
  public async approveUser(email: string): Promise<{ success: boolean; user?: UserProfile; message?: string }> {
    const currentAdmin = this.getCurrentUser();
    try {
      const res = await fetch('/api/auth/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          adminEmail: currentAdmin?.email,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          this.upsertUserDirectory(data.user);
        }
        await this.fetchAllUsers();
        return { success: true, user: data.user, message: data.message };
      }
    } catch (err) {
      console.warn('[AUTH] Approve API failed:', err);
    }

    // Local fallback update
    const all = this.getAllUsers();
    const idx = all.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
    if (idx >= 0) {
      all[idx].approvalStatus = 'approved';
      all[idx].approvedAt = Date.now();
      all[idx].approvedBy = currentAdmin?.name || 'Ahmad Miftahul Fauzi, S.H.';
      localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(all));
    }
    return { success: true, message: 'Disetujui secara lokal.' };
  }

  // Admin Reject User
  public async rejectUser(email: string): Promise<{ success: boolean; message?: string }> {
    try {
      const res = await fetch('/api/auth/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      if (res.ok) {
        await this.fetchAllUsers();
        return { success: true };
      }
    } catch (err) {
      console.warn('[AUTH] Reject API failed:', err);
    }

    const all = this.getAllUsers();
    const idx = all.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
    if (idx >= 0) {
      all[idx].approvalStatus = 'rejected';
      localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(all));
    }
    return { success: true };
  }

  // Fetch all registered users & real-time presence from server
  public async fetchAllUsers(): Promise<UserProfile[]> {
    try {
      const res = await fetch('/api/auth/users');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.users)) {
          const list: UserProfile[] = data.users;
          localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(list));
          return list;
        }
      }
    } catch {
      // Network failure
    }
    return this.getAllUsers();
  }

  // Get cached user directory
  public getAllUsers(): UserProfile[] {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY_ALL_USERS);
    let list: UserProfile[] = [];
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          list = parsed.filter((u: UserProfile) => u && u.email && !u.id?.startsWith('user-seed-'));
        }
      } catch {
        list = [];
      }
    }

    const now = Date.now();
    return list.map((u) => ({
      ...u,
      isOnline: u.isOnline !== false && now - u.lastActive <= 30000,
    }));
  }

  // Update Activity & Send Heartbeat to server + WS
  public updateActivity(activityText: string): void {
    const user = this.getCurrentUser();
    if (!user) return;

    user.currentActivity = activityText;
    user.lastActive = Date.now();
    user.isOnline = true;

    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
    this.upsertUserDirectory(user);

    // Push via WebSocket for immediate real-time update
    this.sendWsMessage({
      type: 'AUTH_HEARTBEAT',
      email: user.email,
      name: user.name,
      currentActivity: activityText,
    });

    // Also push via HTTP heartbeat
    fetch('/api/auth/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        name: user.name,
        currentActivity: activityText,
      }),
    }).catch(() => {});

    if (this.channel) {
      this.channel.postMessage({ type: 'USER_HEARTBEAT', user });
    }
  }

  // Logout
  public logout(): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      currentUser.isOnline = false;
      currentUser.lastActive = Date.now();
      currentUser.currentActivity = 'Offline';
      this.upsertUserDirectory(currentUser);

      fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: currentUser.email }),
      }).catch(() => {});

      if (this.channel) {
        this.channel.postMessage({ type: 'USER_LOGOUT', userId: currentUser.id });
      }
    }
    localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
  }

  // Upsert user in directory
  public upsertUserDirectory(user: UserProfile): void {
    const all = this.getAllUsers();
    const index = all.findIndex((u) => u.email.toLowerCase() === user.email.toLowerCase() || u.id === user.id);
    if (index >= 0) {
      all[index] = { ...all[index], ...user, lastActive: Date.now() };
    } else {
      all.unshift(user);
    }
    localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(all));
  }

  // Save Quiz History Record
  public saveQuizHistory(record: UserQuizHistoryRecord): void {
    const all = this.getAllHistory();
    all.unshift(record);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(all));

    this.updateActivity(`Selesai ${record.quizTitle} (Skor: ${record.scorePercent.toFixed(1)}%)`);

    if (this.channel) {
      this.channel.postMessage({ type: 'NEW_HISTORY_RECORD', record });
    }
  }

  // Get All History Records
  public getAllHistory(): UserQuizHistoryRecord[] {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter((h) => h && h.id && !h.id.startsWith('hist-seed-'));
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
      'Durasi (Menit)',
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
      Math.round(h.durationSeconds / 60),
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
