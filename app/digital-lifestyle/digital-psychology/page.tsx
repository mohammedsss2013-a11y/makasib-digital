import React from 'react';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata = { title: 'علم النفس الرقمي | مكاسب رقمية' };

export default function Page() {
  return (
    <ComingSoon
      title="علم النفس الرقمي"
      description="فهم تأثير التكنولوجيا على سلوكك وقراراتك — قيد التطوير."
      backHref="/digital-lifestyle"
      backLabel="العودة لقطاع رقميون"
    />
  );
}
