
//كروت المجلات

const magazines = [
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/magazine/IMG_1325.jpeg", link: "https://heyzine.com/flip-book/babb82a018.html" },
    { title: "السلامة العربية", date: "العدد61-فبراير2026", img: "assets/magazine/IMG_1326.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد60-يناير2026", img: "assets/magazine/IMG_1327.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "assets/magazine/IMG_1328.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد58-نوفمبر2025", img: "assets/magazine/غلاف.png", link: "#" },
    { title: "السلامة العربية", date: "العدد57-أكتوبر2025", img: "assets/magazine/Issue-57-October-2025.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد56-سبتمبر2025", img: "assets/magazine/Issue-56-September-2025 copy.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد55-أغسطس2025", img: "assets/magazine/Issue-55-August-2025.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد54-يوليو2025", img: "assets/magazine/Issue-54-July-2025.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد53-يونيو2025", img: "assets/magazine/issue-53-june-2025.jpg", link: "#" }
];


const manulas = [
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/manuals/Occupational-Safety-and-Health-Equations.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/manuals/WhatsApp-Image-2025-08-23-at-12.41.51-PM.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/manuals/Unsung-heroes.jpg", link: "#" },
    
  
];

const codes = [
   { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/codes/covered-and-open-mall-buildings2.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/codes/sprinkle-upwards2.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/codes/rental-plan20.png", link: "#" },
];

const events = [
   { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/events/مسابقة-4.png", link: "#" },
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/events/مؤتمر-2024.png", link: "#" },
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "assets/events/مسابقة-3.png", link: "#" },
];



const myGrid = document.getElementById('magazines-grid');

if (myGrid) {
    magazines.forEach(mag => {
        myGrid.innerHTML += `
            <div class="card1">
                <img src="${mag.img}"/>
                <div class="class-content1">
                    <h3>${mag.title}</h3>
                    <p>${mag.date}</p>
                    <a href="${mag.link}" class="btn1">عرض المجلة</a>
                </div>
            </div>`;
    });
}



const manulasGrid = document.getElementById('manuals-grid');

if (manulasGrid ) {
    manulas.forEach(man => {
        manulasGrid .innerHTML += `
            <div class="card1">
                <img src="${man.img}"/>
                <div class="class-content1">
                    <h3>${man.title}</h3>
                    <p>${man.date}</p>
                    <a href="${man.link}" class="btn1">عرض المجلة</a>
                </div>
            </div>`;
    });
}

const codesGrid = document.getElementById('codes-grid');

if (codesGrid ) {
    codes.forEach(cod => {
        codesGrid .innerHTML += `
            <div class="card1">
                <img src="${cod.img}"/>
                <div class="class-content1">
                    <h3>${cod.title}</h3>
                    <p>${cod.date}</p>
                    <a href="${cod.link}" class="btn1">عرض المجلة</a>
                </div>
            </div>`;
    });
}

const eventGrid = document.getElementById('events-grid');

if (eventGrid) {
    events.forEach(eve => {
        eventGrid.innerHTML += `
            <div class="card1">
                <img src="${eve.img}"/>
                <div class="class-content1">
                    <h3>${eve.title}</h3>
                    <p>${eve.date}</p>
                    <a href="${eve.link}" class="btn1">عرض المجلة</a>
                </div>
            </div>`;
    });
}


async function loadLayout() {
    try{
        const response =await fetch('header.html');
        const data =await response.text();
        document.getElementById('header-placeholder').innerHTML =data;
        activateHeader();
    } catch (err) {
        console.error('فشل تحميل الهيدر', err);
    }
}
function activateHeader(){
    const openBtn =document.getElementById('openModel');
    const closeBtn =document.getElementById('closeModel');
    const loginModel =document.getElementById('loginModel');
    const searchBtn =document.getElementById('search-btn1');
    const searchInput =document.getElementById('search-input1');
    if(openBtn&& loginModel){
        openBtn.onclick =() => loginModel.style.display ='flex';
    }
    if(openBtn&& loginModel){
        closeBtn.onclick =() => loginModel.style.display ='none';
    }
    if(searchBtn&& searchInput){
        searchBtn.onclick =() => { searchInput.classList.toggle('hide-search');
            
        };
    }

} 

document.addEventListener('DOMContentLoaded', loadLayout);


















