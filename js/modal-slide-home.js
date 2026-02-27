const modal = document.getElementById('quickBuyModal');

/* ================= SLIDER (UNIVERSAL) ================= */
function slideProducts(sliderId, dir) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;

  // шукаємо будь-яку картку (для na і ts)
  const card = slider.querySelector('.na-card, .ts-card');
  if (!card) return;

  // gap між картками (у тебе 2rem = 32px, але краще зчитати реально)
  const gap = parseFloat(getComputedStyle(slider).gap || 0);
  const step = card.offsetWidth + gap;

  slider.scrollBy({
    left: dir * step,
    behavior: 'smooth'
  });
}

/* ================= OPEN MODAL (NA + TS) ================= */
function openQuickBuyFromButton(btn) {
  const card = btn.closest('.na-card, .ts-card');
  if (!card) return;

  document.getElementById('qbTitle').textContent = card.dataset.name || '';
  document.getElementById('qbDesc').textContent = card.dataset.description || '';

  const price = Number(card.dataset.price || 0);
  document.getElementById('qbPrice').textContent = price.toLocaleString() + ' ₴';

  const img = document.getElementById('qbImage');
  img.src = card.dataset.image || '';
  img.alt = card.dataset.name || '';

  modal.classList.add('active');
}

// делегування подій: працює і для .na-quick і для .ts-quick
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.na-quick, .ts-quick');
  if (!btn) return;

  e.stopPropagation();
  openQuickBuyFromButton(btn);
});

/* ================= CLOSE MODAL ================= */
function closeModal() {
  modal.classList.remove('active');
}

modal.addEventListener('click', e => {
  // закривати, якщо клік по фону (оверлею), а не по контенту
  if (e.target === modal) closeModal();
});

/* ================= ADD TO CART ================= */
document.querySelector('.qb-add').addEventListener('click', () => {
  console.log('Додано 1 товар у кошик');
  closeModal();
});