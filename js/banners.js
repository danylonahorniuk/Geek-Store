const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const counter = document.querySelector('.counter');

let index = 0;

function showSlide(i){

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');

  counter.textContent = `${i+1} / ${slides.length}`;
}

/* arrows */

document.querySelector('.right').onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector('.left').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

/* dots click */

dots.forEach((dot,i)=>{
  dot.onclick = ()=>{
    index = i;
    showSlide(index);
  }
});

/* autoplay */

setInterval(()=>{
  index = (index + 1) % slides.length;
  showSlide(index);
},6000);