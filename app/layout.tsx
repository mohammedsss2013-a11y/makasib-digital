import React from 'react';
import { Cairo, JetBrains_Mono } from 'next/font/google';
import { NavbarWrapper } from '../components/layout/NavbarWrapper';
import { Footer } from '../components/layout/Footer';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'مكاسب رقمية | منصة الأدوات التفاعلية والدلائل الإجرائية',
  description: 'منصة تفاعلية توفر أدوات حية وحاسبات تكتيكية مجانية لتنمية الأعمال والتكنولوجيا والنمط الرقمي.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${jetbrains.variable} font-sans antialiased bg-slate-950 text-slate-100 min-h-screen flex flex-col`}>
        <NavbarWrapper />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}