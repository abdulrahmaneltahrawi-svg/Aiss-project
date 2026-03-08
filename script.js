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
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1325.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1327.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1328.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1328.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1325.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1327.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1328.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1328.jpeg", link: "#" },
    { title: "السلامة العربية", date: "العدد59-ديسمبر 2025", img: "imge/IMG_1328.jpeg", link: "#" },
];

const grid = document.getElementById('magazines-grid');

magazines.forEach(mag => {
    grid.innerHTML += `
    <div class="card1">
        <img src="${mag.img}"/>
        <div class="class-content1">
            <h3>${mag.title}</h3>
            <p>${mag.date}</p>
            <a href="${mag.link}" class="btn1">عرض التفاصيل</a>
        </div>
    </div>
    `;
});

//كروت المدونات

















