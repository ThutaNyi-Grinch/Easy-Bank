const btnHambuger = document.querySelector("#hamburger");
const header = document.querySelector("#header");
const overlay = document.querySelector("#overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");
btnHambuger.addEventListener("click", function () {
  console.log("Click menu");
  if (header.classList.contains("open")) {
    body.classList.remove("no_scroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.add("fadeOut");
      element.classList.remove("fadeIn");
    });
  } else {
    body.classList.add("no_scroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fadeOut");
      element.classList.add("fadeIn");
    });
  }
});
