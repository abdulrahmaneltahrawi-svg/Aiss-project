      // ربط العضويات بالسلة عبر localStorage (نفس منطق السلة في المتجر)
      let cart = JSON.parse(localStorage.getItem("myCart")) || [];

      function updateCartBadgeCount() {
        const badge = document.getElementById("cart-count");
        if (!badge) return;
        badge.innerText = cart.length;
        badge.style.display = cart.length > 0 ? "flex" : "none";
      }

      window.addToCart = function addToCart(item) {
        cart.push(item);
        localStorage.setItem("myCart", JSON.stringify(cart));
        updateCartBadgeCount();
      };

      // تحديث الشارة عند فتح الصفحة
      updateCartBadgeCount();