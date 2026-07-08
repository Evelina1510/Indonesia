(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) return;

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle("is-open");

    openMenuBtn.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Закрытие меню при переходе на планшет/десктоп
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;

    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
})();