"use client";

import React from "react";
import Link from "next/link";

export function NavbarWrapper() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-white text-lg flex items-center gap-2">
          <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
          <span>???? ????? ?????</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">????????</Link>
          <Link href="/finance/freelancing/pricing-guide" className="hover:text-emerald-400 transition-colors">????? ????</Link>
          <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">???? ??????</Link>
        </nav>
      </div>
    </header>
  );
}