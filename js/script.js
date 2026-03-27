
// ===== بيانات الكروت =====

const magazines = [
    { title: "مجلة السلامة العربية", date: "العدد 62 - مارس 2026", img: "assets/magazine/IMG_1325.webp" , link: "assets/pdfs/Issue-62-Interactive-Pages.pdf" },
    { title: "مجلة السلامة العربية", date: "العدد 61 - فبراير 2026", img: "assets/magazine/IMG_1326.webp", link: "assets/pdfs/Issue-61-Interactive-Pages.pdf" },
    { title: "مجلة السلامة العربية", date: "العدد 60 - يناير 2026", img: "assets/magazine/IMG_1327.webp", link: "assets/pdfs/Issue-60-Interactive-Pages-1.pdf" },
    { title: "مجلة السلامة العربية", date: "العدد 59 - ديسمبر 2025", img: "assets/magazine/IMG_1328.webp", link: "assets/pdfs/Issue-59-Interactive-Pages_compressed.pdf" },
    { title: "مجلة السلامة العربية", date: "العدد 58 - نوفمبر 2025", img: "assets/magazine/58.webp", link: "assets/pdfs/Issue-58-Interactive-Pages_compressed.pdf" },
    { title: "مجلة السلامة العربية", date: "العدد 57 - أكتوبر 2025", img: "assets/magazine/Issue-57-October-2025.webp", link: "https://publuu.com/flip-book/1077479/2400957/page/1?embed&transparent" },
    { title: "مجلة مالسلامة العربية", date: "العدد 56 - سبتمبر 2025", img: "assets/magazine/Issue-56-September-2025 copy.webp", link: "https://publuu.com/flip-book/1077479/2401104/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 55 - أغسطس 2025", img: "assets/magazine/Issue-55-August-2025.webp", link: "https://publuu.com/flip-book/1077479/2401099/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 54 - يوليو 2025", img: "assets/magazine/Issue-54-July-2025.webp", link: "https://publuu.com/flip-book/1077479/2401098/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 53 - يونيو 2025", img: "assets/magazine/issue-53-june-2025.webp", link: "https://publuu.com/flip-book/1077479/2401100/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد52-مايو2025", img: "assets/magazine/Issue-52-May-2025.webp", link: "https://publuu.com/flip-book/1077479/2401101/page/1?embed" },
    { title: "مجلة السلامة العربية", date: "العدد51-ابريل-2025", img: "assets/magazine/Issue-51-April-2025.webp", link: "https://publuu.com/flip-book/1077479/2401102/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد50-مارس2025", img: "assets/magazine/Issue50-march2025.webp", link: "https://publuu.com/flip-book/1077479/2401103/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد-49-فبراير2025", img: "assets/magazine/Issue-49-February-2025.webp", link: "https://publuu.com/flip-book/1077479/2401144/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد48-يناير2025", img: "assets/magazine/Issue-48-January-2025.webp", link: "https://publuu.com/flip-book/1077479/2401145/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد47-ديسمبر2024", img: "assets/magazine/Issue-47-December-2024.webp", link: "https://publuu.com/flip-book/1077555/2401174/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد46-نوفمبر2024", img: "assets/magazine/IMG-20241107-WA0000.webp", link: "https://publuu.com/flip-book/1077555/2401182/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد45-أكتوبر2024", img: "assets/magazine/unnamed-file.webp", link: "https://publuu.com/flip-book/1077555/2401183/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد44-سبتمبر2024", img: "assets/magazine/WhatsApp-Image-2024-09-02-at-1.webp", link: "https://publuu.com/flip-book/1077555/2401178/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد43-اغسطس2024", img: "assets/magazine/Issue_-43-_July-_2024-2.webp", link: "https://publuu.com/flip-book/1077555/2401179/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد42-يوليو2024", img: "assets/magazine/Issue-42-July-2024.webp", link: "https://publuu.com/flip-book/1077555/2401180/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد41-يونيو", img: "assets/magazine/Issue-41_May-2024.webp", link: "https://publuu.com/flip-book/1077555/2401181/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد40-مايو2024", img: "assets/magazine/Issue-40-May-2024.webp", link: "https://publuu.com/flip-book/1077555/2401184/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد39-أبريل2024", img: "assets/magazine/Issue-No.webp", link: "https://publuu.com/flip-book/1077555/2401185/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد38 -مارس2024", img: "assets/magazine/issue-38-march-2024.webp", link: "https://publuu.com/flip-book/1077555/2401186/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد37-فبراير2024", img: "assets/magazine/Issue-37-February-2024.webp", link: "https://publuu.com/flip-book/1077580/2401228/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 36-يناير2024", img: "assets/magazine/Issue-36_January-2024.webp", link: "https://publuu.com/flip-book/1077580/2401249/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 35-ديسمبر 2023", img: "assets/magazine/issue-35_december-2023.webp", link: "https://publuu.com/flip-book/1077580/2401234/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 34 -نوفمبر 2023", img: "assets/magazine/Issue-34_November-2023.webp", link: "https://publuu.com/flip-book/1077580/2401236/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد33- أكتوبر 2023", img: "assets/magazine/magazine33.webp", link: "https://publuu.com/flip-book/1077580/2401237/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 32 – سبتمبر 2023", img: "assets/magazine/issue32.webp", link: "https://publuu.com/flip-book/1077580/2401238/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد31-أغسطس 2023", img: "assets/magazine/issue31.webp", link: "https://publuu.com/flip-book/1077580/2401239/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 30 – يوليو 2023", img: "assets/magazine/issue30.webp", link: "https://publuu.com/flip-book/1077580/2401241/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 29 – يونيو 2023", img: "assets/magazine/issue29.webp", link: "https://publuu.com/flip-book/1077580/2401242/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 28 – مايو 2023", img: "assets/magazine/issue28.webp", link: "https://publuu.com/flip-book/1077580/2401243/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 27- أبريل 2023", img: "assets/magazine/issue-27-april-2023-1.webp", link: "https://publuu.com/flip-book/1077587/2401257/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد26 -_مارس-2023", img: "assets/magazine/e3b51429-f2e1-4dcd-9eb7-f0ed7f1ccd06.webp", link: "https://publuu.com/flip-book/1077587/2401261/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد25-فبراير2023", img: "assets/magazine/issue-25-february-2023.webp", link: "https://publuu.com/flip-book/1077587/2401263/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد24-يناير2023", img: "assets/magazine/WhatsApp-Image-2023-10-13-at-6.webp", link: "https://publuu.com/flip-book/1077587/2401264/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد23-ديسمبر2022", img: "assets/magazine/issue-23-december-2022.webp", link: "https://publuu.com/flip-book/1077587/2401265/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد22-نوفمبر2022", img: "assets/magazine/issue-22-november-2022.webp", link: "https://publuu.com/flip-book/1077587/2401266/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد21-أكتوبر2022", img: "assets/magazine/issue-21-october-2022.webp", link: "https://publuu.com/flip-book/1077587/2401267/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد20-سبتمبر2022", img: "assets/magazine/issue-20-september-2022.webp", link: "https://publuu.com/flip-book/1077587/2401268/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد19-أغسطس 2022", img: "assets/magazine/issue-19-august-2022.webp", link: "https://publuu.com/flip-book/1077587/2401269/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد18-يوليو 2022", img: "assets/magazine/issue-18-july-2022.webp", link: "https://publuu.com/flip-book/1077587/2401271/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد17-يونيو 2022", img: "assets/magazine/issue-17-june-2022.webp", link: "https://publuu.com/flip-book/1077591/2401282/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد16-مايو 2022", img: "assets/magazine/36e23e38-8f65-4920-9034-19c89fea2070.webp", link: "https://publuu.com/flip-book/1077591/2401285/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد15-أبريل 2022", img: "assets/magazine/ac8fdb62-5e7c-4a13-bed3-8e9780f20712.webp", link: "https://publuu.com/flip-book/1077591/2401286/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد14-مارس 2022", img: "assets/magazine/335a1bda-2cb7-49f5-bda0-4f9345a5cfab.webp", link: "https://publuu.com/flip-book/1077591/2401287/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد13-فبراير 2022", img: "assets/magazine/7ab5f092-5d9e-4de6-aec4-15f034a7e27d.webp", link: "https://publuu.com/flip-book/1077591/2401288/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد12-يناير 2022", img: "assets/magazine/8b90e057-0286-4a12-b584-3386b2846cc9.webp", link: "https://publuu.com/flip-book/1077591/2401289/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد11-ديسمبر 2021", img: "assets/magazine/6ffd7fac-1d43-45e5-b055-7204f7087b3d.webp", link: "https://publuu.com/flip-book/1077591/2401296/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد10-نوفمبر 2021", img: "assets/magazine/issue10.webp", link: "https://publuu.com/flip-book/1077591/2401290/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد9-أكتوبر 2021", img: "assets/magazine/issue9.webp", link: "https://publuu.com/flip-book/1077591/2401291/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد8-سبتمبر 2021", img: "assets/magazine/47fe6496-a5b7-420e-9094-73a8b08daae5.webp", link: "https://publuu.com/flip-book/1077591/2401292/page/1?embed&transparent#" },
    { title: "مجلة السلامة العربية", date: "العدد7-أغسطس 2021", img: "assets/magazine/issue7.webp", link: "https://publuu.com/flip-book/1077597/2401313/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد6-يوليو 2021", img: "assets/magazine/6.webp", link: "https://publuu.com/flip-book/1077597/2401324/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد5-يونيو 2021", img: "assets/magazine/5.webp", link: "https://publuu.com/flip-book/1077597/2401325/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد4-مايو 2021", img: "assets/magazine/4.webp", link: "https://publuu.com/flip-book/1077597/2401321/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد3-أبريل 2021", img: "assets/magazine/issue3.webp", link: "https://publuu.com/flip-book/1077597/2401326/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد2-مارس 2021", img: "assets/magazine/2.webp", link: "https://publuu.com/flip-book/1077597/2401322/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد1-فبراير 2021", img: "assets/magazine/issue1.webp", link: "https://publuu.com/flip-book/1077597/2401323/page/1?embed&transparent" },
];


