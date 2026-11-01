import React, { useState } from 'react';
import { Download, Copy, Check, Plus, Code, Layers, Search, Filter } from 'lucide-react';
import { UPAQuestion, UPACategory } from '../types/quiz';
import { MASTER_UPA_DATABASE, UPA_CATEGORIES } from '../data/upaQuestions';
import { soundEffects } from '../utils/soundEffects';

interface QuestionBankModalProps {
  customQuestions: UPAQuestion[];
  onAddQuestion: (q: UPAQuestion) => void;
}

export const QuestionBankModal: React.FC<QuestionBankModalProps> = ({
  customQuestions,
  onAddQuestion,
}) => {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [showJsonPreview, setShowJsonPreview] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  // New question form state
  const [newCategory, setNewCategory] = useState<UPACategory>('Hukum Acara Perdata');
  const [newTopicTag, setNewTopicTag] = useState('');
  const [newQuestionText, setNewQuestionText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [summaryExp, setSummaryExp] = useState('');
  const [legalBasisExp, setLegalBasisExp] = useState('');
  const [analysisExp, setAnalysisExp] = useState('');

  const allQuestions = [...MASTER_UPA_DATABASE, ...customQuestions];

  const filteredQuestions = allQuestions.filter((q) => {
    if (selectedCategory !== 'Semua' && q.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const text = (q.question + ' ' + q.topicTag + ' ' + q.explanation.legalBasis).toLowerCase();
      if (!text.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(allQuestions, null, 2);
    navigator.clipboard.writeText(jsonStr);
    soundEffects.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    soundEffects.playClick();
    const jsonStr = JSON.stringify(allQuestions, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `advokatquiz_500_soal_upa_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSaveNewQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playClick();

    const created: UPAQuestion = {
      id: allQuestions.length + 1,
      category: newCategory,
      topicTag: newTopicTag.trim() || 'Hukum Acara',
      question: newQuestionText.trim(),
      options: [
        { key: 'A', text: optA.trim() },
        { key: 'B', text: optB.trim() },
        { key: 'C', text: optC.trim() },
        { key: 'D', text: optD.trim() },
      ],
      correctAnswer,
      explanation: {
        summary: summaryExp.trim(),
        legalBasis: legalBasisExp.trim(),
        analysis: analysisExp.trim(),
      },
      difficulty: 'Sedang',
    };

    onAddQuestion(created);
    setShowAddForm(false);
    // Reset form
    setNewQuestionText('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setSummaryExp('');
    setLegalBasisExp('');
    setAnalysisExp('');
    alert('Soal baru berhasil ditambahkan ke bank soal!');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Info */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
            <Layers className="w-4 h-4" />
            <span>Master Data Ujian Profesi Advokat</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-legal text-slate-900 dark:text-white">
            Bank Database 500 Soal UPA
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Struktur JSON modular yang memuat materi resmi standar PERADI. Anda dapat mengunduh file JSON lengkap atau menambahkan soal kustom sesuai kebutuhan latihan Anda.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-amber-600 text-white hover:bg-slate-800 dark:hover:bg-amber-500 flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Soal</span>
          </button>

          <button
            onClick={handleCopyJson}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tersalin' : 'Salin JSON'}</span>
          </button>

          <button
            onClick={handleDownloadJson}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh .JSON</span>
          </button>

          <button
            onClick={() => setShowJsonPreview(!showJsonPreview)}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <Code className="w-3.5 h-3.5" />
            <span>{showJsonPreview ? 'Tutup Schema' : 'Lihat Schema'}</span>
          </button>
        </div>
      </div>

      {/* JSON Schema Code Preview Box */}
      {showJsonPreview && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-slate-200 font-mono text-xs overflow-x-auto shadow-md">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <span className="text-amber-400 font-bold">Contoh Struktur Array JSON (Format Standar UPA):</span>
            <span className="text-slate-500">Total: {allQuestions.length} Items</span>
          </div>
          <pre className="max-h-64 overflow-y-auto leading-relaxed">
{`[
  {
    "id": 1,
    "category": "Hukum Acara Perdata",
    "topicTag": "Kompetensi Relatif",
    "question": "Dalam hal Penggugat hendak mengajukan gugatan perdata...",
    "options": [
      { "key": "A", "text": "Pengadilan Negeri di tempat kediaman Penggugat." },
      { "key": "B", "text": "Pengadilan Negeri di tempat tinggal Tergugat." },
      { "key": "C", "text": "Pengadilan Negeri di tempat perjanjian ditandatangani." },
      { "key": "D", "text": "Pengadilan Negeri Jakarta Pusat sebagai pengadilan ibukota." }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Asas pokok kompetensi relatif menyatakan gugatan diajukan ke PN tempat tinggal Tergugat.",
      "legalBasis": "Pasal 118 ayat (1) HIR jo. Pasal 142 ayat (1) RBg.",
      "analysis": "Asas Actor Sequitur Forum Rei mengatur bahwa tuntutan hak diajukan kepada ketua pengadilan negeri di tempat diamnya tergugat..."
    },
    "difficulty": "Mudah"
  }
  // ... duplikasi struktur ini hingga 500 soal
]`}
          </pre>
        </div>
      )}

      {/* Form Tambah Soal Baru */}
      {showAddForm && (
        <form
          onSubmit={handleSaveNewQuestion}
          className="bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700/60 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4"
        >
          <div className="pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h3 className="font-bold font-legal text-slate-900 dark:text-white">
              Tambah Soal Baru ke Database
            </h3>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white"
            >
              Batal
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kategori Materi
              </label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as UPACategory)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                {UPA_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Topik / Tag
              </label>
              <input
                type="text"
                required
                value={newTopicTag}
                onChange={(e) => setNewTopicTag(e.target.value)}
                placeholder="Contoh: Sita Jaminan, Praperadilan, Obscuur Libel"
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Narasi Soal Kasus / Pertanyaan
            </label>
            <textarea
              required
              rows={3}
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              placeholder="Tuliskan soal pilihan ganda di sini..."
              className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan A
              </label>
              <input
                type="text"
                required
                value={optA}
                onChange={(e) => setOptA(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan B
              </label>
              <input
                type="text"
                required
                value={optB}
                onChange={(e) => setOptB(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan C
              </label>
              <input
                type="text"
                required
                value={optC}
                onChange={(e) => setOptC(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Pilihan D
              </label>
              <input
                type="text"
                required
                value={optD}
                onChange={(e) => setOptD(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Kunci Jawaban Benar
              </label>
              <select
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value as 'A' | 'B' | 'C' | 'D')}
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Dasar Hukum Konkrit (Pasal & UU)
              </label>
              <input
                type="text"
                required
                value={legalBasisExp}
                onChange={(e) => setLegalBasisExp(e.target.value)}
                placeholder="Contoh: Pasal 118 ayat (1) HIR / Pasal 21 KUHAP"
                className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Alasan Hukum / Analisis Pembahasan
            </label>
            <textarea
              required
              rows={2}
              value={summaryExp}
              onChange={(e) => setSummaryExp(e.target.value)}
              placeholder="Uraikan alasan yuridis mengapa pilihan tersebut benar..."
              className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-500 rounded-xl transition-colors shadow-sm"
          >
            Simpan Soal ke Database
          </button>
        </form>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari dalam bank soal..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs text-slate-500 whitespace-nowrap">Filter:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
          >
            <option value="Semua">Semua Materi ({allQuestions.length})</option>
            {UPA_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Question Cards Browser */}
      <div className="space-y-4">
        {filteredQuestions.slice(0, 25).map((q) => (
          <div
            key={q.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span className="font-mono font-bold text-slate-900 dark:text-white">#{q.id}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-amber-700 dark:text-amber-400">{q.category}</span>
              <span aria-hidden="true">·</span>
              <span>{q.topicTag}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">Kunci: {q.correctAnswer}</span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mb-3 leading-relaxed">
              {q.question}
            </p>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-mono font-semibold text-amber-700 dark:text-amber-400 block mb-0.5">
                {q.explanation.legalBasis}
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {q.explanation.summary}
              </span>
            </div>
          </div>
        ))}

        {filteredQuestions.length > 25 && (
          <div className="p-4 text-center text-xs text-slate-500 bg-slate-100 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
            Menampilkan 25 dari {filteredQuestions.length} soal. Untuk melihat seluruh 500 soal secara utuh, gunakan tombol "Unduh .JSON" di atas.
          </div>
        )}
      </div>
    </div>
  );
};
