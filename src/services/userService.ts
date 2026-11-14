import {
  UserProfile,
  UserQuizHistoryRecord,
  UserApprovalStatus,
  AppUserRow,
  StoredAuthSession,
  UserRole,
} from '../types/auth';
import { getSupabaseClient, getSupabaseCredentials, isSupabaseDatabaseConfigured } from './supabaseClient';

export const ADMIN_EMAIL = 'amifaveiro9@gmail.com';
export const ONLINE_THRESHOLD_MS = 45_000; // 45 detik

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

export function isPeerOnline(
  user: Pick<UserProfile, 'email' | 'last_seen' | 'lastActive' | 'isOnline' | 'current_page' | 'currentActivity'>
): boolean {
  if (!user || !user.email) return false;

  // Kecualikan akun Admin utama dari hitungan "Rekan"
  if (user.email.trim().toLowerCase() === ADMIN_EMAIL) {
    return false;
  }

  const pageText = user.current_page || user.currentActivity || '';
  if (pageText === 'Offline') {
    return false;
  }

  const lastSeenMs = user.last_seen ? new Date(user.last_seen).getTime() : user.lastActive;
  if (!lastSeenMs || !Number.isFinite(lastSeenMs)) {
    return false;
  }

  return Date.now() - lastSeenMs < ONLINE_THRESHOLD_MS;
}