const manulas = [
    { title: "معادلات السلامة والصحة المهنية", date: "كتيب تعليمي", img: "assets/manuals/Occupational-Safety-and-Health-Equations.webp", link: "https://publuu.com/flip-book/1071783/2391531/page/1?embed&transparent" },
    { title: "دور الميثانول منخفض الكربون في التحول الطاقي", date: "إصدار خاص", img: "assets/manuals/WhatsApp-Image-2025-08-23-at-12.webp", link: "https://publuu.com/flip-book/1071783/2391532/page/1?embed&transparent" },
    { title: "الأبطال المجهولون", date: "كتيب توعوي", img: "assets/manuals/Unsung-heroes.webp", link: "https://publuu.com/flip-book/1071783/2386659/page/1?embed&transparent" },
    { title: "الإطفاء والتكنولوجيا الذكية", date: "كتيب توعوي", img: "assets/manuals/fire.webp", link: "https://publuu.com/flip-book/1075243/2395098/page/1?embed&transparent" },
    { title: "رحلة النيران", date: "كتيب توعوي", img: "assets/manuals/Journey-of-Fire.webp", link: "https://publuu.com/flip-book/1075243/2395097/page/1?embed&transparent" },
    { title: "الوقاية من الحريق", date: "كتيب توعوي", img: "assets/manuals/WhatsApp-Image-2024-09-04-at-2.webp", link: "https://publuu.com/flip-book/1075243/2395100/page/1?embed&transparent" },
    { title: "رجال علي خط النار", date: "كتيب توعوي", img: "assets/manuals/IMG-20241010-WA0000.webp", link: "https://publuu.com/flip-book/1075243/2395096/page/1?embed&transparent" },
    { title: "دليل السلامة المبسط في المنشآت التعليمية للأطفال", date: "كتيب توعوي", img: "assets/manuals/IMG-20241010-WA0001.webp", link: "https://publuu.com/flip-book/1075243/2395084/page/1?embed&transparent" },
    

];

