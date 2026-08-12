import React from 'react';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata = { title: 'الصحة والرفاهية الرقمية | مكاسب رقمية' };

export default function Page() {
  return (
    <ComingSoon
      title="الصحة والرفاهية الرقمية"
      description="أدوات ودلائل لتحسين جودة حياتك الرقمية — قيد التطوير."
      backHref="/digital-lifestyle"
      backLabel="العودة لقطاع رقميون"
    />
  );
}
