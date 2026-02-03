const slides = document.querySelectorAll('.slide');
const counter = document.querySelector('.counter');
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
  counter.textContent = `${i + 1} / ${slides.length}`;
}

document.querySelector('.right').onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector('.left').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);
