import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
}

export function ComingSoon({ title, description, backHref, backLabel }: ComingSoonProps) {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6 dir-rtl py-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
        <Clock className="w-3.5 h-3.5" />
        <span>قريباً</span>
      </div>
      <h1 className="text-3xl font-black text-white">{title}</h1>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-bold"
      >
        <ArrowRight className="w-4 h-4" />
        <span>{backLabel}</span>
      </Link>
    </div>
  );
}
