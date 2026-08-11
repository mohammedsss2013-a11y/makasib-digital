"use client";

import React, { useState } from 'react';
import { DollarSign, Bookmark } from 'lucide-react';

export const FreelancePricingCalculator = () => {
  const [targetIncome, setTargetIncome] = useState<number>(2500);
  const [fixedExpenses, setFixedExpenses] = useState<number>(300);
  const [billableHoursWeek, setBillableHoursWeek] = useState<number>(25);
  const [profitMargin, setProfitMargin] = useState<number>(20);
  const [isSaved, setIsSaved] = useState(false);

  const monthlyHours = billableHoursWeek * 4.33;
  const totalNeededNet = Number(targetIncome) + Number(fixedExpenses);
  const totalWithMargin = totalNeededNet * (1 + Number(profitMargin) / 100);
  const hourlyRate = monthlyHours > 0 ? (totalWithMargin / monthlyHours).toFixed(2) : '0';
  const project10h = (Number(hourlyRate) * 10).toFixed(2);
  const depositMin = (Number(project10h) * 0.5).toFixed(2);

  const handleSaveToDashboard = () => {
    const data = {
      toolSlug: 'pricing-calculator',
      toolTitle: 'حاسبة تسعير الخدمات',
      inputs: { targetIncome, fixedExpenses, billableHoursWeek, profitMargin },
      outputs: { hourlyRate, project10h, depositMin },
    };
    const existing = JSON.parse(localStorage.getItem('saved_tools') || '[]');
    localStorage.setItem('saved_tools', JSON.stringify([...existing, data]));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl my-8 dir-rtl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
            <DollarSign className="w-5 h-5" /> حاسبة تسعير الخدمات ومعدل الساعة
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            حدّد سعرك الصافي دون خسارة بناءً على التكاليف التشغيلية الواقعية
          </p>
        </div>
        <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full font-mono">
          حاسبة حية
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              الدخل الشهري الصافي المستهدف ($)
            </label>
            <input
              type="number"
              value={targetIncome}
              onChange={(e) => setTargetIncome(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              المصاريف والاشتراكات الثابتة شهرياً ($)
            </label>
            <input
              type="number"
              value={fixedExpenses}
              onChange={(e) => setFixedExpenses(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                ساعات التنفيذ الأسبوعية
              </label>
              <input
                type="number"
                value={billableHoursWeek}
                onChange={(e) => setBillableHoursWeek(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                هامش الطوارئ والضرائب (%)
              </label>
              <input
                type="number"
                value={profitMargin}
                onChange={(e) => setProfitMargin(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium block mb-1">الأجر الموصى به بالساعة:</span>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono mb-4">
              ${hourlyRate} <span className="text-xs text-slate-400 font-sans">/ ساعة</span>
            </div>

            <div className="space-y-2 border-t border-slate-800/80 pt-3 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>مشروع صغير (10 ساعات):</span>
                <span className="font-mono font-bold text-white">${project10h}</span>
              </div>
              <div className="flex justify-between">
                <span>الدفعة المقدمة الإلزامية (50%):</span>
                <span className="font-mono font-bold text-emerald-400">${depositMin}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSaveToDashboard}
            className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-white text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Bookmark className="w-4 h-4 text-emerald-400" />
            <span>{isSaved ? 'تم الحفظ في لوحة الأدوات ✓' : 'حفظ النتائج في لوحة أدواتي'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
