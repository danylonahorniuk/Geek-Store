(function () {
  const savedTheme = localStorage.getItem('geek-store-theme');

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  });
})();