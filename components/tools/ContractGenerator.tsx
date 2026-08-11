"use client";

import React, { useState } from 'react';
import { FileText, Printer } from 'lucide-react';

export const ContractGenerator = () => {
  const [freelancerName, setFreelancerName] = useState('');
  const [clientName, setClientName] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [projectCost, setProjectCost] = useState(1000);
  const [revisionLimit, setRevisionLimit] = useState(2);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl my-8 dir-rtl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
            <FileText className="w-5 h-5" /> مولد عقود العمل الحر المباشر
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            أنشئ اتفاقية تقديم خدمات لحماية المستحقات وحقوق الملكية الفكرية
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">اسم المستقل / الوكالة</label>
            <input
              type="text"
              placeholder="أحمد علي - مطور برمجيات"
              value={freelancerName}
              onChange={(e) => setFreelancerName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">اسم العميل / الشركة</label>
            <input
              type="text"
              placeholder="شركة الحلول المتقدمة"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">نطاق العمل</label>
            <textarea
              rows={3}
              placeholder="تصميم وتطوير تطبيق مع ربط قواعد البيانات..."
              value={projectScope}
              onChange={(e) => setProjectScope(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">قيمة المشروع ($)</label>
              <input
                type="number"
                value={projectCost}
                onChange={(e) => setProjectCost(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">التعديلات المتاحة</label>
              <input
                type="number"
                value={revisionLimit}
                onChange={(e) => setRevisionLimit(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <div className="text-center border-b border-slate-800 pb-3">
              <h4 className="text-base font-bold text-white">اتفاقية تقديم خدمات تنفيذية</h4>
              <p className="text-[10px] text-slate-500">منظومة العقود الرقمية المعتمدة - مكاسب رقمية</p>
            </div>

            <p>
              تم الاتفاق بين الطرف الأول: <strong className="text-emerald-400">{freelancerName || '[اسم المستقل]'}</strong>، والطرف الثاني: <strong className="text-emerald-400">{clientName || '[اسم العميل]'}</strong> على البنود التالية:
            </p>

            <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-1">
              <strong className="block text-white">1. نطاق العمل:</strong>
              <p className="text-slate-400">{projectScope || 'يلتزم الطرف الأول بتقديم الخدمات المتفق عليها وفق المعايير المحددة.'}</p>
            </div>

            <div className="space-y-1">
              <strong className="block text-white">2. المستحقات والملكية:</strong>
              <p>• إجمالي القيمة: <span className="font-mono font-bold text-emerald-400">${projectCost}</span> (50% دفعة مقدمة قبل التنفيذ).</p>
              <p>• عدد التعديلات المتاحة: <span className="font-bold text-white">{revisionLimit}</span> تعديلات مجانية فقط.</p>
              <p>• تنتقل الملكية الفكرية فور سداد القيمة بالكامل.</p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" /> طباعة / حفظ كـ PDF
          </button>
        </div>
      </div>
    </div>
  );
};
