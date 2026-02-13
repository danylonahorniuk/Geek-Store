const chatBtn = document.querySelector(".chat-box button");
const modal = document.getElementById("chatModal");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal-close");

if (chatBtn) {
  chatBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });
}

function closeModal() {
  modal.classList.remove("active");
}

overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
