import React from 'react';
import { SectorHub } from '@/components/layout/SectorHub';

export const metadata = {
  title: 'العمل الحر | مكاسب رقمية',
  description: 'أدوات ودلائل العمل الحر: التسعير، العقود، وإدارة المشاريع.',
};

export default function FreelancingPage() {
  return (
    <SectorHub
      breadcrumbs={[
        { label: 'المال والأعمال', href: '/finance' },
        { label: 'العمل الحر' },
      ]}
      title="العمل الحر"
      description="مجموعة أدوات حية ودلائل إجرائية مصممة للمستقلين والمطورين — من التسعير الذكي إلى صياغة العقود القانونية."
      items={[
        {
          title: 'الدليل الشامل لهندسة تسعير الخدمات',
          description: 'كيف تخرج من فخ التخمين وتضاعف أرباحك — مع حاسبات ومولّد عقود مدمج.',
          href: '/finance/freelancing/pricing-guide',
          tag: 'دليل',
        },
        {
          title: 'حاسبة تسعير الخدمات ومعدل الساعة',
          description: 'احسب السعر الصافي الموصى به بناءً على نفقاتك الثابتة وهدفك المالي.',
          href: '/finance/freelancing/pricing-calculator',
          tag: 'أداة',
        },
        {
          title: 'مولّد عقود العمل الحر المباشر',
          description: 'صِغ اتفاقية قانونية جاهزة تحمي مخرجاتك وتمنع Scope Creep.',
          href: '/finance/freelancing/contract-generator',
          tag: 'أداة',
        },
      ]}
    />
  );
}
