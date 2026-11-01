import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowLeft, 
  Scale, 
  Search, 
  Flag, 
  AlertCircle, 
  X, 
  Send, 
  FileText, 
  Check, 
  Clock, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { UPAQuestion, UserAnswerState, QuestionOptionKey } from '../types/quiz';
import { soundEffects } from '../utils/soundEffects';
import { 
  ISSUE_TYPE_OPTIONS, 
  ReportIssueType, 
  QuestionReport, 
  getQuestionReports, 
  saveQuestionReport, 
  isQuestionReported,
  removeQuestionReport 
} from '../services/questionReportService';

interface ReviewModalProps {
  questions: UPAQuestion[];
  answers: Record<number, UserAnswerState>;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  questions,
  answers,
  onClose,
}) => {
  const [filter, setFilter] = useState<'all' | 'wrong' | 'doubtful' | 'correct' | 'reported'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Reporting state
  const [activeReportQuestion, setActiveReportQuestion] = useState<{
    question: UPAQuestion;
    questionNumber: number;
    userAnswer?: string | null;
  } | null>(null);

  const [issueType, setIssueType] = useState<ReportIssueType>('kunci_keliru');
  const [proposedAnswer, setProposedAnswer] = useState<string>('');
  const [legalArgument, setLegalArgument] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showReportsListModal, setShowReportsListModal] = useState<boolean>(false);
  const [reportsRefreshKey, setReportsRefreshKey] = useState<number>(0);

  const existingReports = getQuestionReports();
  const reportedCount = existingReports.length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenReport = (q: UPAQuestion, questionNumber: number, userAnswer?: string | null) => {
    soundEffects.playClick();
    const existing = existingReports.find(r => String(r.questionId) === String(q.id));
    if (existing) {
      setIssueType(existing.issueType);
      setProposedAnswer(existing.proposedAnswer || '');
      setLegalArgument(existing.legalBasisArgument || '');
    } else {
      setIssueType('kunci_keliru');
      setProposedAnswer('');
      setLegalArgument('');
    }
    setActiveReportQuestion({
      question: q,
      questionNumber,
      userAnswer: userAnswer || null,
    });
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeReportQuestion) return;

    if (!legalArgument.trim()) {
      showToast('Harap sertakan alasan hukum atau rujukan pasal.');
      return;
    }

    const selectedIssue = ISSUE_TYPE_OPTIONS.find(o => o.id === issueType);

    saveQuestionReport({
      questionId: activeReportQuestion.question.id,
      questionNumber: activeReportQuestion.questionNumber,
      category: activeReportQuestion.question.category,
      questionText: activeReportQuestion.question.question,
      currentCorrectAnswer: activeReportQuestion.question.correctAnswer,
      userAnswer: activeReportQuestion.userAnswer,
      issueType,
      issueLabel: selectedIssue?.label || 'Koreksi Soal',
      proposedAnswer: proposedAnswer || undefined,
      legalBasisArgument: legalArgument.trim(),
    });

    soundEffects.playClick();
    setReportsRefreshKey(prev => prev + 1);
    setActiveReportQuestion(null);
    showToast(`Laporan koreksi Soal No. ${activeReportQuestion.questionNumber} berhasil dicatat.`);
  };

  const handleDeleteReport = (reportId: string) => {
    removeQuestionReport(reportId);
    setReportsRefreshKey(prev => prev + 1);
    showToast('Laporan koreksi telah dihapus.');
  };

  const filteredQuestions = questions.filter((q, index) => {
    const ans = answers[index];
    const isCorrect = ans?.selectedOption === q.correctAnswer;
    const isAnswered = ans?.selectedOption !== null && ans?.selectedOption !== undefined;
    const isDoubtful = ans?.isDoubtful;
    const isReported = isQuestionReported(q.id);

    if (filter === 'wrong' && (!isAnswered || isCorrect)) return false;
    if (filter === 'correct' && !isCorrect) return false;
    if (filter === 'doubtful' && !isDoubtful) return false;
    if (filter === 'reported' && !isReported) return false;

    if (searchQuery.trim()) {
      const qText = (q.question + ' ' + q.explanation.legalBasis + ' ' + q.explanation.analysis + ' ' + q.category).toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) return false;
    }

    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-3 rounded-xl shadow-lg border border-slate-700 dark:border-slate-300 text-xs sm:text-sm font-medium flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Ringkasan Hasil</span>
          </button>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold font-legal text-slate-900 dark:text-white">
              Lembar Pembahasan Yuridis Mendalam
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Ulasan yuridis komprehensif dilengkapi dengan dasar hukum konkrit (Pasal HIR, KUHAP, UU PTUN, KEAI, UU MK).
          </p>
        </div>

        {/* Action & Filter buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {reportedCount > 0 && (
            <button
              onClick={() => {
                soundEffects.playClick();
                setShowReportsListModal(true);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Laporan Anda ({reportedCount})</span>
            </button>
          )}

          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => {
                soundEffects.playClick();
                setFilter('all');
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Semua ({questions.length})
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                setFilter('wrong');
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'wrong'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Salah
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                setFilter('doubtful');
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'doubtful'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Ragu
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                setFilter('correct');
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'correct'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Benar
            </button>
            {reportedCount > 0 && (
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setFilter('reported');
                }}
                className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filter === 'reported'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-amber-700 dark:text-amber-400'
                }`}
              >
                Dilaporkan ({reportedCount})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari kata kunci, topik, atau pasal (contoh: Pasal 118, praperadilan, verzet, KEAI)..."
          className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
        />
      </div>

      {/* Question Cards List */}
      <div className="space-y-6" key={reportsRefreshKey}>
        {filteredQuestions.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-500">
            Tidak ada soal yang cocok dengan filter atau pencarian Anda.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const originalIndex = questions.findIndex((item) => item.id === q.id);
            const ans = answers[originalIndex];
            const isCorrect = ans?.selectedOption === q.correctAnswer;
            const isAnswered = ans?.selectedOption !== null && ans?.selectedOption !== undefined;
            const isDoubtful = ans?.isDoubtful;
            const hasReport = isQuestionReported(q.id);

            return (
              <div
                key={q.id}
                className={`bg-white dark:bg-slate-900 border rounded-2xl p-6 sm:p-8 shadow-sm transition-colors ${
                  !isAnswered
                    ? 'border-slate-200 dark:border-slate-800'
                    : isCorrect
                    ? 'border-emerald-200 dark:border-emerald-900/60'
                    : 'border-rose-200 dark:border-rose-900/60'
                }`}
              >
                {/* Meta unboxed */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800/80 text-xs">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Soal No. {originalIndex + 1}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-700 dark:text-amber-400 font-medium">
                      {q.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{q.topicTag}</span>
                  </div>

                  {/* Status Indicator & Report Button */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Report Question Menu Button */}
                    <button
                      onClick={() => handleOpenReport(q, originalIndex + 1, ans?.selectedOption)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                        hasReport
                          ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700/60 hover:bg-amber-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-amber-600 hover:border-amber-400'
                      }`}
                      title="Laporkan jika menemukan kunci jawaban atau rumusan pasal yang keliru"
                    >
                      <Flag className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                      <span>{hasReport ? 'Edit Laporan' : 'Laporkan Soal'}</span>
                    </button>

                    {isDoubtful && (
                      <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded text-[11px]">
                        <HelpCircle className="w-3 h-3" />
                        Ragu-ragu
                      </span>
                    )}

                    {!isAnswered ? (
                      <span className="text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                        Tidak Dijawab
                      </span>
                    ) : isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-[11px]">
                        <CheckCircle2 className="w-3 h-3" />
                        Benar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded text-[11px]">
                        <XCircle className="w-3 h-3" />
                        Salah
                      </span>
                    )}
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mb-4 leading-relaxed">
                  {q.question}
                </h3>

                {/* Options List */}
                <div className="space-y-2 mb-6">
                  {q.options.map((opt) => {
                    const isKey = opt.key === q.correctAnswer;
                    const isUserChoice = ans?.selectedOption === opt.key;

                    let optClass = 'p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ';
                    if (isKey) {
                      optClass += 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 font-medium';
                    } else if (isUserChoice && !isCorrect) {
                      optClass += 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-400 dark:border-rose-700 text-rose-950 dark:text-rose-100';
                    } else {
                      optClass += 'border-slate-200 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-800/20 text-slate-700 dark:text-slate-300';
                    }

                    return (
                      <div key={opt.key} className={optClass}>
                        <span
                          className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                            isKey
                              ? 'bg-emerald-600 text-white'
                              : isUserChoice
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <div className="flex-1 pt-0.5">
                          <span>{opt.text}</span>
                          {isKey && (
                            <span className="ml-2 font-bold text-[11px] text-emerald-700 dark:text-emerald-400">
                              (KUNCI JAWABAN BENAR)
                            </span>
                          )}
                          {isUserChoice && !isCorrect && (
                            <span className="ml-2 font-bold text-[11px] text-rose-700 dark:text-rose-400">
                              (PILIHAN ANDA)
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Legal Review Box */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                  {/* Concrete Statutory Legal Basis */}
                  <div className="flex items-start gap-2.5">
                    <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                        Dasar Hukum Konkrit
                      </span>
                      <p className="text-xs sm:text-sm font-semibold font-mono text-slate-900 dark:text-white">
                        {q.explanation.legalBasis}
                      </p>
                    </div>
                  </div>

                  {/* Legal Summary / Rationale */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                      Alasan Hukum Mengapa Benar
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                      {q.explanation.summary}
                    </p>
                  </div>

                  {/* Comprehensive Juridical Analysis */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                      Analisis Yuridis & Penerapan Kasus
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {q.explanation.analysis}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Reporting Modal / Dialog */}
      {activeReportQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-3 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Flag className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                    Laporkan Koreksi Soal No. {activeReportQuestion.questionNumber}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {activeReportQuestion.question.category} · Kunci: {activeReportQuestion.question.correctAnswer}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveReportQuestion(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReport} className="space-y-4 text-xs sm:text-sm">
              {/* Question Preview Snippet */}
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 italic line-clamp-3">
                "{activeReportQuestion.question.question}"
              </div>

              {/* Issue Type Selector */}
              <div>
                <label className="block font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Jenis Masalah / Kekeliruan
                </label>
                <div className="space-y-2">
                  {ISSUE_TYPE_OPTIONS.map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                        issueType === opt.id
                          ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 text-amber-950 dark:text-amber-100'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="issueType"
                        value={opt.id}
                        checked={issueType === opt.id}
                        onChange={() => setIssueType(opt.id)}
                        className="mt-0.5 text-amber-600 focus:ring-amber-500"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-xs">{opt.label}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{opt.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Proposed Answer Key (Optional) */}
              <div>
                <label className="block font-semibold text-slate-900 dark:text-slate-100 mb-1.5">
                  Usulan Kunci Jawaban yang Benar (Opsional)
                </label>
                <div className="flex items-center gap-2">
                  {(['A', 'B', 'C', 'D'] as QuestionOptionKey[]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setProposedAnswer(proposedAnswer === key ? '' : key)}
                      className={`w-9 h-9 rounded-lg font-mono font-bold text-xs border transition-colors cursor-pointer ${
                        proposedAnswer === key
                          ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                  {proposedAnswer && (
                    <button
                      type="button"
                      onClick={() => setProposedAnswer('')}
                      className="text-xs text-slate-400 hover:text-slate-600 underline ml-2"
                    >
                      Batal pilih
                    </button>
                  )}
                </div>
              </div>

              {/* Legal Argument & Citation */}
              <div>
                <label className="block font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  Dasar Hukum & Argumentasi Yuridis Koreksi <span className="text-rose-500">*</span>
                </label>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                  Sebutkan pasal, undang-undang, SEMA, atau doktrin hukum yang mendasari koreksi Anda.
                </p>
                <textarea
                  rows={4}
                  required
                  value={legalArgument}
                  onChange={(e) => setLegalArgument(e.target.value)}
                  placeholder="Contoh: Berdasarkan Pasal 18 UU No. 18 Tahun 2003 Jo. Pasal 4 huruf a KEAI, hak menolak perkara diperbolehkan apabila tidak sesuai dengan keahliannya..."
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setActiveReportQuestion(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Laporan</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* List of Submitted Reports Drawer / Modal */}
      {showReportsListModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                  Daftar Laporan Koreksi Soal ({existingReports.length})
                </h3>
              </div>
              <button
                onClick={() => setShowReportsListModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {existingReports.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs sm:text-sm">
                  Belum ada laporan soal yang diajukan.
                </div>
              ) : (
                existingReports.map((report) => (
                  <div
                    key={report.id}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2 text-xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 dark:text-white">
                          Soal No. {report.questionNumber}
                        </span>
                        <span className="text-amber-600 dark:text-amber-400 font-medium">
                          {report.category}
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">
                          [{report.id}]
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-medium">
                          <Clock className="w-2.5 h-2.5" />
                          Tercatat
                        </span>
                        <button
                          onClick={() => handleDeleteReport(report.id)}
                          className="text-rose-500 hover:text-rose-700 text-[11px] underline ml-1 cursor-pointer"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 italic line-clamp-2">
                      "{report.questionText}"
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-slate-700/60 text-[11px]">
                      <div>
                        <span className="text-slate-500 block">Kategori Masalah:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{report.issueLabel}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Kunci Asli vs Usulan:</span>
                        <span className="font-mono text-slate-800 dark:text-slate-200">
                          {report.currentCorrectAnswer} → {report.proposedAnswer || '(Hanya Catatan)'}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] bg-white dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                      <span className="font-semibold text-amber-700 dark:text-amber-400 block mb-0.5">
                        Argumentasi Hukum Pengguna:
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">
                        {report.legalBasisArgument}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowReportsListModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity cursor-pointer"
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
