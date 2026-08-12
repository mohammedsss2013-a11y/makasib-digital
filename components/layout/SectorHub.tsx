import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react';

export interface HubItem {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export interface Breadcrumb {
  label: string;
  href?: string;
}

interface SectorHubProps {
  breadcrumbs: Breadcrumb[];
  title: string;
  description: string;
  items: HubItem[];
}

export function SectorHub({ breadcrumbs, title, description, items }: SectorHubProps) {
  return (
    <div className="space-y-8 dir-rtl max-w-5xl mx-auto">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-400 border-b border-slate-800/80 pb-4">
        <Link href="/" className="hover:text-emerald-400">الرئيسية</Link>
        {breadcrumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            <span>/</span>
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-emerald-400">{crumb.label}</Link>
            ) : (
              <span className="text-slate-200">{crumb.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{title}</h1>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{description}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all space-y-3"
          >
            <div className="flex items-center justify-between">
              {item.tag && (
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                  {item.tag}
                </span>
              )}
              <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors mr-auto" />
            </div>
            <h2 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
              {item.title}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
          </Link>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white">هل لديك سؤال أو تجربة تريد مشاركتها؟</h3>
          <p className="text-xs text-slate-400 mt-1">انضم إلى مجتمع مكاسب وناقش مع المستقلين والمطورين.</p>
        </div>
        <Link
          href="/community"
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs whitespace-nowrap flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>مجتمع مكاسب</span>
        </Link>
      </div>
    </div>
  );
}
