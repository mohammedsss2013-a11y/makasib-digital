import React from 'react';
import { SectorHub } from '@/components/layout/SectorHub';

export const metadata = {
  title: 'الإعلام الجديد | مكاسب رقمية',
  description: 'حاسبة معدل التفاعل وتكلفة الحملات التسويقية للإعلانات.',
};

export default function MediaPage() {
  return (
    <SectorHub
      breadcrumbs={[{ label: 'الإعلام الجديد' }]}
      title="قطاع الإعلام الجديد"
      description="أدوات تحليلية للمنشئين ومسوقي المحتوى — احسب معدلات التفاعل، قدّر تكلفة الحملات، واتخذ قرارات تسويقية مبنية على بيانات."
      items={[
        {
          title: 'حاسبة معدل التفاعل (Engagement Rate)',
          description: 'احسب معدل تفاعل جمهورك عبر المنصات المختلفة.',
          href: '/media/engagement-calculator',
          tag: 'قريباً',
        },
        {
          title: 'حاسبة تكلفة الحملات الإعلانية',
          description: 'قدّر ميزانية حملتك التسويقية وعائد الاستثمار المتوقع.',
          href: '/media/campaign-calculator',
          tag: 'قريباً',
        },
      ]}
    />
  );
}
