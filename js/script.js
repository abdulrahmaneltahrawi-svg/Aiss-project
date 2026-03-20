
// ===== بيانات الكروت =====

const magazines = [
    { title: "مجلة السلامة العربية", date: "العدد 62 - مارس 2026", img: "assets/magazine/IMG_1325.jpeg" , link: "https://publuu.com/flip-book/1071783/2386715/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 61 - فبراير 2026", img: "assets/magazine/IMG_1326.jpeg", link: "https://publuu.com/flip-book/1071783/2391520/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 60 - يناير 2026", img: "assets/magazine/IMG_1327.jpeg", link: "https://publuu.com/flip-book/1071783/2386468/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 59 - ديسمبر 2025", img: "assets/magazine/IMG_1328.jpeg", link: "https://publuu.com/flip-book/1071783/2391521/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 58 - نوفمبر 2025", img: "assets/magazine/غلاف.png", link: "https://publuu.com/flip-book/1071783/2394787/page/1?embed&transparent" },
    { title: "مجلة السلامة العربية", date: "العدد 57 - أكتوبر 2025", img: "assets/magazine/Issue-57-October-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد 56 - سبتمبر 2025", img: "assets/magazine/Issue-56-September-2025 copy.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد 55 - أغسطس 2025", img: "assets/magazine/Issue-55-August-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد 54 - يوليو 2025", img: "assets/magazine/Issue-54-July-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد 53 - يونيو 2025", img: "assets/magazine/issue-53-june-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد52-مايو2025", img: "assets/magazine/Issue-52-May-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد51-ابريل-2025", img: "assets/magazine/Issue-51-April-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد50-مارس2025", img: "assets/magazine/Issue50-march2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد-49-فبراير2025", img: "assets/magazine/Issue-49-February-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد48-يناير2025", img: "assets/magazine/Issue-48-January-2025.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد47-ديسمبر2024", img: "assets/magazine/Issue-47-December-2024.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد46-نوفمبر2024", img: "assets/magazine/IMG-20241107-WA0000.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد45-أكتوبر2024", img: "assets/magazine/unnamed-file.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد44-سبتمبر2024", img: "assets/magazine/WhatsApp-Image-2024-09-02-at-1.29.52-PM.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد43-اغسطس2024", img: "assets/magazine/Issue_-43-_July-_2024-2.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد42-يوليو2024", img: "assets/magazine/Issue-42-July-2024.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد41-يونيو", img: "assets/magazine/Issue-41_May-2024.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "العدد40-مايو2024", img: "assets/magazine/Issue-40-May-2024.jpg", link: "#" },
    // باقي المجلات الموجودة داخل assets/magazine (بدون روابط فلـِپ حاليًا)
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/335a1bda-2cb7-49f5-bda0-4f9345a5cfab.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/36e23e38-8f65-4920-9034-19c89fea2070.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/47fe6496-a5b7-420e-9094-73a8b08daae5.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/6ffd7fac-1d43-45e5-b055-7204f7087b3d.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/7ab5f092-5d9e-4de6-aec4-15f034a7e27d.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/8b90e057-0286-4a12-b584-3386b2846cc9.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/ac8fdb62-5e7c-4a13-bed3-8e9780f20712.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/e3b51429-f2e1-4dcd-9eb7-f0ed7f1ccd06.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-17-june-2022.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-18-july-2022.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-19-august-2022.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-20-september-2022.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-21-october-2022.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-22-november-2022.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-23-december-2022.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-25-february-2023.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-27-april-2023-1.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/Issue-34_November-2023.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-35_december-2023.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/Issue-36_January-2024.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/Issue-37-February-2024.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue-38-march-2024.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/Issue-No.-39_April-2024.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue1.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue3.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue7.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue9.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue10.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue28.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue29.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue30.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue31.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/issue32.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/magazine33.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/WhatsApp-Image-2023-10-13-at-6.58.26-AM.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/WhatsApp-Image-2024-11-12-at-3.09.34-PM.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/WhatsApp-Image-2025-03-12-at-1.37.54-PM-1.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/WhatsApp-Image-2025-03-12-at-1.37.54-PM.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/WhatsApp-Image-2025-03-12-at-1.37.55-PM.jpg", link: "#" },
    { title: "مجلة السلامة العربية", date: "", img: "assets/magazine/????.png", link: "#" },
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
    // الهدف: حساب رقم قابل للفرز (year*12 + month) من تاريخ عربي أو من اسم ملف الصورة
    const d = (mag?.date || "").toString();
    const yearMatch = d.match(/(19|20)\d{2}/);
    const year = yearMatch ? Number(yearMatch[0]) : null;

    const arabicMonths = {
        "يناير": 0,
        "فبراير": 1,
        "مارس": 2,
        "ابريل": 3,
        "أبريل": 3,
        "مايو": 4,
        "يونيو": 5,
        "يوليو": 6,
        "اغسطس": 7,
        "أغسطس": 7,
        "سبتمبر": 8,
        "اكتوبر": 9,
        "أكتوبر": 9,
        "نوفمبر": 10,
        "ديسمبر": 11,
    };

    let month = null;
    for (const key in arabicMonths) {
        if (d.includes(key)) {
            month = arabicMonths[key];
            break;
        }
    }

    if (year !== null && month !== null) return year * 12 + month;

    // fallback: محاولة قراءة الشهر/السنة من اسم ملف الصورة (بالإنجليزي)
    const imgName = (mag?.img || "").toString().toLowerCase();
    const imgYearMatch = imgName.match(/(19|20)\d{2}/);
    const imgYear = imgYearMatch ? Number(imgYearMatch[0]) : null;

    const englishMonths = {
        "january": 0,
        "february": 1,
        "march": 2,
        "april": 3,
        "may": 4,
        "june": 5,
        "july": 6,
        "august": 7,
        "september": 8,
        "october": 9,
        "november": 10,
        "december": 11,
    };

    let imgMonth = null;
    for (const key in englishMonths) {
        if (imgName.includes(key)) {
            imgMonth = englishMonths[key];
            break;
        }
    }

    if (imgYear !== null && imgMonth !== null) return imgYear * 12 + imgMonth;

    // إذا ما قدرنا نقرأ تاريخ: نرجع null ونتركه في نهاية القائمة
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
    homeGrid.innerHTML = magazines.map(mag => createCardHTML(mag, "عرض المجلة")).join("");
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

        // تسجيل دخول/إنشاء حساب بشكل تجريبي (بدون Backend)
        const emailInput = loginModel.querySelector('.email-input[type="email"]');
        const passwordInput = loginModel.querySelector('.password-input');
        const submitBtn = loginModel.querySelector('.submit-btn');
        const messageEl = loginModel.querySelector('#auth-message') || loginModel.querySelector('.auth-message');
        const createLink = loginModel.querySelector('.auth-create-link');
        if (createLink) {
            // شكل الرابط فقط، بدون تبديل فعلي للحساب (تجنب قفزة صفحة عند الضغط)
            createLink.addEventListener('click', (ev) => ev.preventDefault());
        }

        const USERS_KEY = 'aissUsersV1';
        const CURRENT_KEY = 'aissCurrentUserV1';

        const setMessage = (text, type) => {
            if (!messageEl) return;
            messageEl.textContent = text || '';
            messageEl.classList.remove('error', 'success');
            if (type) messageEl.classList.add(type);
        };

        if (submitBtn && emailInput && passwordInput) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();

                const email = (emailInput.value || '').trim().toLowerCase();
                const password = passwordInput.value || '';

                if (!email) {
                    setMessage('من فضلك أدخل البريد الإلكتروني.', 'error');
                    return;
                }
                if (!password) {
                    setMessage('من فضلك أدخل كلمة المرور.', 'error');
                    return;
                }
                if (password.length < 4) {
                    setMessage('كلمة المرور قصيرة جدًا.', 'error');
                    return;
                }

                let users = {};
                try {
                    users = JSON.parse(localStorage.getItem(USERS_KEY)) || {};
                } catch (_) {
                    users = {};
                }

                const existing = users[email];
                    if (existing) {
                        // تسجيل دخول
                        if (existing.password !== password) {
                            setMessage('كلمة المرور غير صحيحة.', 'error');
                            return;
                        }
                        localStorage.setItem(CURRENT_KEY, email);
                        setMessage('تم تسجيل الدخول بنجاح.', 'success');
                    } else {
                        // إنشاء حساب تلقائيًا عند عدم وجوده
                        users[email] = { password };
                        localStorage.setItem(USERS_KEY, JSON.stringify(users));
                        localStorage.setItem(CURRENT_KEY, email);
                        setMessage('تم إنشاء الحساب بنجاح.', 'success');
                    }

                // إغلاق المودال بعد إظهار الرسالة
                setTimeout(() => {
                    if (loginModel) loginModel.style.display = 'none';
                }, 800);
            });
        }
    }
    if (searchBtn && searchInput) {
        searchBtn.onclick = () => {
            searchInput.classList.toggle('hide-search');
            searchInput.classList.toggle('show-search');
        };
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


    



















