  const slider = document.getElementById('productSlider');
  const modal = document.getElementById('quickBuyModal');

  function slideProducts(dir) {
    const card = slider.querySelector('.na-card');
    slider.scrollBy({
      left: dir * (card.offsetWidth + 32),
      behavior: 'smooth'
    });
  }

  document.querySelectorAll('.na-quick').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation(); // щоб клік не пішов далі

      const card = e.target.closest('.na-card');

      document.getElementById('qbTitle').textContent = card.dataset.name;
      document.getElementById('qbDesc').textContent = card.dataset.description;
      document.getElementById('qbPrice').textContent = Number(card.dataset.price).toLocaleString() + ' ₴';
      document.getElementById('qbImage').src = card.dataset.image;
      document.getElementById('qbImage').alt = card.dataset.name;

      modal.classList.add('active');
    });
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });