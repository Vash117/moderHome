// render and rerender
import { html, render } from "./node_modules/lit-html/lit-html.js";

window.addEventListener("hashchange", (e) => {
  router(location.hash);
});

import renderCarosel from "./caroselView.js";
import renderContainers from "./containersView.js";
import renderGallery from "./gallery.js";
import steelHousesView from "./steelHousesView.js";
import SingleSteelHouseRender from "./singleSteelHouseView.js";
import renderContacts from "./contactsView.js";
import renderHouses from "./housesView.js";
import renderPannels from "./panelsView.js";
//endpoints
const paths = {
  "#home": renderCarosel(),
  "#containers": renderContainers(),
  "#houses": renderHouses(),
  "#panels": renderPannels(),
  "#steel-houses": steelHousesView(),
  "#galery": renderGallery(),
  "#contacts": renderContacts(),
  "#steel-houses/1": SingleSteelHouseRender,
};
const root = document.getElementById("root");
const nav = document.querySelector("nav");
const politics = document.getElementById("politics");
const politicsUnderstandBtn = document.querySelector(".i-understand");
politics.addEventListener("click", togglePolitics);
politicsUnderstandBtn.addEventListener("click", togglePolitics);
nav.addEventListener("mouseleave", removeUnderscore);
nav.addEventListener("click", setActiveLink);
const underscore = document.getElementById("underscore");
const returnToTopBtn = document.getElementById("return-to-top");
const navLinks = Array.from(document.querySelectorAll(".nav-list a"));
navLinks.forEach((navLink) =>
  navLink.addEventListener("mouseenter", setUnderscore)
);
window.addEventListener("scroll", scrollBtnDisplay);
returnToTopBtn.addEventListener("click", srollToTop);
const burgerOpen = document.querySelector(".burger");
burgerOpen.addEventListener("click", openBurgerMenu);
const burgerCloseBtn = document.querySelector(".close-burger");
burgerCloseBtn.addEventListener("click", closeBurgerMenu);
function router(path) {
  if (path.includes("#steel-houses/")) {
    let itemIndex = window.location.hash.split("/")[1];
    let result = SingleSteelHouseRender(itemIndex);
    window.scrollTo("0px", "0px");
    render(result, root);
  } else {
    window.scrollTo("0px", "0px");
    let result = paths[path];
    render(result, root);
  }
}
window.addEventListener("resize", checkNavList);
//Initial render and after refresh render
router(location.hash || "#home");

//set nav links under score
function setUnderscore() {
  let cords = this.getBoundingClientRect();
  let NavCords = nav.getBoundingClientRect();
  underscore.style.width = cords.width * 0.7 + "px";
  underscore.style.transform = `translateX(${cords.x - NavCords.left}px)`;
}

function removeUnderscore(e) {
  underscore.style.width = "0px";
}

function setActiveLink(e) {
  if (e.target.tagName === "A") {
    navLinks.forEach((link) => link.classList.remove("selected"));
    e.target.classList.add("selected");
    if (window.getComputedStyle(burgerOpen).display === "block") {
      closeBurgerMenu();
    }
  }
}

function scrollBtnDisplay() {
  window.scrollY > window.innerHeight
    ? returnToTopBtn.classList.add("showBtn")
    : returnToTopBtn.classList.remove("showBtn");
}

function srollToTop() {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 50);
      srollToTop();
    }, 10);
  }
}

function togglePolitics(e) {
  const politicsModal = document.querySelector(".modal-politics");
  if (!politicsModal.classList.contains("active-politics")) {
    politicsModal.classList.add("active-politics");
  } else {
    politicsModal.classList.remove("active-politics");
  }
  window.scrollTo("0px", "0px");
  if (e.target.classList.contains("i-understand")) {
    setToken();
    document.querySelector(".see-politics").style.display = "none";
  }
}

function setToken() {
  localStorage.visitedModernHome = true;
}

function openBurgerMenu(e) {
  document.querySelector(".nav-list").style.display = "flex";
}

function closeBurgerMenu(e) {
  document.querySelector(".nav-list").style.display = "none";
}

function checkNavList() {
  if (window.screen.width >= 1100) {
    document.querySelector(".nav-list").style.display = "flex";
  } else {
    document.querySelector(".nav-list").style.display = "none";
  }
}
