import React from 'react';
import { ComingSoon } from '@/components/layout/ComingSoon';

export const metadata = { title: 'حاسبة تكلفة الحملات | مكاسب رقمية' };

export default function Page() {
  return (
    <ComingSoon
      title="حاسبة تكلفة الحملات الإعلانية"
      description="أداة لتقدير ميزانية حملتك التسويقية وعائد الاستثمار — قيد التطوير."
      backHref="/media"
      backLabel="العودة لقطاع الإعلام الجديد"
    />
  );
}
