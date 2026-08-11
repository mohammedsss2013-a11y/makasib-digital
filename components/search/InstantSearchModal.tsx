"use client";

import React, { useState, useEffect } from 'react';
import { Search, X, ArrowLeft, Wrench, FileText } from 'lucide-react';
import Link from 'next/link';

export const InstantSearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mockResults = [
    { type: 'tool', title: 'حاسبة تسعير الخدمات ومعدل الساعة', category: 'المال والأعمال', path: '/finance/freelancing/pricing-calculator' },
    { type: 'tool', title: 'مولد عقود العمل الحر المباشر', category: 'المال والأعمال', path: '/finance/freelancing/contract-generator' },
    { type: 'tool', title: 'حاسبة وقت اختراق كلمات المرور', category: 'التكنولوجيا', path: '/tech/cybersecurity/password-checker' },
    { type: 'article', title: 'الدليل الشامل لهندسة تسعير الخدمات', category: 'المال والأعمال', path: '/finance/freelancing/pricing-guide' },
  ].filter(r => r.title.includes(query) || r.category.includes(query));

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden dir-rtl">
        <div className="flex items-center px-4 border-b border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="ابحث عن أداة، حاسبة، أو دليل إجرائي... (مثال: تسعير, عقود, أمان)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent p-4 text-sm text-white focus:outline-none"
          />
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {mockResults.length > 0 ? (
            mockResults.map((res, idx) => (
              <Link
                key={idx}
                href={res.path}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  {res.type === 'tool' ? (
                    <Wrench className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <FileText className="w-4 h-4 text-blue-400" />
                  )}
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {res.title}
                    </h4>
                    <span className="text-[10px] text-slate-400">{res.category}</span>
                  </div>
                </div>
                <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </Link>
            ))
          ) : (
            <p className="text-center text-xs text-slate-500 py-8">لا توجد نتائج مطابقة لمفهوم البحث</p>
          )}
        </div>
      </div>
    </div>
  );
};
