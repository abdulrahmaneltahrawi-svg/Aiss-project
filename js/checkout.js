/**
 * Helper function to format price.
 * @param {number} value
 * @returns {string}
 */
function formatPrice(value) {
  const n = Number(value);
  if (Number.isFinite(n)) return `${n} د.ا`;
  return value ? `${value} د.ا` : "";
}

/**
 * Helper function to calculate total cart price.
 * @param {Array} items
 * @returns {number}
 */
function calcTotal(items) {
  return items.reduce((sum, it) => sum + (Number(it.price) || 0), 0);
}

/**
 * Renders the order summary in the checkout page.
 */
function renderOrderSummary() {
  const cart = JSON.parse(localStorage.getItem("myCart")) || [];
  const tbody = document.getElementById("order-items");
  if (!tbody) return;

  if (cart.length === 0) {
    tbody.innerHTML = `
            <tr>
                <td class="price">0 د.ا</td>
                <td>لا توجد منتجات</td>
            </tr>
            <tr class="total">
                <td class="price red-text">0 د.ا</td>
                <td>الإجمالي</td>
            </tr>
        `;
    return;
  }

  const total = calcTotal(cart);
  tbody.innerHTML =
    cart
      .map(
        (item) => `
                <tr>
                    <td class="price">${formatPrice(item.price)}</td>
                    <td>${item.title || ""} × 1</td>
                </tr>
            `,
      )
      .join("") +
    `
        <tr class="subtotal">
            <td class="price">${formatPrice(total)}</td>
            <td>المجموع</td>
        </tr>
        <tr class="total">
            <td class="price red-text">${formatPrice(total)}</td>
            <td>الإجمالي</td>
        </tr>
    `;
}

/**
 * وظيفة إتمام الطلب (Checkout Fetch Call)
 */
async function completeOrder() {
  // 1. جلب البيانات من التخزين المحلي
  const cart = JSON.parse(localStorage.getItem("myCart")) || [];
  // const userEmailFromStorage = localStorage.getItem('aissCurrentUserV1'); // Not directly used in payload, form fields take precedence
  // const users = JSON.parse(localStorage.getItem('aissUsersV1')) || {}; // Not directly used in payload

  // التحقق من وجود منتجات في السلة
  if (cart.length === 0) {
    alert("سلة المشتريات فارغة، لا يمكن إتمام الطلب.");
    return;
  }

  // 1. جلب قيم الحقول من الـ HTML
  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const phoneField = document.getElementById("phone");
  const emailField = document.getElementById("email");

  const fields = [
    { el: firstNameField, validate: (v) => v.length > 0 },
    { el: lastNameField, validate: (v) => v.length > 0 },
    { el: phoneField, validate: (v) => v.length >= 7 },
    { el: emailField, validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
  ];

  let isValid = true;
  fields.forEach((field) => {
    if (!field.el) return;
    const value = field.el.value.trim();
    if (!field.validate(value)) {
      field.el.classList.add("error-field");
      isValid = false;
    } else {
      field.el.classList.remove("error-field");
    }
  });

  if (!isValid) {
    alert("يرجى التحقق من الحقول المحددة باللون الأحمر وتعبئتها بشكل صحيح.");
    return;
  }

  // 2. تجهيز بيانات الطلب (Payload) - استخدام بيانات الفورم
  const orderPayload = {
    customer: {
      name: `${firstNameField.value} ${lastNameField.value}`,
      email: emailField.value,
      phone: phoneField.value,
    },
    items: cart,
    totalAmount: calcTotal(cart),
    orderDate: new Date().toISOString(),
    platform: "AISS Web",
  };

  try {
    console.log("البيانات المرسلة للباك اند:", orderPayload);
    // 3. كود الربط (Fetch Call)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken") || ""}`,
      },
      body: JSON.stringify(orderPayload),
    });

    const result = await response.json();
    console.log("استجابة السيرفر (Server Response):", result);

    if (response.ok) {
      console.log("✅ نجحت العملية!");
      // 4. معالجة النجاح
      alert(
        "تم استلام طلبك بنجاح! شكراً لتعاملك مع المعهد العربي لعلوم السلامة.",
      );
      localStorage.removeItem("myCart"); // تفريغ السلة
      window.location.href = "index.html"; // العودة للرئيسية
    } else {
      // معالجة أخطاء الخادم
      console.error("❌ فشل الطلب في السيرفر:", result);
      throw new Error(result.message || "فشل إتمام الطلب");
    }
  } catch (error) {
    console.error("Checkout Error:", error);
    alert("حدث خطأ أثناء إتمام الطلب: " + error.message);
    // Do not cancel timer here, user might retry
  }
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderOrderSummary(); // Render order summary
  // prefillCheckoutForm(); // This function is not defined in the provided context, but would go here if implemented

  // إضافة مستمع لإزالة اللون الأحمر عند الكتابة
  const inputIds = ["first-name", "last-name", "phone", "email"];
  inputIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => el.classList.remove("error-field"));
    }
  });

  const payBtn = document.getElementById("pay-btn");
  if (payBtn) payBtn.addEventListener("click", completeOrder);
});
