"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Cpu, Tv, UserCheck, Users, Menu, X, Search, LayoutDashboard } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Navbar = ({ onOpenSearch }: { onOpenSearch: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'المال والأعمال', path: '/finance', icon: Building2 },
    { name: 'التكنولوجيا', path: '/tech', icon: Cpu },
    { name: 'الإعلام الجديد', path: '/media', icon: Tv },
    { name: 'رقميون', path: '/digital-lifestyle', icon: UserCheck },
    { name: 'مجتمع مكاسب', path: '/community', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
              مـ
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-white tracking-tight leading-none">
                مكاسب <span className="text-emerald-400">رقمية</span>
              </span>
              <span className="text-[10px] text-slate-400 mt-1">منصة الأدوات والتطبيقات الحية</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center gap-2 text-xs px-3"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline font-mono">Cmd+K</span>
            </button>

            <ThemeSwitcher />

            <Link
              href="/dashboard"
              className="hidden sm:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-3.5 py-2 rounded-lg text-xs transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>لوحة أدواتي</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold bg-emerald-500 text-slate-950 mt-2"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>لوحة أدواتي</span>
          </Link>
        </div>
      )}
    </header>
  );
};
