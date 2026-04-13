// ===== بيانات الكروت =====

// ملاحظة: استخدام jsDelivr يضمن عمل روابط PDF داخل متصفح المجلة بدون مشاكل أمنية (CORS)
const GITHUB_BASE =
  "https://cdn.jsdelivr.net/gh/abdulrahmaneltahrawi-svg/aiss-storage@main/";

const magazines = [
  {
    title: "مجلة السلامة العربية",
    date: "العدد 62 - مارس 2026",
    img: "assets/magazine/IMG_1325.webp",
    link: GITHUB_BASE + "pdfs/Issue-62-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 61 - فبراير 2026",
    img: "assets/magazine/IMG_1326.webp",
    link: GITHUB_BASE + "pdfs/Issue-61-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 60 - يناير 2026",
    img: "assets/magazine/IMG_1327.webp",
    link: GITHUB_BASE + "pdfs/Issue-60-Interactive-Pages-1_compressed.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 59 - ديسمبر 2025",
    img: "assets/magazine/IMG_1328.webp",
    link:
      GITHUB_BASE + "pdfs/Issue-59-Interactive-Pages_compressed_compressed.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 58 - نوفمبر 2025",
    img: "assets/magazine/58.webp",
    link:
      GITHUB_BASE + "pdfs/Issue-58-Interactive-Pages_compressed_compressed.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 57 - أكتوبر 2025",
    img: "assets/magazine/Issue-57-October-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-57-High-quality.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 56 - سبتمبر 2025",
    img: "assets/magazine/Issue-56-September-2025%20copy.webp",
    link: GITHUB_BASE + "pdfs/Issue-56-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 55 - أغسطس 2025",
    img: "assets/magazine/Issue-55-August-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-55-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 54 - يوليو 2025",
    img: "assets/magazine/Issue-54-July-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-54-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 53 - يونيو 2025",
    img: "assets/magazine/issue-53-june-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-53-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد52-مايو2025",
    img: "assets/magazine/Issue-52-May-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-52-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد51-ابريل-2025",
    img: "assets/magazine/Issue-51-April-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-51-Interactive-Pages-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد50-مارس2025",
    img: "assets/magazine/Issue50-march2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-50-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد-49-فبراير2025",
    img: "assets/magazine/Issue-49-February-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-49-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد48-يناير2025",
    img: "assets/magazine/Issue-48-January-2025.webp",
    link: GITHUB_BASE + "pdfs/Issue-48-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد47-ديسمبر2024",
    img: "assets/magazine/Issue-47-December-2024.webp",
    link: GITHUB_BASE + "pdfs/Issue-47-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد46-نوفمبر2024",
    img: "assets/magazine/IMG-20241107-WA0000.webp",
    link: GITHUB_BASE + "pdfs/Issue-46-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد45-أكتوبر2024",
    img: "assets/magazine/unnamed-file.webp",
    link: GITHUB_BASE + "pdfs/Issue-45-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد44-سبتمبر2024",
    img: "assets/magazine/WhatsApp-Image-2024-09-02-at-1.webp",
    link: GITHUB_BASE + "pdfs/Issue-44-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد43-اغسطس2024",
    img: "assets/magazine/Issue_-43-_July-_2024-2.webp",
    link: GITHUB_BASE + "pdfs/Issue-43-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد42-يوليو2024",
    img: "assets/magazine/Issue-42-July-2024.webp",
    link: GITHUB_BASE + "pdfs/Issue-42-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد41-يونيو",
    img: "assets/magazine/Issue-41_May-2024.webp",
    link: GITHUB_BASE + "pdfs/Issue-41Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد40-مايو2024",
    img: "assets/magazine/Issue-40-May-2024.webp",
    link: GITHUB_BASE + "pdfs/Issue-40-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد39-أبريل2024",
    img: "assets/magazine/Issue-No.webp",
    link: GITHUB_BASE + "pdfs/Issue-39-Interactive-Pages-1-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد38 -مارس2024",
    img: "assets/magazine/issue-38-march-2024.webp",
    link: GITHUB_BASE + "pdfs/Issue-38-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد37-فبراير2024",
    img: "assets/magazine/Issue-37-February-2024.webp",
    link: GITHUB_BASE + "pdfs/Issue-37-Interactive-Pages-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 36-يناير2024",
    img: "assets/magazine/Issue-36_January-2024.webp",
    link: GITHUB_BASE + "pdfs/Issue-36-Interactive-Pages-2.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 35-ديسمبر 2023",
    img: "assets/magazine/issue-35_december-2023.webp",
    link: GITHUB_BASE + "pdfs/Issue-35-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 34 -نوفمبر 2023",
    img: "assets/magazine/Issue-34_November-2023.webp",
    link: GITHUB_BASE + "pdfs/Issue-34-33Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد33- أكتوبر 2023",
    img: "assets/magazine/magazine33.webp",
    link: GITHUB_BASE + "pdfs/Issue-33Interactive-Pages-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 32 – سبتمبر 2023",
    img: "assets/magazine/issue32.webp",
    link: GITHUB_BASE + "pdfs/Issue-32-Interactive-Pages.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد31-أغسطس 2023",
    img: "assets/magazine/issue31.webp",
    link: GITHUB_BASE + "pdfs/Issue-31-Interactive.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 30 – يوليو 2023",
    img: "assets/magazine/issue30.webp",
    link: GITHUB_BASE + "pdfs/Issue-30-Interactive.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 29 – يونيو 2023",
    img: "assets/magazine/issue29.webp",
    link: GITHUB_BASE + "pdfs/Issue-29-Interactive.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 28 – مايو 2023",
    img: "assets/magazine/issue28.webp",
    link: GITHUB_BASE + "pdfs/Issue-28-Interactive.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد 27- أبريل 2023",
    img: "assets/magazine/issue-27-april-2023-1.webp",
    link: GITHUB_BASE + "pdfs/Issue-27-Interactive.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد26 -_مارس-2023",
    img: "assets/magazine/e3b51429-f2e1-4dcd-9eb7-f0ed7f1ccd06.webp",
    link: GITHUB_BASE + "pdfs/Issue-26-Interactive-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد25-فبراير2023",
    img: "assets/magazine/issue-25-february-2023.webp",
    link: GITHUB_BASE + "pdfs/Issue-25-Interactive.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد24-يناير2023",
    img: "assets/magazine/WhatsApp-Image-2023-10-13-at-6.webp",
    link: GITHUB_BASE + "pdfs/Issue-24-Interactive-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد23-ديسمبر2022",
    img: "assets/magazine/issue-23-december-2022.webp",
    link: GITHUB_BASE + "pdfs/Issue-23-final-Hyperlink-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد22-نوفمبر2022",
    img: "assets/magazine/issue-22-november-2022.webp",
    link: GITHUB_BASE + "pdfs/Issue-22-final-Hyperlink-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد21-أكتوبر2022",
    img: "assets/magazine/issue-21-october-2022.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-21_compressed.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد20-سبتمبر2022",
    img: "assets/magazine/issue-20-september-2022.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-20-1_compressed.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد19-أغسطس 2022",
    img: "assets/magazine/issue-19-august-2022.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-19-1.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد18-يوليو 2022",
    img: "assets/magazine/issue-18-july-2022.webp",
    link: GITHUB_BASE + "pdfs/issue-18-july-2022.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد17-يونيو 2022",
    img: "assets/magazine/issue-17-june-2022.webp",
    link: GITHUB_BASE + "pdfs/issue-17-june-2022_compressed.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد16-مايو 2022",
    img: "assets/magazine/36e23e38-8f65-4920-9034-19c89fea2070.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-16-compressed.pdf.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد15-أبريل 2022",
    img: "assets/magazine/ac8fdb62-5e7c-4a13-bed3-8e9780f20712.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-15(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد14-مارس 2022",
    img: "assets/magazine/335a1bda-2cb7-49f5-bda0-4f9345a5cfab.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-14.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد13-فبراير 2022",
    img: "assets/magazine/7ab5f092-5d9e-4de6-aec4-15f034a7e27d.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-13.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد12-يناير 2022",
    img: "assets/magazine/8b90e057-0286-4a12-b584-3386b2846cc9.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-12(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد11-ديسمبر 2021",
    img: "assets/magazine/6ffd7fac-1d43-45e5-b055-7204f7087b3d.webp",
    link: GITHUB_BASE + "pdfs/11-%D8%A7%D9%84%D8%B9%D8%AF%D8%AF(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد10-نوفمبر 2021",
    img: "assets/magazine/issue10.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-10(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد9-أكتوبر 2021",
    img: "assets/magazine/issue9.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-9(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد8-سبتمبر 2021",
    img: "assets/magazine/47fe6496-a5b7-420e-9094-73a8b08daae5.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-8(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد7-أغسطس 2021",
    img: "assets/magazine/issue7.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-7(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد6-يوليو 2021",
    img: "assets/magazine/6.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-6(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد5-يونيو 2021",
    img: "assets/magazine/5.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-5(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد4-مايو 2021",
    img: "assets/magazine/4.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-4(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد3-أبريل 2021",
    img: "assets/magazine/issue3.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-3(pdfgear.com).pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد2-مارس 2021",
    img: "assets/magazine/2.webp",
    link: GITHUB_BASE + "pdfs/magazine_special_compressed.pdf",
  },
  {
    title: "مجلة السلامة العربية",
    date: "العدد1-فبراير 2021",
    img: "assets/magazine/issue1.webp",
    link: GITHUB_BASE + "pdfs/%D8%A7%D9%84%D8%B9%D8%AF%D8%AF-1(pdfgear.com).pdf",
  },
];

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

const magazinesWithScores = magazines.map((mag, idx) => ({
  mag,
  idx,
  score: getMagazineDateScore(mag, idx),
}));