import React from 'react';
import { SectorHub } from '@/components/layout/SectorHub';

export const metadata = {
  title: 'المال والأعمال | مكاسب رقمية',
  description: 'حاسبات التسعير، التجارة الإلكترونية، ومولّد العقود القانونية.',
};

export default function FinancePage() {
  return (
    <SectorHub
      breadcrumbs={[{ label: 'المال والأعمال' }]}
      title="قطاع المال والأعمال"
      description="أدوات تفاعلية ودلائل إجرائية لتسعير الخدمات، إدارة المشاريع المصغرة، والتجارة الإلكترونية — طبّق وحسّن قراراتك المالية فوراً."
      items={[
        {
          title: 'العمل الحر (Freelancing)',
          description: 'حاسبة تسعير الخدمات، مولّد العقود، ودليل هندسة التسعير الشامل.',
          href: '/finance/freelancing',
          tag: 'freelancing',
        },
        {
          title: 'الدليل الشامل لهندسة تسعير الخدمات',
          description: 'مقال تفاعلي مع حاسبات حية ومولّد عقود مدمج في الصفحة.',
          href: '/finance/freelancing/pricing-guide',
          tag: 'دليل',
        },
        {
          title: 'حاسبة تسعير الخدمات ومعدل الساعة',
          description: 'احسب سعرك الصافي بناءً على نفقاتك وأهدافك المالية.',
          href: '/finance/freelancing/pricing-calculator',
          tag: 'أداة',
        },
        {
          title: 'مولّد عقود العمل الحر',
          description: 'أنشئ اتفاقية قانونية تحمي مخرجاتك وتمنع تمدد نطاق العمل.',
          href: '/finance/freelancing/contract-generator',
          tag: 'أداة',
        },
      ]}
    />
  );
}
