const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'geek-store-theme';

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  applyTheme(savedTheme);
}

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  const nextTheme = isDark ? 'light' : 'dark';

  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});