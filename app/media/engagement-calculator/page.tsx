import React from 'react';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata = { title: 'حاسبة معدل التفاعل | مكاسب رقمية' };

export default function Page() {
  return (
    <ComingSoon
      title="حاسبة معدل التفاعل"
      description="أداة لحساب معدل تفاعل جمهورك عبر المنصات — قيد التطوير."
      backHref="/media"
      backLabel="العودة لقطاع الإعلام الجديد"
    />
  );
}
