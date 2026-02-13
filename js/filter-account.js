const menuButtons = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".tab-section");

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // active button
    menuButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // active section
    const target = btn.dataset.section;
    sections.forEach(sec => {
      sec.classList.toggle("is-active", sec.dataset.section === target);
    });
  });
});
