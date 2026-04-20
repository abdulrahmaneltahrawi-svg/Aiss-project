// ===== بيانات الكروت =====

// ملاحظة: استخدام jsDelivr يضمن عمل روابط PDF داخل متصفح المجلة بدون مشاكل أمنية (CORS)
const GITHUB_BASE =
  "https://cdn.jsdelivr.net/gh/abdulrahmaneltahrawi-svg/aiss-storage@main/";

let magazines = [];


const manuals = [
  {
    title: "معادلات السلامة والصحة المهنية",
    date: "كتيب تعليمي",
    img: "assets/manuals/Occupational-Safety-and-Health-Equations.webp",
    link: GITHUB_BASE + "manuals/معادلات-السلامة-تفاعلي.pdf",
  },
  {
    title: "دور الميثانول منخفض الكربون في التحول الطاقي",
    date: "إصدار خاص",
    img: "assets/manuals/WhatsApp-Image-2025-08-23-at-12.webp",
    link: GITHUB_BASE + "manuals/الميثانول-الأخضر.pdf",
  },
  {
    title: "الأبطال المجهولون",
    date: "كتيب توعوي",
    img: "assets/manuals/Unsung-heroes.webp",
    link: GITHUB_BASE + "manuals/الابطال-المجهولون.pdf",
  },
  {
    title: "الإطفاء والتكنولوجيا الذكية",
    date: "كتيب توعوي",
    img: "assets/manuals/fire.webp",
    link: GITHUB_BASE + "manuals/الإطفاء-والتكنولوجيا-الذكية.pdf",
  },
  {
    title: "رحلة النيران",
    date: "كتيب توعوي",
    img: "assets/manuals/Journey-of-Fire.webp",
    link: GITHUB_BASE + "manuals/رحلة-النيران.pdf",
  },
  {
    title: "الوقاية من الحريق",
    date: "كتيب توعوي",
    img: "assets/manuals/WhatsApp-Image-2024-09-04-at-2.webp",
    link: GITHUB_BASE + "manuals/kids-fire-copy-final.pdf",
  },
  {
    title: "رجال على خط النار",
    date: "كتيب توعوي",
    img: "assets/manuals/IMG-20241010-WA0000.webp",
    link: GITHUB_BASE + "manuals/رجال-على-خط-النار-final.pdf",
  },
  {
    title: "دليل السلامة المبسط في المنشآت التعليمية للأطفال",
    date: "كتيب توعوي",
    img: "assets/manuals/IMG-20241010-WA0001.webp",
    link: GITHUB_BASE + "manuals/School-safety-book-new-1.pdf",
  },
];

function getMagazineDateScore(mag, idx) {
  // التعديل: استخراج رقم العدد (Issue Number) للترتيب بدلاً من التاريخ لضمان دقة الترتيب
  const d = (mag?.date || "").toString();
  const matches = d.match(/(\d+)/g);
  if (matches) {
    for (const m of matches) {
      const val = Number(m);
      if (val < 1000) return val;
    }
  }
  const imgName = (mag?.img || "").toString().toLowerCase();
  const imgMatch = imgName.match(/issue\D*(\d+)/i);
  if (imgMatch) return Number(imgMatch[1]);
  const anyNumImg = imgName.match(/(\d+)/);
  if (anyNumImg) {
    const val = Number(anyNumImg[0]);
    if (val < 1000) return val;
  }
  return null;
}
