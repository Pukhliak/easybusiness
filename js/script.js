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
