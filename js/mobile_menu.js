document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".header_menu_btn");
  const headerNav = document.querySelector(".header_nav");

  menuBtn.addEventListener("click", () => {
    headerNav.classList.toggle("is-open");
  });
});