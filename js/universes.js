const toggleBtn = document.getElementById('universesToggle');
const moreBlock = document.getElementById('universeMore');

if (toggleBtn && moreBlock) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = moreBlock.classList.toggle('is-open');

    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    moreBlock.setAttribute('aria-hidden', String(!isOpen));

    toggleBtn.firstChild.textContent = isOpen ? 'Згорнути' : 'Показати більше';
  });
}
