import {
  UserProfile,
  UserQuizHistoryRecord,
  UserApprovalStatus,
  AppUserRow,
  StoredAuthSession,
  UserRole,
} from '../types/auth';
import { getSupabaseClient, isSupabaseDatabaseConfigured } from './supabaseClient';

const STORAGE_KEY_CURRENT_USER = 'advokatquiz_current_user_v1';
const STORAGE_KEY_AUTH_SESSION = 'advokatquiz_auth_session_v1';
const STORAGE_KEY_ALL_USERS = 'advokatquiz_all_users_v1';
const STORAGE_KEY_HISTORY = 'advokatquiz_all_history_v1';

export type AuthEventListener = (event: any) => void;

export interface LoginOrRequestResult {
  status: UserApprovalStatus | 'error';
  user?: UserProfile;
  message?: string;
}

function mapAppUserToProfile(row: AppUserRow, presenceSource?: UserProfile): UserProfile {
  const cleanEmail = row.email.trim().toLowerCase();
  const normalizedRole: UserRole = row.role === 'admin' ? 'admin' : 'user';
  const username = row.username ?? null;
  const createdMs = row.created_at ? new Date(row.created_at).getTime() : Date.now();

  return {
    id: presenceSource?.id || 'usr-' + btoa(cleanEmail).replace(/[^a-zA-Z0-9]/g, '').slice(0, 12),
    email: cleanEmail,
    username,
    name: username || cleanEmail,
    organization: presenceSource?.organization,
    role: normalizedRole,
    is_approved: Boolean(row.is_approved),
    approvalStatus: row.is_approved ? 'approved' : 'pending',
    createdAt: Number.isFinite(createdMs) ? createdMs : Date.now(),
    lastActive: presenceSource?.lastActive || Date.now(),
    isOnline: presenceSource?.isOnline || false,
    currentActivity: presenceSource?.currentActivity || (row.is_approved ? 'Terdaftar' : 'Menunggu Persetujuan Admin'),
  };
}

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
            name: currentUser.username || currentUser.name,
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
              current.is_approved = true;
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

      this.ws.onerror = () => {
        // Silently handled: HTTP polling & Supabase queries serve as fallback
      };
    } catch {
      // Offline fallback
    }
  }

  private sendWsMessage(payload: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(JSON.stringify(payload));
      } catch {
        // ignore
      }
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

  // Get stored minimal session { email, username, role }
  public getStoredSession(): StoredAuthSession | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(STORAGE_KEY_AUTH_SESSION);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.email) {
        return {
          email: String(parsed.email).trim().toLowerCase(),
          username: parsed.username ?? null,
          role: parsed.role === 'admin' ? 'admin' : 'user',
        };
      }
    } catch {
      // ignore
    }
    return null;
  }

  // Get current logged-in user from localStorage
  public getCurrentUser(): UserProfile | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as UserProfile;
        if (parsed && parsed.email) {
          return parsed;
        }
      } catch {
        // fall through to minimal session
      }
    }

    const session = this.getStoredSession();
    if (session) {
      return {
        id: 'usr-' + btoa(session.email).replace(/[^a-zA-Z0-9]/g, '').slice(0, 12),
        email: session.email,
        username: session.username,
        name: session.username || session.email,
        role: session.role,
        is_approved: true,
        approvalStatus: 'approved',
        createdAt: Date.now(),
        lastActive: Date.now(),
        isOnline: true,
        currentActivity: 'Di Beranda AdvokatQuiz',
      };
    }

    return null;
  }

  // Save current logged-in user ({ email, username, role } + full profile) in localStorage
  public setCurrentUser(user: UserProfile | null): void {
    if (typeof window === 'undefined') return;
    if (user) {
      const session: StoredAuthSession = {
        email: user.email.trim().toLowerCase(),
        username: user.username ?? (user.name && user.name !== user.email ? user.name : null),
        role: user.role === 'admin' ? 'admin' : 'user',
      };
      localStorage.setItem(STORAGE_KEY_AUTH_SESSION, JSON.stringify(session));
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
      this.upsertUserDirectory(user);
    } else {
      localStorage.removeItem(STORAGE_KEY_AUTH_SESSION);
      localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
    }
  }

  // Login or Request Access via Supabase `app_users` (primary) or Express backend `/api/auth/*` (fallback)
  public async loginOrRequestAccess(email: string, username?: string): Promise<LoginOrRequestResult> {
    const cleanEmail = email.trim().toLowerCase();
    const typedUsername = username?.trim() || '';

    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;
    if (supabase) {
      try {
        const { data: existing, error: fetchError } = await supabase
          .from('app_users')
          .select('email, username, role, is_approved, created_at')
          .eq('email', cleanEmail)
          .maybeSingle();

        if (fetchError) {
          console.warn('[SUPABASE AUTH] Gagal memeriksa app_users:', fetchError);
          return {
            status: 'error',
            message: `Gagal memeriksa database Supabase: ${fetchError.message}`,
          };
        }

        // Case 1: Email belum ada di database -> simpan data baru dengan is_approved: false
        if (!existing) {
          if (!typedUsername) {
            return {
              status: 'error',
              message: 'Silakan ketik username Anda terlebih dahulu.',
            };
          }

          const { data: inserted, error: insertError } = await supabase
            .from('app_users')
            .insert({
              email: cleanEmail,
              username: typedUsername,
              role: cleanEmail === 'amifaveiro9@gmail.com' ? 'admin' : 'user',
              is_approved: cleanEmail === 'amifaveiro9@gmail.com',
            })
            .select('email, username, role, is_approved, created_at')
            .single();

          if (insertError) {
            if (insertError.code === '23505') {
              return {
                status: 'error',
                message: 'Username sudah digunakan oleh pengguna lain. Silakan ketik username yang berbeda.',
              };
            }
            return {
              status: 'error',
              message: `Gagal menyimpan permintaan akses: ${insertError.message}`,
            };
          }

          const user = mapAppUserToProfile(inserted as AppUserRow);
          if (user.is_approved) {
            this.setCurrentUser(user);
            return { status: 'approved', user };
          }

          // Best-effort WS/local mirror notification
          fetch('/api/auth/login-or-request', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: cleanEmail, username: typedUsername }),
          }).catch(() => {});

          return {
            status: 'pending',
            user,
            message: 'Permintaan akses terkirim. Silakan tunggu persetujuan Admin.',
          };
        }

        // Case 2: Email sudah ada tapi is_approved === false
        const row = existing as AppUserRow;
        if (!row.is_approved) {
          const user = mapAppUserToProfile(row);
          return {
            status: 'pending',
            user,
            message: 'Permintaan akses terkirim. Silakan tunggu persetujuan Admin.',
          };
        }

        // Case 3: Email sudah ada dan is_approved === true -> langsung izinkan masuk!
        let activeRow = row;
        if (typedUsername && typedUsername !== (row.username || '')) {
          const { data: updated, error: updateError } = await supabase
            .from('app_users')
            .update({ username: typedUsername })
            .eq('email', cleanEmail)
            .select('email, username, role, is_approved, created_at')
            .single();

          if (updateError) {
            if (updateError.code === '23505') {
              return {
                status: 'error',
                message: 'Username sudah digunakan oleh pengguna lain. Silakan ketik username yang berbeda.',
              };
            }
            return {
              status: 'error',
              message: `Gagal memperbarui username: ${updateError.message}`,
            };
          }
          if (updated) {
            activeRow = updated as AppUserRow;
          }
        }

        const approvedUser = mapAppUserToProfile(activeRow);
        approvedUser.isOnline = true;
        approvedUser.currentActivity = 'Di Beranda AdvokatQuiz';
        this.setCurrentUser(approvedUser);
        this.sendWsMessage({
          type: 'AUTH_IDENTIFY',
          email: approvedUser.email,
          name: approvedUser.username || approvedUser.email,
          currentActivity: approvedUser.currentActivity,
        });

        return {
          status: 'approved',
          user: approvedUser,
        };
      } catch (err: any) {
        return {
          status: 'error',
          message: err?.message || 'Terjadi kendala saat menghubungi Supabase.',
        };
      }
    }

    // Fallback: Local Express server (mirrors app_users rules identically)
    try {
      const res = await fetch('/api/auth/login-or-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          username: typedUsername || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        return {
          status: 'error',
          message: data?.error || data?.message || 'Gagal memproses login.',
        };
      }

      const user: UserProfile = {
        ...data.user,
        username: data.user?.username ?? null,
        name: data.user?.username || data.user?.name || cleanEmail,
        is_approved: Boolean(data.user?.is_approved ?? data.status === 'approved'),
      };
      const status: UserApprovalStatus = data.status || 'pending';

      if (status === 'approved') {
        this.setCurrentUser(user);
        this.sendWsMessage({
          type: 'AUTH_IDENTIFY',
          email: user.email,
          name: user.username || user.name,
          currentActivity: user.currentActivity,
        });
      }

      return { status, user, message: data.message };
    } catch {
      return {
        status: 'error',
        message: 'Tidak dapat terhubung ke server maupun database Supabase.',
      };
    }
  }

  // Check Approval Status (for waiting screen polling)
  public async checkApprovalStatus(
    email: string
  ): Promise<{ status: UserApprovalStatus | 'not_found'; user?: UserProfile }> {
    const cleanEmail = email.trim().toLowerCase();
    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('app_users')
          .select('email, username, role, is_approved, created_at')
          .eq('email', cleanEmail)
          .maybeSingle();

        if (!error) {
          if (!data) {
            return { status: 'not_found' };
          }
          const user = mapAppUserToProfile(data as AppUserRow);
          if (user.is_approved) {
            user.isOnline = true;
            user.currentActivity = 'Di Beranda AdvokatQuiz';
            this.setCurrentUser(user);
            return { status: 'approved', user };
          }
          return { status: 'pending', user };
        }
      } catch {
        // fallback below
      }
    }

    try {
      const res = await fetch(`/api/auth/status?email=${encodeURIComponent(cleanEmail)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.status === 'approved' && data.user) {
          const user: UserProfile = {
            ...data.user,
            username: data.user.username ?? null,
            name: data.user.username || data.user.name || cleanEmail,
            is_approved: true,
          };
          this.setCurrentUser(user);
          return { status: 'approved', user };
        }
        return { status: data.status, user: data.user };
      }
    } catch {
      // ignore
    }

    return { status: 'pending' };
  }

  // Admin Approve User (update is_approved = true)
  public async approveUser(email: string): Promise<{ success: boolean; user?: UserProfile; message?: string }> {
    const cleanEmail = email.trim().toLowerCase();
    const currentAdmin = this.getCurrentUser();
    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('app_users')
          .update({ is_approved: true })
          .eq('email', cleanEmail)
          .select('email, username, role, is_approved, created_at')
          .single();

        if (error) {
          return { success: false, message: error.message };
        }

        const approvedUser = mapAppUserToProfile(data as AppUserRow);
        this.upsertUserDirectory(approvedUser);

        // Best-effort server WS broadcast
        fetch('/api/auth/approve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: cleanEmail,
            adminEmail: currentAdmin?.email,
          }),
        }).catch(() => {});

        await this.fetchAllUsers();
        return { success: true, user: approvedUser };
      } catch (err: any) {
        return { success: false, message: err?.message || 'Gagal menyetujui user.' };
      }
    }

    try {
      const res = await fetch('/api/auth/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
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

    return { success: false, message: 'Gagal menyetujui user.' };
  }

  // Admin Delete / Reject User (DELETE row from app_users)
  public async deleteUser(email: string): Promise<{ success: boolean; message?: string }> {
    const cleanEmail = email.trim().toLowerCase();
    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;

    if (supabase) {
      try {
        const { error } = await supabase.from('app_users').delete().eq('email', cleanEmail);
        if (error) {
          return { success: false, message: error.message };
        }

        // Remove from local directory cache
        const filtered = this.getAllUsers().filter((u) => u.email.toLowerCase() !== cleanEmail);
        localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(filtered));

        fetch('/api/auth/reject', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail }),
        }).catch(() => {});

        await this.fetchAllUsers();
        return { success: true };
      } catch (err: any) {
        return { success: false, message: err?.message || 'Gagal menghapus user.' };
      }
    }

    try {
      const res = await fetch('/api/auth/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail }),
      });

      if (res.ok) {
        await this.fetchAllUsers();
        return { success: true };
      }
    } catch (err) {
      console.warn('[AUTH] Delete/Reject API failed:', err);
    }

    return { success: false, message: 'Gagal menghapus user.' };
  }

  // Backward-compatible alias for deleteUser
  public async rejectUser(email: string): Promise<{ success: boolean; message?: string }> {
    return this.deleteUser(email);
  }

  // Fetch all registered users from Supabase app_users (primary) or server /api/auth/users (fallback)
  public async fetchAllUsers(): Promise<UserProfile[]> {
    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;

    let presenceMap = new Map<string, UserProfile>();
    try {
      const res = await fetch('/api/auth/users');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.users)) {
          for (const u of data.users as UserProfile[]) {
            if (u?.email) {
              presenceMap.set(u.email.toLowerCase(), u);
            }
          }
          if (!supabase) {
            const normalized = (data.users as UserProfile[]).map((u) => ({
              ...u,
              username: u.username ?? null,
              name: u.username || u.name || u.email,
              is_approved: typeof u.is_approved === 'boolean' ? u.is_approved : u.approvalStatus === 'approved',
            }));
            localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(normalized));
            return normalized;
          }
        }
      }
    } catch {
      // Ignore network fallback failure
    }

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('app_users')
          .select('email, username, role, is_approved, created_at')
          .order('created_at', { ascending: false });

        if (!error && Array.isArray(data)) {
          const list = (data as AppUserRow[]).map((row) =>
            mapAppUserToProfile(row, presenceMap.get(row.email.toLowerCase()))
          );
          localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('[SUPABASE] Gagal mengambil daftar app_users:', err);
      }
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

    this.sendWsMessage({
      type: 'AUTH_HEARTBEAT',
      email: user.email,
      name: user.username || user.name,
      currentActivity: activityText,
    });

    fetch('/api/auth/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        name: user.username || user.name,
        currentActivity: activityText,
      }),
    }).catch(() => {});

    if (this.channel) {
      this.channel.postMessage({ type: 'USER_HEARTBEAT', user });
    }
  }

  // Logout (clears localStorage session so user must re-login next time)
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
    localStorage.removeItem(STORAGE_KEY_AUTH_SESSION);
    localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
  }

  // Upsert user in cached directory
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
