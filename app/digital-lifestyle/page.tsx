import React from 'react';
import { SectorHub } from '@/components/layout/SectorHub';

export const metadata = {
  title: 'رقميون — أسلوب الحياة الرقمية | مكاسب رقمية',
  description: 'إدارة الحياة الرقمية، الصحة الرقمية، وعلم النفس الرقمي.',
};

export default function DigitalLifestylePage() {
  return (
    <SectorHub
      breadcrumbs={[{ label: 'رقميون' }]}
      title="قطاع رقميون — أسلوب الحياة الرقمية"
      description="أدوات ودلائل لإدارة حياتك الرقمية بذكاء — من الصحة النفسية الرقمية إلى التوازن بين الشاشة والحياة الواقعية."
      items={[
        {
          title: 'الصحة والرفاهية الرقمية',
          description: 'تحسين جودة حياتك الرقمية والعناية بصحتك النفسية والجسدية.',
          href: '/digital-lifestyle/wellbeing',
          tag: 'قريباً',
        },
        {
          title: 'إدارة وقت الشاشة',
          description: 'حاسبة ودليل لتتبع وتحسين استخدامك اليومي للأجهزة.',
          href: '/digital-lifestyle/screen-time',
          tag: 'قريباً',
        },
        {
          title: 'علم النفس الرقمي',
          description: 'فهم تأثير التكنولوجيا على سلوكك وقراراتك اليومية.',
          href: '/digital-lifestyle/digital-psychology',
          tag: 'قريباً',
        },
      ]}
    />
  );
}
