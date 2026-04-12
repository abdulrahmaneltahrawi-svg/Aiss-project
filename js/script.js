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

const manulas = [
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

// ===== بناء الكروت =====
function createCardHTML(item, btnText = "عرض المجلة", index = 10) {
  const src = item.link || "#";
  // حماية في حال كانت الصورة مفقودة أو غير معرفة لمنع خطأ 404
  const imagePath = item.img && item.img.trim() !== "" ? item.img : "assets/magazine/placeholder.webp";
  const isManual = btnText.includes("كتيب");
  const back = isManual ? "manuals.html" : "magazine.html";
  const href = `flipbook.html?title=${encodeURIComponent(item.title || "")}&src=${encodeURIComponent(src)}&back=${encodeURIComponent(back)}`;
  // إعطاء أولوية تحميل عالية لأول 4 عناصر في الصفحة لسرعة الظهور
  const loadingAttr = index < 4 ? 'fetchpriority="high"' : 'loading="lazy"';
  return `
        <div class="card1 is-loading">
            <img src="${imagePath}" alt="${item.title}" width="270" height="350" ${loadingAttr} decoding="async" onload="this.classList.add('loaded'); this.parentElement.classList.remove('is-loading');" onerror="this.src='assets/magazine/IMG_1325.webp'; this.classList.add('loaded'); this.parentElement.classList.remove('is-loading');"/>
            <div class="class-content1">
                <h3>${item.title}</h3>
                <p>${item.date}</p>
                <a href="${href}" class="btn1">${btnText} ←</a>
            </div>
        </div>`;
}

function getMagazineDateScore(mag, idx) {
  // التعديل: استخراج رقم العدد (Issue Number) للترتيب بدلاً من التاريخ لضمان دقة الترتيب
  // البيانات تحتوي دائماً على رقم العدد في حقل date أو img
  const d = (mag?.date || "").toString();

  // البحث عن الأرقام في حقل التاريخ
  // (عادةً رقم العدد يأتي في البداية ويكون أقل من 1000، بينما السنة تكون أكبر)
  const matches = d.match(/(\d+)/g);
  if (matches) {
    for (const m of matches) {
      const val = Number(m);
      if (val < 1000) return val; // نعتمد أول رقم أقل من 1000 كرقم للعدد
    }
  }

  // fallback: محاولة استخراج رقم العدد من اسم الصورة إذا لم يوجد في التاريخ
  const imgName = (mag?.img || "").toString().toLowerCase();
  const imgMatch = imgName.match(/issue\D*(\d+)/i); // يبحث عن كلمة issue متبوعة برقم
  if (imgMatch) return Number(imgMatch[1]);

  // محاولة أخيرة: أي رقم في اسم الصورة أقل من 1000
  const anyNumImg = imgName.match(/(\d+)/);
  if (anyNumImg) {
    const val = Number(anyNumImg[0]);
    if (val < 1000) return val;
  }

  return null;
}

// حساب نقاط الترتيب مسبقاً لتحسين الأداء وتجنب تكرار العمليات المعقدة
const magazinesWithScores = magazines.map((mag, idx) => ({
  mag,
  idx,
  score: getMagazineDateScore(mag, idx),
}));

// المجلات - الصفحة الكاملة
const myGrid = document.getElementById("magazines-grid");
if (myGrid) {
  const sortSelect = document.getElementById("magazines-sort");
  const loadMoreBtn = document.getElementById("load-more-magazines");
  let currentSortedMagazines = [];
  let isFirstMagLoad = true;
  let itemsPerPage = 10;

  function renderInitialPage() {
    // استرجاع العدد الذي كان معروضاً سابقاً عند العودة
    let countToRender = itemsPerPage;
    if (isFirstMagLoad && (document.referrer.includes('flipbook.html') || document.referrer.includes('views.html'))) {
      const savedCount = sessionStorage.getItem("count_magazine.html");
      if (savedCount) countToRender = parseInt(savedCount);
    }

    const toShow = currentSortedMagazines.slice(0, countToRender);
    myGrid.innerHTML = toShow
      .map((m, idx) => createCardHTML(m, "عرض المجلة", idx))
      .join("");

    if (loadMoreBtn) {
      if (currentSortedMagazines.length > countToRender) {
        loadMoreBtn.style.display = "inline-block";
      } else {
        loadMoreBtn.style.display = "none";
      }
    }

    // استرجاع مكان النزول عند العودة من صفحة العرض
    if (isFirstMagLoad && (document.referrer.includes('flipbook.html') || document.referrer.includes('views.html'))) {
      const savedPos = sessionStorage.getItem("scroll_magazine.html");
      if (savedPos) setTimeout(() => window.scrollTo({ top: parseInt(savedPos), behavior: 'instant' }), 250);
      isFirstMagLoad = false;
    }
  }

  function renderSorted(order) {
    const withScore = magazinesWithScores.filter((x) => x.score !== null);
    const withoutScore = magazinesWithScores
      .filter((x) => x.score === null)
      .slice()
      .sort((a, b) => a.idx - b.idx);

    withScore.sort((a, b) => {
      if (order === "oldest") return a.score - b.score;
      return b.score - a.score; // newest
    });

    currentSortedMagazines = [...withScore, ...withoutScore].map((x) => x.mag);
    renderInitialPage();
  }

  const initialOrder = sortSelect ? sortSelect.value : "newest";
  renderSorted(initialOrder);

  if (sortSelect) {
    sortSelect.addEventListener("change", () => renderSorted(sortSelect.value));
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const currentCount = myGrid.children.length;
      const nextItems = currentSortedMagazines.slice(
        currentCount,
        currentCount + itemsPerPage,
      );

      if (nextItems.length > 0) {
        const newHtml = nextItems
          .map((m, idx) => createCardHTML(m, "عرض المجلة", currentCount + idx))
          .join("");
        myGrid.insertAdjacentHTML("beforeend", newHtml);
      }

      if (myGrid.children.length >= currentSortedMagazines.length) {
        loadMoreBtn.style.display = "none";
      }
    });
  }
}

