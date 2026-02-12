const form = document.querySelector(".subscribe");
const emailInput = form.querySelector("input");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    showToast("Введи коректний email 🙃", "error");
    return;
  }

  showToast("Ти успішно підписався 🎉", "success");
  emailInput.value = "";
});

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
