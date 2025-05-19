document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar-box .menu");
  const navbar = document.querySelector(".navbar");

  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navbarMenu.classList.toggle("active");
      document.body.style.overflow = navbarMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navbarMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
});
