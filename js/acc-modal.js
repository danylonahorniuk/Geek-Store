const modal = document.getElementById('ordersModal');
const openBtn = document.getElementById('openOrdersModal');

function openModal(){
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  openModal();
});

modal.addEventListener('click', (e) => {
  if (e.target.closest('[data-close="true"]')) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});
