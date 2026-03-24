
// ===== بيانات الكروت =====

const magazines = [
    { title: "مجلة السلامة العربية", date: "العدد 62 - مارس 2026", img: "assets/magazine/IMG_1325.jpeg" , link: "https://publuu.com/flip-book/1071783/2386715/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 61 - فبراير 2026", img: "assets/magazine/IMG_1326.jpeg", link: "https://publuu.com/flip-book/1071783/2391520/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 60 - يناير 2026", img: "assets/magazine/IMG_1327.jpeg", link: "https://publuu.com/flip-book/1071783/2386468/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 59 - ديسمبر 2025", img: "assets/magazine/IMG_1328.jpeg", link: "https://publuu.com/flip-book/1071783/2391521/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 58 - نوفمبر 2025", img: "assets/magazine/غلاف.png", link: "https://publuu.com/flip-book/1071783/2394787/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 57 - أكتوبر 2025", img: "assets/magazine/Issue-57-October-2025.jpg", link: "https://publuu.com/flip-book/1077479/2400957/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 56 - سبتمبر 2025", img: "assets/magazine/Issue-56-September-2025 copy.jpg", link: "https://publuu.com/flip-book/1077479/2401104/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 55 - أغسطس 2025", img: "assets/magazine/Issue-55-August-2025.jpg", link: "https://publuu.com/flip-book/1077479/2401099/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 54 - يوليو 2025", img: "assets/magazine/Issue-54-July-2025.jpg", link: "https://publuu.com/flip-book/1077479/2401098/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 53 - يونيو 2025", img: "assets/magazine/issue-53-june-2025.jpg", link: "https://publuu.com/flip-book/1077479/2401100/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد52-مايو2025", img: "assets/magazine/Issue-52-May-2025.jpg", link: "https://publuu.com/flip-book/1077479/2401101/page/1?embed" },
    { title: "مجلة السلامة العربية", date: "العدد51-ابريل-2025", img: "assets/magazine/Issue-51-April-2025.jpg", link: "https://publuu.com/flip-book/1077479/2401102/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد50-مارس2025", img: "assets/magazine/Issue50-march2025.jpg", link: "https://publuu.com/flip-book/1077479/2401103/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد-49-فبراير2025", img: "assets/magazine/Issue-49-February-2025.jpg", link: "https://publuu.com/flip-book/1077479/2401144/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد48-يناير2025", img: "assets/magazine/Issue-48-January-2025.jpg", link: "https://publuu.com/flip-book/1077479/2401145/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد47-ديسمبر2024", img: "assets/magazine/Issue-47-December-2024.jpg", link: "https://publuu.com/flip-book/1077555/2401174/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد46-نوفمبر2024", img: "assets/magazine/IMG-20241107-WA0000.jpg", link: "https://publuu.com/flip-book/1077555/2401182/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد45-أكتوبر2024", img: "assets/magazine/unnamed-file.jpg", link: "https://publuu.com/flip-book/1077555/2401183/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد44-سبتمبر2024", img: "assets/magazine/WhatsApp-Image-2024-09-02-at-1.29.52-PM.jpg", link: "https://publuu.com/flip-book/1077555/2401178/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد43-اغسطس2024", img: "assets/magazine/Issue_-43-_July-_2024-2.jpg", link: "https://publuu.com/flip-book/1077555/2401179/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد42-يوليو2024", img: "assets/magazine/Issue-42-July-2024.jpg", link: "https://publuu.com/flip-book/1077555/2401180/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد41-يونيو", img: "assets/magazine/Issue-41_May-2024.jpg", link: "https://publuu.com/flip-book/1077555/2401181/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد40-مايو2024", img: "assets/magazine/Issue-40-May-2024.jpg", link: "https://publuu.com/flip-book/1077555/2401184/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد39-أبريل2024", img: "assets/magazine/Issue-No.-39_April-2024.jpg", link: "https://publuu.com/flip-book/1077555/2401185/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد38 -مارس2024", img: "assets/magazine/issue-38-march-2024.jpg", link: "https://publuu.com/flip-book/1077555/2401186/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد37-فبراير2024", img: "assets/magazine/Issue-37-February-2024.jpg", link: "https://publuu.com/flip-book/1077580/2401228/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 36-يناير2024", img: "assets/magazine/Issue-36_January-2024.jpg", link: "https://publuu.com/flip-book/1077580/2401249/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 35-ديسمبر 2023", img: "assets/magazine/issue-35_december-2023.jpg", link: "https://publuu.com/flip-book/1077580/2401234/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 34 -نوفمبر 2023", img: "assets/magazine/Issue-34_November-2023.jpg", link: "https://publuu.com/flip-book/1077580/2401236/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد33- أكتوبر 2023", img: "assets/magazine/magazine33.jpg", link: "https://publuu.com/flip-book/1077580/2401237/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 32 – سبتمبر 2023", img: "assets/magazine/issue32.jpg", link: "https://publuu.com/flip-book/1077580/2401238/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد31-أغسطس 2023", img: "assets/magazine/issue31.jpg", link: "https://publuu.com/flip-book/1077580/2401239/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 30 – يوليو 2023", img: "assets/magazine/issue30.jpg", link: "https://publuu.com/flip-book/1077580/2401241/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 29 – يونيو 2023", img: "assets/magazine/issue29.jpg", link: "https://publuu.com/flip-book/1077580/2401242/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 28 – مايو 2023", img: "assets/magazine/issue28.jpg", link: "https://publuu.com/flip-book/1077580/2401243/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 27- أبريل 2023", img: "assets/magazine/issue-27-april-2023-1.jpg", link: "https://publuu.com/flip-book/1077587/2401257/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد26 -_مارس-2023", img: "assets/magazine/e3b51429-f2e1-4dcd-9eb7-f0ed7f1ccd06.jpg", link: "https://publuu.com/flip-book/1077587/2401261/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد25-فبراير2023", img: "assets/magazine/issue-25-february-2023.jpg", link: "https://publuu.com/flip-book/1077587/2401263/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد24-يناير2023", img: "assets/magazine/WhatsApp-Image-2023-10-13-at-6.58.26-AM.jpg", link: "https://publuu.com/flip-book/1077587/2401264/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد23-ديسمبر2022", img: "assets/magazine/issue-23-december-2022.jpg", link: "https://publuu.com/flip-book/1077587/2401265/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد22-نوفمبر2022", img: "assets/magazine/issue-22-november-2022.jpg", link: "https://publuu.com/flip-book/1077587/2401266/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد21-أكتوبر2022", img: "assets/magazine/issue-21-october-2022.jpg", link: "https://publuu.com/flip-book/1077587/2401267/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد20-سبتمبر2022", img: "assets/magazine/issue-20-september-2022.jpg", link: "https://publuu.com/flip-book/1077587/2401268/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد19-أغسطس 2022", img: "assets/magazine/issue-19-august-2022.jpg", link: "https://publuu.com/flip-book/1077587/2401269/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد18-يوليو 2022", img: "assets/magazine/issue-18-july-2022.jpg", link: "https://publuu.com/flip-book/1077587/2401271/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد17-يونيو 2022", img: "assets/magazine/issue-17-june-2022.jpg", link: "https://publuu.com/flip-book/1077591/2401282/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد16-مايو 2022", img: "assets/magazine/36e23e38-8f65-4920-9034-19c89fea2070.jpg", link: "https://publuu.com/flip-book/1077591/2401285/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد15-أبريل 2022", img: "assets/magazine/ac8fdb62-5e7c-4a13-bed3-8e9780f20712.jpg", link: "https://publuu.com/flip-book/1077591/2401286/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد14-مارس 2022", img: "assets/magazine/335a1bda-2cb7-49f5-bda0-4f9345a5cfab.jpg", link: "https://publuu.com/flip-book/1077591/2401287/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد13-فبراير 2022", img: "assets/magazine/7ab5f092-5d9e-4de6-aec4-15f034a7e27d.jpg", link: "https://publuu.com/flip-book/1077591/2401288/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد12-يناير 2022", img: "assets/magazine/8b90e057-0286-4a12-b584-3386b2846cc9.jpg", link: "https://publuu.com/flip-book/1077591/2401289/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد11-ديسمبر 2021", img: "assets/magazine/6ffd7fac-1d43-45e5-b055-7204f7087b3d.jpg", link: "https://publuu.com/flip-book/1077591/2401296/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد10-نوفمبر 2021", img: "assets/magazine/issue10.jpg", link: "https://publuu.com/flip-book/1077591/2401290/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد9-أكتوبر 2021", img: "assets/magazine/issue9.jpg", link: "https://publuu.com/flip-book/1077591/2401291/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد8-سبتمبر 2021", img: "assets/magazine/47fe6496-a5b7-420e-9094-73a8b08daae5.jpg", link: "https://publuu.com/flip-book/1077591/2401292/page/1?embed&transparent#" },
    { title: "مجلة السلامة العربية", date: "العدد7-أغسطس 2021", img: "assets/magazine/issue7.jpg", link: "https://publuu.com/flip-book/1077597/2401313/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد6-يوليو 2021", img: "assets/magazine/WhatsApp-Image-2025-03-12-at-1.37.55-PM.jpg", link: "https://publuu.com/flip-book/1077597/2401324/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد5-يونيو 2021", img: "assets/magazine/WhatsApp-Image-2025-03-12-at-1.37.54-PM-1.jpg", link: "https://publuu.com/flip-book/1077597/2401325/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد4-مايو 2021", img: "assets/magazine/WhatsApp-Image-2025-03-12-at-12.48.59-PM.jpg", link: "https://publuu.com/flip-book/1077597/2401321/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد3-أبريل 2021", img: "assets/magazine/issue3.jpg", link: "https://publuu.com/flip-book/1077597/2401326/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد2-مارس 2021", img: "assets/magazine/WhatsApp-Image-2025-03-12-at-1.37.54-PM.jpg", link: "https://publuu.com/flip-book/1077597/2401322/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد1-فبراير 2021", img: "assets/magazine/issue1.jpg", link: "https://publuu.com/flip-book/1077597/2401323/page/1?embed&transparent" },
];


