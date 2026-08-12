import React from 'react';
import Link from 'next/link';
import { Users, MessageSquare, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'مجتمع مكاسب | مكاسب رقمية',
  description: 'ناقش التحديات وشارك تجاربك مع المستقلين والمطورين في مجتمع مكاسب.',
};

const topics = [
  { title: 'هندسة تسعير الخدمات', href: '/finance/freelancing/pricing-guide', replies: 24 },
  { title: 'حماية كلمات المرور والأمان الرقمي', href: '/tech/cybersecurity/password-checker', replies: 18 },
  { title: 'إدارة المشاريع المصغرة للمستقلين', href: '/finance/freelancing', replies: 12 },
  { title: 'التوازن الرقمي والصحة النفسية', href: '/digital-lifestyle', replies: 9 },
];

export default function CommunityPage() {
  return (
    <div className="space-y-8 dir-rtl max-w-4xl mx-auto">
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <Users className="w-5 h-5" />
          <span className="text-xs font-mono">مجتمع مكاسب</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
          مجتمع مكاسب — ناقش، تعلّم، طبّق
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
          مساحة للمستقلين والمطورين وصناع المحتوى لمشاركة التجارب، مناقشة التحديات، وتبادل أفضل الممارسات حول الأدوات والدلائل الإجرائية.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="group bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-emerald-500/40 transition-all space-y-2"
          >
            <div className="flex items-center justify-between">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] text-slate-500 font-mono">{topic.replies} مشاركة</span>
            </div>
            <h2 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
              {topic.title}
            </h2>
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              انتقل للنقاش
            </span>
          </Link>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-3">
        <p className="text-sm text-slate-300">منصة النقاش الكاملة قيد التطوير — ترقّب الإطلاق قريباً.</p>
        <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg">
          استكشف الأدوات الحية
        </Link>
      </div>
    </div>
  );
}
