import React from 'react';
import Link from 'next/link';
import { PasswordStrengthChecker } from '@/components/tools/PasswordStrengthChecker';
import { Shield, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'حاسبة وقت اختراق كلمات المرور | مكاسب رقمية',
  description: 'قيّم قوة كلمة مرورك وتقدير الوقت اللازم لاختراقها.',
};

export default function PasswordCheckerPage() {
  return (
    <article className="max-w-4xl mx-auto space-y-8 dir-rtl">
      <nav className="flex items-center gap-2 text-xs text-slate-400 border-b border-slate-800/80 pb-4">
        <Link href="/" className="hover:text-emerald-400">الرئيسية</Link>
        <span>/</span>
        <Link href="/tech" className="hover:text-emerald-400">التكنولوجيا</Link>
        <span>/</span>
        <span className="text-slate-200">حاسبة كلمات المرور</span>
      </nav>

      <header className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <Shield className="w-5 h-5" />
          <span className="text-xs font-mono">أداة أمنية حية</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
          حاسبة وقت اختراق كلمات المرور
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          أدخل كلمة مرورك لمعرفة مدى قوتها والوقت التقريبي اللازم لاختراقها — لا تُخزَّن أي بيانات، كل الحسابات تتم محلياً في متصفحك.
        </p>
      </header>

      <section className="bg-slate-900/50 border border-emerald-500/30 p-2 rounded-2xl">
        <PasswordStrengthChecker />
      </section>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">ناقش أمانك الرقمي</h3>
          <p className="text-xs text-slate-400 mt-1">شارك أفضل الممارسات مع مجتمع مكاسب.</p>
        </div>
        <Link
          href="/community"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs whitespace-nowrap flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>الانضمام للنقاش</span>
        </Link>
      </div>
    </article>
  );
}
