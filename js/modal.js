const track   = document.getElementById('carouselTrack');
const outer   = document.getElementById('carouselOuter');
const dotsEl  = document.getElementById('carouselDots');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

const VISIBLE = 3;
const GAP     = 16;
const total   = track.querySelectorAll('.carousel__slide').length;
const steps   = total - VISIBLE + 1;

let current = 0;

for (let i = 0; i < steps; i++) {
  const dot = document.createElement('button');
  dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', 'Slide ' + (i + 1));
  dot.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(dot);
}

function slideWidth() {
  const slide = track.querySelector('.carousel__slide');
  if (!slide) return 0;
  return slide.getBoundingClientRect().width + GAP;
}

function goTo(index) {
  current = index;
  track.style.transform = `translateX(-${current * slideWidth()}px)`;
  dotsEl.querySelectorAll('.carousel__dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}

btnPrev.addEventListener('click', () => goTo((current - 1 + steps) % steps));
btnNext.addEventListener('click', () => goTo((current + 1) % steps));

window.addEventListener('resize', () => goTo(current));


