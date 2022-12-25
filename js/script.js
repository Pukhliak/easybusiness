// bottom to top
document.addEventListener("DOMContentLoaded", () => {
  let to_top_btn = document.querySelector(".to-up");

  window.onscroll = function () {
    if (window.pageYOffset > 580) {
      to_top_btn.style.display = "block";
    } else {
      to_top_btn.style.display = "none";
    }
  };
});

// theme-switcher

const toggleSwitch = document.querySelector(
  '.theme-switch-wrapper input[type="checkbox"]'
);

function switchTheme(e) {
  let lightThemeText = document.getElementById("light-theme-text");
  let darkThemeText = document.getElementById("dark-theme-text");
  darkThemeText.classList.toggle("disabled");
  lightThemeText.classList.toggle("disabled");
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

// drop-down
const dropDownArrow = document.querySelector(".header__nav__focus");
const dropDownMenu = document.querySelector("#drop-down");

dropDownArrow.addEventListener("click", function () {
  dropDownMenu.classList.toggle("header__nav__drop-down");
  dropDownArrow.classList.toggle("down");
});

// burger-menu
const nav = document.querySelector(".header__nav");
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", function () {
  this.classList.toggle("open");
  nav.classList.toggle("show-nav");
});
