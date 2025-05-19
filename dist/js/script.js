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

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

 function kirimPesan() {
    // Ambil nilai dari form
    const nama = document.getElementById("nama").value;
    const telepon = document.getElementById("telepon").value;
    const produk = document.getElementById("produk").value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value;
    
    // Buat pesan WhatsApp
    const pesan = `Halo, saya ${nama}.\n` +
                  `Saya ingin memesan ${produk} sebanyak ${jumlah} pcs.\n` +
                  `Alamat pengiriman: ${alamat}.\n` +
                  `Nomor telepon: ${telepon}.`;

    // Ganti dengan nomor WhatsApp tujuan (gunakan format internasional tanpa +)
    const nomorWa = "62895397149220"; // Ganti dengan nomor tujuan
    
    // Buat URL WhatsApp
    const waUrl = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
    
    // Buka WhatsApp
    window.open(waUrl, "_blank");
  }