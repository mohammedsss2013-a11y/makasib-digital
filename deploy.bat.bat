@echo off
chcp 65001 > nul
echo ==========================================
echo جاري رفع وتحديث كافة ملفات مشروع مكاسب رقمية...
echo ==========================================

:: الانتقال للمسار الأساسي للمشروع
cd /d C:\Users\AMIR\.gemini\antigravity\scratch\makasib-digital\makasib-digital

:: إضافة كافة الملفات الجديدة والمعدلة
git add .

:: حفظ التعديلات برسالة توثيقية شاملة
git commit -m "feat: complete site sync - update all pages and project components"

:: دفع كافة التحديثات للمستودع الرئيسي على GitHub
git push origin main

echo ==========================================
echo [تمت العملية بنجاح] - تم رفع كافة تفاصيل الموقع!
echo ==========================================
pause