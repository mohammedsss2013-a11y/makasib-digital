import React from 'react';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata = { title: 'إدارة وقت الشاشة | مكاسب رقمية' };

export default function Page() {
  return (
    <ComingSoon
      title="إدارة وقت الشاشة"
      description="حاسبة ودليل لتتبع وتحسين استخدامك اليومي للأجهزة — قيد التطوير."
      backHref="/digital-lifestyle"
      backLabel="العودة لقطاع رقميون"
    />
  );
}
