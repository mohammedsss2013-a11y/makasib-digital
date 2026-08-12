export type NavBranch = {
  name: string;
  slug: string;
};

export type NavSector = {
  id: string;
  title: string;
  shortTitle: string;
  icon: 'TrendingUp' | 'Cpu' | 'Radio' | 'UserCheck' | 'Users';
  basePath: string;
  branches: NavBranch[];
};

export const navigationData: NavSector[] = [
  {
    id: 'finance',
    title: '1. قطاع المال والأعمال',
    shortTitle: 'المال والأعمال',
    icon: 'TrendingUp',
    basePath: '/finance',
    branches: [
      { name: 'العمل الحر وإدارة المشاريع المصغرة', slug: 'freelancing' },
      { name: 'التجارة الإلكترونية الحديثة', slug: 'e-commerce' },
      { name: 'التسويق الرقمي', slug: 'marketing' },
      { name: 'اقتصاد صناعة المحتوى', slug: 'creator-economy' },
      { name: 'العملات الرقمية والبلوكشين', slug: 'crypto-blockchain' },
      { name: 'الذكاء الاصطناعي في الأعمال', slug: 'ai-business' },
      { name: 'العتاد والإنتاجية', slug: 'hardware-productivity' },
    ],
  },
  {
    id: 'tech',
    title: '2. قطاع التكنولوجيا والابتكار',
    shortTitle: 'التكنولوجيا',
    icon: 'Cpu',
    basePath: '/tech',
    branches: [
      { name: 'تطبيقات وأنظمة الذكاء الاصطناعي', slug: 'ai-systems' },
      { name: 'الأمن السيبراني والخصوصية', slug: 'cybersecurity' },
      { name: 'الحوسبة السحابية والعمل عن بعد', slug: 'cloud-remote' },
      { name: 'تطوير البنية الرقمية', slug: 'infrastructure' },
      { name: 'إنترنت الأشياء والتقنيات الناشئة', slug: 'iot-emerging' },
    ],
  },
  {
    id: 'media',
    title: '3. قطاع الإعلام الجديد',
    shortTitle: 'الإعلام الجديد',
    icon: 'Radio',
    basePath: '/media',
    branches: [
      { name: 'صناعة المحتوى', slug: 'content-creation' },
      { name: 'أخبار الصناعة الرقمية', slug: 'industry-news' },
      { name: 'البودكاست والبودكاست المرئي', slug: 'podcasts' },
      { name: 'منصات البث الحي', slug: 'live-streaming' },
      { name: 'الترفيه الرقمي', slug: 'digital-entertainment' },
    ],
  },
  {
    id: 'human',
    title: '4. قطاع الإنسان الرقمي',
    shortTitle: 'الإنسان الرقمي',
    icon: 'UserCheck',
    basePath: '/human',
    branches: [
      { name: 'إدارة الحياة الرقمية', slug: 'digital-life' },
      { name: 'الصحة الرقمية', slug: 'digital-health' },
      { name: 'علم النفس الرقمي', slug: 'digital-psychology' },
      { name: 'التعليم والتعلم المستمر', slug: 'continuous-learning' },
      { name: 'الثقافة الرقمية العابرة للمستقبل', slug: 'future-culture' },
      { name: 'الفلسفة الرقمية', slug: 'digital-philosophy' },
    ],
  },
  {
    id: 'community',
    title: '5. مجتمع مكاسب رقمية',
    shortTitle: 'مجتمع مكاسب',
    icon: 'Users',
    basePath: '/community',
    branches: [
      { name: 'منتدى التجارب والحلول التفاعلية', slug: 'discussions' },
    ],
  },
];

export function findSectorByPath(pathname: string): NavSector | undefined {
  return navigationData.find(
    (sector) => pathname === sector.basePath || pathname.startsWith(`${sector.basePath}/`)
  );
}

export function findBranch(pathname: string): { sector: NavSector; branch: NavBranch } | null {
  for (const sector of navigationData) {
    for (const branch of sector.branches) {
      const fullPath = `${sector.basePath}/${branch.slug}`;
      if (pathname === fullPath || pathname.startsWith(`${fullPath}/`)) {
        return { sector, branch };
      }
    }
  }
  return null;
}
