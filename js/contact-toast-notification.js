const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
  const nameInput = contactForm.querySelector('input[type="text"]');
  const emailInput = contactForm.querySelector('input[type="email"]');
  const topicSelect = contactForm.querySelector("select");
  const messageTextarea = contactForm.querySelector("textarea");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = (nameInput?.value || "").trim();
    const email = (emailInput?.value || "").trim();
    const topic = (topicSelect?.value || "").trim();
    const message = (messageTextarea?.value || "").trim();

    if (!name) {
      showToast("Вкажіть ім'я 🙂", "error");
      return;
    }

    if (!validateEmail(email)) {
      showToast("Введіть коректний email 🙃", "error");
      return;
    }

    if (!topic || topic === "Оберіть тему") {
      showToast("Оберіть тему звернення 🙂", "error");
      return;
    }

    if (message.length < 10) {
      showToast("Повідомлення має бути трохи детальнішим 🙂", "error");
      return;
    }

    showToast("Вітаю 🎉 Повідомлення успішно надіслано!", "success");
    contactForm.reset();
  });
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // запуск анімації
  setTimeout(() => toast.classList.add("show"), 10);

  // авто-закриття
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