// المجلات - الرئيسية (4 فقط)
const homeGrid = document.getElementById("home-magazines-grid");
if (homeGrid) {
  // اعرض 4 مجلات فقط
  homeGrid.innerHTML = magazines
    .slice(0, 4)
    .map((mag, idx) => createCardHTML(mag, "عرض المجلة", idx))
    .join("");
}

// الكتيبات
const manulasGrid = document.getElementById("manuals-grid");
if (manulasGrid) {
  const loadMoreBtn = document.getElementById("load-more-manuals");
  let itemsPerPage = 10;
  let isFirstManualLoad = true;

  const renderInitialManuals = () => {
    let countToRender = itemsPerPage;
    if (isFirstManualLoad && (document.referrer.includes('flipbook.html') || document.referrer.includes('views.html'))) {
      const savedCount = sessionStorage.getItem("count_manuals.html");
      if (savedCount) countToRender = parseInt(savedCount);
    }

    const toShow = manulas.slice(0, countToRender);
    manulasGrid.innerHTML = toShow
      .map((man, idx) => createCardHTML(man, "عرض الكتيب", idx))
      .join("");

    // استرجاع مكان النزول
    if (isFirstManualLoad && (document.referrer.includes('flipbook.html') || document.referrer.includes('views.html'))) {
      const savedPos = sessionStorage.getItem("scroll_manuals.html");
      if (savedPos) setTimeout(() => window.scrollTo({ top: parseInt(savedPos), behavior: 'instant' }), 250);
      isFirstManualLoad = false;
    }

    if (loadMoreBtn) {
      loadMoreBtn.style.display =
        manulas.length > countToRender ? "inline-block" : "none";
    }
  };

  renderInitialManuals();

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const currentCount = manulasGrid.children.length;
      const nextItems = manulas.slice(
        currentCount,
        currentCount + itemsPerPage,
      );
      if (nextItems.length > 0) {
        const newHtml = nextItems
          .map((man, idx) => createCardHTML(man, "عرض الكتيب", currentCount + idx))
          .join("");
        manulasGrid.insertAdjacentHTML("beforeend", newHtml);
      }
      if (manulasGrid.children.length >= manulas.length) {
        loadMoreBtn.style.display = "none";
      }
    });
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ===== استدعاء المكونات =====

