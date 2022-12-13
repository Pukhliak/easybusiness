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
