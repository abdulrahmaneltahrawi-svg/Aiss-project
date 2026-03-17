
// ===== بيانات الكروت =====

const magazines = [
    { title: "مجلة السلامة العربية", date: "العدد 62 - مارس 2026", img: "assets/magazine/IMG_1325.jpeg", link: "https://publuu.com/flip-book/1071783/2386715" },
    { title: "مجلة السلامة العربية", date: "العدد 61 - فبراير 2026", img: "assets/magazine/IMG_1326.jpeg", link: "https://publuu.com/flip-book/1071783/2391520" },
    { title: "مجلة السلامة العربية", date: "العدد 60 - يناير 2026", img: "assets/magazine/IMG_1327.jpeg", link: "https://publuu.com/flip-book/1071783/2386468#" },
    { title: "مجلة السلامة العربية", date: "العدد 59 - ديسمبر 2025", img: "assets/magazine/IMG_1328.jpeg", link: "https://publuu.com/flip-book/1071783/2391521" },
    { title: "مجلة السلامة العربية", date: "العدد 58 - نوفمبر 2025", img: "assets/magazine/غلاف.png", link: "#" },
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
];


const manulas = [
    { title: "معادلات السلامة والصحة المهنية", date: "كتيب تعليمي", img: "assets/manuals/Occupational-Safety-and-Health-Equations.jpg", link: "https://publuu.com/flip-book/1071783/2391531" },
    { title: "دور الميثانول منخفض الكربون في التحول الطاقي", date: "إصدار خاص", img: "assets/manuals/WhatsApp-Image-2025-08-23-at-12.41.51-PM.jpg", link: "https://publuu.com/flip-book/1071783/2391532" },
    { title: "الأبطال المجهولون", date: "كتيب توعوي", img: "assets/manuals/Unsung-heroes.jpg", link: "https://publuu.com/flip-book/1071783/2386659" },
    { title: "الإطفاء والتكنولوجيا الذكية", date: "كتيب توعوي", img: "assets/manuals/الاطفاء-والتكنولوجيا-Recovered.png", link: "https://publuu.com/flip-book/1071783/2386659" },
    { title: "رحلة النيران", date: "كتيب توعوي", img: "assets/manuals/Journey-of-Fire.jpg", link: "https://publuu.com/flip-book/1071783/2386659" },
    { title: "الوقاية من الحريق", date: "كتيب توعوي", img: "assets/manuals/WhatsApp-Image-2024-09-04-at-2.44.40-PM.jpg", link: "https://publuu.com/flip-book/1071783/2386659" },
    { title: "رجال علي خط النار", date: "كتيب توعوي", img: "assets/manuals/IMG-20241010-WA0000.jpg", link: "https://publuu.com/flip-book/1071783/2386659" },
    { title: "دليل السلامة المبسط في المنشآت التعليمية للأطفال", date: "كتيب توعوي", img: "assets/manuals/IMG-20241010-WA0001.jpg", link: "https://publuu.com/flip-book/1071783/2386659" },

];

// ===== بناء الكروت =====

function createCardHTML(item, btnText = "عرض المجلة") {
    return `
        <div class="card1">
            <img src="${item.img}" alt="${item.title}"/>
            <div class="class-content1">
                <h3>${item.title}</h3>
                <p>${item.date}</p>
                <a href="${item.link}" class="btn1" target="_blank" rel="noopener noreferrer">${btnText} ←</a>
            </div>
        </div>`;
}

// المجلات - الصفحة الكاملة
const myGrid = document.getElementById('magazines-grid');
if (myGrid) {
    magazines.forEach(mag => { myGrid.innerHTML += createCardHTML(mag, "عرض المجلة"); });
}

// المجلات - الرئيسية (4 فقط)
const homeGrid = document.getElementById('home-magazines-grid');
if (homeGrid) {
    magazines.slice(0, 4).forEach(mag => { homeGrid.innerHTML += createCardHTML(mag, "عرض المجلة"); });
}


// الكتيبات
const manulasGrid = document.getElementById('manuals-grid');
if (manulasGrid) {
    manulas.forEach(man => { manulasGrid.innerHTML += createCardHTML(man, "عرض الكتيب"); });
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ===== استدعاء المكونات =====

async function loadLayout() {
    try {
        const headerRes = await fetch('components/header.html');
        const headerData = await headerRes.text();
        document.getElementById('header-placeholder').innerHTML = headerData;

        const footerRes = await fetch('components/footer.html');
        const footerData = await footerRes.text();
        document.getElementById('footer-placeholder').innerHTML = footerData;

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


    



