function mapAppUserToProfile(row: AppUserRow, presenceSource?: UserProfile): UserProfile {
  const cleanEmail = row.email.trim().toLowerCase();
  const normalizedRole: UserRole = row.role === 'admin' ? 'admin' : 'user';
  const username = row.username ?? null;
  const createdMs = row.created_at ? new Date(row.created_at).getTime() : Date.now();

  const effectiveLastSeen = row.last_seen !== undefined ? row.last_seen : (presenceSource?.last_seen ?? null);
  const lastSeenMs = effectiveLastSeen
    ? new Date(effectiveLastSeen).getTime()
    : (presenceSource?.lastActive || 0);
  const currentPage = row.current_page !== undefined ? row.current_page : (presenceSource?.current_page ?? null);
  const isOfflineMarked = currentPage === 'Offline' || effectiveLastSeen === null;
  const computedOnline =
    !isOfflineMarked &&
    Number.isFinite(lastSeenMs) &&
    lastSeenMs > 0 &&
    Date.now() - lastSeenMs < ONLINE_THRESHOLD_MS;

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
    lastActive: Number.isFinite(lastSeenMs) ? lastSeenMs : 0,
    last_seen: effectiveLastSeen,
    isOnline: computedOnline,
    current_page: currentPage,
    currentActivity:
      currentPage ||
      presenceSource?.currentActivity ||
      (row.is_approved ? 'Di Beranda AdvokatQuiz' : 'Menunggu Persetujuan Admin'),
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
            currentActivity: currentUser.current_page || currentUser.currentActivity || 'Beranda / Persiapan Ujian',
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
        // Silently handled: HTTP polling & Supabase Realtime handle sync
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

  // Subscribe to Supabase Realtime postgres_changes on public.app_users
  public subscribeToAppUsersChanges(onChange: () => void): () => void {
    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;
    if (!supabase) {
      return () => {};
    }

    const channelName = `app_users_changes_${Math.random().toString(36).slice(2, 9)}`;
    const realtimeChannel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'app_users' },
        () => {
          onChange();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(realtimeChannel).catch(() => {});
    };
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
        last_seen: new Date().toISOString(),
        isOnline: true,
        current_page: 'Beranda / Persiapan Ujian',
        currentActivity: 'Beranda / Persiapan Ujian',
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
          .select('email, username, role, is_approved, last_seen, current_page, created_at')
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

          const isMainAdmin = cleanEmail === ADMIN_EMAIL;
          const nowIso = isMainAdmin ? new Date().toISOString() : null;
          const initialPage = isMainAdmin ? 'Beranda / Persiapan Ujian' : 'Menunggu Persetujuan Admin';

          const { data: inserted, error: insertError } = await supabase
            .from('app_users')
            .insert({
              email: cleanEmail,
              username: typedUsername,
              role: isMainAdmin ? 'admin' : 'user',
              is_approved: isMainAdmin,
              last_seen: nowIso,
              current_page: initialPage,
            })
            .select('email, username, role, is_approved, last_seen, current_page, created_at')
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

        // Case 3: Email sudah ada dan is_approved === true -> langsung izinkan masuk & set last_seen
        const updatePayload: Record<string, any> = {
          last_seen: new Date().toISOString(),
          current_page: 'Beranda / Persiapan Ujian',
        };
        if (typedUsername && typedUsername !== (row.username || '')) {
          updatePayload.username = typedUsername;
        }

        const { data: updated, error: updateError } = await supabase
          .from('app_users')
          .update(updatePayload)
          .eq('email', cleanEmail)
          .select('email, username, role, is_approved, last_seen, current_page, created_at')
          .single();

        let activeRow = row;
        if (updateError) {
          if (updateError.code === '23505') {
            return {
              status: 'error',
              message: 'Username sudah digunakan oleh pengguna lain. Silakan ketik username yang berbeda.',
            };
          }
          // Fallback non-fatal if optional columns aren't created yet
          if (!updateError.message?.toLowerCase().includes('last_seen')) {
            return {
              status: 'error',
              message: `Gagal memperbarui data user: ${updateError.message}`,
            };
          }
        } else if (updated) {
          activeRow = updated as AppUserRow;
        }

        const approvedUser = mapAppUserToProfile(activeRow);
        approvedUser.isOnline = true;
        approvedUser.lastActive = Date.now();
        approvedUser.last_seen = activeRow.last_seen || new Date().toISOString();
        approvedUser.current_page = activeRow.current_page || 'Beranda / Persiapan Ujian';
        approvedUser.currentActivity = approvedUser.current_page;

        this.setCurrentUser(approvedUser);
        this.sendWsMessage({
          type: 'AUTH_IDENTIFY',
          email: approvedUser.email,
          name: approvedUser.username || approvedUser.email,
          currentActivity: approvedUser.current_page,
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
          currentActivity: user.current_page || user.currentActivity,
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
          .select('email, username, role, is_approved, last_seen, current_page, created_at')
          .eq('email', cleanEmail)
          .maybeSingle();

        if (!error) {
          if (!data) {
            return { status: 'not_found' };
          }
          const user = mapAppUserToProfile(data as AppUserRow);
          if (user.is_approved) {
            user.isOnline = true;
            user.lastActive = Date.now();
            user.last_seen = new Date().toISOString();
            user.current_page = 'Beranda / Persiapan Ujian';
            user.currentActivity = 'Beranda / Persiapan Ujian';
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
          .select('email, username, role, is_approved, last_seen, current_page, created_at')
          .single();

        if (error) {
          return { success: false, message: error.message };
        }

        const approvedUser = mapAppUserToProfile(data as AppUserRow);
        this.upsertUserDirectory(approvedUser);

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

  public async rejectUser(email: string): Promise<{ success: boolean; message?: string }> {
    return this.deleteUser(email);
  }

  // Fetch all registered users from Supabase app_users (primary) or server /api/auth/users (fallback)
  public async fetchAllUsers(): Promise<UserProfile[]> {
    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;

    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('app_users')
          .select('email, username, role, is_approved, last_seen, current_page, created_at')
          .order('created_at', { ascending: false });

        if (!error && Array.isArray(data)) {
          const list = (data as AppUserRow[]).map((row) => mapAppUserToProfile(row));
          localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(list));
          return list;
        }
      } catch (err) {
        console.warn('[SUPABASE] Gagal mengambil daftar app_users:', err);
      }
    }

    try {
      const res = await fetch('/api/auth/users');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.users)) {
          const now = Date.now();
          const normalized = (data.users as UserProfile[]).map((u) => {
            const lastSeenMs = u.last_seen ? new Date(u.last_seen).getTime() : u.lastActive;
            const pageText = u.current_page || u.currentActivity || '';
            const online =
              pageText !== 'Offline' &&
              Boolean(lastSeenMs && Number.isFinite(lastSeenMs) && now - lastSeenMs < ONLINE_THRESHOLD_MS);
            return {
              ...u,
              username: u.username ?? null,
              name: u.username || u.name || u.email,
              is_approved: typeof u.is_approved === 'boolean' ? u.is_approved : u.approvalStatus === 'approved',
              isOnline: online,
              current_page: u.current_page ?? u.currentActivity ?? null,
              lastActive: lastSeenMs || 0,
            };
          });
          localStorage.setItem(STORAGE_KEY_ALL_USERS, JSON.stringify(normalized));
          return normalized;
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
    return list.map((u) => {
      const lastSeenMs = u.last_seen ? new Date(u.last_seen).getTime() : u.lastActive;
      const pageText = u.current_page || u.currentActivity || '';
      return {
        ...u,
        isOnline:
          pageText !== 'Offline' &&
          Boolean(lastSeenMs && Number.isFinite(lastSeenMs) && now - lastSeenMs < ONLINE_THRESHOLD_MS),
      };
    });
  }

  // Send Database Heartbeat (last_seen = now(), current_page = activityText) to Supabase + WS/HTTP fallback
  public updateActivity(activityText: string): void {
    const user = this.getCurrentUser();
    if (!user) return;

    const now = Date.now();
    const nowIso = new Date(now).toISOString();
    const cleanEmail = user.email.trim().toLowerCase();

    user.currentActivity = activityText;
    user.current_page = activityText;
    user.lastActive = now;
    user.last_seen = nowIso;
    user.isOnline = true;

    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
    this.upsertUserDirectory(user);

    // Primary: Update last_seen & current_page in Supabase table app_users
    const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;
    if (supabase) {
      supabase
        .from('app_users')
        .update({
          last_seen: nowIso,
          current_page: activityText,
        })
        .eq('email', cleanEmail)
        .then(({ error }) => {
          if (error) {
            console.warn('[SUPABASE HEARTBEAT] Gagal update last_seen/current_page:', error.message);
          }
        });
    }

    // Secondary: WebSocket + local Express server sync
    this.sendWsMessage({
      type: 'AUTH_HEARTBEAT',
      email: cleanEmail,
      name: user.username || user.name,
      currentActivity: activityText,
    });

    fetch('/api/auth/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: cleanEmail,
        name: user.username || user.name,
        currentActivity: activityText,
        current_page: activityText,
      }),
    }).catch(() => {});

    if (this.channel) {
      this.channel.postMessage({ type: 'USER_HEARTBEAT', user });
    }
  }

  // Immediately mark user offline when closing tab / beforeunload (using keepalive fetch + sendBeacon)
  public markOfflineOnUnload(): void {
    const currentUser = this.getCurrentUser();
    if (!currentUser?.email) return;

    const cleanEmail = currentUser.email.trim().toLowerCase();

    // Update Supabase REST API with keepalive: true so request survives tab close
    if (isSupabaseDatabaseConfigured()) {
      const { url, anonKey } = getSupabaseCredentials();
      if (url && anonKey) {
        try {
          const endpoint = `${url.replace(/\/+$/, '')}/rest/v1/app_users?email=eq.${encodeURIComponent(cleanEmail)}`;
          fetch(endpoint, {
            method: 'PATCH',
            keepalive: true,
            headers: {
              'Content-Type': 'application/json',
              apikey: anonKey,
              Authorization: `Bearer ${anonKey}`,
              Prefer: 'return=minimal',
            },
            body: JSON.stringify({
              last_seen: null,
              current_page: 'Offline',
            }),
          }).catch(() => {});
        } catch {
          // ignore
        }
      }
    }

    // Local server fallback via sendBeacon (survives tab unload)
    try {
      if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
        const payload = new Blob([JSON.stringify({ email: cleanEmail })], { type: 'application/json' });
        navigator.sendBeacon('/api/auth/logout', payload);
      } else {
        fetch('/api/auth/logout', {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail }),
        }).catch(() => {});
      }
    } catch {
      // ignore
    }
  }

  // Logout (immediately clear active status in Supabase & server + clear localStorage session)
  public logout(): void {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const cleanEmail = currentUser.email.trim().toLowerCase();
      currentUser.isOnline = false;
      currentUser.lastActive = 0;
      currentUser.last_seen = null;
      currentUser.current_page = 'Offline';
      currentUser.currentActivity = 'Offline';
      this.upsertUserDirectory(currentUser);

      const supabase = isSupabaseDatabaseConfigured() ? getSupabaseClient() : null;
      if (supabase) {
        supabase
          .from('app_users')
          .update({
            last_seen: null,
            current_page: 'Offline',
          })
          .eq('email', cleanEmail)
          .then(({ error }) => {
            if (error) {
              console.warn('[SUPABASE LOGOUT] Gagal update status offline:', error.message);
            }
          });
      }

      fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail }),
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
      all[index] = { ...all[index], ...user };
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
