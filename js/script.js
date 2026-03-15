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
    { title: "مجلة السلامة العربية", date: "العدد 53 - يونيو 2025", img: "assets/magazine/issue-53-june-2025.jpg", link: "#" }
];


const manulas = [
    { title: "معادلات السلامة والصحة المهنية", date: "كتيب تعليمي", img: "assets/manuals/Occupational-Safety-and-Health-Equations.jpg", link: "https://publuu.com/flip-book/1071783/2391531" },
    { title: "كتيب السلامة", date: "إصدار خاص", img: "assets/manuals/WhatsApp-Image-2025-08-23-at-12.41.51-PM.jpg", link: "https://publuu.com/flip-book/1071783/2391532" },
    { title: "أبطال لا يُذكرون", date: "كتيب توعوي", img: "assets/manuals/Unsung-heroes.jpg", link: "https://publuu.com/flip-book/1071783/2386659" },
];

const codes = [
    { title: "مباني المولات المغطاة والمفتوحة", date: "كود السلامة", img: "assets/codes/covered-and-open-mall-buildings2.jpg", link: "#" },
    { title: "رشاشات المياه للأعلى", date: "معيار الحماية", img: "assets/codes/sprinkle-upwards2.jpg", link: "#" },
    { title: "مخطط الإيجار", date: "كود البناء", img: "assets/codes/rental-plan20.png", link: "#" },
];

const events = [
    { title: "مسابقة السلامة", date: "فعالية 2024", img: "assets/events/مسابقة-4.png", link: "#" },
    { title: "مؤتمر السلامة العربي", date: "مؤتمر 2024", img: "assets/events/مؤتمر-2024.png", link: "#" },
    { title: "مسابقة السلامة 2023", date: "فعالية 2023", img: "assets/events/مسابقة-3.png", link: "#" },
];


// ===== بناء الكروت =====

function createCardHTML(item, btnText = "عرض المجلة") {
    return `
        <div class="card1">
            <img src="${item.img}" alt="${item.title}"/>
            <div class="class-content1">
                <h3>${item.title}</h3>
                <p>${item.date}</p>
                <a href="${item.link}" class="btn1">${btnText} ←</a>
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

// الأكواد
const codesGrid = document.getElementById('codes-grid');
if (codesGrid) {
    codes.forEach(cod => { codesGrid.innerHTML += createCardHTML(cod, "عرض الكود"); });
}

// الأحداث
const eventGrid = document.getElementById('events-grid');
if (eventGrid) {
    events.forEach(eve => { eventGrid.innerHTML += createCardHTML(eve, "عرض الحدث"); });
}



// ===== تحميل المكونات =====

async function loadLayout() {
    try {
        const headerRes = await fetch('components/header.html');
        const headerData = await headerRes.text();
        document.getElementById('header-placeholder').innerHTML = headerData;

        const footerRes = await fetch('components/footer.html');
        const footerData = await footerRes.text();
        document.getElementById('footer-placeholder').innerHTML = footerData;

        activateHeader();
        markActiveNav();
    } catch (error) {
        console.error('فشل التحميل:', error);
    }
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

function activateHeader() {
    const openBtn = document.getElementById('openModel');
    const closeBtn = document.getElementById('closeModel');
    const loginModel = document.getElementById('loginModel');
    const searchBtn = document.getElementById('search-btn1');
    const searchInput = document.getElementById('search-input1');

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
}

document.addEventListener('DOMContentLoaded', loadLayout);


    



















