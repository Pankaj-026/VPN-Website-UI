/*========================= SHOW MENU =========================*/
const navClose = document.getElementById("nav-close"),
  navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*========================= SHOW SIGNIN =========================*/
const signinClose = document.getElementById("signin-close"),
  signin = document.getElementById("signin-content"),
  signinToggle = document.getElementById("nav-signin");

if (signinToggle) {
  signinToggle.addEventListener("click", () => {
    signin.classList.add("show-signin");
  });
}

if (signinClose) {
  signinClose.addEventListener("click", () => {
    signin.classList.remove("show-signin");
  });
}

/*========================= SHOW SIGNUP =========================*/
const signupClose = document.getElementById("signup-close");
const signup = document.getElementById("signup-content");
const signupToggle = document.getElementById("nav-signup");

if (signupToggle) {
  signupToggle.addEventListener("click", () => {
    signup.classList.add("show-signup");
  });
}

if (signupClose) {
  signupClose.addEventListener("click", () => {
    signup.classList.remove("show-signup");
  });
}

/*========================= SHOW SIGNUP & IN ONCLICK =========================*/
// Sign in page
const signupClick = document.getElementById("signup-onclick");

if (signupClick) {
  signupClick.addEventListener("click", () => {
    signin.classList.remove("show-signin");
    signup.classList.add("show-signup");
  });
}

// Sign up page
const signinClick = document.getElementById("signin-onclick");

if (signinClick) {
  signinClick.addEventListener("click", () => {
    signup.classList.remove("show-signup");
    signin.classList.add("show-signin");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");

  this.scrollY >= 30
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: false,
  slidePerView: 3,
  centeredSlides: false,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  breakpoint: {
    1150: {
      slidePerView: 3,
      centeredSlides: false,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=================================== DARK LIGHT THEME ==========================================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// if user selected
const secletedTheme = localStorage.getItem("selected-theme"); 
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// we validatw if the user previuously chose a topic
if (secletedTheme) {
  document.body.classList[secletedTheme == "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[secletedTheme == "ri-moon-linne" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
  origin: 'top',
  duration: 1000,
  distance: '60px',
  delay: 400,
  reset: true,
})

// Home
sr.reveal('.home__data' , {delay:200 ,origin: 'left'})
sr.reveal('.home__image', {delay:200, origin: 'right'})

// service 
sr.reveal('.services__cards', {interval:300, delay: 300, distance: '120px'})

// Features
sr.reveal('.features__image', {delay:200, origin: 'right',distance:'100px' })
sr.reveal('.features__data', {delay:200, origin: 'left',distance:'100px'})


// Price
sr.reveal('.price__card', {interval:300, delay: 200, distance: '120px' , origin:'right'})

// Subscribe
sr.reveal('.subscribe', {interval:300, delay: 300, distance: '1020px' , origin:'left'})

//testimonial & footer
sr.reveal('.testimonial__container, .maps ,.footer__container', {interval:100, delay: 400, distance: '90px'})
