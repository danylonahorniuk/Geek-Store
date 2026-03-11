const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'geek-store-theme';

function applyTheme(theme) {
  const isDark = theme === 'dark';

  document.documentElement.classList.toggle('dark', isDark);
  document.body.classList.toggle('dark', isDark);
}

function enableThemeTransition() {
  document.documentElement.classList.add('theme-transition');

  requestAnimationFrame(() => {
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 220);
  });
}

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === 'dark' || savedTheme === 'light') {
  applyTheme(savedTheme);
}

themeToggle?.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  const nextTheme = isDark ? 'light' : 'dark';

  enableThemeTransition();
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});