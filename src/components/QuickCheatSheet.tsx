import React, { useState } from 'react';
import { BookOpen, Search, Scale, Bookmark, ChevronRight } from 'lucide-react';
import { UPA_LEGAL_COMPENDIUM } from '../data/legalReferences';
import { soundEffects } from '../utils/soundEffects';

export const QuickCheatSheet: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedLaw, setSelectedLaw] = useState<string>('Semua');

  const filteredCompendium = UPA_LEGAL_COMPENDIUM.map((item) => {
    if (selectedLaw !== 'Semua' && item.title !== selectedLaw) {
      return null;
    }
    const matchingArticles = item.keyArticles.filter((art) => {
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        art.article.toLowerCase().includes(q) ||
        art.topic.toLowerCase().includes(q) ||
        art.content.toLowerCase().includes(q)
      );
    });
    if (matchingArticles.length === 0) return null;
    return { ...item, keyArticles: matchingArticles };
  }).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">
          <BookOpen className="w-4 h-4" />
          <span>Ringkasan Normatif Ujian Advokat</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-legal text-slate-900 dark:text-white">
          Kompilasi Pasal Emas UPA
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
          Rangkuman pasal-pasal kunci yang paling sering diujikan dalam UPA PERADI & KAI, mencakup tenggang waktu, syarat formil, asas acara, dan ketentuan mutlak.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari pasal atau topik (contoh: 118, 14 hari, penangkapan, rekonvensi)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-amber-500 shadow-xs"
          />
        </div>

        <select
          value={selectedLaw}
          onChange={(e) => setSelectedLaw(e.target.value)}
          className="w-full sm:w-auto text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
        >
          <option value="Semua">Semua Bidang Hukum</option>
          {UPA_LEGAL_COMPENDIUM.map((item) => (
            <option key={item.title} value={item.title}>
              {item.title} ({item.lawCode})
            </option>
          ))}
        </select>
      </div>

      {/* Articles Cards */}
      <div className="space-y-6">
        {filteredCompendium.map((lawGroup) => {
          if (!lawGroup) return null;

          return (
            <div
              key={lawGroup.title}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h3 className="font-bold font-legal text-slate-900 dark:text-white text-base">
                    {lawGroup.title}
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {lawGroup.lawCode}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lawGroup.keyArticles.map((art) => (
                  <div
                    key={art.article}
                    className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-amber-300 dark:hover:border-amber-700 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono font-bold text-xs text-amber-700 dark:text-amber-400">
                        {art.article}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {art.topic}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {art.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
