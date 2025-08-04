'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-navbar-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements([navToggleBtn, ...navbarLinks], "click", toggleNavbar);



/**
 * HEADER SHADOW
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * THEME TOGGLER
 */

const themeToggleBtn = document.querySelector("[data-theme-toggle-btn]");

themeToggleBtn.addEventListener("click", function () {

  if (document.documentElement.getAttribute("data-theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }

});

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

/**
 * navbar toggle
 */





/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});