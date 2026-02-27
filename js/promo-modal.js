(() => {
  const modal = document.getElementById('promoModal2');
  if (!modal) return;

  const openBtns = document.querySelectorAll('[data-open-promo]');
  const copyBtn = document.getElementById('promoModal2Copy');
  const codeEl = document.getElementById('promoModal2Code');
  const hintEl = document.getElementById('promoModal2Hint');

  const open = () => {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  if (hintEl) hintEl.textContent = '';

  // trigger code reveal animation reliably
  if (codeEl) {
    codeEl.classList.remove('is-revealed');
    // next frame
    requestAnimationFrame(() => {
      codeEl.classList.add('is-revealed');
    });
  }
};

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  };

  openBtns.forEach(btn => btn.addEventListener('click', open));

  modal.addEventListener('click', (e) => {
  const closeEl = e.target.closest('[data-close-promo]');
  if (closeEl) close();
});

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });

  copyBtn?.addEventListener('click', async () => {
  const code = (codeEl?.textContent || 'GEEK10').trim();

  const originalHTML = copyBtn.innerHTML;

  try {
    await navigator.clipboard.writeText(code);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }

  // змінюємо кнопку
  copyBtn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
    Скопійовано
  `;

  copyBtn.style.background = "#16a34a";
  copyBtn.style.color = "#fff";
  copyBtn.style.borderColor = "transparent";

  setTimeout(() => {
    copyBtn.innerHTML = originalHTML;
    copyBtn.style.background = "";
    copyBtn.style.color = "";
    copyBtn.style.borderColor = "";
  }, 2000);
});
})();