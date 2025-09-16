// MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const fullScr = document.getElementById("full-scr");

menuBtn.addEventListener("click", () => {
  fullScr.classList.toggle("active");
  menuBtn.classList.toggle("active");

  if (menuBtn.classList.contains("active")) {
    menuBtn.textContent = "✕";  // show close icon
  } else {
    menuBtn.textContent = "Menu"; // back to menu
  }
});

// locomotive js
function locomotiveAnimation() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
}

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    grabCursor: true,
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

// Run everything
locomotiveAnimation();
page4Animation();
swiperAnimation();
loaderAnimation();