const slider = document.getElementById('productSlider');
const modal = document.getElementById('quickBuyModal');

/* ================= SLIDER ================= */
function slideProducts(dir) {
  const card = slider.querySelector('.na-card');
  slider.scrollBy({
    left: dir * (card.offsetWidth + 32),
    behavior: 'smooth'
  });
}

/* ================= OPEN MODAL ================= */
document.querySelectorAll('.na-quick').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();

    const card = e.target.closest('.na-card');

    document.getElementById('qbTitle').textContent = card.dataset.name;
    document.getElementById('qbDesc').textContent = card.dataset.description;

    const price = Number(card.dataset.price);

    document.getElementById('qbPrice').textContent =
      price.toLocaleString() + ' ₴';

    document.getElementById('qbImage').src = card.dataset.image;
    document.getElementById('qbImage').alt = card.dataset.name;

    modal.classList.add('active');
  });
});

/* ================= CLOSE MODAL ================= */
function closeModal() {
  modal.classList.remove('active');
}

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

/* ================= ADD TO CART ================= */
document.querySelector('.qb-add').addEventListener('click', () => {
  console.log('Додано 1 товар у кошик');
  closeModal();
});