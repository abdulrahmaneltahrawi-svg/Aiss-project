
 // ===== بناء الكروت =====
function createCardHTML(item, btnText = "عرض المجلة", index = 10) {
  const src = item.link || "#";
  // حماية في حال كانت الصورة مفقودة أو غير معرفة لمنع خطأ 404
  const imagePath = item.img && item.img.trim() !== "" ? item.img : "assets/magazine/placeholder.webp";
  const isManual = btnText.includes("كتيب");
  const back = isManual ? "manuals.html" : "magazine.html";
  const href = `flipbook.html?title=${encodeURIComponent((item.title || "") + " - " + (item.date || ""))}&src=${encodeURIComponent(src)}&back=${encodeURIComponent(back)}`;
  // إعطاء أولوية تحميل عالية لأول 4 عناصر في الصفحة لسرعة الظهور
  const loadingAttr = index < 4 ? 'fetchpriority="high"' : 'loading="lazy"';
  return `
        <div class="card1 is-loading">
        <a href="${href}">
            <img src="${imagePath}" alt="${item.title}" width="270" height="350" ${loadingAttr} decoding="async" onload="this.classList.add('loaded'); this.parentElement.classList.remove('is-loading');" onerror="if(this.src != 'assets/magazine/IMG_1325.webp'){this.src='assets/magazine/IMG_1325.webp';} this.classList.add('loaded'); this.parentElement.classList.remove('is-loading');"/>
            </a>
            <div class="class-content1">
                <h3>${item.title}</h3>
                <p>${item.date}</p>
                <a href="${href}" class="btn1">${btnText} ←</a>
            </div>
        </div>
        
        `;
    
}

    // تم تغليف الكود في نطاق محلي لتجنب تعارض الأسماء (const grid) مع صفحة المدونات
    {
      const grid = document.getElementById("blogs-grid"); // Keep this line
      // نقوم بالتنفيذ فقط إذا لم نكن في صفحة المدونات لتجنب تضارب التصفية (Filtering)
      if (grid && typeof myCards !== "undefined" && !window.location.pathname.includes("blogs.html")) {
        grid.innerHTML = myCards.slice(0, 8).map((item, index) => `
          <div class="card1">
              <img src="${item.image}" alt="${item.title || 'صورة المدونة'}" loading="lazy" decoding="async">
              <div class="class-content1">
              <h3>${item.title}</h3>
              <a href="views.html?id=${(item.titlesubject || item.title).trim().replace(/[^\u0600-\u06FFa-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '')}" class="btn1">عرض المدونة</a>
              </div>
          </div>

          `).join("");
      }
    }


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
const manualsGrid = document.getElementById("manuals-grid");
if (manualsGrid) {
  const loadMoreBtn = document.getElementById("load-more-manuals");
  let itemsPerPage = 10;
  let isFirstManualLoad = true;

  const renderInitialManuals = () => {
    let countToRender = itemsPerPage;
    if (isFirstManualLoad && (document.referrer.includes('flipbook.html') || document.referrer.includes('views.html'))) {
      const savedCount = sessionStorage.getItem("count_manuals.html");
      if (savedCount) countToRender = parseInt(savedCount);
    }

    const toShow = manuals.slice(0, countToRender);
    manualsGrid.innerHTML = toShow
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
        manuals.length > countToRender ? "inline-block" : "none";
    }
  };

  renderInitialManuals();

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      const currentCount = manualsGrid.children.length;
      const nextItems = manuals.slice(
        currentCount,
        currentCount + itemsPerPage,
      );
      if (nextItems.length > 0) {
        const newHtml = nextItems
          .map((man, idx) => createCardHTML(man, "عرض الكتيب", currentCount + idx))
          .join("");
        manualsGrid.insertAdjacentHTML("beforeend", newHtml);
      }
      if (manualsGrid.children.length >= manuals.length) {
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
      try {
        let headerRes = await fetch("components/header.html");
        if (!headerRes.ok) headerRes = await fetch("../components/header.html");
        if (headerRes.ok) {
          const headerData = await headerRes.text();
          headerPlaceholder.innerHTML = headerData;
        } else {
          console.warn("Header file not found at expected paths.");
        }
      } catch (e) {
        console.error("Error fetching header:", e);
      }
    }

    if (footerPlaceholder) {
      try {
        let footerRes = await fetch("components/footer.html");
        if (!footerRes.ok) footerRes = await fetch("../components/footer.html");
        if (footerRes.ok) {
          const footerData = await footerRes.text();
          footerPlaceholder.innerHTML = footerData;
        } else {
          console.warn("Footer file not found at expected paths.");
        }
      } catch (e) {
        console.error("Error fetching footer:", e);
      }
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
      // التحقق مما إذا كان المستخدم أدمن (يدعم كلمة admin أو القيمة الرقمية 1)
      // وكذلك التحقق من صلاحية إضافة المقالات إذا كانت موجودة
      const isAdmin = data.user.role === 'admin' || data.user.role == 1 || data.user.can_add_article == 1;

      // استبدال كود الزر نفسه فقط بمحتوى الحالة المسجلة
      loginBtn.outerHTML = `
        <div class="user-logged-in" style="display: flex; align-items: center; gap: 8px; direction: rtl;">
          <style>
            @media (max-width: 768px){
              .user-logged-in { gap: 5px !important; }
              .user-logged-in span { font-size: 14px !important; }
              .user-logged-in a, .user-logged-in button { padding: 4px 8px !important; font-size: 12px !important; }
            }
            @media (min-width: 769px){
              .user-logged-in button, .user-logged-in a { padding: 5px 10px !important; font-size: 14px !important; }
            }
          </style>
          <span style="font-size: 15px; font-weight: bold; color: #060606; white-space: nowrap;">مرحبا ${data.user.name}</span>
          ${isAdmin ? '<a href="dashboard.html" style="padding: 5px 10px; font-size: 14px; background: #235287; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">لوحة التحكم</a>' : ''}
          <button id="logout-btn" style="padding: 5px 10px; font-size: 14px; border: 1px solid #e4293a; background: white; color: #e4293a; border-radius: 8px; cursor: pointer; font-weight: bold;">خروج</button>
        </div>`;

      // إظهار كافة العناصر التي تتطلب تسجيل دخول (مثل روابط إضافة المقالات في المنيو)
      document.querySelectorAll('.auth-only').forEach(el => {
        el.style.setProperty('display', 'block', 'important');
      });

      // إظهار العناصر الخاصة بالأدمن فقط إذا كان المستخدم أدمن
      document.querySelectorAll('.admin-only').forEach(el => {
        if (isAdmin) {
          el.style.setProperty('display', 'block', 'important');
        }
      });
    }
  } catch (err) {
    console.error("فشل التحقق من الجلسة:", err);
  }
}
//====المتجر=====

function updateCartBadgeCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("myCart")) || [];
  } catch (e) {
    cart = [];
  }

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
      if (searchInput.classList.contains("show-search")) {
        searchInput.classList.remove("show-search");
        searchInput.classList.add("hide-search");
        if (suggestionsList) suggestionsList.style.display = "none";
      } else {
        searchInput.classList.remove("hide-search");
        searchInput.classList.add("show-search");
        searchInput.focus();
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
      if (suggestionsList) suggestionsList.innerHTML = "";

      if (query.length < 1) {
        if (suggestionsList) suggestionsList.style.display = "none";
        return;
      }

      // تجميع البيانات المتاحة للبحث
      const blogs = typeof myCards !== "undefined" ? myCards : [];
      const eventsData = typeof events !== "undefined" ? events : [];
      const codes = (typeof fetchCodes === "function") ? await fetchCodes() : [];

      const allItems = [
        ...magazines.map((m) => ({
          ...m,
          type: "مجلة",
          url: m.link
            ? `flipbook.html?title=${encodeURIComponent(m.title + " - " + m.date)}&src=${encodeURIComponent(m.link)}&back=magazine.html`
            : "#",
        })),
        ...manuals.map((m) => ({
          ...m,
          type: "كتيب",
          url: m.link
            ? `flipbook.html?title=${encodeURIComponent(m.title + " - " + m.date)}&src=${encodeURIComponent(m.link)}&back=manuals.html`
            : "#",
        })),
        ...blogs.map((b) => ({
          ...b,
          type: "مدونة",
          url: `views.html?id=${b.source === 'db' ? b.id : (b.titlesubject || b.title).trim().replace(/[^\u0600-\u06FFa-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '')}${b.source === 'db' ? '&source=db' : ''}`,
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
        (item) => (item.title && item.title.toLowerCase().includes(query)) || (item.titlesubject && item.titlesubject.toLowerCase().includes(query)),
      );

      if (results.length > 0) {
        if (suggestionsList) suggestionsList.style.display = "block";
        results.slice(0, 8).forEach((item) => {
          const li = document.createElement("li");
          const displayTitle = (item.titlesubject && item.titlesubject.trim() !== "") ? item.titlesubject : item.title;
          li.innerHTML = `
                        <a href="${item.url}" style="display:block; color:inherit; text-decoration:none;">
                           <span style="color:#e4293a; font-weight:bold; margin-left:5px; font-size:11px;">${item.type}</span>
                           <span class="search-title-text">${displayTitle}</span>
                        </a>
                    `;
          suggestionsList.appendChild(li);
        });
      } else {
        if (suggestionsList) suggestionsList.style.display = "block";
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
