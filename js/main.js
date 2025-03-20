/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== SHOW ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__points", 1.5, { opacity: 0, y: -300, delay: 0.2 });
gsap.from(".home__plants-1", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home__plants-2", 1.2, { opacity: 0, x: 200, delay: 1 });
gsap.from(".home__rocket", 1.2, { opacity: 0, y: 300, delay: 0.3 });
gsap.from(".home__cloud-1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home__cloud-2", 1.2, { opacity: 0, x: 200, delay: 1.3 });
gsap.from(".home__content", 1.2, { opacity: 0, y: -100, delay: 1.3 });
gsap.from(".home__title img", 1.2, { opacity: 0, x: 100, delay: 1.6 });
