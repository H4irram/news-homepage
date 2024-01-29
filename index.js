"use strict";

const hamburgerIcon = document.querySelector(".hamburgerIcon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const hideMenuAndOverlay = () => {
  overlay.classList.add("hidden");
  closeIcon.classList.add("hidden");
  mobileMenu.classList.add("hidden");
};

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
});

closeIcon.addEventListener("click", hideMenuAndOverlay);
overlay.addEventListener("click", hideMenuAndOverlay);
