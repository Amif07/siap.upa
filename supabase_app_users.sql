-- Sistem Login Sederhana & Persetujuan Admin (1 Tabel: app_users)
-- Jalankan query ini di SQL Editor Dashboard Supabase Anda.

CREATE TABLE IF NOT EXISTS public.app_users (
  email TEXT PRIMARY KEY,
  username TEXT UNIQUE,
  role TEXT NOT NULL DEFAULT 'user',
  is_approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Matikan Row Level Security agar tidak memerlukan konfigurasi policy tambahan
ALTER TABLE public.app_users DISABLE ROW LEVEL SECURITY;

-- Masukkan akun Admin utama dengan role = 'admin' dan is_approved = true
INSERT INTO public.app_users (email, username, role, is_approved)
VALUES ('amifaveiro9@gmail.com', NULL, 'admin', true)
ON CONFLICT (email) DO UPDATE
SET role = 'admin',
    is_approved = true;
