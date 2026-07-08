const track = document.getElementById("carouselTrack");
const dotsEl = document.getElementById("carouselDots");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

const total = track.querySelectorAll(".carousel__slide").length;

function visibleSlides() {
  return window.innerWidth <= 480 ? 1 : 3;
}

function gap() {
  return window.innerWidth <= 480 ? 0 : 16;
}

function getSteps() {
  return total - visibleSlides() + 1;
}

let current = 0;

function slideWidth() {
  const slide = track.querySelector(".carousel__slide");
  return slide.getBoundingClientRect().width + gap();
}

function createDots() {
  dotsEl.innerHTML = "";

  for (let i = 0; i < getSteps(); i++) {
    const dot = document.createElement("button");
    dot.className = "carousel__dot";
    if (i === current) dot.classList.add("active");

    dot.addEventListener("click", () => goTo(i));

    dotsEl.appendChild(dot);
  }
}

function goTo(index) {
  const steps = getSteps();

  if (index < 0) index = steps - 1;
  if (index >= steps) index = 0;

  current = index;

  track.style.transform = `translateX(-${current * slideWidth()}px)`;

  document.querySelectorAll(".carousel__dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

btnPrev.addEventListener("click", () => goTo(current - 1));
btnNext.addEventListener("click", () => goTo(current + 1));

window.addEventListener("resize", () => {
  const steps = getSteps();

  if (current > steps - 1) {
    current = steps - 1;
  }

  createDots();
  goTo(current);
});

createDots();
goTo(0);