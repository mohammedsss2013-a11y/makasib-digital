"use client";

import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');

  const calculateEntropy = (pwd: string) => {
    let poolSize = 0;
    if (/[a-z]/.test(pwd)) poolSize += 26;
    if (/[A-Z]/.test(pwd)) poolSize += 26;
    if (/[0-9]/.test(pwd)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) poolSize += 32;

    if (pwd.length === 0 || poolSize === 0) return { entropy: 0, crackTime: '0 ثانية' };

    const entropy = pwd.length * Math.log2(poolSize);
    const combinations = Math.pow(poolSize, pwd.length);
    const seconds = combinations / 10000000000;

    let crackTime = '';
    if (seconds < 1) crackTime = 'فوري (أقل من ثانية)';
    else if (seconds < 60) crackTime = `${Math.round(seconds)} ثانية`;
    else if (seconds < 3600) crackTime = `${Math.round(seconds / 60)} دقيقة`;
    else if (seconds < 86400) crackTime = `${Math.round(seconds / 3600)} ساعة`;
    else if (seconds < 31536000) crackTime = `${Math.round(seconds / 86400)} يوم`;
    else crackTime = 'ملايين السنين 🔒';

    return { entropy: Math.round(entropy), crackTime };
  };

  const { entropy, crackTime } = calculateEntropy(password);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl my-8 dir-rtl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> حاسبة وقت اختراق كلمات المرور
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            اختبر متانة كلمة المرور ضد هجمات القوة الغاشمة (Brute Force) محلياً دون إرسال البيانات للأنظمة الخارجية
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">اكتب كلمة المرور للتجربة</label>
            <input
              type="text"
              placeholder="كلمة المرور..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono tracking-wider"
            />
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block mb-1">الوقت المقدر للاختراق:</span>
            <div className="text-2xl font-extrabold text-emerald-400 font-mono mb-4">
              {crackTime}
            </div>
            <div className="text-xs text-slate-300">
              درجة العشوائية: <span className="font-mono text-white">{entropy} bits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
