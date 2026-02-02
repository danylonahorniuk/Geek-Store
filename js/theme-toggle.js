// Перемикач теми
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Зміна іконки
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️'; // Сонце
  } else {
    themeToggle.textContent = '🌙'; // Місяць
  }
});
