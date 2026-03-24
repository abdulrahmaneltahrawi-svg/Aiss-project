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

    const allContent = [
      ...myCards.map(item => ({...item, type: 'blog'})),
      ...magazines.map(item => ({...item, type: 'magazine'})),
      ...manulas.map(item => ({...item, type: 'manual'})),
      ...cleanPosts.map(item => ({...item, type: 'post'}))
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
        let link = '#';
        let btnText = 'عرض';
        if (item.type === 'blog') {
            link = `views.html?id=${item.id}`;
            btnText = 'عرض المدونة';
        } else if (item.type === 'magazine') {
            const back = "magazine.html";
            link = `flipbook.html?title=${encodeURIComponent(item.title || "")}&src=${encodeURIComponent(item.link)}&back=${encodeURIComponent(back)}`;
            btnText = 'عرض المجلة';
        } else if (item.type === 'manual') {
            const back = "manuals.html";
            link = `flipbook.html?title=${encodeURIComponent(item.title || "")}&src=${encodeURIComponent(item.link)}&back=${encodeURIComponent(back)}`;
            btnText = 'عرض الكتيب';
        } else if (item.type === 'post') {
            // For posts from cleaned-posts, we don't have a specific view page, so we can link to a page that might display it or just show the content.
            // For now, let's just show a card without a specific link, or link to a generic page if available.
            // Let's assume a simple card display for now.
             return `
              <div class="card1">
                <img src="${item.image}" loading="lazy">
                <div class="class-content1">
                  <h3>${item.title}</h3>
                </div>
              </div>
              `;
        }

        return `
          <div class="card1">
            <img src="${item.image || item.img}" loading="lazy">
            <div class="class-content1">
              <h3>${item.title}</h3>
              <a href ="${link}" class="btn1">${btnText}</a>
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
