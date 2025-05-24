document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menu-list');
  const panelContent = document.getElementById('user-panel-content');

  const userInfo = {
    name: "علی رضایی",
    email: "ali.rezaei@example.com",
    phone: "09121234567",
    membershipDate: "2023/02/10"
  };

  const orders = [
    { id: 101, date: "2025/05/01", status: "در حال پردازش", total: "1,500,000 تومان" },
    { id: 102, date: "2025/04/15", status: "ارسال شده", total: "2,300,000 تومان" },
    { id: 103, date: "2025/03/30", status: "لغو شده", total: "800,000 تومان" }
  ];

  const messages = [
    { from: "پشتیبانی", subject: "آپدیت جدید سایت", date: "2025/05/18", read: false },
    { from: "فروشگاه", subject: "وضعیت سفارش شما", date: "2025/05/10", read: true },
    { from: "مدیر", subject: "تبریک عضویت", date: "2025/02/11", read: true }
  ];

  const contentMap = {
    'پروفایل': () => `
      <h3>پروفایل شما</h3>
      <ul class="list-group mt-3">
        <li class="list-group-item"><strong>نام:</strong> ${userInfo.name}</li>
        <li class="list-group-item"><strong>ایمیل:</strong> ${userInfo.email}</li>
        <li class="list-group-item"><strong>شماره تلفن:</strong> ${userInfo.phone}</li>
        <li class="list-group-item"><strong>عضویت از:</strong> ${userInfo.membershipDate}</li>
      </ul>
    `,
    'سفارش‌ها': () => `
      <h3>سفارش‌های شما</h3>
      <table class="table table-striped mt-3 text-center">
        <thead class="table-primary">
          <tr>
            <th>کد سفارش</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>مبلغ کل</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(order => `
            <tr>
              <td>${order.id}</td>
              <td>${order.date}</td>
              <td>${order.status}</td>
              <td>${order.total}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `,
    'پیام‌ها': () => `
      <h3>پیام‌های شما</h3>
      <ul class="list-group mt-3">
        ${messages.map(msg => `
          <li class="list-group-item d-flex justify-content-between align-items-center ${msg.read ? '' : 'fw-bold'}">
            <div>
              <div><strong>${msg.from}</strong> - ${msg.subject}</div>
              <small class="text-muted">${msg.date}</small>
            </div>
            <span class="badge bg-${msg.read ? 'secondary' : 'primary'} rounded-pill">${msg.read ? 'خوانده شده' : 'جدید'}</span>
          </li>
        `).join('')}
      </ul>
    `,
    'ورود': () => `
      <h3>ورود با رمز یکبار مصرف</h3>
      <p>کد به موبایل شما ارسال شد :</p>
      <input type="text" class="form-control my-2" placeholder="مثلاً 123456">
      <button class="btn btn-primary">تأیید</button>
    `,
    'خروج': () => `
      <h3>خروج از حساب کاربری</h3>
      <p class="text-danger">شما با موفقیت خارج شدید .</p>
      <a href="login.html" class="btn btn-outline-secondary mt-3">بازگشت به ورود</a>
    `
  };

  menuList.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('list-group-item')) {
      [...menuList.children].forEach(el => el.classList.remove('active'));
      target.classList.add('active');

      const key = target.textContent.trim().split(' ')[0];
      const content = contentMap[key];
      if (content) {
        panelContent.innerHTML = content();
      }
    }
  });

  // پیش‌فرض نمایش پروفایل
  panelContent.innerHTML = contentMap['پروفایل']();
});
// تایمر برای فونت‌ها
function startDynamicTimer(timerId, durationInMinutes) {
  let countdownDate = new Date().getTime() + durationInMinutes * 60 * 1000;

  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById(timerId).innerHTML = "اتمام زمان";
    } else {
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById(timerId).innerHTML =
        hours + " ساعت " + minutes + " دقیقه " + seconds + " ثانیه ";
    }
  }, 1000);
}

window.onload = function () {
  // تایمر ۳ ساعته برای هر فونت (۱۸۰ دقیقه)
  startDynamicTimer("timer1", 180);
  startDynamicTimer("timer2", 180);
  startDynamicTimer("timer3", 180);
  startDynamicTimer("timer4", 180);
  startDynamicTimer("timer5", 180);
  startDynamicTimer("timer6", 180);
};

  
  // تغییر فونت بر اساس انتخاب کاربر
function changeFont(fontName) {
    var textArea = document.getElementById("fontTestArea");
    textArea.style.fontFamily = fontName;
  }
  
  /*ارشیو */
  function filterAndSortPosts() {
    const selectedCategory = document.getElementById('siteType').value;
    const posts = Array.from(document.querySelectorAll('.post'));
  
    posts.forEach(post => {
      const category = post.getAttribute('data-category');
      post.style.display = (selectedCategory === 'all' || selectedCategory === category) ? 'block' : 'none';
    });
  }
    const toggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    function setTheme(mode) {
      if (mode === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.innerHTML = '<i class="bi bi-brightness-high-fill"></i> حالت روشن';
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i> حالت تاریک';
        localStorage.setItem('theme', 'light');
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      const items = document.querySelectorAll("#menu-list li");
      const content = document.getElementById("user-panel-content");
    
      items.forEach((item) => {
        item.addEventListener("click", () => {
          items.forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
    
          // نمایش محتوای نمونه برای هر آیتم
          let html = `<h3>${item.textContent.trim()}</h3><p>محتوای مربوط به بخش ${item.textContent.trim()} در این قسمت نمایش داده می‌شود.</p>`;
          content.innerHTML = html;
          content.classList.remove("fade-in-content");
          void content.offsetWidth; // trick برای ریست انیمیشن
          content.classList.add("fade-in-content");
        });
      });
    });
   
document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-button');

  headers.forEach((btn) => {
    // کلیک برای انیمیشن
    btn.addEventListener('click', () => {
      const body = btn.closest('.accordion-item').querySelector('.accordion-body');
      // اگر در حال باز شدن است
      if (btn.getAttribute('aria-expanded') === 'false') {
        body.style.display = 'block';
        body.style.opacity = 0;
        body.style.transform = 'translateY(10px)';
        setTimeout(() => {
          body.style.transition = 'all 0.4s ease-out';
          body.style.opacity = 1;
          body.style.transform = 'translateY(0)';
        }, 20);
      }
    });
  });
});document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-item");
  items.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease";
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 300 + index * 200);
  });
});document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;
  const navbar = document.querySelector(".navbar");

  function setTheme(mode) {
    if (mode === "dark") {
      body.classList.add("dark-mode");
      navbar.classList.add("dark-mode");
      toggleBtn.innerHTML = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      navbar.classList.remove("dark-mode");
      toggleBtn.innerHTML = "🌙";
      localStorage.setItem("theme", "light");
    }
  }

  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);

  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode");
    setTheme(isDark ? "light" : "dark");
  });
});



//modal
 // گرفتن المان‌ها
  const forgotPasswordModal = document.getElementById('forgotPasswordModal');
  const cancelForgotPasswordBtn = document.getElementById('cancelForgotPassword');
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');

  // تابع باز کردن مودال
  function openForgotPasswordModal() {
    forgotPasswordModal.style.display = 'flex';
  }

  // تابع بستن مودال
  function closeForgotPasswordModal() {
    forgotPasswordModal.style.display = 'none';
  }

  // وقتی دکمه فراموشی رمز عبور در صفحه کلیک شود (لینک داخل فرم ورود)
  document.querySelector('a.link-secondary.text-decoration-none[href="#!"]').addEventListener('click', function(e){
    e.preventDefault();
    openForgotPasswordModal();
  });

  // دکمه انصراف
  cancelForgotPasswordBtn.addEventListener('click', closeForgotPasswordModal);

  // فرم ارسال لینک (می‌توانید اینجا درخواست ارسال لینک را اضافه کنید)
  forgotPasswordForm.addEventListener('submit', function(e){
    e.preventDefault();
    const userInput = document.getElementById('userContact').value.trim();
    if(userInput === ''){
      alert('لطفاً ایمیل یا شماره همراه را وارد کنید.');
      return;
    }
    // اینجا می‌توانید درخواست ارسال لینک بازیابی به سرور را اضافه کنید
    alert('لینک بازیابی به ' + userInput + ' ارسال شد.');
    closeForgotPasswordModal();
  });


  
