-- Sistem Login Sederhana, Persetujuan Admin & Pemantauan Real-Time (1 Tabel: app_users)
-- Jalankan query ini di SQL Editor Dashboard Supabase Anda.

CREATE TABLE IF NOT EXISTS public.app_users (
  email TEXT PRIMARY KEY,
  username TEXT UNIQUE,
  role TEXT NOT NULL DEFAULT 'user',
  is_approved BOOLEAN NOT NULL DEFAULT false,
  last_seen TIMESTAMPTZ,
  current_page TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Tambahkan kolom last_seen & current_page jika tabel app_users sudah dibuat sebelumnya
ALTER TABLE public.app_users
  ADD COLUMN IF NOT EXISTS last_seen TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS current_page TEXT;

-- Matikan Row Level Security agar tidak memerlukan konfigurasi policy tambahan
ALTER TABLE public.app_users DISABLE ROW LEVEL SECURITY;

-- Aktifkan Supabase Realtime (postgres_changes) pada tabel app_users
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'app_users'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.app_users;
  END IF;
END $$;

-- Masukkan akun Admin utama dengan role = 'admin' dan is_approved = true
INSERT INTO public.app_users (email, username, role, is_approved)
VALUES ('amifaveiro9@gmail.com', NULL, 'admin', true)
ON CONFLICT (email) DO UPDATE
SET role = 'admin',
    is_approved = true;
