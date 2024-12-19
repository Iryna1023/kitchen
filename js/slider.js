const buttons = document.querySelectorAll('.slider-button');
const slides = document.querySelector('.slider__slider');
const totalSlides = document.querySelectorAll('.slider-slide').length;

let slideWidth = 260;
if (window.innerWidth <= 768) {
  slideWidth = 160;
} else if (window.innerWidth <= 320) {
  slideWidth = 120;
}

const slidesToShow = 2;
let currentSlide = 0;

function moveToSlide(index) {
  if (index >= totalSlides) {
    index = 0;
  } else if (index < 0) {
    index = totalSlides - 1;
  }

  const offset = index * -(slideWidth * slidesToShow);
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(${offset}px)`;

  buttons.forEach(btn => btn.classList.remove('active'));
  if (buttons[index]) {
    buttons[index].classList.add('active');
  }

  currentSlide = index;
}

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const slideIndex = parseInt(e.target.getAttribute('data-slide'));
    moveToSlide(slideIndex);
  });
});

function nextSlide() {
  const nextIndex = (currentSlide + 1) % totalSlides;
  moveToSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  moveToSlide(prevIndex);
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    slideWidth = 160;
  } else if (window.innerWidth <= 320) {
    slideWidth = 120;
  } else {
    slideWidth = 260;
  }

  moveToSlide(currentSlide);
});

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  touchEndX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (touchStartX - touchEndX > 50) {
    nextSlide();
  } else if (touchEndX - touchStartX > 50) {
    prevSlide();
  }
}

slides.addEventListener('touchstart', handleTouchStart);
slides.addEventListener('touchmove', handleTouchMove);
slides.addEventListener('touchend', handleTouchEnd);



