// quiz.js — robust version (event delegation + debug)

(() => {
  // ---- DEBUG: confirm script is loaded
  console.log("[quiz] script loaded ✅");

  const QUIZ_PROMO = "GEEK15";
  const PASS_SCORE = 4;

  const QUESTIONS = [
    {
      q: "Хто є справжнім ім’ям Залізної людини (Iron Man)?",
      options: ["Тоні Старк", "Стів Роджерс", "Пітер Паркер", "Брюс Беннер"],
      correct: 0
    },
    {
      q: "Як звати малюка з серіалу The Mandalorian?",
      options: ["Грогу", "Йода", "Чубакка", "R2-D2"],
      correct: 0
    },
    {
      q: "Який молот належить Тору?",
      options: ["Мйольнір", "Екскалібур", "Гламдрінг", "Клинок Хаосу"],
      correct: 0
    },
    {
      q: "Як називається корабель Хана Соло?",
      options: ["Тисячолітній сокіл", "Зоряний руйнівник", "Нормандія", "Ентерпрайз"],
      correct: 0
    },
    {
      q: "Кого кусає павук у Марвел?",
      options: ["Людину-павука", "Бетмена", "Дедпула", "Доктора Стренджа"],
      correct: 0
    }
  ];

  // ---- Grab modals
  const quizModal = document.getElementById("quizModal");
  const quizRules = document.getElementById("quizRules");

  console.log("[quiz] quizModal:", !!quizModal, "quizRules:", !!quizRules);

  // If modals not found — stop and show clear error
  if (!quizModal || !quizRules) {
    console.error("[quiz] ❌ Missing #quizModal or #quizRules in HTML. Add modals before </body>.");
    return;
  }

  // ---- Elements inside quiz modal
  const quizBar = document.getElementById("quizBar");
  const quizStep = document.getElementById("quizStep");
  const quizScoreEl = document.getElementById("quizScore");
  const quizQuestionEl = document.getElementById("quizQuestion");
  const quizOptionsEl = document.getElementById("quizOptions");

  const btnPrev = document.getElementById("quizPrev");
  const btnNext = document.getElementById("quizNext");

  const quizResult = document.getElementById("quizResult");
  const quizResultBadge = document.getElementById("quizResultBadge");
  const quizResultTitle = document.getElementById("quizResultTitle");
  const quizResultText = document.getElementById("quizResultText");
  const quizResultCodeRow = document.getElementById("quizResultCodeRow");
  const quizPromoEl = document.getElementById("quizPromo");
  const quizCopy = document.getElementById("quizCopy");
  const quizCopyHint = document.getElementById("quizCopyHint");
  const quizAgain = document.getElementById("quizAgain");

  // Minimal sanity check
  const required = [
    quizBar, quizStep, quizScoreEl, quizQuestionEl, quizOptionsEl,
    btnPrev, btnNext,
    quizResult, quizResultBadge, quizResultTitle, quizResultText,
    quizResultCodeRow, quizPromoEl, quizCopy, quizCopyHint, quizAgain
  ];
  if (required.some(el => !el)) {
    console.error("[quiz] ❌ Some required quiz elements are missing in the modal HTML.");
    return;
  }

  // ---- State
  let index = 0;
  let chosen = new Array(QUESTIONS.length).fill(null);

  function openModal(el) {
    el.classList.add("is-open");
    el.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal(el) {
    el.classList.remove("is-open");
    el.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function resetQuiz() {
  index = 0;
  chosen = new Array(QUESTIONS.length).fill(null);

  // ЗАЛІЗНО ховаємо результат
  quizResult.hidden = true;
  quizResult.style.display = "none";

  quizResultCodeRow.hidden = true;

  quizCopyHint.textContent = "";
  quizPromoEl.textContent = QUIZ_PROMO;

  render();
}

  function scoreNow() {
    let s = 0;
    for (let i = 0; i < QUESTIONS.length; i++) {
      if (chosen[i] === QUESTIONS[i].correct) s++;
    }
    return s;
  }

  function render() {
    const total = QUESTIONS.length;
    const q = QUESTIONS[index];

    quizQuestionEl.textContent = q.q;
    quizOptionsEl.innerHTML = "";

    q.options.forEach((text, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quizOpt";
      b.textContent = text;
      if (chosen[index] === i) b.classList.add("is-selected");

      b.addEventListener("click", () => {
        chosen[index] = i;
        render();
      });

      quizOptionsEl.appendChild(b);
    });

    quizStep.textContent = `Питання ${index + 1}/${total}`;
    const s = scoreNow();
    quizScoreEl.textContent = `${s} правильних`;

    // progress: (index/total) while answering, 100% on finish
    quizBar.style.width = `${Math.round((index / total) * 100)}%`;

    btnPrev.disabled = index === 0;
    btnNext.disabled = chosen[index] === null;
    btnNext.textContent = (index === total - 1) ? "Завершити" : "Далі";
  }

  function showResult() {
  const s = scoreNow();
  quizBar.style.width = "100%";

  quizResult.hidden = false;
  quizResult.style.display = "flex"; // важливо

  if (s >= PASS_SCORE) {
    quizResultBadge.textContent = "Успіх ✅";
    quizResultTitle.textContent = `Круто! ${s}/5 — знижка твоя 🎉`;
    quizResultText.textContent = "Ось твій промокод на -15%. Використай його в кошику під час оформлення.";
    quizResultCodeRow.hidden = false;
  } else {
    quizResultBadge.textContent = "Не пощастило 😅";
    quizResultTitle.textContent = `Спроба непогана: ${s}/5`;
    quizResultText.textContent = "Цього разу не зійшлось. Спробуй ще раз — питання легкі 🙂";
    quizResultCodeRow.hidden = true;
  }
}

  // ---- Event delegation for open buttons
  document.addEventListener("click", (e) => {
    const openQuizBtn = e.target.closest("[data-open-quiz]");
    const openRulesBtn = e.target.closest("[data-open-quiz-rules]");

    if (openQuizBtn) {
      console.log("[quiz] open quiz ✅");
      quizResult.hidden = true;
    quizResult.style.display = "none";
      openModal(quizModal);
      resetQuiz();
      return;
    }

    if (openRulesBtn) {
      console.log("[quiz] open rules ✅");
      openModal(quizRules);
      return;
    }

    // close quiz
    if (e.target.closest("[data-quiz-close]") || e.target === quizModal.querySelector(".quizModal__overlay")) {
      if (quizModal.classList.contains("is-open")) {
        console.log("[quiz] close quiz ✅");
        closeModal(quizModal);
        resetQuiz();
      }
      return;
    }

    // close rules
    if (e.target.closest("[data-rules-close]") || e.target === quizRules.querySelector(".quizRules__overlay")) {
      if (quizRules.classList.contains("is-open")) {
        console.log("[quiz] close rules ✅");
        closeModal(quizRules);
      }
      return;
    }
  });

  // Esc closes
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (quizRules.classList.contains("is-open")) closeModal(quizRules);
    if (quizModal.classList.contains("is-open")) {
      closeModal(quizModal);
      resetQuiz();
    }
  });

  // navigation
  btnPrev.addEventListener("click", () => {
    if (index > 0) index--;
    render();
  });

  btnNext.addEventListener("click", () => {
    const total = QUESTIONS.length;
    if (index < total - 1) {
      index++;
      render();
    } else {
      showResult();
    }
  });

  // retry
  quizAgain.addEventListener("click", () => resetQuiz());

  // copy promo
  quizCopy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(QUIZ_PROMO);
      quizCopyHint.textContent = "Скопійовано ✅";
      setTimeout(() => (quizCopyHint.textContent = ""), 1800);
    } catch {
      quizCopyHint.textContent = "Не вдалось скопіювати. Скопіюй вручну 🙂";
    }
  });

  // init
  resetQuiz();
})();