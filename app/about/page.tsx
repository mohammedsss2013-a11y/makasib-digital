import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'من نحن | مكاسب رقمية',
  description: 'تعرف على منصة مكاسب رقمية — أدوات تفاعلية حية ودلائل إجرائية تطبيقية.',
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto space-y-8 dir-rtl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">من نحن</h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          مكاسب رقمية منصة عربية تفاعلية توفر أدوات حية وحاسبات تكتيكية مجانية لتنمية الأعمال والتكنولوجيا والنمط الرقمي.
        </p>
      </header>

      <section className="space-y-4 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-xl font-bold text-white border-r-4 border-emerald-500 pr-3">رؤيتنا</h2>
        <p>
          هناك فجوة هائلة بين المعرفة والتطبيق. معظم المحتوى العربي على الإنترنت يقدّم معلومات نظرية دون أدوات تطبيقية فورية.
          نحن نسد هذه الفجوة عبر دمج الدلائل الإجرائية مع حاسبات وأدوات حية داخل نفس الصفحة — اقرأ وطبّق في لحظة واحدة.
        </p>
      </section>

      <section className="space-y-4 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-xl font-bold text-white border-r-4 border-emerald-500 pr-3">ماذا نقدّم؟</h2>
        <ul className="space-y-2 list-disc list-inside text-slate-400">
          <li>حاسبات تفاعلية حية (تسعير، أمان، تسويق...)</li>
          <li>دلائل إجرائية تطبيقية مدمجة مع الأدوات</li>
          <li>مولّدات جاهزة (عقود، تقارير، حسابات)</li>
          <li>مجتمع للنقاش وتبادل التجارب</li>
        </ul>
      </section>

      <section className="space-y-4 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-xl font-bold text-white border-r-4 border-emerald-500 pr-3">تواصل معنا</h2>
        <p>
          لديك اقتراح أو أداة تريد رؤيتها على المنصة؟{' '}
          <Link href="/community" className="text-emerald-400 hover:text-emerald-300 font-bold">
            انضم لمجتمع مكاسب
          </Link>{' '}
          وشاركنا أفكارك.
        </p>
      </section>
    </article>
  );
}
