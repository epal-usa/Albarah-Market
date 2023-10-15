var swiper = new Swiper(".heroSwiper", {
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination: {
    el: ".mainSliderPagination",
    clickable: true
  },
  navigation: {
    nextEl: ".heroSwiper-button-next",
    prevEl: ".heroSwiper-button-prev"
  },
  pagination: {
    el: ".heroPagination",
    clickable: true
  }
});
$(document).ready(function () {
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    // easing: "linear",
    once: true,
  });
});
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (this.scrollY > 120) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
var productsSwiper = new Swiper(".productsSwiper", {
  loop: true,
  spaceBetween: 28,
  speed: 1000,
  navigation: true,
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    992: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    },
    350: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: ".productsSwiper-button-next",
    prevEl: ".productsSwiper-button-prev"
  }
});
if (navigator.geolocation) {
  const pos = [42.365346, -71.108931 ];
  navigator.geolocation.getCurrentPosition(
    function(position) {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      const map = L.map("mapLocation").setView(pos, 14);
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker(coords).addTo(map).bindPopup("This is your Location");
      L.marker(pos).addTo(map).bindPopup("Albarah Market").openPopup();
    },
    function() {
      alert("cannot get current position");
    }
  );
}
let navLinks = document.querySelectorAll(".nav-link a");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
let toggler = document.querySelector(".menu-btn");
let menue = document.querySelector("nav");
toggler.addEventListener("click", () => {
  toggler.querySelector(".menu-bar").classList.toggle("menu-transform");
  menue.classList.toggle("show");
  document.querySelector("body").classList.toggle("no-scroll");
});
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    toggler.querySelector(".menu-bar").classList.remove("menu-transform");
    document.querySelector("body").classList.toggle("no-scroll");
    menue.classList.remove("show");
  });
});
