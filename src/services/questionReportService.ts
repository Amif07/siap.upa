/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ReportIssueType = 
  | 'kunci_keliru'
  | 'dasar_hukum_tidak_akurat'
  | 'pilihan_ambigu'
  | 'teks_soal_typo'
  | 'lainnya';

export interface QuestionReport {
  id: string;
  questionId: string;
  questionNumber: number;
  category: string;
  questionText: string;
  currentCorrectAnswer: string;
  userAnswer?: string | null;
  issueType: ReportIssueType;
  issueLabel: string;
  proposedAnswer?: string;
  legalBasisArgument: string;
  createdAt: string;
  status: 'terkirim' | 'diverifikasi' | 'diterima';
}

const STORAGE_KEY = 'advokatquiz_question_reports_v1';

export const ISSUE_TYPE_OPTIONS: { id: ReportIssueType; label: string; desc: string }[] = [
  {
    id: 'kunci_keliru',
    label: 'Kunci Jawaban Keliru',
    desc: 'Jawaban yang ditetapkan bertentangan dengan norma hukum positif atau doktrin yang berlaku.'
  },
  {
    id: 'dasar_hukum_tidak_akurat',
    label: 'Dasar Hukum / Pasal Tidak Akurat',
    desc: 'Pasal atau undang-undang yang dirujuk salah, telah dicabut/diamandemen, atau tidak relevan.'
  },
  {
    id: 'pilihan_ambigu',
    label: 'Pilihan Jawaban Ambigu / Ganda',
    desc: 'Terdapat lebih dari satu jawaban yang benar secara yuridis atau pilihan membuat multitafsir.'
  },
  {
    id: 'teks_soal_typo',
    label: 'Teks Soal Cacat / Mengandung Typo',
    desc: 'Kalimat soal membingungkan, terpotong, atau mengubah substansi makna hukum.'
  },
  {
    id: 'lainnya',
    label: 'Catatan Kritis Lainnya',
    desc: 'Masukan substansi hukum lainnya untuk ditelaah dewan penguji.'
  }
];

export function getQuestionReports(): QuestionReport[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn('Gagal membaca laporan soal:', err);
    return [];
  }
}

export function saveQuestionReport(report: Omit<QuestionReport, 'id' | 'createdAt' | 'status' | 'questionId'> & { questionId: number | string }): QuestionReport {
  const reports = getQuestionReports();
  const qIdStr = String(report.questionId);
  const newReport: QuestionReport = {
    ...report,
    questionId: qIdStr,
    id: `REP-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`,
    createdAt: new Date().toISOString(),
    status: 'terkirim'
  };

  // Replace if already reported for this questionId or prepend
  const existingIdx = reports.findIndex(r => String(r.questionId) === qIdStr);
  if (existingIdx >= 0) {
    reports[existingIdx] = newReport;
  } else {
    reports.unshift(newReport);
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (err) {
    console.warn('Gagal menyimpan laporan soal:', err);
  }

  return newReport;
}

export function isQuestionReported(questionId: number | string): boolean {
  const reports = getQuestionReports();
  const qIdStr = String(questionId);
  return reports.some(r => String(r.questionId) === qIdStr);
}

export function getReportByQuestionId(questionId: number | string): QuestionReport | undefined {
  const reports = getQuestionReports();
  const qIdStr = String(questionId);
  return reports.find(r => String(r.questionId) === qIdStr);
}

export function removeQuestionReport(reportId: string): void {
  const reports = getQuestionReports().filter(r => r.id !== reportId);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (err) {
    console.warn('Gagal menghapus laporan soal:', err);
  }
}

