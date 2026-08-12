import React from 'react';
import { SectorHub } from '@/components/layout/SectorHub';

export const metadata = {
  title: 'التكنولوجيا | مكاسب رقمية',
  description: 'أدوات فحص كلمات المرور وحساب تكلفة الـ API والـ Tokens.',
};

export default function TechPage() {
  return (
    <SectorHub
      breadcrumbs={[{ label: 'التكنولوجيا' }]}
      title="قطاع التكنولوجيا"
      description="أدوات أمنية وتقنية تفاعلية — افحص قوة كلمات المرور، قدّر تكاليف الـ API، واتخذ قرارات تقنية مدروسة."
      items={[
        {
          title: 'حاسبة وقت اختراق كلمات المرور',
          description: 'قيّم قوة كلمة مرورك وتقدير الوقت اللازم لاختراقها باستخدام Brute Force.',
          href: '/tech/cybersecurity/password-checker',
          tag: 'أداة',
        },
        {
          title: 'الأمن السيبراني',
          description: 'مجموعة أدوات ودلائل لحماية حساباتك وبياناتك الرقمية.',
          href: '/tech/cybersecurity/password-checker',
          tag: 'قسم',
        },
      ]}
    />
  );
}
