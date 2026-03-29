async function performSearch() {
  const searchGrid = document.getElementById("search-results-grid");
  const searchQueryTitle = document.getElementById("search-query-title");
  if (!searchGrid || !searchQueryTitle) return;

  const params = new URLSearchParams(window.location.search);
  const query = params.get("query")?.toLowerCase().trim();

  if (!query) {
    searchQueryTitle.textContent = "الرجاء إدخال كلمة للبحث";
    return;
  }

  searchQueryTitle.textContent = `نتائج البحث عن: "${query}"`;

  try {
    const response = await fetch('cleaned-posts (1).json');
    if (!response.ok) {
        console.error('Failed to fetch cleaned-posts (1).json');
        return;
    }
    const cleanPosts = await response.json();

    const eventsData = (typeof events !== 'undefined') ? events : [];

    const allContent = [
      ...myCards.map(item => ({...item, type: 'blog', label: 'مدونة', color: '#e4293a', link: `views.html?id=${item.id}`, btn: 'عرض المدونة'})),
      ...magazines.map(item => ({...item, type: 'magazine', label: 'مجلة', color: '#235287', link: item.link ? `flipbook.html?title=${encodeURIComponent(item.title)}&src=${encodeURIComponent(item.link)}&back=magazine.html` : '#', btn: 'عرض المجلة'})),
      ...manulas.map(item => ({...item, type: 'manual', label: 'كتيب', color: '#28a745', link: item.link ? `flipbook.html?title=${encodeURIComponent(item.title)}&src=${encodeURIComponent(item.link)}&back=manuals.html` : '#', btn: 'عرض الكتيب'})),
      ...eventsData.map(item => ({...item, type: 'event', label: 'حدث', color: '#fd7e14', link: '#', btn: 'عرض التفاصيل'})),
      ...cleanPosts.map(item => ({...item, type: 'code', label: 'كود/معيار', color: '#6610f2', link: '#', btn: 'عرض المحتوى'}))
    ];

    const results = allContent.filter(item => {
      const title = item.title?.toLowerCase() || '';
      const content = item.content?.toLowerCase() || '';
      const description = item.description?.toLowerCase() || '';
      return title.includes(query) || content.includes(query) || description.includes(query);
    });

    if (results.length === 0) {
      searchGrid.innerHTML = '<p>لا توجد نتائج مطابقة لبحثك.</p>';
      return;
    }

    searchGrid.innerHTML = results
      .map((item) => {
        // استخدام صورة افتراضية إذا لم تتوفر صورة
        const imageSrc = item.image || item.img || 'assets/icons/logo.webp';
        return `
          <div class="card1">
            <span class="type-badge" style="background-color: ${item.color}">${item.label}</span>
            <img src="${imageSrc}" alt="${item.title || 'صورة توضيحية'}" loading="lazy" onerror="this.onerror=null; this.src='assets/icons/logo.webp'; this.alt='شعار افتراضي';">
            <div class="class-content1">
              <h3>${item.title}</h3>
              <a href="${item.link}" class="btn1">${item.btn}</a>
            </div>
          </div>
          `;
      })
      .join("");
  } catch (error) {
    console.error("Error during search:", error);
    searchGrid.innerHTML = "<p>حدث خطأ أثناء البحث. الرجاء المحاولة مرة أخرى.</p>";
  }
}

document.addEventListener("DOMContentLoaded", performSearch);
