import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="hover:text-[#4ddccf] transition">
    {children}
  </Link>
);

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, href }) => (
  <div className="bg-[#1f2937] p-6 rounded-2xl flex flex-col items-center text-center space-y-4 hover:shadow-2xl hover:bg-[#2c3e50] transition">
    <div className="bg-[#111827] p-4 rounded-xl">
      <img src={icon} alt={title} className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
    <Link href={href} className="mt-4 text-[#4ddccf] flex items-center gap-1 font-bold">
      شاهد التفاصيل ←
    </Link>
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="hover:text-white text-gray-400">
    {children}
  </Link>
);

export default function Page() {
  return (
    <div className="bg-[#0e1726] text-white min-h-screen font-sans">
      {/* الترويسة (Header) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e1726]/90 backdrop-blur-sm p-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <span>© 2026 مكاسب رقمية | v2.5.0</span>
            <div className="flex items-center gap-3">
              <FooterLink href="/community">اتصل بنا</FooterLink>
              <FooterLink href="/privacy">سياسة الخصوصية</FooterLink>
              <FooterLink href="/about">من نحن</FooterLink>
              <FooterLink href="/">الرئيسية</FooterLink>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button type="button" className="text-gray-300 hover:text-white" aria-label="البحث">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/" className="w-10 h-10 rounded-full border-2 border-[#4ddccf] flex items-center justify-center p-1">
              <span className="text-[#4ddccf] font-bold text-2xl">م</span>
            </Link>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* القسم الأيسر - البطاقة العائمة */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link
              href="/finance/freelancing/pricing-guide"
              className="bg-[#1f2937]/50 p-6 rounded-3xl backdrop-blur-sm border border-gray-800 w-full max-w-sm md:max-w-md shadow-2xl relative block hover:border-[#4ddccf]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-xs text-gray-400 mb-6">صفحة عرض تفاعلية — دليل تسعير الخدمات مع حاسبات حية...</p>
              <div className="w-full h-40 bg-[#111827] rounded-lg flex items-center justify-center text-xs text-[#4ddccf] font-bold">
                افتح الدليل التفاعلي ←
              </div>
            </Link>
          </div>

          {/* القسم الأيمن - العنوان والأزرار */}
          <div className="text-right flex flex-col items-center md:items-end space-y-8">
            <div className="inline-block px-3 py-1 bg-[#1f2937] rounded-full text-xs text-[#4ddccf] font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-[#4ddccf] ml-2"></span>
              نموذج صفحة تفاعلية حية
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              أدوات تفاعلية حية بدلاً من <br />
              النصوص الجامدة
            </h1>
            <p className="text-base text-gray-300 max-w-lg leading-relaxed">
              نفّذ وحسّن نفقاتك، أمانك، وتفاعلاتك فوراً داخل الصفحة مع دلائل إجرائية تطبيقية مصممة للبيئة الرقمية.
            </p>
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-end pt-4">
              <Link href="#features" className="text-sm font-bold text-[#4ddccf]">
                اكتشف المزيد من المميزات ←
              </Link>
              <Link
                href="/finance/freelancing/pricing-guide"
                className="px-8 py-3 bg-[#4ddccf] text-[#0e1726] rounded-xl text-lg font-bold hover:bg-white transition"
              >
                استكشف أدواتك الحية
              </Link>
              <Link
                href="/community"
                className="px-8 py-3 border border-[#4ddccf] text-[#4ddccf] rounded-xl text-lg font-bold hover:bg-[#4ddccf] hover:text-[#0e1726] transition"
              >
                انضم لمجتمع مكاسب
              </Link>
            </div>
          </div>
        </div>

        {/* شبكة المميزات */}
        <div id="features" className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 scroll-mt-28">
          <FeatureCard
            icon="/icons/finance.svg"
            title="قطاع المال والأعمال"
            description="حاسبات التسعير، التجارة الإلكترونية، ومولد العقود القانونية."
            href="/finance"
          />
          <FeatureCard
            icon="/icons/tech.svg"
            title="قطاع التكنولوجيا"
            description="أدوات فحص كلمات المرور وحساب تكلفة الـ API والـ Tokens."
            href="/tech"
          />
          <FeatureCard
            icon="/icons/media.svg"
            title="قطاع الإعلام الجديد"
            description="حاسبة معدل التفاعل وتكلفة الحملات التسويقية للإعلانات."
            href="/media"
          />
          <FeatureCard
            icon="/icons/digital_lifestyle.svg"
            title="قطاع رقميون (أسلوب الحياة الرقمية)"
            description="إدارة الحياة الرقمية، الصحة الرقمية، وعلم النفس الرقمي."
            href="/digital-lifestyle"
          />
          <FeatureCard
            icon="/icons/digital_wellbeing.svg"
            title="قطاع الصحة والرفاهية الرقمية"
            description="تحسين جودة الحياة الرقمية والعناية بالصحة النفسية والجسدية."
            href="/digital-lifestyle"
          />
        </div>
      </main>

      {/* التذييل (Footer) */}
      <footer id="about" className="border-t border-gray-800 bg-[#0e1726] p-8 mt-16 scroll-mt-28">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex flex-col items-center gap-4">
              <Link href="/" className="w-10 h-10 rounded-full border-2 border-[#4ddccf] flex items-center justify-center p-1">
                <span className="text-[#4ddccf] font-bold text-2xl">م</span>
              </Link>
              <p className="text-gray-400 text-sm max-w-sm">
                هناك فجوة هائلة بين المعرفة والتطبيق، وتتجه كل مقالاتنا لسد هذه الفجوة. اقرأ وطبق في نفس الصفحة.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-3">
                <FooterLink href="#features">القطاعات الرئيسية</FooterLink>
                <FooterLink href="/finance/freelancing/pricing-guide">العمل الحر (Freelancing)</FooterLink>
                <FooterLink href="/finance">إدارة المشاريع المصغرة</FooterLink>
                <FooterLink href="/finance">التجارة الإلكترونية</FooterLink>
              </div>
              <div className="space-y-3">
                <FooterLink href="/finance/freelancing/pricing-guide">أدوات وحاسبات حية</FooterLink>
                <FooterLink href="/community">مجتمع مكاسب</FooterLink>
                <FooterLink href="/finance/freelancing/pricing-guide">الدلائل الإجرائية</FooterLink>
                <FooterLink href="/dashboard">لوحة أدواتي</FooterLink>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <NavLink href="/community"><img src="/icons/social/facebook.svg" alt="فيسبوك" className="w-6 h-6" /></NavLink>
            <NavLink href="/community"><img src="/icons/social/twitter.svg" alt="تويتر" className="w-6 h-6" /></NavLink>
            <NavLink href="/community"><img src="/icons/social/linkedin.svg" alt="لينكد إن" className="w-6 h-6" /></NavLink>
            <NavLink href="/community"><img src="/icons/social/youtube.svg" alt="يوتيوب" className="w-6 h-6" /></NavLink>
            <NavLink href="/community"><img src="/icons/social/telegram.svg" alt="تليجرام" className="w-6 h-6" /></NavLink>
            <NavLink href="/community"><img src="/icons/social/whatsapp.svg" alt="واتساب" className="w-6 h-6" /></NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