// ===== بناء الكروت =====

function createCardHTML(item, btnText = "عرض المجلة") {
    const src = item.link || "#";
    const isManual = btnText.includes("كتيب");
    const back = isManual ? "manuals.html" : "magazine.html";
    const href = `flipbook.html?title=${encodeURIComponent(item.title || "")}&src=${encodeURIComponent(src)}&back=${encodeURIComponent(back)}`;
    return `
        <div class="card1">
            <img src="${item.img}" alt="${item.title}" loading="lazy"/>
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

// المجلات - الصفحة الكاملة
const myGrid = document.getElementById('magazines-grid');
if (myGrid) {
    const sortSelect = document.getElementById("magazines-sort");
    const loadMoreBtn = document.getElementById("load-more-magazines");
    let currentSortedMagazines = [];
    const itemsPerPage = 9;

    function renderInitialPage() {
        const toShow = currentSortedMagazines.slice(0, itemsPerPage);
        myGrid.innerHTML = toShow.map((m) => createCardHTML(m, "عرض المجلة")).join("");
        
        if (loadMoreBtn) {
            if (currentSortedMagazines.length > itemsPerPage) {
                loadMoreBtn.style.display = 'inline-block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    function renderSorted(order) {
        const items = magazines.map((mag, idx) => ({
            mag,
            idx,
            score: getMagazineDateScore(mag, idx),
        }));

        const withScore = items.filter((x) => x.score !== null);
        const withoutScore = items.filter((x) => x.score === null).sort((a, b) => a.idx - b.idx);

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
        loadMoreBtn.addEventListener('click', () => {
            const currentCount = myGrid.children.length;
            const nextItems = currentSortedMagazines.slice(currentCount, currentCount + itemsPerPage);

            if (nextItems.length > 0) {
                const newHtml = nextItems.map((m) => createCardHTML(m, "عرض المجلة")).join("");
                myGrid.insertAdjacentHTML('beforeend', newHtml);
            }

            if (myGrid.children.length >= currentSortedMagazines.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
}

// المجلات - الرئيسية (4 فقط)
const homeGrid = document.getElementById('home-magazines-grid');
if (homeGrid) {
    // اعرض 4 مجلات فقط
    homeGrid.innerHTML = magazines.slice(0, 4).map(mag => createCardHTML(mag, "عرض المجلة")).join("");
}


// الكتيبات
const manulasGrid = document.getElementById('manuals-grid');
if (manulasGrid) {
    const loadMoreBtn = document.getElementById("load-more-manuals");
    const itemsPerPage = 6;

    const renderInitialManuals = () => {
        const toShow = manulas.slice(0, itemsPerPage);
        manulasGrid.innerHTML = toShow.map(man => createCardHTML(man, "عرض الكتيب")).join("");
        if (loadMoreBtn) {
            loadMoreBtn.style.display = manulas.length > itemsPerPage ? 'inline-block' : 'none';
        }
    };

    renderInitialManuals();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const currentCount = manulasGrid.children.length;
            const nextItems = manulas.slice(currentCount, currentCount + itemsPerPage);
            if (nextItems.length > 0) {
                const newHtml = nextItems.map(man => createCardHTML(man, "عرض الكتيب")).join("");
                manulasGrid.insertAdjacentHTML('beforeend', newHtml);
            }
            if (manulasGrid.children.length >= manulas.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ===== استدعاء المكونات =====

async function loadLayout() {
    try {
        const headerPlaceholder = document.getElementById('header-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');

        if (headerPlaceholder) {
            let headerRes = await fetch('components/header.html');
            if (!headerRes.ok) headerRes = await fetch('../components/header.html');
            if (!headerRes.ok) throw new Error('Header file not found');
            const headerData = await headerRes.text();
            headerPlaceholder.innerHTML = headerData;
        }

        if (footerPlaceholder) {
            let footerRes = await fetch('components/footer.html');
            if (!footerRes.ok) footerRes = await fetch('../components/footer.html');
            if (!footerRes.ok) throw new Error('Footer file not found');
            const footerData = await footerRes.text();
            footerPlaceholder.innerHTML = footerData;
        }

        activateHeader();
        updateCartBadgeCount();
        markActiveNav();
        initScrollToTop();
        // التحقق من وجود الدالة قبل استدعائها لمنع توقف الكود
        if (typeof loadRelatedPosts === 'function') loadRelatedPosts(); 
    } catch (error) {
        console.error('فشل التحميل:', error);
    }
}
document.addEventListener('DOMContentLoaded', loadLayout);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//====المتجر=====

function updateCartBadgeCount() {
    const badge = document.getElementById('cart-count');
    if (!badge) return;

    const cart = JSON.parse(localStorage.getItem('myCart')) || [];
    badge.innerText = cart.length;
    badge.style.display = cart.length > 0 ? 'flex' : 'none';
}

function markActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('header nav ul li a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && current.includes(href.replace('.html',''))) {
            link.classList.add('active');
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//=====جميع ازرار الهيدر=====
function activateHeader() {
    const openBtn = document.getElementById('openModel');
    const closeBtn = document.getElementById('closeModel');
    const loginModel = document.getElementById('loginModel');
    const searchBtn = document.getElementById('search-btn1');
    const searchInput = document.getElementById('search-input1');
    const menuToggle = document.getElementById('menu-toggle');
    const headerNav = document.getElementById('header-nav');
    console.log('activateHeader called. menuToggle element:', menuToggle, 'headerNav element:', headerNav); // رسالة لتأكيد وجود العناصر

    const suggestionsList = document.getElementById('search-suggestions');

    // === تفعيل قائمة الهامبرغر للهواتف ===
    if (menuToggle && headerNav) {
        // استخدام addEventListener بدلاً من onclick لضمان عدم تداخل الأكواد
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // منع انتقال النقرة للعناصر الأب
            headerNav.classList.toggle('active');
            const isOpen = headerNav.classList.contains('active');
            console.log('Menu state:', isOpen ? 'Opened' : 'Closed'); // طباعة الحالة
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // إغلاق القائمة تلقائياً عند النقر على أي رابط (مهم جداً للهواتف)
        headerNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                headerNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // إغلاق القائمة عند النقر في أي مكان خارجها
        document.addEventListener('click', (e) => {
            if (headerNav && headerNav.classList.contains('active') && !headerNav.contains(e.target) && !menuToggle.contains(e.target)) {
                headerNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    } else {
        console.error('Error: menuToggle or headerNav not found in the DOM. Hamburger menu functionality will not be active.');
    }

    // Promise to fetch and cache codes data
    let codesPromise = null;
    const fetchCodes = () => {
        if (!codesPromise) {
            codesPromise = fetch('cleaned-posts (1).json')
                .then(res => res.ok ? res.json() : [])
                .catch(() => []);
        }
        return codesPromise;
    };

    if (openBtn && loginModel) {
        openBtn.onclick = () => loginModel.style.display = 'flex';
    }
    if (closeBtn && loginModel) {
        closeBtn.onclick = () => loginModel.style.display = 'none';
    }
    if (loginModel) {
        loginModel.addEventListener('click', (e) => {
            if (e.target === loginModel) loginModel.style.display = 'none';
        });
        
        // إدارة المحتوى الديناميكي للنافذة المنبثقة
        const modelBox = loginModel.querySelector('.model-box');
        const USERS_KEY = 'aissUsersV1';
        const CURRENT_KEY = 'aissCurrentUserV1';
        const LOGIN_BTN_TEXT_DEFAULT = 'اشتراك/ دخول';

        const normalizeEmail = (v) => (v || '').toString().trim().toLowerCase();
        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isValidPhone = (phone) => /^\d{7,15}$/.test(phone); // يتحقق من وجود أرقام فقط بطول 7 إلى 15 رقم
        const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || {};
        const getCurrentEmail = () => normalizeEmail(localStorage.getItem(CURRENT_KEY));
        const getCurrentUser = () => {
            const email = getCurrentEmail();
            if (!email) return null;
            const users = getUsers();
            const u = users[email];
            if (!u) return null;
            return { email, ...u };
        };
        const setCurrentEmail = (email) => localStorage.setItem(CURRENT_KEY, normalizeEmail(email));
        const clearCurrentUser = () => localStorage.removeItem(CURRENT_KEY);
        const updateHeaderAuthLabel = () => {
            if (!openBtn) return;
            const span = openBtn.querySelector('span');
            if (!span) return;
            const user = getCurrentUser();
            span.textContent = user?.name ? user.name : LOGIN_BTN_TEXT_DEFAULT;
            openBtn.setAttribute('aria-label', user ? `الحساب: ${span.textContent}` : 'اشتراك/ دخول');
        };

        // قوالب HTML للواجهات المختلفة
        const views = {
            login: `
                <div class="close-btn">×</div>
                <h2>تسجيل الدخول</h2>
                <div class="social-buttons">
                    <button type="button">استخدام Google <img src="assets/icons/google.webp" alt=""></button>
                    <button type="button">استخدام Facebook <img src="assets/icons/facebooks.webp" alt=""></button>
                </div>
                <div class="divider">أو</div>
                <input class="email-input text-input" type="email" placeholder="البريد الإلكتروني">
                <input class="password-input text-input" type="password" placeholder="كلمة المرور">
                <a href="#" class="forgot-pass-link" id="go-forgot">نسيت كلمة المرور؟</a>
                <button class="submit-btn" id="btn-login">دخول</button>
                <div class="auth-message"></div>
                <div class="auth-switch-row">
                    <span>ليس لديك حساب؟</span>
                    <a href="#" class="auth-create-link" id="go-register">إنشاء حساب</a>
                </div>
            `,
            account: `
                <div class="close-btn">×</div>
                <h2>حسابي</h2>
                <div class="divider"></div>
                <p class="auth-message success" style="display:block; margin-bottom: 10px;"></p>
                <button class="submit-btn" id="btn-logout" type="button">تسجيل الخروج</button>
            `,
            register: `
                <div class="close-btn">×</div>
                <h2>إنشاء حساب جديد</h2>
                <div class="social-buttons">
                    <button type="button">التسجيل باستخدام Google <img src="assets/icons/google.webp" alt=""></button>
                    <button type="button">التسجيل باستخدام Facebook <img src="assets/icons/facebooks.webp" alt=""></button>
                </div>
                <div class="divider">أو</div>
                <input class="text-input" id="reg-name" type="text" placeholder="الاسم الكامل">
                <input class="text-input" id="reg-phone" type="tel" placeholder="رقم الهاتف">
                <input class="email-input text-input" id="reg-email" type="email" placeholder="البريد الإلكتروني">
                <input class="password-input text-input" id="reg-pass" type="password" placeholder="كلمة المرور">
                <button class="submit-btn" id="btn-register">إنشاء حساب</button>
                <div class="auth-message"></div>
                <div class="auth-switch-row">
                    <span>لديك حساب بالفعل؟</span>
                    <a href="#" class="auth-create-link" id="go-login">تسجيل الدخول</a>
                </div>
            `,
            forgot: `
                <div class="close-btn">×</div>
                <h2>نسيت كلمة المرور</h2>
                <div class="divider"></div>
                <p style="font-size:13px; color:#666; margin-bottom:15px;">أدخل بريدك الإلكتروني أدناه وسنرسل لك رمز التحقق لاستعادة كلمة المرور.</p>
                <input class="email-input text-input" id="forgot-email" type="email" placeholder="البريد الإلكتروني">
                <button class="submit-btn" id="btn-send-code">إرسال الرمز</button>
                <div class="auth-message"></div>
                <div class="auth-switch-row">
                    <a href="#" class="auth-create-link" id="go-login-back">العودة لتسجيل الدخول</a>
                </div>
            `
        };

        function renderView(viewName) {
            if (!modelBox) return;
            modelBox.innerHTML = views[viewName];

            // إعادة تفعيل زر الإغلاق
            const newCloseBtn = modelBox.querySelector('.close-btn');
            if (newCloseBtn) newCloseBtn.onclick = () => loginModel.style.display = 'none';

            // دوال المساعدة
            const getVal = (sel) => (modelBox.querySelector(sel)?.value || '').trim();
            const setMessage = (msg, type) => {
                const el = modelBox.querySelector('.auth-message');
                if (el) {
                    el.textContent = msg;
                    el.className = `auth-message ${type}`;
                }
            };
            const setBusy = (busy) => {
                const btn = modelBox.querySelector('.submit-btn');
                if (!btn) return;
                btn.disabled = !!busy;
                btn.style.opacity = busy ? '0.7' : '1';
                btn.style.cursor = busy ? 'not-allowed' : 'pointer';
            };

            // منطق تسجيل الدخول
            if (viewName === 'login') {
                modelBox.querySelector('#go-register').onclick = (e) => { e.preventDefault(); renderView('register'); };
                modelBox.querySelector('#go-forgot').onclick = (e) => { e.preventDefault(); renderView('forgot'); };
                
                modelBox.querySelector('#btn-login').onclick = async (e) => {
                    e.preventDefault();
                    const email = normalizeEmail(getVal('.email-input'));
                    const pass = getVal('.password-input');

                    if (!email || !pass) return setMessage('يرجى إدخال البريد الإلكتروني وكلمة المرور.', 'error');
                    if (!isValidEmail(email)) return setMessage('صيغة البريد الإلكتروني غير صحيحة.', 'error');
                    
                    setBusy(true);
                    try {
                        const response = await fetch('https://api.aiss.co/v1/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, password: pass })
                        });

                        // التأكد من أن الرد يحتوي على JSON قبل محاولة قراءته
                        let result = {};
                        const contentType = response.headers.get("content-type");
                        if (contentType && contentType.includes("application/json")) {
                            result = await response.json();
                        }

                        if (response.ok) {
                            // حفظ التوكن (Token) في التخزين المحلي للاستخدام في الطلبات القادمة
                            localStorage.setItem('userToken', result.token || '');
                            setCurrentEmail(email);
                            updateHeaderAuthLabel();
                            setMessage('تم تسجيل الدخول بنجاح.', 'success');
                            setTimeout(() => loginModel.style.display = 'none', 800);
                        } else {
                            setMessage(result.message || 'البريد الإلكتروني أو كلمة المرور غير صحيحة.', 'error');
                        }
                    } catch (error) {
                        console.error('Login API error:', error);
                        setMessage('حدث خطأ أثناء الاتصال بالخادم، يرجى المحاولة لاحقاً.', 'error');
                    } finally {
                        setBusy(false);
                    }
                };
            }

            // منطق الحساب/تسجيل الخروج
            if (viewName === 'account') {
                const user = getCurrentUser();
                if (!user) {
                    renderView('login');
                    return;
                }

                const msg = modelBox.querySelector('.auth-message');
                if (msg) msg.textContent = `مرحبًا ${user.name || user.email}`;

                const logoutBtn = modelBox.querySelector('#btn-logout');
                if (logoutBtn) {
                    logoutBtn.onclick = (e) => {
                        e.preventDefault();
                        clearCurrentUser();
                        updateHeaderAuthLabel();
                        setMessage('تم تسجيل الخروج.', 'success');
                        setTimeout(() => {
                            loginModel.style.display = 'none';
                        }, 600);
                    };
                }
            }

            // منطق إنشاء حساب (تفاصيل أكثر)
            if (viewName === 'register') {
                modelBox.querySelector('#go-login').onclick = (e) => { e.preventDefault(); renderView('login'); };
                
                modelBox.querySelector('#btn-register').onclick = async (e) => {
                    e.preventDefault();
                    const name = getVal('#reg-name');
                    const phone = getVal('#reg-phone');
                    const email = normalizeEmail(getVal('#reg-email'));
                    const pass = getVal('#reg-pass');

                    if (!name || !phone || !email || !pass) return setMessage('يرجى ملء جميع الحقول.', 'error');
                    if (!isValidEmail(email)) return setMessage('صيغة البريد الإلكتروني غير صحيحة.', 'error');
                    if (!isValidPhone(phone)) return setMessage('رقم الهاتف غير صحيح، يرجى إدخال أرقام فقط.', 'error');
                    if (pass.length < 4) return setMessage('كلمة المرور قصيرة جدًا.', 'error');

                    setBusy(true);
                    try {
                        const response = await fetch('https://api.aiss.co/v1/register', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ name, phone, email, password: pass })
                        });

                        let result = {};
                        const contentType = response.headers.get("content-type");
                        if (contentType && contentType.includes("application/json")) {
                            result = await response.json();
                        }

                        if (response.ok) {
                            localStorage.setItem('userToken', result.token || '');
                            setCurrentEmail(email);
                            updateHeaderAuthLabel();
                            setMessage('تم إنشاء الحساب بنجاح.', 'success');
                            setTimeout(() => loginModel.style.display = 'none', 800);
                        } else {
                            setMessage(result.message || 'فشل إنشاء الحساب، يرجى التحقق من البيانات.', 'error');
                        }
                    } catch (error) {
                        console.error('Registration API error:', error);
                        setMessage('حدث خطأ أثناء الاتصال بالخادم.', 'error');
                    } finally {
                        setBusy(false);
                    }
                };
            }

            // منطق نسيت كلمة المرور
            if (viewName === 'forgot') {
                modelBox.querySelector('#go-login-back').onclick = (e) => { e.preventDefault(); renderView('login'); };

                modelBox.querySelector('#btn-send-code').onclick = (e) => {
                    e.preventDefault();
                    const email = getVal('#forgot-email');
                    if (!email) return setMessage('يرجى إدخال البريد الإلكتروني.', 'error');
                    
                    // محاكاة إرسال الرمز
                    setMessage('جاري الإرسال...', 'success');
                    setTimeout(() => {
                        setMessage(`تم إرسال رمز التحقق إلى ${email}`, 'success');
                    }, 1000);
                };
            }
        }

        // البدء بعرض تسجيل الدخول عند فتح النافذة
        if (openBtn) {
            openBtn.onclick = () => {
                updateHeaderAuthLabel();
                renderView(getCurrentUser() ? 'account' : 'login');
                loginModel.style.display = 'flex';
            };
        }
    }
    if (searchBtn && searchInput && suggestionsList) {
        searchBtn.onclick = () => {
            const isHidden = searchInput.classList.contains('hide-search');
            if (isHidden) {
                searchInput.classList.remove('hide-search');
                searchInput.classList.add('show-search');
                searchInput.focus();
            } else {
                searchInput.classList.add('hide-search');
                searchInput.classList.remove('show-search');
                suggestionsList.style.display = 'none';
            }
        };

        // تفعيل البحث عند الضغط على زر Enter


        // البحث والاقتراحات
        searchInput.addEventListener('input', async function() {
            const query = this.value.trim().toLowerCase();
            suggestionsList.innerHTML = '';

            if (query.length < 1) {
                suggestionsList.style.display = 'none';
                return;
            }

            // تجميع البيانات المتاحة للبحث
            const blogs = (typeof myCards !== 'undefined') ? myCards : [];
            const eventsData = (typeof events !== 'undefined') ? events : [];
            const codes = await fetchCodes();
            
            const allItems = [
                ...magazines.map(m => ({...m, type: 'مجلة', url: m.link ? `flipbook.html?title=${encodeURIComponent(m.title)}&src=${encodeURIComponent(m.link)}&back=magazine.html` : '#'})),
                ...manulas.map(m => ({...m, type: 'كتيب', url: m.link ? `flipbook.html?title=${encodeURIComponent(m.title)}&src=${encodeURIComponent(m.link)}&back=manuals.html` : '#'})),
                ...blogs.map(b => ({...b, type: 'مدونة', url: `views.html?id=${b.id}`})),
                ...eventsData.map(e => ({...e, type: 'حدث', url: `search.html?query=${encodeURIComponent(e.title)}`})),
                ...codes.map(c => ({...c, type: 'كود', url: `search.html?query=${encodeURIComponent(c.title)}`}))
            ];

            // تصفية النتائج
            const results = allItems.filter(item => item.title && item.title.toLowerCase().includes(query));

            if (results.length > 0) {
                suggestionsList.style.display = 'block';
                results.slice(0, 8).forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <a href="${item.url}" style="display:block; color:inherit; text-decoration:none;">
                           <span style="color:#e4293a; font-weight:bold; margin-left:5px; font-size:11px;">${item.type}</span>
                           ${item.title}
                        </a>
                    `;
                    suggestionsList.appendChild(li);
                });
            } else {
                suggestionsList.style.display = 'block';
                suggestionsList.innerHTML = '<li style="color:#999; cursor:default;">لا توجد نتائج</li>';
            }
        });
      
    }

    // ضبط نص زر الدخول عند تحميل الهيدر

}

// وظيفة زر الصعود للأعلى
function initScrollToTop() {
    const btn = document.createElement('button');
    btn.id = 'scroll-to-top';
    btn.innerHTML = '&#8679;'; // سهم للأعلى
    btn.title = "الصعود للأعلى";
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}







    
