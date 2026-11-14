import { createClient, SupabaseClient } from '@supabase/supabase-js';

const STORAGE_KEY_SUPABASE = 'advokatquiz_supabase_config_v1';
const DEMO_PLACEHOLDER_URL = 'https://advokatquiz-realtime.supabase.co';
const DEMO_PLACEHOLDER_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.demo_advokatquiz_realtime_key';

export interface SupabaseCredentials {
  url: string;
  anonKey: string;
}

let cachedClient: SupabaseClient | null = null;
let cachedKeySignature = '';

export function getSupabaseCredentials(): SupabaseCredentials {
  const envUrl =
    (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_URL || '';
  const envKey =
    (import.meta as unknown as { env: Record<string, string> }).env?.VITE_SUPABASE_ANON_KEY || '';

  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY_SUPABASE);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.url && parsed?.anonKey && parsed.url !== DEMO_PLACEHOLDER_URL) {
          return {
            url: String(parsed.url).trim(),
            anonKey: String(parsed.anonKey).trim(),
          };
        }
      } catch {
        // ignore invalid stored config
      }
    }
  }

  return {
    url: envUrl.trim(),
    anonKey: envKey.trim(),
  };
}

export function isSupabaseDatabaseConfigured(): boolean {
  const { url, anonKey } = getSupabaseCredentials();
  return Boolean(
    url &&
      anonKey &&
      url.startsWith('http') &&
      url !== DEMO_PLACEHOLDER_URL &&
      anonKey !== DEMO_PLACEHOLDER_KEY
  );
}

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseDatabaseConfigured()) {
    return null;
  }

  const { url, anonKey } = getSupabaseCredentials();
  const signature = `${url}::${anonKey}`;

  if (cachedClient && cachedKeySignature === signature) {
    return cachedClient;
  }

  try {
    cachedClient = createClient(url, anonKey);
    cachedKeySignature = signature;
    return cachedClient;
  } catch (err) {
    console.warn('[SUPABASE] Gagal menginisialisasi client:', err);
    cachedClient = null;
    cachedKeySignature = '';
    return null;
  }
}

export function resetSupabaseClient(): void {
  cachedClient = null;
  cachedKeySignature = '';
}
