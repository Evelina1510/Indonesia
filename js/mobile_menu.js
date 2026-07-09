document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeMenu");
  const headerNav = document.getElementById("headerNav");

  menuBtn.addEventListener("click", () => {
    headerNav.classList.add("is-open");
  });

  closeBtn.addEventListener("click", () => {
    headerNav.classList.remove("is-open");
  });
});