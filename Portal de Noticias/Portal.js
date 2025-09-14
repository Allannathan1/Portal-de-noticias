const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

let currentSlide = 0;

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselItems.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentSlide) {
      item.classList.add('active');
    }
  });
}