const manulas = [
    { title: "معادلات السلامة والصحة المهنية", date: "كتيب تعليمي", img: "assets/manuals/Occupational-Safety-and-Health-Equations.jpg", link: "https://publuu.com/flip-book/1071783/2391531/page/1?embed&transparent" },
    { title: "دور الميثانول منخفض الكربون في التحول الطاقي", date: "إصدار خاص", img: "assets/manuals/WhatsApp-Image-2025-08-23-at-12.41.51-PM.jpg", link: "https://publuu.com/flip-book/1071783/2391532/page/1?embed&transparent" },
    { title: "الأبطال المجهولون", date: "كتيب توعوي", img: "assets/manuals/Unsung-heroes.jpg", link: "https://publuu.com/flip-book/1071783/2386659/page/1?embed&transparent" },
    { title: "الإطفاء والتكنولوجيا الذكية", date: "كتيب توعوي", img: "assets/manuals/الاطفاء-والتكنولوجيا-Recovered.png", link: "https://publuu.com/flip-book/1075243/2395098/page/1?embed&transparent" },
    { title: "رحلة النيران", date: "كتيب توعوي", img: "assets/manuals/Journey-of-Fire.jpg", link: "https://publuu.com/flip-book/1075243/2395097/page/1?embed&transparent" },
    { title: "الوقاية من الحريق", date: "كتيب توعوي", img: "assets/manuals/WhatsApp-Image-2024-09-04-at-2.44.40-PM.jpg", link: "https://publuu.com/flip-book/1075243/2395100/page/1?embed&transparent" },
    { title: "رجال علي خط النار", date: "كتيب توعوي", img: "assets/manuals/IMG-20241010-WA0000.jpg", link: "https://publuu.com/flip-book/1075243/2395096/page/1?embed&transparent" },
    { title: "دليل السلامة المبسط في المنشآت التعليمية للأطفال", date: "كتيب توعوي", img: "assets/manuals/IMG-20241010-WA0001.jpg", link: "https://publuu.com/flip-book/1075243/2395084/page/1?embed&transparent" },
    

];

