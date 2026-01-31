document.addEventListener("DOMContentLoaded", () => {

  // ハンバーガーメニュー
  const hamburger = document.getElementById("hamburger-sp");
  const menu = document.getElementById("nav-menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("is-open");
    });
  }

  // スクロールでフェードイン
  const targets = document.querySelectorAll(".tool-card, .exp-item, #about p");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.2
  });

  targets.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
  });

});
