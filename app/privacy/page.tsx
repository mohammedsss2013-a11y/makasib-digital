import React from 'react';

export const metadata = {
  title: 'سياسة الخصوصية | مكاسب رقمية',
  description: 'سياسة الخصوصية لمنصة مكاسب رقمية — كيف نتعامل مع بياناتك.',
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto space-y-8 dir-rtl">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">سياسة الخصوصية</h1>
        <p className="text-xs text-slate-500">آخر تحديث: أغسطس 2026</p>
      </header>

      <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-lg font-bold text-white">1. البيانات التي نجمعها</h2>
        <p className="text-slate-400">
          معظم أدوات مكاسب تعمل محلياً في متصفحك (مثل حاسبات التسعير وفحص كلمات المرور) ولا تُرسَل بياناتك إلى خوادمنا.
          قد نجمع بيانات استخدام مجهولة (Analytics) لتحسين تجربة المنصة.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-lg font-bold text-white">2. التخزين المحلي</h2>
        <p className="text-slate-400">
          لوحة أدواتك (Dashboard) تحفظ الحسابات في localStorage بمتصفحك فقط — لا نصل إليها ولا نخزّنها على خوادمنا.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-lg font-bold text-white">3. ملفات تعريف الارتباط (Cookies)</h2>
        <p className="text-slate-400">
          نستخدم cookies أساسية لتفضيلات العرض (مثل الوضع الليلي). لا نبيع بياناتك لأطراف ثالثة.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-lg font-bold text-white">4. حقوقك</h2>
        <p className="text-slate-400">
          يمكنك حذف بياناتك المحلية في أي وقت عبر مسح localStorage من إعدادات المتصفح، أو التواصل معنا عبر{' '}
          <a href="/community" className="text-emerald-400 hover:text-emerald-300">مجتمع مكاسب</a>.
        </p>
      </section>
    </article>
  );
}