// ===== بناء الكروت =====

function createCardHTML(item, btnText = "عرض المجلة") {
    const src = item.link || "#";
    const isManual = btnText.includes("كتيب");
    const back = isManual ? "manuals.html" : "magazine.html";
    const href = `flipbook.html?title=${encodeURIComponent(item.title || "")}&src=${encodeURIComponent(src)}&back=${encodeURIComponent(back)}`;
    return `
        <div class="card1">
            <img src="${item.img}" alt="${item.title}" loading=""/>
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

        const result = [...withScore, ...withoutScore].map((x) => x.mag);
        myGrid.innerHTML = result.map((m) => createCardHTML(m, "عرض المجلة")).join("");
    }

    const initialOrder = sortSelect ? sortSelect.value : "newest";
    renderSorted(initialOrder);

    if (sortSelect) {
        sortSelect.addEventListener("change", () => renderSorted(sortSelect.value));
    }
}

// المجلات - الرئيسية (4 فقط)
const homeGrid = document.getElementById('home-magazines-grid');
if (homeGrid) {
    // اعرض كل المجلات بدل عرض 4 فقط
    homeGrid.innerHTML = magazines.slice(0, 4).map(mag => createCardHTML(mag, "عرض المجلة")).join("");
}


// الكتيبات
const manulasGrid = document.getElementById('manuals-grid');
if (manulasGrid) {
    manulasGrid.innerHTML = manulas.map(man => createCardHTML(man, "عرض الكتيب")).join("");
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
            const headerData = await headerRes.text();
            headerPlaceholder.innerHTML = headerData;
        }

        if (footerPlaceholder) {
            let footerRes = await fetch('components/footer.html');
            if (!footerRes.ok) footerRes = await fetch('../components/footer.html');
            const footerData = await footerRes.text();
            footerPlaceholder.innerHTML = footerData;
        }

        activateHeader();
        updateCartBadgeCount();
        markActiveNav();
    } catch (error) {
        console.error('فشل التحميل:', error);
    }
}

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

        // قوالب HTML للواجهات المختلفة
        const views = {
            login: `
                <div class="close-btn">×</div>
                <h2>تسجيل الدخول</h2>
                <div class="social-buttons">
                    <button type="button">استخدام Google <img src="assets/icons/google.png" alt=""></button>
                    <button type="button">استخدام Facebook <img src="assets/icons/facebooks.png" alt=""></button>
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
            register: `
                <div class="close-btn">×</div>
                <h2>إنشاء حساب جديد</h2>
                <div class="social-buttons">
                    <button type="button">التسجيل باستخدام Google <img src="assets/icons/google.png" alt=""></button>
                    <button type="button">التسجيل باستخدام Facebook <img src="assets/icons/facebooks.png" alt=""></button>
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
            const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || {};

            // منطق تسجيل الدخول
            if (viewName === 'login') {
                modelBox.querySelector('#go-register').onclick = (e) => { e.preventDefault(); renderView('register'); };
                modelBox.querySelector('#go-forgot').onclick = (e) => { e.preventDefault(); renderView('forgot'); };
                
                modelBox.querySelector('#btn-login').onclick = (e) => {
                    e.preventDefault();
                    const email = getVal('.email-input').toLowerCase();
                    const pass = getVal('.password-input');
                    
                    const users = getUsers();
                    if (users[email] && users[email].password === pass) {
                        localStorage.setItem(CURRENT_KEY, email);
                        setMessage('تم تسجيل الدخول بنجاح.', 'success');
                        setTimeout(() => loginModel.style.display = 'none', 800);
                    } else {
                        setMessage('البريد الإلكتروني أو كلمة المرور غير صحيحة.', 'error');
                    }
                };
            }

            // منطق إنشاء حساب (تفاصيل أكثر)
            if (viewName === 'register') {
                modelBox.querySelector('#go-login').onclick = (e) => { e.preventDefault(); renderView('login'); };
                
                modelBox.querySelector('#btn-register').onclick = (e) => {
                    e.preventDefault();
                    const name = getVal('#reg-name');
                    const phone = getVal('#reg-phone');
                    const email = getVal('#reg-email').toLowerCase();
                    const pass = getVal('#reg-pass');

                    if (!name || !phone || !email || !pass) return setMessage('يرجى ملء جميع الحقول.', 'error');
                    if (pass.length < 4) return setMessage('كلمة المرور قصيرة جدًا.', 'error');

                    const users = getUsers();
                    if (users[email]) {
                        setMessage('هذا البريد مسجل مسبقًا.', 'error');
                    } else {
                        users[email] = { password: pass, name, phone };
                        localStorage.setItem(USERS_KEY, JSON.stringify(users));
                        localStorage.setItem(CURRENT_KEY, email);
                        setMessage('تم إنشاء الحساب بنجاح.', 'success');
                        setTimeout(() => loginModel.style.display = 'none', 800);
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
                renderView('login');
                loginModel.style.display = 'flex';
            };
        }
    }
    if (searchBtn && searchInput) {
        const triggerSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            }
        };

        searchBtn.onclick = () => {
            if (searchInput.classList.contains('show-search') && searchInput.value.trim()) {
                triggerSearch();
            } else {
                searchInput.classList.toggle('hide-search');
                searchInput.classList.toggle('show-search');
                if (searchInput.classList.contains('show-search')) {
                    searchInput.focus();
                }
            }
        };

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                triggerSearch();
            }
        });
    }

    if (menuToggle && headerNav) {
        menuToggle.onclick = () => {
            const isOpen = headerNav.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        };
    }
}

document.addEventListener('DOMContentLoaded', loadLayout);

window.addEventListener('storage', (e) => {
    if (e.key === 'myCart') updateCartBadgeCount();
});


    
