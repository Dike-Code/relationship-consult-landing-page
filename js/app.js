/** @format */
const hero = document.querySelector(".hero");
const subhero = document.querySelector(".subHero");
const showMenu = document.querySelector(".toggle");
const nav = document.querySelector(".navbar");
const up = document.querySelectorAll(".slideUp");
const right = document.querySelectorAll(".slideRight");

window.addEventListener("DOMContentLoaded", function () {
   setInterval(() => {
      hero.classList.add("active");
   }, 0.5);
});

window.addEventListener("scroll", function () {
   sub = subhero.getBoundingClientRect().top;
   let height = window.innerHeight;

   if (sub < height) {
      subhero.classList.add("active");
   } else {
      subhero.classList.remove("active");
   }

   up.forEach((ups) => {
      c = ups.getBoundingClientRect().top;
      height = window.innerHeight;

      if (c < height) {
         ups.classList.add("show");
      } else {
         ups.classList.remove("show");
      }
   });

   right.forEach((right) => {
      r = right.getBoundingClientRect().top;
      let rightH = window.innerHeight;

      if (r < rightH) {
         right.classList.add("show");
      } else {
         right.classList.remove("show");
      }
   });
});

showMenu.addEventListener("click", function () {
   nav.classList.toggle("show");
});
