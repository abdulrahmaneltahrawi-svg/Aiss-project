const openBtn = document.getElementById('openModel');
const model = document.getElementById('loginModel');
const closeBtn = document.getElementById('closeModel');

if (openBtn) {
    openBtn.onclick = function () {
        model.style.display = 'flex';
    };
}

if (closeModel) {
    closeModel.onclick = function () {
        model.style.display = 'none';
    };
}

window.onclick = function (event) {
    if (event.target === model) {
        model.style.display = 'none';
    }

};

//كروت المجلات

const magazines = [
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "imge/IMG_1325.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد61-فبراير2026", img: "المجلات/IMG_1326.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد60-يناير2026", img: "imge/IMG_1327.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1328.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد58-نوفمبر2025", img: "المجلات/47fe6496-a5b7-420e-9094-73a8b08daae5.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد57-أكتوبر2025", img: "المجلات/issue3.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد56-سبتمبر2025", img: "المجلات/issue7.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد55-أغسطس2025", img: "المجلات/issue9-600x600.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد54-يوليو2025", img: "المجلات/issue10.jpg", link: "#" },
    { title: "السلامة العربية", date: "العدد53-يونيو2025", img: "المجلات/issue10.jpg", link: "#" }
];
const blogs = [
    { title: "السلامة العربية", date: "العدد62-مارس2026", img: "imge/IMG_1325.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد61-فبراير2026", img: "المجلات/IMG_1326.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد60-يناير2026", img: "imge/IMG_1327.jpeg", link: "#" }
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

const blogGrid = document.getElementById('blogs-grid');

if (blogGrid) {
    blogs.forEach(blog => {
        blogGrid.innerHTML += `
            <div class="card1">
                <img src="${blog.img}"/>
                <div class="class-content1">
                    <h3>${blog.title}</h3>
                    <p>${blog.date}</p>
                    <a href="${blog.link}" class="btn1">عرض المجلة</a>
                </div>
            </div>`;
    });
}


//قسم البحث
const searchBtn = document.getElementById('search-btn1');
const searchInput =document.getElementById('search-input1');

searchBtn.addEventListener('click',() => {
searchInput.classList.toggle('show-search');

});
























