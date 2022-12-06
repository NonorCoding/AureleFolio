const cursorDot = document.querySelector(".cursor-dot");
const cursor = document.querySelector(".cursor");

const anchor = document.querySelectorAll("a");

window.addEventListener("mousemove", function (e) {
  cursorDot.style.top = e.y + "px";
  cursorDot.style.left = e.x + "px";

  cursor.style.top = e.y + "px";
  cursor.style.left = e.x + "px";
});

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursorDot.classList.add("hover");
    cursor.style.display = "none";

  cursor.style.top = anc.getBoundingClientRect().top + "px";
  cursor.style.left = anc.getBoundingClientRect().left + "px";
  });
  anc.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("hover");
    cursor.style.display = "";
  });
});

/* ---------------------------------------------- */

const menuButton = document.querySelector(".menu-button");

const littleSquare = document.querySelectorAll(".little-square");
const bigSquare = document.querySelector(".big-square");

let activeButton = true;

menuButton.addEventListener("click", () => {
  if (activeButton === true) {
    document.querySelector(".menu-slider").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".menu-slider").style.opacity = 1;
    }, 1);

    littleSquare[0].classList.add("active");
    littleSquare[1].classList.add("active");

    bigSquare.classList.add("active");

    activeButton = false;
  } else {
    document.querySelector(".menu-slider").style.opacity = 0;

    setTimeout(() => {
      document.querySelector(".menu-slider").style.display = "none";
    }, 400);

    littleSquare[0].classList.remove("active");
    littleSquare[1].classList.remove("active");

    bigSquare.classList.remove("active");

    activeButton = true;
  }
});

const loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  // document.querySelector("body").style.overflow = "hidden";
  setTimeout(() => {
    document.querySelector("body").style.overflow = "";
    // loader.style.display = "none";
    console.log("page loaded");
  }, 3400);

  console.log("loading...");
});

let modeActive = true;
let langageActive = true;

const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");

const frenchLangage = document.querySelector(".french");
const englishLangage = document.querySelector(".english");

document.querySelector(".page-mode").addEventListener("click", () => {
  if (modeActive === true) {
    lightMode.classList.add("mode-unactive");
    darkMode.classList.remove("mode-unactive");
    darkMode.classList.add("mode-active");
    lightMode.classList.remove("mode-active");
    modeActive = false;
  } else {
    lightMode.classList.add("mode-active");
    darkMode.classList.remove("mode-active");
    darkMode.classList.add("mode-unactive");
    lightMode.classList.remove("mode-unactive");
    modeActive = true;
  }
});

document.querySelector(".page-langage").addEventListener("click", () => {
  if (langageActive === true) {
    frenchLangage.classList.add("mode-unactive");
    englishLangage.classList.remove("mode-unactive");
    englishLangage.classList.add("mode-active");
    frenchLangage.classList.remove("mode-active");
    langageActive = false;
  } else {
    frenchLangage.classList.add("mode-active");
    englishLangage.classList.remove("mode-active");
    englishLangage.classList.add("mode-unactive");
    frenchLangage.classList.remove("mode-unactive");
    langageActive = true;
  }
});

const main = document.querySelector('.main');
const background1 = document.querySelector('.img-background');
const bodyPage = document.querySelector('body');

window.addEventListener('scroll', () => {
  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var pos = window.innerHeight;
  
  if (scroll < pos) {
    main.style.position = 'fixed';
    main.style.top = '0px';
  } else {
    main.style.position = 'relative';
    main.style.top = pos + 'px';
  }
  
  main.style.padding = Math.max(0, Math.min(30, (scroll / (pos / 30)))) + 'px';
  background1.style.borderRadius = Math.max(0, Math.min(30, (scroll / (pos / 30)))) + 'px';
  
  document.documentElement.style.setProperty('--project-top', pos*2 + "px");
})