// Carousel logic
const carousel = document.querySelector('.carousel');
const firstSlideImg = document.querySelector('.carousel .first-slide');
const secondSlideImg = document.querySelector('.carousel .second-slide');
let currentSlideIndx = 0;

const firstSlides = [
  '/assets/image1.jpg',
  '/assets/image3.jpg',
  '/assets/image5.jpg',
];

const secondSlides = [
  '/assets/image2.jpg',
  '/assets/image4.jpg',
  '/assets/image6.jpg',
];

// carousel slides transition
setInterval(() => {
  currentSlideIndx = (currentSlideIndx + 1) % firstSlides.length;
  firstSlideImg.style.opacity = `0`;
  secondSlideImg.style.opacity = `0`;
  setTimeout(() => {
    firstSlideImg.src = firstSlides[currentSlideIndx];
    secondSlideImg.src = secondSlides[currentSlideIndx];
    firstSlideImg.style.opacity = `1`;
    secondSlideImg.style.opacity = `1`;
  }, 800);
}, 2800);



// language
const toggleBtn = document.querySelector('.lang-toggle');
const langOptions = document.querySelector('.lang-options');
const langLabel = document.querySelector('.lang-selected');

// Toggle dropdown visibility
toggleBtn.addEventListener('click', () => {
  langOptions.style.display =
    langOptions.style.display === 'flex' ? 'none' : 'flex';
});

// Handle language selection
langOptions.querySelectorAll('li').forEach((item) => {
  item.addEventListener('click', () => {
    langLabel.textContent = item.textContent;
    langOptions.style.display = 'none';
  });
});