async function loadLayout() {
  try {
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (headerPlaceholder) {
      let headerRes = await fetch("components/header.html");
      if (!headerRes.ok) headerRes = await fetch("../components/header.html");
      if (!headerRes.ok) throw new Error("Header file not found");
      const headerData = await headerRes.text();
      headerPlaceholder.innerHTML = headerData;
    }

    if (footerPlaceholder) {
      let footerRes = await fetch("components/footer.html");
      if (!footerRes.ok) footerRes = await fetch("../components/footer.html");
      if (!footerRes.ok) throw new Error("Footer file not found");
      const footerData = await footerRes.text();
      footerPlaceholder.innerHTML = footerData;
    }

    activateHeader();
    updateCartBadgeCount();
    markActiveNav();
    initScrollToTop();
    checkAuthStatus();
    // التحقق من وجود الدالة قبل استدعائها لمنع توقف الكود
    if (typeof loadRelatedPosts === "function") loadRelatedPosts();
  } catch (error) {
    console.error("فشل التحميل:", error);
  }
}
document.addEventListener("DOMContentLoaded", loadLayout);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// =====كود تغير الحاله الى تسجيل الدخول=====
async function checkAuthStatus() {
  const loginBtn = document.getElementById("openModel");
  if (!loginBtn) return;

  try {
    const response = await fetch("api/check_user_auth.php");
    const data = await response.json();

    if (data.authenticated && data.user) {
      // استبدال كود الزر نفسه فقط بمحتوى الحالة المسجلة
      loginBtn.outerHTML = `
        <style>
        @media (max-width: 768px){
          .user-logged-in{
          gap: 10px;
        }
        @media (min-width: 769px){
          .user-logged-in button{
            padding: 0;
            font-size: 10px;
          }
        }
        </style>
        <div class="user-logged-in" style="display: flex; align-items: center; gap: 15px; direction: rtl;">
          <span style="font-size: 16px; font-weight: bold;color: #060606;">مرحبا ${data.user.name}</span>
          <button id="logout-btn" style="padding: 6px 12px; font-size: 15px; border: 1px solid #e4293a; background: white; color: #e4293a; border-radius: 8px; cursor: pointer; font-weight: bold;">خروج</button>
        </div>`;
    }
  } catch (err) {
    console.error("فشل التحقق من الجلسة:", err);
  }
}
//====المتجر=====

function updateCartBadgeCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem("myCart")) || [];
  badge.innerText = cart.length;
  badge.style.display = cart.length > 0 ? "flex" : "none";
}

function markActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("header nav ul li a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && current.includes(href.replace(".html", ""))) {
      link.classList.add("active");
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//=====جميع ازرار الهيدر=====
function activateHeader() {
  const menuToggle = document.getElementById("menu-toggle");
  const headerNav = document.getElementById("header-nav");
  const searchInput = document.getElementById("search-input1");
  const suggestionsList = document.getElementById("search-suggestions");

  // === تفعيل ظهور حقل البحث عند الضغط على الأيقونة ===
  const searchBtn = document.getElementById("search-btn1");
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (searchInput.classList.contains("hide-search")) {
        searchInput.classList.replace("hide-search", "show-search");
        searchInput.focus();
      } else {
        searchInput.classList.replace("show-search", "hide-search");
        if (suggestionsList) suggestionsList.style.display = "none";
      }
    });

    // إغلاق حقل البحث عند النقر في أي مكان خارج الحاوية
    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !searchBtn.contains(e.target)) {
        if (searchInput.classList.contains("show-search")) {
            searchInput.classList.replace("show-search", "hide-search");
            if (suggestionsList) suggestionsList.style.display = "none";
        }
      }
    });
  }

  // === تفعيل قائمة الهامبرغر للهواتف ===
  if (menuToggle && headerNav) {
    // استخدام addEventListener بدلاً من onclick لضمان عدم تداخل الأكواد
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // منع انتقال النقرة للعناصر الأب
      headerNav.classList.toggle("active");
      const isOpen = headerNav.classList.contains("active");
      console.log("Menu state:", isOpen ? "Opened" : "Closed"); // طباعة الحالة
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // إغلاق القائمة تلقائياً عند النقر على أي رابط (مهم جداً للهواتف)
    headerNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        headerNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });

    // إغلاق القائمة عند النقر في أي مكان خارجها
    document.addEventListener("click", (e) => {
      if (
        headerNav &&
        headerNav.classList.contains("active") &&
        !headerNav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        headerNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  } else {
    console.error(
      "Error: menuToggle or headerNav not found in the DOM. Hamburger menu functionality will not be active.",
    );
  }

  // إضافة سمات alt لأيقونات البحث وسلة التسوق بعد تحميل الهيدر
  const searchIcon = document.querySelector(".search-img img");
  if (searchIcon && !searchIcon.alt) {
    searchIcon.alt = "أيقونة البحث";
  }

  const shopIcon = document.querySelector(".shop-img img");
  if (shopIcon && !shopIcon.alt) {
    shopIcon.alt = "أيقونة سلة التسوق";
  }

  if (searchInput) {
    // البحث والاقتراحات
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const query = this.value.trim();
        if (query) {
          window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
      }
    });

    searchInput.addEventListener("input", async function () {
      const query = this.value.trim().toLowerCase();
      suggestionsList.innerHTML = "";

      if (query.length < 1) {
        suggestionsList.style.display = "none";
        return;
      }

      // تجميع البيانات المتاحة للبحث
      const blogs = typeof myCards !== "undefined" ? myCards : [];
      const eventsData = typeof events !== "undefined" ? events : [];
      const codes = await fetchCodes();

      const allItems = [
        ...magazines.map((m) => ({
          ...m,
          type: "مجلة",
          url: m.link
            ? `flipbook.html?title=${encodeURIComponent(m.title)}&src=${encodeURIComponent(m.link)}&back=magazine.html`
            : "#",
        })),
        ...manulas.map((m) => ({
          ...m,
          type: "كتيب",
          url: m.link
            ? `flipbook.html?title=${encodeURIComponent(m.title)}&src=${encodeURIComponent(m.link)}&back=manuals.html`
            : "#",
        })),
        ...blogs.map((b) => ({
          ...b,
          type: "مدونة",
          url: `views.html?id=${b.id}`,
        })),
        ...eventsData.map((e) => ({
          ...e,
          type: "حدث",
          url: `search.html?query=${encodeURIComponent(e.title)}`,
        })),
        ...codes.map((c) => ({
          ...c,
          type: "كود",
          url: `search.html?query=${encodeURIComponent(c.title)}`,
        })),
      ];

      // تصفية النتائج
      const results = allItems.filter(
        (item) => item.title && item.title.toLowerCase().includes(query),
      );

      if (results.length > 0) {
        suggestionsList.style.display = "block";
        results.slice(0, 8).forEach((item) => {
          const li = document.createElement("li");
          li.innerHTML = `
                        <a href="${item.url}" style="display:block; color:inherit; text-decoration:none;">
                           <span style="color:#e4293a; font-weight:bold; margin-left:5px; font-size:11px;">${item.type}</span>
                           ${item.title}
                        </a>
                    `;
          suggestionsList.appendChild(li);
        });
      } else {
        suggestionsList.style.display = "block";
        suggestionsList.innerHTML =
          '<li style="color:#999; cursor:default;">لا توجد نتائج</li>';
      }
    });
  }

}

// وظيفة زر الصعود للأعلى
function initScrollToTop() {
  const btn = document.createElement("button");
  btn.id = "scroll-to-top";
  btn.innerHTML = "&#8679;"; // سهم للأعلى
  btn.title = "الصعود للأعلى";
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// وظيفة حفظ الحالة (متوافقة مع الجوال)
const saveCurrentPageState = () => {
  const page = window.location.pathname.split("/").pop() || "index.html";
  sessionStorage.setItem(`scroll_${page}`, window.scrollY);
  
  // حفظ عدد العناصر المعروضة حالياً
  const grids = [
    "magazines-grid", "manuals-grid", "blogs-grid", "codes-grid", "events-grid"
  ];
  grids.forEach(id => {
    const g = document.getElementById(id);
    if (g) sessionStorage.setItem(`count_${page}`, g.children.length);
  });
};

// استخدام pagehide بدلاً من beforeunload لأنه أدق في الهواتف
window.addEventListener("pagehide", saveCurrentPageState);
// حفظ إضافي عند تغيير وضوح الصفحة (مثلاً عند تصغير المتصفح)
window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveCurrentPageState();
});
