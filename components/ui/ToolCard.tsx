import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export function ToolCard({ title, description, href, tag }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all space-y-3 block"
    >
      <div className="flex items-center justify-between">
        {tag ? (
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
            {tag}
          </span>
        ) : (
          <span />
        )}
        <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
      </div>
      <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </Link>
  );
}
